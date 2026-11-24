import{r as __ns}from"./autopilot-DHiilXQt.js";import{C as V3,g as Euler,x as Quat,y as Mat4}from"./index-Bcu-XILK-b9ea4f.js";
// Project Skyfall camera, v9.7 (hand-written replacement for the camera chunk; same exports as before).
// Views: chase, level (close and level), cine (shot director), high, helmet. Each has a wingsuit and a canopy form.
// Chase and high in the wingsuit keep the v9.5.2 spring and clamps unchanged. Everything else is placed analytically
// from a smoothed frame that follows the pilot, so nothing fights a constraint and nothing jumps by a frame.
const UP = new V3(0, 1, 0);
const sstep = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const ease = (x) => { x = clamp(x, 0, 1); return x * x * x * (x * (6 * x - 15) + 10); };   // smootherstep: no kick in acceleration at either end
const ek = (rate, dt) => 1 - Math.exp(-dt * rate);
const wrap = (a) => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = (a) => a[Math.floor(Math.random() * a.length)];
// wingsuit chase and high (and the old ones kept for reference): d back [base, +speed], u up, la look ahead, lu look height,
// k spring stiffness, fov offset, fs widening with speed, roll with the suit
const VIEWS = {
  chase: { d: [5.6, 2.2], u: [1.9, 0.5], la: [16, 10], lu: 1.2, k: 70, fov: 0, fs: 25, side: 0, roll: 0.2 },
  high: { d: [8.5, 3], u: [10, 3.5], la: [42, 26], lu: -3, k: 40, fov: 2, fs: 20, side: 0, roll: 0.1 },
};
// canopy views: back and up from the pilot (m), pitch of the lens (rad, down is negative), fov offset from the base
const CANOPY = {
  chase: { back: 9.5, up: 6.2, pitch: -0.62, fov: 2, label: 'Canopy · three-quarter' },   // behind and above, looking down past the pilot at the ground ahead
  level: { back: 4.4, up: 1.9, pitch: -0.42, fov: 10, label: 'Canopy · close' },          // close over the shoulder: below and in front both in frame
  high: { back: 12, up: 23, pitch: -1.02, fov: -2, label: 'Canopy · overhead' },          // high and steep: the target and your line to it
  helmet: { label: 'Canopy · first person' },
  cine: { label: 'Canopy · cinematic' },
};
const WINGLABEL = { chase: 'Chase', level: 'Close and level', cine: 'Cinematic', high: 'High', helmet: 'Helmet' };
const vdir = (yaw, pitch) => new V3(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
const lookQ = (pos, target, up = UP) => new Quat().setFromRotationMatrix(new Mat4().lookAt(pos, target, up));

class ChaseCam {
  constructor(app) {
    this.app = app; this.pos = new V3(); this.vel = new V3(); this.dir = new V3(0, -0.3, 1).normalize(); this.look = new V3();
    this.mode = 'chase'; this.fov = 72; this.baseFov = 70; this.roll = 0; this.t = 0; this.init = false; this.q = new Quat();
    this.yaw = 0; this.pitch = -0.2; this.lift = 0; this.shot = null; this.blend = null; this.cut = false; this.dShot = false;
  }
  reset() { this.init = false; this.shot = null; this.blend = null; this.dsh = null; this.wasCanopy = false; this.lift = 0; this.springOn = false; this.lastHelm = false; this.dShot = false; }
  label(mode, canopy) { return canopy ? (CANOPY[mode] || {}).label || mode : WINGLABEL[mode] || mode; }
  canopyLabel(mode) { return this.label(mode, true); }
  markCut() { this.cut = true; const e = this.app.engine; if (e.post) e.post.reset = 1; this.blend = null; }
  // terrain: the clearance needed at p, plus whatever keeps a line of sight to the pilot
  need(p, P, env, clear) {
    let y = env.height(p.x, p.z) + clear;
    for (const f of [0.25, 0.5, 0.75]) { const mx = P.x + (p.x - P.x) * f, mz = P.z + (p.z - P.z) * f, my = P.y + (p.y - P.y) * f, g = env.height(mx, mz) + 0.8; if (g > my) y = Math.max(y, p.y + (g - my) / f); }
    return y;
  }
  occluded(p, P, env) { for (const f of [0.2, 0.4, 0.6, 0.8]) { const mx = P.x + (p.x - P.x) * f, mz = P.z + (p.z - P.z) * f, my = P.y + (p.y - P.y) * f; if (env.height(mx, mz) + 0.5 > my) return true; } return env.height(p.x, p.z) + 0.6 > p.y; }
  // smoothed lift: rises quickly but never in one frame, settles back slowly
  lifted(p, P, env, dt, clear = 1.1) {
    // what the ground needs here and a third of a second ahead, so the camera starts rising before the rock arrives
    const ahead = this.vs ? p.clone().addScaledVector(this.vs, 0.35) : p;
    const n = Math.max(this.need(p, P, env, clear), env.height(ahead.x, ahead.z) + clear - (ahead.y - p.y)), want = Math.max(0, n - p.y);
    this.lift += (want - this.lift) * (want > this.lift ? ek(7, dt) : ek(1.4, dt));
    const out = p.clone(); out.y += this.lift; const floor = env.height(out.x, out.z) + 0.45; if (out.y < floor) out.y = floor; return out;
  }
  update(s, dt, env) {
    const e = this.app.engine, P = new V3(s.pos[0], s.pos[1], s.pos[2]), V = new V3(s.vel[0], s.vel[1], s.vel[2]), sp = V.length(); this.t += dt; this.cut = false;
    const canopy = s.mode === 'canopy' || s.mode === 'deploying' || s.mode === 'landed'; this.P0 = this.lastP || P; this.lastP = P;
    const vd = sp > 3 ? V.clone().multiplyScalar(1 / sp) : new V3(0, 0, 1); if (s.mode === 'freefall') { vd.set(0, -0.55, 0.83); if (s.fwd) vd.set(s.fwd[0] * 0.8, -0.6, s.fwd[2] * 0.8).normalize(); }
    this.dir.lerp(vd, ek(canopy ? 1.6 : 3.8, dt)).normalize();
    const speedF = sstep(35, 85, sp);
    // heading of travel (or of the body when there is little horizontal speed) and the flight-path angle
    const hs = Math.hypot(V.x, V.z); let hy = hs > 2.5 ? Math.atan2(V.x, V.z) : (s.fwd ? Math.atan2(s.fwd[0], s.fwd[2]) : this.yaw); const gam = s.mode === 'freefall' ? -0.9 : Math.atan2(V.y, Math.max(hs, 0.1));
    if (this.lastMode !== this.mode) { if (this.lastMode !== undefined && this.init) this.markCut(); this.lastMode = this.mode; this.shot = null; this.dsh = null; this.init = false; this.springOn = false; this.lastHelm = false; }
    if (this.orbited) { this.orbited = false; this.markCut(); }   // leaving a scripted orbit (the exit shot) is a cut
    if (!this.init) { this.yaw = hy; this.cyaw = hy; this.pitch = -0.2; this.lift = 0; }
    this.yaw = wrap(this.yaw + wrap(hy - this.yaw) * ek(canopy ? 2.4 : this.intense ? 7 : 5, dt));
    this.cyaw = wrap((this.cyaw ?? hy) + wrap(hy - (this.cyaw ?? hy)) * ek(canopy ? 1.0 : 1.3, dt));
    this.vs = (this.vs || V.clone()).lerp(V, ek(2.5, dt));
    let pose;
    if (canopy && !this.wasCanopy) { // into the canopy: blend from wherever the wingsuit camera was, unless the deploy shot takes it
      this.wasCanopy = true; this.shot = null; if (this.init) { if (this.pos.distanceTo(P) > 22) this.markCut(); else this.blend = { p: this.pos.clone().sub(this.P0 || this.pos), q: this.q.clone(), f: this.fov, t: 0, T: 1.1 }; }
    }
    if (!canopy) this.wasCanopy = false;
    if (canopy && this.dShot && this.mode !== 'helmet' && (s.deployT ?? 9) < 3.0 && s.mode !== 'landed') pose = this.deployShot(s, P, V, env, dt);
    else {
      if (this.dsh) { this.dsh = null; this.blend = { p: this.pos.clone().sub(this.P0 || this.pos), q: this.q.clone(), f: this.fov, t: 0, T: 1.3 }; }
      if (this.mode === 'helmet') pose = this.helmet(s, P, canopy, dt);
      else if (this.mode === 'cine') pose = this.director(s, P, V, env, dt, canopy, speedF);
      else if (canopy) pose = this.canopyView(s, P, env, dt);
      else if (this.mode === 'level') pose = this.level(s, P, V, env, dt, gam, speedF);
      else pose = this.chase(s, P, V, sp, env, dt, speedF);
    }
    // blend from the previous pose (entering the canopy, leaving the deploy shot, soft shot changes)
    if (this.blend) { const b = this.blend; b.t += dt; const k = ease(b.t / b.T); pose.p = P.clone().add(b.p).lerp(pose.p, k); pose.q = b.q.clone().slerp(pose.q, k); pose.f = b.f + (pose.f - b.f) * k; if (b.t >= b.T) this.blend = null; }
    this.pos.copy(pose.p); this.q.copy(pose.q); if (pose.f !== undefined) this.fov += (pose.f - this.fov) * (pose.snapF || this.cut ? 1 : ek(3, dt));
    this.init = true;
    // shake: speed and proximity, almost none below 200 km/h; held steadier in the close, cinematic and canopy views
    const prox = s.prox !== undefined ? s.prox : 99;
    const fast = this.intense ? sstep(35, 95, sp) : sstep(55, 115, sp), amp = (0.0045 * fast * fast + 0.0028 * sstep(20, 3, prox) * sstep(45, 85, sp) + 0.00012 * Math.min(1, sp / 55)) * (canopy ? 0.2 : 1) * (this.mode === 'cine' ? (this.shot && this.shot.fixed ? 0.15 : 0.35) : this.mode === 'level' ? 0.6 : 1) * (this.shakeScale ?? 1); const t = this.t;
    const sq = new Quat().setFromEuler(new Euler((Math.sin(t * 31.7) + Math.sin(t * 57.3 + 1)) * amp, (Math.sin(t * 27.1 + 2) + Math.sin(t * 49.9)) * amp, Math.sin(t * 23.3 + 4) * amp * 0.6));
    e.camWorld.copy(this.pos); e.camera.quaternion.copy(this.q).multiply(sq); e.camera.fov = this.fov; e.aglHint = this.pos.y - env.height(this.pos.x, this.pos.z); e.camCut = this.cut;
  }
  // ---- wingsuit chase and high: the v9.5.2 spring follow, unchanged ----
  chase(s, P, V, sp, env, a, h) {
    const M0 = VIEWS[this.mode] || VIEWS.chase, M = this.intense ? { ...M0, d: [M0.d[0] * 0.82, M0.d[1] * 1.2], fs: M0.fs * 1.7, k: M0.k * 1.3 } : M0;
    const n = M.d[0] + M.d[1] * h, o = new V3(this.dir.x, 0, this.dir.z); if (o.lengthSq() < 0.01) o.set(0, 0, 1); o.normalize();
    const back = this.dir.clone(), l = new V3(0, 1, 0).addScaledVector(back, -back.y); if (l.lengthSq() < 0.06) l.copy(o); l.normalize(); this.upP = (this.upP || l.clone()).lerp(l, ek(4, a)).normalize();
    const des = P.clone().addScaledVector(back, -n).addScaledVector(this.upP, M.u[0] + M.u[1] * h);
    if (!this.springOn) { this.pos.copy(des); this.vel.set(0, 0, 0); this.springOn = true; this.look.set(0, 0, 0); }
    const m = M.k, g = 2 * Math.sqrt(m), v = this.pos.clone().sub(des); this.vel.addScaledVector(v, -m * a).multiplyScalar(Math.max(0, 1 - g * a)); this.pos.addScaledVector(this.vel, a).addScaledVector(V, a);
    if (this.pos.distanceTo(P) > Math.max(n * 2.2, 26)) { this.pos.copy(des); this.vel.set(0, 0, 0); }
    let y = env.height(this.pos.x, this.pos.z) + 1.3; for (const f of [0.35, 0.7]) { const mx = P.x + (this.pos.x - P.x) * f, mz = P.z + (this.pos.z - P.z) * f, my = P.y + (this.pos.y - P.y) * f, gg = env.height(mx, mz) + 0.8; if (gg > my) y = Math.max(y, this.pos.y + Math.min(5, (gg - my) / f)); }
    if (this.pos.y < y) { this.pos.y += (y - this.pos.y) * Math.min(1, a * 14 + 0.3); if (this.vel.y < 0) this.vel.y = 0; }
    if (env.treesNear && s.agl < 60) env.treesNear(this.pos.x, this.pos.z, 6, (A, i) => { const dx = this.pos.x - A[i], dz = this.pos.z - A[i + 2], d = Math.hypot(dx, dz), yr = (this.pos.y - A[i + 1]) / A[i + 3]; if (yr < 0 || yr > 1) return; const R = Math.max(0.6, A[i + 7] * (1 - yr) * 0.8) + 0.5; if (d < R) { const pm = (R - d) / Math.max(d, 0.01); this.pos.x += dx * pm * 0.5; this.pos.z += dz * pm * 0.5; } });
    { const K = this.pos.clone().sub(P); let D = K.length(); const L = des.distanceTo(P), lo = Math.max(L * 0.8, 3.4), hi = L * 1.25;
      if (D > 0.001) { const B = -K.dot(back), mb = n * 0.55; if (B < mb) { K.addScaledVector(back, -(mb - B)); D = K.length(); } const C = Math.min(hi, Math.max(lo, D)), N = K.clone().multiplyScalar(1 / D); this.pos.copy(P).addScaledVector(N, C); if (C !== D) { const rv = this.vel.dot(N); this.vel.addScaledVector(N, -rv); } const G = env.height(this.pos.x, this.pos.z) + 0.9; if (this.pos.y < G) this.pos.y = G; } }
    const lookT = P.clone().addScaledVector(this.dir, M.la[0] + M.la[1] * h).addScaledVector(this.upP, M.lu); this.look.lerp(lookT, this.look.lengthSq() === 0 ? 1 : ek(14, a));
    const bank = s.bank || 0; this.roll += ((-Math.sin(bank) * M.roll) - this.roll) * ek(4, a);
    return { p: this.pos.clone(), q: lookQ(this.pos, this.look, this.upP.clone().applyAxisAngle(this.dir, this.roll)), f: this.baseFov + M.fov + M.fs * h };
  }
  // ---- close and level: right behind and a little above, horizon level, lens pitched only part of the way with the
  // flight path, so a pull-up still shows the ground and a dive still shows what is ahead. Fixed to the pilot: no lag. ----
  level(s, P, V, env, dt, gam, h) {
    this.springOn = false; this.lastHelm = false;
    const pT = clamp(-0.12 + 0.42 * gam, -0.72, 0.2); this.pitch += (pT - this.pitch) * ek(3.2, dt);
    const d = (3.3 + 0.6 * h) * (this.intense ? 0.86 : 1), up = 0.72 + 0.25 * h - 0.9 * Math.sin(this.pitch);
    const hd = new V3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const p = this.lifted(P.clone().addScaledVector(hd, -d).add(new V3(0, up, 0)), P, env, dt, 0.9);
    const bank = s.bank || 0; this.roll += ((-Math.sin(bank) * 0.06) - this.roll) * ek(4, dt);
    const f = vdir(this.yaw, this.pitch), u = UP.clone().applyAxisAngle(f, this.roll);
    return { p, q: lookQ(p, p.clone().add(f), u), f: this.baseFov + 4 + 16 * h };
  }
  // ---- first person: wingsuit as before; under canopy looking ahead and well down at the ground ----
  helmet(s, P, canopy, dt) {
    this.springOn = false;
    const q = new Quat(s.q[0], s.q[1], s.q[2], s.q[3]), head = new V3(0, 0.1, -0.72).applyQuaternion(q).add(P), fw = new V3(0, 0, -1).applyQuaternion(q), up = new V3(0, 1, 0).applyQuaternion(q);
    let lookDir, upv;
    if (canopy) { this.pitch += (-0.55 - this.pitch) * ek(4, dt); lookDir = vdir(this.yaw, this.pitch); upv = UP; }
    else { lookDir = fw.clone().addScaledVector(up, 0.28).normalize(); upv = up; }
    const p = head.clone().addScaledVector(lookDir, 0.16);
    const tq = lookQ(p, p.clone().add(lookDir), upv); const qq = this.init && this.lastHelm ? this.q.clone().slerp(tq, ek(18, dt)) : tq; this.lastHelm = true;
    return { p, q: qq, f: 104 };
  }
  // ---- canopy views: placed from the smoothed heading, lens pitched down; the ground ahead and below is in frame ----
  canopyView(s, P, env, dt) {
    this.springOn = false; this.lastHelm = false;
    const C = CANOPY[this.mode] || CANOPY.chase, hd = new V3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const p = this.lifted(P.clone().addScaledVector(hd, -C.back).add(new V3(0, C.up, 0)), P, env, dt, 1.2);
    const f = vdir(this.yaw, C.pitch);
    return { p, q: lookQ(p, p.clone().add(f)), f: this.baseFov + C.fov };
  }
  // ---- the deploy shot: from the side and a little ahead, low, as the canopy opens overhead ----
  deployShot(s, P, V, env, dt) {
    this.springOn = false; this.lastHelm = false;
    if (!this.dsh) { this.dsh = { side: Math.random() < 0.5 ? -1 : 1, yaw: this.yaw, R: rnd(13, 16), h: rnd(-2.2, -0.6) }; if (this.init) { if (this.pos.distanceTo(P) > 22) this.markCut(); else this.blend = { p: this.pos.clone().sub(this.P0 || this.pos), q: this.q.clone(), f: this.fov, t: 0, T: 0.45 }; } }
    const D = this.dsh, k = ease((s.deployT || 0) / 3.0), a = D.side * (2.0 - 0.7 * k);
    const fw = new V3(Math.sin(D.yaw), 0, Math.cos(D.yaw)), rt = new V3(-fw.z, 0, fw.x);
    const p = this.lifted(P.clone().addScaledVector(fw, -Math.cos(a) * D.R).addScaledVector(rt, Math.sin(a) * D.R).add(new V3(0, D.h + 1.5 * k, 0)), P, env, dt, 1.5);
    const target = P.clone().add(new V3(0, 1.2 + 1.8 * sstep(0.4, 2.2, s.deployT || 0), 0));
    return { p, q: lookQ(p, target), f: 58 };
  }
  // ---- cinematic: a director that cuts between shots ----
  director(s, P, V, env, dt, canopy, h) {
    this.springOn = false; this.lastHelm = false;
    if (!this.shot || this.shot.canopy !== canopy) { this.startShot(s, P, V, env, canopy, !this.shot); }
    let sh = this.shot; sh.t += dt;
    let pose = this.shotPose(sh, s, P, V, env, dt);
    // a shot ends on time, or early if the pilot is hidden behind terrain for a moment, or flies out of reach
    sh.hid = this.occluded(pose.p, P, env) ? (sh.hid || 0) + dt : 0;
    const far = sh.fixed && sh.t > 1.0 && pose.p.distanceTo(P) > sh.maxD;
    if (sh.t > sh.dur || sh.hid > 0.35 || far || (canopy && s.agl < 28 && sh.type !== 'land')) { this.startShot(s, P, V, env, canopy, false); sh = this.shot; sh.t = 0; pose = this.shotPose(sh, s, P, V, env, dt); }
    return pose;
  }
  startShot(s, P, V, env, canopy, first) {
    const prev = this.shot ? this.shot.type : null;
    let types = canopy ? ['ctrail', 'cside', 'cfront', 'cwide', 'corbit'] : ['trail', 'side', 'front', 'orbit', 'wide', 'flyby', 'flyby', 'low'];
    if (canopy && s.agl < 28) types = ['land'];
    else if (first) types = canopy ? ['ctrail'] : ['trail'];
    let sh = null;
    for (let tries = 0; tries < 10 && !sh; tries++) {
      const type = pick(types); if (type === prev && types.length > 1) continue;
      const c = this.makeShot(type, s, P, V, env); if (!c) continue;
      const p0 = this.shotPose(c, s, P, V, env, 0, true).p; if (this.occluded(p0, P, env)) continue;
      sh = c;
    }
    if (!sh) sh = this.makeShot(canopy ? (s.agl < 28 ? 'land' : 'ctrail') : 'trail', s, P, V, env);
    sh.canopy = canopy; sh.t = 0;
    // a short move between nearby shots is a glide; anything bigger is a clean cut
    const p0 = this.shotPose(sh, s, P, V, env, 0, true).p; this.shot = sh; this.lift = sh.fixed ? 0 : Math.max(0, this.need(p0, P, env, 1.4) - p0.y);
    if (this.init && p0.distanceTo(this.pos) < 9 && !sh.fixed) this.blend = { p: this.pos.clone().sub(this.P0 || this.pos), q: this.q.clone(), f: this.fov, t: 0, T: 1.4 };
    else if (this.init) this.markCut();
  }
  makeShot(type, s, P, V, env) {
    const side = Math.random() < 0.5 ? -1 : 1, vh = new V3(V.x, 0, V.z), sp = V.length(), agl = s.agl ?? 999;
    switch (type) {
      case 'trail': return { type, side, back: rnd(11, 14.5), up: rnd(2.2, 4.2), s0: side * rnd(3, 7), s1: -side * rnd(1, 6), f: rnd(46, 54), dur: rnd(7, 10) };
      case 'side': return { type, side, R: rnd(9, 13), a0: rnd(1.15, 1.45), a1: rnd(1.9, 2.35), up: rnd(-0.5, 3), f: rnd(50, 58), dur: rnd(6, 8.5) };
      case 'front': return { type, side, ahead: rnd(10, 14), s0: side * rnd(1.5, 4), up: rnd(-1.2, 2.5), f: rnd(50, 56), dur: rnd(5, 7) };
      case 'orbit': return { type, side, R: rnd(10, 14), a0: rnd(0, 6.28), w: side * rnd(0.28, 0.42), up: rnd(1.5, 5), f: rnd(50, 56), dur: rnd(8, 11) };
      case 'wide': return { type, side, R: rnd(55, 85), up: rnd(26, 42), back: rnd(15, 35), f: rnd(58, 64), dur: rnd(6, 8) };
      case 'flyby': case 'low': {
        if (type === 'low' && agl > 140) return null; if (sp < 15) return null;
        const T = clamp(115 / sp, 1.6, 3.2), A = P.clone().addScaledVector(this.vs || V, T), rt = new V3(-vh.z, 0, vh.x).normalize();
        const pos = A.clone().addScaledVector(rt, side * (type === 'low' ? rnd(7, 14) : rnd(10, 22)));
        if (type === 'low') pos.y = env.height(pos.x, pos.z) + rnd(2.2, 4); else pos.y += rnd(-2, 6);
        if (pos.y < env.height(pos.x, pos.z) + 2) pos.y = env.height(pos.x, pos.z) + 2;
        return { type, fixed: true, pos, f: type === 'low' ? rnd(58, 64) : rnd(48, 56), dur: T + rnd(1.4, 2.2), maxD: 140 };
      }
      case 'ctrail': return { type, side, back: rnd(13, 17), up: rnd(3, 6), s0: side * rnd(3, 8), s1: -side * rnd(2, 6), f: rnd(50, 56), dur: rnd(7, 10) };
      case 'cside': return { type, side, R: rnd(13, 18), a0: rnd(1.2, 1.5), a1: rnd(1.8, 2.2), up: rnd(-1, 3), f: rnd(52, 58), dur: rnd(7, 9) };
      case 'cfront': return { type, side, ahead: rnd(12, 16), s0: side * rnd(2, 5), up: rnd(0, 3), f: rnd(54, 60), dur: rnd(5, 7) };
      case 'cwide': return { type, side, R: rnd(40, 60), up: rnd(14, 26), back: rnd(10, 25), f: rnd(58, 64), dur: rnd(6, 8) };
      case 'corbit': return { type, side, R: rnd(14, 18), a0: rnd(0, 6.28), w: side * rnd(0.22, 0.32), up: rnd(2, 6), f: rnd(52, 58), dur: rnd(8, 11) };
      case 'land': return { type, side, dur: 1e9 };   // low over the ground: the three-quarter view, held to touchdown
    }
    return null;
  }
  shotPose(sh, s, P, V, env, dt, probe) {
    const k = ease(sh.t / Math.max(sh.dur, 1e-3)), fw = new V3(Math.sin(this.cyaw), 0, Math.cos(this.cyaw)), rt = new V3(-fw.z, 0, fw.x);
    const lift = (p, clear = 1.4) => probe ? p : this.lifted(p, P, env, dt, clear);
    let p, look, f = sh.f;
    switch (sh.type) {
      case 'trail': case 'ctrail': p = P.clone().addScaledVector(fw, -sh.back).addScaledVector(rt, sh.s0 + (sh.s1 - sh.s0) * k).add(new V3(0, sh.up, 0)); look = P.clone().addScaledVector(fw, sh.type === 'ctrail' ? 2 : 6).add(new V3(0, sh.type === 'ctrail' ? 1.6 : 0.3, 0)); break;
      case 'side': case 'cside': { const a = sh.side * (sh.a0 + (sh.a1 - sh.a0) * k); p = P.clone().addScaledVector(fw, -Math.cos(a) * sh.R).addScaledVector(rt, Math.sin(a) * sh.R).add(new V3(0, sh.up, 0)); look = P.clone().addScaledVector(fw, 2).add(new V3(0, sh.type === 'cside' ? 1.8 : 0.2, 0)); break; }
      case 'front': case 'cfront': p = P.clone().addScaledVector(fw, sh.ahead).addScaledVector(rt, sh.s0 * (1 - 0.6 * k)).add(new V3(0, sh.up, 0)); look = P.clone().add(new V3(0, sh.type === 'cfront' ? 2.2 : 0.2, 0)); break;
      case 'orbit': case 'corbit': { const a = sh.a0 + sh.w * sh.t; p = P.clone().addScaledVector(fw, -Math.cos(a) * sh.R).addScaledVector(rt, Math.sin(a) * sh.R).add(new V3(0, sh.up + Math.sin(sh.t * 0.4) * 1.2, 0)); look = P.clone().add(new V3(0, sh.type === 'corbit' ? 1.8 : 0, 0)); break; }
      case 'wide': case 'cwide': p = P.clone().addScaledVector(rt, sh.side * sh.R).addScaledVector(fw, -sh.back).add(new V3(0, sh.up, 0)); look = P.clone().lerp(P.clone().addScaledVector(fw, 90).add(new V3(0, -45, 0)), 0.3); break;
      case 'flyby': case 'low': p = sh.pos.clone(); look = P.clone(); break;
      case 'land': { const C = CANOPY.chase; p = P.clone().addScaledVector(fw, -C.back).add(new V3(0, C.up, 0)); const d = vdir(this.cyaw, C.pitch); p = lift(p, 1.2); return { p, q: lookQ(p, p.clone().add(d)), f: this.baseFov + C.fov }; }
    }
    if (!sh.fixed) p = lift(p); else if (!probe) { const g = env.height(p.x, p.z) + 0.6; if (p.y < g) p.y = g; }
    // the lens follows the pilot with a little lag, like an operator panning
    if (probe) return { p, q: lookQ(p, look), f };
    sh.lk = sh.lk ? sh.lk.lerp(look, ek(sh.fixed ? 12 : 9, dt)) : look.clone();
    return { p, q: lookQ(p, sh.lk), f, snapF: sh.t < 0.05 };
  }
  // crash: the camera keeps its place for a beat, then turns to hold the tumbling body and drifts around it. dt is real time.
  crashStart(P, V) { const h = Math.hypot(V[0], V[2]); this.cAng = h > 1 ? Math.atan2(-V[0], -V[2]) : Math.atan2(this.pos.x - P[0], this.pos.z - P[2]); this.cLook = new V3(P[0], P[1], P[2]); this.cSide = 0; this.cDist = this.pos.distanceTo(this.cLook); }
  crash(P, dt, env, o = {}) {
    const e = this.app.engine, k = (r) => 1 - Math.exp(-dt * r); this.cAng += (o.spin ?? 0.12) * dt; this.cDist += ((o.dist ?? 7.5) - this.cDist) * k(1.6); this.cSide += ((o.side ?? 0) - this.cSide) * k(1.4);
    const des = new V3(P[0] + Math.sin(this.cAng) * this.cDist, P[1] + (o.height ?? 2.4), P[2] + Math.cos(this.cAng) * this.cDist); des.y = Math.max(des.y, env.height(des.x, des.z) + 1.6);
    this.pos.lerp(des, k(2.6)); this.pos.y = Math.max(this.pos.y, env.height(this.pos.x, this.pos.z) + 1.1);
    this.cLook.lerp(new V3(P[0], P[1] + 0.15, P[2]), k(8));
    const fw = this.cLook.clone().sub(this.pos), d = fw.length(); fw.multiplyScalar(1 / Math.max(d, 1e-3)); const right = new V3().crossVectors(fw, new V3(0, 1, 0)).normalize();
    const m = new Mat4().lookAt(this.pos, this.cLook.clone().addScaledVector(right, this.cSide * d), new V3(0, 1, 0)); this.q.slerp(new Quat().setFromRotationMatrix(m), k(9));
    this.fov += ((o.fov ?? 50) - this.fov) * k(2.2);
    e.camWorld.copy(this.pos); e.camera.quaternion.copy(this.q); e.camera.fov = this.fov; e.aglHint = this.pos.y - env.height(this.pos.x, this.pos.z); e.camCut = false; this.init = false; this.springOn = false; this.shot = null; this.look.set(0, 0, 0);
  }
  // cinematic orbit around a point (exit shot, crash replay, results)
  orbit(center, radius, height, angle, fov = 55) { const e = this.app.engine; this.pos.set(center[0] + Math.sin(angle) * radius, center[1] + height, center[2] + Math.cos(angle) * radius); const m = new Mat4().lookAt(this.pos, new V3(center[0], center[1], center[2]), new V3(0, 1, 0)); this.q.setFromRotationMatrix(m); e.camWorld.copy(this.pos); e.camera.quaternion.copy(this.q); e.camera.fov = fov; this.fov = fov; e.camCut = false; this.init = false; this.springOn = false; this.shot = null; this.look.set(0, 0, 0); this.orbited = true; }
}
var __m = __ns({ ChaseCam: () => ChaseCam });
export { __m as n, ChaseCam as t };
