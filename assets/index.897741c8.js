import{S as n,P as e,W as a,T as s,M as o,a as t,b as d,A as i,c as w,G as r,O as c,d as l,B as p,e as m,f as g,g as f}from"./vendor.72aadc24.js";const h=new n,u=new e(75,window.innerWidth/window.innerHeight,.1,1e3),v=new a({canvas:document.getElementById("globalCanvas")});v.setPixelRatio(window.devicePixelRatio||1),v.setSize(window.innerWidth,window.innerHeight),u.position.setZ(30),v.render(h,u);const y=new s(10,3,16,100),j=new o({color:16737095}),z=new t(y,j),A=new d(16777215);A.position.set(20,20,20);const b=new i(16777215),x=new w(A),E=new r(200,50),P=new c(u,v.domElement);h.add(z),h.add(A),h.add(b),h.add(x),h.add(E);const S=(new l).load("src/assets/sky.jpg");h.background=S;const W=(new l).load("src/assets/zach.png"),k=new t(new p(3,3,3),new m({map:W}));h.add(k);const B=(new l).load("src/assets/grass.jpg"),F=(new l).load("src/assets/water.jpg"),H=new t(new g(3,32,32),new o({map:B,normalMap:F}));h.add(H),H.position.z=30,H.position.setX(-10),Array(200).fill(void 0).forEach((function(){const n=new g(.25,24,24),e=new o({color:16777215}),a=new t(n,e),[s,d,i]=Array(3).fill(0).map((()=>f.randFloatSpread(100)));a.position.set(s,d,i),h.add(a)})),function n(){requestAnimationFrame(n),z.rotation.x+=.1,z.rotation.y+=.005,z.rotation.z-=.2,P.update(),v.render(h,u)}();
