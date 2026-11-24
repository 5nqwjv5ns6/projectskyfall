const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./env-DW-jlwou-b9ea4f.js","./autopilot-DHiilXQt.js","./camera-C0nNI1Nh-b9ea4f.js","./game-DfygD0iV-b9ea4f.js"])))=>i.map(i=>d[i]);
import{r as e}from"./autopilot-DHiilXQt.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,k=1029,A=1030,j=1031,M=1033,N=33776,P=33777,F=33778,I=33779,L=35840,R=35841,ee=35842,te=35843,ne=36196,re=37492,ie=37496,z=37488,B=37489,ae=37490,oe=37491,se=37808,ce=37809,le=37810,ue=37811,de=37812,fe=37813,pe=37814,me=37815,he=37816,ge=37817,_e=37818,ve=37819,ye=37820,be=37821,xe=36492,Se=36494,Ce=36495,we=36283,Te=36284,Ee=36285,De=36286,Oe=2300,V=2301,ke=2302,Ae=2303,je=2400,H=2401,Me=2402,U=3200,Ne=`srgb`,Pe=`srgb-linear`,Fe=`linear`,Ie=`srgb`,Le=7680,Re=35044,ze=35048,Be=`300 es`,Ve=2e3;function He(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ue(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function We(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ge(){let e=We(`canvas`);return e.style.display=`block`,e}var Ke={};function qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Je(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function W(...e){e=Je(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function G(...e){e=Je(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ye(...e){let t=e.join(` `);t in Ke||(Ke[t]=!0,W(...e))}function Xe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Ze={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Qe=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},$e=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),et=Math.PI/180,tt=180/Math.PI;function nt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($e[e&255]+$e[e>>8&255]+$e[e>>16&255]+$e[e>>24&255]+`-`+$e[t&255]+$e[t>>8&255]+`-`+$e[t>>16&15|64]+$e[t>>24&255]+`-`+$e[n&63|128]+$e[n>>8&255]+`-`+$e[n>>16&255]+$e[n>>24&255]+$e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]).toLowerCase()}function K(e,t,n){return Math.max(t,Math.min(n,e))}function rt(e,t){return(e%t+t)%t}function it(e,t,n){return(1-n)*e+n*t}function at(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ot(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function st(e,t){if(t.constructor===Float32Array)return e;let n=ot(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function ct(e,t){if(t.constructor===Float32Array)return e;let n=ot(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var lt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:W(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(K(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dt.copy(this).projectOnVector(e),this.sub(dt)}reflect(e){return this.sub(dt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dt=new q,ft=new ut,J=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ye(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(pt.makeScale(e,t)),this}rotate(e){return Ye(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(pt.makeRotation(-e)),this}translate(e,t){return Ye(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(pt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pt=new J,mt=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ht=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gt(){let e={enabled:!0,workingColorSpace:Pe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=vt(e.r),e.g=vt(e.g),e.b=vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=yt(e.r),e.g=yt(e.g),e.b=yt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Fe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Pe]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:mt,fromXYZ:ht,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:mt,fromXYZ:ht,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),e}var _t=gt();function vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function yt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var bt,xt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bt===void 0&&(bt=We(`canvas`)),bt.width=e.width,bt.height=e.height;let t=bt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=bt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=We(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(vt(t[e]/255)*255):t[e]=vt(t[e]);return{data:t,width:e.width,height:e.height}}return W(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},St=0,Ct=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:St++}),this.uuid=nt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(wt(r[t].image)):e.push(wt(r[t]))}else e=wt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function wt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?xt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(W(`Texture: Unable to serialize Texture.`),{})}var Tt=0,Et=new q,Dt=class e extends Qe{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tt++}),this.uuid=nt(),this.name=``,this.source=new Ct(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Et).x}get height(){return this.source.getSize(Et).y}get depth(){return this.source.getSize(Et).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){W(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?W(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null,Dt.DEFAULT_MAPPING=300,Dt.DEFAULT_ANISOTROPY=1;var Y=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this.w=K(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this.w=K(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ot=class extends Qe{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Y(0,0,e,t),this.scissorTest=!1,this.viewport=new Y(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Dt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ct(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},kt=class extends Ot{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},At=class extends Dt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},jt=class extends kt{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new At(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},Mt=class extends Dt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Nt=class extends kt{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Mt(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},X=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Pt.setFromMatrixColumn(e,0).length(),i=1/Pt.setFromMatrixColumn(e,1).length(),a=1/Pt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(It,e,Lt)}lookAt(e,t,n){let r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Rt.crossVectors(n,Bt),Rt.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Rt.crossVectors(n,Bt)),Rt.normalize(),zt.crossVectors(Bt,Rt),r[0]=Rt.x,r[4]=zt.x,r[8]=Bt.x,r[1]=Rt.y,r[5]=zt.y,r[9]=Bt.y,r[2]=Rt.z,r[6]=zt.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Pt.set(r[0],r[1],r[2]).length(),o=Pt.set(r[4],r[5],r[6]).length(),s=Pt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ft.copy(this);let c=1/a,l=1/o,u=1/s;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=l,Ft.elements[5]*=l,Ft.elements[6]*=l,Ft.elements[8]*=u,Ft.elements[9]*=u,Ft.elements[10]*=u,t.setFromRotationMatrix(Ft),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ve,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ve,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pt=new q,Ft=new X,It=new q(0,0,0),Lt=new q(1,1,1),Rt=new q,zt=new q,Bt=new q,Vt=new X,Ht=new ut,Ut=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(K(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-K(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(K(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-K(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(K(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-K(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:W(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ht.setFromEuler(this),this.setFromQuaternion(Ht,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ut.DEFAULT_ORDER=`XYZ`;var Wt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Gt=0,Kt=new q,qt=new ut,Jt=new X,Yt=new q,Xt=new q,Zt=new q,Qt=new ut,$t=new q(1,0,0),en=new q(0,1,0),tn=new q(0,0,1),nn={type:`added`},rn={type:`removed`},an={type:`childadded`,child:null},on={type:`childremoved`,child:null},sn=class e extends Qe{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=nt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new Ut,r=new ut,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new X},normalMatrix:{value:new J}}),this.matrix=new X,this.matrixWorld=new X,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qt.setFromAxisAngle(e,t),this.quaternion.multiply(qt),this}rotateOnWorldAxis(e,t){return qt.setFromAxisAngle(e,t),this.quaternion.premultiply(qt),this}rotateX(e){return this.rotateOnAxis($t,e)}rotateY(e){return this.rotateOnAxis(en,e)}rotateZ(e){return this.rotateOnAxis(tn,e)}translateOnAxis(e,t){return Kt.copy(e).applyQuaternion(this.quaternion),this.position.add(Kt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($t,e)}translateY(e){return this.translateOnAxis(en,e)}translateZ(e){return this.translateOnAxis(tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yt.copy(e):Yt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Xt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Xt,Yt,this.up):Jt.lookAt(Yt,Xt,this.up),this.quaternion.setFromRotationMatrix(Jt),r&&(Jt.extractRotation(r.matrixWorld),qt.setFromRotationMatrix(Jt),this.quaternion.premultiply(qt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(G(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nn),an.child=e,this.dispatchEvent(an),an.child=null):G(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rn),on.child=e,this.dispatchEvent(on),on.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nn),an.child=e,this.dispatchEvent(an),an.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xt,e,Zt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xt,Qt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};sn.DEFAULT_UP=new q(0,1,0),sn.DEFAULT_MATRIX_AUTO_UPDATE=!0,sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends sn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ln={type:`move`},un=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ln)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},pn={h:0,s:0,l:0};function mn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var hn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=rt(e,1),t=K(t,0,1),n=K(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=mn(i,r,e+1/3),this.g=mn(i,r,e),this.b=mn(i,r,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Ne){function n(t){t!==void 0&&parseFloat(t)<1&&W(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:W(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);W(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){let n=dn[e.toLowerCase()];return n===void 0?W(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vt(e.r),this.g=vt(e.g),this.b=vt(e.b),this}copyLinearToSRGB(e){return this.r=yt(e.r),this.g=yt(e.g),this.b=yt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return _t.workingToColorSpace(gn.copy(this),e),Math.round(K(gn.r*255,0,255))*65536+Math.round(K(gn.g*255,0,255))*256+Math.round(K(gn.b*255,0,255))}getHexString(e=Ne){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(gn.copy(this),t);let n=gn.r,r=gn.g,i=gn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Ne){_t.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,r=gn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(pn);let n=it(fn.h,pn.h,t),r=it(fn.s,pn.s,t),i=it(fn.l,pn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new hn;hn.NAMES=dn;var _n=class extends sn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ut,this.environmentIntensity=1,this.environmentRotation=new Ut,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vn=new q,yn=new q,bn=new q,xn=new q,Sn=new q,Cn=new q,wn=new q,Tn=new q,En=new q,Dn=new q,On=new Y,kn=new Y,An=new Y,jn=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){vn.subVectors(r,t),yn.subVectors(n,t),bn.subVectors(e,t);let a=vn.dot(vn),o=vn.dot(yn),s=vn.dot(bn),c=yn.dot(yn),l=yn.dot(bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xn)!==null&&xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,xn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,xn.x),s.addScaledVector(a,xn.y),s.addScaledVector(o,xn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return On.setScalar(0),kn.setScalar(0),An.setScalar(0),On.fromBufferAttribute(e,t),kn.fromBufferAttribute(e,n),An.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(On,i.x),a.addScaledVector(kn,i.y),a.addScaledVector(An,i.z),a}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),yn.subVectors(e,t),vn.cross(yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),vn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Sn.subVectors(r,n),Cn.subVectors(i,n),Tn.subVectors(e,n);let s=Sn.dot(Tn),c=Cn.dot(Tn);if(s<=0&&c<=0)return t.copy(n);En.subVectors(e,r);let l=Sn.dot(En),u=Cn.dot(En);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Sn,a);Dn.subVectors(e,i);let f=Sn.dot(Dn),p=Cn.dot(Dn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Cn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Sn,a).addScaledVector(Cn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mn=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Pn):Pn.fromBufferAttribute(r,t),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Fn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Fn.copy(e.boundingBox)),Fn.applyMatrix4(e.matrixWorld),this.union(Fn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hn),Un.subVectors(this.max,Hn),In.subVectors(e.a,Hn),Ln.subVectors(e.b,Hn),Rn.subVectors(e.c,Hn),zn.subVectors(Ln,In),Bn.subVectors(Rn,Ln),Vn.subVectors(In,Rn);let t=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-Vn.z,Vn.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,Vn.z,0,-Vn.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-Vn.y,Vn.x,0];return!Kn(t,In,Ln,Rn,Un)||(t=[1,0,0,0,1,0,0,0,1],!Kn(t,In,Ln,Rn,Un))?!1:(Wn.crossVectors(zn,Bn),t=[Wn.x,Wn.y,Wn.z],Kn(t,In,Ln,Rn,Un))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Nn=[new q,new q,new q,new q,new q,new q,new q,new q],Pn=new q,Fn=new Mn,In=new q,Ln=new q,Rn=new q,zn=new q,Bn=new q,Vn=new q,Hn=new q,Un=new q,Wn=new q,Gn=new q;function Kn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Gn.fromArray(e,a);let o=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),s=t.dot(Gn),c=n.dot(Gn),l=r.dot(Gn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var qn=Jn();function Jn(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function Yn(e){Math.abs(e)>65504&&W(`DataUtils.toHalfFloat(): Value out of range.`),e=K(e,-65504,65504),qn.floatView[0]=e;let t=qn.uint32View[0],n=t>>23&511;return qn.baseTable[n]+((t&8388607)>>qn.shiftTable[n])}function Xn(e){let t=e>>10;return qn.uint32View[0]=qn.mantissaTable[qn.offsetTable[t]+(e&1023)]+qn.exponentTable[t],qn.floatView[0]}var Zn=class{static toHalfFloat(e){return Yn(e)}static fromHalfFloat(e){return Xn(e)}},Qn=new q,$n=new lt,er=0,tr=class extends Qe{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:er++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Re,this.updateRanges=[],this.gpuType=g,this.version=0,this._normalizationScale=e===void 0?void 0:ot(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix3(e),this.setXY(t,$n.x,$n.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix3(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix4(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyNormalMatrix(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.transformDirection(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?st(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?ct(e,this.array):Math.round(e*t)}},nr=class extends tr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},rr=class extends tr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ir=class extends tr{constructor(e,t,n){super(new Float32Array(e),t,n)}},ar=new Mn,or=new q,sr=new q,cr=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ar.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(or,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(sr)),this.expandByPoint(or.copy(e.center).sub(sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lr=0,ur=new X,dr=new sn,fr=new q,pr=new Mn,mr=new Mn,hr=new q,gr=class e extends Qe{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lr++}),this.uuid=nt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(He(e)?rr:nr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ur.makeRotationFromQuaternion(e),this.applyMatrix4(ur),this}rotateX(e){return ur.makeRotationX(e),this.applyMatrix4(ur),this}rotateY(e){return ur.makeRotationY(e),this.applyMatrix4(ur),this}rotateZ(e){return ur.makeRotationZ(e),this.applyMatrix4(ur),this}translate(e,t,n){return ur.makeTranslation(e,t,n),this.applyMatrix4(ur),this}scale(e,t,n){return ur.makeScale(e,t,n),this.applyMatrix4(ur),this}lookAt(e){return dr.lookAt(e),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new ir(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&W(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)G(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];pr.setFromBufferAttribute(n),this.morphTargetsRelative?(hr.addVectors(this.boundingBox.min,pr.min),this.boundingBox.expandByPoint(hr),hr.addVectors(this.boundingBox.max,pr.max),this.boundingBox.expandByPoint(hr)):(this.boundingBox.expandByPoint(pr.min),this.boundingBox.expandByPoint(pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&G(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)G(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);else if(e){let n=this.boundingSphere.center;if(pr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];mr.setFromBufferAttribute(n),this.morphTargetsRelative?(hr.addVectors(pr.min,mr.min),pr.expandByPoint(hr),hr.addVectors(pr.max,mr.max),pr.expandByPoint(hr)):(pr.expandByPoint(mr.min),pr.expandByPoint(mr.max))}pr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)hr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(hr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)hr.fromBufferAttribute(a,t),o&&(fr.fromBufferAttribute(e,t),hr.add(fr)),r=Math.max(r,n.distanceToSquared(hr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&G(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){G(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new tr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let l=new q,u=new q,d=new q,f=new lt,p=new lt,m=new lt,h=new q,g=new q;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new q,b=new q,x=new q,S=new q;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new tr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hr.fromBufferAttribute(e,t),hr.normalize(),e.setXYZ(t,hr.x,hr.y,hr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new tr(a,r,i)}if(this.index===null)return W(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},_r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Re,this.updateRanges=[],this.version=0,this.uuid=nt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=vr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=vr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function vr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=nt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var yr=new q,br=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:ot(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix4(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyNormalMatrix(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.transformDirection(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){qe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new tr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?st(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?ct(e,this.data.array):Math.round(e*t)}},xr=new q,Sr=new q,Cr=new J,wr=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=xr.subVectors(n,t).cross(Sr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(xr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cr.getNormalMatrix(e),r=this.coplanarPoint(xr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Tr=0,Er=class extends Qe{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tr++}),this.uuid=nt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new hn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Le,this.stencilZFail=Le,this.stencilZPass=Le,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){W(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?W(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new hn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new wr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new lt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Dr=new q,Or=new q,kr=new q,Ar=new q,jr=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dr.copy(this.origin).addScaledVector(this.direction,t),Dr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Or.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(Or);let i=e.distanceTo(t)*.5,a=-this.direction.dot(kr),o=Ar.dot(this.direction),s=-Ar.dot(kr),c=Ar.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Or).addScaledVector(kr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Dr.subVectors(e.center,this.origin);let n=Dr.dot(this.direction),r=Dr.dot(Dr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Dr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,R=E-F*D,ee=O-P*A,te=k-F*A,ne=j-P*N,re=M-F*N,ie=ne*te-re*ee,z=L*re-R*ne,B=ee*R-te*L;if(r){if(ie<0||z<0||B<0)return null}else if((ie<0||z<0||B<0)&&(ie>0||z>0||B>0))return null;let ae=ie+z+B;if(ae===0)return null;let oe=I*(ie*D+z*A+B*N);return(ae>0?oe<0:oe>0)?null:this.at(oe/ae,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mr=class extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new hn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nr=new X,Pr=new jr,Fr=new cr,Ir=new q,Lr=new q,Rr=new q,zr=new q,Br=new q,Vr=new q,Hr=new q,Ur=new q,Wr=class extends sn{constructor(e=new gr,t=new Mr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Vr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Br.fromBufferAttribute(s,e),a?Vr.addScaledVector(Br,r):Vr.addScaledVector(Br.sub(t),r))}t.add(Vr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Pr.copy(e.ray).recast(e.near),Fr.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Fr,Ir)===null||Pr.origin.distanceToSquared(Ir)>(e.far-e.near)**2)||(Nr.copy(i).invert(),Pr.copy(e.ray).applyMatrix4(Nr),(n.boundingBox===null||Pr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Kr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Kr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Kr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Kr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Gr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ur.copy(s),Ur.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ur);return l<n.near||l>n.far?null:{distance:l,point:Ur.clone(),object:e}}function Kr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Lr),e.getVertexPosition(c,Rr),e.getVertexPosition(l,zr);let u=Gr(e,t,n,r,Lr,Rr,zr,Hr);if(u){let e=new q;jn.getBarycoord(Hr,Lr,Rr,zr,e),i&&(u.uv=jn.getInterpolatedAttribute(i,s,c,l,e,new lt)),a&&(u.uv1=jn.getInterpolatedAttribute(a,s,c,l,e,new lt)),o&&(u.normal=jn.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};jn.getNormal(Lr,Rr,zr,t.normal),u.face=t,u.barycoord=e}return u}var qr=class extends Dt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jr=class extends tr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yr=new cr,Xr=new lt(.5,.5),Zr=new q,Qr=class{constructor(e=new wr,t=new wr,n=new wr,r=new wr,i=new wr,a=new wr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ve,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476+Xr.distanceTo(e.center),Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Zr.x=r.normal.x>0?e.max.x:e.min.x,Zr.y=r.normal.y>0?e.max.y:e.min.y,Zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$r=new X,ei=class e{constructor(){this.coordinateSystem=Ve,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];$r.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Qr),n[e].setFromProjectionMatrix($r,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Qr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},ti=class extends Dt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ni=class extends Dt{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ct(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ri=class extends ni{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ii=class extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ai=class e extends gr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new ir(c,3)),this.setAttribute(`normal`,new ir(l,3)),this.setAttribute(`uv`,new ir(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},oi=class e extends gr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new ir(p,3)),this.setAttribute(`normal`,new ir(m,3)),this.setAttribute(`uv`,new ir(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},si=class e extends gr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new q,f=new q,p=new q;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new ir(c,3)),this.setAttribute(`normal`,new ir(l,3)),this.setAttribute(`uv`,new ir(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ci(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ui(i))i.isRenderTargetTexture?(W(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ui(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function li(e){let t={};for(let n=0;n<e.length;n++){let r=ci(e[n]);for(let e in r)t[e]=r[e]}return t}function ui(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function di(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function fi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_t.workingColorSpace}var pi={clone:ci,merge:li},mi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gi=class extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mi,this.fragmentShader=hi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.uniformsGroups=di(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new hn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new lt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new X().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_i=class extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},vi=class extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=U,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yi=class extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function xi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Si=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ci=class extends Si{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:je,endingEnd:je}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case H:i=e,o=2*t-n;break;case Me:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case H:a=e,s=2*n-t;break;case Me:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},wi=class extends Si{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ti=class extends Si{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ei=class extends Si{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ki(n,t,g,y,r);i[p]=Di(x,o,_,b,m)}return i}};function Di(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Oi(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ki(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Di(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Oi(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ai=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=bi(t,this.TimeBufferType),this.values=bi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bi(e.times,Array),values:bi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),xi(e.settings)&&(n.settings={inTangents:bi(e.settings.inTangents,Array),outTangents:bi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ti(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ci(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ei(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Oe:t=this.InterpolantFactoryMethodDiscrete;break;case V:t=this.InterpolantFactoryMethodLinear;break;case ke:t=this.InterpolantFactoryMethodSmooth;break;case Ae:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return W(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oe;case this.InterpolantFactoryMethodLinear:return V;case this.InterpolantFactoryMethodSmooth:return ke;case this.InterpolantFactoryMethodBezier:return Ae}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;xi(this.settings)&&(ji(this.settings.inTangents,e),ji(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;xi(this.settings)&&(Mi(this.settings.inTangents,e),Mi(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(G(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(G(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){G(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){G(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ue(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){G(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ke,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,xi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ji(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Mi(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ai.prototype.ValueTypeName=``,Ai.prototype.TimeBufferType=Float32Array,Ai.prototype.ValueBufferType=Float32Array,Ai.prototype.DefaultInterpolation=V;var Ni=class extends Ai{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName=`bool`,Ni.prototype.ValueBufferType=Array,Ni.prototype.DefaultInterpolation=Oe,Ni.prototype.InterpolantFactoryMethodLinear=void 0,Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}};Pi.prototype.ValueTypeName=`color`;var Fi=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}};Fi.prototype.ValueTypeName=`number`;var Ii=class extends Si{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ut.slerpFlat(i,0,a,c-o,a,c,s);return i}},Li=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ii(this.times,this.values,this.getValueSize(),e)}};Li.prototype.ValueTypeName=`quaternion`,Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends Ai{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName=`string`,Ri.prototype.ValueBufferType=Array,Ri.prototype.DefaultInterpolation=Oe,Ri.prototype.InterpolantFactoryMethodLinear=void 0,Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Ai{constructor(e,t,n,r){super(e,t,n,r)}};zi.prototype.ValueTypeName=`vector`;var Bi=new q,Vi=new ut,Hi=new q,Ui=class extends sn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new X,this.projectionMatrix=new X,this.projectionMatrixInverse=new X,this.coordinateSystem=Ve,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bi,Vi,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bi,Vi,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Bi,Vi,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bi,Vi,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new q,Gi=new lt,Ki=new lt,qi=class extends Ui{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(et*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tt*2*Math.atan(Math.tan(et*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Gi,Ki),t.subVectors(Ki,Gi)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(et*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ji=class extends Ui{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yi=class extends gr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Xi=-90,Zi=1,Qi=class extends sn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qi(Xi,Zi,e,t);r.layers=this.layers,this.add(r);let i=new qi(Xi,Zi,e,t);i.layers=this.layers,this.add(i);let a=new qi(Xi,Zi,e,t);a.layers=this.layers,this.add(a);let o=new qi(Xi,Zi,e,t);o.layers=this.layers,this.add(o);let s=new qi(Xi,Zi,e,t);s.layers=this.layers,this.add(s);let c=new qi(Xi,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},$i=class extends qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ea=`\\[\\]\\.:\\/`,ta=RegExp(`[\\[\\]\\.:\\/]`,`g`),na=`[^\\[\\]\\.:\\/]`,ra=`[^`+ea.replace(`\\.`,``)+`]`,ia=`((?:WC+[\\/:])*)`.replace(`WC`,na),aa=`(WCOD+)?`.replace(`WCOD`,ra),oa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,na),sa=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,na),ca=RegExp(`^`+ia+aa+oa+sa+`$`),la=[`material`,`materials`,`bones`,`map`],ua=class{constructor(e,t,n){let r=n||da.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},da=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ta,``)}static parseTrackName(e){let t=ca.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);la.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){W(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){G(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){G(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){G(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){G(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){G(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;G(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};da.Composite=ua,da.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},da.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},da.prototype.GetterByBindingType=[da.prototype._getValue_direct,da.prototype._getValue_array,da.prototype._getValue_arrayElement,da.prototype._getValue_toArray],da.prototype.SetterByBindingTypeAndVersioning=[[da.prototype._setValue_direct,da.prototype._setValue_direct_setNeedsUpdate,da.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[da.prototype._setValue_array,da.prototype._setValue_array_setNeedsUpdate,da.prototype._setValue_array_setMatrixWorldNeedsUpdate],[da.prototype._setValue_arrayElement,da.prototype._setValue_arrayElement_setNeedsUpdate,da.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[da.prototype._setValue_fromArray,da.prototype._setValue_fromArray_setNeedsUpdate,da.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function fa(e,t,n,r){let i=pa(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case F:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case R:case te:return Math.max(e,16)*Math.max(t,8)/4;case L:case ee:return Math.max(e,8)*Math.max(t,8)/2;case ne:case re:case z:case B:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ue:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case de:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case fe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case he:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ye:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case be:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case xe:case Se:case Ce:return Math.ceil(e/4)*Math.ceil(t/4)*16;case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function pa(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?W(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function ma(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ha(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new hn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new hn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new hn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new hn(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},ga={basic:{uniforms:li([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:li([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new hn(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:li([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new hn(0)},specular:{value:new hn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:li([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new hn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:li([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new hn(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:li([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:li([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:li([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:li([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:li([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:li([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:li([Q.common,Q.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:li([Q.lights,Q.fog,{color:{value:new hn(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};ga.physical={uniforms:li([ga.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new J},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new hn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new hn(0)},specularColor:{value:new hn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var _a={r:0,b:0,g:0},va=new X,ya=new J;ya.set(-1,0,0,0,1,0,0,0,1);function ba(e,t,n,r,i,a){let o=new hn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Wr(new ai(1,1,1),new gi({name:`BackgroundCubeMaterial`,uniforms:ci(ga.backgroundCube.uniforms),vertexShader:ga.backgroundCube.vertexShader,fragmentShader:ga.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(va.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ya),l.material.toneMapped=_t.getTransfer(i.colorSpace)!==Ie,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Wr(new oi(2,2),new gi({name:`BackgroundMaterial`,uniforms:ci(ga.background.uniforms),vertexShader:ga.background.vertexShader,fragmentShader:ga.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=_t.getTransfer(i.colorSpace)!==Ie,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(_a,fi(e)),n.buffers.color.setClear(_a.r,_a.g,_a.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function xa(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Sa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ca(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(W(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&W(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&W(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function wa(e){let t=this,n=null,r=0,i=!1,a=!1,o=new wr,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ta=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ti(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ai(5,5,5),i=new gi({name:`CubemapFromEquirect`,uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Wr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new Qi(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ea=256,Da=3,Oa=20,ka=256,Aa=16,ja=3,Ma=new q,Na=new hn,Pa=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qi(1,10,null),this._boxMesh=new Wr(new ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ma}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Na));let h=new Qi(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Va(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ea,at(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Ea:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Fa(e,!1,!1),n=Math.log2(e)-Da;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fa(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Va()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ba()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=La(),this._integrationMaterial=Ra());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Aa);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-ja)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(ka*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=za());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Fa(e,t,n){return new Ta(e,{minFilter:l,generateMipmaps:t,type:_,colorSpace:Pe,depthBuffer:n})}function Ia(e,t,n){return new gi({name:e,uniforms:t,vertexShader:Z.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function La(){return Ia(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ka}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ra(){return Ia(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Aa}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function za(){return Ia(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Oa}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ba(){return Ia(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Va(){return Ia(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ha(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ta(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Pa(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Pa(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ua(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ye(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Wa(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?rr:nr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Ga(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ka(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:G(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function qa(e,t,n){let r=new WeakMap,i=new Y;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new At(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new lt(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ja(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ya={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Xa(e,t,n,r,i,a){let o=new kt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new gr;u.setAttribute(`position`,new ir([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new ir([0,2,0,0,2,0],2));let d=new _i({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Wr(u,d),p=new Ji(-1,1,1,-1,0,1),m=null,h=null,g=!1,v,y=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new kt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new kt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new ni(t,n),a===!0&&(l.format=D,l.type=b)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&x.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,g=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},_t.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Ya[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(f,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Za=new Dt,Qa=new ni(1,1),$a=new ri(1),eo=new At,to=new Mt,no=new ti,ro=[],io=[],ao=new Float32Array(16),oo=new Float32Array(9),so=new Float32Array(4);function co(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ro[i];if(a===void 0&&(a=new Float32Array(i),ro[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function lo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function uo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function fo(e,t){let n=io[t];n===void 0&&(n=new Int32Array(t),io[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function po(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function mo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lo(n,t))return;e.uniform2fv(this.addr,t),uo(n,t)}}function ho(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(lo(n,t))return;e.uniform3fv(this.addr,t),uo(n,t)}}function go(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lo(n,t))return;e.uniform4fv(this.addr,t),uo(n,t)}}function _o(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(lo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),uo(n,t)}else{if(lo(n,r))return;so.set(r),e.uniformMatrix2fv(this.addr,!1,so),uo(n,r)}}function vo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(lo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),uo(n,t)}else{if(lo(n,r))return;oo.set(r),e.uniformMatrix3fv(this.addr,!1,oo),uo(n,r)}}function yo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(lo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),uo(n,t)}else{if(lo(n,r))return;ao.set(r),e.uniformMatrix4fv(this.addr,!1,ao),uo(n,r)}}function bo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lo(n,t))return;e.uniform2iv(this.addr,t),uo(n,t)}}function So(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(lo(n,t))return;e.uniform3iv(this.addr,t),uo(n,t)}}function Co(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lo(n,t))return;e.uniform4iv(this.addr,t),uo(n,t)}}function wo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function To(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lo(n,t))return;e.uniform2uiv(this.addr,t),uo(n,t)}}function Eo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(lo(n,t))return;e.uniform3uiv(this.addr,t),uo(n,t)}}function Do(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lo(n,t))return;e.uniform4uiv(this.addr,t),uo(n,t)}}function Oo(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function ko(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Oo(Qa):Za,n.setTexture2D(t||a,i)}function Ao(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||to,i)}function jo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Oo($a):no,n.setTextureCube(t||a,i)}function Mo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||eo,i)}function No(e){switch(e){case 5126:return po;case 35664:return mo;case 35665:return ho;case 35666:return go;case 35674:return _o;case 35675:return vo;case 35676:return yo;case 5124:case 35670:return bo;case 35667:case 35671:return xo;case 35668:case 35672:return So;case 35669:case 35673:return Co;case 5125:return wo;case 36294:return To;case 36295:return Eo;case 36296:return Do;case 35678:case 36198:case 36298:case 36306:case 35682:return ko;case 35679:case 36299:case 36307:return Ao;case 35680:case 36300:case 36308:case 36293:return jo;case 36289:case 36303:case 36311:case 36292:return Mo}}function Po(e,t){e.uniform1fv(this.addr,t)}function Fo(e,t){let n=co(t,this.size,2);e.uniform2fv(this.addr,n)}function Io(e,t){let n=co(t,this.size,3);e.uniform3fv(this.addr,n)}function Lo(e,t){let n=co(t,this.size,4);e.uniform4fv(this.addr,n)}function Ro(e,t){let n=co(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function zo(e,t){let n=co(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Bo(e,t){let n=co(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Vo(e,t){e.uniform1iv(this.addr,t)}function Ho(e,t){e.uniform2iv(this.addr,t)}function Uo(e,t){e.uniform3iv(this.addr,t)}function Wo(e,t){e.uniform4iv(this.addr,t)}function Go(e,t){e.uniform1uiv(this.addr,t)}function Ko(e,t){e.uniform2uiv(this.addr,t)}function qo(e,t){e.uniform3uiv(this.addr,t)}function Jo(e,t){e.uniform4uiv(this.addr,t)}function Yo(e,t,n){let r=this.cache,i=t.length,a=fo(n,i);lo(r,a)||(e.uniform1iv(this.addr,a),uo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Oo(Qa):Za;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Xo(e,t,n){let r=this.cache,i=t.length,a=fo(n,i);lo(r,a)||(e.uniform1iv(this.addr,a),uo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||to,a[e])}function Zo(e,t,n){let r=this.cache,i=t.length,a=fo(n,i);lo(r,a)||(e.uniform1iv(this.addr,a),uo(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Oo($a):no;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Qo(e,t,n){let r=this.cache,i=t.length,a=fo(n,i);lo(r,a)||(e.uniform1iv(this.addr,a),uo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||eo,a[e])}function $o(e){switch(e){case 5126:return Po;case 35664:return Fo;case 35665:return Io;case 35666:return Lo;case 35674:return Ro;case 35675:return zo;case 35676:return Bo;case 5124:case 35670:return Vo;case 35667:case 35671:return Ho;case 35668:case 35672:return Uo;case 35669:case 35673:return Wo;case 5125:return Go;case 36294:return Ko;case 36295:return qo;case 36296:return Jo;case 35678:case 36198:case 36298:case 36306:case 35682:return Yo;case 35679:case 36299:case 36307:return Xo;case 35680:case 36300:case 36308:case 36293:return Zo;case 36289:case 36303:case 36311:case 36292:return Qo}}var es=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=No(t.type)}},ts=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$o(t.type)}},ns=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},rs=/(\w+)(\])?(\[|\.)?/g;function is(e,t){e.seq.push(t),e.map[t.id]=t}function as(e,t,n){let r=e.name,i=r.length;for(rs.lastIndex=0;;){let a=rs.exec(r),o=rs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){is(n,l===void 0?new es(s,e,t):new ts(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ns(s),is(n,e)),n=e}}}var os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);as(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ss(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var cs=37297,ls=0;function us(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ds=new J;function fs(e){_t._getMatrix(ds,_t.workingColorSpace,e);let t=`mat3( ${ds.elements.map(e=>e.toFixed(4))} )`;switch(_t.getTransfer(e)){case Fe:return[t,`LinearTransferOETF`];case Ie:return[t,`sRGBTransferOETF`];default:return W(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ps(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+us(e.getShaderSource(t),r)}return i}function ms(e,t){let n=fs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var hs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function gs(e,t){let n=hs[t];return n===void 0?(W(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var _s=new q;function vs(){return _t.getLuminanceCoefficients(_s),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${_s.x.toFixed(4)}, ${_s.y.toFixed(4)}, ${_s.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ys(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ss).join(`
`)}function bs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function xs(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ss(e){return e!==``}function Cs(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ws(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ts=/^[ \t]*#include +<([\w\d./]+)>/gm;function Es(e){return e.replace(Ts,Ds)}function Ds(e,t){let n=Z[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Es(n)}var Os=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ks(e){return e.replace(Os,As)}function As(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function js(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ms={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ns(e){return Ms[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ps={302:`ENVMAP_MODE_REFRACTION`};function Fs(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ps[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Is={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ls(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Is[e.combine]||`ENVMAP_BLENDING_NONE`}function Rs(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ns(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Fs(n),d=Ls(n),f=ys(n),p=bs(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Ss).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Ss).join(`
`),g.length>0&&(g+=`
`)):(h=[js(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ss).join(`
`),g=[js(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:gs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,ms(`linearToOutputTexel`,n.outputColorSpace),vs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ss).join(`
`)),o=Es(o),o=Cs(o,n),o=ws(o,n),s=Es(s),s=Cs(s,n),s=ws(s,n),o=ks(o),s=ks(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=ss(i,i.VERTEX_SHADER,v),x=ss(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=ps(i,b,`vertex`),n=ps(i,x,`fragment`);G(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):W(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new os(i,m),w=xs(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,cs)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ls++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var zs=0,Bs=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vs(e),t.set(e,n)),n}},Vs=class{constructor(e){this.id=zs++,this.code=e,this.usedTimes=0}};function Hs(e){return e===1030||e===37490||e===36285}function Us(e,t,n,r,i,a){let o=new Wt,s=new Bs,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&W(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=ga[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,I=!!b,L=I&&b.isPMREMTexture===!0,R=!!i.aoMap,ee=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,ne=!!i.normalMap,re=!!i.displacementMap,ie=!!i.emissiveMap,z=!!i.metalnessMap,B=!!i.roughnessMap,ae=i.anisotropy>0,oe=i.clearcoat>0,se=i.diffuseRoughness>0,ce=i.dispersion>0,le=i.retroreflectivity>0,ue=i.iridescence>0,de=i.sheen>0,fe=i.transmission>0,pe=ae&&!!i.anisotropyMap,me=oe&&!!i.clearcoatMap,he=oe&&!!i.clearcoatNormalMap,ge=oe&&!!i.clearcoatRoughnessMap,_e=se&&!!i.diffuseRoughnessMap,ve=ue&&!!i.iridescenceMap,ye=ue&&!!i.iridescenceThicknessMap,be=de&&!!i.sheenColorMap,xe=de&&!!i.sheenRoughnessMap,Se=!!i.specularMap,Ce=!!i.specularColorMap,we=!!i.specularIntensityMap,Te=fe&&!!i.transmissionMap,Ee=fe&&!!i.thicknessMap,De=!!i.gradientMap,Oe=!!i.alphaMap,V=i.alphaTest>0,ke=!!i.alphaHash,Ae=!!i.extensions,je=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(je=e.toneMapping);let H=L?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Me={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&b.mapping,envMapPMREM:L,envMapMaxLod:L?H.length-1:null,envMapSize:L?H[0].width:null,aoMap:R,lightMap:ee,bumpMap:te,normalMap:ne,displacementMap:re,emissiveMap:ie,normalMapObjectSpace:ne&&i.normalMapType===1,normalMapTangentSpace:ne&&i.normalMapType===0,packedNormalMap:ne&&i.normalMapType===0&&Hs(i.normalMap.format),metalnessMap:z,roughnessMap:B,anisotropy:ae,anisotropyMap:pe,clearcoat:oe,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,diffuseRoughness:se,diffuseRoughnessMap:_e,dispersion:ce,retroreflection:le,iridescence:ue,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:de,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:Ce,specularIntensityMap:we,transmission:fe,transmissionMap:Te,thicknessMap:Ee,gradientMap:De,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:V,alphaHash:ke,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:R&&p(i.aoMap.channel),lightMapUv:ee&&p(i.lightMap.channel),bumpMapUv:te&&p(i.bumpMap.channel),normalMapUv:ne&&p(i.normalMap.channel),displacementMapUv:re&&p(i.displacementMap.channel),emissiveMapUv:ie&&p(i.emissiveMap.channel),metalnessMapUv:z&&p(i.metalnessMap.channel),roughnessMapUv:B&&p(i.roughnessMap.channel),anisotropyMapUv:pe&&p(i.anisotropyMap.channel),clearcoatMapUv:me&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:ve&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:be&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&p(i.sheenRoughnessMap.channel),specularMapUv:Se&&p(i.specularMap.channel),specularColorMapUv:Ce&&p(i.specularColorMap.channel),specularIntensityMapUv:we&&p(i.specularIntensityMap.channel),transmissionMapUv:Te&&p(i.transmissionMap.channel),thicknessMapUv:Ee&&p(i.thicknessMap.channel),alphaMapUv:Oe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ne||ae),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||Oe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ne===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&_t.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ie&&i.emissiveMap.isVideoTexture===!0&&_t.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ae&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=ga[t];n=pi.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Rs(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Ws(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Gs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ks(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function qs(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Gs),r.length>1&&r.sort(t||Ks),i.length>1&&i.sort(t||Ks)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Js(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new qs,e.set(t,[i])):n>=r.length?(i=new qs,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ys(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new hn};break;case`SpotLight`:n={position:new q,direction:new q,color:new hn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new hn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new hn,groundColor:new hn};break;case`RectAreaLight`:n={color:new hn,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function Xs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Zs=0;function Qs(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function $s(e){let t=new Ys,n=Xs(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new X,o=new X;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Qs);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Zs++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ec(e){let t=new $s(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function tc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ec(e),t.set(n,[a])):r>=i.length?(a=new ec(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var nc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ic=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],ac=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],oc=new X,sc=new q,cc=new q;function lc(e,t,n){let r=new Qr,a=new lt,o=new lt,c=new Y,l=new vi,u=new yi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:nc,fragmentShader:rc}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new gr;y.setAttribute(`position`,new tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Wr(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(W(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){W(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){W(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new kt(a.x,a.y,{format:A,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ni(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new Ta(a.x),p.map.depthTexture=new ri(a.x,h)):(p.map=new kt(a.x,a.y),p.map.depthTexture=new ni(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),sc.setFromMatrixPosition(d.matrixWorld),e.position.copy(sc),cc.copy(e.position),cc.add(ic[t]),e.up.copy(ac[t]),e.lookAt(cc),e.updateMatrixWorld(),n.makeTranslation(-sc.x,-sc.y,-sc.z),oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(oc,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new kt(a.x,a.y,{format:A,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function uc(e,t){function n(){let t=!1,n=new Y,r=null,i=new Y(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?z(e.DEPTH_TEST):B(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ze[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):B(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new hn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),te=new Y().fromArray(R),ne=new Y().fromArray(ee);function re(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ie={};ie[e.TEXTURE_2D]=re(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=re(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),z(e.DEPTH_TEST),o.setFunc(3),fe(!1),pe(1),z(e.CULL_FACE),ue(0);function z(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function B(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ae(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function oe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function se(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ce={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ce[103]=e.MIN,ce[104]=e.MAX;let le={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ue(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(B(e.BLEND),g=!1);else if(g===!1&&(z(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:G(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:G(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:G(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:G(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ce[n],ce[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(le[r],le[i],le[o],le[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function de(t,n){t.side===2?B(e.CULL_FACE):z(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?ue(0):ue(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?z(e.SAMPLE_ALPHA_TO_COVERAGE):B(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function pe(t){t===0?B(e.CULL_FACE):(z(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function me(t){t!==k&&(N&&e.lineWidth(t),k=t)}function he(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):B(e.POLYGON_OFFSET_FILL)}function ge(t){t?z(e.SCISSOR_TEST):B(e.SCISSOR_TEST)}function _e(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function ve(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||ie[t]),i.type=t,i.texture=n)}function ye(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function V(){try{e.texImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function je(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function H(t){ne.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ne.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function U(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new hn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:z,disable:B,bindFramebuffer:ae,drawBuffers:oe,useProgram:se,setBlending:ue,setMaterial:de,setFlipSided:fe,setCullFace:pe,setLineWidth:me,setPolygonOffset:he,setScissorTest:ge,activeTexture:_e,bindTexture:ve,unbindTexture:ye,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:V,pixelStorei:Ae,getParameter:ke,updateUBOMapping:Me,uniformBlockBinding:U,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:je,viewport:H,reset:Ne}}function dc(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new lt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):We(`canvas`)}function O(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),W(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&W(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(t){e.generateMipmap(t)}function j(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];W(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||W(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Fe:_t.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function N(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,W(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function P(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function F(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function I(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function L(e){ee(e.target)}function R(e){te(e.target)}function ee(e){e.removeEventListener(`dispose`,L),I(e),re(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function te(e){e.removeEventListener(`dispose`,R),I(e),z(e)}function ne(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?te(t):ee(t))}C.clear(),b.clear()}function re(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ie(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ie(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function z(t){let n=f.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&ee(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=f.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(i[t])}f.remove(t)}let B=0;function ae(){B=0}function oe(){return B}function se(e){B=e}function ce(){let e=B;return e>=p.maxTextures&&W(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),B+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ue(t,n){let r=f.get(t);if(t.isVideoTexture&&Me(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)W(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)W(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function de(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?xe(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function fe(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?xe(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function pe(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?Se(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let me={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},he={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&W(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,me[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,me[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,me[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,he[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,he[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,ge[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,L),F(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=le(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ie(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=ye(r.start,n.width,4),c=ye(t.start,n.width,4);r.start<=i+1&&s===c&&ye(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function xe(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ve(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=_t.getPrimaries(_t.workingColorSpace),r=n.colorSpace===``?null:_t.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=O(n.image,!1,p.maxTextureSize);t=U(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=M(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);_e(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=P(n,t);if(n.isDepthTexture)u=N(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&be(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=fa(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=fa(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ne(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Ne(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);k(n)&&n.mipmapsAutoUpdate===!0&&A(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Se(t,n,r){if(n.image.length!==6)return;let i=ve(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=_t.getPrimaries(_t.workingColorSpace),s=n.colorSpace===``?null:_t.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=O(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=U(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=M(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=P(n,h);_e(e.TEXTURE_CUBE_MAP,n);let C;if(n.isDepthTexture){if(v=N(n.format===D,n.type),b){if(y)d.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Ne(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}k(n)&&n.mipmapsAutoUpdate===!0&&A(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ce(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=M(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),H(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,je(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=N(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;H(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=M(a.internalFormat,o,s,a.normalized,a.colorSpace);H(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);a.__renderTarget=n;let o=i?n.depthTexture.image[0]:n.depthTexture.image;a.__webglTexture&&o.width===n.width&&o.height===n.height||(o.width=n.width,o.height=n.height,n.depthTexture.needsUpdate=!0),i?pe(n.depthTexture,0):ue(n.depthTexture,0);let s=a.__webglTexture,c=je(n),l=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,u=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)H(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else if(n.depthTexture.format===1027)H(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Te(n.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Te(n.__webglFramebuffer[0],t,0):Te(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),we(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),we(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}d.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,r){let i=f.get(t);n!==void 0&&Ce(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Ee(t)}function Oe(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,R),F(t);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&H(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=M(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=je(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),we(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),_e(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)Ce(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else Ce(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);k(n)?A(e.TEXTURE_CUBE_MAP):n.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),_e(s,i),Ce(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),k(i)&&A(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),_e(a,n),n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Ce(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else Ce(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);k(n)?A(a):n.mipmaps.length>0&&e.texParameteri(a,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}t.depthBuffer&&Ee(t)}function V(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=j(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let ke=[];function Ae(t){if(t.samples>0){if(H(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(ke.length=0,ke.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&ke.push(o),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function je(e){return Math.min(p.maxSamples,e.samples)}function H(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Me(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function U(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(_t.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&W(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):G(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=ue,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=H,this.dispose=ne}function fc(e,t){function n(n,r=``){let i,a=_t.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var pc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ii(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gi({vertexShader:pc,fragmentShader:mc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wr(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gc=class extends Qe{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new hc,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new lt,k=null,A=null,j=new qi;j.viewport=new Y;let M=new qi;M.viewport=new Y;let N=[j,M],P=new $i,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new un,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new un,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new un,C[e]=t),t.getHandSpace()};function L(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function R(){r.removeEventListener(`select`,L),r.removeEventListener(`selectstart`,L),r.removeEventListener(`selectend`,L),r.removeEventListener(`squeeze`,L),r.removeEventListener(`squeezestart`,L),r.removeEventListener(`squeezeend`,L),r.removeEventListener(`end`,R),r.removeEventListener(`inputsourceschange`,ee);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}F=null,I=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,z.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,L),r.addEventListener(`selectstart`,L),r.addEventListener(`selectend`,L),r.addEventListener(`squeeze`,L),r.addEventListener(`squeezestart`,L),r.addEventListener(`squeezeend`,L),r.addEventListener(`end`,R),r.addEventListener(`inputsourceschange`,ee),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new kt(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new ni(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new kt(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),z.setContext(r),z.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;te(P,i);for(let e=0;e<a.length;e++)te(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ne(e,P,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=tt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let re=null;function ie(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new qi,o.layers.enable(n),o.viewport=new Y,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ii,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}re&&re(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let z=new ma;z.setAnimationLoop(ie),this.setAnimationLoop=function(e){re=e},this.dispose=function(){}}},_c=new X,vc=new J;vc.set(-1,0,0,0,1,0,0,0,1);function yc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,fi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(_c.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(vc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function bc(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?W(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):W(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var xc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sc=null;function Cc(){return Sc===null&&(Sc=new qr(xc,16,16,A,_),Sc.name=`DFG_LUT`,Sc.minFilter=s,Sc.magFilter=s,Sc.wrapS=n,Sc.wrapT=n,Sc.generateMipmaps=!1,Sc.needsUpdate=!0),Sc}var wc=class{constructor(e={}){let{canvas:t=Ge(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([M,j,k]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,A=null,N=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,R=null,ee=null,te=null,ne=null;this._outputColorSpace=Ne;let re=0,ie=0,z=null,B=-1,ae=null,oe=new Y,se=new Y,ce=null,le=new hn(0),ue=0,de=t.width,fe=t.height,pe=1,me=null,he=null,ge=new Y(0,0,de,fe),_e=new Y(0,0,de,fe),ve=!1,ye=new Qr,be=new ei,xe=!1,Se=!1,Ce=new X,we=new q,Te=new Y,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return z===null?pe:1}let V=n;function ke(e,n){return t.getContext(e,n)}let Ae,je,H,Me,U,Pe,Fe,Ie,Le,Re,ze,Be,He,Ue,We,Ke,Je,Ye,Ze,Qe,$e,et,tt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,rt,!1),t.addEventListener(`webglcontextrestored`,it,!1),t.addEventListener(`webglcontextcreationerror`,at,!1),V===null){let t=`webgl2`;if(V=ke(t,e),V===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),G(`WebGLRenderer: `+e.message),e}function nt(){Ae=new Ua(V),Ae.init(),$e=new fc(V,Ae),je=new Ca(V,Ae,e,$e),H=new uc(V,Ae),je.reversedDepthBuffer&&m&&H.buffers.depth.setReversed(!0),ee=V.createFramebuffer(),te=V.createFramebuffer(),ne=V.createFramebuffer(),Me=new Ka(V),U=new Ws,Pe=new dc(V,Ae,H,U,je,$e,Me),Fe=new Ha(I),Ie=new ha(V),et=new xa(V,Ie),Le=new Wa(V,Ie,Me,et),Re=new Ja(V,Le,Ie,et,Me),Ye=new qa(V,je,Pe),We=new wa(U),ze=new Us(I,Fe,Ae,je,et,We),Be=new yc(I,U),He=new Js,Ue=new tc(Ae),Je=new ba(I,Fe,H,Re,x,s),Ke=new lc(I,Re,je),tt=new bc(V,Me,je,H),Ze=new Sa(V,Ae,Me),Qe=new Ga(V,Ae,Me),Me.programs=ze.programs,I.capabilities=je,I.extensions=Ae,I.properties=U,I.renderLists=He,I.shadowMap=Ke,I.state=H,I.info=Me}S!==1009&&(F=new Xa(S,t.width,t.height,o,r,i));let K=new gc(I,V);this.xr=K,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(e){e!==void 0&&(pe=e,this.setSize(de,fe,!1))},this.getSize=function(e){return e.set(de,fe)},this.setSize=function(e,n,r=!0){K.isPresenting?W(`WebGLRenderer: Can't change size while VR device is presenting.`):(de=e,fe=n,t.width=Math.floor(e*pe),t.height=Math.floor(n*pe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(de*pe,fe*pe).floor()},this.setDrawingBufferSize=function(e,n,r){de=e,fe=n,pe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)G(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){W(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(oe)},this.getViewport=function(e){return e.copy(ge)},this.setViewport=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),H.viewport(oe.copy(ge).multiplyScalar(Oe()).round())},this.getScissor=function(e){return e.copy(_e)},this.setScissor=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),H.scissor(se.copy(_e).multiplyScalar(Oe()).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(e){H.setScissorTest(ve=e)},this.setOpaqueSort=function(e){me=e},this.setTransparentSort=function(e){he=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(z!==null){let t=z.texture.format;e=C.has(t)}if(e){let e=z.texture.type,t=w.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,V.clearBufferuiv(V.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,V.clearBufferiv(V.COLOR,0,E))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),R=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),Je.dispose(),He.dispose(),Ue.dispose(),Pe.dispose(),U.dispose(),Fe.dispose(),Re.dispose(),Le.dispose(),et.dispose(),tt.dispose(),ze.dispose(),K.dispose(),K.removeEventListener(`sessionstart`,ft),K.removeEventListener(`sessionend`,J),pt.stop()};function rt(e){e.preventDefault(),qe(`WebGLRenderer: Context Lost.`),L=!0}function it(){qe(`WebGLRenderer: Context Restored.`),L=!1;let e=Me.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;nt(),Me.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function at(e){G(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ot(e){let t=e.target;t.removeEventListener(`dispose`,ot),st(t)}function st(e){ct(e),U.remove(e)}function ct(e){let t=U.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Tt(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Le.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Ie.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*Oe()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*Oe()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ie.get(c).bytesPerElement:1,o=U.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function lt(e,t,n,r){R!==null&&e.isNodeMaterial&&R.setObject(r,e),xe===!0&&We.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,r),e.side=0,e.needsUpdate=!0,xt(e,t,r),e.side=2):xt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),R!==null&&R.renderStart(e,t,n),A=Ue.get(n),A.init(t),P.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),R!==null&&R.updateLights(A.state.lightsArray),Se=this.localClippingEnabled,xe=We.init(this.clippingPlanes,Se),xe===!0&&We.setGlobalState(this.clippingPlanes,t),R!==null&&Ke.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];lt(o,n,t,e),r.add(o)}else lt(i,n,t,e),r.add(i)}}),A=P.pop(),R!==null&&R.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=U.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ut=null;function dt(e){ut&&ut(e)}function ft(){pt.stop()}function J(){pt.start()}let pt=new ma;pt.setAnimationLoop(dt),typeof self<`u`&&pt.setContext(self),this.setAnimationLoop=function(e){ut=e,K.setAnimationLoop(e),e===null?pt.stop():pt.start()},K.addEventListener(`sessionstart`,ft),K.addEventListener(`sessionend`,J),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){G(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(L===!0)return;R!==null&&R.renderStart(e,t);let n=K.enabled===!0&&K.isPresenting===!0,r=F!==null&&(z===null||n)&&F.begin(I,z);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(t),t=K.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,z),A=Ue.get(e,P.length),A.init(t),A.state.textureUnits=Pe.getTextureUnits(),P.push(A),Ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?be.setFromArrayCamera(t):ye.setFromProjectionMatrix(Ce,Ve,t.reversedDepth),Se=this.localClippingEnabled,xe=We.init(this.clippingPlanes,Se),O=He.get(e,N.length),O.init(),N.push(O),this.info.render.frame++,K.enabled===!0&&K.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&mt(e,t,-1/0,I.sortObjects)}mt(e,t,0,I.sortObjects),O.finish(),R!==null&&R.updateLights(A.state.lightsArray),I.sortObjects===!0&&O.sort(me,he),De=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,De&&Je.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),xe===!0&&We.beginShadows();let i=A.state.shadowsArray;if(Ke.render(i,e,t),xe===!0&&We.endShadows(),(r&&F.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];gt(n,r,e,a)}De&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ht(O,e,n,n.viewport)}}else r.length>0&&gt(n,r,e,t),De&&Je.render(e),ht(O,e,t)}z!==null&&ie===0&&(Pe.updateMultisampleRenderTarget(z),Pe.updateRenderTargetMipmap(z)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),et.resetDefaultState(),B=-1,ae=null,P.pop(),P.length>0?(A=P[P.length-1],Pe.setTextureUnits(A.state.textureUnits),xe===!0&&We.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,N.pop(),O=N.length>0?N[N.length-1]:null,R!==null&&R.renderEnd()};function mt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?be:ye;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Te.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ce);let i=Re.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Te.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?be:ye;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Re.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Te.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Te.copy(e.boundingSphere.center)),Te.applyMatrix4(e.matrixWorld).applyMatrix4(Ce)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Te.z,s,t)}}else a.visible&&O.push(e,i,a,n,Te.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)mt(i[e],t,n,r)}function ht(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),xe===!0&&We.setGlobalState(I.clippingPlanes,n),r&&H.viewport(oe.copy(r)),i.length>0&&vt(i,t,n),a.length>0&&vt(a,t,n),o.length>0&&vt(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function gt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new kt(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,je.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||oe;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),c=I.getActiveCubeFace(),d=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(le),ue=I.getClearAlpha(),ue<1&&I.setClearColor(16777215,.5),I.clear(),De&&Je.render(n);let f=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),xe===!0&&We.setGlobalState(I.clippingPlanes,r),vt(e,n,r),Pe.updateMultisampleRenderTarget(a),Pe.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,yt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Pe.updateMultisampleRenderTarget(a),Pe.updateRenderTargetMipmap(a))}I.setRenderTarget(s,c,d),I.setClearColor(le,ue),p!==void 0&&(r.viewport=p),I.toneMapping=f}function vt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&yt(o,t,n,s,l,c)}}function yt(e,t,n,r,i,a){R!==null&&i.isNodeMaterial&&R.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function bt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function xt(e,t,n){t.isScene!==!0&&(t=Ee);let r=U.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Fe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ot),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return wt(e,s),d}else s.uniforms=ze.getUniforms(e),R!==null&&e.isNodeMaterial&&R.build(e,n,s),e.onBeforeCompile(s,I),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=We.uniform),wt(e,s),r.needsLights=Dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=bt(A.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function St(e,t,n,r,i){let a=U.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=xt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=os.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function wt(e,t){let n=U.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t,n,r,i){t.isScene!==!0&&(t=Ee),Pe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:_t.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Fe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=U.get(r),y=A.state.lights;if(xe===!0&&(Se===!0||e!==ae)){let t=e===ae&&r.id===B;We.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==We.numPlanes||v.numIntersection!==We.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===bt(A.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?St(r,t,i,s,h):xt(r,t,i),R&&r.isNodeMaterial&&R.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(H.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==B&&(B=r.id,w=!0),C||ae!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(V,`projectionMatrix`,e.projectionMatrix),E.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(V,we.setFromMatrixPosition(e.matrixWorld)),je.logarithmicDepthBuffer&&E.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),ae!==e&&(ae=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(V,`sunShadowMap`,y.state.sunShadowMap,Pe),y.state.directionalShadowMap.length>0&&E.setValue(V,`directionalShadowMap`,y.state.directionalShadowMap,Pe),y.state.spotShadowMap.length>0&&E.setValue(V,`spotShadowMap`,y.state.spotShadowMap,Pe),y.state.pointShadowMap.length>0&&E.setValue(V,`pointShadowMap`,y.state.pointShadowMap,Pe)),i.isSkinnedMesh){E.setOptional(V,i,`bindMatrix`),E.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(V,`boneTexture`,e.boneTexture,Pe))}i.isBatchedMesh&&(E.setOptional(V,i,`batchingTexture`),E.setValue(V,`batchingTexture`,i._matricesTexture,Pe),E.setOptional(V,i,`batchingIdTexture`),E.setValue(V,`batchingIdTexture`,i._indirectTexture,Pe),E.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(V,`batchingColorTexture`,i._colorsTexture,Pe));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Ye.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(V,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Cc()),w){if(E.setValue(V,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&Et(O,T),a&&r.fog===!0&&Be.refreshFogUniforms(O,a),Be.refreshMaterialUniforms(O,r,pe,fe,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of A.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}os.upload(V,Ct(v),O,Pe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(os.upload(V,Ct(v),O,Pe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(V,`center`,i.center),E.setValue(V,`modelViewMatrix`,i.modelViewMatrix),E.setValue(V,`normalMatrix`,i.normalMatrix),E.setValue(V,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,S),tt.bind(n,S)}}return S}function Et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(e,t,n){let r=U.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),U.get(e.texture).__webglTexture=t,U.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=U.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){z=e,re=t,ie=n;let r=null,i=!1,a=!1;if(e){let o=U.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(V.FRAMEBUFFER,o.__webglFramebuffer),oe.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest,H.viewport(oe),H.scissor(se),H.setScissorTest(ce),B=-1;return}if(o.__webglFramebuffer===void 0)Pe.setupRenderTarget(e);else if(o.__hasExternalTextures)Pe.rebindTextures(e,U.get(e.texture).__webglTexture,U.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&U.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Pe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=U.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Pe.useMultisampledRTT(e)===!1?U.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,oe.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest}else oe.copy(ge).multiplyScalar(pe).floor(),se.copy(_e).multiplyScalar(pe).floor(),ce=ve;if(n!==0&&(r=ee),H.bindFramebuffer(V.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(oe),H.scissor(se),H.setScissorTest(ce),i){let r=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=U.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}B=-1};function Ot(e){let t=U.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=je.textureFormatReadable(e.format),t.__typeReadable=je.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let u=Ot(o);if(u.__formatReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=z===null?null:U.get(z).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let d=Ot(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let p=z===null?null:U.get(z).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,p);let m=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Xe(V,m,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(f),V.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Pe.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(Pe.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Pe.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(Pe.setTexture2D(t,0),v=V.TEXTURE_2D),H.activeTexture(V.TEXTURE0),H.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),H.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),H.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=H.getParameter(V.UNPACK_ROW_LENGTH),b=H.getParameter(V.UNPACK_IMAGE_HEIGHT),x=H.getParameter(V.UNPACK_SKIP_PIXELS),S=H.getParameter(V.UNPACK_SKIP_ROWS),C=H.getParameter(V.UNPACK_SKIP_IMAGES);H.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),H.pixelStorei(V.UNPACK_SKIP_PIXELS,l),H.pixelStorei(V.UNPACK_SKIP_ROWS,u),H.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=U.get(e),r=U.get(t),h=U.get(n.__renderTarget),g=U.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||U.has(e)){let n=U.get(e),r=U.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,te),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);H.pixelStorei(V.UNPACK_ROW_LENGTH,y),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),H.pixelStorei(V.UNPACK_SKIP_PIXELS,x),H.pixelStorei(V.UNPACK_SKIP_ROWS,S),H.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){U.get(e).__webglFramebuffer===void 0&&Pe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Pe.setTextureCube(e,0):e.isData3DTexture?Pe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Pe.setTexture2DArray(e,0):Pe.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){re=0,ie=0,z=null,H.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ve}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}},$=`
precision highp float; precision highp int; precision highp sampler2DArray; precision highp sampler2DShadow; precision highp sampler3D;
#define PI 3.14159265359
#define saturate(x) clamp(x, 0.0, 1.0)
uniform vec3 uSunDir; uniform vec3 uSunIllum; uniform vec3 uCamWorld; uniform vec3 uOrigin; uniform float uTime;
uniform vec4 uWorldRect;   // inner grid: x0, z0, 1/sizeX, 1/sizeZ
uniform vec4 uCloud;       // base, top, coverage, densityScale
uniform vec4 uBiome;       // snowLine, treeLine, floorY, summitY
float hash11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float hash13(vec3 p3){ p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1,0)), f.x), mix(hash12(i+vec2(0,1)), hash12(i+vec2(1,1)), f.x), f.y); }
float fbm2(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
float ign(vec2 px){ return fract(52.9829189 * fract(dot(px, vec2(0.06711056, 0.00583715)))); }
float luma(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
`,Tc=`
const float RG = 6360.0, RT = 6460.0;
const vec3 RAY_S = vec3(5.802e-3, 13.558e-3, 33.1e-3); const float RAY_H = 8.0;
const float MIE_S = 3.996e-3, MIE_A = 4.40e-4, MIE_H = 1.2;
const vec3 OZO_A = vec3(0.650e-3, 1.881e-3, 0.085e-3);
uniform sampler2D uTransLUT; uniform sampler2D uMultiLUT; uniform sampler2D uSkyLUT;
uniform vec4 uHaze; // extra ground haze: mie density at floor (1/km), scale height (km), floor altitude (km), turbidity
float raySphere(vec3 ro, vec3 rd, float r){ float b = dot(ro, rd), c = dot(ro, ro) - r*r, d = b*b - c; if (d < 0.0) return -1.0; d = sqrt(d); float t0 = -b - d, t1 = -b + d; return t0 > 0.0 ? t0 : t1; }
void atmoMedium(float h, out vec3 scatR, out float scatM, out vec3 ext){
  float alt = max(h - RG, 0.0);
  float dR = exp(-alt / RAY_H), dM = exp(-alt / MIE_H) * uHaze.w + uHaze.x * exp(-max(alt - uHaze.z, 0.0) / uHaze.y);
  float dO = max(0.0, 1.0 - abs(alt - 25.0) / 15.0);
  scatR = RAY_S * dR; scatM = MIE_S * dM; ext = scatR + vec3(scatM + MIE_A * dM) + OZO_A * dO;
}
vec2 transUV(float h, float mu){ return vec2(saturate(0.5 + 0.5 * mu), saturate((h - RG) / (RT - RG))); }
vec3 transLUT(float h, float mu){ return texture(uTransLUT, transUV(h, mu)).rgb; }
vec3 multiLUT(float h, float muS){ return texture(uMultiLUT, vec2(saturate(0.5 + 0.5 * muS), saturate((h - RG) / (RT - RG)))).rgb; }
float phaseR(float c){ return 3.0 / (16.0 * PI) * (1.0 + c*c); }
float phaseM(float c, float g){ float g2 = g*g; return (1.0 - g2) / (4.0 * PI * pow(max(1.0 + g2 - 2.0*g*c, 1e-4), 1.5)); }
float phaseMie(float c){ return mix(phaseM(c, 0.8), phaseM(c, -0.2), 0.12); }
// sky-view LUT lookup: dir in world space (y up), camera altitude in metres
vec2 skyUV(vec3 d, float camY){
  float h = RG + max(camY, 1.0) * 0.001; float beta = acos(sqrt(max(h*h - RG*RG, 0.0)) / h); float zh = PI - beta;
  float vz = acos(clamp(d.y, -1.0, 1.0)); float v;
  if (vz < zh) { float c = 1.0 - sqrt(1.0 - vz / zh); v = c * 0.5; } else { float c = sqrt(saturate((vz - zh) / beta)); v = c * 0.5 + 0.5; }
  float az = atan(d.z, d.x) - atan(uSunDir.z, uSunDir.x);
  return vec2(az / (2.0 * PI), clamp(v, 0.004, 0.996));
}
vec3 skyRadiance(vec3 d, float camY){ return texture(uSkyLUT, skyUV(d, camY)).rgb; }
vec3 sunTransmittance(float worldY){ return transLUT(RG + max(worldY, 0.0) * 0.001, uSunDir.y); }
`,Ec=`
uniform sampler2D uSunShadowTex; uniform sampler2D uCloudShadowTex; uniform vec4 uCloudShadowRect; // centre xz (world), 1/size, _
uniform sampler2DShadow uCSMTex; uniform mat4 uCSMMat[4]; uniform vec4 uCSMSplit; uniform vec4 uCSMParams; // texel, enabled, softness, _
uniform sampler2D uAOTex; uniform vec2 uInvRes; uniform vec3 uSH[9];
float terrainShadow(vec3 wp){
  vec2 uv = (wp.xz - uWorldRect.xy) * uWorldRect.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 1.0;
  float s = texture(uSunShadowTex, uv).r;
  float d = wp.y - s; // > 0 lit
  return smoothstep(-0.6, 5.0, d + 2.0);
}
float cloudShadow(vec3 wp){
  // project along the sun direction to the cloud mid plane
  float midY = 0.5 * (uCloud.x + uCloud.y); if (wp.y > uCloud.y) return 1.0;
  vec3 p = wp + uSunDir * ((midY - wp.y) / max(uSunDir.y, 0.05));
  vec2 uv = (p.xz - uCloudShadowRect.xy) * uCloudShadowRect.z + 0.5;
  float t = texture(uCloudShadowTex, uv).r;
  float edge = max(abs(uv.x - 0.5), abs(uv.y - 0.5)); t = mix(t, 0.75, smoothstep(0.42, 0.5, edge));
  if (wp.y > uCloud.x) t = mix(t, 1.0, saturate((wp.y - uCloud.x) / (uCloud.y - uCloud.x)));
  return t;
}
float csmTap(int c, vec3 wp, vec2 off){
  vec4 sc = uCSMMat[c] * vec4(wp - uOrigin, 1.0);
  vec2 tile = vec2(float(c & 1), float(c >> 1)) * 0.5;
  vec2 uv = clamp(sc.xy * 0.5 + 0.5, 0.002, 0.998) * 0.5 + tile + off;
#ifdef REVERSED_Z
  return texture(uCSMTex, vec3(uv, sc.z + 0.0012));
#else
  return texture(uCSMTex, vec3(uv, sc.z * 0.5 + 0.5 - 0.0012));
#endif
}
float csmShadow(vec3 wp, float viewDist, float nz){
  if (uCSMParams.y < 0.5 || viewDist > uCSMSplit.w) return 1.0;
  int c = viewDist < uCSMSplit.x ? 0 : viewDist < uCSMSplit.y ? 1 : viewDist < uCSMSplit.z ? 2 : 3;
  float tx = uCSMParams.x; float s = 0.0; float rot = ign(gl_FragCoord.xy + 13.0 * fract(uTime)) * 6.2832;
  mat2 R = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
  s += csmTap(c, wp, R * vec2(-0.94, -0.40) * tx * 1.6); s += csmTap(c, wp, R * vec2(0.95, -0.77) * tx * 1.6);
  s += csmTap(c, wp, R * vec2(-0.09, 0.93) * tx * 1.6);  s += csmTap(c, wp, R * vec2(0.34, 0.29) * tx * 1.6);
  s += csmTap(c, wp, R * vec2(-0.5, 0.1) * tx * 1.6);
  s *= 0.2;
  float fade = smoothstep(uCSMSplit.w * 0.85, uCSMSplit.w, viewDist);
  return mix(s, 1.0, fade);
}
vec3 shIrradiance(vec3 n){
  return max(vec3(0.0), uSH[0] + uSH[1]*n.y + uSH[2]*n.z + uSH[3]*n.x + uSH[4]*n.x*n.y + uSH[5]*n.y*n.z + uSH[6]*(3.0*n.z*n.z - 1.0) + uSH[7]*n.x*n.z + uSH[8]*(n.x*n.x - n.y*n.y));
}
float D_GGX(float nh, float a){ float a2 = a*a; float d = nh*nh*(a2 - 1.0) + 1.0; return a2 / (PI * d * d + 1e-6); }
float V_Smith(float nv, float nl, float a){ float k = a * 0.5; return 0.25 / ((nv * (1.0 - k) + k) * (nl * (1.0 - k) + k) + 1e-5); }
vec3 F_Schlick(vec3 f0, float vh){ return f0 + (1.0 - f0) * pow(1.0 - vh, 5.0); }
struct Surf { vec3 albedo; vec3 N; float rough; float ao; float f0; float sss; float shadow; float skyVis; vec3 sssColor; };
// screen-space AO/contact-shadow texture: r = ao, g = contact shadow
vec2 screenAO(){
#ifdef NO_SCREEN_AO
  return vec2(1.0);
#else
  return texture(uAOTex, gl_FragCoord.xy * uInvRes).rg;
#endif
}
bool skfOk3(vec3 v){ uvec3 b = floatBitsToUint(v) & uvec3(0x7f800000u); return all(notEqual(b, uvec3(0x7f800000u))); }
vec3 shadeSurface(Surf s, vec3 wp, vec3 V){
  vec3 L = uSunDir;
#ifdef SKF_SAN
  if (!skfOk3(s.N) || dot(s.N, s.N) < 1e-8) s.N = vec3(0.0, 1.0, 0.0); s.shadow = skfOk3(vec3(s.shadow)) ? clamp(s.shadow, 0.0, 1.0) : 1.0; s.ao = skfOk3(vec3(s.ao)) ? clamp(s.ao, 0.0, 1.0) : 1.0; s.albedo = skfOk3(s.albedo) ? max(s.albedo, vec3(0.0)) : vec3(0.08); s.sssColor = skfOk3(s.sssColor) ? max(s.sssColor, vec3(0.0)) : vec3(0.0);
#endif
  vec3 H = L + V; H = dot(H, H) > 1e-6 ? normalize(H) : s.N;
  float nl = dot(s.N, L), nv = max(dot(s.N, V), 1e-3), nh = max(dot(s.N, H), 0.0), vh = max(dot(V, H), 0.0);
  vec3 sunC = uSunIllum * sunTransmittance(wp.y);
  vec2 sao = screenAO();
#ifdef SKF_SAN
  if (!skfOk3(vec3(sao, 0.0))) sao = vec2(1.0); sao = clamp(sao, 0.0, 1.0);
#endif

  float sh = s.shadow * mix(1.0, sao.g, 0.9);
  float wrap = s.sss * 0.35; float nlw = saturate((nl + wrap) / (1.0 + wrap));
  float a = max(s.rough * s.rough, 0.02);
  vec3 F = F_Schlick(vec3(s.f0), vh);
  vec3 spec = F * D_GGX(nh, a) * V_Smith(nv, saturate(nl), a) * saturate(nl);
  vec3 direct = (s.albedo / PI * nlw * (1.0 - F) + spec) * sunC * sh;
  // translucency (foliage / snow): light leaking through, tinted
  direct += s.sssColor * s.sss * sunC * sh * (saturate(-nl) * 0.5 + 0.12) * (0.4 + 0.6 * pow(saturate(dot(-V, L)), 3.0)) / PI;
  float ao = min(s.ao, sao.r) * s.skyVis;
  vec3 amb = shIrradiance(s.N) * s.albedo / PI * ao;
  // bounce from sunlit ground around (cheap GI): upward-facing light on down-facing normals
  amb += s.albedo / PI * sunC * 0.07 * saturate(0.4 - s.N.y) * ao * saturate(uSunDir.y * 2.0);
  vec3 R = reflect(-V, s.N); R.y = abs(R.y) * 0.8 + 0.2;
  vec3 envSpec = shIrradiance(normalize(R)) / PI * F_Schlick(vec3(s.f0), nv) * (1.0 - s.rough) * ao * mix(0.3, 1.0, sh);
  vec3 o_ = direct + amb + envSpec; 
#ifdef SKF_SAN
  return skfOk3(o_) ? max(o_, vec3(0.0)) : s.albedo * shIrradiance(vec3(0.0, 1.0, 0.0)) / PI;
#else
  return skfOk3(o_) ? max(o_, vec3(0.0)) : vec3(0.0);
#endif

}
`,Dc=`
out vec2 vUv;
void main(){ vUv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2); gl_Position = vec4(vUv * 2.0 - 1.0, 0.0, 1.0); }
`,Oc={W:64,H:36,D:32,TX:8,TY:4,FAR:9e4},kc=$+Tc+`
in vec2 vUv; out vec4 fragColor;
void main(){
  float mu = vUv.x * 2.0 - 1.0, h = RG + vUv.y * (RT - RG);
  vec3 ro = vec3(0.0, h, 0.0), rd = vec3(sqrt(max(1.0 - mu*mu, 0.0)), mu, 0.0);
  float tG = raySphere(ro, rd, RG), tT = raySphere(ro, rd, RT);
  float tMax = tT; if (tG > 0.0 && dot(ro + rd * 1e-3, rd) < 0.0 && tG < tT) tMax = tG;
  vec3 od = vec3(0.0); const int N = 48; float dt = tMax / float(N);
  for (int i = 0; i < N; i++) { vec3 p = ro + rd * (float(i) + 0.5) * dt; vec3 sr, e; float sm; atmoMedium(length(p), sr, sm, e); od += e * dt; }
  fragColor = vec4(exp(-od), 1.0);
}`,Ac=$+Tc+`
in vec2 vUv; out vec4 fragColor;
void main(){
  float muS = vUv.x * 2.0 - 1.0, h = RG + max(vUv.y, 0.002) * (RT - RG);
  vec3 ro = vec3(0.0, h, 0.0), sd = vec3(sqrt(max(1.0 - muS*muS, 0.0)), muS, 0.0);
  vec3 L2 = vec3(0.0), fms = vec3(0.0);
  const int SQ = 8; const int N = 20;
  for (int i = 0; i < SQ; i++) for (int j = 0; j < SQ; j++) {
    float th = PI * (float(i) + 0.5) / float(SQ), ph = acos(1.0 - 2.0 * (float(j) + 0.5) / float(SQ));
    vec3 rd = vec3(cos(th) * sin(ph), cos(ph), sin(th) * sin(ph)); // half sphere in theta mirrored by symmetry
    float tG = raySphere(ro, rd, RG), tT = raySphere(ro, rd, RT); float tMax = tT; bool hit = false;
    if (tG > 0.0 && tG < tT) { tMax = tG; hit = true; }
    float dt = tMax / float(N); vec3 T = vec3(1.0), lum = vec3(0.0), f = vec3(0.0);
    for (int k = 0; k < N; k++) {
      vec3 p = ro + rd * (float(k) + 0.5) * dt; float ph2 = length(p); vec3 sr, e; float sm; atmoMedium(ph2, sr, sm, e);
      vec3 st = exp(-e * dt); vec3 scat = sr + vec3(sm);
      vec3 Tsun = transLUT(ph2, dot(p, sd) / ph2);
      float tGs = raySphere(p, sd, RG); if (tGs > 0.0) Tsun = vec3(0.0);
      vec3 S = scat * Tsun / (4.0 * PI);
      lum += T * (S - S * st) / e; f += T * (scat - scat * st) / e; T *= st;
    }
    if (hit) { vec3 p = ro + rd * tMax; float nl = saturate(dot(normalize(p), sd)); lum += T * transLUT(RG, nl) * nl * 0.3 / PI; }
    L2 += lum; fms += f;
  }
  L2 /= float(SQ * SQ); fms /= float(SQ * SQ);
  fragColor = vec4(L2 / (1.0 - fms), 1.0);
}`,jc=$+Tc+`
uniform vec3 uGroundAlbedo;
vec3 marchSky(vec3 ro, vec3 rd, vec3 sd, int N){
  float tG = raySphere(ro, rd, RG), tT = raySphere(ro, rd, RT); if (tT < 0.0) return vec3(0.0);
  float tMax = tT; bool hit = false; if (tG > 0.0 && tG < tT) { tMax = tG; hit = true; }
  float c = dot(rd, sd); float pR = phaseR(c), pM = phaseMie(c);
  vec3 T = vec3(1.0), L = vec3(0.0); float t = 0.0;
  for (int i = 0; i < N; i++) {
    float nt = tMax * pow((float(i) + 1.0) / float(N), 2.0); float dt = nt - t; vec3 p = ro + rd * (t + dt * 0.4); t = nt;
    float h = length(p); vec3 sr, e; float sm; atmoMedium(h, sr, sm, e);
    vec3 st = exp(-e * dt); float muS = dot(p, sd) / h;
    vec3 Tsun = transLUT(h, muS); if (raySphere(p, sd, RG) > 0.0) Tsun *= 0.0;
    vec3 S = (sr * pR + vec3(sm) * pM) * Tsun + (sr + vec3(sm)) * multiLUT(h, muS);
    L += T * (S - S * st) / e; T *= st;
  }
  if (hit) { vec3 p = ro + rd * tMax; float nl = saturate(dot(normalize(p), sd)); L += T * uGroundAlbedo / PI * (transLUT(RG, nl) * nl + multiLUT(RG, nl) * PI); }
  return L;
}
in vec2 vUv; out vec4 fragColor;
void main(){
  float h = RG + max(uCamWorld.y, 1.0) * 0.001; float beta = acos(sqrt(max(h*h - RG*RG, 0.0)) / h); float zh = PI - beta; float vz;
  if (vUv.y < 0.5) { float c = 1.0 - vUv.y * 2.0; c = 1.0 - c * c; vz = zh * c; } else { float c = vUv.y * 2.0 - 1.0; vz = zh + beta * c * c; }
  float az = vUv.x * 2.0 * PI + atan(uSunDir.z, uSunDir.x);
  vec3 rd = vec3(cos(az) * sin(vz), cos(vz), sin(az) * sin(vz));
  fragColor = vec4(marchSky(vec3(0.0, h, 0.0), rd, uSunDir, 36) * uSunIllum, 1.0);
}`,Mc=$+Tc+`
uniform sampler2D uSunShadowTex; uniform sampler2D uCloudShadowTex; uniform vec4 uCloudShadowRect;
uniform mat4 uInvViewProj; uniform vec3 uCamRender; uniform vec3 uAPDim; uniform float uAPFar;
in vec2 vUv; out vec4 fragColor;
float tShadow(vec3 wp){ vec2 uv = (wp.xz - uWorldRect.xy) * uWorldRect.zw; if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 1.0; return smoothstep(-4.0, 22.0, wp.y - texture(uSunShadowTex, uv).r); }
float cShadow(vec3 wp){ float midY = 0.5 * (uCloud.x + uCloud.y); if (wp.y > uCloud.y) return 1.0; vec3 p = wp + uSunDir * ((midY - wp.y) / max(uSunDir.y, 0.05));
  vec2 uv = (p.xz - uCloudShadowRect.xy) * uCloudShadowRect.z + 0.5; float t = texture(uCloudShadowTex, uv).r; float e = max(abs(uv.x - 0.5), abs(uv.y - 0.5)); t = mix(t, 0.75, smoothstep(0.42, 0.5, e));
  if (wp.y > uCloud.x) t = mix(t, 1.0, saturate((wp.y - uCloud.x) / (uCloud.y - uCloud.x))); return t; }
void main(){
  vec2 tile = floor(vUv * vec2(${Oc.TX}.0, ${Oc.TY}.0)); vec2 uv = fract(vUv * vec2(${Oc.TX}.0, ${Oc.TY}.0));
  // keep tile-edge texels on the frustum edge (half-texel clamp)
  uv = (uv * uAPDim.xy - 0.5) / (uAPDim.xy - 1.0);
  int slice = int(tile.x + tile.y * ${Oc.TX}.0);
  vec4 pn = uInvViewProj * vec4(uv * 2.0 - 1.0, 0.5, 1.0); vec3 rd = normalize(pn.xyz / pn.w - uCamRender);
  float c = dot(rd, uSunDir); float pR = phaseR(c), pM = phaseMie(c);
  vec3 T = vec3(1.0), L = vec3(0.0); float t = 0.0; float jit = 0.0;
  for (int i = 0; i <= slice; i++) {
    float f1 = (float(i) + 1.0) / uAPDim.z; float nt = uAPFar * f1 * f1; float dt = nt - t; float tm = t + dt * (0.5 + 0.3 * jit); t = nt;
    vec3 wp = uCamWorld + rd * tm; float h = RG + max(wp.y, 0.0) * 0.001;
    vec3 sr, e; float sm; atmoMedium(h, sr, sm, e); float dk = dt * 0.001;
    vec3 st = exp(-e * dk);
    float vis = tShadow(wp) * cShadow(wp);
    vec3 Tsun = transLUT(h, uSunDir.y) * vis;
    vec3 S = (sr * pR + vec3(sm) * pM) * Tsun + (sr + vec3(sm)) * multiLUT(h, uSunDir.y) * mix(0.55, 1.0, vis);
    L += T * (S - S * st) / e; T *= st;
  }
  fragColor = vec4(L * uSunIllum, dot(T, vec3(0.3333)));
}`,Nc=`
uniform sampler2D uAPTex; uniform float uAPFar;
vec4 sampleAP(vec2 uv, float dist){
  float w = sqrt(saturate(dist / uAPFar)) * ${Oc.D}.0 - 0.5; float s0 = clamp(floor(w), 0.0, ${Oc.D-1}.0), s1 = min(s0 + 1.0, ${Oc.D-1}.0), f = saturate(w - s0);
  vec2 dim = vec2(${Oc.W}.0, ${Oc.H}.0); vec2 inner = (uv * (dim - 1.0) + 0.5) / dim;
  vec2 t0 = (vec2(mod(s0, ${Oc.TX}.0), floor(s0 / ${Oc.TX}.0)) + inner) / vec2(${Oc.TX}.0, ${Oc.TY}.0);
  vec2 t1 = (vec2(mod(s1, ${Oc.TX}.0), floor(s1 / ${Oc.TX}.0)) + inner) / vec2(${Oc.TX}.0, ${Oc.TY}.0);
  vec4 a = texture(uAPTex, t0), b = texture(uAPTex, t1); vec4 r = mix(a, b, f);
  if (w < 0.0) r = mix(vec4(0.0, 0.0, 0.0, 1.0), a, saturate(w + 1.0));
  return r;
}`,Pc=class{constructor(e){this.e=e;let n=e.G,r=(e,t,n=s)=>new kt(e,t,{type:_,format:T,minFilter:n,magFilter:n,depthBuffer:!1,generateMipmaps:!1});this.trans=r(256,64),this.multi=r(32,32),this.sky=r(192,108),this.ap=r(Oc.W*Oc.TX,Oc.H*Oc.TY),this.sky.texture.wrapS=t,n.uTransLUT.value=this.trans.texture,n.uMultiLUT.value=this.multi.texture,n.uSkyLUT.value=this.sky.texture,n.uAPTex.value=this.ap.texture,n.uAPFar.value=Oc.FAR;let i=e=>({...n,...e});this.mTrans=e.fsMat(kc,i({})),this.mMulti=e.fsMat(Ac,i({})),this.mSky=e.fsMat(jc,i({uGroundAlbedo:n.uGroundAlbedo})),this.mAP=e.fsMat(Mc,i({uInvViewProj:{value:new X},uCamRender:{value:new q},uAPDim:{value:new q(Oc.W,Oc.H,Oc.D)}})),this.dirty=!0,this.shFrame=0,this.shBusy=!1,this.buf=new Float32Array(82944)}precompute(){let e=this.e;e.pass(this.mTrans,this.trans),e.pass(this.mMulti,this.multi),this.dirty=!1}update(e){let t=this.e;this.dirty&&this.precompute(),t.pass(this.mSky,this.sky),this.mAP.uniforms.uInvViewProj.value.copy(t.invViewProjNoJitter),this.mAP.uniforms.uCamRender.value.copy(e.position),t.pass(this.mAP,this.ap),!this.shBusy&&this.shFrame++%90==0&&this.updateSH()}async updateSH(e=!1){let t=this.e,n=t.renderer;this.shBusy=!0;try{let r=new Uint16Array(82944);e?n.readRenderTargetPixels(this.sky,0,0,192,108,r):await n.readRenderTargetPixelsAsync(this.sky,0,0,192,108,r);let i=t.G.uCamWorld.value.y,a=6360+Math.max(i,1)*.001,o=Math.acos(Math.sqrt(Math.max(a*a-40449600,0))/a),s=Math.PI-o,c=t.G.uSunDir.value,l=Math.atan2(c.z,c.x),u=new Float64Array(27),d=Zn.fromHalfFloat,f=0;for(let e=0;e<108;e+=2){let t=(e+.5)/108,n,i;if(t<.5){let e=1-t*2;n=s*(1-e*e),i=s*2*e*(4/108)}else{let e=t*2-1;n=s+o*e*e,i=o*2*e*(4/108)}let a=Math.sin(n),c=Math.max(i,1e-5)*a*(2*Math.PI/48);for(let t=0;t<192;t+=4){let i=(t+.5)/192*2*Math.PI+l,o=Math.cos(i)*a,s=Math.cos(n),p=Math.sin(i)*a,m=(e*192+t)*4,h=[.282095,.488603*s,.488603*p,.488603*o,1.092548*o*s,1.092548*s*p,.315392*(3*p*p-1),1.092548*o*p,.546274*(o*o-s*s)];for(let e=0;e<3;e++){let t=d(r[m+e])*c;for(let n=0;n<9;n++)u[n*3+e]+=t*h[n]}f+=c}}let p=4*Math.PI/f,m=[Math.PI,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398],h=[.282095,.488603,.488603,.488603,1.092548,1.092548,.315392,1.092548,.546274];for(let e=0;e<9;e++)t.G.uSH.value[e].set(u[e*3]*p*m[e]*h[e],u[e*3+1]*p*m[e]*h[e],u[e*3+2]*p*m[e]*h[e])}catch{}this.shBusy=!1}},Fc=$+`
in vec2 vUv; out vec4 fragColor; uniform vec4 uRS;
#define ITEX(t, uv) texture(t, min((uv) * uRS.xy, uRS.xy - uRS.zw))
`,Ic=Fc+`
uniform sampler2D uDepth; uniform mat4 uInvProj;
void main(){
  float d = texture(uDepth, vUv * uRS.xy).r;
#ifdef REVERSED_Z
  if (d <= 0.0) { fragColor = vec4(1e6); return; } vec4 v = uInvProj * vec4(0.0, 0.0, d, 1.0);
#else
  if (d >= 1.0) { fragColor = vec4(1e6); return; } vec4 v = uInvProj * vec4(0.0, 0.0, d * 2.0 - 1.0, 1.0);
#endif
  fragColor = vec4(-v.z / v.w);
}`,Lc=Fc+((window.__skfFlags||{}).aosafe?`#define SKF_AOSAFE 1
`:``)+`
bool skfOkA(vec3 v){ uvec3 b = floatBitsToUint(v) & uvec3(0x7f800000u); return all(notEqual(b, uvec3(0x7f800000u))); }
uniform sampler2D uLin; uniform mat4 uInvProj; uniform mat4 uProj; uniform vec3 uSunView; uniform float uFrame; uniform vec2 uAOP; // radius, steps
// Depth is read by integer texel. These passes run at half resolution, so their pixel centres sit exactly on the corner of four
// depth texels; a NEAREST lookup there is decided by float rounding, which at a non-integer render scale flips in bands across the screen.
ivec2 linIP(vec2 uv){ vec2 sz = vec2(textureSize(uLin, 0)); return clamp(ivec2(floor(uv * uRS.xy * sz + 0.25)), ivec2(0), ivec2(uRS.xy * sz + 0.5) - 1); }
float linAt(vec2 uv){ return texelFetch(uLin, linIP(uv), 0).r; }
vec3 vpos(vec2 uv){ ivec2 ip = linIP(uv); float l = texelFetch(uLin, ip, 0).r; vec2 su = (vec2(ip) + 0.5) / (uRS.xy * vec2(textureSize(uLin, 0))); vec4 p = uInvProj * vec4(su * 2.0 - 1.0, 0.5, 1.0); vec3 r = p.xyz / p.w; r /= -r.z; return r * l; }
vec2 proj(vec3 p){ vec4 c = uProj * vec4(p, 1.0); return c.xy / c.w * 0.5 + 0.5; }
void main(){
  vec3 P = vpos(vUv); if (P.z < -60000.0) { fragColor = vec4(1.0); return; }
  vec2 px = uRS.zw / uRS.xy * 2.0;
  vec3 r = vpos(vUv + vec2(px.x, 0.0)), l = vpos(vUv - vec2(px.x, 0.0)), u = vpos(vUv + vec2(0.0, px.y)), d = vpos(vUv - vec2(0.0, px.y));
  vec3 dx = abs(r.z - P.z) < abs(l.z - P.z) ? r - P : P - l; vec3 dy = abs(u.z - P.z) < abs(d.z - P.z) ? u - P : P - d;
  
#ifdef SKF_AOSAFE
  vec3 cN = cross(dx, dy); float cL = dot(cN, cN); vec3 N = (skfOkA(cN) && cL > 1e-30) ? cN * inversesqrt(cL) : vec3(0.0, 0.0, 1.0);
#else
  vec3 N = normalize(cross(dx, dy));
#endif
  float dist = -P.z;
  float n1 = ign(gl_FragCoord.xy + 5.588238 * mod(uFrame, 64.0));
  float rad = uAOP.x * (1.0 + dist * 0.015); float srad = min(rad * uProj[1][1] * 0.5 / dist, 0.09);
  float occ = 0.0; const int DIRS = 3; int steps = int(uAOP.y);
  for (int i = 0; i < DIRS; i++) {
    float a = (float(i) + n1) * PI / float(DIRS); vec2 dir = vec2(cos(a), sin(a) * uProj[1][1] / uProj[0][0]);
    for (int s = -1; s <= 1; s += 2) {
      float h = 0.0;
      for (int k = 1; k <= steps; k++) {
        float t = (float(k) - 0.5 + 0.5 * n1) / float(steps); vec2 uv = vUv + dir * float(s) * srad * t * t;
        if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) break;
        vec3 S = vpos(uv) - P; float len = length(S); float e = dot(N, S) / (len + 1e-4) - 0.06;
        h = max(h, e * saturate(1.0 - len / (rad * 1.6)));
      }
      occ += h;
    }
  }
  float ao = saturate(1.0 - occ / float(DIRS * 2) * 1.7); ao = ao * ao * 0.6 + ao * 0.4;
  // contact shadows: short screen-space march toward the sun
  float cs = 1.0; float L = clamp(dist * 0.035, 0.25, 26.0); vec3 sp = P + N * (0.01 + dist * 0.0015); float thick = 0.25 + dist * 0.02;
  if (dot(N, uSunView) > -0.2) for (int k = 1; k <= 10; k++) {
    float t = (float(k) - 1.0 + n1) / 10.0; vec3 q = sp + uSunView * L * t; vec2 uv = proj(q);
    if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) break;
    float sd = linAt(uv); float dz = -q.z - sd;
    if (dz > 0.02 + dist * 0.0012 && dz < thick) { cs = min(cs, saturate(t * 0.3 + smoothstep(120.0, 400.0, dist))); break; }
  }
#ifdef SKF_AOSAFE
  if (!skfOkA(vec3(ao, cs, 0.0))) { ao = 1.0; cs = 1.0; }
#endif
  fragColor = vec4(ao, cs, 0.0, 1.0);
}`,Rc=Fc+`
uniform sampler2D uAO; uniform sampler2D uLin;
float linAt(vec2 uv){ vec2 sz = vec2(textureSize(uLin, 0)); return texelFetch(uLin, clamp(ivec2(floor(uv * uRS.xy * sz + 0.25)), ivec2(0), ivec2(uRS.xy * sz + 0.5) - 1), 0).r; }
void main(){
  float c = linAt(vUv); vec2 px = uRS.zw / uRS.xy * 2.0; vec2 s = vec2(0.0); float w = 0.0;
  for (int y = -1; y <= 2; y++) for (int x = -1; x <= 2; x++) { vec2 uv = vUv + (vec2(float(x), float(y)) - 0.5) * px; float d = linAt(uv); float k = exp(-abs(d - c) / (0.04 * c + 0.05)); s += ITEX(uAO, uv).rg * k; w += k; }
  fragColor = vec4(s / max(w, 1e-4), 0.0, 1.0);
}`,zc=Fc+`uniform sampler2D uTex; void main(){ fragColor = ITEX(uTex, vUv); }`,Bc=Fc+Tc+Nc+`
`+((window.__skfFlags||{}).nofill?`#define SKF_NOFILL 1
`:``)+`
uniform sampler2D uHDR; uniform sampler2D uLin; uniform sampler2D uCloudTex; uniform mat4 uInvViewProj; uniform vec3 uCamRender; uniform vec3 uCamFwd; uniform float uCloudOn; uniform vec4 uCloudRS;
void main(){
  vec4 c = ITEX(uHDR, vUv); float lin = ITEX(uLin, vUv).r;
  vec4 pn = uInvViewProj * vec4(vUv * 2.0 - 1.0, 0.5, 1.0); vec3 rd = normalize(pn.xyz / pn.w - uCamRender);
  vec3 col;
  if (lin > 5e5 && c.a < 0.004) {
    col = skyRadiance(rd, uCamWorld.y);
    float cs = dot(rd, uSunDir); float ang = acos(clamp(cs, -1.0, 1.0)); const float SR = 0.00465;
    if (ang < SR * 1.6) { float mu = sqrt(max(1.0 - (ang / SR) * (ang / SR), 0.0)); vec3 limb = 1.0 - vec3(0.6, 0.72, 0.85) * (1.0 - mu);
      vec3 Ts = transLUT(RG + max(uCamWorld.y, 1.0) * 0.001, uSunDir.y);
      col += uSunIllum * Ts * limb * 3000.0 * smoothstep(SR * 1.02, SR * 0.98, ang); }
  } else {
#ifndef SKF_NOFILL
    { ivec2 skQ = ivec2(min(vUv * uRS.xy, uRS.xy - uRS.zw) / uRS.zw), skM = ivec2(uRS.xy / uRS.zw + 0.5) - 1;
      if (all(equal(texelFetch(uHDR, skQ, 0).rgb, vec3(0.0)))) {
        vec3 skA = vec3(0.0); float skW = 0.0;
        for (int r = 1; r <= 4; r++) {
          for (int k = 0; k < 8; k++) {
            ivec2 o = ivec2(k == 0 || k == 3 || k == 5 ? -1 : (k == 1 || k == 6 ? 0 : 1), k < 3 ? -1 : (k < 5 ? 0 : 1));
            ivec2 t = clamp(skQ + o * r, ivec2(0), skM);
            vec3 n = texelFetch(uHDR, t, 0).rgb; float ln = texelFetch(uLin, t, 0).r;
            if (ln > 5e5 || all(equal(n, vec3(0.0)))) continue;
            float w = 1.0 / (1.0 + abs(ln - lin) / (0.03 * lin + 0.5)); skA += n * w; skW += w;
          }
          if (skW > 0.0) break;
        }
        if (skW > 0.0) c.rgb = skA / skW;
      } }
#endif
    float dist = lin / max(dot(rd, uCamFwd), 1e-3); vec4 ap = sampleAP(vUv, min(dist, uAPFar)); col = c.rgb * ap.a + ap.rgb;
  }
  if (uCloudOn > 0.5) {
    vec4 cl = texture(uCloudTex, min(vUv * uCloudRS.xy, uCloudRS.xy - uCloudRS.zw));
    float dist = lin > 5e5 ? 1e9 : lin / max(dot(rd, uCamFwd), 1e-3);
    float tb = (uCloud.x - uCamWorld.y) / rd.y, tt = (uCloud.y - uCamWorld.y) / rd.y; float tEnter = max(min(tb, tt), 0.0); if (max(tb, tt) < 0.0) tEnter = 1e9;
    float f = dist < tEnter ? 0.0 : saturate((dist - tEnter) / 450.0);
    if (f < 1.0) { float T2 = pow(max(cl.a, 1e-4), f); cl.rgb *= (1.0 - T2) / max(1.0 - cl.a, 1e-3); cl.a = T2; }
    col = col * cl.a + cl.rgb;
  }
  fragColor = vec4(max(col, vec3(0.0)), c.a);
}`,Vc=Fc+`
uniform sampler2D uCur; uniform sampler2D uHist; uniform sampler2D uLin; uniform mat4 uInvViewProj; uniform mat4 uPrevViewProj; uniform vec3 uCamRender; uniform vec3 uCamFwd; uniform vec2 uJit; uniform float uReset; uniform float uBlend;
bool skfOkT(vec3 v){ uvec3 b = floatBitsToUint(v) & uvec3(0x7f800000u); return all(notEqual(b, uvec3(0x7f800000u))); }
vec3 tm(vec3 c){ c = skfOkT(c) ? max(c, vec3(0.0)) : vec3(0.0); return c / (1.0 + luma(c)); } vec3 itm(vec3 c){ return c / max(1.0 - luma(c), 1e-4); }
void main(){
  vec2 ipx = uRS.zw / uRS.xy; vec2 juv = vUv + uJit * ipx; // jittered sample position of this output pixel
  float lin = 1e9; vec2 off[5]; off[0] = vec2(0.0); off[1] = vec2(-1.0, -1.0); off[2] = vec2(1.0, -1.0); off[3] = vec2(-1.0, 1.0); off[4] = vec2(1.0, 1.0);
  for (int i = 0; i < 5; i++) lin = min(lin, ITEX(uLin, vUv + off[i] * ipx).r);
  vec4 cc = ITEX(uCur, juv); vec3 cur = tm(cc.rgb);
  vec3 mn = cur, mx = cur, m1 = cur, m2 = cur * cur;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) { if (x == 0 && y == 0) continue; vec3 s = tm(ITEX(uCur, juv + vec2(float(x), float(y)) * ipx).rgb); mn = min(mn, s); mx = max(mx, s); m1 += s; m2 += s * s; }
  m1 /= 9.0; m2 /= 9.0; vec3 sg = sqrt(max(m2 - m1 * m1, 0.0)); mn = max(mn, m1 - 1.25 * sg); mx = min(mx, m1 + 1.25 * sg);
  vec4 pn = uInvViewProj * vec4(vUv * 2.0 - 1.0, 0.5, 1.0); vec3 rd = normalize(pn.xyz / pn.w - uCamRender);
  vec3 wp = uCamRender + rd * (min(lin, 2e5) / max(dot(rd, uCamFwd), 1e-3));
  vec4 pc = uPrevViewProj * vec4(wp, 1.0); vec2 puv = pc.xy / pc.w * 0.5 + 0.5;
  if (cc.a > 0.5) puv = vUv;
  float blend = uBlend; if (puv.x < 0.0 || puv.y < 0.0 || puv.x > 1.0 || puv.y > 1.0 || pc.w <= 0.0 || uReset > 0.5) blend = 1.0;
  vec3 hist = tm(texture(uHist, puv).rgb); hist = clamp(hist, mn, mx);
  float vel = length((puv - vUv) / ipx); blend = max(blend, saturate(vel * 0.004));
  fragColor = vec4(itm(mix(hist, cur, blend)), cc.a);
}`,Hc=Fc+`
uniform sampler2D uTex; uniform sampler2D uLin; uniform mat4 uInvViewProj; uniform mat4 uPrevViewProj; uniform vec3 uCamRender; uniform vec3 uCamFwd; uniform float uShutter;
void main(){
  vec4 c0 = texture(uTex, vUv); if (uShutter <= 0.0 || c0.a > 0.5) { fragColor = c0; return; }
  float lin = ITEX(uLin, vUv).r; vec4 pn = uInvViewProj * vec4(vUv * 2.0 - 1.0, 0.5, 1.0); vec3 rd = normalize(pn.xyz / pn.w - uCamRender);
  vec3 wp = uCamRender + rd * (min(lin, 2e5) / max(dot(rd, uCamFwd), 1e-3)); vec4 pc = uPrevViewProj * vec4(wp, 1.0); vec2 puv = pc.xy / pc.w * 0.5 + 0.5;
  vec2 v = (vUv - puv) * uShutter; float len = length(v); float mxl = 0.016; if (len > mxl) v *= mxl / len;
  if (len < 0.0007) { fragColor = c0; return; }
  vec3 s = c0.rgb; float w = 1.0; float j = ign(gl_FragCoord.xy) - 0.5;
  for (int i = 1; i <= 7; i++) { float t = (float(i) + j) / 7.0 - 0.5; vec2 uv = vUv + v * t; vec4 q = texture(uTex, uv); float k = q.a > 0.5 ? 0.0 : 1.0; s += q.rgb * k; w += k; }
  fragColor = vec4(s / w, c0.a);
}`,Uc=`precision highp float; in vec2 vUv; out vec4 fragColor; uniform sampler2D uTex; uniform vec2 uTexel; uniform float uFirst;
float l(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
void main(){
  vec3 a = texture(uTex, vUv + uTexel * vec2(-1.0, -1.0)).rgb, b = texture(uTex, vUv + uTexel * vec2(1.0, -1.0)).rgb, c = texture(uTex, vUv + uTexel * vec2(-1.0, 1.0)).rgb, d = texture(uTex, vUv + uTexel * vec2(1.0, 1.0)).rgb, e = texture(uTex, vUv).rgb;
  if (uFirst > 0.5) { // Karis average against fireflies; clamp absurd sun values
    a = min(a, vec3(400.0)); b = min(b, vec3(400.0)); c = min(c, vec3(400.0)); d = min(d, vec3(400.0)); e = min(e, vec3(400.0));
    float wa = 1.0 / (1.0 + l(a)), wb = 1.0 / (1.0 + l(b)), wc = 1.0 / (1.0 + l(c)), wd = 1.0 / (1.0 + l(d)), we = 1.0 / (1.0 + l(e));
    fragColor = vec4((a * wa + b * wb + c * wc + d * wd + e * we) / (wa + wb + wc + wd + we), 1.0);
  } else fragColor = vec4((a + b + c + d) * 0.2 + e * 0.2, 1.0);
}`,Wc=`precision highp float; in vec2 vUv; out vec4 fragColor; uniform sampler2D uTex; uniform sampler2D uBase; uniform vec2 uTexel; uniform float uMix;
void main(){
  vec3 s = texture(uTex, vUv).rgb * 4.0;
  s += (texture(uTex, vUv + uTexel * vec2(1.0, 0.0)).rgb + texture(uTex, vUv - uTexel * vec2(1.0, 0.0)).rgb + texture(uTex, vUv + uTexel * vec2(0.0, 1.0)).rgb + texture(uTex, vUv - uTexel * vec2(0.0, 1.0)).rgb) * 2.0;
  s += texture(uTex, vUv + uTexel).rgb + texture(uTex, vUv - uTexel).rgb + texture(uTex, vUv + uTexel * vec2(1.0, -1.0)).rgb + texture(uTex, vUv + uTexel * vec2(-1.0, 1.0)).rgb;
  fragColor = vec4(mix(texture(uBase, vUv).rgb, s / 16.0, uMix), 1.0);
}`,Gc=`precision highp float; in vec2 vUv; out vec4 fragColor; uniform sampler2D uSmall; uniform sampler2D uPrev; uniform vec3 uP; // dt, key, reset
void main(){
  float s = 0.0; float w = 0.0;
  for (int y = 0; y < 4; y++) for (int x = 0; x < 6; x++) { vec2 uv = (vec2(float(x), float(y)) + 0.5) / vec2(6.0, 4.0); float k = 1.0 - 0.6 * length(uv - 0.5); s += log(max(dot(texture(uSmall, uv).rgb, vec3(0.2126, 0.7152, 0.0722)), 1e-4)) * k; w += k; }
  float avg = exp(s / w); float target = uP.y / (pow(1.15, 0.6) * pow(clamp(avg, 0.02, 80.0), 0.4)); target = clamp(target, 0.004, 6.0);
  float prev = texture(uPrev, vec2(0.5)).r; float rate = target < prev ? 2.6 : 1.3;
  float e = uP.z > 0.5 ? target : prev + (target - prev) * (1.0 - exp(-uP.x * rate));
  fragColor = vec4(e, avg, 0.0, 1.0);
}`,Kc=$+`
in vec2 vUv; out vec4 fragColor; uniform sampler2D uTex; uniform sampler2D uBloom; uniform sampler2D uExpo; uniform vec4 uFX; uniform vec4 uFX2; uniform vec4 uGrade; uniform vec2 uOutRes; // uFX: bloom, vignette, ca, grain ; uFX2: wet, flash, o2, exposureBias ; uGrade: crash
vec3 agxContrast(vec3 x){ vec3 x2 = x * x, x4 = x2 * x2; return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4 - 6.868 * x2 * x + 0.4298 * x2 + 0.1191 * x - 0.00232; }
vec3 agx(vec3 v){
  const mat3 m = mat3(0.842479062253094, 0.0423282422610123, 0.0423756549057051, 0.0784335999999992, 0.878468636469772, 0.0784336, 0.0792237451477643, 0.0791661274605434, 0.879142973793104);
  const float mn = -12.47393, mx = 4.026069; v = m * v; v = clamp(log2(max(v, 1e-10)), mn, mx); v = (v - mn) / (mx - mn); v = agxContrast(v);
  float l = dot(v, vec3(0.2126, 0.7152, 0.0722)); v = pow(max(v, 0.0), vec3(1.08)); v = l + 1.12 * (v - l);
  const mat3 mi = mat3(1.19687900512017, -0.0528968517574562, -0.0529716355144438, -0.0980208811401368, 1.15190312990417, -0.0980434501171241, -0.0990297440797205, -0.0989611768448433, 1.15107367264116);
  return clamp(mi * v, 0.0, 1.0);
}
float dirt(vec2 uv){ float d = 0.0; for (int i = 0; i < 3; i++) { float s = 3.0 + float(i) * 4.0; vec2 g = uv * s + float(i) * 7.3; vec2 id = floor(g); vec2 f = fract(g) - 0.5; vec2 r = hash22(id) - 0.5; float sz = 0.12 + 0.25 * hash12(id + 3.0); d += smoothstep(sz, sz * 0.4, length(f - r * 0.5)) * (0.25 + 0.75 * hash12(id + 9.0)) * 0.5; } return d + 0.25 * fbm2(uv * 6.0); }
void main(){
  vec2 c = vUv - 0.5; float r2 = dot(c, c); vec2 uv = vUv;
  // in-cloud wetness: droplets refract the frame slightly
  if (uFX2.x > 0.01) { vec2 g = vUv * vec2(uOutRes.x / uOutRes.y, 1.0) * 9.0; vec2 id = floor(g); vec2 f = fract(g) - 0.5; vec2 o = (hash22(id + floor(uTime * 0.7 + hash12(id) * 5.0)) - 0.5) * 0.6; float rr = 0.07 + 0.1 * hash12(id + 1.7); float dd = length(f - o); float m = smoothstep(rr, rr * 0.5, dd) * step(0.72, hash12(id + 4.2)); uv += (f - o) * m * 0.05 * uFX2.x; }
  float ca = uFX.z * 0.0006 * r2 * 4.0;
  vec3 col; col.r = texture(uTex, uv + c * ca).r; col.g = texture(uTex, uv).g; col.b = texture(uTex, uv - c * ca).b;
  vec2 px = 1.0 / uOutRes; vec3 nb = (texture(uTex, uv + vec2(px.x, 0.0)).rgb + texture(uTex, uv - vec2(px.x, 0.0)).rgb + texture(uTex, uv + vec2(0.0, px.y)).rgb + texture(uTex, uv - vec2(0.0, px.y)).rgb) * 0.25; col = max(col + (col - nb) * 0.55 * min(vec3(1.0), 2.0 / (1.0 + col)), vec3(0.0));
  vec3 bl = texture(uBloom, uv).rgb; col = mix(col, bl, uFX.x); col += bl * dirt(vUv * vec2(uOutRes.x / uOutRes.y, 1.0)) * uFX.x * 0.9;
  float ex = texture(uExpo, vec2(0.5)).r * uFX2.w; col *= ex;
  col *= 1.0 - uFX.y * smoothstep(0.12, 0.9, r2 * 1.5);
  col = mix(col, vec3(luma(col)) * vec3(0.92, 0.97, 1.08), uFX2.z * 0.35); col *= 1.0 - uFX2.z * 0.5 * smoothstep(0.05, 0.6, r2 * 1.8);
  // crash grade: colour drains toward a cool grey and the frame closes in
  if (uGrade.x > 0.001) { float l = luma(col); col = mix(col, vec3(l) * vec3(0.97, 1.0, 1.05), uGrade.x * 0.6); col *= (1.0 - 0.1 * uGrade.x) * (1.0 - uGrade.x * 0.45 * smoothstep(0.04, 0.62, r2 * 1.5)); }
  col = agx(col);
  col += uFX2.y; col *= 1.0 - uGrade.y;
  float g = hash13(vec3(gl_FragCoord.xy, mod(uTime * 60.0, 997.0))) - 0.5; col += g * uFX.w * (0.6 + 0.4 * (1.0 - luma(col)));
  col += (ign(gl_FragCoord.xy) - 0.5) / 255.0;
  fragColor = vec4(col, 1.0);
}`,qc=class{constructor(e){this.e=e;let t=e.G;this.bloom=[],this.reset=1,this.key=.34,this.cloudTex=null;let n=e=>({uRS:t.uRS,uTime:t.uTime,uCamWorld:t.uCamWorld,uSunDir:t.uSunDir,uSunIllum:t.uSunIllum,uOrigin:t.uOrigin,uWorldRect:t.uWorldRect,uCloud:t.uCloud,uBiome:t.uBiome,...e}),r={uInvViewProj:{value:new X},uPrevViewProj:{value:new X},uCamRender:{value:new q},uCamFwd:{value:new q}};this.camU=r,this.mLin=e.fsMat(Ic,n({uDepth:{value:null},uInvProj:{value:e.invProj}})),this.mAO=e.fsMat(Lc,n({uLin:{value:null},uInvProj:{value:e.invProj},uProj:{value:e.camera.projectionMatrix},uSunView:{value:new q},uFrame:{value:0},uAOP:{value:new lt(1.4,4)}})),this.mAOBlur=e.fsMat(Rc,n({uAO:{value:null},uLin:{value:null}})),this.mCopy=e.fsMat(zc,n({uTex:{value:null}})),this.mComp=e.fsMat(Bc,n({uHDR:{value:null},uLin:{value:null},uCloudTex:{value:null},uCloudOn:{value:0},uCloudRS:{value:new Y(1,1,0,0)},uTransLUT:t.uTransLUT,uMultiLUT:t.uMultiLUT,uSkyLUT:t.uSkyLUT,uHaze:t.uHaze,uAPTex:t.uAPTex,uAPFar:t.uAPFar,...r})),this.mTAA=e.fsMat(Vc,n({uCur:{value:null},uHist:{value:null},uLin:{value:null},uJit:{value:new lt},uReset:{value:1},uBlend:{value:.1},...r})),this.mMB=e.fsMat(Hc,n({uTex:{value:null},uLin:{value:null},uShutter:{value:.5},...r})),this.mDown=e.fsMat(Uc,{uTex:{value:null},uTexel:{value:new lt},uFirst:{value:0}}),this.mUp=e.fsMat(Wc,{uTex:{value:null},uBase:{value:null},uTexel:{value:new lt},uMix:{value:.5}}),this.mExpo=e.fsMat(Gc,{uSmall:{value:null},uPrev:{value:null},uP:{value:new q(.016,.34,1)}}),this.mFinal=e.fsMat(Kc,{uTex:{value:null},uBloom:{value:null},uExpo:{value:null},uFX:{value:new Y(.045,.22,1,.012)},uFX2:{value:new Y(0,0,0,1)},uGrade:{value:new Y(0,0,0,0)},uOutRes:{value:new lt(1,1)},uTime:t.uTime});let a=()=>new kt(1,1,{type:_,format:T,depthBuffer:!1,minFilter:i,magFilter:i});this.expo=[a(),a()],this.ei=0}rt(e,t,n={}){return new kt(e,t,{type:n.type??1016,format:n.format??1023,minFilter:n.filter??1006,magFilter:n.filter??1006,depthBuffer:!1,generateMipmaps:!1,...n.extra})}resize(e,t){let n=this.e;for(let e of this.all||[])e.depthTexture&&e.depthTexture.dispose(),e.dispose();let r=new ni(e,t,g);r.minFilter=r.magFilter=i,this.hdr=new kt(e,t,{type:_,format:T,minFilter:s,magFilter:s,depthBuffer:!0,depthTexture:r,generateMipmaps:!1}),this.lin=this.rt(e,t,{type:g,format:O,filter:i});let a=Math.ceil(e/2),o=Math.ceil(t/2);this.ao=this.rt(a,o,{type:u}),this.ao2=this.rt(a,o,{type:u}),this.sceneCopy=this.rt(a,o),this.comp=this.rt(e,t),this.taa=[this.rt(e,t),this.rt(e,t)],this.mb=this.rt(e,t),this.ti=0,this.bloom=[];let c=a,l=o,d=n.preset.bloomLevels;for(let e=0;e<d;e++)this.bloom.push({d:this.rt(c,l),u:this.rt(c,l),w:c,h:l}),c=Math.max(2,c>>1),l=Math.max(2,l>>1);this.internal=[this.hdr,this.lin,this.ao,this.ao2,this.sceneCopy,this.comp],this.all=[this.hdr,this.lin,this.ao,this.ao2,this.sceneCopy,this.comp,...this.taa,this.mb,...this.bloom.flatMap(e=>[e.d,e.u])],this.w=e,this.h=t,this.reset=1,n.G.uAOTex.value=this.ao.texture,this.mFinal.uniforms.uOutRes.value.set(e,t)}setInternal(e,t){for(let n of this.internal){let r=n.width<this.w,i=r?Math.ceil(e/2):e,a=r?Math.ceil(t/2):t;n.viewport.set(0,0,i,a),n.scissor.set(0,0,i,a),n.scissorTest=!0}this.e.modules.forEach(n=>n.onInternal&&n.onInternal(e,t))}onRebase(e){this.rebaseShift=(this.rebaseShift||new q).copy(e)}linearizeAndAO(){let e=this.e,t=e.preset;this.mLin.uniforms.uDepth.value=this.hdr.depthTexture,e.pass(this.mLin,this.lin);let n=this.mAO.uniforms;n.uLin.value=this.lin.texture,n.uFrame.value=e.frame,n.uSunView.value.copy(e.G.uSunDir.value).transformDirection(e.camera.matrixWorldInverse),n.uAOP.value.set(1.5,t.ao>=2?5:3),e.pass(this.mAO,this.ao2),this.mAOBlur.uniforms.uAO.value=this.ao2.texture,this.mAOBlur.uniforms.uLin.value=this.lin.texture,e.pass(this.mAOBlur,this.ao)}copyScene(){this.mCopy.uniforms.uTex.value=this.hdr.texture,this.e.pass(this.mCopy,this.sceneCopy)}finish(e){let t=this.e;t.renderer;let n=t.camera,r=t.timer,i=this.camU;i.uCamFwd.value.set(0,0,-1).applyQuaternion(n.quaternion),i.uCamRender.value.copy(n.position);let a=i.uPrevViewProj.value.copy(t.prevViewProjNJ);this.rebaseShift&&this.rebaseShift.lengthSq()>0&&(a.multiply(new X().makeTranslation(-this.rebaseShift.x,-this.rebaseShift.y,-this.rebaseShift.z)),this.rebaseShift.set(0,0,0)),r.begin(`sky`),i.uInvViewProj.value.copy(t.viewProj).invert();let o=this.mComp.uniforms;o.uHDR.value=this.hdr.texture,o.uLin.value=this.lin.texture,o.uCloudTex.value=this.cloudTex,o.uCloudOn.value=+!!this.cloudTex,this.cloudRS&&o.uCloudRS.value.copy(this.cloudRS),t.pass(this.mComp,this.comp),r.end(),r.begin(`post`),i.uInvViewProj.value.copy(t.invViewProjNoJitter);let s=this.taa[this.ti],c=this.taa[1-this.ti],l=this.mTAA.uniforms;l.uCur.value=this.comp.texture,l.uHist.value=s.texture,l.uLin.value=this.lin.texture,l.uJit.value.set(-t.jitter[0],t.jitter[1]),l.uReset.value=this.reset,l.uBlend.value=t.opts.capture?.06:.1,t.pass(this.mTAA,c),this.ti=1-this.ti,this.reset=0;let u=c;if(t.preset.mblur&&t.fx.blurScale>0&&!t.opts.noMotionBlur&&!t.camCut){let n=this.mMB.uniforms;n.uTex.value=c.texture,n.uLin.value=this.lin.texture,n.uShutter.value=.28*t.fx.blurScale*Math.min(1,1/60/Math.max(e,.001)),t.pass(this.mMB,this.mb),u=this.mb}let d=u.texture,f=this.w,p=this.h,m=this.mDown.uniforms;for(let e=0;e<this.bloom.length;e++){let n=this.bloom[e];m.uTex.value=d,m.uTexel.value.set(1/f,1/p),m.uFirst.value=+(e===0),t.pass(this.mDown,n.d),d=n.d.texture,f=n.w,p=n.h}let h=this.mUp.uniforms,g=this.bloom[this.bloom.length-1].d.texture;for(let e=this.bloom.length-2;e>=0;e--){let n=this.bloom[e],r=this.bloom[e+1];h.uTex.value=g,h.uBase.value=n.d.texture,h.uTexel.value.set(1/r.w,1/r.h),h.uMix.value=.55,t.pass(this.mUp,n.u),g=n.u.texture}let _=this.mExpo.uniforms;_.uSmall.value=this.bloom[this.bloom.length-1].d.texture,_.uPrev.value=this.expo[this.ei].texture,_.uP.value.set(e,this.key,this.resetExpo||t.frame<2?1:0),t.pass(this.mExpo,this.expo[1-this.ei]),this.ei=1-this.ei;let v=this.mFinal.uniforms;v.uTex.value=u.texture,v.uBloom.value=g,v.uExpo.value=this.expo[this.ei].texture,v.uFX.value.set(.045,t.fx.vignette,t.fx.ca,t.opts.capture?.008:.012),v.uFX2.value.set(t.fx.wet,t.fx.flash,t.fx.o2,t.exposureBias*(this.cloudExpo||1)),v.uGrade.value.set(t.fx.dead||0,t.fx.fade||0,0,0),t.pass(this.mFinal,null),r.end()}},Jc={medium:{name:`Medium`,shadowRes:1024,cascades:3,cloudSteps:40,cloudLight:4,cloudScale:.35,ao:1,terrainGrid:32,treeLod0:30,treeLod1:110,treeFar:2200,grass:9e4,grassDist:45,ssr:0,mblur:0,stochastic:0,bloomLevels:5,maxScale:.85,aniso:4},high:{name:`High`,shadowRes:2048,cascades:4,cloudSteps:56,cloudLight:5,cloudScale:.5,ao:1,terrainGrid:48,treeLod0:36,treeLod1:140,treeFar:3e3,grass:18e4,grassDist:60,ssr:1,mblur:1,stochastic:0,bloomLevels:6,maxScale:1,aniso:8},ultra:{name:`Ultra`,shadowRes:2048,cascades:4,cloudSteps:72,cloudLight:6,cloudScale:.5,ao:2,terrainGrid:64,treeLod0:42,treeLod1:165,treeFar:3800,grass:3e5,grassDist:75,ssr:1,mblur:1,stochastic:1,bloomLevels:6,maxScale:1,aniso:16},cinematic:{name:`Cinematic`,shadowRes:4096,cascades:4,cloudSteps:128,cloudLight:8,cloudScale:1,ao:2,terrainGrid:64,treeLod0:60,treeLod1:230,treeFar:5e3,grass:48e4,grassDist:95,ssr:1,mblur:1,stochastic:1,bloomLevels:7,maxScale:1,aniso:16}},Yc=(()=>{let e=(e,t)=>{let n=1,r=0;for(;e>0;)n/=t,r+=e%t*n,e=Math.floor(e/t);return r},t=[];for(let n=1;n<=16;n++)t.push([e(n,2)-.5,e(n,3)-.5]);return t})(),Xc=class{constructor(e){this.gl=e,this.ext=e.getExtension(`EXT_disjoint_timer_query_webgl2`),this.pending=[],this.pool=[],this.acc={},this.avg={},this.frame={},this.cur=null,this.enabled=!!this.ext}begin(e){if(!this.enabled)return;let t=this.gl;this.cur&&this.end();let n=this.pool.pop()||t.createQuery();t.beginQuery(this.ext.TIME_ELAPSED_EXT,n),this.cur={q:n,name:e}}end(){this.enabled&&this.cur&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.pending.push(this.cur),this.cur=null)}frameEnd(){if(!this.enabled)return;let e=this.gl,t=e.getParameter(this.ext.GPU_DISJOINT_EXT),n=[];for(let r of this.pending)if(e.getQueryParameter(r.q,e.QUERY_RESULT_AVAILABLE)){if(!t){let t=e.getQueryParameter(r.q,e.QUERY_RESULT)/1e6;this.acc[r.name]=(this.acc[r.name]||0)+t}this.pool.push(r.q)}else n.push(r);if(this.pending=n,this.n=(this.n||0)+1,this.n>=8){let e=0;for(let t in this.acc)this.avg[t]=this.acc[t]/this.n,e+=this.avg[t],this.acc[t]=0;this.avg.total=e,this.n=0}}},Zc=class{constructor(e,t={}){this.canvas=e,this.opts=t;let n=this.renderer=new wc({canvas:e,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:`high-performance`,reversedDepthBuffer:!0,preserveDrawingBuffer:!!t.capture});n.autoClear=!1,n.outputColorSpace=Pe,n.toneMapping=0,n.info.autoReset=!1,n.setPixelRatio(1),n.debug.checkShaderErrors=!0,this.gl=n.getContext(),this.reversed=n.capabilities.reversedDepthBuffer,this.timer=new Xc(this.gl),this.preset=Jc[t.quality]||Jc.ultra,this.quality=t.quality||`ultra`,this.camera=new qi(75,16/9,.35,14e4),this.camera._reversedDepth=this.reversed,this.camWorld=new q(0,3e3,0),this.origin=new q,this.groups={terrain:new _n,props:new _n,veg:new _n,char:new _n,water:new _n,fx:new _n};for(let e in this.groups)this.groups[e].matrixWorldAutoUpdate=!0;this.modules=[],this.rebaseCbs=[];let r=()=>new q;this.G={uSunDir:{value:new q(.4,.6,.3).normalize()},uSunIllum:{value:new q(20,20,20)},uCamWorld:{value:this.camWorld},uOrigin:{value:this.origin},uTime:{value:0},uWorldRect:{value:new Y(0,0,1,1)},uCloud:{value:new Y(3e3,3500,.5,1)},uBiome:{value:new Y(2e3,1500,200,2600)},uTransLUT:{value:null},uMultiLUT:{value:null},uSkyLUT:{value:null},uHaze:{value:new Y(.6,.7,.2,1)},uGroundAlbedo:{value:new q(.14,.15,.12)},uSunShadowTex:{value:null},uCloudShadowTex:{value:null},uCloudShadowRect:{value:new Y(0,0,1/4e4,0)},uCSMTex:{value:null},uCSMMat:{value:[new X,new X,new X,new X]},uCSMSplit:{value:new Y(28,95,320,1e3)},uCSMParams:{value:new Y(1/4096,1,1,0)},uAOTex:{value:null},uInvRes:{value:new lt(1,1)},uSH:{value:[r(),r(),r(),r(),r(),r(),r(),r(),r()]},uAPTex:{value:null},uAPFar:{value:9e4},uRS:{value:new Y(1,1,0,0)},uPlayer:{value:new Y(0,-1e5,0,0)},uWind:{value:new Y(1,0,4,0)}},this.G.uSH.value[0].set(1,1,1);let i=new qr(new Uint8Array([255,255,255,255]),1,1);i.needsUpdate=!0,this.white=i,this.G.uCloudShadowTex.value=i,this.G.uAOTex.value=i,this.defines=this.reversed?{REVERSED_Z:1}:{},this.fsGeo=new gr,this.fsGeo.setAttribute(`position`,new tr(new Float32Array(9),3)),this.fsGeo.setDrawRange(0,3),this.fsMesh=new Wr(this.fsGeo,null),this.fsMesh.frustumCulled=!1,this.fsScene=new _n,this.fsScene.add(this.fsMesh),this.fsCam=new Ji(-1,1,1,-1,0,1),this.scale=Math.min(t.scale||1,this.preset.maxScale),this.drs=t.drs!==!1&&!t.capture,this.frame=0,this.time=0,this.viewProj=new X,this.viewProjNJ=new X,this.prevViewProjNJ=new X,this.invViewProjNoJitter=new X,this.invProj=new X,this.prevCamRender=new q,this.exposureBias=1,this.fx={wet:0,blurScale:1,vignette:.07,ca:1,flash:0,o2:0,dead:0},this.atmo=new Pc(this),this.csm=new Qc(this),this.post=new qc(this),this.resize(t.width||e.clientWidth||1280,t.height||e.clientHeight||720)}fsMat(e,t,n={}){return new _i({glslVersion:Be,vertexShader:Dc,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1,defines:{...this.defines,...n.defines||{}},blending:n.blending??0,transparent:!1})}pass(e,t,n=!1){let r=this.renderer;this.fsMesh.material=e,r.setRenderTarget(t||null),n&&r.clear(!0,!1,!1),r.render(this.fsScene,this.fsCam)}makeMat(e){let t={glslVersion:Be,vertexShader:e.vs,fragmentShader:`layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`+e.fs,side:e.side??0},n={...this.defines,...e.defines||{}},r=new gi({...t,vertexShader:!e.transparent&&!e.noDepth&&!e.noPrepass&&window.__skfMainVS&&(window.__skfFlags||{}).pull?window.__skfMainVS(e.vs):e.vs,uniforms:e.uniforms,defines:{...n,...(window.__skfDefs||{})},depthFunc:3,polygonOffset:!e.transparent&&!e.noDepth&&!e.noPrepass&&!!!((window.__skfFlags||{}).vegnopre&&e.uniforms&&(e.uniforms.uFoliage||e.uniforms.uImpA))&&!(window.__skfFlags||{}).nooffset,polygonOffsetFactor:-(window.__skfOffset||[1,8])[0],polygonOffsetUnits:-(window.__skfOffset||[1,8])[1],depthWrite:!e.transparent&&(!!e.noPrepass||!!((window.__skfFlags||{}).vegnopre&&e.uniforms&&(e.uniforms.uFoliage||e.uniforms.uImpA))),transparent:!!e.transparent,blending:e.blending??(e.transparent?5:0),blendSrc:204,blendDst:205,blendSrcAlpha:200,blendDstAlpha:201}),i=null;!e.transparent&&!e.noDepth&&!!!((window.__skfFlags||{}).vegnopre&&e.uniforms&&(e.uniforms.uFoliage||e.uniforms.uImpA))&&(i=new gi({...t,vertexShader:window.__skfTestVS?window.__skfTestVS(e.vs):e.vs,fragmentShader:window.__skfTestFS?window.__skfTestFS(t.fragmentShader):t.fragmentShader,uniforms:e.uniforms,defines:{...n,DEPTH_PASS:1},colorWrite:!1,blending:0}));let a=null;return e.shadow&&(a=new gi({...t,side:e.shadowSide??2,uniforms:e.uniforms,defines:{...n,DEPTH_PASS:1,SHADOW_PASS:1},colorWrite:!1,blending:0})),{main:r,depth:i,shadow:a}}add(e,t,n){return t.userData.mats=n,t.material=n.main,t.frustumCulled=t.userData.cull===!0,this.groups[e].add(t),t}setVariant(e,t){for(let n of e.children){let e=n.userData.mats;if(!e)continue;let r=e[t];n.userData._vis=n.visible,r?n.material=r:n.visible=!1}}restore(e){for(let t of e.children)t.userData._vis!==void 0&&(t.visible=t.userData._vis)}drawGroup(e,t,n,r,i){let a=this.groups[t];a.children.length&&(this.timer.begin(e),this.setVariant(a,n),this.renderer.setRenderTarget(r),this.renderer.render(a,i||this.camera),this.restore(a),this.timer.end())}setQuality(e){this.quality=e,this.preset=Jc[e]||Jc.ultra,this.scale=Math.min(this.scale,this.preset.maxScale),this.csm.rebuild(),this.resize(this.outW,this.outH);for(let e of this.modules)e.onQuality&&e.onQuality(this.preset)}resize(e,t){e=Math.max(64,Math.floor(e/2)*2),t=Math.max(64,Math.floor(t/2)*2),this.outW=e,this.outH=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.post.resize(e,t),this.applyScale()}applyScale(){let e=this.scale;this.iw=Math.max(32,Math.round(this.outW*e/2)*2),this.ih=Math.max(32,Math.round(this.outH*e/2)*2),this.post.setInternal(this.iw,this.ih),this.G.uRS.value.set(this.iw/this.outW,this.ih/this.outH,1/this.outW,1/this.outH),this.G.uInvRes.value.set(1/this.outW,1/this.outH)}setSun(e,t=1){this.G.uSunDir.value.set(e[0],e[1],e[2]).normalize(),this.G.uHaze.value.w=t,this.atmo.dirty=!0}rebase(){let e=this.camWorld,t=this.origin;if(Math.abs(e.x-t.x)>1500||Math.abs(e.z-t.z)>1500||Math.abs(e.y-t.y)>1500||this.frame===0){let n=t.clone();t.set(Math.round(e.x/1024)*1024,Math.round(e.y/1024)*1024,Math.round(e.z/1024)*1024);let r=n.sub(t);this.prevCamRender.add(r),this.post.onRebase(r);for(let e of this.rebaseCbs)e(t,r);return!0}return!1}render(e){let t=this.renderer,n=this.camera,r=this.G;this.preset;let i=this.timer;this.time+=e,r.uTime.value=this.time,t.info.reset(),this.rebase(),n.position.copy(this.camWorld).sub(this.origin),n.clearViewOffset(),n.updateProjectionMatrix(),n.updateMatrixWorld(!0),this.viewProjNJ.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this.invViewProjNoJitter.copy(this.viewProjNJ).invert();let a=this.opts.noJitter?[0,0]:Yc[this.frame%(this.scale<.8?16:8)];this.jitter=a,n.setViewOffset(this.iw,this.ih,a[0],a[1],this.iw,this.ih),n.updateProjectionMatrix(),this.viewProj.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this.invProj.copy(n.projectionMatrix).invert();{let e=r.uCloud.value,t=this.camWorld.y,n=Math.max(0,Math.min(1,(t-e.x+30)/90)),i=Math.max(0,Math.min(1,(e.y+20-t)/80));this.inCloud=n*i*Math.min(1,e.z*1.5),this.post.cloudExpo=1+1.4*this.inCloud}for(let t of this.modules)t.update&&t.update(e,this);i.begin(`sky`),this.atmo.update(n),i.end();for(let e of this.modules)e.prePass&&e.prePass(this);i.begin(`shadows`),this.csm.render(),i.end();let o=this.post,s=o.hdr;t.setRenderTarget(s),t.setClearColor(0,0),t.clear(!0,!0,!1),this.drawGroup(`terrain`,`terrain`,`depth`,s),this.drawGroup(`terrain`,`props`,`depth`,s),this.drawGroup(`vegetation`,`veg`,`depth`,s),this.drawGroup(`character`,`char`,`depth`,s),i.begin(`ao`),o.linearizeAndAO(),i.end(),this.drawGroup(`terrain`,`terrain`,`main`,s),this.drawGroup(`terrain`,`props`,`main`,s),this.drawGroup(`vegetation`,`veg`,`main`,s),this.drawGroup(`character`,`char`,`main`,s),(this.groups.water.children.some(e=>e.visible)||this.groups.fx.children.some(e=>e.visible))&&(i.begin(`water`),o.copyScene(),i.end(),this.drawGroup(`water`,`water`,`main`,s),this.drawGroup(`water`,`fx`,`main`,s));for(let e of this.modules)e.postScene&&e.postScene(this);o.finish(e),i.frameEnd(),this.prevViewProjNJ.copy(this.viewProjNJ),this.prevCamRender.copy(n.position),this.frame++,this.drs&&this.updateDRS(this.realDt??e)}updateDRS(e){let t=this.timer.avg.total,n=this.timer.enabled&&t>.5?t:e*1e3;if(this._drsT=(this._drsT||0)+e,this._drsT<.35)return;this._drsT=0;let r=this.scale;n>22.5?(r-=.08,this._drsUp=0):n>19?(r-=.04,this._drsUp=0):n<14.5?(this._drsUp=(this._drsUp||0)+1,this._drsUp>=6&&(r+=.04,this._drsUp=3)):this._drsUp=0,r=Math.min(this.preset.maxScale,Math.max(this.minScale||.6,r)),Math.abs(r-this.scale)>.005&&(this.scale=r,this.applyScale())}dispose(){this.renderer.dispose()}},Qc=class{constructor(e){this.e=e,this.cams=[];for(let t=0;t<4;t++){let t=new Ji(-1,1,1,-1,.1,100);t._reversedDepth=e.reversed,this.cams.push(t)}this.rebuild(),this.tick=0}rebuild(){let e=this.e,t=e.preset.shadowRes;this.rt&&(this.rt.depthTexture.dispose(),this.rt.dispose());let n=new ni(t*2,t*2,g);n.compareFunction=e.reversed?518:515,n.minFilter=n.magFilter=s,this.rt=new kt(t*2,t*2,{depthTexture:n,depthBuffer:!0,format:T,type:u,generateMipmaps:!1}),this.rt.scissorTest=!0,this.res=t,e.G.uCSMTex.value=n,e.G.uCSMParams.value.x=1/(t*2);let r=e.preset.cascades>=4?[26,90,300,1e3]:[35,140,520,520];this.n=e.preset.cascades,e.G.uCSMSplit.value.set(r[0],r[1],r[2],r[3]),this.splits=r}render(){let e=this.e,t=e.renderer,n=e.camera,r=e.G.uSunDir.value,i=Math.abs(r.y)>.99?new q(1,0,0):new q(0,1,0),a=new X().lookAt(r,new q,i),o=a.clone().invert(),s=new q(0,0,-1).applyQuaternion(n.quaternion),c=new q;this.tick++;for(let l=0;l<this.n;l++){if(l>=2&&this.tick+l&1&&e.frame>4)continue;let u=l===0?0:this.splits[l-1],d=this.splits[l],f=Math.tan(n.fov*Math.PI/360)*Math.hypot(1,n.aspect),p=Math.min((u+d)/2*(1+f*f),d),m=Math.max(Math.hypot(d*f,d-p),Math.hypot(u*f,p-u))*1.03;c.copy(n.position).addScaledVector(s,p);let h=m*2/this.res;c.applyMatrix4(o),c.x=Math.round(c.x/h)*h,c.y=Math.round(c.y/h)*h,c.applyMatrix4(a);let g=this.cams[l];g.left=-m,g.right=m,g.top=m,g.bottom=-m,g.near=1,g.far=m*2+900,g.position.copy(c).addScaledVector(r,m+800),g.up.copy(i),g.lookAt(c),g.updateProjectionMatrix(),g.updateMatrixWorld(!0),e.G.uCSMMat.value[l].multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse);let _=(l&1)*this.res,v=(l>>1)*this.res;this.rt.viewport.set(_,v,this.res,this.res),this.rt.scissor.set(_,v,this.res,this.res),t.setRenderTarget(this.rt),t.clear(!1,!0,!1);for(let n of[`props`,`veg`,`char`]){let r=e.groups[n];if(r.children.length){e.setVariant(r,`shadow`);for(let e of r.children)e.userData.shadowLod!==void 0&&l>e.userData.shadowLod&&(e.visible=!1);t.render(r,g),e.restore(r)}}}}},$c=e=>`./assets/`+e;async function el(e,t){let n=await(await fetch(e)).blob(),r=await createImageBitmap(n,{colorSpaceConversion:`none`,premultiplyAlpha:`none`}),i=t||r.width,a=t||r.height,o=new OffscreenCanvas(i,a).getContext(`2d`,{willReadFrequently:!0});o.drawImage(r,0,0,i,a);let s=o.getImageData(0,0,i,a).data;return r.close(),{data:s,w:i,h:a}}async function tl(){return(await fetch($c(`manifest.json`))).json()}async function nl(e,n,r,i=()=>{}){let a=new Uint8Array(n*n*4*e),o=new Uint8Array(n*n*4*e),c=0;await Promise.all(Array.from({length:e},async(t,r)=>{let[s,l,u]=await Promise.all([el($c(`tex/terrain/${r}_a.jpg`),n),el($c(`tex/terrain/${r}_n.jpg`),n),el($c(`tex/terrain/${r}_h.jpg`),n)]),d=r*n*n*4;for(let e=0;e<n*n;e++){let t=e*4;a[d+t]=s.data[t],a[d+t+1]=s.data[t+1],a[d+t+2]=s.data[t+2],a[d+t+3]=u.data[t],o[d+t]=l.data[t],o[d+t+1]=l.data[t+1],o[d+t+2]=l.data[t+2],o[d+t+3]=u.data[t+1]}i(++c/e)}));let d=(i,a)=>{let o=new At(i,n,n,e);return o.format=T,o.type=u,o.colorSpace=a?Ne:``,o.wrapS=o.wrapT=t,o.minFilter=l,o.magFilter=s,o.generateMipmaps=!0,o.anisotropy=r,o.needsUpdate=!0,o};return{A:d(a,!0),B:d(o,!1)}}async function rl(e,{srgb:r=!1,repeat:i=!0,aniso:a=8,flipY:o=!1}={}){let c=await(await fetch(e)).blob(),u=new Dt(await createImageBitmap(c,{colorSpaceConversion:`none`,premultiplyAlpha:`none`,imageOrientation:o?`flipY`:`none`}));return u.colorSpace=r?Ne:``,u.wrapS=u.wrapT=i?t:n,u.anisotropy=a,u.flipY=!1,u.premultiplyAlpha=!1,u.generateMipmaps=!0,u.minFilter=l,u.magFilter=s,u.needsUpdate=!0,u}async function il(e){let t=await(await fetch($c(`models/${e}.b64.txt`))).text(),n=atob(t.trim()),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);let i=r.buffer,a=new Uint32Array(i,0,1)[0],o=new Uint32Array(i,4,a*2),s=4+a*8,c=[];for(let e=0;e<a;e++){let t=o[e*2],n=o[e*2+1],r=new Float32Array(i.slice(s,s+t*32));s+=t*32;let a=new Uint32Array(i.slice(s,s+n*4));s+=n*4;let l=new gr,u=new _r(r,8);l.setAttribute(`position`,new br(u,3,0)),l.setAttribute(`normal`,new br(u,3,3)),l.setAttribute(`uv`,new br(u,2,6)),l.setIndex(new tr(a,1)),c.push(l)}return c}var al=`
float vn3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash13(i), hash13(i + vec3(1,0,0)), f.x), mix(hash13(i + vec3(0,1,0)), hash13(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i + vec3(0,0,1)), hash13(i + vec3(1,0,1)), f.x), mix(hash13(i + vec3(0,1,1)), hash13(i + vec3(1,1,1)), f.x), f.y), f.z); }
// fractured-rock relief (m): bedding ledges and two warped joint sets bound blocks that stand proud by a per-block amount
float jointBlocks(vec3 q, float sc, float fp, out float groove){
  float wa = vn3(q * 0.16 / sc) * 1.1 + vn3(q * 0.9 / sc) * 0.16, wb = vn3(q * 0.13 / sc + 5.0) * 1.1 + vn3(q * 0.8 / sc + 2.0) * 0.16, wc = vn3(q * 0.1 / sc + 11.0) * 0.8 + vn3(q * 0.7 / sc + 6.0) * 0.14;
  float a = dot(q, vec3(0.83, 0.1, 0.55)) / (2.3 * sc) + wa, b = dot(q, vec3(-0.5, 0.2, 0.84)) / (3.1 * sc) + wb, c = q.y / (1.7 * sc) + wc;
  vec3 id = floor(vec3(a, b, c)), f = fract(vec3(a, b, c)); vec3 e = min(f, 1.0 - f);
  float ew = clamp(fp / sc * 0.5, 0.03, 0.5); groove = smoothstep(0.0, ew, min(e.x, min(e.y, e.z)));
  return (hash13(id) - 0.5) * groove - (1.0 - groove) * 0.25;
}
float gJ1 = 1.0, gJ2 = 1.0; // joint masks of the last reliefD call (1 on a block face, 0 in a joint), reused for crack shading
float reliefD(vec2 w, float h, float fp){
  vec3 q = vec3(w.x, h, w.y); float d = 0.0; gJ1 = 1.0; gJ2 = 1.0;
  if (fp < 2.4) d += (vn3(q * vec3(0.21, 0.34, 0.21)) - 0.5) * 1.3 * (1.0 - smoothstep(0.8, 2.4, fp));
  if (fp < 1.3) d += jointBlocks(q, 1.0, fp, gJ1) * 0.75 * (1.0 - smoothstep(0.45, 1.3, fp));
  if (fp < 0.36) d += jointBlocks(q + 13.7, 0.27, fp, gJ2) * 0.2 * (1.0 - smoothstep(0.12, 0.36, fp));
  if (fp < 0.12) d += (vn3(q * 4.3 + 1.3) - 0.5) * 0.045 * (1.0 - smoothstep(0.04, 0.12, fp));
  if (fp < 0.04) d += (vn3(q * 14.0) - 0.5) * 0.014 * (1.0 - smoothstep(0.012, 0.04, fp));
  return d;
}
`,ol=`
uniform sampler2D uHeightTex; uniform sampler2D uOuterTex; uniform vec4 uOuterRect; uniform vec2 uHeightSize;
float hFetch(ivec2 p){ return texelFetch(uHeightTex, clamp(p, ivec2(0), ivec2(uHeightSize) - 1), 0).r; }
vec4 cw(float t){ return vec4(((-t + 2.0) * t - 1.0) * t * 0.5, ((3.0 * t - 5.0) * t * t + 2.0) * 0.5, ((-3.0 * t + 4.0) * t + 1.0) * t * 0.5, (t - 1.0) * t * t * 0.5); }
float hInner(vec2 w){
  vec2 f = (w - uWorldRect.xy) * uWorldRect.zw * uHeightSize - 0.5; vec2 i = floor(f), t = f - i; ivec2 b = ivec2(i) - 1; vec4 wx = cw(t.x), wz = cw(t.y); float s = 0.0;
  for (int j = 0; j < 4; j++) s += wz[j] * (wx.x * hFetch(b + ivec2(0, j)) + wx.y * hFetch(b + ivec2(1, j)) + wx.z * hFetch(b + ivec2(2, j)) + wx.w * hFetch(b + ivec2(3, j)));
  return s;
}
float hInnerFast(vec2 w){ return texture(uHeightTex, (w - uWorldRect.xy) * uWorldRect.zw).r; }
float innerMask(vec2 w){ vec2 uv = (w - uWorldRect.xy) * uWorldRect.zw; vec2 d = min(uv, 1.0 - uv) / uWorldRect.zw; return smoothstep(20.0, 420.0, min(d.x, d.y)); }
float hOuter(vec2 w){ return texture(uOuterTex, (w - uOuterRect.xy) * uOuterRect.zw).r; }
float terrainH(vec2 w){ float m = innerMask(w); float o = hOuter(w); if (m <= 0.0) return o; return mix(o, hInner(w), m); }
float terrainHFast(vec2 w){ float m = innerMask(w); float o = hOuter(w); if (m <= 0.0) return o; return mix(o, hInnerFast(w), m); }
`,sl=$+ol+al+`
invariant gl_Position;
in vec4 iNode; uniform float uGrid; uniform float uRange0; uniform sampler2D uNrmTex; uniform sampler2D uCtrlTex;
out vec3 vWorld; out float vRelief;
void main(){
  vec2 w = iNode.xy + position.xz * iNode.z; float cell = iNode.z / uGrid;
  float h0 = terrainHFast(w); float dist = distance(vec3(w.x, h0, w.y), uCamWorld);
  float r = uRange0 * exp2(iNode.w); float k = saturate((dist - r * 0.70) / (r * 0.22));
  vec2 fr = fract(position.xz * uGrid * 0.5) * 2.0; w -= fr * cell * k;
  float h = terrainH(w);
  vec3 P = vec3(w.x, h, w.y); vRelief = 0.0;
  float dc = distance(P, uCamWorld);
  if (dc < 420.0) { // sub-grid rock relief: ledges, blocks and gullies on steep ground (collision ignores it; <= ~1.5 m)
    vec2 uvw = (w - uWorldRect.xy) * uWorldRect.zw; vec4 nt = textureLod(uNrmTex, uvw, 0.0); vec4 ct = textureLod(uCtrlTex, uvw, 0.0); vec2 nxz = nt.xy * 2.0 - 1.0; vec3 Nm = vec3(nxz.x, sqrt(max(1.0 - dot(nxz, nxz), 0.01)), nxz.y);
    float rockM = smoothstep(0.2, 0.42, 1.0 - Nm.y) * (1.0 - smoothstep(0.45, 0.7, ct.a) * (1.0 - smoothstep(0.37, 0.5, 1.0 - Nm.y))) * (1.0 - smoothstep(140.0, 420.0, dc)) * innerMask(w);
    if (rockM > 0.01) { float d = reliefD(w, h, cell * (1.0 + k)); P += normalize(vec3(Nm.x, Nm.y * 0.35, Nm.z)) * d * rockM; vRelief = rockM; }
  }
  vWorld = P;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld - uOrigin, 1.0);
}`,cl=$+Tc+Ec+al+`
uniform sampler2D uNrmTex; uniform sampler2D uCtrlTex; uniform sampler2D uCtrl2Tex; uniform sampler2D uOuterTex; uniform vec4 uOuterRect;
uniform sampler2DArray uMatA; uniform sampler2DArray uMatB; uniform vec3 uTint[10]; uniform vec4 uTP; uniform vec4 uSnowP;
in vec3 vWorld; in float vRelief;
#ifdef DEPTH_PASS
void main(){ }
#else
float gDist; vec2 gDx, gDy;
vec3 unN(vec2 e){ vec2 n = e * 2.0 - 1.0; return vec3(n, sqrt(max(1.0 - dot(n, n), 0.04))); }
void smp2(float layer, vec2 p, vec2 dx, vec2 dy, out vec4 A, out vec4 B){
  // TAA-resolved sharpening: -0.75 mip bias and a 3:1 cap on footprint anisotropy (drivers without AF otherwise blur oblique rock)
  { float l1 = dot(dx, dx), l2 = dot(dy, dy); if (l1 > l2 * 9.0) dx *= sqrt(l2 * 9.0 / l1); else if (l2 > l1 * 9.0) dy *= sqrt(l1 * 9.0 / l2); dx *= 0.6; dy *= 0.6; }
  float wN = 1.0 - smoothstep(45.0, 170.0, gDist), wF = smoothstep(500.0, 2200.0, gDist), wM = 1.0 - wN - wF; A = vec4(0.0); B = vec4(0.0);
  if (wN > 0.002) { const float s = 1.0 / 2.7; vec3 uv = vec3(p * s, layer); A += wN * textureGrad(uMatA, uv, dx * s, dy * s); B += wN * textureGrad(uMatB, uv, dx * s, dy * s); }
  if (wM > 0.002) { const float s = 1.0 / 11.0; vec2 q = p * s + 0.37;
#ifdef STOCHASTIC
    float kk = vnoise(q * 0.7) * 6.0; float fi = floor(kk), ff = fract(kk); vec2 oa = sin(vec2(3.0, 7.0) * fi), ob = sin(vec2(3.0, 7.0) * (fi + 1.0));
    vec4 a1 = textureGrad(uMatA, vec3(q + oa, layer), dx * s, dy * s), a2 = textureGrad(uMatA, vec3(q + ob, layer), dx * s, dy * s); float bl = smoothstep(0.25, 0.75, ff - 0.12 * ((a1.r + a1.g + a1.b) - (a2.r + a2.g + a2.b)));
    A += wM * mix(a1, a2, bl); B += wM * mix(textureGrad(uMatB, vec3(q + oa, layer), dx * s, dy * s), textureGrad(uMatB, vec3(q + ob, layer), dx * s, dy * s), bl);
#else
    A += wM * textureGrad(uMatA, vec3(q, layer), dx * s, dy * s); B += wM * textureGrad(uMatB, vec3(q, layer), dx * s, dy * s);
#endif
  }
  if (wF > 0.002) { const float s = 1.0 / 74.0; vec3 uv = vec3(p * s + 0.71, layer); A += wF * textureGrad(uMatA, uv, dx * s, dy * s); B += wF * textureGrad(uMatB, uv, dx * s, dy * s); }
}
void main(){
  vec3 wp = vWorld; vec3 Vv = uCamWorld - wp; gDist = length(Vv); vec3 V = Vv / gDist;
  vec2 uv = (wp.xz - uWorldRect.xy) * uWorldRect.zw; float mask = innerMaskF(uv);
  vec4 nt = texture(uNrmTex, uv), ctrl = texture(uCtrlTex, uv), c2 = texture(uCtrl2Tex, uv);
  // outer backdrop: normals from the coarse map, synthetic control values
  vec2 ouv = (wp.xz - uOuterRect.xy) * uOuterRect.zw; vec2 ot = uOuterRect.zw * 96.0;
  float hl = texture(uOuterTex, ouv - vec2(ot.x, 0.0)).r, hr = texture(uOuterTex, ouv + vec2(ot.x, 0.0)).r, hd = texture(uOuterTex, ouv - vec2(0.0, ot.y)).r, hu = texture(uOuterTex, ouv + vec2(0.0, ot.y)).r;
  vec3 No = normalize(vec3(hl - hr, 192.0, hd - hu));
  // distant ranges: cast shadow from the coarse horizon field, and valley occlusion from height against the local mean
  vec2 oc = texture(uOuterTex, ouv).rg; vec2 ot4 = ot * 5.0;
  float omean = 0.25 * (texture(uOuterTex, ouv - vec2(ot4.x, 0.0)).r + texture(uOuterTex, ouv + vec2(ot4.x, 0.0)).r + texture(uOuterTex, ouv - vec2(0.0, ot4.y)).r + texture(uOuterTex, ouv + vec2(0.0, ot4.y)).r);
  float oShadow = mix(smoothstep(-40.0, 110.0, wp.y - oc.g), 1.0, mask), oOcc = mix(1.0 - 0.45 * smoothstep(20.0, 420.0, omean - oc.r), 1.0, mask);
  vec2 nxz = nt.xy * 2.0 - 1.0; vec3 Ni = vec3(nxz.x, sqrt(max(1.0 - dot(nxz, nxz), 0.01)), nxz.y);
  float n1 = fbm2(wp.xz * 0.011), n2 = fbm2(wp.xz * 0.09 + 31.0), n3 = vnoise(wp.xz * 0.9);
  // medium-frequency procedural relief on the outer range so it does not read as smooth
  vec2 og = vec2(fbm2(wp.xz * 0.004 + 3.0) - fbm2(wp.xz * 0.004 + vec2(0.9, 3.0)), fbm2(wp.xz * 0.004 + 3.0) - fbm2(wp.xz * 0.004 + vec2(0.0, 3.9)));
  No = normalize(No + vec3(og.x, 0.0, og.y) * 2.2);
  vec3 N = normalize(mix(No, Ni, mask));
  vec3 N0 = N;
  if (vRelief > 0.02) { // per-pixel bump from the same relief field the vertices carry (plus octaves they cannot)
    float fpx = gDist * 0.0016; float Hh = reliefD(wp.xz, wp.y, fpx) * vRelief;
    vec3 dpx = dFdx(wp), dpy = dFdy(wp); float dhx = dFdx(Hh), dhy = dFdy(Hh);
    vec3 r1 = cross(dpy, N), r2 = cross(N, dpx); float det = dot(dpx, r1);
    if (abs(det) > 1e-12) { vec3 gr = sign(det) * (dhx * r1 + dhy * r2); vec3 Nb = abs(det) * N - gr * 0.85; float l = length(Nb); if (l > 1e-12) { Nb /= l; if (Nb.y < 0.02) Nb = normalize(vec3(Nb.x, 0.02, Nb.z)); N = Nb; } }
  }
  float oSlope = 1.0 - No.y; vec4 octrl = vec4(0.3, smoothstep(0.2, 0.4, oSlope) * 0.5, smoothstep(40.0, -160.0, wp.y - uBiome.y + n1 * 260.0) * (1.0 - smoothstep(0.2, 0.42, oSlope)), saturate((wp.y - uBiome.x + (n1 - 0.5) * 420.0 - oSlope * 500.0) / 160.0));
  ctrl = mix(octrl, ctrl, mask); c2 = mix(vec4(n1, 0.0, 0.0, 1.0), c2, mask);
  float occ = mix(0.9, nt.b, mask), curv = mix(0.5, nt.a, mask);
  float moist = ctrl.r, scree = ctrl.g, forest = ctrl.b, snow = ctrl.a, litho = c2.r, wet = c2.g;
  gDx = dFdx(wp.xz); gDy = dFdy(wp.xz); vec2 dzx = dFdx(wp.zy), dzy = dFdy(wp.zy), dxx = dFdx(wp.xy), dxy = dFdy(wp.xy);
  float steep = 1.0 - N.y;
  // ---- layer weights
  float rockW = smoothstep(0.24, 0.40, steep + (n2 - 0.5) * 0.12 - scree * 0.06);
  float soil = 1.0 - smoothstep(uBiome.y + 260.0, uBiome.y + 760.0, wp.y + (n1 - 0.5) * 320.0);
  float alpine = smoothstep(uBiome.y - 180.0, uBiome.y + 160.0, wp.y + (n1 - 0.5) * 240.0);
  float ground = (1.0 - rockW);
  float screeW = ground * saturate(scree * 1.3 + (1.0 - soil) * 0.9 + smoothstep(0.14, 0.24, steep) * (1.0 - soil * 0.6) * 0.5);
  ground *= 1.0 - screeW;
  float dirtW = ground * saturate(smoothstep(0.5, 0.9, forest) * 0.8 + smoothstep(0.14, 0.24, steep) * 0.45 + wet * 0.5 - (n3 - 0.5) * 0.3);
  ground *= 1.0 - dirtW;
  float grassW = ground * alpine, meadowW = ground * (1.0 - alpine);
  float nS = fbm2(wp.xz * 0.35 + 5.0), nS2 = fbm2(wp.xz * 1.9 + 11.0);
  float sAcc = smoothstep(0.38, 0.58, snow + (0.5 - curv) * 0.4 - smoothstep(0.6, 0.85, curv) * 0.35 + (n2 - 0.5) * 0.14 + (nS - 0.5) * 0.1);
  float steepS = 1.0 - normalize(mix(N0, N, 0.12)).y; // snow bridges joints: retention follows the smoothed relief
  float sHold = 1.0 - smoothstep(0.25, 0.47, steepS + (nS2 - 0.5) * 0.07 + (nS - 0.5) * 0.05 - (snow - 0.6) * 0.12);
  float snowW = sAcc * sHold;
  // ---- sample active layers
  vec3 alb = vec3(0.0), tn = vec3(0.0); float rough = 0.0, ao = 0.0, hh = 0.0, wsum = 0.0; vec4 A, B;
  if (rockW > 0.004) {
    float lv = litho + (n2 - 0.5) * 0.22 + (fbm2(wp.xz * 0.02 + 7.0) - 0.5) * 0.3; float mossy = smoothstep(uBiome.y + 100.0, uBiome.y - 350.0, wp.y) * smoothstep(0.35, 0.7, moist + n2 * 0.4);
    float layer = lv < 0.36 ? 0.0 : (lv < 0.66 ? 2.0 : 1.0); if (mossy > 0.5 + (n3 - 0.5) * 0.4) layer = 3.0;
    vec3 gN = cross(dFdx(wp), dFdy(wp)); float gl = length(gN); vec3 pN = N; if (gl > 1e-12 && vRelief > 0.02) { gN /= gl; if (dot(gN, N) < 0.0) gN = -gN; pN = normalize(mix(N, gN, min(1.0, vRelief * 2.5))); }
    vec3 bw = pow(abs(pN), vec3(4.0)); bw /= bw.x + bw.y + bw.z; vec3 ra = vec3(0.0), rn = vec3(0.0); float rr = 0.0, rao = 0.0, rh = 0.0;
    if (bw.y > 0.04) { smp2(layer, wp.xz, gDx, gDy, A, B); vec3 t = unN(B.xy); ra += bw.y * A.rgb; rn += bw.y * vec3(t.x, 0.0, t.y); rr += bw.y * B.b; rao += bw.y * B.a; rh += bw.y * A.a; }
    if (bw.x > 0.04) { smp2(layer, wp.zy * vec2(1.0, 1.0), dzx, dzy, A, B); vec3 t = unN(B.xy); ra += bw.x * A.rgb; rn += bw.x * vec3(0.0, t.y, t.x); rr += bw.x * B.b; rao += bw.x * B.a; rh += bw.x * A.a; }
    if (bw.z > 0.04) { smp2(layer, wp.xy, dxx, dxy, A, B); vec3 t = unN(B.xy); ra += bw.z * A.rgb; rn += bw.z * vec3(t.x, t.y, 0.0); rr += bw.z * B.b; rao += bw.z * B.a; rh += bw.z * A.a; }
    float bs = (bw.y > 0.04 ? bw.y : 0.0) + (bw.x > 0.04 ? bw.x : 0.0) + (bw.z > 0.04 ? bw.z : 0.0); ra /= bs; rn /= bs; rr /= bs; rao /= bs; rh /= bs;
    int li = int(layer); ra *= uTint[li]; ra = mix(vec3(luma(ra)), ra, layer == 3.0 ? 0.8 : 0.42);
    // strata / weathering streaks on faces
    vec3 q3 = wp.xyz; float strat = vn3(vec3(q3.x * 0.02, q3.y * 0.33 + n1 * 3.0, q3.z * 0.02)) * 0.6 + vn3(vec3(q3.x * 0.07, q3.y * 1.1, q3.z * 0.07) + 4.0) * 0.4;
    ra *= mix(1.0, 0.74 + 0.5 * strat, smoothstep(0.3, 0.6, steep));
    float g1 = vRelief > 0.02 ? gJ1 : 1.0, g2 = vRelief > 0.02 ? gJ2 : 1.0; float cracks = min(1.0, vRelief * 3.0) * (1.0 - snowW) * (1.0 - g1) * 0.22 * (1.0 - smoothstep(35.0, 120.0, gDist)) + (1.0 - snowW) * (1.0 - g2) * 0.2 * (1.0 - smoothstep(20.0, 80.0, gDist));
    ra = pow(ra, vec3(1.18)) * 1.12 * (1.0 - 0.5 * cracks); rao *= rao * (1.0 - 0.6 * cracks); rn *= 1.5;
    float w = rockW * (0.6 + rh); alb += ra * w; tn += rn * w; rough += rr * w; ao += rao * w; hh += rh * w; wsum += w;
  }
  if (screeW > 0.004) { smp2(4.0, wp.xz, gDx, gDy, A, B); vec3 t = unN(B.xy); float w = screeW * (0.5 + A.a); alb += A.rgb * uTint[4] * mix(1.0, 0.82 + 0.3 * n1, 0.8) * w; tn += vec3(t.x, 0.0, t.y) * w; rough += B.b * w; ao += B.a * w; hh += A.a * w; wsum += w; }
  if (dirtW > 0.004) { smp2(5.0, wp.xz, gDx, gDy, A, B); vec3 t = unN(B.xy); float w = dirtW * (0.5 + A.a); alb += A.rgb * uTint[5] * mix(vec3(1.0), vec3(0.62, 0.6, 0.52), forest) * w; tn += vec3(t.x, 0.0, t.y) * w; rough += B.b * w; ao += B.a * w; hh += A.a * w; wsum += w; }
  if (grassW > 0.004) { smp2(6.0, wp.xz, gDx, gDy, A, B); vec3 t = unN(B.xy); float w = grassW * (0.5 + A.a); vec3 g = A.rgb * uTint[6] * mix(vec3(1.12, 1.02, 0.7), vec3(0.8, 1.05, 0.72), saturate(moist * 1.6 + n1 - 0.4)); alb += g * w; tn += vec3(t.x, 0.0, t.y) * w; rough += B.b * w; ao += B.a * w; hh += A.a * w; wsum += w; }
  if (meadowW > 0.004) { smp2(7.0, wp.xz, gDx, gDy, A, B); vec3 t = unN(B.xy); float w = meadowW * (0.5 + A.a); vec3 g = A.rgb * uTint[7] * mix(vec3(1.05, 1.0, 0.72), vec3(0.72, 1.0, 0.6), saturate(moist * 1.5 + n1 - 0.35)); alb += g * w; tn += vec3(t.x, 0.0, t.y) * w; rough += B.b * w; ao += B.a * w; hh += A.a * w; wsum += w; }
  wsum = max(wsum, 1e-4); alb /= wsum; tn /= wsum; rough /= wsum; ao /= wsum; hh /= wsum;
  // macro colour variation (aerial texture at very large scale + noise) kills residual repetition
  vec3 mac = textureGrad(uMatA, vec3(wp.xz / 420.0, 9.0), gDx / 420.0, gDy / 420.0).rgb; float ml = luma(mac) / 0.36;
  alb *= mix(1.0, clamp(ml, 0.6, 1.5), 0.45) * (0.86 + 0.28 * n1);
  // wet banks / spray zones
  alb *= mix(1.0, 0.55, wet * 0.8); rough = mix(rough, 0.25, wet * 0.7);
  // far forest canopy stand-in beyond tree draw distance
  float canopy = forest * smoothstep(uTP.x, uTP.y, gDist) * smoothstep(0.25, 0.6, forest + (n3 - 0.5) * 0.5);
  float cn = vnoise(wp.xz * 0.16) * 0.6 + vnoise(wp.xz * 0.47) * 0.4;
  alb = mix(alb, vec3(0.018, 0.034, 0.012) * (0.6 + 0.9 * cn), canopy); rough = mix(rough, 0.75, canopy);
  vec3 Nd = normalize(N + tn * mix(0.9, 0.35, smoothstep(300.0, 1500.0, gDist)));
  Nd = normalize(mix(Nd, normalize(N + vec3(cn - 0.5, 0.0, vnoise(wp.xz * 0.16 + 9.0) - 0.5) * 1.1), canopy));
  // ---- snow
  float sss = 0.0; vec3 sssC = vec3(0.0);
  float sn = saturate(snowW * (1.25 - 0.5 * hh) + (snowW - 0.5) * 0.6);
  if (sn > 0.004) {
    smp2(8.0, wp.xz, gDx, gDy, A, B); vec3 t = unN(B.xy);
    float wind = fbm2(wp.xz * vec2(0.035, 0.11) + 4.0); float rip = fbm2(wp.xz * vec2(0.9, 0.22) + wind * 3.0);
    float packed = smoothstep(0.45, 0.75, curv + (wind - 0.5) * 0.5);
    float cup = (1.0 - smoothstep(0.0, 0.5, abs(vnoise(wp.xz * 1.6) - 0.5) * 2.0)) * uSnowP.x;
    vec3 sa = mix(vec3(0.93, 0.95, 0.975), vec3(0.86, 0.89, 0.93), packed * 0.6) * (0.94 + 0.08 * A.r) * (1.0 - 0.1 * cup);
    float mic = vnoise(wp.xz * 7.0) - 0.5, mic2 = vnoise(wp.xz * 7.0 + 31.0) - 0.5; float nearF = 1.0 - smoothstep(6.0, 40.0, gDist);
    float dune = fbm2(wp.xz * vec2(0.012, 0.045) + 9.0), dune2 = fbm2(wp.xz * vec2(0.045, 0.012) + 2.0); float sast = fbm2(wp.xz * vec2(0.28, 0.07) + wind * 2.0);
    vec3 nsn = normalize(mix(N, N0, 0.88) + vec3(t.x, 0.0, t.y) * 0.3 + vec3(rip - 0.5, 0.0, wind - 0.5) * 0.6 * (1.0 - smoothstep(150.0, 700.0, gDist)) + vec3(sast - 0.5, 0.0, (sast - 0.5) * 0.3) * 0.5 * (1.0 - smoothstep(400.0, 1800.0, gDist)) + vec3(dune - 0.5, 0.0, dune2 - 0.5) * 0.38 + vec3(mic, 0.0, mic2) * 0.22 * nearF);
    // glacial ice where snow is thin on steep high ground
    float ice = smoothstep(0.38, 0.62, steep) * smoothstep(uSnowP.y - 60.0, uSnowP.y + 200.0, wp.y) * uSnowP.z;
    sa = mix(sa, vec3(0.52, 0.72, 0.8), ice * 0.65);
    sa = mix(mix(alb, sa, 0.72) * 0.92, sa, smoothstep(0.25, 0.8, sn)); // thin, dirty snow at melting margins
    alb = mix(alb, sa, sn); Nd = normalize(mix(Nd, nsn, sn)); rough = mix(rough, mix(0.62, 0.32, max(packed * 0.5, ice)), sn); ao = mix(ao, 1.0, sn);
    sss = sn * 0.9; sssC = vec3(0.55, 0.78, 0.95);
  }
  Surf s; s.albedo = alb; s.N = Nd; s.rough = clamp(rough, 0.08, 1.0); s.ao = mix(1.0, ao, 0.85) * mix(1.0, 0.55, canopy); s.f0 = 0.04; s.sss = sss; s.sssColor = sssC; s.skyVis = occ * oOcc;
  vec3 so = wp + N * (0.06 + gDist * 0.004);
  float fshade = mix(1.0, 0.42, forest * smoothstep(uTP.z * 0.75, uTP.z * 1.25, gDist) * (1.0 - canopy));
  s.shadow = terrainShadow(so) * csmShadow(so, gDist, N.y) * cloudShadow(wp) * fshade * oShadow;
  vec3 col = shadeSurface(s, wp, V);
  // snow sparkle: view-dependent glints
  if (sn > 0.3 && gDist < 90.0) { float sc = 28.0; vec3 cell = floor(wp * sc); vec3 gn = normalize(vec3(hash13(cell), hash13(cell + 7.1), hash13(cell + 13.7)) - 0.5); vec3 H = normalize(uSunDir + V);
    float g = pow(saturate(dot(normalize(Nd + gn * 0.9), H)), 220.0) * step(0.93, hash13(cell + 3.3)); col += g * 14.0 * vec3(luma(uSunIllum)) * sunTransmittance(wp.y) * s.shadow * sn * (1.0 - gDist / 90.0) * 0.06; }
  gl_FragColor = vec4(col, 0.0);
}
#endif
`,ll=`float innerMaskF(vec2 uv){ vec2 d = min(uv, 1.0 - uv) / uWorldRect.zw; return smoothstep(20.0, 420.0, min(d.x, d.y)); }
`,ul=class{constructor(e,t){this.e=e,this.world=t,e.modules.push(this)}async init(e,t){let a=this.e,o=this.world,c=o.P,d=a.G,f=a.preset,p=a.renderer.extensions.has(`OES_texture_float_linear`),m=(e,t,r,a,o,c,u=!1)=>{let d=new qr(e,t,r,a,o);return d.minFilter=u?l:c?s:i,d.magFilter=c?s:i,d.generateMipmaps=u,d.wrapS=d.wrapT=n,d.needsUpdate=!0,d};this.hTex=m(o.height,c.nx,c.nz,O,g,p);{let e=o.outer.nx*o.outer.nz,t=new Float32Array(e*2),n=o.outer.shadow;for(let r=0;r<e;r++)t[r*2]=o.outer.data[r],t[r*2+1]=n?n[r]:-1e6;this.oTex=m(t,o.outer.nx,o.outer.nz,A,g,p),this.oTex.wrapS=this.oTex.wrapT=r,this.oTex.needsUpdate=!0}this.nTex=m(o.nrm,c.nx,c.nz,T,u,!0,!0),this.nTex.anisotropy=4,this.cTex=m(o.ctrl,c.nx,c.nz,T,u,!0,!0),this.c2Tex=m(o.ctrl2,c.nx,c.nz,T,u,!0,!0),this.sTex=m(o.sunShadow,c.nx,c.nz,O,g,p),d.uSunShadowTex.value=this.sTex,d.uWorldRect.value.set(c.x0,c.z0,1/(c.nx*c.cs),1/(c.nz*c.cs)),d.uBiome.value.set(c.snowLine,c.treeLine,c.floor,c.summit),d.uCloud.value.set(c.cloudBase,c.cloudTop,.5,1);let h=await nl(10,1024,f.aniso,t);this.matA=h.A,this.matB=h.B;let _=[[.86,.86,.88],[.7,.78,.86],[.8,.82,.84],[.95,.95,.9],[.86,.87,.9],[.55,.52,.42],[.5,.7,.38],[.3,.52,.22],[1,1,1],[1,1,1]].map(e=>new q(...e));this.uniforms={...d,uHeightTex:{value:this.hTex},uOuterTex:{value:this.oTex},uOuterRect:{value:new Y(o.outer.x0,o.outer.z0,1/(o.outer.nx*o.outer.cs),1/(o.outer.nz*o.outer.cs))},uHeightSize:{value:new lt(c.nx,c.nz)},uNrmTex:{value:this.nTex},uCtrlTex:{value:this.cTex},uCtrl2Tex:{value:this.c2Tex},uMatA:{value:this.matA},uMatB:{value:this.matB},uTint:{value:_},uGrid:{value:64},uRange0:{value:96},uTP:{value:new Y(1800,3200,0,0)},uSnowP:{value:new Y(c.biome===`summer`?1:.35,c.glacierLine,c.biome===`summer`?.9:.6,0)}},this.heightUniforms={uHeightTex:this.uniforms.uHeightTex,uOuterTex:this.uniforms.uOuterTex,uOuterRect:this.uniforms.uOuterRect,uHeightSize:this.uniforms.uHeightSize,uNrmTex:this.uniforms.uNrmTex,uCtrlTex:this.uniforms.uCtrlTex,uCtrl2Tex:this.uniforms.uCtrl2Tex},this.buildPyramid(),this.build()}build(){let e=this.e,t=e.preset.terrainGrid;this.mesh&&(e.groups.terrain.remove(this.mesh),this.mesh.geometry.dispose()),this.uniforms.uGrid.value=t,this.uniforms.uRange0.value=t===64?96:t===48?80:64,this.leaf=32,this.levels=12,this.uniforms.uTP.value.set(e.preset.treeFar*.55,e.preset.treeFar*.95,e.preset.treeLod1,0);let n=new Yi,r=t+1,i=new Float32Array(r*r*3),a=new Uint32Array(t*t*6);for(let e=0;e<r;e++)for(let n=0;n<r;n++)i[(e*r+n)*3]=n/t,i[(e*r+n)*3+2]=e/t;let o=0;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let t=e*r+n,i=t+1,s=t+r,c=s+1;a[o++]=t,a[o++]=s,a[o++]=i,a[o++]=i,a[o++]=s,a[o++]=c}n.setAttribute(`position`,new tr(i,3)),n.setIndex(new tr(a,1)),this.inst=new Float32Array(8192),this.instAttr=new Jr(this.inst,4),this.instAttr.setUsage(ze),n.setAttribute(`iNode`,this.instAttr);let s=e.makeMat({vs:sl,fs:cl.replace(`uniform sampler2DArray uMatA;`,ll+`uniform sampler2DArray uMatA;`),uniforms:this.uniforms,defines:e.preset.stochastic?{STOCHASTIC:1}:{}});this.mesh=new Wr(n,s.main),e.add(`terrain`,this.mesh,s)}onQuality(){this.build()}buildPyramid(){let e=this.world,t=e.P,n=e.height,r=this.leaf=32;this.pyr=[];let i=Math.floor(t.x0/r),a=Math.floor(t.z0/r),o=Math.floor((t.x0+t.nx*t.cs-.01)/r),s=Math.floor((t.z0+t.nz*t.cs-.01)/r),c={ix0:i,iz0:a,w:o-i+1,h:s-a+1};c.mn=new Float32Array(c.w*c.h).fill(1e9),c.mx=new Float32Array(c.w*c.h).fill(-1e9);for(let e=0;e<t.nz;e++){let o=Math.floor((t.z0+(e+.5)*t.cs)/r)-a;for(let a=0;a<t.nx;a++){let s=Math.floor((t.x0+(a+.5)*t.cs)/r)-i,l=o*c.w+s,u=n[e*t.nx+a];u<c.mn[l]&&(c.mn[l]=u),u>c.mx[l]&&(c.mx[l]=u)}}this.pyr.push(c);for(let e=1;e<12;e++){let t=this.pyr[e-1],n=Math.floor(t.ix0/2),r=Math.floor(t.iz0/2),i=Math.floor((t.ix0+t.w-1)/2),a=Math.floor((t.iz0+t.h-1)/2),o={ix0:n,iz0:r,w:i-n+1,h:a-r+1};o.mn=new Float32Array(o.w*o.h).fill(1e9),o.mx=new Float32Array(o.w*o.h).fill(-1e9);for(let e=0;e<t.h;e++)for(let i=0;i<t.w;i++){let a=e*t.w+i,s=(Math.floor((e+t.iz0)/2)-r)*o.w+(Math.floor((i+t.ix0)/2)-n);t.mn[a]<o.mn[s]&&(o.mn[s]=t.mn[a]),t.mx[a]>o.mx[s]&&(o.mx[s]=t.mx[a])}this.pyr.push(o)}this.oMin=t.floor-80,this.oMax=t.summit,this.inner=[t.x0+430,t.z0+430,t.x0+t.nx*t.cs-430,t.z0+t.nz*t.cs-430],this.innerFull=[t.x0,t.z0,t.x0+t.nx*t.cs,t.z0+t.nz*t.cs]}minmax(e,t,n,r,i){let a=this.innerFull;if(t>=a[2]||n>=a[3]||t+r<=a[0]||n+r<=a[1]){i[0]=this.oMin,i[1]=this.oMax;return}let o=this.pyr[e],s=Math.round(t/r)-o.ix0,c=Math.round(n/r)-o.iz0,l=1e9,u=-1e9;s>=0&&c>=0&&s<o.w&&c<o.h&&(l=o.mn[c*o.w+s],u=o.mx[c*o.w+s]);let d=this.inner;(t<d[0]||n<d[1]||t+r>d[2]||n+r>d[3]||l>u)&&(l=Math.min(l,this.oMin),u=Math.max(u,this.oMax)),i[0]=l-2,i[1]=u+2}update(e,t){let n=t.camWorld,r=t.origin,i=t.viewProj.elements,a=this._pl||=new Float32Array(16);for(let e=0;e<4;e++){let t=e<2?0:1,n=e&1?-1:1;a[e*4]=i[3]+n*i[t],a[e*4+1]=i[7]+n*i[4+t],a[e*4+2]=i[11]+n*i[8+t],a[e*4+3]=i[15]+n*i[12+t]}let o=this.uniforms.uRange0.value,s=this.inst,c=[0,0],l=0,u=this,d=t.camera.far,f=this.leaf*2**(this.levels-1);function p(e,t,n,i,o){let s=e-r.x,c=s+n,l=t-r.z,u=l+n,d=i-r.y,f=o-r.y;for(let e=0;e<4;e++){let t=a[e*4],n=a[e*4+1],r=a[e*4+2],i=a[e*4+3];if(t*(t>0?c:s)+n*(n>0?f:d)+r*(r>0?u:l)+i<0)return!1}return!0}function m(e,t,r,i,a){let o=Math.max(e-n.x,0,n.x-(e+r)),s=Math.max(t-n.z,0,n.z-(t+r)),c=Math.max(i-n.y,0,n.y-a);return o*o+c*c+s*s}function h(e,t,n,r){u.minmax(r,e,t,n,c);let i=c[0],a=c[1];if(!p(e,t,n,i,a))return;let f=m(e,t,n,i,a);if(!(f>d*d)){if(r>0){let i=o*2**(r-1);if(f<i*i){let i=n/2;h(e,t,i,r-1),h(e+i,t,i,r-1),h(e,t+i,i,r-1),h(e+i,t+i,i,r-1);return}}l<2048&&(s[l*4]=e,s[l*4+1]=t,s[l*4+2]=n,s[l*4+3]=r,l++)}}let g=Math.floor((n.x-7e4)/f),_=Math.floor((n.x+7e4)/f),v=Math.floor((n.z-7e4)/f),y=Math.floor((n.z+7e4)/f);for(let e=v;e<=y;e++)for(let t=g;t<=_;t++)h(t*f,e*f,f,this.levels-1);this.count=l,this.mesh.geometry.instanceCount=l,this.instAttr.clearUpdateRanges(),this.instAttr.addUpdateRange(0,l*4),this.instAttr.needsUpdate=!0}},dl=`precision highp float; in vec2 vUv; out vec4 fragColor; uniform float uZ;
vec3 h33(vec3 p){ p = vec3(dot(p, vec3(127.1, 311.7, 74.7)), dot(p, vec3(269.5, 183.3, 246.1)), dot(p, vec3(113.5, 271.9, 124.6))); return fract(sin(p) * 43758.5453123); }
float worley(vec3 p, float f){ p *= f; vec3 id = floor(p), fr = fract(p); float md = 1.0;
  for (int x = -1; x <= 1; x++) for (int y = -1; y <= 1; y++) for (int z = -1; z <= 1; z++) { vec3 o = vec3(float(x), float(y), float(z)); vec3 h = h33(mod(id + o, f)); vec3 d = o + h - fr; md = min(md, dot(d, d)); }
  return 1.0 - sqrt(md); }
float grad(vec3 p, float f){ p *= f; vec3 i = floor(p), w = fract(p); vec3 u = w * w * w * (w * (w * 6.0 - 15.0) + 10.0); float r = 0.0;
  float v[8]; for (int k = 0; k < 8; k++) { vec3 o = vec3(float(k & 1), float((k >> 1) & 1), float((k >> 2) & 1)); vec3 g = h33(mod(i + o, f)) * 2.0 - 1.0; v[k] = dot(g, w - o); }
  return mix(mix(mix(v[0], v[1], u.x), mix(v[2], v[3], u.x), u.y), mix(mix(v[4], v[5], u.x), mix(v[6], v[7], u.x), u.y), u.z); }
float pfbm(vec3 p, float f){ float s = 0.0, a = 1.0, n = 0.0; for (int i = 0; i < 5; i++) { s += a * grad(p, f); n += a; a *= 0.5; f *= 2.0; } return s / n * 0.75 + 0.5; }
float remap(float x, float a, float b, float c, float d){ return c + (x - a) / (b - a) * (d - c); }
void main(){
  vec3 p = vec3(vUv, uZ);
  float w4 = worley(p, 4.0), w8 = worley(p, 8.0), w16 = worley(p, 16.0), w32 = worley(p, 32.0), w64 = worley(p, 64.0);
  float pf = pfbm(p, 4.0); float wf = w4 * 0.625 + w8 * 0.25 + w16 * 0.125;
  float pw = clamp(remap(pf, 0.0, 1.0, wf * 0.55, 1.0), 0.0, 1.0);
  fragColor = vec4(pw, w8 * 0.625 + w16 * 0.25 + w32 * 0.125, w16 * 0.625 + w32 * 0.25 + w64 * 0.125, w32 * 0.75 + w64 * 0.25);
}`,fl=`
uniform sampler3D uNoise; uniform vec4 uCloudP; // windX, windZ, sigma, detail
float remap01(float x, float a, float b){ return saturate((x - a) / (b - a)); }
float coverage(vec2 w){
  float a = vnoise(w / 9200.0 + 1.7), b = vnoise(w / 3700.0 + 8.3), c = vnoise(w / 1500.0 + 3.1);
  return a * 0.52 + b * 0.32 + c * 0.16;
}
float cloudDensity(vec3 p, float curveDrop, bool cheap, out float hN){
  float y = p.y + curveDrop; hN = (y - uCloud.x) / (uCloud.y - uCloud.x);
  if (hN <= 0.0 || hN >= 1.0) return 0.0;
  vec2 w = p.xz + uCloudP.xy * uTime;
  float cov = saturate((coverage(w) - (1.0 - uCloud.z)) * 3.2 + 0.18);
  if (cov <= 0.0) return 0.0;
  // cumulus-like vertical profile: flat-ish rounded base, billowing tops whose height follows local coverage
  float topH = mix(0.35, 1.0, cov); float bl = 0.2 * vnoise(w / 520.0 + 5.0) + 0.1 * (1.0 - cov); float prof = smoothstep(bl, bl + 0.14, hN) * (1.0 - smoothstep(topH * 0.55, topH, hN));
  vec4 n = textureLod(uNoise, vec3(w.x, y * 1.15, w.y) / 4300.0, 0.0);
  float base = remap01(n.r, 1.0 - (n.g * 0.625 + n.b * 0.25 + n.a * 0.125), 1.0);
  float d = remap01(base * prof, 1.0 - cov * 0.92, 1.0);
  if (d <= 0.0) return 0.0;
  if (!cheap) {
    vec4 dn = textureLod(uNoise, vec3(w.x, y, w.y) / 760.0 + vec3(0.0, uTime * 0.004, 0.0), 0.0); float det = dn.g * 0.6 + dn.b * 0.28 + dn.a * 0.12;
    det = mix(det, 1.0 - det, saturate(hN * 4.0)); // wispy at the base, billowy at the tops
    d = remap01(d, det * uCloudP.w * (1.0 - d * 0.5), 1.0);
  }
  return d;
}`,pl=$+Tc+Nc+fl+`
in vec2 vUv; out vec4 fragColor;
uniform mat4 uInvViewProj; uniform mat4 uPrevViewProj; uniform vec3 uCamRender; uniform sampler2D uHist; uniform vec4 uCP; // steps, lightSteps, frame, reset
uniform vec3 uSH0; uniform vec4 uRS; uniform vec4 uHRS; // uHRS: sub-viewport of the history frame (differs from uRS for a few frames after a resolution change)
vec2 croots(float k, float b, float c){ float disc = b * b - 4.0 * k * c; if (disc < 0.0) return vec2(-1.0); float sq = sqrt(disc); float q = -0.5 * (b + (b < 0.0 ? -sq : sq)); float r1 = q / k, r2 = abs(q) > 1e-12 ? c / q : -1.0; return vec2(min(r1, r2), max(r1, r2)); }
float hg(float c, float g){ float g2 = g * g; return (1.0 - g2) / (4.0 * PI * pow(1.0 + g2 - 2.0 * g * c, 1.5)); }
void main(){
  vec4 pn = uInvViewProj * vec4(vUv * 2.0 - 1.0, 0.5, 1.0); vec3 rd = normalize(pn.xyz / pn.w - uCamRender); vec3 ro = uCamWorld;
  // slab intersection including earth-curvature drop: effective height f(t) = y0 + rd.y t + k t^2
  float kc = 7.8e-8 * (1.0 - rd.y * rd.y) + 1e-13; const float MAXD = 85000.0; float t0 = 1e9, t1 = -1.0;
  vec2 rT = croots(kc, rd.y, ro.y - uCloud.y), rB = croots(kc, rd.y, ro.y - uCloud.x);
  if (ro.y > uCloud.y) { if (rd.y < 0.0 && rT.x > 0.0) { t0 = rT.x; t1 = rB.x > 0.0 ? rB.x : rT.y; } }
  else if (ro.y > uCloud.x) { t0 = 0.0; t1 = (rd.y < 0.0 && rB.x > 0.0) ? rB.x : rT.y; }
  else { t0 = rB.y; t1 = rT.y; }
  t0 = max(t0, 0.0); t1 = min(t1, MAXD);
  // above the deck looking toward the horizon: curvature brings the layer back into view
  vec4 outc = vec4(0.0, 0.0, 0.0, 1.0); float tMean = 0.0, wMean = 0.0;
  if (t1 > t0) {
    float cs = dot(rd, uSunDir); float ph = mix(hg(cs, 0.82), hg(cs, -0.28), 0.42) + 0.6 * hg(cs, 0.97) * 0.12;
    float sigma = uCloudP.z; int N = int(uCP.x);
    float jit = fract(ign(gl_FragCoord.xy) + uCP.z * 0.61803398875);
    float span = t1 - t0; float t = t0; float T = 1.0; vec3 L = vec3(0.0); float dt0 = clamp(span / float(N), 14.0, 70.0);
    vec3 sunC = uSunIllum * transLUT(RG + uCloud.x * 0.001, uSunDir.y);
    vec3 ambTop = uSH0 * 0.72, ambBot = uSH0 * vec3(0.5, 0.52, 0.58) * 0.36;
    float base = clamp(span / float(N), 14.0, 5000.0);
    for (int i = 0; i < N; i++) {
      float dt = max(dt0, (t - t0) * 0.06); float ts = t + dt * jit; if (ts > t1 || T < 0.012) break;
      vec3 p = ro + rd * ts; float drop = ts * ts * 7.8e-8 * (1.0 - rd.y * rd.y); float hN;
      float d = cloudDensity(p, drop, ts > 22000.0, hN);
      if (d > 0.001) {
        // light march toward the sun
        float tau = 0.0; float ls = 28.0; vec3 lp = p; int LN = int(uCP.y);
        for (int k = 0; k < LN; k++) { lp += uSunDir * ls; float hh; tau += cloudDensity(lp, drop, true, hh) * ls; ls *= 1.75; }
        tau *= sigma;
        float ext = d * sigma;
        // octave multi-scattering approximation + powder
        float ms = exp(-tau) * ph + 0.5 * exp(-tau * 0.42) * mix(ph, 0.0796, 0.55) + 0.25 * exp(-tau * 0.16) * 0.0796;
        float powder = 1.0 - exp(-d * sigma * 85.0 - tau * 2.2); powder = mix(1.0, powder, 0.55 * saturate(0.5 - 0.5 * cs + 0.35));
        vec3 S = sunC * ms * powder * 3.0 + mix(ambBot, ambTop, saturate(hN * 1.15)) * (0.34 + 0.66 * exp(-tau * 0.5)) / PI * 1.0;
        S *= ext; float st = exp(-ext * dt);
        L += T * (S - S * st) / max(ext, 1e-5);
        float wv = T * (1.0 - st); tMean += ts * wv; wMean += wv; T *= st;
      }
      t += dt;
    }
    outc = vec4(L, T);
    if (wMean > 1e-4) { tMean /= wMean; vec4 ap = sampleAP(vUv, min(tMean, uAPFar)); outc.rgb = outc.rgb * ap.a + ap.rgb * (1.0 - T); }
  }
  // temporal accumulation
  float dref = wMean > 1e-4 ? tMean : (t1 > t0 ? max(t0, 3000.0) : 30000.0);
  vec4 pc = uPrevViewProj * vec4(uCamRender + rd * dref, 1.0); vec2 puv = pc.xy / pc.w * 0.5 + 0.5;
  float blend = 0.16; if (uCP.w > 0.5 || pc.w <= 0.0 || puv.x < 0.0 || puv.y < 0.0 || puv.x > 1.0 || puv.y > 1.0) blend = 1.0;
  vec4 h = texture(uHist, min(puv * uHRS.xy, uHRS.xy - uHRS.zw));
  if (any(isnan(h)) || any(isinf(h))) blend = 1.0;
  fragColor = mix(blend < 1.0 ? h : outc, outc, blend);
}`,ml=$+fl+`
in vec2 vUv; out vec4 fragColor; uniform vec4 uRect; // centre xz, size
void main(){
  vec2 xz = uRect.xy + (vUv - 0.5) * uRect.z; float midY = 0.5 * (uCloud.x + uCloud.y);
  float th = uCloud.y - uCloud.x; float tau = 0.0; const int N = 10; float len = th / max(uSunDir.y, 0.12); float dl = len / float(N);
  vec3 p0 = vec3(xz.x, midY, xz.y) - uSunDir * len * 0.5;
  for (int i = 0; i < N; i++) { float hN; tau += cloudDensity(p0 + uSunDir * (float(i) + 0.5) * dl, 0.0, true, hN) * dl; }
  fragColor = vec4(vec3(mix(0.16, 1.0, exp(-tau * uCloudP.z * 0.75))), 1.0);
}`,hl=class{constructor(e,n){this.e=e,this.world=n,e.modules.push(this);let r=e.G,i=e.renderer;this.noise=new Nt(128,128,128,{format:T,type:u,minFilter:s,magFilter:s,depthBuffer:!1}),this.noise.texture.wrapS=this.noise.texture.wrapT=this.noise.texture.wrapR=t;let a=e.fsMat(dl,{uZ:{value:0}});for(let t=0;t<128;t++)a.uniforms.uZ.value=(t+.5)/128,e.fsMesh.material=a,i.setRenderTarget(this.noise,t),i.render(e.fsScene,e.fsCam);a.dispose(),this.cloudP={value:new Y(7,3,.07,.42)};let o={...r,uNoise:{value:this.noise.texture},uCloudP:this.cloudP};this.mat=e.fsMat(pl,{...o,uInvViewProj:{value:new X},uPrevViewProj:{value:new X},uCamRender:{value:new q},uHist:{value:null},uHRS:{value:new Y(1,1,0,0)},uCP:{value:new Y(64,6,0,1)},uSH0:{value:new q(1,1,1)}}),this.shadowRT=new kt(512,512,{format:T,type:u,minFilter:s,magFilter:s,depthBuffer:!1}),this.shadowMat=e.fsMat(ml,{...o,uRect:{value:new Y(0,0,36e3,0)}}),r.uCloudShadowTex.value=this.shadowRT.texture,this.reset=1,this.tick=0,this.rts=null,this.setCoverage(n.P.coverage??.52)}setCoverage(e){this.e.G.uCloud.value.z=e,this.reset=1,this.tick=0}onInternal(e,t){let n=this.e,r=n.preset.cloudScale,i=Math.max(16,Math.ceil(n.outW*r)),a=Math.max(16,Math.ceil(n.outH*r));if(!this.rts||this.rts[0].width!==i||this.rts[0].height!==a){this.rts&&this.rts.forEach(e=>e.dispose());let e=()=>new kt(i,a,{type:_,format:T,minFilter:s,magFilter:s,depthBuffer:!1});this.rts=[e(),e()],this.i=0,this.reset=1,this.rsHist=null}let o=Math.max(8,Math.ceil(e*r)),c=Math.max(8,Math.ceil(t*r));this.vw=o,this.vh=c;for(let e of this.rts)e.viewport.set(0,0,o,c),e.scissor.set(0,0,o,c),e.scissorTest=!0;this.rs=new Y(o/i,c/a,.5/i,.5/a),this.rsHist=this.rsHist||this.rs.clone()}onQuality(){this.rts&&this.rts.forEach(e=>e.dispose()),this.rts=null,this.onInternal(this.e.iw,this.e.ih)}prePass(e){let t=e.camWorld,n=this.shadowMat.uniforms.uRect.value,r=36e3,i=r/512,a=Math.round(t.x/i/32)*i*32,o=Math.round(t.z/i/32)*i*32;(this.tick%12==0||a!==n.x||o!==n.y)&&(n.set(a,o,r,0),e.G.uCloudShadowRect.value.set(a,o,1/r,0),e.timer.begin(`clouds`),e.pass(this.shadowMat,this.shadowRT),e.timer.end()),this.tick++}postScene(e){this.rts||this.onInternal(e.iw,e.ih);let t=this.mat.uniforms,n=this.rts[this.i],r=this.rts[1-this.i],i=e.preset;t.uInvViewProj.value.copy(e.invViewProjNoJitter),t.uPrevViewProj.value.copy(e.post.camU.uPrevViewProj.value.copy(e.prevViewProjNJ)),t.uCamRender.value.copy(e.camera.position),e.post.rebaseShift&&e.post.rebaseShift.lengthSq()>0&&t.uPrevViewProj.value.multiply(new X().makeTranslation(-e.post.rebaseShift.x,-e.post.rebaseShift.y,-e.post.rebaseShift.z)),t.uHist.value=n.texture,t.uHRS.value.copy(this.rsHist),t.uCP.value.set(i.cloudSteps,i.cloudLight,e.frame%64,this.reset||e.post.reset),t.uSH0.value.copy(e.G.uSH.value[0]);let a=e.G.uRS.value,o=a.clone();a.copy(this.rs),e.timer.begin(`clouds`),e.pass(this.mat,r),e.timer.end(),a.copy(o),this.i=1-this.i,this.reset=0,this.rsHist=this.rs.clone(),e.post.cloudTex=r.texture,e.post.cloudRS=this.rs}};function gl(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function _l(e){let t=2166136261;e=String(e);for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function vl(e,t,n=0){let r=Math.imul(e|0,374761393)+Math.imul(t|0,668265263)+Math.imul(n|0,2147483647)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}var yl=.5*(Math.sqrt(3)-1),bl=(3-Math.sqrt(3))/6;function xl(e){let t=gl(e),n=new Uint8Array(512),r=new Uint8Array(256);for(let e=0;e<256;e++)r[e]=e;for(let e=255;e>0;e--){let n=t()*(e+1)|0,i=r[e];r[e]=r[n],r[n]=i}for(let e=0;e<512;e++)n[e]=r[e&255];let i=new Float32Array(256),a=new Float32Array(256);for(let e=0;e<256;e++){let t=e/256*Math.PI*2*7.13;i[e]=Math.cos(t),a[e]=Math.sin(t)}function o(e,t){let r=(e+t)*yl,o=Math.floor(e+r),s=Math.floor(t+r),c=(o+s)*bl,l=e-(o-c),u=t-(s-c),d=+(l>u),f=1-d,p=l-d+bl,m=u-f+bl,h=l-1+2*bl,g=u-1+2*bl,_=o&255,v=s&255,y=0,b=.5-l*l-u*u;if(b>0){let e=n[_+n[v]];b*=b,y+=b*b*(i[e]*l+a[e]*u)}if(b=.5-p*p-m*m,b>0){let e=n[_+d+n[v+f]];b*=b,y+=b*b*(i[e]*p+a[e]*m)}if(b=.5-h*h-g*g,b>0){let e=n[_+1+n[v+1]];b*=b,y+=b*b*(i[e]*h+a[e]*g)}return 70*y}function s(e,t,n,r=2,i=.5){let a=1,s=1,c=0,l=0;for(let u=0;u<n;u++)c+=a*o(e*s+u*17.3,t*s-u*9.1),l+=a,a*=i,s*=r;return c/l}function c(e,t,n,r=2.05,i=.5){let a=1,s=1,c=0,l=0,u=1;for(let d=0;d<n;d++){let n=1-Math.abs(o(e*s+d*31.7,t*s+d*12.9));n*=n,c+=a*n*u,l+=a,u=Math.min(1,Math.max(0,n*1.6)),a*=i,s*=r}return c/l}return{n2:o,fbm:s,ridged:c,rnd:t}}var Sl=(e,t,n)=>e<t?t:e>n?n:e,Cl=class{constructor(){this.p=[],this.n=[],this.uv=[],this.ex=[],this.idx=[]}get count(){return this.p.length/3}tube(e,t,n,r,i,a){let o=this.count,s=new q(0,1,0),c=new q,l=new q,u=new q,d=0;for(let o=0;o<e.length;o++){let f=e[o],p=e[Math.min(o+1,e.length-1)],m=e[Math.max(o-1,0)];c.copy(p).sub(m).normalize(),l.crossVectors(c,Math.abs(c.y)>.95?new q(1,0,0):s).normalize(),u.crossVectors(c,l).normalize(),o>0&&(d+=f.distanceTo(m)*r);for(let e=0;e<=n;e++){let r=e/n*Math.PI*2,s=Math.cos(r),c=Math.sin(r),p=l.x*s+u.x*c,m=l.y*s+u.y*c,h=l.z*s+u.z*c;this.p.push(f.x+p*t[o],f.y+m*t[o],f.z+h*t[o]),this.n.push(p,m,h),this.uv.push(e/n*2,d),this.ex.push(f.y,i[o],a)}}for(let t=0;t<e.length-1;t++)for(let e=0;e<n;e++){let r=o+t*(n+1)+e,i=r+1,a=r+n+1,s=a+1;this.idx.push(r,i,a,i,s,a)}}card(e,t,n,r,i,a,o,s,c=0){let l=r*((i.u1-i.u0)/(i.v1-i.v0)),u=this.count,d=new q().crossVectors(n,t).normalize();d.dot(a)<0&&d.negate(),d.lerp(a,.55).normalize();let f=c!==0,p=f?3:2;for(let a=0;a<p;a++){let u=a/(p-1),m=f?-c*r*(u*u):0;for(let a=0;a<2;a++){let c=a===0?-.5:.5;this.p.push(e.x+n.x*c*l+t.x*u*r+d.x*m*0,e.y+n.y*c*l+t.y*u*r+m,e.z+n.z*c*l+t.z*u*r),this.n.push(d.x,d.y,d.z),this.uv.push(a===0?i.u0:i.u1,i.v1+(i.v0-i.v1)*u),this.ex.push(e.y,Math.min(1,o+u*.25),s)}}for(let e=0;e<p-1;e++){let t=u+e*2;this.idx.push(t,t+1,t+2,t+1,t+3,t+2)}}geometry(){let e=new gr;return e.setAttribute(`position`,new ir(this.p,3)),e.setAttribute(`normal`,new ir(this.n,3)),e.setAttribute(`uv`,new ir(this.uv,2)),e.setAttribute(`aExtra`,new ir(this.ex,3)),e.setIndex(this.idx.length>65535?new rr(this.idx,1):new nr(this.idx,1)),e}},wl=(e,t,n)=>new q(e,t,n);function Tl(e,t,n,r,i,a=.0012,o=.012){let s=[],c=[],l=[],u=t()*6.28,d=t()*6.28;for(let e=0;e<=i;e++){let t=e/i;s.push(wl(Math.sin(t*2.3+u)*o*t,t,Math.cos(t*1.7+d)*o*t));let r=1+.9*Math.exp(-t*38);c.push((n*(1-t)**.85+a)*r),l.push(0)}return e.tube(s,c,r,9,l,.8),e=>{let t=e*i,n=Math.min(i-1,Math.floor(t)),r=t-n;return s[n].clone().lerp(s[n+1],r)}}function El(e,t,n,r,i){let a=gl(n),o=new Cl,s=new Cl,c=r===0,l=Tl(o,a,i.trunkR,c?8:5,c?10:5),u=c?i.levels:Math.round(i.levels*.4),d=i.card*(c?1:2.1),f=t.slice(0,4),p=t.slice(0,6);for(let e=0;e<u;e++){let t=((e+a()*.6)/u)**.92,n=l(i.baseH+(.985-i.baseH)*t),r=i.crownR*(1-t)**i.taper*(.82+.36*a())+.008,m=(c?i.perLevel:Math.max(3,i.perLevel-1))+ +(a()<.3),h=a()*6.28,g=(i.elBot+(i.elTop-i.elBot)*t**1.4)*Math.PI/180;for(let e=0;e<m;e++){let l=h+(e+(a()-.5)*.5)*6.2832/m,u=r*(.7+.3*a()),_=wl(Math.cos(l)*Math.cos(g),Math.sin(g),Math.sin(l)*Math.cos(g)),v=wl(-Math.sin(l),0,Math.cos(l)),y=i.droop*u*(1-t*.7),b=e=>wl(n.x+_.x*u*e,n.y+_.y*u*e-y*e*e+i.tipUp*u*e*e*e,n.z+_.z*u*e);if(c&&u>.03){let e=[b(0),b(.35),b(.7),b(1)],n=[.0034*(1-t*.6)+6e-4,.0022*(1-t*.5)+4e-4,.0012,4e-4];o.tube(e,n,3,14,[0,.3,.65,1],.55)}let x=d*.42/Math.max(u,.01),S=wl(Math.cos(l),.35,Math.sin(l)).normalize(),C=wl(S.x*.6,.8,S.z*.6).normalize();for(let e=.14+a()*.1;e<.97;e+=x*(.8+.4*a())){let t=b(e),n=b(Math.min(1,e+.05)).clone().sub(t).normalize(),r=.34+.66*Math.min(1,e*u/(i.crownR*.75));for(let o of[-1,1,0]){if(o===0&&a()<.35)continue;let c=(o===0?n.clone().multiplyScalar(.8).add(wl((a()-.5)*.5,.25+a()*.5,(a()-.5)*.5)):v.clone().multiplyScalar(o*(.55+.3*a())).addScaledVector(n,.5).add(wl(0,-i.hang-a()*.55,0))).normalize(),l=wl().crossVectors(c,wl(a()-.5,1,a()-.5).normalize()).normalize();a()<.5&&l.negate(),l.addScaledVector(wl(0,1,0),(a()-.5)*1.4).normalize();let u=(e>.6?f:p)[Math.floor(a()*(e>.6?f.length:p.length))];s.card(t.clone().addScaledVector(c,-d*.12),c,l,d*(.8+.4*a())*(.75+.35*(1-e)),u,C,e,r,.18)}}{let e=b(.9),t=b(1).sub(b(.85)).normalize(),n=v.clone();s.card(e,t,n,d*.9,f[Math.floor(a()*f.length)],C,1,1,.1)}}}for(let e=0;e<5;e++){let t=e*1.26+a(),n=wl(Math.cos(t)*.32,.95,Math.sin(t)*.32).normalize();s.card(l(.955).clone(),n,wl(-Math.sin(t),0,Math.cos(t)),d*.9,f[e%f.length],n,.6,1)}return{bark:o.geometry(),foliage:s.geometry()}}function Dl(e,t,n,r){let i=gl(t),a=new Cl,o=new Cl,s=n===0,c=Tl(a,i,r.trunkR,s?8:5,s?10:5,.002,.02),l=s?13:8,u=r.card*(s?1:1.6),d=e.slice(0,2),f=(e,t,n,r,a)=>{let s=Math.abs(t.y)>.9?wl(1,0,0):wl(0,1,0),c=wl().crossVectors(t,s).normalize(),l=wl().crossVectors(t,c);for(let s=0;s<n;s++){let u=s/n*6.283+i(),f=c.clone().multiplyScalar(Math.cos(u)).addScaledVector(l,Math.sin(u)),p=t.clone().multiplyScalar(.75).addScaledVector(f,.66).normalize(),m=wl().crossVectors(p,f).normalize();o.card(e,p,m,r*(.8+.4*i()),d[s%2==0||i()<.5?0:1],p.clone().add(wl(0,.6,0)).normalize(),.8,a)}};for(let e=0;e<l;e++){let t=(e+i()*.5)/l,n=c(r.baseH+(.96-r.baseH)*t),o=3+Math.floor(i()*3),d=i()*6.28,p=r.crownR*(.45+.75*Math.sin(Math.PI*t**.7*.92))*(1-t*.35);for(let e=0;e<o;e++){let r=d+(e+(i()-.5)*.6)*6.2832/o,c=p*(.6+.4*i()),l=(8+38*t+(i()-.5)*16)*Math.PI/180,m=wl(Math.cos(r)*Math.cos(l),Math.sin(l),Math.sin(r)*Math.cos(l)),h=e=>wl(n.x+m.x*c*e,n.y+m.y*c*e-.06*c*e*e+.16*c*e*e*e,n.z+m.z*c*e),g=[h(0),h(.33),h(.66),h(1)];a.tube(g,[.0058*(1-t*.5),.004*(1-t*.4),.0024,.001],s?4:3,12,[0,.3,.6,1],.7);let _=s?3+Math.floor(i()*3):2;f(h(1),h(1).sub(h(.9)).normalize(),s?9:5,u,1),s&&f(h(.8),h(.85).sub(h(.75)).normalize(),6,u*.9,.85);for(let e=0;e<_;e++){let e=.4+.5*i(),t=h(e),n=i()*6.28,r=wl(Math.cos(n),.5+i()*.5,Math.sin(n)).normalize().lerp(m,.35).normalize(),o=c*(.22+.25*i()),l=t.clone().addScaledVector(r,o);s&&a.tube([t,l],[.002,8e-4],3,12,[e,1],.7),f(l,r,s?6:4,u*.9,.75+.25*e),s&&f(t.clone().lerp(l,.55),r,4,u*.8,.6)}}}return f(c(.985),wl(0,1,0),7,u,1),{bark:a.geometry(),foliage:o.geometry()}}function Ol(e,t,n,r){let i=gl(t),a=new Cl,o=new Cl,s=n===0,c=Tl(a,i,r.trunkR,s?8:5,s?10:5,.0016,.03),l=r.card*(s?1:1.7),u=e.slice(1,4).concat(e.slice(4,5)),d=(e,t,n,r)=>{for(let a=0;a<n;a++){let n=wl(i()-.5,i()-.35,i()-.5).normalize(),a=e.clone().addScaledVector(n,t*Math.cbrt(i())),s=wl(i()-.5,-.2-i()*.6,i()-.5).normalize(),c=wl().crossVectors(s,wl(i()-.5,i()-.5,i()-.5)).normalize();o.card(a,s,c,l*(.75+.5*i()),u[Math.floor(i()*u.length)],n.clone().add(wl(0,.5,0)).normalize(),.9,r*(.55+.45*Math.max(0,n.y*.5+.5)))}},f=s?9:6;for(let e=0;e<f;e++){let t=e/(f-1),n=r.baseH+(.9-r.baseH)*t+(i()-.5)*.04,o=c(Math.min(.95,n)),u=e*2.4+i()*.8,p=(30+35*t+(i()-.5)*14)*Math.PI/180,m=r.crownR*(1.15-.55*t)*(.75+.35*i()),h=wl(Math.cos(u)*Math.cos(p),Math.sin(p),Math.sin(u)*Math.cos(p)),g=e=>wl(o.x+h.x*m*e,o.y+h.y*m*e+.12*m*e*e,o.z+h.z*m*e);a.tube([g(0),g(.4),g(.75),g(1)],[.006*(1-t*.5),.0042*(1-t*.4),.0025,.001],s?4:3,10,[0,.3,.6,1],.7);let _=s?5:3;for(let e=0;e<_;e++){let t=.35+.65*(e+i()*.6)/_,n=g(Math.min(1,t)),r=i()*6.28,o=wl(Math.cos(r),.1+i()*.7,Math.sin(r)).normalize().lerp(h,.3).normalize(),c=m*(.3+.3*i()),u=n.clone().addScaledVector(o,c);s&&a.tube([n,u],[.0022,6e-4],3,10,[t,1],.7),d(u,l*1.7,s?22:7,1),d(n.clone().lerp(u,.5),l*1.5,s?12:3,.8)}d(g(1),l*1.8,s?20:6,1)}return d(c(.97),l*2,s?26:8,1),{bark:a.geometry(),foliage:o.geometry()}}var kl=[{name:`spruce`,atlas:`fir`,barkTex:`fir`,tint:[.42,.56,.4],barkTint:[.75,.68,.62],halfW:.24},{name:`pine`,atlas:`pine`,barkTex:`pine`,tint:[.72,.8,.6],barkTint:[.95,.74,.6],halfW:.27},{name:`subalpine fir`,atlas:`fir`,barkTex:`fir`,tint:[.36,.5,.44],barkTint:[.72,.7,.68],halfW:.17},{name:`birch`,atlas:`birch`,barkTex:`birch`,tint:[.4,.54,.26],barkTint:[1.5,1.5,1.45],halfW:.33}];function Al(e,t,n,r=0){let i=1e3+e*97+r*13;return e===0?El(0,t.fir,i,n,{trunkR:.0135,levels:54,perLevel:6,crownR:.17,taper:.8,baseH:.1,elBot:-22,elTop:34,droop:.34,tipUp:.22,hang:.3,card:.03}):e===1?Dl(t.pine,i,n,{trunkR:.0145,crownR:.2,baseH:.3,card:.055}):e===2?El(2,t.fir,i,n,{trunkR:.012,levels:56,perLevel:5,crownR:.105,taper:.62,baseH:.06,elBot:-30,elTop:30,droop:.2,tipUp:.1,hang:.22,card:.027}):Ol(t.birch,i,n,{trunkR:.0115,crownR:.26,baseH:.3,card:.045})}var jl={morning:{label:`Morning`,az:62,el:24,turbidity:1},midday:{label:`Midday`,az:105,el:56,turbidity:.9},golden:{label:`Golden Hour`,az:-48,el:10.5,turbidity:1.25}};function Ml(e){let t=jl[e]||jl.midday,n=t.az*Math.PI/180,r=t.el*Math.PI/180;return[Math.sin(n)*Math.cos(r),Math.sin(r),Math.cos(n)*Math.cos(r)]}function Nl(e,t,n,r,i){let a=Math.floor(r),o=Math.floor(i),s=r-a,c=i-o,l=(e,t)=>t===0?((-e+2)*e-1)*e*.5:t===1?((3*e-5)*e*e+2)*.5:t===2?((-3*e+4)*e+1)*e*.5:(e-1)*e*e*.5,u=0;for(let r=0;r<4;r++){let i=Sl(o-1+r,0,n-1)*t,d=l(c,r);u+=d*(l(s,0)*e[i+Sl(a-1,0,t-1)]+l(s,1)*e[i+Sl(a,0,t-1)]+l(s,2)*e[i+Sl(a+1,0,t-1)]+l(s,3)*e[i+Sl(a+2,0,t-1)])}return u}var Pl=5.2,Fl=[{name:`spruce`,hMin:15,hMax:31,crown:.17,trunk:.013},{name:`pine`,hMin:13,hMax:27,crown:.2,trunk:.014},{name:`subalpine fir`,hMin:5,hMax:17,crown:.11,trunk:.012},{name:`birch`,hMin:8,hMax:17,crown:.26,trunk:.011}];function Il(e,t,n){let r=e.P,i=(t-r.x0)/r.cs-.5,a=(n-r.z0)/r.cs-.5;if(i<1||a<1||i>r.nx-3||a>r.nz-3){let r=e.outer,i=Sl((t-r.x0)/r.cs-.5,0,r.nx-1.001),a=Sl((n-r.z0)/r.cs-.5,0,r.nz-1.001),o=i|0,s=a|0,c=i-o,l=a-s,u=r.data,d=s*r.nx+o;return(u[d]*(1-c)+u[d+1]*c)*(1-l)+(u[d+r.nx]*(1-c)+u[d+r.nx+1]*c)*l}let o=Nl(e.height,r.nx,r.nz,i,a),s=Math.min(t-r.x0,n-r.z0,r.x0+r.nx*r.cs-t,r.z0+r.nz*r.cs-n);if(s>=420)return o;let c=e.outer,l=Sl((t-c.x0)/c.cs-.5,0,c.nx-1.001),u=Sl((n-c.z0)/c.cs-.5,0,c.nz-1.001),d=l|0,f=u|0,p=l-d,m=u-f,h=c.data,g=f*c.nx+d,_=(h[g]*(1-p)+h[g+1]*p)*(1-m)+(h[g+c.nx]*(1-p)+h[g+c.nx+1]*p)*m,v=Sl((s-20)/400,0,1),y=v*v*(3-2*v);return _+(o-_)*y}function Ll(e,t,n,r){let i=1.5,a=Il(e,t+i,n)-Il(e,t-i,n),o=Il(e,t,n+i)-Il(e,t,n-i),s=1/Math.hypot(a,2*i,o);return r[0]=-a*s,r[1]=2*i*s,r[2]=-o*s,r}function Rl(e,t,n,r,i){let a=e.P,o=i||e.ctrl,s=Sl((t-a.x0)/a.cs-.5,0,a.nx-1.001),c=Sl((n-a.z0)/a.cs-.5,0,a.nz-1.001),l=s|0,u=c|0,d=s-l,f=c-u,p=(u*a.nx+l)*4+r;return((o[p]*(1-d)+o[p+4]*d)*(1-f)+(o[p+a.nx*4]*(1-d)+o[p+a.nx*4+4]*d)*f)/255}function zl(e,t,n,r){let i=e.P,a=t*48,o=n*48;if(a+48<i.x0+30||o+48<i.z0+30||a>i.x0+i.nx*i.cs-30||o>i.z0+i.nz*i.cs-30)return r;let s=Math.round(48/Pl),c=48/s;for(let l=0;l<s;l++)for(let u=0;u<s;u++){let d=t*s+u,f=n*s+l,p=a+(u+.15+.7*vl(d,f,1))*c,m=o+(l+.15+.7*vl(d,f,2))*c,h=Rl(e,p,m,2);if(h<.04||vl(d,f,3)>h**.4*1.03)continue;let g=Il(e,p,m),_=Sl((g-i.floor)/Math.max(i.treeLine-i.floor,1),0,1.3),v=Rl(e,p,m,0),y=vl(d,f,4),b;b=_>.82?y<.78?2:y<.92?0:1:_>.38?y<.68?0:y<.8?1:2:y<.06+v*.12?3:y<.76?0:y<.88?1:2;let x=Fl[b],S=vl(d,f,5),C=x.hMin+(x.hMax-x.hMin)*(.15+.85*S*S*(3-2*S));C*=Sl(1.25-_*.75,.22,1)*(.6+.4*h),_>.9&&(C*=.55),r.push(p,g-.25,m,C,vl(d,f,6)*6.2832,b,vl(d,f,7),C*x.crown)}return r}function Bl(e,t,n,r,i){let a=e.P,o=t*40,s=n*40;if(o<a.x0+40||s<a.z0+40||o+40>a.x0+a.nx*a.cs-40||s+40>a.z0+a.nz*a.cs-40)return r;for(let a=0;a<5;a++)for(let c=0;c<5;c++){let l=t*5+c,u=n*5+a,d=o+(c+vl(l,u,11))*8,f=s+(a+vl(l,u,12))*8,p=Rl(e,d,f,1),m=Rl(e,d,f,1,e.ctrl2),h=Rl(e,d,f,2,e.ctrl2)*2,g=.035+p*.5+m*.3;if(vl(l,u,13)>g||h>.95||Math.hypot(d-e.lz.x,f-e.lz.z)<e.lz.r+25)continue;let _=Il(e,d,f),v=vl(l,u,14),y=.5+3.6*v*v*v+(vl(l,u,15)>.985?5:0);Rl(e,d,f,3)>.55&&vl(l,u,19)<.85||r.push(d,_-y*.42,f,y,vl(l,u,16)*6.2832,Math.floor(vl(l,u,17)*i),vl(l,u,18),0)}return r}var Vl=192,Hl=8,Ul=128,Wl=.64,Gl=$+`
invariant gl_Position;
in vec3 aExtra; in vec4 iPosH; in vec4 iRot; uniform vec4 uWind; uniform vec4 uPlayer;
out vec3 vWorld; out vec3 vN; out vec2 vUv; out vec3 vEx; out vec2 vTF;
void main(){
  float c = cos(iRot.x), s = sin(iRot.x); float h = iPosH.w;
  vec3 p = position * h; p.xz = vec2(c * p.x + s * p.z, -s * p.x + c * p.z); vec3 n = normal; n.xz = vec2(c * n.x + s * n.z, -s * n.x + c * n.z);
#ifndef BAKE
  float ph = iRot.x * 3.0 + iPosH.x * 0.05; float gust = sin(uTime * 0.7 + dot(iPosH.xz, uWind.xy) * 0.025) * 0.5 + 0.5;
  float sway = (sin(uTime * 1.15 + ph) * 0.6 + sin(uTime * 2.6 + ph * 1.7) * 0.25 + 0.5) * uWind.z * (0.35 + gust * 0.9);
  float fy = aExtra.x; p.xz += uWind.xy * sway * fy * fy * h * 0.011;
  float fl = aExtra.y; float fph = uTime * 3.4 + ph + position.x * 37.0 + position.z * 29.0 + position.y * 11.0;
  p += vec3(sin(fph) * 0.5, cos(fph * 1.3), cos(fph * 0.8) * 0.5) * fl * fl * uWind.z * (0.3 + gust) * 0.0042 * h;
  // wake of the pilot passing close by
  vec3 wp0 = iPosH.xyz + p; vec3 dp = wp0 - uPlayer.xyz; float wk = exp(-dot(dp, dp) / 90.0) * uPlayer.w; p += normalize(dp + vec3(0.0, 0.3, 0.0)) * wk * fl * 0.5;
#endif
  vWorld = iPosH.xyz + p; vN = n; vUv = uv; vEx = aExtra; vTF = iRot.yz;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld - uOrigin, 1.0);
}`,Kl=$+Tc+Ec+`
uniform sampler2D uTex; uniform sampler2D uTexR; uniform vec3 uTint; uniform float uFoliage;
in vec3 vWorld; in vec3 vN; in vec2 vUv; in vec3 vEx; in vec2 vTF;
void main(){
  vec4 a = texture(uTex, vUv);
#if defined(SKF_LOOSE) && !defined(DEPTH_PASS) && !defined(BAKE)
  const float skfMg = 0.05, skfAT = 0.30;
#else
  const float skfMg = 0.0, skfAT = 0.42;
#endif
  if (uFoliage > 0.5 && a.a < skfAT) discard;
#ifndef BAKE
  { float dn = ign(gl_FragCoord.xy + 7.0); if (vTF.y < 0.0) { if (dn < 1.0 + vTF.y - skfMg) discard; } else if (vTF.y < 0.999 && dn > vTF.y + skfMg) discard; }
#endif
#ifdef DEPTH_PASS
#else
  vec3 N = normalize(vN); vec3 Vv = uCamWorld - vWorld; float dist = length(Vv); vec3 V = Vv / dist;
  vec3 alb = a.rgb * uTint * (0.84 + 0.32 * vTF.x); float ao = uFoliage > 0.5 ? vEx.z : mix(0.75, 1.0, vEx.z);
#ifdef BAKE_ALBEDO
  gl_FragColor = vec4(alb * mix(0.55, 1.0, ao), 1.0);
#elif defined(BAKE_NORMAL)
  gl_FragColor = vec4(N * 0.5 + 0.5, 1.0);
#else
  if (uFoliage > 0.5) { alb *= mix(vec3(1.0), vec3(1.08, 1.02, 0.8), vTF.x * 0.6); if (dot(N, V) < 0.0) N = normalize(N + V * 0.6); }
  Surf s; s.albedo = alb; s.N = N; s.rough = uFoliage > 0.5 ? 0.55 : clamp(texture(uTexR, vUv).g, 0.5, 1.0); s.ao = ao; s.f0 = 0.035; s.sss = uFoliage > 0.5 ? 0.85 : 0.0; s.sssColor = alb * vec3(1.7, 2.0, 0.8); s.skyVis = 1.0; if (uFoliage > 0.5) s.albedo *= vec3(1.12, 1.06, 0.8);
  s.shadow = terrainShadow(vWorld) * csmShadow(vWorld + N * 0.12, dist, 1.0) * cloudShadow(vWorld) * (uFoliage > 0.5 ? mix(0.55, 1.0, vEx.z) : mix(0.5, 1.0, vEx.z));
  gl_FragColor = vec4(shadeSurface(s, vWorld, V), 0.0);
#endif
#endif
}`,ql=$+`
invariant gl_Position;
in vec4 iPosH; in vec4 iRot; uniform vec4 uImpP; // lod1 radius, fade band, frames, halfSize
out vec3 vWorld; out vec2 vQuad; out vec4 vFrame; out vec3 vInfo; out vec3 vBase;
vec2 hemiOct(vec3 d){ d.y = max(d.y, 0.02); vec3 o = d / (abs(d.x) + abs(d.y) + abs(d.z)); return vec2(o.x + o.z, o.x - o.z) * 0.5 + 0.5; }
void main(){
  vec3 base = (modelMatrix * vec4(iPosH.xyz, 1.0)).xyz + uOrigin; float h = iPosH.w; vec3 ctr = base + vec3(0.0, 0.5 * h, 0.0);
  vec3 toCam = uCamWorld - ctr; float dist = length(toCam); toCam /= dist;
  float c = cos(iRot.x), s = sin(iRot.x); vec3 dl = vec3(c * toCam.x - s * toCam.z, toCam.y, s * toCam.x + c * toCam.z); // world -> tree local
  vec2 e = hemiOct(dl) * uImpP.z; vec2 cell = clamp(floor(e), 0.0, uImpP.z - 1.0);
  // quad aligned with the frame that was baked from the snapped direction
  vec2 cuv = (cell + 0.5) / uImpP.z * 2.0 - 1.0; vec2 t = vec2(cuv.x + cuv.y, cuv.x - cuv.y) * 0.5; vec3 bd = normalize(vec3(t.x, 1.0 - abs(t.x) - abs(t.y), t.y));
  vec3 bw = vec3(c * bd.x + s * bd.z, bd.y, -s * bd.x + c * bd.z); // local -> world
  vec3 upRef = abs(bw.y) > 0.999 ? vec3(0.0, 0.0, -1.0) : vec3(0.0, 1.0, 0.0);
  vec3 right = normalize(cross(upRef, bw)); vec3 up = cross(bw, right);
  vec2 q = position.xy; // -1..1
  vec3 wp = ctr + (right * q.x + up * q.y) * uImpP.w * h;
  float fade = saturate((dist - (uImpP.x - uImpP.y)) / uImpP.y);
  if (fade <= 0.0) wp = vec3(0.0, -1e5, 0.0) + uCamWorld;
  vWorld = wp; vQuad = q * 0.5 + 0.5; vFrame = vec4(cell, iRot.w, iRot.x); vInfo = vec3(iRot.y, fade, h); vBase = base;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp - uOrigin, 1.0);
}`,Jl=$+Tc+Ec+`
uniform sampler2DArray uImpA; uniform sampler2DArray uImpN; uniform vec4 uImpP;
in vec3 vWorld; in vec2 vQuad; in vec4 vFrame; in vec3 vInfo; in vec3 vBase;
void main(){
  vec3 uvw = vec3((vFrame.xy + vQuad) / uImpP.z, vFrame.z);
  vec4 a = texture(uImpA, uvw);
#if defined(SKF_LOOSE) && !defined(DEPTH_PASS)
  const float skfMg = 0.05, skfAT = 0.38;
#else
  const float skfMg = 0.0, skfAT = 0.5;
#endif
  if (a.a < skfAT) discard;
  if (vInfo.y < 0.999 && ign(gl_FragCoord.xy + 7.0) < 1.0 - vInfo.y - skfMg) discard;
#ifndef DEPTH_PASS
  vec3 nl = texture(uImpN, uvw).rgb * 2.0 - 1.0; float c = cos(vFrame.w), s = sin(vFrame.w); vec3 N = normalize(vec3(c * nl.x + s * nl.z, nl.y, -s * nl.x + c * nl.z));
  vec3 alb = a.rgb / max(a.a, 0.05) * (0.84 + 0.32 * vInfo.x) * vec3(1.1, 1.05, 0.82); alb *= mix(vec3(1.0), vec3(1.08, 1.02, 0.8), vInfo.x * 0.6);
  vec3 Vv = uCamWorld - vWorld; float dist = length(Vv); vec3 V = Vv / dist;
  // approximate position inside the crown for shadow lookup
  float hy = clamp((vWorld.y - vBase.y) / max(vInfo.z, 1.0), 0.0, 1.0);
  Surf sf; sf.albedo = alb; sf.N = N; sf.rough = 0.6; sf.ao = mix(0.62, 1.0, hy); sf.f0 = 0.035; sf.sss = 0.8; sf.sssColor = alb * vec3(1.7, 2.0, 0.8); sf.skyVis = 1.0;
  sf.shadow = terrainShadow(vWorld) * cloudShadow(vWorld) * csmShadow(vWorld + N * 0.3, dist, 1.0) * mix(0.6, 1.0, hy);
  gl_FragColor = vec4(shadeSurface(sf, vWorld, V), 0.0);
#endif
}`,Yl=class{constructor(e,t,n){this.e=e,this.world=t,this.worker=n,e.modules.push(this),this.blocks=new Map,this.pending=new Map,this.uploadQ=[],this.tick=0,this.treeCount=0,n.addEventListener(`message`,e=>{let t=e.data;t.type===`block`&&this.onBlock(t)}),e.rebaseCbs.push(e=>{for(let t of this.blocks.values())t.mesh&&t.mesh.position.set(t.x0-e.x,-e.y,t.z0-e.z)})}async init(e){let t=this.e,n=t.G,r=t.preset.aniso;this.sprites=e.sprites;let i={};await Promise.all([`fir`,`pine`,`birch`].map(async e=>{i[e]={twig:await rl($c(`tex/trees/${e}_twig.webp`),{srgb:!0,repeat:!1,aniso:r}),bark:await rl($c(`tex/trees/${e}_bark_a.jpg`),{srgb:!0,aniso:r}),barkR:await rl($c(`tex/trees/${e}_bark_r.jpg`),{aniso:2})}})),this.tex=i,this.lods=[],this.impP={value:new Y(t.preset.treeLod1,26,Hl,Wl)};let a=[700,6e3];for(let e=0;e<4;e++){let r=kl[e],o=[];for(let s=0;s<2;s++){let c=Al(e,this.sprites,s),l=a[s],u=new Float32Array(l*4),d=new Float32Array(l*4),f=new Jr(u,4),p=new Jr(d,4);f.setUsage(ze),p.setUsage(ze);let m=[];for(let[e,a]of[[`bark`,c.bark],[`foliage`,c.foliage]]){let o=new Yi;o.index=a.index;for(let e of[`position`,`normal`,`uv`,`aExtra`])o.setAttribute(e,a.getAttribute(e));o.setAttribute(`iPosH`,f),o.setAttribute(`iRot`,p),o.instanceCount=0;let c=e===`foliage`,l={...n,uTex:{value:c?i[r.atlas].twig:i[r.barkTex].bark},uTexR:{value:i[r.barkTex].barkR},uTint:{value:new q(...c?r.tint:r.barkTint)},uFoliage:{value:+!!c}},u=t.makeMat({vs:Gl,fs:Kl,uniforms:l,side:c?2:0,shadow:!0}),d=new Wr(o,u.main);d.userData.shadowLod=s===0?1:3,t.add(`veg`,d,u),m.push({mesh:d,ig:o,u:l,geo:a,fol:c})}o.push({a0:u,a1:d,i0:f,i1:p,parts:m,n:0,cap:l})}this.lods.push(o)}this.bakeImpostors();let o={...n,uImpA:{value:this.impA.texture},uImpN:{value:this.impNrm.texture},uImpP:this.impP};this.impMats=t.makeMat({vs:ql,fs:Jl,uniforms:o,side:2}),this.quad=new gr,this.quad.setAttribute(`position`,new ir([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),this.quad.setIndex([0,1,2,0,2,3])}bakeImpostors(){let e=this.e,t=e.renderer,n=1024,r=e=>{let t=new jt(n,n,4,{format:T,type:u,minFilter:l,magFilter:s,generateMipmaps:!1,depthBuffer:!0});return t.texture.colorSpace=``,t.texture.anisotropy=4,t};this.impA=r(),this.impNrm=r(),this.impA.scissorTest=this.impNrm.scissorTest=!0;let i=new Ji(-.64,Wl,Wl,-.64,.1,10);i._reversedDepth=e.reversed,i.updateProjectionMatrix();let a=new _n,o=e.origin.clone();e.origin.set(0,0,0);let c=new Jr(new Float32Array([0,0,0,1]),4),d=new Jr(new Float32Array([0,.5,1,0]),4);for(let n=0;n<4;n++){let r=[];for(let t of this.lods[n][0].parts){let n=new Yi;n.index=t.geo.index;for(let e of[`position`,`normal`,`uv`,`aExtra`])n.setAttribute(e,t.geo.getAttribute(e));n.setAttribute(`iPosH`,c),n.setAttribute(`iRot`,d),n.instanceCount=1;let i=n=>new gi({glslVersion:Be,vertexShader:Gl,fragmentShader:`layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
`+Kl,uniforms:t.u,defines:{...e.defines,BAKE:1,[n]:1,NO_SCREEN_AO:1},side:t.fol?2:0}),o=new Wr(n,null);o.frustumCulled=!1,o.userData.bm=[i(`BAKE_ALBEDO`),i(`BAKE_NORMAL`)],a.add(o),r.push(o)}for(let e=0;e<2;e++){let o=e===0?this.impA:this.impNrm;for(let t of r)t.material=t.userData.bm[e];for(let r=0;r<Hl;r++)for(let s=0;s<Hl;s++){let c=(s+.5)/Hl*2-1,l=(r+.5)/Hl*2-1,u=(c+l)/2,d=(c-l)/2,f=new q(u,1-Math.abs(u)-Math.abs(d),d).normalize();i.position.set(f.x*4,.5+f.y*4,f.z*4),i.up.set(0,1,0),Math.abs(f.y)>.999&&i.up.set(0,0,-1),i.lookAt(0,.5,0),i.updateMatrixWorld(!0),o.viewport.set(s*Ul,r*Ul,Ul,Ul),o.scissor.set(s*Ul,r*Ul,Ul,Ul),t.setRenderTarget(o,n),t.setClearColor(e===0?0:8421631,0),t.clear(!0,!0,!1),t.render(a,i)}}for(let e of r)a.remove(e),e.userData.bm.forEach(e=>e.dispose())}for(let e of[this.impA,this.impNrm]){e.texture.generateMipmaps=!0,e.viewport.set(0,0,1,1),e.scissor.set(0,0,0,0);for(let n=0;n<1;n++)t.setRenderTarget(e,0),t.render(a,i)}t.setRenderTarget(null),e.origin.copy(o),t.setClearColor(0,0)}onQuality(e){this.impP.value.x=e.treeLod1}request(e,t,n){let r=e+`,`+t;this.pending.has(r)||(this.pending.set(r,n),this.worker.postMessage({type:`block`,key:r,bx:e,bz:t,size:Vl,stride:n}))}onBlock(e){if(this.dead)return;let t=this.pending.get(e.key);this.pending.delete(e.key),this.uploadQ.push({key:e.key,bx:e.bx,bz:e.bz,data:e.data,stride:e.stride??t})}upload(e){let t=this.e,n=this.blocks.get(e.key);n&&this.dropBlock(n);let r=e.data.length/8,i={key:e.key,bx:e.bx,bz:e.bz,x0:e.bx*Vl,z0:e.bz*Vl,data:e.data,n:r,stride:e.stride,mesh:null};if(r>0){let n=new Float32Array(r*4),a=new Float32Array(r*4),o=e.data,s=1e9,c=-1e9,l=1+.1*(e.stride-1);for(let e=0;e<r;e++){let t=e*8;n[e*4]=o[t]-i.x0,n[e*4+1]=o[t+1],n[e*4+2]=o[t+2]-i.z0,n[e*4+3]=o[t+3]*l,a[e*4]=o[t+4],a[e*4+1]=o[t+6],a[e*4+2]=1,a[e*4+3]=o[t+5],o[t+1]<s&&(s=o[t+1]),o[t+1]+o[t+3]>c&&(c=o[t+1]+o[t+3])}let u=new Yi;u.index=this.quad.index,u.setAttribute(`position`,this.quad.getAttribute(`position`)),u.setAttribute(`iPosH`,new Jr(n,4)),u.setAttribute(`iRot`,new Jr(a,4)),u.instanceCount=r,u.boundingSphere=new cr(new q(Vl/2,(s+c)/2,Vl/2),Math.hypot(Vl*.75,(c-s)/2+8));let d=new Wr(u,this.impMats.main);if(d.userData.cull=!0,d.position.set(i.x0-t.origin.x,-t.origin.y,i.z0-t.origin.z),d.updateMatrixWorld(!0),t.add(`veg`,d,{main:this.impMats.main,depth:this.impMats.depth,shadow:null}),i.mesh=d,e.stride===1){i.cells=new Map;for(let e=0;e<r;e++){let t=e*8,n=Math.floor(o[t]/12)+`,`+Math.floor(o[t+2]/12),r=i.cells.get(n);r||i.cells.set(n,r=[]),r.push(t)}}}this.blocks.set(e.key,i),this.treeCount+=r}dropBlock(e){e.mesh&&(this.e.groups.veg.remove(e.mesh),e.mesh.geometry.dispose()),this.treeCount-=e.n,this.blocks.delete(e.key)}treesNear(e,t,n,r){let i=Math.floor((e-n)/Vl),a=Math.floor((e+n)/Vl),o=Math.floor((t-n)/Vl),s=Math.floor((t+n)/Vl);for(let c=o;c<=s;c++)for(let o=i;o<=a;o++){let i=this.blocks.get(o+`,`+c);if(!i||!i.cells)continue;let a=Math.floor((e-n)/12),s=Math.floor((e+n)/12),l=Math.floor((t-n)/12),u=Math.floor((t+n)/12);for(let e=l;e<=u;e++)for(let t=a;t<=s;t++){let n=i.cells.get(t+`,`+e);if(n)for(let e of n)r(i.data,e)}}}ready(e,t){let n=this.blocks.get(Math.floor(e/Vl)+`,`+Math.floor(t/Vl));return!!n&&n.stride===1}update(e,t){let n=t.camWorld,r=t.preset,i=r.treeFar,a=this.world.P;if(this.uploadQ.length&&(this.upload(this.uploadQ.shift()),t.opts.capture))for(;this.uploadQ.length;)this.upload(this.uploadQ.shift());if(this.tick++%6==0||t.opts.capture){let e=Math.floor((n.x-i)/Vl),r=Math.floor((n.x+i)/Vl),o=Math.floor((n.z-i)/Vl),s=Math.floor((n.z+i)/Vl),c=[];for(let t=o;t<=s;t++)for(let o=e;o<=r;o++){let e=(o+.5)*Vl,r=(t+.5)*Vl;if(e<a.x0-Vl||e>a.x0+a.W+Vl||r<a.z0-Vl||r>a.z0+a.nz*a.cs+Vl)continue;let s=Math.hypot(e-n.x,r-n.z);if(s>i)continue;let l=s<1e3?1:s<2200?2:4,u=o+`,`+t,d=this.blocks.get(u);(!d||d.stride>l)&&!this.pending.has(u)&&c.push({bx:o,bz:t,stride:l,d:s})}c.sort((e,t)=>e.d-t.d);let l=t.opts.capture?64:4;for(let e of c){if(this.pending.size>=l)break;this.request(e.bx,e.bz,e.stride)}for(let e of this.blocks.values())Math.hypot(e.x0+Vl/2-n.x,e.z0+Vl/2-n.z)>i+700&&this.dropBlock(e)}let o=r.treeLod0,s=r.treeLod1,c=this.impP.value.y,l=t.viewProj.elements,u=this._pl||=new Float32Array(16),d=t.origin;for(let e=0;e<4;e++){let t=e<2?0:1,n=e&1?-1:1,r=l[3]+n*l[t],i=l[7]+n*l[4+t],a=l[11]+n*l[8+t],o=l[15]+n*l[12+t],s=1/Math.hypot(r,i,a);u[e*4]=r*s,u[e*4+1]=i*s,u[e*4+2]=a*s,u[e*4+3]=o*s}for(let e of this.lods)e[0].n=0,e[1].n=0;let f=Math.floor((n.x-s)/Vl),p=Math.floor((n.x+s)/Vl),m=Math.floor((n.z-s)/Vl),h=Math.floor((n.z+s)/Vl);for(let e=m;e<=h;e++)for(let t=f;t<=p;t++){let r=this.blocks.get(t+`,`+e);if(!r||r.stride!==1)continue;let i=r.data;for(let e=0;e<r.n;e++){let t=e*8,r=i[t],a=i[t+1],l=i[t+2],f=i[t+3],p=r-n.x,m=a+f*.5-n.y,h=l-n.z,g=p*p+m*m+h*h;if(g>s*s)continue;let _=r-d.x,v=a+f*.5-d.y,y=l-d.z,b=f*.6+22,x=!0;for(let e=0;e<4;e++)if(u[e*4]*_+u[e*4+1]*v+u[e*4+2]*y+u[e*4+3]<-b){x=!1;break}if(!x)continue;let S=Math.sqrt(g),C=i[t+5]|0,w=this.lods[C];if(S<o){let e=w[0];if(e.n<e.cap){let n=e.n++*4;e.a0[n]=r,e.a0[n+1]=a,e.a0[n+2]=l,e.a0[n+3]=f,e.a1[n]=i[t+4],e.a1[n+1]=i[t+6],e.a1[n+2]=Math.min(1,(o-S)/7)}}if(S>o-7){let e=w[1];if(e.n<e.cap){let n=e.n++*4;e.a0[n]=r,e.a0[n+1]=a,e.a0[n+2]=l,e.a0[n+3]=f,e.a1[n]=i[t+4],e.a1[n+1]=i[t+6];let u=(S-(o-7))/7;e.a1[n+2]=u<1?-Math.max(u,.002):Math.min(1,(s-S)/c)}}}}for(let e of this.lods)for(let t of e){for(let e of t.parts)e.ig.instanceCount=t.n,e.mesh.visible=t.n>0;t.n&&(t.i0.clearUpdateRanges(),t.i0.addUpdateRange(0,t.n*4),t.i0.needsUpdate=!0,t.i1.clearUpdateRanges(),t.i1.addUpdateRange(0,t.n*4),t.i1.needsUpdate=!0)}}},Xl=$+`
invariant gl_Position;
in vec4 iPosR; in vec4 iRot; out vec3 vWorld; out vec3 vN; out vec2 vUv; out vec2 vSF; out vec3 vObj;
void main(){
  float c = cos(iRot.x), s = sin(iRot.x); float ty = mix(0.72, 1.05, iRot.y);
  vec3 p = position * vec3(1.0, ty, 1.0) * iPosR.w; vec3 n = normalize(normal * vec3(1.0, 1.0 / ty, 1.0));
  p.xz = vec2(c * p.x + s * p.z, -s * p.x + c * p.z); n.xz = vec2(c * n.x + s * n.z, -s * n.x + c * n.z);
  vWorld = iPosR.xyz + p; vN = n; vUv = uv; vSF = iRot.zw; vObj = position;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld - uOrigin, 1.0);
}`,Zl=$+Tc+Ec+`
uniform sampler2D uA; uniform sampler2D uNm; uniform sampler2D uR; uniform vec3 uTint;
in vec3 vWorld; in vec3 vN; in vec2 vUv; in vec2 vSF; in vec3 vObj;
void main(){
#if defined(SKF_LOOSE) && !defined(DEPTH_PASS)
  const float skfMg = 0.05;
#else
  const float skfMg = 0.0;
#endif
  if (vSF.y < 0.999 && ign(gl_FragCoord.xy + 3.0) > vSF.y + skfMg) discard;
#ifndef DEPTH_PASS
  vec3 N = normalize(vN); vec3 Vv = uCamWorld - vWorld; float dist = length(Vv); vec3 V = Vv / dist;
  // tangent frame from derivatives
  vec3 dp1 = dFdx(vWorld), dp2 = dFdy(vWorld); vec2 du1 = dFdx(vUv), du2 = dFdy(vUv); vec3 dp2p = cross(dp2, N), dp1p = cross(N, dp1);
  vec3 T = dp2p * du1.x + dp1p * du2.x, B = dp2p * du1.y + dp1p * du2.y; float im = inversesqrt(max(dot(T, T), dot(B, B)) + 1e-12);
  vec3 tn = texture(uNm, vUv).xyz * 2.0 - 1.0; vec3 Nd = normalize(mat3(T * im, B * im, N) * vec3(tn.xy * 1.2, tn.z));
  vec3 alb = texture(uA, vUv).rgb; alb = mix(vec3(luma(alb)), alb, 0.3) * uTint * 0.9; vec3 arm = texture(uR, vUv).rgb;
  float gnd = smoothstep(0.0, 0.35, vObj.y); alb *= mix(0.6, 1.0, gnd);
  float sn = smoothstep(0.45, 0.8, Nd.y * 0.6 + N.y * 0.4 + (vnoise(vWorld.xz * 2.3) - 0.5) * 0.3) * smoothstep(0.25, 0.6, vSF.x);
  float moss = smoothstep(0.55, 0.9, N.y) * smoothstep(0.0, 0.2, -vSF.x) * 0.0;
  alb = mix(alb, vec3(0.93, 0.95, 0.975), sn);
  Surf s; s.albedo = alb; s.N = normalize(mix(Nd, N, sn * 0.7)); s.rough = mix(clamp(arm.g, 0.35, 1.0), 0.55, sn); s.ao = mix(arm.r, 1.0, sn * 0.6) * mix(0.55, 1.0, gnd); s.f0 = 0.04; s.sss = sn * 0.8; s.sssColor = vec3(0.55, 0.78, 0.95); s.skyVis = 1.0;
  s.shadow = terrainShadow(vWorld + N * 0.3) * csmShadow(vWorld + N * (0.05 + dist * 0.003), dist, N.y) * cloudShadow(vWorld);
  gl_FragColor = vec4(shadeSurface(s, vWorld, V), 0.0);
#endif
}`,Ql=$+`
invariant gl_Position; out vec3 vWorld; out vec3 vN;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz + uOrigin; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,$l=$+Tc+Ec+`
uniform sampler2DArray uMatA; uniform sampler2DArray uMatB; uniform vec3 uTint; uniform float uLayer;
in vec3 vWorld; in vec3 vN;
void main(){
#ifndef DEPTH_PASS
  vec3 N = normalize(vN); vec3 Vv = uCamWorld - vWorld; float dist = length(Vv); vec3 V = Vv / dist;
  vec3 bw = pow(abs(N), vec3(5.0)); bw /= bw.x + bw.y + bw.z; vec3 alb = vec3(0.0), tn = vec3(0.0); float rough = 0.0, ao = 0.0;
  for (int sc = 0; sc < 2; sc++) { float s = sc == 0 ? 1.0 / 2.7 : 1.0 / 15.0; float w = sc == 0 ? 1.0 - smoothstep(16.0, 60.0, dist) : smoothstep(16.0, 60.0, dist); if (w < 0.01) continue;
    vec4 ax = texture(uMatA, vec3(vWorld.zy * s, uLayer)), ay = texture(uMatA, vec3(vWorld.xz * s, uLayer)), az = texture(uMatA, vec3(vWorld.xy * s, uLayer));
    vec4 bx = texture(uMatB, vec3(vWorld.zy * s, uLayer)), by = texture(uMatB, vec3(vWorld.xz * s, uLayer)), bz = texture(uMatB, vec3(vWorld.xy * s, uLayer));
    alb += w * (ax.rgb * bw.x + ay.rgb * bw.y + az.rgb * bw.z); vec2 nx = bx.xy * 2.0 - 1.0, ny = by.xy * 2.0 - 1.0, nz = bz.xy * 2.0 - 1.0;
    tn += w * (vec3(0.0, nx.y, nx.x) * bw.x + vec3(ny.x, 0.0, ny.y) * bw.y + vec3(nz.x, nz.y, 0.0) * bw.z); rough += w * (bx.b * bw.x + by.b * bw.y + bz.b * bw.z); ao += w * (bx.a * bw.x + by.a * bw.y + bz.a * bw.z); }
  float strat = fbm2(vec2(vWorld.y * 0.11, dot(vWorld.xz, vec2(0.02, 0.013)))); alb *= uTint * (0.72 + 0.5 * strat);
  Surf s; s.albedo = alb; s.N = normalize(N + tn * 0.9); s.rough = rough; s.ao = ao; s.f0 = 0.04; s.sss = 0.0; s.sssColor = vec3(0.0); s.skyVis = mix(0.55, 1.0, saturate(N.y * 0.5 + 0.5));
  s.shadow = terrainShadow(vWorld + N * 0.5) * csmShadow(vWorld + N * (0.08 + dist * 0.003), dist, N.y) * cloudShadow(vWorld);
  gl_FragColor = vec4(shadeSurface(s, vWorld, V), 0.0);
#endif
}`,eu=class{constructor(e,t){this.e=e,this.world=t,e.modules.push(this),this.cells=new Map,this.arches=[]}async init(e,t){let n=this.e,r=n.G,i=[`rock_07_0`,`rock_09_0`,`boulder_01_0`,`rock_moss_set_01_0`,`rock_moss_set_01_3`,`namaqualand_boulder_02_0`];this.models=[];let a={},o={rock_07:[.95,.95,.97],rock_09:[.9,.9,.92],boulder_01:[.9,.9,.92],rock_moss_set_01:[.92,.92,.9],namaqualand_boulder_02:[.78,.8,.86]};await Promise.all(i.map(async(t,i)=>{let s=e.rocks.find(e=>e.name===t),c=s.tex;a[c]||(a[c]=Promise.all([rl($c(`tex/rocks/${c}_a.jpg`),{srgb:!0,aniso:8,flipY:!1}),rl($c(`tex/rocks/${c}_n.jpg`),{aniso:8,flipY:!1}),rl($c(`tex/rocks/${c}_r.jpg`),{aniso:4,flipY:!1})]));let[l,u]=await Promise.all([il(t),a[c]]),d={...r,uA:{value:u[0]},uNm:{value:u[1]},uR:{value:u[2]},uTint:{value:new q(...o[c])}},f=n.makeMat({vs:Xl,fs:Zl,uniforms:d,shadow:!0,shadowSide:0}),p=[96,512,4096],m=l.map((e,t)=>{let r=p[t],i=new Float32Array(r*4),a=new Float32Array(r*4),o=new Jr(i,4),s=new Jr(a,4);o.setUsage(ze),s.setUsage(ze);let c=new Yi;c.index=e.index;for(let t of[`position`,`normal`,`uv`])c.setAttribute(t,e.getAttribute(t));c.setAttribute(`iPosR`,o),c.setAttribute(`iRot`,s),c.instanceCount=0;let l=new Wr(c,f.main);return l.userData.shadowLod=t===0?1:t===1?2:-1,n.add(`props`,l,f),{a0:i,a1:a,i0:o,i1:s,ig:c,mesh:l,n:0,cap:r}});this.models[i]={L:m,height:s.height}}));let s=xl(977);for(let e of this.world.arches){let i=[],a=[],o=e.span*.5+9,c=e.span*.2+4;for(let t=0;t<=40;t++){let n=t/40,r=Math.PI*n,a=-Math.cos(r)*o,l=Math.sin(r)*c-(1-Math.sin(r))*10,u=e.thick*(.62+.75*Math.abs(Math.cos(r))**1.5),d=Math.sin(r)*o,f=Math.cos(r)*c,p=Math.hypot(d,f),m=-f/p,h=d/p;for(let t=0;t<=14;t++){let n=t/14*Math.PI*2,r=Math.cos(n),o=Math.sin(n),c=a+m*r*u,d=l+h*r*u*.8,f=o*u*1.25,p=1+.32*s.fbm(c*.08+e.x,d*.08+f*.08,3)+.1*s.n2(c*.4,f*.4+d*.3);i.push(a+(c-a)*p,l+(d-l)*p,f*p)}}for(let e=0;e<40;e++)for(let t=0;t<14;t++){let n=e*15+t;a.push(n,n+1,n+14+1,n+1,n+14+2,n+14+1)}let l=new gr;l.setAttribute(`position`,new ir(i,3)),l.setIndex(a),l.computeVertexNormals();let u={...r,uMatA:t.uniforms.uMatA,uMatB:t.uniforms.uMatB,uTint:{value:new q(.82,.82,.84)},uLayer:{value:2}},d=n.makeMat({vs:Ql,fs:$l,uniforms:u,shadow:!0,shadowSide:0}),f=new Wr(l,d.main);f.userData.world=new q(e.x,e.y,e.z),f.userData.shadowLod=3,n.add(`props`,f,d),this.arches.push({mesh:f,a:e,half:o,rise:c})}let c=e=>{for(let t of this.arches)t.mesh.position.copy(t.mesh.userData.world).sub(e),t.mesh.updateMatrixWorld(!0)};n.rebaseCbs.push(c),c(n.origin)}cell(e,t){let n=e+`,`+t,r=this.cells.get(n);if(r===void 0){let i=Bl(this.world,e,t,[],this.models.length);for(let e=0;e<i.length;e+=8)i[e+7]=Rl(this.world,i[e],i[e+2],3);r=i.length?new Float32Array(i):null,this.cells.set(n,r),this.budget--}return r}rocksNear(e,t,n,r){let i=Math.floor((e-n)/40),a=Math.floor((e+n)/40),o=Math.floor((t-n)/40),s=Math.floor((t+n)/40);for(let e=o;e<=s;e++)for(let t=i;t<=a;t++){let n=this.cells.get(t+`,`+e);if(n)for(let e=0;e<n.length;e+=8)r(n,e)}}update(e,t){let n=t.camWorld;this.budget=t.opts.capture?1e9:10;for(let e of this.models)for(let t of e.L)t.n=0;let r=Math.floor((n.x-620)/40),i=Math.floor((n.x+620)/40),a=Math.floor((n.z-620)/40),o=Math.floor((n.z+620)/40);for(let e=a;e<=o;e++)for(let t=r;t<=i;t++){let r=t+`,`+e,i=this.cells.get(r);if(i===void 0){if(this.budget<=0)continue;i=this.cell(t,e)}if(i)for(let e=0;e<i.length;e+=8){let t=i[e],r=i[e+1],a=i[e+2],o=i[e+3],s=Math.hypot(t-n.x,r-n.y,a-n.z),c=s/o;if(c>300||s>620)continue;let l=this.models[i[e+5]|0],u=c<26?0:c<90?1:2,d=l.L[u];if(d.n>=d.cap)continue;let f=d.n++*4;d.a0[f]=t,d.a0[f+1]=r,d.a0[f+2]=a,d.a0[f+3]=o,d.a1[f]=i[e+4],d.a1[f+1]=i[e+6],d.a1[f+2]=i[e+7],d.a1[f+3]=Math.min(1,(300-c)/40,(620-s)/60)}}for(let e of this.models)for(let t of e.L)t.ig.instanceCount=t.n,t.mesh.visible=t.n>0,t.n&&(t.i0.clearUpdateRanges(),t.i0.addUpdateRange(0,t.n*4),t.i0.needsUpdate=!0,t.i1.clearUpdateRanges(),t.i1.addUpdateRange(0,t.n*4),t.i1.needsUpdate=!0);if(this.cells.size>6e3)for(let e of this.cells.keys()){let[t,r]=e.split(`,`).map(Number);(Math.abs(t*40-n.x)>1240||Math.abs(r*40-n.z)>1240)&&this.cells.delete(e)}}},tu=$+ol+`
uniform sampler2D uNrmTex; uniform sampler2D uCtrlTex; uniform sampler2D uCtrl2Tex; uniform float uGrassLast; uniform vec4 uGrassP; // grid, spacing, outer radius, inner radius
uniform vec4 uWind; uniform vec4 uPlayer;
out vec3 vWorld; out vec3 vN; out vec4 vCol; out float vT; out vec2 vQ;
void main(){
  float G = uGrassP.x, sp = uGrassP.y, R = uGrassP.z; float id = float(gl_InstanceID);
  vec2 gi = vec2(mod(id, G), floor(id / G)) - G * 0.5; vec2 cellW = floor(uCamWorld.xz / sp) + gi; // integer world cell
  vec2 h2 = hash22(cellW * 0.731 + 11.3); vec2 xz = (cellW + h2) * sp; float hr = hash12(cellW + 91.7), hr2 = hash12(cellW * 1.37 + 5.1);
  vec2 dc = xz - uCamWorld.xz; float dist = length(dc);
  vec2 uvw = (xz - uWorldRect.xy) * uWorldRect.zw; vec4 ctrl = textureLod(uCtrlTex, uvw, 0.0), c2 = textureLod(uCtrl2Tex, uvw, 0.0), nt = textureLod(uNrmTex, uvw, 0.0);
  vec2 nxz = nt.xy * 2.0 - 1.0; float ny = sqrt(max(1.0 - dot(nxz, nxz), 0.01)); float steep = 1.0 - ny;
  float n1 = fbm2(xz * 0.011);
  float y0 = hInnerFast(xz);
  float soil = 1.0 - smoothstep(uBiome.y + 260.0, uBiome.y + 760.0, y0 + (n1 - 0.5) * 320.0); float alpine = smoothstep(uBiome.y - 180.0, uBiome.y + 160.0, y0 + (n1 - 0.5) * 240.0);
  float dens = (1.0 - smoothstep(0.2, 0.36, steep)) * saturate(1.0 - ctrl.g * 1.6) * (1.0 - smoothstep(0.25, 0.5, ctrl.a)) * soil * (1.0 - ctrl.b * 0.75) * (1.0 - c2.g * 1.5);
  dens *= 0.55 + 0.6 * fbm2(xz * 0.07 + 3.0);
  float keep = step(hr, dens) * step(hr2, 1.0 - smoothstep(R * 0.45, R, dist)) * step(hash12(cellW + 7.7), smoothstep(uGrassP.w * 0.45, uGrassP.w, dist) + step(uGrassP.w, 0.01));
  float inb = step(0.0, uvw.x) * step(uvw.x, 1.0) * step(0.0, uvw.y) * step(uvw.y, 1.0);
  float thin = 1.0 + 1.2 * smoothstep(R * 0.4, R, dist) + sp * 2.2; // sparser rings use wider blades
  float bi = position.z; float side = position.x, t = position.y; bool head = bi > 2.5;
  float patchF = smoothstep(0.55, 0.75, fbm2(xz * 0.035 + 17.0)) * (1.0 - alpine * 0.5); float isFlower = step(hash12(cellW + 3.3), (0.012 + 0.09 * patchF) * (sp / 0.2)) * step(dist, R * 0.9);
  float hgt = mix(0.34, 0.14, alpine) * (0.55 + 0.9 * hr2) * (0.7 + 0.6 * ctrl.r) * mix(1.0, 1.25, isFlower * step(abs(bi - 1.0), 0.5));
  if (head) { hgt *= 1.25; }
  hgt *= 1.0 - 0.8 * uGrassLast * smoothstep(R * 0.55, R, dist);
  float ang = hr * 6.2832 + (head ? 1.0 : bi) * 2.1; vec2 dir = vec2(cos(ang), sin(ang));
  float wid = max(0.007 * (0.7 + 0.6 * hr), dist * 0.0009) * thin;
  // wind + wake
  float wph = dot(xz, uWind.xy) * 0.35 - uTime * 2.2; float gust = 0.5 + 0.5 * sin(wph * 0.21 + sin(wph * 0.07) * 2.0);
  vec2 bend = uWind.xy * (0.12 + 0.3 * gust + 0.08 * sin(uTime * 5.0 + hr * 40.0)) * uWind.z * 0.22 + dir * 0.22;
  vec2 dp = xz - uPlayer.xz; float dpl = length(dp); float wk = exp(-dpl * dpl / 30.0) * uPlayer.w * saturate(1.0 - abs(y0 - uPlayer.y) / 9.0); bend += normalize(dp + 1e-3) * wk * 1.6;
  float tt = head ? 1.0 : t; vec2 off = bend * tt * tt * hgt + dir * (bi - 1.0) * 0.035 * (head ? 0.0 : 1.0);
  vec3 p = vec3(xz.x + off.x, 0.0, xz.y + off.y); float yy = tt * hgt * sqrt(max(1.0 - dot(bend, bend) * tt * tt * 0.6, 0.2));
  vec2 perp = vec2(-dir.y, dir.x);
  vec4 col;
  if (head) { vec2 q = uv * 2.0 - 1.0; float hs = 0.022 * (0.8 + 0.6 * hr) * (1.0 + dist * 0.035) * isFlower; p.xz += perp * q.x * hs + dir * q.y * hs * 0.4; yy += q.y * hs * 0.75;
    float fh = hash12(floor(xz * 0.12) + 2.0) * 0.6 + hr * 0.4; vec3 fc = fh < 0.3 ? vec3(0.95, 0.74, 0.08) : fh < 0.55 ? vec3(0.92, 0.9, 0.84) : fh < 0.78 ? vec3(0.42, 0.3, 0.75) : vec3(0.85, 0.3, 0.45); col = vec4(fc, 2.0); }
  else { p.xz += perp * side * wid * (1.0 - t * 0.85);
    vec3 base = mix(vec3(0.045, 0.085, 0.02), vec3(0.075, 0.1, 0.03), alpine); vec3 tip = mix(vec3(0.17, 0.27, 0.06), vec3(0.24, 0.26, 0.08), alpine);
    vec3 dry = vec3(0.32, 0.28, 0.12); vec3 gc = mix(base, tip, t); gc = mix(gc, dry * (0.4 + 0.6 * t), saturate(0.55 - ctrl.r * 1.3 + (n1 - 0.5)) * 0.6); gc *= 0.75 + 0.5 * hr; col = vec4(gc, t); }
  p.y = terrainH(p.xz) + yy - 0.03;
  if (keep * inb < 0.5) p = vec3(0.0, -1e5, 0.0);
  vWorld = p; vCol = col; vT = t; vQ = head ? uv * 2.0 - 1.0 : vec2(0.0); vec3 nb = normalize(vec3(nxz.x, ny, nxz.y)); vN = normalize(nb + vec3(perp.x, 0.0, perp.y) * side * 0.35 + vec3(bend.x, 0.0, bend.y) * 0.5);
  gl_Position = projectionMatrix * viewMatrix * vec4(p - uOrigin, 1.0);
}`,nu=$+Tc+Ec+`
in vec3 vWorld; in vec3 vN; in vec4 vCol; in float vT; in vec2 vQ;
void main(){
  vec3 fcol = vCol.rgb; if (vCol.a > 1.5) { float r = length(vQ); float pet = 0.72 + 0.28 * cos(atan(vQ.y, vQ.x) * 6.0); if (r > pet) discard; if (r < 0.3) fcol = mix(vec3(0.85, 0.6, 0.06), fcol, 0.25); }
  vec3 N = normalize(vN); vec3 Vv = uCamWorld - vWorld; float dist = length(Vv); vec3 V = Vv / dist; bool fl = vCol.a > 1.5;
  Surf s; s.albedo = fcol; s.N = N; s.rough = fl ? 0.7 : 0.48; s.ao = fl ? 1.0 : mix(0.35, 1.0, vT); s.f0 = 0.04; s.sss = fl ? 0.3 : 0.75; s.sssColor = fcol * vec3(1.6, 1.9, 0.7); s.skyVis = 1.0;
  s.shadow = terrainShadow(vWorld) * csmShadow(vWorld + vec3(0.0, 0.05, 0.0), dist, 1.0) * cloudShadow(vWorld);
  gl_FragColor = vec4(shadeSurface(s, vWorld, V), 0.0);
}`,ru=class{constructor(e,t,n){this.e=e,e.modules.push(this),this.terrain=n,this.meshes=[],this.build()}build(){let e=this.e,t=e.preset;for(let t of this.meshes)e.groups.veg.remove(t),t.geometry.dispose();this.meshes=[];let n=[],r=[],i=[];for(let e=0;e<3;e++){let t=n.length/3;n.push(-1,0,e,1,0,e,-1,.5,e,1,.5,e,0,1,e),r.push(0,0,0,0,0,0,0,0,0,0),i.push(t,t+1,t+2,t+1,t+3,t+2,t+2,t+3,t+4)}{let e=n.length/3;n.push(0,1,3,0,1,3,0,1,3,0,1,3),r.push(0,0,1,0,1,1,0,1),i.push(e,e+1,e+2,e,e+2,e+3)}let a=t.grassDist,o=[[a*.17,0,.27],[a*.48,a*.17,.31],[a,a*.48,.27],[a*2.3,a,.15]];for(let[s,c,l]of o){let o=Math.floor(Math.sqrt(t.grass*l)),u=2*s/o,d={...e.G,...this.terrain.heightUniforms,uGrassP:{value:new Y(o,u,s,c)},uGrassLast:{value:+(s>a)}},f=new Yi;f.setAttribute(`position`,new ir(n,3)),f.setAttribute(`uv`,new ir(r,2)),f.setIndex(i),f.instanceCount=o*o;let p=e.makeMat({vs:tu,fs:nu,uniforms:d,side:2,noPrepass:!0,noDepth:!0}),m=new Wr(f,p.main);e.add(`veg`,m,p),this.meshes.push(m)}}onQuality(){this.build()}update(e,t){let n=t.aglHint??0;for(let e of this.meshes)e.visible=n<t.preset.grassDist*2.2}},iu=$+`
in vec4 aFlow; // slope, width, foamSource, kind(0 river,1 pool)
out vec3 vWorld; out vec2 vUv; out vec4 vFlow; out float vViewZ;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz + uOrigin; vUv = uv; vFlow = aFlow; vec4 v = viewMatrix * w; vViewZ = -v.z; gl_Position = projectionMatrix * v; }`,au=$+Tc+Ec+ol+`
uniform sampler2D uSceneTex; uniform sampler2D uLinTex; uniform mat4 uVP; uniform vec4 uRS; uniform vec4 uWP; // frozen, ssr, _, _
in vec3 vWorld; in vec2 vUv; in vec4 vFlow; in float vViewZ;
float wn(vec2 p){ return vnoise(p) * 0.6 + vnoise(p * 2.3 + 7.1) * 0.4; }
vec3 flowN(vec2 uv, vec2 flow, float t, float sc){
  float p0 = fract(t), p1 = fract(t + 0.5); float w = abs(2.0 * p0 - 1.0); const float e = 0.12;
  vec2 a = uv * sc - flow * p0, b = uv * sc - flow * p1 + 3.7;
  float ha = wn(a), hb = wn(b); vec2 ga = vec2(wn(a + vec2(e, 0.0)) - ha, wn(a + vec2(0.0, e)) - ha), gb = vec2(wn(b + vec2(e, 0.0)) - hb, wn(b + vec2(0.0, e)) - hb);
  vec2 g = mix(ga, gb, w) / e; return vec3(g, mix(ha, hb, w));
}
void main(){
  vec2 suv = gl_FragCoord.xy * uInvRes; vec3 Vv = uCamWorld - vWorld; float dist = length(Vv); vec3 V = Vv / dist;
  float slope = vFlow.x; bool pool = vFlow.w > 0.5; float frozen = uWP.x;
  float speed = clamp(0.9 + slope * 7.0, 0.9, 7.5) * (1.0 - frozen);
  vec2 fuv = vec2(vUv.x * vFlow.y * 0.5, vUv.y); vec2 flow = pool ? vec2(0.15, 0.2) : vec2(0.0, speed);
  vec3 f1 = flowN(fuv, flow * 0.55, uTime * 0.45, 0.55), f2 = flowN(fuv, flow * 1.3, uTime * 0.6 + 0.3, 1.9);
  float rough = mix(0.35, 1.0, saturate(slope * 2.5)); float fw = max(length(dFdx(fuv)), length(dFdy(fuv))), lod1 = 1.0 - smoothstep(0.2, 0.9, fw * 1.3), lod2 = 1.0 - smoothstep(0.2, 0.9, fw * 4.4); /* ripples smaller than a pixel are averaged out and folded into roughness: unfiltered they sparkle as static across a distant sea */
  vec2 g = (f1.xy * 0.5 * lod1 + f2.xy * 0.35 * lod2) * rough * mix(1.0, 0.5, frozen);
  vec3 Ng = cross(dFdx(vWorld), dFdy(vWorld)); float ngl = length(Ng); Ng = ngl > 1e-12 ? Ng / ngl : vec3(0.0, 1.0, 0.0); if (Ng.y < 0.0) Ng = -Ng;
  vec3 N = normalize(mix(vec3(0.0, 1.0, 0.0), Ng, 0.85) + vec3(-g.x, 0.0, -g.y)); if (dot(N, V) < 0.02) N = normalize(N + V * (0.02 - dot(N, V))); // follows steep cascades instead of assuming a level surface
  // scene behind
  float sceneZ = texture(uLinTex, suv).r; float thick = max(sceneZ - vViewZ, 0.0);
  vec2 ruv = suv + N.xz * 0.02 * saturate(thick) / (1.0 + dist * 0.02) * uRS.xy; float rz = texture(uLinTex, ruv).r; if (rz < vViewZ) ruv = suv; else thick = max(rz - vViewZ, 0.0);
  vec3 bed = texture(uSceneTex, ruv).rgb;
  float depth = thick * max(V.y, 0.25);
  vec3 absorb = mix(vec3(0.9, 0.22, 0.16), vec3(0.5, 0.25, 0.2), frozen); vec3 scat = mix(vec3(0.012, 0.05, 0.045), vec3(0.2, 0.32, 0.36), frozen);
  vec3 sunC = uSunIllum * sunTransmittance(vWorld.y); float sh = terrainShadow(vWorld) * csmShadow(vWorld + vec3(0.0, 0.2, 0.0), dist, 1.0) * cloudShadow(vWorld);
  vec3 amb = shIrradiance(vec3(0.0, 1.0, 0.0));
  vec3 body = bed * exp(-absorb * depth * 1.6) + scat * (sunC * sh * 0.25 + amb * 0.3) * (1.0 - exp(-depth * 1.3));
  // foam / whitewater
  float fn = wn(fuv * vec2(1.6, 0.45) - vec2(0.0, uTime * speed * 0.45)) * 0.6 + wn(fuv * vec2(4.0, 1.4) - vec2(0.0, uTime * speed * 0.8)) * 0.4;
  float edge = smoothstep(0.35, 0.0, thick); float foam = saturate(smoothstep(0.1, 0.42, slope) * 0.95 + edge * 0.5 + vFlow.z * 1.2 - (1.0 - fn) * 1.45) * (1.0 - frozen);
  foam = smoothstep(0.0, 0.55, foam);
  // reflection: SSR with sky fallback
  vec3 R = reflect(-V, N); R.y = abs(R.y); float fres = 0.02 + 0.98 * pow(1.0 - saturate(dot(N, V)), 5.0); fres = mix(fres, 0.1 + 0.6 * fres, frozen * 0.0);
  vec3 refl = skyRadiance(R, uCamWorld.y) * mix(0.4, 1.0, sh * 0.5 + 0.5);
  bool hit = false;
  if (uWP.y > 0.5) {
    float t = 1.0; vec2 huv = vec2(0.0); float jit = ign(gl_FragCoord.xy);
    for (int i = 0; i < 18; i++) { float tt = t * (1.0 + 0.5 * jit); vec3 p = vWorld + R * tt; vec4 c = uVP * vec4(p - uOrigin, 1.0); if (c.w <= 0.0) break; vec2 q = c.xy / c.w * 0.5 + 0.5; if (q.x < 0.0 || q.y < 0.0 || q.x > 1.0 || q.y > 1.0) break;
      float sz = texture(uLinTex, q * uRS.xy).r; if (sz < c.w - 0.05 * tt && sz > c.w - (2.0 + 0.4 * tt)) { hit = true; huv = q * uRS.xy; break; } t *= 1.45; }
    if (hit) { vec2 e = smoothstep(vec2(0.0), vec2(0.08), huv / uRS.xy) * smoothstep(vec2(0.0), vec2(0.08), 1.0 - huv / uRS.xy); refl = mix(refl, texture(uSceneTex, huv).rgb, e.x * e.y); }
  }
  // off-screen reflections: march the height field so canyon walls and slopes replace the sky
  if (!hit) { float tt = 3.0; for (int i = 0; i < 12; i++) { vec3 p = vWorld + R * tt; if (p.y < terrainHFast(p.xz)) { refl = vec3(0.06, 0.062, 0.066) * (shIrradiance(vec3(0.0, 1.0, 0.0)) + uSunIllum * sunTransmittance(vWorld.y) * 0.2); break; } tt *= 1.55; } }
  vec3 H = normalize(uSunDir + V); float nh = max(dot(N, H), 0.0); float a = mix(0.012, 0.09, saturate(rough)) + 0.1 * (1.0 - lod2) + 0.08 * (1.0 - lod1); float D = a * a / (PI * pow(nh * nh * (a * a - 1.0) + 1.0, 2.0) + 1e-6);
  vec3 spec = sunC * sh * min(D, 800.0) * fres * 0.25 * saturate(dot(N, uSunDir));
  vec3 col = mix(body, refl, fres) + spec;
  vec3 ice = (vec3(0.62, 0.78, 0.86) * (0.75 + 0.25 * f1.z)) / PI * (sunC * sh * saturate(dot(N, uSunDir)) + amb); col = mix(col, ice + refl * fres + spec, frozen * 0.85);
  float fstr = wn(fuv * vec2(9.0, 2.2) - vec2(0.0, uTime * speed * 1.1)) * 0.6 + wn(fuv * vec2(23.0, 6.0) - vec2(0.0, uTime * speed * 1.6)) * 0.4;
  vec3 foamC = vec3(0.92) / PI * (sunC * sh * (0.5 + 0.5 * saturate(dot(N, uSunDir))) + amb * 0.8) * mix(0.5, 1.05, fstr);
  col = mix(col, foamC, foam);
  float alpha = smoothstep(0.0, 0.12, thick + frozen) * smoothstep(1.0, 0.82, abs(vUv.x) * (pool ? 0.0 : 1.0));
  gl_FragColor = vec4(mix(texture(uSceneTex, suv).rgb, col, alpha), 0.0);
}`,ou=$+`
in vec3 aFall; // s along fall, total height, seed
out vec3 vWorld; out vec2 vUv; out vec3 vFall; out float vViewZ;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz + uOrigin; vUv = uv; vFall = aFall; vec4 v = viewMatrix * w; vViewZ = -v.z; gl_Position = projectionMatrix * v; }`,su=$+Tc+Ec+`
uniform sampler2D uLinTex; uniform vec4 uWP;
in vec3 vWorld; in vec2 vUv; in vec3 vFall; in float vViewZ;
float wn(vec2 p){ return vnoise(p) * 0.6 + vnoise(p * 2.3 + 7.1) * 0.4; }
void main(){
  float s = vFall.x, H = vFall.y, seed = vFall.z; float frozen = uWP.x; float fallDist = s * s * H; // distance fallen (accelerating)
  float tm = uTime * (1.0 - frozen);
  float v = sqrt(max(fallDist, 0.02) * 19.6); float y = fallDist - tm * (2.5 + v * 0.55);
  float u = vUv.x * (6.0 + seed * 3.0);
  float st = wn(vec2(u * 2.2 + seed * 9.0, y * 0.13)) * 0.55 + wn(vec2(u * 6.0, y * 0.33 + 4.0)) * 0.3 + wn(vec2(u * 15.0, y * 0.9)) * 0.15;
  float edge = 1.0 - abs(vUv.x * 2.0 - 1.0); float body = smoothstep(0.0, 0.5, edge);
  float breakup = mix(0.18, 0.5, s) - frozen * 0.2; float a = smoothstep(breakup, breakup + 0.35, st * body + body * 0.25) * smoothstep(0.0, 0.04, s) ;
  a *= mix(0.92, 0.6, s);
  float sceneZ = texture(uLinTex, gl_FragCoord.xy * uInvRes).r; a *= smoothstep(0.0, 0.6, sceneZ - vViewZ + 0.3);
  vec3 sunC = uSunIllum * sunTransmittance(vWorld.y); float sh = terrainShadow(vWorld + uSunDir * 1.5) * cloudShadow(vWorld); vec3 amb = shIrradiance(vec3(0.0, 1.0, 0.0));
  vec3 V = normalize(uCamWorld - vWorld); float back = pow(saturate(dot(-V, uSunDir)), 4.0);
  vec3 alb = mix(vec3(0.9, 0.93, 0.95), vec3(0.62, 0.8, 0.9), frozen * (0.5 + 0.5 * st));
  vec3 col = alb / PI * (sunC * sh * (0.55 + 0.4 * st + back * 1.2) + amb * 1.05);
  col += frozen * sunC * sh * pow(saturate(st), 6.0) * 0.4;
  gl_FragColor = vec4(col, a);
}`,cu=$+`
in vec4 iBase; in vec4 iSeed; // base xyz + radius ; seed, life, kind(0 mist,1 spray), height
out vec2 vQ; out vec3 vWorld; out float vA; out float vViewZ; out float vKind;
void main(){
  float life = iSeed.y; float ph = fract(uTime / life + iSeed.x); float kind = iSeed.z; vec3 b = (modelMatrix * vec4(iBase.xyz, 1.0)).xyz + uOrigin;
  float a1 = iSeed.x * 91.7, a2 = iSeed.x * 37.3; vec3 dir = normalize(vec3(cos(a1), 0.0, sin(a1)));
  vec3 p; float size, alpha;
  if (kind < 0.5) { float r = iBase.w * (0.3 + 1.8 * ph); p = b + dir * r * (0.4 + fract(a2)) + vec3(0.0, (1.0 + min(iSeed.w, 30.0) * 0.06) * ph * (2.0 + 5.0 * fract(a2 * 1.7)), 0.0) + vec3(2.0, 0.0, 1.0) * ph * 3.0;
    size = iBase.w * (0.55 + 1.5 * ph); alpha = smoothstep(0.0, 0.15, ph) * (1.0 - ph) * 0.2 * (1.0 - 0.8 * smoothstep(350.0, 1200.0, distance(b, uCamWorld))); }
  else { float t = ph * life; vec3 v0 = dir * (2.5 + 4.0 * fract(a2)) + vec3(0.0, 4.5 + 5.0 * fract(a2 * 3.1), 0.0); p = b + v0 * t + vec3(0.0, -4.9 * t * t, 0.0); size = 0.35 + 0.5 * ph; alpha = (1.0 - ph) * 0.5; }
  vec3 toCam = normalize(uCamWorld - p); vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), toCam)), up = cross(toCam, right);
  vec3 wp = p + (right * position.x + up * position.y) * size; vQ = position.xy; vWorld = wp; vA = alpha; vKind = kind;
  vec4 v = viewMatrix * vec4(wp - uOrigin, 1.0); vViewZ = -v.z; gl_Position = projectionMatrix * v;
}`,lu=$+Tc+Ec+`
uniform sampler2D uLinTex; in vec2 vQ; in vec3 vWorld; in float vA; in float vViewZ; in float vKind;
void main(){
  float r = length(vQ); if (r > 1.0) discard; float a = vA * pow(1.0 - r, vKind > 0.5 ? 0.8 : 1.6);
  float sceneZ = texture(uLinTex, gl_FragCoord.xy * uInvRes).r; a *= smoothstep(0.0, 2.5, sceneZ - vViewZ) * smoothstep(0.5, 3.0, vViewZ);
  vec3 sunC = uSunIllum * sunTransmittance(vWorld.y); float sh = terrainShadow(vWorld) * cloudShadow(vWorld); vec3 V = normalize(uCamWorld - vWorld);
  float c = dot(-V, uSunDir); float ph = 0.6 + 2.2 * pow(saturate(c), 6.0) + 0.3 * pow(saturate(-c), 2.0);
  vec3 col = vec3(0.95) * (sunC * sh * ph * 0.3 + shIrradiance(vec3(0.0, 1.0, 0.0))) / PI;
  gl_FragColor = vec4(col, a);
}`,uu=class{constructor(e,t,n){this.e=e,this.world=t,e.modules.push(this);let r=e.G,i=e;this.meshes=[];let a=+(t.P.biome===`snowy`);this.wp={value:new Y(a,i.preset.ssr,0,0)},this.u={...r,...n?n.heightUniforms:{},uSceneTex:{value:null},uLinTex:{value:null},uVP:{value:i.viewProj},uWP:this.wp};let o=i.makeMat({vs:iu,fs:au,uniforms:this.u,transparent:!0,blending:0,side:2}),s=i.makeMat({vs:ou,fs:su,uniforms:this.u,transparent:!0,side:2}),c=i.makeMat({vs:cu,fs:lu,uniforms:this.u,transparent:!0,side:2}),l=(e,t,n,r=0)=>{let a=new Wr(t,n.main);return a.renderOrder=r,i.add(e,a,n),this.meshes.push(a),a},u=[],d=[],f=[],p=[];for(let e of t.rivers){let n=e.length/5,r=0,i=!1,a=-1;for(let o=0;o<n;o++){let s=e[o*5],c=e[o*5+1],l=e[o*5+2],m=e[o*5+3];if(e[o*5+4]>.5){i=!1,a=-1;continue}let h=Math.max(0,o-1),g=Math.min(n-1,o+1),_=e[g*5]-e[h*5],v=e[g*5+2]-e[h*5+2],y=Math.hypot(_,v)||1;_/=y,v/=y;let b=Math.max(0,(e[h*5+1]-e[g*5+1])/y);o>0&&(r+=Math.hypot(s-e[(o-1)*5],l-e[(o-1)*5+2]));let x=m*.5+2.6,S=u.length/3,C=+(o>0&&e[(o-1)*5+4]>.5||o>1&&e[(o-2)*5+4]>.5||o>3&&e[(o-4)*5+4]>.5);for(let e of[-1,0,1]){let n=s-v*e*x,i=l+_*e*x;u.push(n,Math.min(c,Il(t,n,i)+.22),i),d.push(e,r),f.push(b,x*2,C,0)}i&&a>=0&&p.push(a,S,a+1,a+1,S,S+1,a+1,S+1,a+2,a+2,S+1,S+2),i=!0,a=S}}for(let e of t.pools){let n=u.length/3;u.push(e.x,e.y,e.z),d.push(0,0),f.push(0,e.r*2,1,1);for(let n=0;n<=28;n++){let r=n/28*Math.PI*2,i=0,a=e.r+3;for(;i<a&&Il(t,e.x+Math.cos(r)*(i+1),e.z+Math.sin(r)*(i+1))>e.y-.45;)i+=1;i=Math.max(i,.5);let o=e.x+Math.cos(r)*i,s=e.z+Math.sin(r)*i;u.push(o,Math.min(e.y,Il(t,o,s)+.3),s),d.push(Math.cos(r)*i,Math.sin(r)*i),f.push(0,e.r*2,0,1)}for(let e=0;e<28;e++)p.push(n,n+1+e,n+2+e)}if(t.P.sea!==null&&t.P.sea!==void 0){let e=t.P,n=e.sea,r=e.len-400,i=e.len+104e3,a=u.length/3;for(let e=0;e<=32;e++)for(let t=0;t<=32;t++){let a=t/32,o=e/32,s=-78e3+156e3*(.5+.5*Math.sign(a-.5)*(Math.abs(a-.5)*2)**2.45),c=r+(i-r)*o**2.56;u.push(s,n,c),d.push(s*.5,c*.5),f.push(0,60,0,1)}for(let e=0;e<32;e++)for(let t=0;t<32;t++){let n=a+e*33+t,r=n+1,i=n+32+1,o=i+1;p.push(n,i,r,r,i,o)}}if(u.length){let e=new gr;e.setAttribute(`position`,new ir(u,3)),e.setAttribute(`uv`,new ir(d,2)),e.setAttribute(`aFlow`,new ir(f,4)),e.setIndex(p),l(`water`,e,o,0)}let m=[],h=[],g=[],_=[],v=[],y=[];if(t.waterfalls.forEach((e,n)=>{let r=e.x1-e.x0,i=e.z1-e.z0,a=Math.hypot(r,i)||1;r/=a,i/=a;let o=e.h;for(let s=0;s<2;s++){let c=m.length/3,l=(n*.37+s*.51)%1;for(let n=0;n<=26;n++){let c=n/26,u=(a+2)*c+s*.35,d=e.y0+.3-4.9*(Math.max(0,u-.5)/3.2)**2,f=Math.max(d,Il(t,e.x0+r*u,e.z0+i*u)+.3+s*.15,e.y1+.1),p=(e.w*.5+.6)*(.75+.7*c)*(s?1.25:1)*(1+Math.min(2.5,o/500)*c);for(let t=0;t<=6;t++){let n=t/6,a=(n-.5)*2*p;m.push(e.x0+r*u-i*a,f,e.z0+i*u+r*a),h.push(n,c),g.push(Math.sqrt(Math.max(0,(e.y0-f)/o)),o,l)}}for(let e=0;e<26;e++)for(let t=0;t<6;t++){let n=c+e*7+t,r=n+1,i=n+6+1,a=i+1;_.push(n,i,r,r,i,a)}}if(!e.frozen){let t=Math.min(o,220),n=Math.round(10+t*.5),s=Math.round(8+t*.25),c=3+t*.07+Math.min(14,Math.max(0,o-220)*.012);for(let t=0;t<n;t++)v.push(e.x1+r*2,e.y1+1,e.z1+i*2,c),y.push(Math.random(),5+Math.random()*5,0,o);for(let t=0;t<s;t++)v.push(e.x1,e.y1+.4,e.z1,1),y.push(Math.random(),1.2+Math.random()*.8,1,o);for(let t=0;t<6;t++){let t=.3+.7*Math.random();v.push(e.x0+r*a*t,e.y0-o*t*t,e.z0+i*a*t,c*.8),y.push(Math.random(),4+Math.random()*3,0,o*.3)}}}),m.length){let e=new gr;e.setAttribute(`position`,new ir(m,3)),e.setAttribute(`uv`,new ir(h,2)),e.setAttribute(`aFall`,new ir(g,3)),e.setIndex(_),l(`water`,e,s,1)}if(v.length){let e=new Yi;e.setAttribute(`position`,new ir([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),e.setIndex([0,1,2,0,2,3]),e.setAttribute(`iBase`,new Jr(new Float32Array(v),4)),e.setAttribute(`iSeed`,new Jr(new Float32Array(y),4)),e.instanceCount=v.length/4,l(`fx`,e,c,2)}let b=e=>{for(let t of this.meshes)t.position.set(-e.x,-e.y,-e.z),t.updateMatrixWorld(!0)};i.rebaseCbs.push(b),b(i.origin)}onQuality(e){this.wp.value.y=e.ssr}update(e,t){this.u.uSceneTex.value=t.post.sceneCopy.texture,this.u.uLinTex.value=t.post.lin.texture}},du=9,fu=54,pu=16,mu=7.4,hu=7.2,gu=3.9,_u=2.9,vu=.52,yu=8*Math.PI/180,bu=2.6,xu=[.07,.3,.55,.78],Su=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)},Cu=e=>.75*(.2969*Math.sqrt(e)-.126*e-.3516*e*e+.2843*e*e*e-.1015*e*e*e*e),wu=[6,6,7,7,6,7,7,6,6],Tu=class{constructor(){let e=this.P=[],t=this.info=[],n=this.idx=[],r=this.rest=[],i=(n,i,a,o=0,s=0,c=0)=>(e.push(0,0,0),t.push(n,i,a,0),r.push(o,s,c),e.length/3-1),a=(e,t,r,i)=>{for(let a=0;a<t;a++)for(let t=0;t<r;t++){let o=e+a*(r+1)+t,s=o+r+1;i?n.push(o,o+1,s,o+1,s+1,s):n.push(o,s,o+1,o+1,s,s+1)}};this.top=e.length/3;for(let e=0;e<=fu;e++)for(let t=0;t<=pu;t++){let n=e/fu;i(wu[Math.min(8,Math.floor(n*du))],.34,n*du,(n-.5)*mu,.2,t/pu*_u)}a(this.top,fu,pu,!1),this.bot=e.length/3;for(let e=0;e<=fu;e++)for(let t=0;t<=pu;t++){let n=e/fu;i(wu[Math.min(8,Math.floor(n*du))],.3,n*du,(n-.5)*mu,-.2,t/pu*_u)}a(this.bot,fu,pu,!0),this.ribs=e.length/3;for(let e=0;e<=du;e++)for(let t=0;t<=pu;t++)i(7,.06,.5,e*.3,.1,t/pu*_u),i(7,.06,.5,e*.3,-.1,t/pu*_u);for(let e=0;e<=du;e++)for(let t=0;t<pu;t++){let r=this.ribs+(e*17+t)*2;n.push(r,r+1,r+2,r+1,r+3,r+2)}this.stab=e.length/3;for(let e=0;e<2;e++)for(let t=0;t<=8;t++)i(6,.3,.5,e*4,0,t*.3),i(6,.3,.5,e*4,-.4,t*.3);for(let e=0;e<2;e++)for(let t=0;t<8;t++){let r=this.stab+(e*9+t)*2;n.push(r,r+1,r+2,r+1,r+3,r+2)}this.slider=e.length/3;for(let e=0;e<=4;e++)for(let t=0;t<=4;t++)i(7,.5,.5,e*.15,0,t*.11);a(this.slider,4,4,!1),this.pc=e.length/3;for(let e=0;e<=4;e++)for(let t=0;t<=8;t++)i(e%2?6:7,.4,.5,t*.1,e*.1,0);a(this.pc,4,8,!1),this.bag=e.length/3;for(let e=0;e<8;e++)i(5,0,.5,(e&1)*.3,(e>>1&1)*.2,(e>>2&1)*.12);{let e=this.bag;for(let t of[[0,1,3,2],[4,6,7,5],[0,4,5,1],[2,3,7,6],[0,2,6,4],[1,5,7,3]])n.push(e+t[0],e+t[1],e+t[2],e+t[0],e+t[2],e+t[3])}this.lines=[];let o=(t,r,a)=>{let o=e.length/3;for(let e=0;e<6;e++)i(a,0,.5,e*.01,o*.001,0);for(let e=0;e<3;e++){let t=o+e,r=o+(e+1)%3;n.push(t,r,t+3,r,r+3,t+3)}this.lines.push({o,r,key:t})};for(let e=0;e<=du;e++){for(let t=0;t<4;t++)o([`up`,e,t],.0035,10);o([`low`,e,0],.0045,10),o([`low`,e,1],.0045,10)}for(let e=0;e<2;e++){for(let t=0;t<4;t++)o([`bup`,e,t],.003,10);o([`blow`,e],.0045,11),o([`bhand`,e],.0045,11),o([`tog`,e],.012,11)}for(let e=0;e<2;e++)for(let t=0;t<2;t++)o([`riser`,e,t],.02,8);o([`bridle`],.008,8),o([`bagline`],.006,8);let s=this.geo=new gr;this.pos=new Float32Array(e),s.setAttribute(`position`,new tr(this.pos,3).setUsage(ze)),s.setAttribute(`normal`,new tr(new Float32Array(e.length),3).setUsage(ze)),s.setAttribute(`aInfo`,new tr(new Float32Array(t),4)),s.setAttribute(`aRest`,new tr(new Float32Array(r),3)),s.setIndex(n),s.boundingSphere=new cr(new q(0,3,0),12),this.t=0,this.att=new Float32Array(120),this.te=new Float32Array(24)}update(e,t){this.t+=e;let n=this.pos,r=this.t,i=t.up,a=t.fwd,o=a.y*i.z-a.z*i.y,s=a.z*i.x-a.x*i.z,c=a.x*i.y-a.y*i.x,l=Math.cos(yu),u=Math.sin(yu),d=a.x*l-i.x*u,f=a.y*l-i.y*u,p=a.z*l-i.z*u,m=i.x*l+a.x*u,h=i.y*l+a.y*u,g=i.z*l+a.z*u,_=t.infl,v=t.t<t.tStretch?Su(t.tPilot,t.tStretch,t.t):1,y=.1+.9*Su(.02,.85,_),b=.3+.7*Su(0,.6,_),x=t.t<t.tStretch?.12:1,S=vu+gu*(.06+.94*v),C=i.x*S,w=i.y*S,T=i.z*S,E=(1-_)*(t.t>=t.tStretch),D=(e,t,r,i)=>{n[e*3]=C+o*t+m*r-d*i,n[e*3+1]=w+s*t+h*r-f*i,n[e*3+2]=T+c*t+g*r-p*i},O=e=>{let t=Math.abs(e-.5)*2;return Math.max(0,Math.min(1,_*1.7-t*.7))*(x<1?0:1)},k=e=>{let n=Su(.42,.58,e);return(t.brakeL*(1-n)+t.brakeR*n)*(.55+.45*Math.abs(e-.5)*2)},A=[0,0,0],j=(e,t,n)=>{let i=Math.abs(e-.5)*2,a=(e-.5)*mu/hu*y*x,o=_u*(1-.2*i**2.4)*b*(x<1?.25:1),s=O(e),c=(-.27+.08*i*i)*_u*b*(x<1?.25:1)+t*o,l=Cu(t)*o*(.25+.75*s),u=e*du%1,d=Math.abs(Math.sin(Math.PI*u))**.6*(1-.3*(1-Math.abs(Math.sin(2*Math.PI*u))))*Math.sqrt(Math.max(0,Math.sin(Math.PI*Math.min(1,t*1.1+.04))))*s,f=n>0?l*.88+d*.05*o:n<0?-l*.12-d*.03*o:-l*.12,p=k(e)*Math.max(0,(t-.66)/.34)**1.6*.5*s;if(f-=p,E>.01){let n=Math.sin(r*17+e*23+t*7)*.5+Math.sin(r*29+e*11-t*13)*.5;f+=n*E*.16*(.3+t)}let m=hu+f;return A[0]=Math.sin(a)*m,A[1]=Math.cos(a)*m-hu,A[2]=c-p*.2,A};for(let e=0;e<=fu;e++)for(let t=0;t<=pu;t++){let n=e/fu,r=t/pu,i=j(n,r,1);D(this.top+e*17+t,i[0],i[1],i[2]),i=j(n,.075+.925*r,-1),D(this.bot+e*17+t,i[0],i[1],i[2])}for(let e=0;e<=du;e++)for(let t=0;t<=pu;t++){let n=e/du,r=t/pu,i=this.ribs+(e*17+t)*2,a=j(n,r,1);D(i,a[0],a[1],a[2]),a=j(n,Math.max(r,.075),-1),D(i+1,a[0],a[1],a[2])}for(let e=0;e<2;e++)for(let t=0;t<=8;t++){let n=.1+.68*t/8,i=this.stab+(e*9+t)*2,a=j(e,n,-1),o=(e-.5)*mu/hu*y*x;D(i,a[0],a[1],a[2]);let s=.46*Math.sin(Math.PI*t/8)*O(e?.98:.02)+.02;D(i+1,a[0]-Math.sin(o)*s+(e?1:-1)*.05*Math.sin(r*13+t),a[1]-Math.cos(o)*s,a[2])}let M=this.att,N=this.te,P=(e,t,n)=>{e[t]=C+o*n[0]+m*n[1]-d*n[2],e[t+1]=w+s*n[0]+h*n[1]-f*n[2],e[t+2]=T+c*n[0]+g*n[1]-p*n[2]};for(let e=0;e<=du;e++)for(let t=0;t<4;t++)P(M,(e*4+t)*3,j(e/du,xu[t],0));for(let e=0;e<2;e++)for(let t=0;t<4;t++){let n=e?.94-t*.115:.06+t*.115;P(N,(e*4+t)*3,j(n,1,-1))}let F=Su(.5,1,_),I=(e,t,n)=>{let r=(e?1:-1)*(.17+.09*F),l=t?-(.05+.1*F):.05+.1*F;return n[0]=i.x*vu+o*r+a.x*l,n[1]=i.y*vu+s*r+a.y*l,n[2]=i.z*vu+c*r+a.z*l,n},L=[[I(0,0,[]),I(0,1,[])],[I(1,0,[]),I(1,1,[])]],R=[0,0,0],ee=[0,0,0],te=(e,t,n)=>this.tube(e.o,t,n,e.r),ne=(e,t,n)=>{let r=L[+(e>du/2)][t],i=(e*4+t*2)*3;return n[0]=r[0]+((M[i]+M[i+3])/2-r[0])*.52,n[1]=r[1]+((M[i+1]+M[i+4])/2-r[1])*.52,n[2]=r[2]+((M[i+2]+M[i+5])/2-r[2])*.52,n},re=[t.handL,t.handR],ie=[t.shL,t.shR],z=[[0,0,0],[0,0,0]],B=[[0,0,0],[0,0,0]];for(let e=0;e<2;e++){let t=L[e][1],n=0,r=0,a=0;for(let t=0;t<4;t++)n+=N[(e*4+t)*3],r+=N[(e*4+t)*3+1],a+=N[(e*4+t)*3+2];z[e][0]=t[0]+(n/4-t[0])*.55,z[e][1]=t[1]+(r/4-t[1])*.55,z[e][2]=t[2]+(a/4-t[2])*.55,B[e][0]=t[0]-i.x*.07,B[e][1]=t[1]-i.y*.07,B[e][2]=t[2]-i.z*.07}for(let e of this.lines){let t=e.key;if(t[0]===`up`){let n=(t[1]*4+t[2])*3;R[0]=M[n],R[1]=M[n+1],R[2]=M[n+2],te(e,R,ne(t[1],t[2]>>1,ee))}else if(t[0]===`low`)te(e,ne(t[1],t[2],R),L[+(t[1]>du/2)][t[2]]);else if(t[0]===`bup`){let n=(t[1]*4+t[2])*3;R[0]=N[n],R[1]=N[n+1],R[2]=N[n+2],te(e,R,z[t[1]])}else if(t[0]===`blow`)te(e,z[t[1]],B[t[1]]);else if(t[0]===`bhand`){let n=re[t[1]];R[0]=n.x,R[1]=n.y,R[2]=n.z,te(e,B[t[1]],R)}else if(t[0]===`tog`){let n=re[t[1]];R[0]=n.x-o*.045,R[1]=n.y-s*.045,R[2]=n.z-c*.045,ee[0]=n.x+o*.045,ee[1]=n.y+s*.045,ee[2]=n.z+c*.045,te(e,R,ee)}else if(t[0]===`riser`){let n=ie[t[1]];R[0]=n.x+a.x*(t[2]?-.02:.05),R[1]=n.y+a.y*(t[2]?-.02:.05),R[2]=n.z+a.z*(t[2]?-.02:.05),te(e,R,L[t[1]][t[2]])}}{let e=1-Su(.08,.96,_),t=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]];for(let n=0;n<2;n++)for(let r=0;r<2;r++){let i=L[n][r],a=((n?7:2)*4+r*2)*3+0,o=.06+e*.86,s=t[n*2+r];s[0]=i[0]+((M[a]+M[a+3])/2-i[0])*o,s[1]=i[1]+((M[a+1]+M[a+4])/2-i[1])*o,s[2]=i[2]+((M[a+2]+M[a+5])/2-i[2])*o}for(let a=0;a<=4;a++)for(let o=0;o<=4;o++){let s=a/4,c=o/4,l=this.slider+a*5+o,u=Math.sin(Math.PI*s)*Math.sin(Math.PI*c)*(.07+.25*e)+Math.sin(r*31+a*2.1+o*1.7)*.012*Math.sin(Math.PI*s)*Math.sin(Math.PI*c);for(let e=0;e<3;e++){let r=t[0][e]+(t[1][e]-t[0][e])*c,a=t[2][e]+(t[3][e]-t[2][e])*c;n[l*3+e]=r+(a-r)*s+[i.x,i.y,i.z][e]*u}}}{let e=j(.5,.36,1),i=[0,0,0];P(i,0,e);let a=t.trail,l=t.t<t.tPilot?Su(0,t.tPilot,t.t):1,u=a.x*.86+m*.3,d=a.y*.86+h*.3+.12,f=a.z*.86+g*.3,p=Math.hypot(u,d,f)||1;u/=p,d/=p,f/=p;let v=Math.sin(r*9.3)*.06,y=bu*l,b=i[0]+u*y+o*v,S=i[1]+d*y+s*v,C=i[2]+f*y+c*v;for(let e of this.lines)e.key[0]===`bridle`?(ee[0]=b,ee[1]=S,ee[2]=C,te(e,i,ee)):e.key[0]===`bagline`&&(R[0]=i[0]+u*.5,R[1]=i[1]+d*.5-.1,R[2]=i[2]+f*.5,te(e,i,R));{let e=i[0]+u*.5,t=i[1]+d*.5-(x<1?0:.14),r=i[2]+f*.5,a=x<1?1:.7;for(let i=0;i<8;i++){let l=((i&1)-.5)*.3*a,p=((i>>1&1)-.5)*.11*a,_=((i>>2&1)-.5)*.24*a,v=(this.bag+i)*3;n[v]=e+o*l+u*_+m*p,n[v+1]=t+s*l+d*_+h*p,n[v+2]=r+c*l+f*_+g*p}}let w=Su(.15,.7,_),T=.4*(1-.72*w),E=.2+.5*w,D=d*c-f*s,O=f*o-u*c,k=u*s-d*o,A=Math.hypot(D,O,k)||1;D/=A,O/=A,k/=A;let M=d*k-f*O,N=f*D-u*k,F=u*O-d*D;for(let e=0;e<=4;e++)for(let t=0;t<=8;t++){let i=e/4,a=t/8*6.2832,o=T*Math.sin(i*1.5708)*(1+.1*Math.sin(a*4+r*21)*(.3+w)),s=E*Math.cos(i*1.5708),c=Math.cos(a)*o,l=Math.sin(a)*o,p=(this.pc+e*9+t)*3;n[p]=b+D*c+M*l+u*s,n[p+1]=S+O*c+N*l+d*s,n[p+2]=C+k*c+F*l+f*s}}this.geo.attributes.position.needsUpdate=!0,this.geo.computeVertexNormals()}tube(e,t,n,r){let i=this.pos,a=n[0]-t[0],o=n[1]-t[1],s=n[2]-t[2],c=Math.hypot(a,o,s)||1e-6;a/=c,o/=c,s/=c;let l=o*.31-s*.9,u=s*.3-a*.31,d=a*.9-o*.3,f=Math.hypot(l,u,d)||1;l/=f,u/=f,d/=f;let p=o*d-s*u,m=s*l-a*d,h=a*u-o*l;for(let a=0;a<2;a++){let o=a?n:t;for(let t=0;t<3;t++){let n=t*2.0944,s=Math.cos(n)*r,c=Math.sin(n)*r,f=(e+a*3+t)*3;i[f]=o[0]+l*s+p*c,i[f+1]=o[1]+u*s+m*c,i[f+2]=o[2]+d*s+h*c}}}},Eu=e({step:()=>td}),Du=9.80665,Ou={hz:240,dt:1/240},ku=Math.PI/180;function Au(e){return 1.225*Math.max(.05,1-225577e-10*Math.max(e,-500))**4.2559}var ju=(e,t,n)=>{let r=t[0],i=t[1],a=t[2],o=e[0],s=e[1],c=e[2],l=e[3],u=l*r+s*a-c*i,d=l*i+c*r-o*a,f=l*a+o*i-s*r,p=-o*r-s*i-c*a;return n[0]=u*l+p*-o+d*-c-f*-s,n[1]=d*l+p*-s+f*-o-u*-c,n[2]=f*l+p*-c+u*-s-d*-o,n},Mu=(e,t,n)=>ju([-e[0],-e[1],-e[2],e[3]],t,n),Nu=(e,t,n)=>{let r=e[0],i=e[1],a=e[2],o=e[3],s=t[0],c=t[1],l=t[2],u=t[3];return n[0]=o*s+r*u+i*l-a*c,n[1]=o*c-r*l+i*u+a*s,n[2]=o*l+r*c-i*s+a*u,n[3]=o*u-r*s-i*c-a*l,n},Pu=e=>{let t=Math.hypot(e[0],e[1],e[2],e[3])||1;return e[0]/=t,e[1]/=t,e[2]/=t,e[3]/=t,e},Fu=(e,t)=>{let n=Math.cos(e/2),r=Math.sin(e/2),i=Math.cos(t/2),a=Math.sin(t/2);return[n*a,r*i,-r*a,n*i]},Iu=(e,t,n)=>{let r=e[1]*t[2]-e[2]*t[1],i=e[2]*t[0]-e[0]*t[2],a=e[0]*t[1]-e[1]*t[0];return n[0]=r,n[1]=i,n[2]=a,n},Lu=(e,t,n)=>e<t?t:e>n?n:e,Ru=(e,t,n)=>e+(t-e)*n,zu=(e,t,n)=>{let r=Lu((n-e)/(t-e),0,1);return r*r*(3-2*r)},Bu={S_wing:1.6,S_body:.5,S_track:.9,CD0_wing:.06,K_wing:.485,CLa_wing:2.2,CD0_track:.36,K_track:.9,CLa_track:1.1,CD0_body:.02,CLa_body:.3,CDN:1.26,aStall:27*ku,aTrim:9.4*ku,aTrimDive:4.1*ku,aTrimFlare:25*ku,aTrimTrack:4.5*ku,aTrimFall:86*ku,chord:1,span:1.9,I:[12.5,13.5,2.6],Cm_a:.62,Cm_q:7,Cl_d:.16,Cl_p:.95,Cl_b:.07,Cn_b:.22,Cn_r:1.6,Cn_d:.05,CY_b:.55};function Vu(e,t,n){let r=Bu,i=Ru(Ru(r.S_body,r.S_wing,t),r.S_track,n*t),a=Ru(Ru(r.CD0_body,r.CD0_wing,t),r.CD0_track,n*t),o=Ru(r.K_wing,r.K_track,n),s=Ru(Ru(r.CLa_body,r.CLa_wing,t),r.CLa_track,n*t),c=Math.sin(e),l=Math.cos(e),u=Math.abs(e),d=1-zu(r.aStall-3*ku,r.aStall+7*ku,u),f=s*e,p=a+o*f*f,m=r.CDN*c*l,h=r.CDN*c*c+a;return{S:i,CL:f*d+m*(1-d),CD:p*d+h*(1-d),att:d}}function Hu(e,t=0){return{mode:`freefall`,t:0,pos:[e[0],e[1],e[2]],vel:[0,0,0],q:Fu(t,0),om:[0,0,0],wing:0,track:0,alpha:0,beta:0,speed:0,gload:1,stall:0,agl:1e4,prox:1e4,deployT:-1,deployHold:0,canopy:null,landing:null,crash:null,energyLoss:0,rollAcc:0,pitchAcc:0,inverted:0,airspeed:0,hSpeed:0,vSpeed:0,glide:0,peakG:1,opened:!1}}var Uu=[0,0,0],Wu=[0,0,0],Gu=[0,0,0],Ku=[0,0,0],qu=[0,0,0],Ju=[0,0,0],Yu=[0,0,0],Xu=[0,0,0],Zu=[0,0,0],Qu=[0,0,0],$u=[0,0,0],ed={rollAuth:.22,holdTorque:30,spinRate:7.4,spinTorque:80,spinTuck:.5,flipRate:6,flipTorque:150,tumbleRate:7.6,tumbleTorque:150,elev:.16,flipRelax:.85,tuckRelax:.95};function td(e,t,n,r=Ou.dt){if(e.mode===`landed`||e.mode===`crashed`)return e;if(e.t+=r,e.mode===`canopy`||e.mode===`deploying`)return id(e,t,n,r);let i=Bu;e.mode===`freefall`&&t.wings&&(e.mode=`wingsuit`);let a=e.mode===`wingsuit`?Lu(t.tuck||0,0,1):0;e.tuck=(e.tuck||0)+Lu(a-(e.tuck||0),-r/.45,r/.25);let o=e.intense?1.5:1,s=e.intense?1.6:1;e.dive=e.mode===`wingsuit`&&t.poseTrack||0,e.flipIn=e.mode===`wingsuit`?Math.abs(t.flip||0):0;let c=e.mode===`wingsuit`?Lu(t.spin||0,-2,2):0;e.rtuck=(e.rtuck||0)+Lu(Math.min(1,Math.abs(c))*ed.spinTuck-(e.rtuck||0),-r/.35,r/.16);let l=e.mode===`wingsuit`?1-Math.max(e.tuck,e.rtuck):0;e.wing+=Lu(l-e.wing,-r/(e.tuck>.01||e.rtuck>.01?.25:.9),r/(e.rtuck>.01?.45:.9));let u=e.mode===`wingsuit`?Lu(t.track||0,0,1):0;e.track+=Lu(u-e.track,-r/.35,r/.35),n.wind(e.pos,e.t,Ku);let d=e.vel[0]-Ku[0],f=e.vel[1]-Ku[1],p=e.vel[2]-Ku[2],m=Math.hypot(d,f,p)+1e-6;Uu[0]=d,Uu[1]=f,Uu[2]=p,Mu(e.q,Uu,qu);let h=-qu[2],g=Math.atan2(-qu[1],h),_=Math.asin(Lu(qu[0]/m,-1,1)),v=.5*Au(e.pos[1])*m*m,y=Vu(g,e.wing,e.track);ju(e.q,[0,1,0],Yu),ju(e.q,[0,0,-1],Xu),ju(e.q,[1,0,0],Zu);let b=d/m,x=f/m,S=p/m,C=Yu[0]*b+Yu[1]*x+Yu[2]*S;Qu[0]=Yu[0]-C*b,Qu[1]=Yu[1]-C*x,Qu[2]=Yu[2]-C*S;let w=Math.hypot(Qu[0],Qu[1],Qu[2])||1;Qu[0]/=w,Qu[1]/=w,Qu[2]/=w,Uu[0]=b,Uu[1]=x,Uu[2]=S,Iu(Uu,Qu,$u);let T=e.mode===`wingsuit`?Lu(t.hardPull||0,0,1)*e.wing:0;e.hard=(e.hard||0)+Lu(T-(e.hard||0),-r/.3,r/.15);let E=v*y.S*y.CL*(1+.38*e.hard),D=v*y.S*y.CD*(1+.9*e.hard),O=-v*y.S*i.CY_b*_*(.3+.7*e.wing);Ju[0]=Qu[0]*E-b*D+$u[0]*O,Ju[1]=Qu[1]*E-x*D+$u[1]*O-88*Du,Ju[2]=Qu[2]*E-S*D+$u[2]*O;let k=Lu(t.pitch||0,-1,1),A=Lu(t.flare||0,0,1),j=k>=0?Ru(i.aTrim,i.aTrimFlare,Math.max(k,A))+Math.min(k,A)*5*ku:Ru(i.aTrim,i.aTrimDive,-k)+A*(i.aTrimFlare-i.aTrim);j=Ru(j,i.aTrimTrack+k*4*ku,e.track),j+=t.trimBias||0,j=Ru(i.aTrimFall,j,zu(0,1,e.wing));let M=(.25+.75*e.wing)*(t.trick?2.4:1)*(t.rollAuth||1),N=i.chord,P=i.span,F=Math.max(m,12),I=g-j;I>Math.PI&&(I-=2*Math.PI),I<-Math.PI&&(I+=2*Math.PI);let L=Math.min(1,(e.rtuck||0)/ed.spinTuck),R=(1-ed.flipRelax*Math.abs(e.mode===`wingsuit`?Lu(t.flip||0,-1,1):0))*(1-ed.tuckRelax*(e.tuck||0))*(1-.92*L),ee=v*y.S*N*(-i.Cm_a*Lu(I,-1.2,1.2)*R-i.Cm_q*e.om[0]*N/(2*F)*(.25+.75*R));t.trick&&(ee+=v*y.S*N*.55*k),t.elev&&(ee+=v*y.S*N*ed.elev*Lu(t.elev,-1,1)*(.25+.75*e.wing)),t.flip&&e.mode===`wingsuit`&&(ee+=i.I[0]*Lu(30*(Lu(t.flip,-1,1)*ed.flipRate*o-e.om[0]),-ed.flipTorque*s,ed.flipTorque*s)),e.tuck>.4&&e.mode===`wingsuit`&&(ee+=i.I[0]*Lu(30*((t.tumbleDir>0?1:-1)*ed.tumbleRate*o-e.om[0]),-ed.tumbleTorque*s,ed.tumbleTorque*s)*e.tuck);let te=Lu(t.roll||0,-1,1),ne=Math.atan2(Zu[1],Math.hypot(Zu[0],Zu[2])*Math.sign(Yu[1]||1));t.assist!==!1&&!t.trick&&e.mode===`wingsuit`&&Math.abs(te)<.05&&Yu[1]>.2&&(te=Lu(ne*1.6,-.6,.6));let re=1-.9*Math.min(1,(e.rtuck||0)/ed.spinTuck),ie=v*y.S*P*(-i.Cl_d*te*M-i.Cl_p*e.om[2]*P/(2*F)*re+i.Cl_b*_*e.wing*re);c&&(ie+=i.I[2]*Lu(14*(-c*ed.spinRate*o-e.om[2]),-ed.spinTorque*s,ed.spinTorque*s)),L>.05&&e.mode===`wingsuit`&&!t.flip&&(e.tuck||0)<.3&&(ee+=i.I[0]*Lu(-12*e.om[0],-40,40)*L),t.rollRate!==void 0&&e.mode===`wingsuit`&&(ie+=i.I[2]*Lu(10*(-t.rollRate-e.om[2]),-ed.holdTorque,ed.holdTorque));let z=v*y.S*P*(-i.Cn_b*_*(.4+.6*e.wing)*1-i.Cn_r*e.om[1]*P/(2*F)-i.Cn_d*Lu(t.yaw||0,-1,1)*M);e.mode===`freefall`&&(ie+=-220*Zu[1]-40*e.om[2],ee+=-30*e.om[0],z+=-60*Lu(t.yaw||t.roll||0,-1,1)-25*e.om[1]);let B=i.I,ae=e.om[0],oe=e.om[1],se=e.om[2];e.om[0]+=r*(ee-(B[2]-B[1])*oe*se)/B[0],e.om[1]+=r*(z-(B[0]-B[2])*se*ae)/B[1],e.om[2]+=r*(ie-(B[1]-B[0])*ae*oe)/B[2];let ce=[e.om[0]*r*.5,e.om[1]*r*.5,e.om[2]*r*.5,1];Nu(e.q,ce,e.q),Pu(e.q);let le=Ju[0]/88,ue=Ju[1]/88,de=Ju[2]/88;return e.vel[0]+=le*r,e.vel[1]+=ue*r,e.vel[2]+=de*r,e.pos[0]+=e.vel[0]*r,e.pos[1]+=e.vel[1]*r,e.pos[2]+=e.vel[2]*r,e.alpha=g,e.beta=_,e.airspeed=m,e.speed=Math.hypot(e.vel[0],e.vel[1],e.vel[2]),e.hSpeed=Math.hypot(e.vel[0],e.vel[2]),e.vSpeed=e.vel[1],e.glide=e.vel[1]<-.5?e.hSpeed/-e.vel[1]:99,e.gload=Math.hypot(le,ue+Du,de)/Du,e.stall=1-y.att,e.bank=ne,e.inverted=+(Yu[1]<-.2),e.energyLoss+=D*m*r,e.rollRate=-e.om[2],e.pitchRate=e.om[0],e.fwd=[Xu[0],Xu[1],Xu[2]],e.upv=[Yu[0],Yu[1],Yu[2]],t.deploy&&e.mode===`wingsuit`||t.deploy&&e.mode===`freefall`?(e.deployHold+=r,e.deployHold>.45&&rd(e)):e.deployHold=Math.max(0,e.deployHold-r*2),sd(e,n),e}var nd={S:20.5,CL0:.55,CD0:.2,CLb:.5,CDb:.45,tPilot:.55,tStretch:1.25,tFull:3,bodyCdA:.6};function rd(e){e.mode=`deploying`,e.deployT=0,e.deployHold=0,e.canopy={infl:0,heading:Math.atan2(e.vel[0],e.vel[2]),bank:0,brakeL:0,brakeR:0,swing:0,deployAlt:e.pos[1],deployAgl:e.agl},e.peakG=1}function id(e,t,n,r){let i=nd,a=e.canopy;e.deployT+=r;let o=e.deployT;n.wind(e.pos,e.t,Ku);let s=e.vel[0]-Ku[0],c=e.vel[1]-Ku[1],l=e.vel[2]-Ku[2],u=Math.hypot(s,c,l)+1e-6,d=.5*Au(e.pos[1])*u*u,f=0;if(o>i.tStretch){let e=Lu((o-i.tStretch)/(i.tFull-i.tStretch),0,1);f=e*e*(3-2*e),f**=1.6}a.infl=f,o>=i.tFull&&e.mode===`deploying`&&(e.mode=`canopy`,e.opened=!0);let p=o<i.tPilot?.08*(o/i.tPilot):.45,m=o>i.tStretch-.12&&o<i.tStretch+.1?1.6:0,h=Lu(t.brakeL??Math.max(0,-(t.roll||0))+(t.flare||0)+Math.max(0,t.pitch||0),0,1),g=Lu(t.brakeR??Math.max(0,t.roll||0)+(t.flare||0)+Math.max(0,t.pitch||0),0,1);a.brakeL+=Lu(h-a.brakeL,-r*4,r*4),a.brakeR+=Lu(g-a.brakeR,-r*4,r*4);let _=(a.brakeL+a.brakeR)/2,v=(a.brakeR-a.brakeL)*f,y=(i.CL0+i.CLb*_)*f*(_>.85&&u<7.2?.55:1),b=(i.CD0+i.CDb*_*_)*f,x=v*52*ku;a.bank+=(x-a.bank)*Math.min(1,r/.55);let S=s/u,C=c/u,w=l/u;Uu[0]=S,Uu[1]=C,Uu[2]=w,Iu(Uu,[0,1,0],Wu);let T=Math.hypot(Wu[0],Wu[1],Wu[2]);T<1e-4&&(Wu[0]=1,Wu[1]=0,Wu[2]=0,T=1),Wu[0]/=T,Wu[1]/=T,Wu[2]/=T,Iu(Wu,Uu,Gu);let E=Math.cos(a.bank),D=Math.sin(a.bank),O=Gu[0]*E+Wu[0]*D,k=Gu[1]*E+Wu[1]*D,A=Gu[2]*E+Wu[2]*D,j=d*i.S*y,M=d*(i.S*b+i.bodyCdA+p+m),N=(O*j-S*M)/88,P=(k*j-C*M)/88-Du,F=(A*j-w*M)/88;e.vel[0]+=N*r,e.vel[1]+=P*r,e.vel[2]+=F*r,e.pos[0]+=e.vel[0]*r,e.pos[1]+=e.vel[1]*r,e.pos[2]+=e.vel[2]*r,e.gload=Math.hypot(N,P+Du,F)/Du,e.gload>e.peakG&&(e.peakG=e.gload),e.sf=[N,P+Du,F],a.heading=Math.atan2(e.vel[0],e.vel[2]),a.swing+=((N*Math.sin(a.heading)+F*Math.cos(a.heading))*-.03-a.swing)*Math.min(1,r*2.5);let I=Ru(-.2,Math.PI*.47,zu(i.tStretch-.2,i.tStretch+.5,o))+a.swing,L=Fu(a.heading+Math.PI,I);Nu(L,[0,0,Math.sin(-a.bank*.5),Math.cos(-a.bank*.5)],L);let R=Math.min(1,r*5),ee=e.q[0]*L[0]+e.q[1]*L[1]+e.q[2]*L[2]+e.q[3]*L[3]<0?-1:1;for(let t=0;t<4;t++)e.q[t]+=(L[t]*ee-e.q[t])*R;return Pu(e.q),e.airspeed=u,e.speed=Math.hypot(e.vel[0],e.vel[1],e.vel[2]),e.hSpeed=Math.hypot(e.vel[0],e.vel[2]),e.vSpeed=e.vel[1],e.glide=e.vel[1]<-.3?e.hSpeed/-e.vel[1]:99,e.alpha=0,e.stall=0,e.wing=Math.max(0,e.wing-r),e.track=0,ju(e.q,[0,1,0],Yu),ju(e.q,[0,0,-1],Xu),e.fwd=[Xu[0],Xu[1],Xu[2]],e.upv=[Yu[0],Yu[1],Yu[2]],e.rollRate=0,e.pitchRate=0,sd(e,n),e}var ad={speed:8,landVMax:6.5,landHMax:13.5,slopeMax:.72},od=[0,1,0];function sd(e,t){let n=e.pos[0],r=e.pos[1],i=e.pos[2],a=t.height(n,i),o=r-a;e.agl=o,e.groundY=a;let s=1e4,c=!1,l=e.mode===`wingsuit`||e.mode===`freefall`;if(o<260&&(t.normal(n,i,od),s=o*od[1],l&&o<120&&e.fwd)){let a=-e.fwd[2],o=e.fwd[0],l=Math.hypot(a,o)||1;a/=l,o/=l;let u=[[a,o,0,1],[-a,-o,0,1],[e.fwd[0]*.9,e.fwd[2]*.9,e.fwd[1]*.9,1],[a*7,o*7,0,7],[-a*7,-o*7,0,7],[a*16,o*16,0,16],[-a*16,-o*16,0,16]];for(let[e,a,o,l]of u){let u=t.height(n+e,i+a),d=r+o-u;l<=2?(s=Math.min(s,d*od[1]),d<.3&&(c=!0)):u>r-1&&(s=Math.min(s,Math.max(.6,l*(1-Lu((u-(r-1))/(l*.9),0,.9)))))}}let u=t.obstacles?t.obstacles(e.pos,e.mode===`canopy`?1.2:.75):null;u&&u.dist<s&&(s=u.dist,e.proxKind=u.kind),(!u||u.dist>=s)&&(e.proxKind=`terrain`),e.prox=s;let d=e.mode===`canopy`||e.mode===`deploying`?1:.38;if(u&&u.hit&&(e.speed>ad.speed||l))return cd(e,u.kind);if(o<=d||c){let r=t.water?t.water(n,i):0;if(e.mode===`canopy`){let o=-e.vel[1],s=e.hSpeed;t.normal(n,i,od);let c=Math.sqrt(Math.max(0,1-od[1]*od[1]))/Math.max(od[1],.05);if(r>.5&&t.sea!==null&&t.sea!==void 0&&a<t.sea-1.1)return cd(e,`water`);if(o>ad.landVMax||s>ad.landHMax||c>ad.slopeMax)return cd(e,c>ad.slopeMax?`steep landing`:`hard landing`);let l=1-zu(1.6,ad.landVMax,o),u=1-zu(4.5,ad.landHMax,s),f=Lu(.3+.7*Math.min(l,u*.5+.5)*(.6+.4*u),.3,1);e.mode=`landed`,e.landing={quality:r>.5?f*.9:f,vdown:o,vh:s,slope:c,wet:r>.5},e.pos[1]=a+d,e.vel[0]=e.vel[1]=e.vel[2]=0;return}return cd(e,e.mode===`deploying`?`low deployment`:r>.5?`water`:`terrain`)}}function cd(e,t){e.mode=`crashed`,e.crash={kind:t,speed:e.speed,pos:[e.pos[0],e.pos[1],e.pos[2]]}}var ld=$+`
invariant gl_Position;
in vec4 aInfo; // matId, wingFactor (0 body .. 1 mid-membrane), cellU, side
uniform vec4 uAir; // airspeed, time, inflation, canopyFlag
out vec3 vWorld; out vec3 vN; out vec4 vInfo; out vec3 vObj;
void main(){
  vec3 p = position; vec3 n = normal;
  float fl = aInfo.y; float sp = clamp(uAir.x / 60.0, 0.0, 2.0);
  // travelling flutter waves on the membranes + cell breathing
  float ph = uAir.y * (22.0 + 14.0 * sp) + p.z * 9.0 + p.x * 6.0 + aInfo.z * 5.0;
  float w = sin(ph) * 0.6 + sin(ph * 1.73 + 1.3) * 0.4;
  p += n * fl * fl * w * (0.004 + 0.011 * sp * sp) * (uAir.w > 0.5 ? 2.2 : 1.0);
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vWorld = wp.xyz + uOrigin; vN = normalize(mat3(modelMatrix) * n); vInfo = aInfo; vObj = position;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,ud=$+Tc+Ec+`
uniform vec4 uAir; uniform vec3 uColA; uniform vec3 uColB; uniform vec3 uColC;
in vec3 vWorld; in vec3 vN; in vec4 vInfo; in vec3 vObj;
void main(){
#ifdef DEPTH_PASS
#else
  vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N; vec3 Vv = uCamWorld - vWorld; float dist = length(Vv); vec3 V = Vv / dist;
  int id = int(vInfo.x + 0.5); vec3 alb; float rough = 0.62, f0 = 0.04, sheen = 0.0, sss = 0.0; vec3 sssC = vec3(0.0);
  // ripstop weave + wrinkles (object space so it sticks to the cloth)
  vec2 g = vObj.xz * 190.0 + vObj.y * 90.0; vec2 gf = abs(fract(g) - 0.5); float weave = smoothstep(0.42, 0.5, max(gf.x, gf.y)) * saturate(1.0 - max(fwidth(g.x), fwidth(g.y)) * 2.5);
  vec2 g2 = vObj.xz * 19.0; vec2 gf2 = abs(fract(g2) - 0.5); float rip = smoothstep(0.46, 0.5, max(gf2.x, gf2.y)) * saturate(1.0 - max(fwidth(g2.x), fwidth(g2.y)) * 2.5);
  float wr = fbm2(vObj.xz * vec2(9.0, 26.0) + vObj.y * 7.0) - 0.5; float wr2 = fbm2(vObj.zx * vec2(14.0, 40.0) + 3.0) - 0.5;
  vec3 bump = vec3(dFdx(wr + wr2 * 0.6), dFdy(wr + wr2 * 0.6), 0.0);
  if (id == 0) { alb = uColA; sheen = 0.55; } else if (id == 1) { alb = uColB; sheen = 0.5; }
  else if (id == 2) { alb = vec3(0.035); rough = 0.22; f0 = 0.05; } else if (id == 3) { alb = vec3(0.012, 0.014, 0.02); rough = 0.06; f0 = 0.09; }
  else if (id == 4) { alb = vec3(0.03); rough = 0.55; } else if (id == 5) { alb = uColC; rough = 0.7; sheen = 0.3; }
  else if (id == 6) { alb = uColB; rough = 0.5; sheen = 0.45; sss = 0.75; sssC = uColB * 1.4; } // canopy top panels
  else if (id == 7) { alb = uColA * 2.2 + 0.25; rough = 0.5; sheen = 0.45; sss = 0.8; sssC = vec3(0.9); } // canopy light panels
  else if (id == 9) { alb = mix(vec3(0.82, 0.83, 0.85), uColB, smoothstep(0.02, 0.03, abs(vObj.x)) * (1.0 - smoothstep(0.045, 0.055, abs(vObj.x)))); rough = 0.2; f0 = 0.06; }
  else if (id == 10) { alb = vec3(0.6, 0.58, 0.52); rough = 0.7; } // suspension lines
  else if (id == 11) { alb = uColB * 1.1; rough = 0.6; } // steering lines and toggles
  else { alb = vec3(0.02); rough = 0.6; }
  bool cloth = id <= 1 || id == 5 || id == 6 || id == 7;
  if (id <= 1) { alb = mix(alb, vec3(0.74, 0.75, 0.77), smoothstep(0.35, 0.65, vInfo.w)); float inlet = smoothstep(0.35, 0.65, -vInfo.w); alb = mix(alb, vec3(0.006), inlet); rough = mix(rough, 0.95, inlet); sheen *= 1.0 - inlet; }
  if (cloth) { alb *= 1.0 - 0.1 * weave - 0.16 * rip;  N = normalize(N + (dFdx(vWorld) * bump.x + dFdy(vWorld) * bump.y) * 110.0 * (1.0 - vInfo.y * 0.5)); rough = clamp(rough + 0.1 * wr, 0.3, 0.9); }
  // seams / rib shading on inflated cells
  float cell = abs(fract(vInfo.z) - 0.5) * 2.0; float seam = smoothstep(0.86, 1.0, cell) * step(0.05, vInfo.y); alb *= 1.0 - 0.3 * seam;
  Surf s; s.albedo = alb; s.N = N; s.rough = rough; s.ao = mix(1.0, 0.72, seam) * mix(0.8, 1.0, saturate(vInfo.y * 2.0 + 0.4)); s.f0 = f0; s.sss = sss; s.sssColor = sssC; s.skyVis = 1.0;
  s.shadow = terrainShadow(vWorld) * csmShadow(vWorld + N * 0.03, dist, 1.0) * cloudShadow(vWorld);
  vec3 col = shadeSurface(s, vWorld, V);
  // fabric sheen (grazing-angle retro-reflective fuzz)
  float nv = saturate(dot(N, V)); vec3 sunC = uSunIllum * sunTransmittance(vWorld.y);
  col += sheen * pow(1.0 - nv, 4.0) * (shIrradiance(N) * 0.22 + sunC * s.shadow * saturate(dot(N, uSunDir) * 0.5 + 0.5) * 0.05) * (alb * 0.5 + 0.2);
  // visor: mirror the sky
  if (id == 3) { vec3 R = reflect(-V, N); col += skyRadiance(normalize(vec3(R.x, abs(R.y) + 0.02, R.z)), uCamWorld.y) * (0.08 + 0.92 * pow(1.0 - nv, 5.0)) * 0.9; }
  gl_FragColor = vec4(col, 1.0);
#endif
}`,dd=ld.replace(`in vec4 aInfo;`,`in vec4 aInfo; in vec3 aRest;`).replace(`vObj = position;`,`vObj = aRest;`),fd=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)},pd=class{constructor(){this.p=[],this.info=[],this.idx=[],this.bi=[],this.bw=[],this.rb=[],this.rw=[],this.stow=[]}get n(){return this.p.length/3}v(e,t,n,r,i,a,o,s=o,c=1){return this.p.push(e,t,n),this.info.push(r,i,a,0),this.bi.push(o,s),this.bw.push(c,1-c),this.rb.push(o,s),this.rw.push(c,1-c),this.n-1}loft(e,t,n,r=!0,i=!0){let a=this.n;for(let r of e)for(let e=0;e<t;e++){let i=e/t*Math.PI*2,a=Math.cos(i)*r.ru,o=Math.sin(i)*r.rv;this.v(r.c[0]+r.ax[0]*a+r.ay[0]*o,r.c[1]+r.ax[1]*a+r.ay[1]*o,r.c[2]+r.ax[2]*a+r.ay[2]*o,r.mat??n,0,0,r.b0,r.b1??r.b0,r.w0??1)}for(let n=0;n<e.length-1;n++)for(let e=0;e<t;e++){let r=a+n*t+e,i=a+n*t+(e+1)%t,o=r+t,s=i+t;this.idx.push(r,i,o,i,s,o)}let o=(r,i)=>{let o=e[r],s=this.v(o.c[0],o.c[1],o.c[2],o.mat??n,0,0,o.b0,o.b1??o.b0,o.w0??1),c=a+r*t;for(let e=0;e<t;e++){let n=c+e,r=c+(e+1)%t;i?this.idx.push(s,r,n):this.idx.push(s,n,r)}};r&&o(0,!1),i&&o(e.length-1,!0)}build(){let e=new gr;return e.setAttribute(`position`,new ir(this.p,3)),e.setAttribute(`aInfo`,new ir(this.info,4)),e.setIndex(this.idx),e.computeVertexNormals(),e.getAttribute(`position`).setUsage(ze),e.getAttribute(`normal`).setUsage(ze),e}},md=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],hd={hips:[0,0,.08],chest:[0,.01,-.3],neck:[0,.035,-.6],head:[0,.05,-.74],shL:[-.2,.01,-.52],elL:[-.5,0,-.42],wrL:[-.82,0,-.34],hipL:[-.1,0,.1],knL:[-.2,0,.56],anL:[-.3,0,1]},gd=e=>[-e[0],e[1],e[2]],_d=[-1,0,1,1,3,1,5,0,7,0,9],vd=[hd.hips,hd.chest,hd.neck,hd.shL,hd.elL,gd(hd.shL),gd(hd.elL),hd.hipL,hd.knL,gd(hd.hipL),gd(hd.knL)],yd=[hd.hips,hd.chest,hd.neck,[0,.052,-.8],hd.shL,hd.elL,hd.wrL,gd(hd.shL),gd(hd.elL),gd(hd.wrL),hd.hipL,hd.knL,hd.anL,gd(hd.hipL),gd(hd.knL),gd(hd.anL),[0,.13,-.2]],bd=[0,1,1,2,1,3,4,1,5,6,0,7,8,0,9,10,1],xd={2:[2,3,1],3:[4,5,1],4:[5,6,3],5:[7,8,1],6:[8,9,5],7:[10,11,0],8:[11,12,7],9:[13,14,0],10:[14,15,9]};function Sd(e,t,n){let r=e.clone().normalize(),i=t.clone().addScaledVector(r,-r.dot(t)).normalize().multiplyScalar(-1),a=new q().crossVectors(i,r);return n.makeBasis(r,a,i)}function Cd(){let e=new pd,t=[1,0,0],n=[0,1,0];e.dy=[];let r=(t,n)=>{for(let r=t;r<e.n;r++)e.dy[r]=n?n(r):0},i=(r,i,a,o,s=14,c=9,l=null)=>{let u=[];for(let e=0;e<=c;e++){let a=e/c*Math.PI,s=Math.sin(a)+.015,d=l?l(a):[1,1,0];u.push({c:[r[0],r[1]+d[2],r[2]-Math.cos(a)*i[2]],ax:t,ay:n,ru:s*i[0]*d[0],rv:s*i[1]*d[1],b0:o})}e.loft(u,s,a)},a=(r,i,a,o,s,c,l=c,u=1,d=14)=>e.loft([{c:r,ax:t,ay:n,ru:a,rv:o,b0:c,b1:l,w0:u},{c:i,ax:t,ay:n,ru:a,rv:o,b0:c,b1:l,w0:u}],d,s,!1,!1),o=e.n;e.loft([{c:[0,0,.2],ax:t,ay:n,ru:.13,rv:.09,b0:0},{c:[0,.006,.08],ax:t,ay:n,ru:.185,rv:.122,b0:0},{c:[0,.004,-.1],ax:t,ay:n,ru:.172,rv:.118,b0:0,b1:1,w0:.6},{c:[0,.008,-.26],ax:t,ay:n,ru:.19,rv:.128,b0:1,b1:0,w0:.6},{c:[0,.014,-.42],ax:t,ay:n,ru:.228,rv:.136,b0:1},{c:[0,.02,-.535],ax:t,ay:n,ru:.222,rv:.112,b0:1},{c:[0,.03,-.6],ax:t,ay:n,ru:.1,rv:.08,b0:1},{c:[0,.04,-.66],ax:t,ay:n,ru:.062,rv:.062,b0:1,b1:2,w0:.5}],16,0),a([0,.014,-.44],[0,.014,-.405],.234,.142,4,1),a([0,.004,-.115],[0,.004,-.085],.178,.124,4,0,1,.6),e.loft([{c:[0,.1,0],ax:t,ay:n,ru:.105,rv:.02,b0:0,b1:1,w0:.5},{c:[0,.128,-.05],ax:t,ay:n,ru:.14,rv:.055,b0:0,b1:1,w0:.4},{c:[0,.138,-.2],ax:t,ay:n,ru:.148,rv:.065,b0:1},{c:[0,.136,-.26],ax:t,ay:n,ru:.14,rv:.058,b0:1},{c:[0,.14,-.3],ax:t,ay:n,ru:.146,rv:.064,b0:1},{c:[0,.134,-.46],ax:t,ay:n,ru:.138,rv:.058,b0:1},{c:[0,.11,-.53],ax:t,ay:n,ru:.11,rv:.03,b0:1}],12,5),e.loft([{c:[0,.196,-.1],ax:t,ay:n,ru:.03,rv:.006,b0:1},{c:[0,.204,-.2],ax:t,ay:n,ru:.045,rv:.008,b0:1},{c:[0,.2,-.42],ax:t,ay:n,ru:.04,rv:.008,b0:1}],6,1);let s=[0,.052,-.775];i(s,[.108,.118,.142],9,2,16,10,e=>[1-.1*Math.cos(e),1+.06*Math.cos(e),.012*Math.sin(e)]),i([0,-.012,-.845],[.084,.052,.072],9,2,12,6);{let t=e.n;for(let t=0;t<=12;t++)for(let n=0;n<=5;n++){let r=(t/12-.5)*2.7,i=-.62+n/5*.86;e.v(s[0]+Math.sin(r)*Math.cos(i)*.112,s[1]+Math.sin(i)*.122,s[2]-Math.cos(r)*Math.cos(i)*.148,3,0,0,2)}for(let n=0;n<12;n++)for(let r=0;r<5;r++){let i=t+n*6+r,a=i+5+1;e.idx.push(i,a,i+1,i+1,a,a+1)}}e.loft([{c:[0,.183,-.83],ax:t,ay:n,ru:.03,rv:.022,b0:2},{c:[0,.186,-.8],ax:t,ay:n,ru:.034,rv:.026,b0:2},{c:[0,.186,-.74],ax:t,ay:n,ru:.034,rv:.026,b0:2}],4,4),e.loft([{c:[0,.168,-.79],ax:t,ay:n,ru:.02,rv:.012,b0:2},{c:[0,.168,-.75],ax:t,ay:n,ru:.02,rv:.012,b0:2}],6,4),r(o);for(let t of[1,-1]){o=e.n;let n=e=>t===1?e:gd(e),i=t===1?3:5,s=i+1,c=t===1?7:9,l=c+1,u=n(hd.shL),d=n(hd.elL),f=n(hd.wrL),p=n(hd.hipL),m=n(hd.knL),h=n(hd.anL),g=(e,t,n,r,i,a,o,s=.92)=>{let c=new q(...t).normalize(),l=new q(0,1,0),u=new q().crossVectors(c,l).normalize();return{c:e,ax:[u.x,u.y,u.z],ay:[0,1,0],ru:n,rv:n*s,b0:r,b1:i,w0:a,mat:o}},_=[d[0]-u[0],0,d[2]-u[2]],v=[f[0]-d[0],0,f[2]-d[2]];e.loft([g(md(u,d,-.16),_,.082,1,i,.6),g(md(u,d,.12),_,.078,i,1,.75),g(md(u,d,.45),_,.068,i),g(md(u,d,.88),_,.058,i,s,.7),g(d,_,.057,i,s,.5),g(md(d,f,.3),v,.056,s),g(md(d,f,.75),v,.046,s),g(md(d,f,.93),v,.041,s),g(md(d,f,.95),v,.046,s,s,1,4),g(md(d,f,1),v,.046,s,s,1,4),g(md(d,f,1.1),v,.05,s,s,1,4,.62),g(md(d,f,1.26),v,.046,s,s,1,4,.6),g(md(d,f,1.36),v,.03,s,s,1,4,.6),g(md(d,f,1.4),v,.008,s,s,1,4,.6)],10,0);{let t=md(d,f,1.08);e.loft([g([t[0],t[1]-.02,t[2]-.03],[v[0]*.4,0,-1],.02,s,s,1,4),g([t[0]+v[0]*.06,t[1]-.03,t[2]-.085],[v[0]*.4,0,-1],.015,s,s,1,4),g([t[0]+v[0]*.08,t[1]-.03,t[2]-.105],[v[0]*.4,0,-1],.004,s,s,1,4)],6,4)}let y=[m[0]-p[0],0,m[2]-p[2]],b=[h[0]-m[0],0,h[2]-m[2]];e.loft([g(md(p,m,-.12),y,.108,0,c,.6,void 0,1.08),g(md(p,m,.2),y,.106,c,0,.8,void 0,1.06),g(md(p,m,.6),y,.09,c,c,1,void 0,1),g(md(p,m,.92),y,.074,c,l,.7),g(m,y,.075,c,l,.5),g(md(m,h,.25),b,.074,l,l,1,void 0,1),g(md(m,h,.6),b,.06,l),g(md(m,h,.9),b,.044,l),g(md(m,h,.93),b,.05,l,l,1,4),g(md(m,h,1.02),b,.052,l,l,1,4),g(md(m,h,1.2),b,.05,l,l,1,4,.7),g(md(m,h,1.42),b,.04,l,l,1,4,.55),g(md(m,h,1.55),b,.02,l,l,1,4,.5),g(md(m,h,1.58),b,.004,l,l,1,4,.5)],10,0),a(md(p,m,.16),md(p,m,.23),.111,.117,4,c,0,.8,10),r(o),o=e.n;let x=md(d,f,1.22),S=e=>e<.42?md(u,d,e/.42):e<.86?md(d,f,(e-.42)/.44):md(f,x,(e-.86)/.14),C=n([-.21,0,-.44]),w=n([-.165,0,.4]);for(let n of[1,-1]){let r=e.n;for(let t=0;t<=16;t++)for(let r=0;r<=10;r++){let a=t/16,o=r/10,c=S(a),l=md(C,w,a**.85),u=md(c,l,o),d=Math.sin(Math.PI*o**.62),f=.58+.42*Math.abs(Math.cos(a*16*Math.PI*.5)),p=(.028+.088*Math.sin(Math.PI*Math.min(1,a*1.08)))*d*f*(a>.94?(1-a)/.06:1),m=o<.14||a>.87||n<0,h=.05*o*a+.06*o*o*(1-a),g=e.v(u[0],u[1]+n*p+.003*n,u[2]+h,+!m,d*Math.min(1,a*2.5),a*16*.5,a<.42?i:s,o>.5?+(a<.45):a<.42?i:s,o>.5?(1-o)*.9:1-o*.2);e.dy[g]=n*p;{let t=Math.sign(l[0])||1,r=.5+.5*Math.sin(a*11+o*5);e.stow.push(g,l[0]+t*(.012+.055*(1-o)*r),l[1]+n*.01+.03*(1-o)*(1-r),l[2]+(1-o)*.07*(a-.35),+(a<.45))}{let t=Math.min(1,Math.max(0,(o-.08)/.92)),n=1-t*t*(3-2*t);e.rb[g*2]=a<.42?i:s,e.rb[g*2+1]=+(a<.45),e.rw[g*2]=n,e.rw[g*2+1]=1-n}n>0&&o>.14&&o<.24&&a<.87&&(e.info[g*4+3]=1),n<0&&o>.03&&o<.1&&t%2==1&&a>.1&&a<.85&&(e.info[g*4+3]=-1)}for(let i=0;i<16;i++)for(let a=0;a<10;a++){let o=r+i*11+a,s=o+10+1;n*t>0?e.idx.push(o,o+1,s,o+1,s+1,s):e.idx.push(o,s,o+1,o+1,s,s+1)}}}{let t=hd.hipL,n=hd.anL;for(let r of[1,-1]){let i=e.n;for(let i=0;i<=14;i++)for(let a=0;a<=12;a++){let o=i/14,s=a/12,c=o<.48?md(t,hd.knL,o/.48):md(hd.knL,n,(o-.48)/.52),l=md(c,gd(c),s),u=Math.sin(Math.PI*s),d=.11*u**1.4*o*o,f=.6+.4*Math.abs(Math.cos(s*12*Math.PI*.5)),p=(.028+.09*Math.sin(Math.PI*Math.min(1,o*1.05+.04)))*u**.75*f*(o>.9?.25+.75*(1-o)/.1:1),m=r>0&&Math.abs(s-.5)<.2&&o>.12,h=e.v(l[0],l[1]+r*p+.003*r,l[2]+d,+!!m,u*Math.min(1,o*2.2),s*12*.5,s<.5?o<.48?7:8:o<.48?9:10,0,o<.15?.5:1);e.dy[h]=r*p,e.rb[h*2]=o<.48?7:8,e.rb[h*2+1]=o<.48?9:10,e.rw[h*2]=1-s,e.rw[h*2+1]=s,r>0&&Math.abs(Math.abs(s-.5)-.24)<.045&&o>.12&&(e.info[h*4+3]=1)}for(let t=0;t<14;t++)for(let n=0;n<12;n++){let a=i+t*13+n,o=a+12+1;r>0?e.idx.push(a,o,a+1,a+1,o,o+1):e.idx.push(a,a+1,o,a+1,o+1,o)}}}for(let t=0;t<e.n;t++)e.dy[t]===void 0&&(e.dy[t]=0);return e}var wd=class{constructor(e){this.e=e,e.modules.push(this);let t=e.G;this.air={value:new Y(50,0,1,0)},this.airC={value:new Y(12,0,1,1)};let n={uColA:{value:new q(.028,.03,.036)},uColB:{value:new q(.72,.13,.02)},uColC:{value:new q(.05,.05,.055)}};this.pg=Cd();let r=this.pg.build();this.rest=Float32Array.from(this.pg.p),this.bi=this.pg.bi,this.bw=this.pg.bw,this.rbi=this.pg.rb,this.rbw=this.pg.rw,this.stow=Float32Array.from(this.pg.stow),this.rag=null,this.ragRest=yd,this.dy=Float32Array.from(this.pg.dy);let i=e.makeMat({vs:ld,fs:ud,uniforms:{...t,uAir:this.air,...n},side:2,shadow:!0});this.mesh=new Wr(r,i.main),this.mesh.userData.shadowLod=2,e.add(`char`,this.mesh,i),this.restN=Float32Array.from(r.getAttribute(`normal`).array),this.rig=new Tu;let a=e.makeMat({vs:dd,fs:ud,uniforms:{...t,uAir:this.airC,...n},side:2,shadow:!0});this.canopy=new Wr(this.rig.geo,a.main),this.canopy.frustumCulled=!1,this.canopy.userData.shadowLod=3,e.add(`char`,this.canopy,a),this.canopy.visible=!1,this.hg=null,this.bones=vd.map(()=>new ut),this.world=vd.map(()=>new X),this.pose={track:0,flare:0,box:1,canopy:0,roll:0,pitch:0,brakeL:0,brakeR:0,tuck:0},this.pos=new q,this.quat=new ut,this.visible=!0;let o=yd.map(e=>new q(e[0],e[1],e[2]));this.rr=o,this.rv=o.map(()=>new q),this.rPelInv=Sd(o[13].clone().sub(o[10]),o[1].clone().sub(o[0]),new X).transpose(),this.rChInv=Sd(o[7].clone().sub(o[4]),o[2].clone().sub(o[1]),new X).transpose(),this.rq=vd.map(()=>new ut)}jointsWorld(){let e=new Float64Array(yd.length*3),t=new q;for(let n=0;n<yd.length;n++)t.copy(this.rr[n]).applyMatrix4(this.world[bd[n]]).applyQuaternion(this.quat),e[n*3]=this.pos.x+t.x,e[n*3+1]=this.pos.y+t.y,e[n*3+2]=this.pos.z+t.z;return e}setRagdoll(e){this.rag=e}poseRag(){let e=this.rag.x,t=this.rv,n=this.world,r=this.rq,i=new X,a=new q,o=new q,s=new ut;for(let n=0;n<t.length;n++)t[n].set(e[n*3]-e[0],e[n*3+1]-e[1],e[n*3+2]-e[2]);r[0].setFromRotationMatrix(Sd(a.subVectors(t[13],t[10]),o.subVectors(t[1],t[0]),i).multiply(this.rPelInv)),r[1].setFromRotationMatrix(Sd(a.subVectors(t[7],t[4]),o.subVectors(t[2],t[1]),i).multiply(this.rChInv));for(let e=2;e<vd.length;e++){let[n,i,c]=xd[e];a.subVectors(this.rr[i],this.rr[n]).normalize().applyQuaternion(r[c]),o.subVectors(t[i],t[n]).normalize(),r[e].copy(s.setFromUnitVectors(a,o)).multiply(r[c])}let c=[0,1,2,4,5,7,8,10,11,13,14];for(let e=0;e<vd.length;e++){let i=vd[e],o=t[c[e]];n[e].makeRotationFromQuaternion(r[e]),a.set(-i[0],-i[1],-i[2]).applyQuaternion(r[e]),n[e].setPosition(o.x+a.x,o.y+a.y,o.z+a.z)}this.pos.set(e[0],e[1],e[2])}sync(e,t,n){let r=this.pose,i=1-Math.exp(-n*7),a={track:Math.max(e.track||0,t.poseTrack||0,Math.min(1,(e.rtuck||0)*1.8)),flare:Math.max(t.flare||0,Math.max(0,t.pitch||0))*+(e.mode===`wingsuit`),box:e.mode===`freefall`?1-e.wing:0,canopy:+(e.mode===`canopy`||e.mode===`deploying`||e.mode===`landed`),roll:(t.roll||0)*+(e.mode===`wingsuit`),pitch:Math.min(0,t.pitch||0),tuck:e.tuck||0,brakeL:e.canopy?e.canopy.brakeL:0,brakeR:e.canopy?e.canopy.brakeR:0};for(let e in a)r[e]+=(a[e]-r[e])*i;this.pos.set(e.pos[0],e.pos[1],e.pos[2]),this.quat.set(e.q[0],e.q[1],e.q[2],e.q[3]),this.air.value.x=e.airspeed||0,this.state=e}update(e,t){let n=this.pose,r=(e,t,n)=>new ut().setFromEuler(new Ut(e,t,n,`YXZ`)),i=this.bones,a=Math.PI/180,o=1-n.box-n.canopy*(1-n.box),s=n.tuck||0;i[0].identity(),i[1].copy(r((n.flare*9+n.box*10-s*38)*a,0,0)),i[2].copy(r((o*13*(1-s)+n.flare*14+n.box*22-n.pitch*-8-s*30)*a,n.roll*-10*a,0));let c=e=>(n.track*62+s*72-n.flare*14+n.roll*e*-16*(1-s)-n.box*28)*a*e;i[3].copy(r(0,c(1),n.box*16*a)),i[5].copy(r(0,c(-1),-n.box*16*a)),i[4].copy(r(0,(n.box*-62-s*70)*a,0)),i[6].copy(r(0,(n.box*62+s*70)*a,0));let l=e=>n.track*9*a*e;i[7].copy(r((n.flare*-6+s*96)*a,l(1)+s*9*a,0)),i[9].copy(r((n.flare*-6+s*96)*a,l(-1)-s*9*a,0));let u=(o*5+n.flare*22+n.box*55+s*118)*a;i[8].copy(r(-u,0,0)),i[10].copy(r(-u,0,0));let d=new X,f=new X,p=this.rag,m=p?0:this.hang(e);p&&this.poseRag();for(let e=0;e<vd.length&&!p;e++){let t=vd[e];f.makeRotationFromQuaternion(i[e]),d.makeTranslation(t[0],t[1],t[2]).multiply(f).multiply(new X().makeTranslation(-t[0],-t[1],-t[2])),_d[e]>=0?this.world[e].multiplyMatrices(this.world[_d[e]],d):this.world[e].copy(d)}m>.001&&this.poseCanopy(m);let h=this.mesh.geometry.getAttribute(`position`),g=this.mesh.geometry.getAttribute(`normal`),_=h.array,v=g.array,y=this.rest,b=this.restN,x=y.length/3,S=this.world,C=this.dy,w=p?.9:Math.min(.92,n.canopy*.88+n.box*.55+s*.9),T=p||m>.5,E=T?this.rbi:this.bi,D=T?this.rbw:this.bw;for(let e=0;e<x;e++){let t=y[e*3],n=y[e*3+1]-C[e]*w,r=y[e*3+2],i=S[E[e*2]].elements,a=S[E[e*2+1]].elements,o=D[e*2],s=1-o;_[e*3]=(i[0]*t+i[4]*n+i[8]*r+i[12])*o+(a[0]*t+a[4]*n+a[8]*r+a[12])*s,_[e*3+1]=(i[1]*t+i[5]*n+i[9]*r+i[13])*o+(a[1]*t+a[5]*n+a[9]*r+a[13])*s,_[e*3+2]=(i[2]*t+i[6]*n+i[10]*r+i[14])*o+(a[2]*t+a[6]*n+a[10]*r+a[14])*s;let c=b[e*3],l=b[e*3+1],u=b[e*3+2];v[e*3]=(i[0]*c+i[4]*l+i[8]*u)*o+(a[0]*c+a[4]*l+a[8]*u)*s,v[e*3+1]=(i[1]*c+i[5]*l+i[9]*u)*o+(a[1]*c+a[5]*l+a[9]*u)*s,v[e*3+2]=(i[2]*c+i[6]*l+i[10]*u)*o+(a[2]*c+a[6]*l+a[10]*u)*s}if(m>.001){let e=this.stow;for(let t=0;t<e.length;t+=5){let n=e[t],r=S[e[t+4]].elements,i=e[t+1],a=e[t+2],o=e[t+3];_[n*3]+=(r[0]*i+r[4]*a+r[8]*o+r[12]-_[n*3])*m,_[n*3+1]+=(r[1]*i+r[5]*a+r[9]*o+r[13]-_[n*3+1])*m,_[n*3+2]+=(r[2]*i+r[6]*a+r[10]*o+r[14]-_[n*3+2])*m}}h.needsUpdate=!0,g.needsUpdate=!0,this.air.value.y=t.time,this.airC.value.y=t.time,this.mesh.visible=this.visible,this.mesh.position.copy(this.pos).sub(t.origin),p?this.mesh.quaternion.identity():this.mesh.quaternion.copy(this.quat),this.mesh.updateMatrixWorld(!0);let O=this.state,k=O&&O.canopy,A=this.hg;if(this.canopy.visible=!!k&&!!A&&this.visible,this.canopy.visible){let r=this.mesh.quaternion,i=(e,t)=>t.applyMatrix4(S[e]).applyQuaternion(r),a=i(1,this.rr[4].clone()),o=i(1,this.rr[7].clone()),s=a.clone().add(o).multiplyScalar(.5),c=(e,t,n)=>i(e,this.rr[t].clone().addScaledVector(this.rr[t].clone().sub(this.rr[n]).normalize(),.085)).sub(s),l=c(4,6,5),u=c(6,9,8),d=O.vel||[0,-1,0],f=Math.hypot(d[0],d[1],d[2]),p=f>2?new q(-d[0]/f,-d[1]/f,-d[2]/f):new q(0,1,0),m=A.land,h=A.u.clone();m>0&&h.lerp(new q(A.f.x*.9,.3,A.f.z*.9),fd(0,1,m)).normalize();let g=(k.infl??1)*(1-.9*fd(.1,1,m));this.rig.update(e,{up:h,fwd:A.f.clone().addScaledVector(h,-A.f.dot(h)).normalize(),trail:m>0?new q(-A.f.x,.25,-A.f.z).normalize():p,shL:a.sub(s),shR:o.sub(s),handL:l,handR:u,infl:g,t:O.deployT??10,tPilot:nd.tPilot,tStretch:nd.tStretch,brakeL:n.brakeL,brakeR:n.brakeR}),this.canopy.position.copy(this.pos).add(s).sub(t.origin),this.canopy.quaternion.identity(),this.canopy.updateMatrixWorld(!0),this.airC.value.x=12+(1-g)*55,this.airC.value.z=g}}hang(e){let t=this.state,n=t&&t.canopy;if(!n)return this.hg=null,0;let r=t.deployT??10,i=fd(nd.tStretch-.1,nd.tStretch+.9,r),a=n.heading||0,o=this.hg;o&&o.c===n||(o=this.hg={c:n,d:new q(0,1,0),dv:new q,u:new q(0,1,0),f:new q(Math.sin(a),0,Math.cos(a)),land:0,first:!0});let s=new q,c=t.sf;c?s.set(c[0],c[1],c[2]):s.set(-Math.cos(a)*Math.sin(n.bank||0),Math.cos(n.bank||0),Math.sin(a)*Math.sin(n.bank||0)),s.lengthSq()<1e-4&&s.set(0,1,0),s.normalize();{let e=Math.cos((68-26*(n.infl??1))*Math.PI/180),t=Math.hypot(s.x,s.z);if(s.y<e&&t>1e-5){let n=Math.sqrt(1-e*e)/t;s.set(s.x*n,e,s.z*n)}}if(t.mode===`landed`&&(o.land=Math.min(1,o.land+e/2.4),s.set(0,1,0)),o.f.lerp(new q(Math.sin(a),0,Math.cos(a)),o.first?1:1-Math.exp(-e*4)).normalize(),o.first||e<=0)o.d.copy(s),o.u.copy(s),o.first=!1;else{o.u.lerp(s,1-Math.exp(-e*6)).normalize();let t=2.5,n=.4,r=Math.max(1,Math.ceil(e/.02)),i=e/r;for(let e=0;e<r;e++)o.dv.x+=(t*t*(s.x-o.d.x)-2*n*t*o.dv.x)*i,o.dv.y+=(t*t*(s.y-o.d.y)-2*n*t*o.dv.y)*i,o.dv.z+=(t*t*(s.z-o.d.z)-2*n*t*o.dv.z)*i,o.d.addScaledVector(o.dv,i).normalize()}let l=o.d.clone().addScaledVector(o.f,-.09).normalize().negate(),u=o.f.clone().negate();u.addScaledVector(l,-u.dot(l)).normalize();let d=new q().crossVectors(u,l);return this.quat.slerp(new ut().setFromRotationMatrix(new X().makeBasis(d,u,l)),i),o.cw=i,i}poseCanopy(e){let t=this.pose,n=this.state,r=this.hg,i=this.world,a=this.rr,o=this.rq,s=q,c=Math.PI/180,l=r.land,u=n.agl===void 0?0:fd(22,6,n.agl),d=Math.min(t.brakeL,t.brakeR),f=Math.max(u,fd(.55,.95,d))*(1-l),p=t.brakeR-t.brakeL,m=Math.max(-.35,Math.min(.35,r.dv.dot(r.f)*.22)),h=Math.max(-.3,Math.min(.3,r.dv.dot(new s().crossVectors(r.f,r.d))*.2)),g={},_=(e,t)=>{let n=Math.max(0,Math.min(1,t)),r=[e*.1,-.1,-.4],i=[e*.15,-.23,.03],a=[e*.17,-.13,.5],o=n<.5?n*2:(n-.5)*2,c=n<.5?r:i,u=n<.5?i:a,d=o*o*(3-2*o),f=new s(c[0]+(u[0]-c[0])*d,c[1]+(u[1]-c[1])*d,c[2]+(u[2]-c[2])*d);l>0&&f.lerp(new s(e*.2,-.05,.56),l);let p=.316,m=.33,h=Math.max(.1,Math.min(.642,f.length())),g=f.clone().normalize(),_=(p*p-m*m+h*h)/(2*h),v=Math.sqrt(Math.max(0,p*p-_*_)),y=new s(e*.8,-.45,.4);y.addScaledVector(g,-y.dot(g)).normalize();let b=g.clone().multiplyScalar(_).addScaledVector(y,v);return[b.clone().normalize(),g.multiplyScalar(h).sub(b).normalize()]},v=_(-1,t.brakeL),y=_(1,t.brakeR);g[3]=v[0],g[4]=v[1],g[5]=y[0],g[6]=y[1];let b=e=>{let t=(42-27*f-38*l)*c+m*.9-p*e*.05,n=(64-42*f-56*l)*c+Math.abs(m)*.3,r=e*(.07-.04*f)+h*.5,i=t-n;return[new s(r,-Math.sin(t),Math.cos(t)).normalize(),new s(r*.2-e*.03,-Math.sin(i),Math.cos(i)).normalize()]},x=b(-1),S=b(1);g[7]=x[0],g[8]=x[1],g[9]=S[0],g[10]=S[1],g[2]=new s(p*.2,-.1-.12*(1-l),-1).normalize();let C=new ut().setFromAxisAngle(new s(0,1,0),-p*.1),w=new ut().setFromRotationMatrix(i[0]).slerp(new ut,e),T=new ut().setFromRotationMatrix(i[1]).slerp(C,e);new X;let E=new s;new s;let D=new ut,O=[],k=[];for(let e=2;e<vd.length;e++){let[t,n]=xd[e];k[e]=a[n].clone().applyMatrix4(i[e]).sub(a[t].clone().applyMatrix4(i[e])).normalize()}let A=(e,t,n)=>{let r=vd[e];o[e].copy(t),i[e].makeRotationFromQuaternion(t),E.set(-r[0],-r[1],-r[2]).applyQuaternion(t),i[e].setPosition(n.x+E.x,n.y+E.y,n.z+E.z)};A(0,w,a[0]),A(1,T,a[1].clone().applyMatrix4(i[0])),O[2]=a[2].clone().applyMatrix4(i[1]),O[4]=a[4].clone().applyMatrix4(i[1]),O[7]=a[7].clone().applyMatrix4(i[1]),O[10]=a[10].clone().applyMatrix4(i[0]),O[13]=a[13].clone().applyMatrix4(i[0]);for(let t of[2,3,4,5,6,7,8,9,10]){let[n,r,i]=xd[t],s=k[t].clone().lerp(g[t],e).normalize(),c=a[r].distanceTo(a[n]);E.subVectors(a[r],a[n]).normalize().applyQuaternion(o[i]),D.setFromUnitVectors(E,s).multiply(o[i]);let l=O[n];A(t,D.clone(),l),O[r]=l.clone().addScaledVector(s,c)}}},Td=$+`
in vec4 iPos; in vec4 iCol; // centre (render space) + radius ; rgb + alpha
out vec2 vQ; out vec3 vWorld; out vec4 vCol; out float vViewZ;
void main(){
  vec3 c = iPos.xyz + uOrigin; vec3 toCam = normalize(uCamWorld - c); vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), toCam)), up = cross(toCam, right);
  vec3 wp = c + (right * position.x + up * position.y) * iPos.w; vQ = position.xy; vWorld = wp; vCol = iCol;
  vec4 v = viewMatrix * vec4(wp - uOrigin, 1.0); vViewZ = -v.z; gl_Position = projectionMatrix * v;
}`,Ed=$+Tc+Ec+`
uniform sampler2D uLinTex; in vec2 vQ; in vec3 vWorld; in vec4 vCol; in float vViewZ;
void main(){
  float r = length(vQ); if (r > 1.0 || vCol.a < 0.003) discard;
  float n = fbm2(vQ * 2.3 + vWorld.xz * 0.7); float a = vCol.a * pow(1.0 - r, 1.3) * (0.55 + 0.9 * n);
  float sceneZ = texture(uLinTex, gl_FragCoord.xy * uInvRes).r; a *= smoothstep(0.0, 0.7, sceneZ - vViewZ) * smoothstep(0.3, 1.4, vViewZ);
  vec3 sunC = uSunIllum * sunTransmittance(vWorld.y); float sh = terrainShadow(vWorld) * cloudShadow(vWorld); vec3 V = normalize(uCamWorld - vWorld);
  float c = dot(-V, uSunDir); float ph = 0.7 + 1.4 * pow(saturate(c), 5.0);
  vec3 col = vCol.rgb * (sunC * sh * ph * 0.32 + shIrradiance(vec3(0.0, 1.0, 0.0))) / PI;
  gl_FragColor = vec4(col, saturate(a));
}`,Dd=160,Od=class{constructor(e){let t=this.e=e;e.modules.push(this),this.n=0,this.head=0,this.P=new Float64Array(480),this.V=new Float32Array(480),this.A=new Float32Array(960),this.C=new Float32Array(480);let n=new Yi;n.setAttribute(`position`,new ir([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),n.setIndex([0,1,2,0,2,3]),this.aPos=new Jr(new Float32Array(640),4),this.aCol=new Jr(new Float32Array(640),4),this.aPos.setUsage(ze),this.aCol.setUsage(ze),n.setAttribute(`iPos`,this.aPos),n.setAttribute(`iCol`,this.aCol),n.instanceCount=Dd,this.u={...t.G,uLinTex:{value:null}};let r=t.makeMat({vs:Td,fs:Ed,uniforms:this.u,transparent:!0,side:2});this.mesh=new Wr(n,r.main),this.mesh.visible=!1,t.add(`fx`,this.mesh,r),this.live=0}emit(e,t,n={}){let r=n.dir||[0,1,0],i=n.carry||[0,0,0],a=n.col||[.92,.94,.97],o=n.power??1,s=n.size??1;for(let c=0;c<t;c++){let t=this.head;this.head=(this.head+1)%Dd;let c=Math.random()*6.283,l=.25+Math.random()*.9,u=(1.2+Math.random()*3.2)*o,d=Math.cos(c)*Math.cos(l),f=Math.sin(l),p=Math.sin(c)*Math.cos(l);this.P[t*3]=e[0]+d*.25*s,this.P[t*3+1]=e[1]+.1,this.P[t*3+2]=e[2]+p*.25*s,this.V[t*3]=d*u+r[0]*u*.6+i[0]*(.15+.3*Math.random()),this.V[t*3+1]=f*u+r[1]*u*.6+Math.max(0,i[1])*.2,this.V[t*3+2]=p*u+r[2]*u*.6+i[2]*(.15+.3*Math.random()),this.A[t*6]=0,this.A[t*6+1]=(n.life??1.3)*(.6+.8*Math.random()),this.A[t*6+2]=(.18+.22*Math.random())*s,this.A[t*6+3]=(.9+1.3*Math.random())*s,this.A[t*6+4]=(n.alpha??.5)*(.6+.4*Math.random()),this.A[t*6+5]=n.drag??2.4,this.C[t*3]=a[0],this.C[t*3+1]=a[1],this.C[t*3+2]=a[2]}this.live=Math.max(this.live,4)}clear(){this.A.fill(0),this.live=0,this.mesh.visible=!1}update(e,t){if(this.u.uLinTex.value=t.post.lin.texture,this.live<=0){this.mesh.visible=!1;return}let n=this.P,r=this.V,i=this.A,a=this.aPos.array,o=this.aCol.array,s=t.origin,c=!1;for(let t=0;t<Dd;t++){let l=i[t*6+1];if(l<=0){o[t*4+3]=0,a[t*4+3]=0;continue}let u=i[t*6]+=e;if(u>=l){i[t*6+1]=0,o[t*4+3]=0,a[t*4+3]=0;continue}c=!0;let d=Math.exp(-i[t*6+5]*e);r[t*3]*=d,r[t*3+1]=r[t*3+1]*d-1.6*e,r[t*3+2]*=d,n[t*3]+=r[t*3]*e,n[t*3+1]+=r[t*3+1]*e,n[t*3+2]+=r[t*3+2]*e;let f=u/l,p=i[t*6+2]+(i[t*6+3]-i[t*6+2])*(1-(1-f)**2.2);a[t*4]=n[t*3]-s.x,a[t*4+1]=n[t*3+1]-s.y,a[t*4+2]=n[t*3+2]-s.z,a[t*4+3]=p,o[t*4]=this.C[t*3],o[t*4+1]=this.C[t*3+1],o[t*4+2]=this.C[t*3+2],o[t*4+3]=i[t*6+4]*Math.min(1,f*12)*(1-f)**1.4}this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,c||--this.live,this.mesh.visible=this.live>0}},kd=$+`
in vec4 iPos; in vec4 iVel; // centre (render space) + radius ; unit velocity + stretch
out vec2 vQ; out vec3 vWorld;
void main(){
  vec3 c = iPos.xyz + uOrigin; vec3 toCam = normalize(uCamWorld - c); vec3 ax = iVel.xyz; vec3 sd = cross(ax, toCam); float sl = length(sd); sd = sl > 1e-3 ? sd / sl : vec3(1.0, 0.0, 0.0);
  vec3 wp = c + (sd * position.x + ax * position.y * (1.0 + iVel.w)) * iPos.w; vQ = position.xy; vWorld = wp;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp - uOrigin, 1.0);
}`,Ad=$+Tc+Ec+`
in vec2 vQ; in vec3 vWorld;
void main(){
  float r = length(vQ); if (r > 1.0) discard;
  vec3 sunC = uSunIllum * sunTransmittance(vWorld.y); float sh = terrainShadow(vWorld) * cloudShadow(vWorld);
  vec3 col = vec3(0.34, 0.008, 0.01) * (sunC * sh * 0.5 + shIrradiance(vec3(0.0, 1.0, 0.0))) / PI;
  col += sunC * sh * 0.05 * pow(saturate(1.0 - length(vQ - vec2(0.3, 0.35)) * 1.8), 3.0); // a wet glint
  gl_FragColor = vec4(col, smoothstep(1.0, 0.7, r));
}`,jd=$+`
in vec4 iPos; in vec4 iNrm; in vec4 iDir; // centre (render space) + radius ; ground normal + seed ; travel dir xz, stretch, opacity
out vec2 vQ; out vec3 vWorld; out vec3 vN; out vec2 vS;
void main(){
  vec3 n = normalize(iNrm.xyz); vec3 d0 = vec3(iDir.x, 0.0, iDir.y); vec3 t = d0 - n * dot(d0, n); float tl = length(t); t = tl > 1e-3 ? t / tl : normalize(cross(n, vec3(0.0, 0.0, 1.0))); vec3 b = cross(n, t);
  vec3 c = iPos.xyz + uOrigin; float d = distance(c, uCamWorld);
  vec3 wp = c + (t * position.x * (1.0 + iDir.z) + b * position.y) * iPos.w + n * (0.035 + d * 0.0016);
  vQ = position.xy; vWorld = wp; vN = n; vS = vec2(iNrm.w, iDir.w);
  gl_Position = projectionMatrix * viewMatrix * vec4(wp - uOrigin, 1.0);
}`,Md=$+Tc+Ec+`
in vec2 vQ; in vec3 vWorld; in vec3 vN; in vec2 vS;
void main(){
  float r = length(vQ), a = atan(vQ.y, vQ.x), sd = vS.x * 37.0;
  // a pooled core with ragged lobes and thin thrown fingers, and satellite drops around it
  float edge = 0.4 + 0.13 * sin(a * 3.0 + sd) + 0.08 * sin(a * 7.0 + sd * 2.3) + 0.3 * pow(0.5 + 0.5 * sin(a * 11.0 + sd * 5.1), 7.0) + 0.06 * (vnoise(vQ * 9.0 + sd) - 0.5);
  float m = smoothstep(edge, edge * 0.84, r);
  vec2 g = vQ * 4.2 + sd; vec2 ci = floor(g), cf = fract(g) - 0.5; float hh = hash12(ci); vec2 off = (hash22(ci + 3.7) - 0.5) * 0.55;
  float sat = step(0.58, hh) * smoothstep(0.05 + 0.17 * fract(hh * 7.3), 0.02, length(cf - off)) * smoothstep(1.0, 0.72, r);
  float al = max(m, sat) * vS.y; if (al < 0.02) discard;
  vec3 N = normalize(vN), V = normalize(uCamWorld - vWorld), H = normalize(uSunDir + V);
  vec3 sunC = uSunIllum * sunTransmittance(vWorld.y); float sh = terrainShadow(vWorld + N * 0.5) * cloudShadow(vWorld);
  vec3 alb = mix(vec3(0.3, 0.007, 0.009), vec3(0.15, 0.004, 0.006), smoothstep(edge * 0.3, edge, r) * 0.6 + 0.25 * vnoise(vQ * 5.0 + sd));
  vec3 col = alb * (sunC * sh * saturate(dot(N, uSunDir)) + shIrradiance(N)) / PI + sunC * sh * 0.09 * pow(saturate(dot(N, H)), 70.0) * m;
  gl_FragColor = vec4(col, al * 0.93);
}`,Nd=240,Pd=72,Fd=[-1,-1,0,1,-1,0,1,1,0,-1,1,0],Id=class{constructor(e){let t=this.e=e;e.modules.push(this),this.env=null,this.on=!0,this.head=0,this.shead=0,this.live=0,this.stains=0,this.P=new Float64Array(720),this.V=new Float32Array(720),this.A=new Float32Array(720),this.SP=new Float64Array(216),this.SA=new Float32Array(216);let n=(e,t)=>{let n=new Yi;n.setAttribute(`position`,new ir(Fd,3)),n.setIndex([0,1,2,0,2,3]);let r={};for(let i of t)r[i]=new Jr(new Float32Array(e*4),4),r[i].setUsage(ze),n.setAttribute(i,r[i]);return n.instanceCount=e,[n,r]},[r,i]=n(Nd,[`iPos`,`iVel`]);this.da=i;let a=t.makeMat({vs:kd,fs:Ad,uniforms:{...t.G},transparent:!0,side:2});this.drops=new Wr(r,a.main),this.drops.visible=!1,t.add(`fx`,this.drops,a);let[o,s]=n(Pd,[`iPos`,`iNrm`,`iDir`]);this.sa=s;let c=t.makeMat({vs:jd,fs:Md,uniforms:{...t.G},transparent:!0,side:2});this.spl=new Wr(o,c.main),this.spl.visible=!1,this.spl.renderOrder=-1,t.add(`fx`,this.spl,c)}spray(e,t,n={}){if(!this.on)return;let r=n.dir||[0,1,0],i=n.carry||[0,0,0],a=n.power??.5;for(let n=0;n<t;n++){let t=this.head;this.head=(this.head+1)%Nd;let n=Math.random()*6.283,o=Math.random()*1.2,s=(1.5+Math.random()*5.5)*(.5+a),c=Math.cos(n)*Math.cos(o),l=Math.sin(o),u=Math.sin(n)*Math.cos(o),d=.2+.45*Math.random();this.P[t*3]=e[0]+c*.08,this.P[t*3+1]=e[1]+.06+l*.08,this.P[t*3+2]=e[2]+u*.08,this.V[t*3]=c*s+r[0]*s*.5+i[0]*d,this.V[t*3+1]=l*s+r[1]*s*.5+Math.max(0,i[1])*d*.5+1.2,this.V[t*3+2]=u*s+r[2]*s*.5+i[2]*d,this.A[t*3]=0,this.A[t*3+1]=2.6+Math.random()*1.4,this.A[t*3+2]=(.012+.03*Math.random()*Math.random())*(.8+.5*a)}this.live=4}stain(e,t,n,r=0){if(!this.on||!this.env)return;let i=this.env.height,a=e[0],o=e[2],s=i(a,o),c=this.shead;this.shead=(this.shead+1)%Pd;let l=i(a-.4,o)-i(a+.4,o),u=i(a,o-.4)-i(a,o+.4),d=Math.hypot(l,.8,u),f=Math.hypot(n[0],n[2])||1;this.SP[c*3]=a,this.SP[c*3+1]=s,this.SP[c*3+2]=o,this.SA[c*3]=0,this.SA[c*3+1]=t,this.SA[c*3+2]=1,this.sa.iNrm.array.set([l/d,.8/d,u/d,Math.random()],c*4),this.sa.iDir.array.set([n[0]/f,n[2]/f,r,0],c*4),this.sa.iNrm.needsUpdate=!0,this.stains=Math.min(Pd,this.stains+1)}clear(){this.A.fill(0),this.SA.fill(0),this.live=0,this.stains=0,this.drops.visible=!1,this.spl.visible=!1,this.da.iPos.array.fill(0),this.sa.iPos.array.fill(0),this.sa.iDir.array.fill(0),this.da.iPos.needsUpdate=this.sa.iPos.needsUpdate=this.sa.iDir.needsUpdate=!0}update(e,t){let n=t.origin;if(this.live>0){let t=this.P,r=this.V,i=this.A,a=this.da.iPos.array,o=this.da.iVel.array,s=this.env,c=!1;for(let l=0;l<Nd;l++){if(i[l*3+1]<=0){a[l*4+3]=0;continue}let u=i[l*3]+=e;if(u>=i[l*3+1]){i[l*3+1]=0,a[l*4+3]=0;continue}c=!0;let d=Math.exp(-.5*e);if(r[l*3]*=d,r[l*3+1]=r[l*3+1]*d-9.81*e,r[l*3+2]*=d,t[l*3]+=r[l*3]*e,t[l*3+1]+=r[l*3+1]*e,t[l*3+2]+=r[l*3+2]*e,s&&u>.04&&r[l*3+1]<0){let e=s.height(t[l*3],t[l*3+2]);if(t[l*3+1]<=e+.02){if(!(s.sea!=null&&e<s.sea)){let n=Math.hypot(r[l*3],r[l*3+2]);this.stain([t[l*3],e,t[l*3+2]],i[l*3+2]*(7+8*Math.random()),[r[l*3],0,r[l*3+2]],Math.min(2.2,n/(Math.abs(r[l*3+1])+1.5)))}i[l*3+1]=0,a[l*4+3]=0;continue}}let f=Math.hypot(r[l*3],r[l*3+1],r[l*3+2])||1;a[l*4]=t[l*3]-n.x,a[l*4+1]=t[l*3+1]-n.y,a[l*4+2]=t[l*3+2]-n.z,a[l*4+3]=i[l*3+2],o[l*4]=r[l*3]/f,o[l*4+1]=r[l*3+1]/f,o[l*4+2]=r[l*3+2]/f,o[l*4+3]=Math.min(3.5,f*.12)}this.da.iPos.needsUpdate=!0,this.da.iVel.needsUpdate=!0,c||--this.live}if(this.drops.visible=this.live>0,this.stains>0){let t=this.sa.iPos.array,r=this.sa.iDir.array;for(let i=0;i<Pd;i++){if(!this.SA[i*3+2]){t[i*4+3]=0;continue}let a=this.SA[i*3]=Math.min(1,this.SA[i*3]+e*4),o=1-(1-a)*(1-a);t[i*4]=this.SP[i*3]-n.x,t[i*4+1]=this.SP[i*3+1]-n.y,t[i*4+2]=this.SP[i*3+2]-n.z,t[i*4+3]=this.SA[i*3+1]*(.45+.55*o),r[i*4+3]=Math.min(1,a*3)}this.sa.iPos.needsUpdate=!0,this.sa.iDir.needsUpdate=!0}this.spl.visible=this.stains>0}},Ld=$+`
in vec4 iPos; in vec4 iVel; // centre (render space) + half width ; unit direction + length/width
out vec2 vQ; out vec3 vWorld; out float vFade;
void main(){
  vec3 c = iPos.xyz + uOrigin; vec3 toCam = uCamWorld - c; float d = length(toCam); toCam /= max(d, 1e-3); vec3 ax = iVel.xyz; vec3 sd = cross(ax, toCam); float sl = length(sd); sd = sl > 1e-3 ? sd / sl : vec3(1.0, 0.0, 0.0);
  vec3 wp = c + (sd * position.x + ax * position.y * iVel.w) * iPos.w; vQ = position.xy; vWorld = wp; vFade = smoothstep(4.0, 14.0, d) * (1.0 - smoothstep(70.0, 105.0, d));
  gl_Position = projectionMatrix * viewMatrix * vec4(wp - uOrigin, 1.0);
}`,Rd=$+Tc+Ec+`
in vec2 vQ; in vec3 vWorld; in float vFade; uniform float uAmt;
void main(){
  float a = (1.0 - abs(vQ.x)) * (1.0 - vQ.y * vQ.y) * vFade * uAmt; if (a < 0.004) discard;
  vec3 sunC = uSunIllum * sunTransmittance(vWorld.y);
  vec3 col = vec3(0.92, 0.95, 1.0) * (sunC * 0.55 * cloudShadow(vWorld) + shIrradiance(vec3(0.0, 1.0, 0.0))) / PI;
  gl_FragColor = vec4(col, a * 0.66);
}`,zd=340,Bd=100,Vd=46,Hd=class{constructor(e){let t=this.e=e;e.modules.push(this),this.w=[0,0],this.amt=0,this.P=new Float64Array(zd*3),this.S=new Float32Array(zd*3),this.seeded=!1;let n=new Yi;n.setAttribute(`position`,new ir([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),n.setIndex([0,1,2,0,2,3]),this.aP=new Jr(new Float32Array(zd*4),4),this.aV=new Jr(new Float32Array(zd*4),4),this.aP.setUsage(ze),this.aV.setUsage(ze),n.setAttribute(`iPos`,this.aP),n.setAttribute(`iVel`,this.aV),n.instanceCount=zd,this.uAmt={value:0};let r=t.makeMat({vs:Ld,fs:Rd,uniforms:{...t.G,uAmt:this.uAmt},transparent:!0,side:2});this.mesh=new Wr(n,r.main),this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(`fx`,this.mesh,r);for(let e=0;e<zd;e++)this.S[e*3]=.7+.6*Math.random(),this.S[e*3+1]=.05+.11*Math.random()*Math.random(),this.S[e*3+2]=Math.random()*6.28}set(e,t){this.w[0]=e,this.w[1]=t}update(e,t){let n=Math.hypot(this.w[0],this.w[1]),r=Math.max(0,Math.min(1,(n-9)/8));if(this.amt+=(r-this.amt)*Math.min(1,e*1.2),this.uAmt.value=this.amt,this.mesh.visible=this.amt>.01,!this.mesh.visible){this.seeded=!1;return}let i=t.camWorld,a=t.origin,o=this.P,s=this.S,c=this.aP.array,l=this.aV.array,u=this.w[0]/Math.max(n,.001),d=this.w[1]/Math.max(n,.001),f=this.t=(this.t||0)+e;if(!this.seeded){for(let e=0;e<zd;e++)o[e*3]=i.x+(Math.random()*2-1)*Bd,o[e*3+1]=i.y+(Math.random()*2-1)*Vd,o[e*3+2]=i.z+(Math.random()*2-1)*Bd;this.seeded=!0}for(let t=0;t<zd;t++){let r=s[t*3],p=s[t*3+2],m=Math.sin(f*.9+p)*1.6;o[t*3]+=this.w[0]*r*e,o[t*3+1]+=m*e,o[t*3+2]+=this.w[1]*r*e;let h=o[t*3]-i.x,g=o[t*3+1]-i.y,_=o[t*3+2]-i.z;h>Bd?h-=200:h<-100&&(h+=200),g>Vd?g-=92:g<-46&&(g+=92),_>Bd?_-=200:_<-100&&(_+=200),(Math.abs(h)>Bd||Math.abs(g)>Vd||Math.abs(_)>Bd)&&(h=(Math.random()*2-1)*Bd,g=(Math.random()*2-1)*Vd,_=(Math.random()*2-1)*Bd),o[t*3]=i.x+h,o[t*3+1]=i.y+g,o[t*3+2]=i.z+_,c[t*4]=o[t*3]-a.x,c[t*4+1]=o[t*3+1]-a.y,c[t*4+2]=o[t*3+2]-a.z,c[t*4+3]=s[t*3+1];let v=Math.hypot(u,m/Math.max(n,1),d)||1;l[t*4]=u/v,l[t*4+1]=m/Math.max(n,1)/v,l[t*4+2]=d/v,l[t*4+3]=(4.5+.55*n)*r/s[t*3+1]}this.aP.needsUpdate=!0,this.aV.needsUpdate=!0}},Ud=$+`
uniform vec4 uFlag; // wind dir xz, length, height
vec3 flagPos(float u, float v){
  vec3 w = vec3(uFlag.x, 0.0, uFlag.y), side = vec3(-uFlag.y, 0.0, uFlag.x); float t = uTime;
  float a = 0.03 + 0.3 * pow(u, 1.25);
  float wv = sin(u * 7.5 - t * 6.2 + v * 1.4) * 0.6 + sin(u * 13.0 - t * 9.7 + v * 3.1 + 1.7) * 0.28 + sin(u * 3.1 - t * 2.3) * 0.35;
  float sag = 0.22 * u * u * (1.0 + 0.35 * sin(t * 1.3)) + 0.05 * u * sin(u * 9.0 - t * 5.0);
  return w * (u * uFlag.z * (0.94 - 0.05 * abs(wv) * u)) + side * (a * wv) + vec3(0.0, (v - 0.5) * uFlag.w * (1.0 - 0.06 * u * sin(u * 6.0 - t * 4.0 + v * 6.0)) - sag, 0.0);
}
in vec4 aInfo; // kind (0 ground target, 1 pole, 2 flag), u, v, tone
out vec3 vWorld; out vec3 vN; out vec4 vInfo;
void main(){
  vec3 p = position, n = normal;
  if (aInfo.x > 1.5) { float u = aInfo.y, v = aInfo.z, e = 0.02; vec3 q = flagPos(u, v), du = flagPos(u + e, v) - q, dv = flagPos(u, v + e) - q; p += q; n = normalize(cross(du, dv)); }
  vec4 wp = modelMatrix * vec4(p, 1.0); vWorld = wp.xyz + uOrigin;
  if (aInfo.x < 0.5) { float lift = min(7.0, length(uCamWorld - vWorld) * 0.004); wp.y += lift; vWorld.y += lift; } // distant terrain is drawn from coarser tiles: keep the paint above it
  vN = n; vInfo = aInfo;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,Wd=$+Tc+Ec+`
in vec3 vWorld; in vec3 vN; in vec4 vInfo; uniform vec3 uMark;
void main(){
#ifdef DEPTH_PASS
#else
  vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N; vec3 Vv = uCamWorld - vWorld; float dist = length(Vv); vec3 V = Vv / dist; int kind = int(vInfo.x + 0.5);
  vec3 alb; float rough = 0.6, sss = 0.0, glow = 0.0; vec3 sssC = vec3(0.0);
  if (kind == 0) { alb = mix(uMark, vec3(0.92), step(0.5, vInfo.w)); rough = 0.85; glow = 0.34; }               // painted target: reads from altitude even in shade
  else if (kind == 1) { alb = vInfo.w > 0.5 ? uMark : vec3(0.78, 0.79, 0.8); rough = vInfo.w > 0.5 ? 0.5 : 0.32; }  // pole, base and finial
  else { float u = vInfo.y, v = vInfo.z; vec2 c = vec2((u - 0.42) * 1.64, v - 0.5);                                 // flag: orange field, white disc, orange centre, dark hoist band
    float r = length(c); alb = mix(uMark, vec3(0.93), smoothstep(0.335, 0.325, r)); alb = mix(alb, uMark, smoothstep(0.125, 0.115, r)); alb = mix(alb, vec3(0.05), step(u, 0.035));
    float weave = fbm2(vec2(u, v) * vec2(90.0, 60.0)); alb *= 0.93 + 0.1 * weave; rough = 0.7; sss = 0.7; sssC = alb * 1.2; glow = 0.06; }
  Surf s; s.albedo = alb; s.N = N; s.rough = rough; s.ao = 1.0; s.f0 = 0.04; s.sss = sss; s.sssColor = sssC; s.skyVis = 1.0;
  s.shadow = terrainShadow(vWorld) * csmShadow(vWorld + N * 0.05, dist, 1.0) * cloudShadow(vWorld);
  vec3 col = shadeSurface(s, vWorld, V); float lum = max(uSunIllum.r, max(uSunIllum.g, uSunIllum.b));
  col += alb * glow * (lum * 0.25 + 0.04);
  gl_FragColor = vec4(col, 1.0);
#endif
}`,Gd=$+`
out vec3 vWorld; out vec2 vQ;
void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vWorld = wp.xyz + uOrigin; vQ = uv; gl_Position = projectionMatrix * viewMatrix * wp; }`,Kd=$+`
in vec3 vWorld; in vec2 vQ; uniform vec3 uMark;
void main(){
  float d = length(uCamWorld - vWorld), far = smoothstep(220.0, 1100.0, d), x = abs(vQ.x - 0.5) * 2.0;
  float a = pow(1.0 - x, 2.2) * (1.0 - smoothstep(0.55, 1.0, vQ.y)) * smoothstep(0.0, 0.03, vQ.y) * far * (0.5 + 0.08 * sin(uTime * 2.0 - vQ.y * 30.0));
  float lum = max(uSunIllum.r, max(uSunIllum.g, uSunIllum.b));
  gl_FragColor = vec4(uMark * (lum * 0.5 + 0.1) * a, a * 0.55);
}`,qd=class{constructor(e,t,n){this.e=e;let r=this.lz=t.lz,i=[],a=[],o=[],s=[];e.modules.push(this);let c=(e,t,n,r,s,c,l,u,d,f)=>(i.push(e,t,n),a.push(r,s,c),o.push(l,u,d,f),i.length/3-1),l=(e,t)=>n.height(r.x+e,r.z+t)-r.y,u=(e,t,n,r=128,a=0,o=6.2832)=>{let u=i.length/3;for(let i=0;i<=r;i++){let s=a+(o-a)*i/r,u=Math.cos(s),d=Math.sin(s);c(u*e,l(u*e,d*e)+.22,d*e,0,1,0,0,0,0,n),c(u*t,l(u*t,d*t)+.22,d*t,0,1,0,0,0,0,n)}for(let e=0;e<r;e++){let t=u+e*2;s.push(t,t+2,t+1,t+1,t+2,t+3)}};u(0,3.2,0,32),u(3.2,6.4,1,48),u(12.5,15,0,96),u(57,60,1,128),u(r.r-3.5,r.r,0,192);for(let e=0;e<4;e++){let t=e*1.5708+.7854;for(let e=0;e<9;e++)u(22+e*16,30+e*16,e%2,3,t-1.6/(22+e*16),t+1.6/(22+e*16))}let d=(e,t,n,r,a,o=12)=>{let l=i.length/3;for(let i=0;i<2;i++)for(let s=0;s<=o;s++){let l=s/o*6.2832,u=Math.cos(l),d=Math.sin(l),f=i?r:n;c(u*f,i?t:e,d*f,u,.02,d,1,0,0,a)}for(let e=0;e<o;e++){let t=l+e,n=t+o+1;s.push(t,n,t+1,t+1,n,n+1)}},f=l(0,0);d(f-.4,f+.18,.34,.3,1),d(f+.18,f+.32,.16,.12,0),d(f+.32,f+10,.075,.045,0,14),d(f+10-2.5,f+10-2.42,.062,.062,1),d(f+10-.2,f+10-.12,.06,.06,1);{let e=i.length/3,t=.11,n=f+10+.1;for(let e=0;e<=6;e++)for(let r=0;r<=10;r++){let i=e/6*Math.PI,a=r/10*6.2832,o=Math.sin(i)*Math.cos(a),s=Math.cos(i),l=Math.sin(i)*Math.sin(a);c(o*t,n+s*t,l*t,o,s,l,1,0,0,1)}for(let t=0;t<6;t++)for(let n=0;n<10;n++){let r=e+t*11+n,i=r+11;s.push(r,r+1,i,r+1,i+1,i)}}let p=2.3,m=this.wind=new lt(.86,.5).normalize(),h=f+10-.2-p/2;{let e=i.length/3;for(let e=0;e<=30;e++)for(let t=0;t<=16;t++)c(m.x*.05,h,m.y*.05,0,0,1,2,e/30,t/16,0);for(let t=0;t<30;t++)for(let n=0;n<16;n++){let r=e+t*17+n,i=r+16+1;s.push(r,i,r+1,r+1,i,i+1)}}let g=new gr;g.setAttribute(`position`,new ir(i,3)),g.setAttribute(`normal`,new ir(a,3)),g.setAttribute(`aInfo`,new ir(o,4)),g.setIndex(s),g.boundingSphere=new cr(new q,r.r+40);let _={value:new q(.95,.24,.03)},v={value:new Y(m.x,m.y,3.6,p)},y=e.makeMat({vs:Ud,fs:Wd,uniforms:{...e.G,uMark:_,uFlag:v},side:2,shadow:!0});this.mesh=new Wr(g,y.main),this.mesh.frustumCulled=!1,this.mesh.userData.shadowLod=2,e.add(`props`,this.mesh,y);let b=new gr,x=[],S=[],C=[];for(let e=0;e<2;e++){let t=+!e,n=+!!e,r=x.length/3;x.push(-t*9,f,-n*9,t*9,f,n*9,t*9,f+520,n*9,-t*9,f+520,-n*9),S.push(0,0,1,0,1,1,0,1),C.push(r,r+1,r+2,r,r+2,r+3)}b.setAttribute(`position`,new ir(x,3)),b.setAttribute(`uv`,new ir(S,2)),b.setIndex(C),b.boundingSphere=new cr(new q(0,260,0),300);let w=e.makeMat({vs:Gd,fs:Kd,uniforms:{...e.G,uMark:_},transparent:!0,side:2});this.beam=new Wr(b,w.main),this.beam.frustumCulled=!1,e.add(`fx`,this.beam,w)}update(e,t){let n=this.lz;this.mesh.position.set(n.x-t.origin.x,n.y-t.origin.y,n.z-t.origin.z),this.mesh.updateMatrixWorld(!0),this.beam.position.copy(this.mesh.position),this.beam.updateMatrixWorld(!0)}},Jd=`modulepreload`,Yd=function(e,t){return new URL(e,t).href},Xd={},Zd=function(e){return e.pathname.endsWith(`.css`)},Qd=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},$d=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Yd(t,n);let r=s(t),i=Zd(r);return Qd(Xd,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Jd,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ef=class{constructor(e){this.canvas=e,this.worker=null}genWorld(e,t=()=>{}){return this.worker||=new Worker(new URL(new URL(`worker-DzGiKfIo-b9ea4f.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),new Promise(n=>{let r=e=>{let i=e.data;i.type===`progress`?t(i.p*.7,i.msg):i.type===`world`&&(this.worker.removeEventListener(`message`,r),n(i.world))};this.worker.addEventListener(`message`,r),this.worker.postMessage({type:`generate`,opts:e})})}async boot(e,t=()=>{}){this.opts=e;let n=performance.now(),[r,i]=await Promise.all([this.genWorld(e,t),tl()]);this.world=r,this.manifest=i,this.genMs=performance.now()-n,this.engine&&this.terrain&&this.teardown();let a=this.engine=this.engine||new Zc(this.canvas,{quality:e.quality,capture:e.capture,width:e.width,height:e.height,scale:e.scale,drs:e.drs,noJitter:e.noJitter,noMotionBlur:e.capture}),o=Ml(r.P.tod);return a.setSun(o,(jl[r.P.tod]||jl.midday).turbidity),a.G.uHaze.value.set(7,.9,r.P.floor/1e3,a.G.uHaze.value.w),r.P.biome===`snowy`&&a.G.uGroundAlbedo.value.set(.55,.57,.6),t(.72,`Loading materials`),this.terrain=new ul(a,r),await this.terrain.init(i,e=>t(.72+e*.1,`Loading materials`)),this.clouds=new hl(a,r),t(.86,`Growing forests`),this.veg=new Yl(a,r,this.worker),await this.veg.init(i),this.rocks=new eu(a,r),await this.rocks.init(i,this.terrain),this.grass=new ru(a,r,this.terrain),this.water=new uu(a,r,this.terrain),this.character=new wd(a),this.character.visible=!1,this.puffs=new Od(a),this.blood=new Id(a),this.windFx=new Hd(a),this.landing=new qd(a,this.world,{height:(e,t)=>this.groundY(e,t)}),t(1,`Ready`),this}groundY(e,t){return Il(this.world,e,t)}setCamera(e,t,n=70){let r=this.engine;r.camWorld.set(e[0],e[1],e[2]),r.camera.fov=n,r.camera.up.set(0,1,0),r.camera.position.set(0,0,0),r.camera.lookAt(t[0]-e[0],t[1]-e[1],t[2]-e[2])}spine(e){let t=this.world,n=Math.max(0,Math.min(t.spineN-1,Math.round(e/10)));return[t.spine[n*3],t.spine[n*3+1],t.spine[n*3+2]]}spot(e,t=0){let n=this.world,r=n.P,i=n.ctrl,a=n.ctrl2,o=[];for(let t=20;t<n.spineN-5;t+=6){let s=n.spine[t*3],c=n.spine[t*3+2];for(let t=-360;t<=360;t+=30){let n=s+t,l=Math.floor((n-r.x0)/r.cs),u=Math.floor((c-r.z0)/r.cs);if(l<4||u<4||l>=r.nx-4||u>=r.nz-4)continue;let d=0,f=0,p=0,m=0,h=0,g=0;for(let e=-3;e<=3;e+=3)for(let t=-3;t<=3;t+=3){let n=((u+t)*r.nx+l+e)*4;d+=i[n+2],f+=i[n+3],m+=i[n+1],p+=a[n+2],h+=a[n+1],g++}d/=g*255,f/=g*255,m/=g*255,p=p/(g*255)*2,h/=g*255;let _=this.groundY(n,c),v=-1;e===`forest`?v=d-p*.3:e===`meadow`?v=d<.05&&f<.03&&p<.22&&m<.15&&h<.05&&_<r.treeLine-60?1-p-Math.abs(t)/2e3:-1:e===`cliff`?v=f<.3?p-f:-1:e===`snow`?v=f>.95&&p<.5?1-Math.abs(p-.3):-1:e===`snowrock`?v=f>.3&&f<.7?p*.5+.5-Math.abs(f-.5):-1:e===`treeline`?v=d>.15&&d<.5&&Math.abs(_-r.treeLine)<120?1-Math.abs(_-r.treeLine)/200:-1:e===`scree`&&(v=m),v>0&&o.push({v,x:n,y:_,z:c})}}o.sort((e,t)=>t.v-e.v);let s=[];for(let e of o)if(s.every(t=>Math.hypot(t.x-e.x,t.z-e.z)>500)&&s.push(e),s.length>t)break;return s[t]||s[0]||{x:n.spine[0],y:n.spine[1],z:600}}features(){let e=this.world;return{P:e.P,segs:e.segs,waterfalls:e.waterfalls,pools:e.pools,lz:e.lz,gates:e.gates,arches:e.arches,exit:e.exit,rivers:e.rivers.map(e=>e.length/5)}}place(e){if(Array.isArray(e))return e;let t,n;if(e.spot){let r=this.spot(e.spot,e.n||0);t=r.x+(e.dx||0),n=r.z+(e.dz||0)}else if(e.wf!==void 0){let r=this.world.waterfalls[Math.min(e.wf,this.world.waterfalls.length-1)]||{x1:0,z1:1e3},i=Math.hypot(r.x1-r.x0,r.z1-r.z0)||1,a=(r.x1-r.x0)/i,o=(r.z1-r.z0)/i;t=(e.top?r.x0:r.x1)+a*(e.along||0)-o*(e.side||0)+(e.dx||0),n=(e.top?r.z0:r.z1)+o*(e.along||0)+a*(e.side||0)+(e.dz||0)}else if(e.river!==void 0){let r=this.world.rivers[0],i=r.length/5,a=Math.max(1,Math.min(i-2,Math.round(e.river*(i-1)))),o=r[(a+1)*5]-r[(a-1)*5],s=r[(a+1)*5+2]-r[(a-1)*5+2],c=Math.hypot(o,s)||1;t=r[a*5]+o/c*(e.along||0)-s/c*(e.side||0),n=r[a*5+2]+s/c*(e.along||0)+o/c*(e.side||0)}else if(e.arch!==void 0){let t=this.world.arches[Math.min(e.arch,this.world.arches.length-1)];return[t.x+(e.dx||0),t.y+(e.dy||0),t.z+(e.dz||0)]}else e.abs?(t=e.abs[0],n=e.abs[1]):e.lz?(t=this.world.lz.x+(e.dx||0),n=this.world.lz.z+(e.dz||0)):(t=this.spine(e.z)[0]+(e.side||0),n=e.z);let r=e.alt===void 0?this.groundY(t,n)+(e.agl??2):e.alt;return[t,r,n]}async settle(e){let t=this.engine;t.camWorld.set(e[0],e[1],e[2]);for(let e=0;e<400&&(this.veg.update(0,t),this.rocks.update(0,t),!(!this.veg.pending.size&&!this.veg.uploadQ.length&&e>3));e++)await new Promise(e=>setTimeout(e,25))}async shot(e){let t=this.engine;if(e.setup?await this.applySetup(e.setup):this.character&&(this.character.visible=!1),e.sim!==void 0)return this.simShot(e);let n=this.place(e.at),r=e.look?this.place(e.look):[n[0],n[1]-.2,n[2]+1];this.setCamera(n,r,e.fov||60),t.aglHint=n[1]-this.groundY(n[0],n[2]),t.opts.noMotionBlur=!0,await this.settle(n),t.post.reset=1,t.post.resetExpo=!0,this.frames(2,1/60),t.post.resetExpo=!1,this.clouds&&(this.clouds.reset=1);let i=e.frames||16;for(let t=0;t<i;t++)this.frames(1,e.dt??5e-4),t%4==3&&await new Promise(e=>setTimeout(e,0));return{pos:n.map(e=>+e.toFixed(1)),look:r.map(e=>+e.toFixed(1)),nodes:this.terrain.count,trees:this.veg.treeCount}}async simShot(e){let t=this.engine,n=this.world;if(!this._sim){let{makeEnv:t}=await $d(async()=>{let{makeEnv:e}=await import(`./env-DW-jlwou-b9ea4f.js`).then(e=>e.t);return{makeEnv:e}},__vite__mapDeps([0,1]),import.meta.url),{Autopilot:r}=await $d(async()=>{let{Autopilot:e}=await import(`./autopilot-DHiilXQt.js`).then(e=>e.n);return{Autopilot:e}},[],import.meta.url),{ChaseCam:i}=await $d(async()=>{let{ChaseCam:e}=await import(`./camera-C0nNI1Nh-b9ea4f.js`).then(e=>e.n);return{ChaseCam:e}},__vite__mapDeps([2,1]),import.meta.url),{step:a}=await $d(async()=>{let{step:e}=await Promise.resolve().then(()=>Eu);return{step:e}},void 0,import.meta.url),o=t(n);this._sim={env:o,ap:new r(n,o,e.ap||{}),st:Hu([n.exit.x,n.exit.y,n.exit.z],Math.PI),cam:new i(this),step:a},this._sim.st.vel=[0,0,22]}let r=this._sim,i=r.st,a={};for(;i.t<e.sim-1.2&&i.mode!==`landed`&&i.mode!==`crashed`;)a=r.ap.input(i),r.step(i,a,r.env);this.character.visible=!0,t.opts.noMotionBlur=!1;let o=e=>{for(let e=0;e<4;e++)a=r.ap.input(i),r.step(i,a,r.env);r.cam.update(i,1/60,r.env),this.character.sync(i,a,1/60),t.G.uPlayer.value.set(i.pos[0],i.pos[1],i.pos[2],1),t.fx.blurScale=Math.min(1,i.speed/70),e&&t.render(1/60)};for(let e=0;e<50;e++)o(!1);await this.settle([t.camWorld.x,t.camWorld.y,t.camWorld.z]),t.post.reset=1,t.post.resetExpo=!0,o(!0),t.post.resetExpo=!1;let s=e.frames||14;for(let e=0;e<s;e++)o(!0),e%4==3&&await new Promise(e=>setTimeout(e,0));return{t:+i.t.toFixed(1),mode:i.mode,z:Math.round(i.pos[2]),agl:Math.round(i.agl),kmh:Math.round(i.hSpeed*3.6)}}async applySetup(e){if(e.cloud!==void 0&&this.clouds.setCoverage(e.cloud),!e.pilot){this.character.visible=!1;return}let t=e.pilot,n=this.place(t.at),r=Hu(n,Math.PI+(t.yaw||0)*Math.PI/180);if(r.mode=t.mode||`wingsuit`,r.wing=+(r.mode===`wingsuit`),r.airspeed=t.speed??50,r.q=Fu(Math.PI+(t.yaw||0)*Math.PI/180,(t.pitch??-18)*Math.PI/180),t.bank){let e=-t.bank*Math.PI/360;Nu(r.q,[0,0,Math.sin(e),Math.cos(e)],r.q)}r.mode===`canopy`&&(r.deployT=t.deployT??10,r.vel=t.vel||[0,-4.5,12],r.agl=t.aglState??60,r.canopy={infl:t.infl??1,heading:(t.yaw||0)*Math.PI/180,bank:(t.bank||0)*Math.PI/180,brakeL:t.brakeL??t.brake??0,brakeR:t.brakeR??t.brake??0,swing:0},r.q=Fu(Math.PI+(t.yaw||0)*Math.PI/180,t.bodyPitch===void 0?Math.PI*.47:t.bodyPitch*Math.PI/180),r.airspeed=t.vel?Math.hypot(...t.vel):12,t.sf&&(r.sf=t.sf)),this.character.visible=!0;for(let e=0;e<60;e++)this.character.sync(r,{pitch:t.inPitch||0,roll:t.inRoll||0,flare:t.flare||0},.05);this.engine.G.uPlayer.value.set(n[0],n[1],n[2],1)}teardown(){let e=this.engine,t=new Set,n=new Set(Object.values(e.G));for(let r in e.groups){let i=e.groups[r];for(let r of[...i.children]){i.remove(r),r.geometry&&r.geometry.dispose();let a=r.userData.mats||{};for(let r of Object.values(a))if(r&&!t.has(r)){t.add(r);for(let t of Object.values(r.uniforms||{})){if(n.has(t))continue;let r=t.value;r&&r.isTexture&&r!==e.white&&!r.isRenderTargetTexture&&r.dispose()}r.dispose()}}}for(let e of[this.terrain&&this.terrain.sTex,this.terrain&&this.terrain.hTex])e&&e.dispose();this.veg&&(this.veg.impA&&this.veg.impA.dispose(),this.veg.impNrm&&this.veg.impNrm.dispose(),this.veg.dead=!0),this.clouds&&(this.clouds.noise.dispose(),this.clouds.shadowRT.dispose(),this.clouds.rts&&this.clouds.rts.forEach(e=>e.dispose())),e.modules.length=0,e.rebaseCbs.length=0,e.post.cloudTex=null,e.G.uCloudShadowTex.value=e.white,e.frame=0,e.post.reset=1,this.terrain=this.veg=this.rocks=this.grass=this.water=this.clouds=this.character=this.puffs=this.blood=this.windFx=this.landing=null}warmup(){let e=this.engine,t=[];for(let n in e.groups)for(let r of e.groups[n].children)t.push([r,r.visible,r.geometry.instanceCount]),r.visible=!0,r.geometry.isInstancedBufferGeometry&&!(r.geometry.instanceCount>0)&&(r.geometry.instanceCount=1);this.puffs&&(this.puffs.live=3),this.blood&&(this.blood.drops.visible=!0,this.blood.spl.visible=!0),this.windFx&&(this.windFx.mesh.visible=!0);let n=this.character.visible,r=this.character.state;this.character.visible=!0,this.character.state={deployT:9,canopy:{infl:1,heading:0,bank:0}};let i=this.veg.update;this.veg.update=()=>{};let a=this.rocks.update;this.rocks.update=()=>{},e.render(1/60),e.render(1/60),this.veg.update=i,this.rocks.update=a,this.character.visible=n,this.character.state=r;for(let[e,n,r]of t)e.visible=n,r!==void 0&&(e.geometry.instanceCount=r);e.post.reset=1}frames(e,t=1/60){for(let n=0;n<e;n++)this.engine.render(t)}},tf=new URLSearchParams(location.search);{let e=(location.hash||``).replace(`#`,``).toLowerCase().split(`-`);if(e[0]===`benchmark`){tf.set(`benchmark`,`1`);for(let t of e.slice(1))/^\d+x\d+$/.test(t)?tf.set(`res`,t):[`medium`,`high`,`ultra`,`cinematic`].includes(t)?tf.set(`quality`,t):[`short`,`long`,`epic`].includes(t)&&tf.set(`length`,t)}}var nf=document.getElementById(`gl`),rf=new ef(nf);if(window.__sf=rf,window.__sfReady=!1,tf.has(`capture`)){let e=+tf.get(`w`)||1920,t=+tf.get(`h`)||1080;nf.style.width=e+`px`,nf.style.height=t+`px`,rf.boot({map:tf.get(`map`)||void 0,length:tf.get(`length`)||`short`,seed:tf.get(`seed`)||`skyfall`,biome:tf.get(`biome`)||`mixed`,tod:tf.get(`tod`)||`midday`,quality:tf.get(`quality`)||`cinematic`,capture:!0,width:e,height:t,scale:+tf.get(`scale`)||1},(e,t)=>{window.__sfProgress=[e,t]}).then(()=>{window.__sfReady=!0}).catch(e=>{window.__sfError=String(e.stack||e)})}else $d(()=>import(`./game-DfygD0iV-b9ea4f.js`).then(e=>e.startGame(rf,tf)),__vite__mapDeps([3,2,1,0]),import.meta.url);export{q as C,si as S,Jr as _,Fl as a,Wr as b,Ll as c,jl as d,_l as f,Ut as g,ze as h,td as i,Bl as l,$ as m,Ou as n,Rl as o,xl as p,Hu as r,Il as s,ed as t,zl as u,Yi as v,ut as x,X as y};