(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var o=n(7),a=n.n(o),i=n(30),r=n.n(i),c=(n(46),n(9)),s=n(8),d=n(28),l=n(29),u=(n(47),n(16)),m=n(34),h=(n(48),n(6));var f=function(){return Object(h.jsx)(u.b,{to:"/",id:"HomeButton",children:Object(h.jsx)(m.a,{})})};var g=function(){return Object(o.useEffect)((function(){s.a.registerPlugin(d.a,l.a);var e=document.querySelector(".overX"),t=document.querySelector(".row");document.querySelectorAll(".anchor").forEach((function(n){n.addEventListener("click",(function(n){n.preventDefault();var o=document.querySelector(n.target.getAttribute("href"));if(o&&t.isSameNode(o.parentElement)){var a=e.offsetTop+o.offsetLeft;s.a.to(window,{scrollTo:{y:a/2,autoKill:!1},duration:1})}else s.a.to(window,{scrollTo:{y:o,autoKill:!1},duration:1})}))}));var n=s.a.utils.toArray(".panel");s.a.to(n,{xPercent:-100*(n.length-1),ease:"none",scrollTrigger:{trigger:".overX",pin:!0,scrub:1,snap:1/(n.length-1),end:function(){return"+="+document.querySelector(".overX").offsetWidth}}})})),Object(h.jsxs)("div",{className:"mainContainer",children:[Object(h.jsx)(f,{}),Object(h.jsxs)("div",{id:"navbar",children:[Object(h.jsx)("a",{href:"#panel-1",className:"anchor",children:"\u22c5"}),Object(h.jsx)("a",{href:"#panel-2",className:"anchor",children:"\u22c5"}),Object(h.jsx)("a",{href:"#panel-3",className:"anchor",children:"\u22c5"})]}),Object(h.jsx)("div",{className:"overX ",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"box a panel",id:"panel-1",children:[Object(h.jsxs)("h1",{className:"mainTitle",children:[Object(h.jsx)("p",{children:"I\u2019m a Newcomer"}),Object(h.jsx)("p",{children:"Frontend Developer,"})]}),Object(h.jsx)("div",{className:"profile"})]}),Object(h.jsx)("div",{className:"box b panel",id:"panel-2",children:"panel 2"}),Object(h.jsx)("div",{className:"box c panel ",id:"panel-3",children:"panel 3"})]})}),Object(h.jsx)("div",{className:"box nx ",children:"next page"})]})},b=n(0),j=n(3),p=n(1),y=n(2),v=n(12),x=n(32),w=n.n(x),O=n(33),k=n(17),E=function(e){Object(p.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(b.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).animate=function(){e.renderer.render(e.scene,e.camera),requestAnimationFrame(e.animate),e.frame+=.01;for(var t=e.planeMesh.geometry.attributes.position,n=t.array,o=t.originalPosition,a=t.randomValue,i=0;i<n.length;i+=3)n[i]=o[i]+.01*Math.cos(e.frame+a[i]),e.planeMesh.geometry.attributes.position.needsUpdate=!0,n[i+1]=o[i+1]+.01*Math.sin(e.frame+a[i+1]),e.planeMesh.geometry.attributes.position.needsUpdate=!0;e.raycaster.setFromCamera(e.mouse,e.camera);var r=e.raycaster.intersectObject(e.planeMesh);if(r.length>0){var c=r[0].object.geometry.attributes.color;c.setX(r[0].face.a,.3),c.setY(r[0].face.a,.6),c.setZ(r[0].face.a,1),c.setX(r[0].face.b,.3),c.setY(r[0].face.b,.6),c.setZ(r[0].face.b,1),c.setX(r[0].face.c,.3),c.setY(r[0].face.c,.6),c.setZ(r[0].face.c,1),c.needsUpdate=!0;var s={r:.05,g:.1,b:.2},d={r:.3,g:.6,b:1};k.a.to(d,{r:s.r,g:s.g,b:s.b,duration:1,onUpdate:function(){c.setX(r[0].face.a,d.r),c.setY(r[0].face.a,d.g),c.setZ(r[0].face.a,d.b),c.setX(r[0].face.b,d.r),c.setY(r[0].face.b,d.g),c.setZ(r[0].face.b,d.b),c.setX(r[0].face.c,d.r),c.setY(r[0].face.c,d.g),c.setZ(r[0].face.c,d.b)}})}},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=window.innerWidth,t=window.innerHeight;this.width=e,this.height=t,window.addEventListener("resize",(function(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}));var n=new v.Raycaster,o=new v.Scene,a=new v.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),i=new v.WebGLRenderer;i.setSize(e,t),i.setPixelRatio(devicePixelRatio),this.element.appendChild(i.domElement);var r=new O.a,c={width:800,height:800,widthSegments:100,heightSegments:100};r.add(c,"width",100,600).onChange(d),r.add(c,"height",100,600).onChange(d),r.add(c,"widthSegments",10,200).onChange(d),r.add(c,"heightSegments",10,200).onChange(d);var s=[];function d(){m.geometry.dispose(),m.geometry=new v.PlaneGeometry(c.width,c.height,c.widthSegments,c.heightSegments);for(var e=m.geometry.attributes.position.array,t=0;t<e.length;t++){if(t%3===0){var n=e[t],o=e[t+1],a=e[t+2];e[t]=n+3*(Math.random()-.5),e[t+2]=o+3*(Math.random()-.5),e[t+2]=a+3*(Math.random()-.5)}s.push(Math.random()*Math.PI*3)}m.geometry.attributes.position.randomValue=s,m.geometry.attributes.position.originalPosition=m.geometry.attributes.position.array;for(var i=[],r=0;r<m.geometry.attributes.position.count;r++)i.push(.05,.1,.2);m.geometry.setAttribute("color",new v.BufferAttribute(new Float32Array(i),3))}var l=new v.PlaneGeometry(c.width,c.height,c.widthSegments,c.heightSegments),u=new v.MeshPhongMaterial({side:v.DoubleSide,flatShading:v.FlatShading,vertexColors:!0}),m=new v.Mesh(l,u);o.add(m),d();var h=new v.DirectionalLight(16777215,1);h.position.set(1,-1,1),o.add(h);var f=new v.DirectionalLight(16777215,1);f.position.set(0,0,-1),o.add(f),new w.a(a,i.domElement),a.position.z=50,a.rotateX(-50),a.rotateY(-50),console.log(a);var g={x:void 0,y:void 0};window.addEventListener("mousemove",(function(e){g.x=e.clientX/window.innerWidth*2-1,g.y=-e.clientY/window.innerHeight*2+1}));this.scene=o,this.camera=a,this.renderer=i,this.planeMesh=m,this.mouse=g,this.raycaster=n,this.frame=0,this.randomValue=s,this.animate(),document.querySelector("#link").addEventListener("click",(function(e){e.preventDefault(),k.a.to("#container",{opacity:0}),k.a.to(a.position,{x:75,y:-75,z:10,duration:1.2}),k.a.to(a.rotation,{x:1,y:1,duration:1.2,onComplete:function(){window.location="/main"}}),k.a.to(h,{intensity:0,duration:1.2})}))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{ref:function(t){return e.element=t}})}}]),n}(o.Component);n(56);var L=function(){return Object(o.useEffect)((function(){var e=document.getElementById("cursor");e.classList.add("cursor");var t=document.getElementById("follow");function n(e,t){e.style="",e.style.top=t.clientY+"px",e.style.left=t.clientX+"px"}t.classList.add("follow"),e&&window.addEventListener("mousemove",(function(o){"A"==o.target.tagName?(e.style.background="transparent",t.style.top=o.target.offsetTop+"px",t.style.left=o.target.offsetLeft+"px",t.style.width=o.target.clientWidth+"px",t.style.height=o.target.clientHeight+"px",t.classList.add("on-focus")):(n(e,o),n(t,o),t.classList.remove("on-focus"))}))})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{id:"cursor"}),Object(h.jsx)("div",{id:"follow"})]})};n(57);var S=function(){return Object(o.useEffect)((function(){k.a.to("#title",{opacity:1,duration:1,delay:.2}),k.a.to("#link",{opacity:1,duration:1,delay:.2})})),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container",id:"container",children:[Object(h.jsx)("h1",{className:"title",id:"title",children:"WELCOME MY PORTFOLIO"}),Object(h.jsx)(L,{}),Object(h.jsx)(u.b,{to:"/main",className:"link",id:"link",children:"Enter"})]})})};var W=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(S,{}),Object(h.jsx)(E,{})]})};n(58);var M=function(){return Object(o.useEffect)((function(){s.a.to("#profile",{opacity:.3,duration:1,skewX:-15}),document.getElementById("profile").addEventListener("mouseover",(function(){s.a.to("#profile",{opacity:.7}),s.a.to(".background-image1",{height:"130%"})})),document.getElementById("profile").addEventListener("mouseout",(function(){s.a.to("#profile",{opacity:.3}),s.a.to(".background-image1",{height:"100%"})})),document.getElementById("profile").addEventListener("click",(function(){s.a.to(".background-image1",{height:"100%",duration:.6}),s.a.to("#profile",{opacity:0,x:-2e3,delay:.6,duration:1.4,onComplete:function(){window.location="/aboutme"}}),s.a.to("#myWork",{x:2e3,delay:.6,duration:1.4}),s.a.to("#profileTitle",{color:"rgb(0,0,0)",borderColor:"rgb(0,0,0)",delay:.6,duration:1.4}),s.a.to("#myWorkTitle",{color:"rgb(0,0,0)",borderColor:"rgb(0,0,0)",delay:.6,duration:1.4})})),s.a.to("#myWork",{opacity:.3,duration:1,skewX:-15}),document.getElementById("myWork").addEventListener("mouseover",(function(){s.a.to("#myWork",{opacity:.7}),s.a.to(".background-image2",{height:"130%"})})),document.getElementById("myWork").addEventListener("mouseout",(function(){s.a.to("#myWork",{opacity:.3}),s.a.to(".background-image2",{height:"100%"})})),document.getElementById("myWork").addEventListener("click",(function(){s.a.to(".background-image2",{height:"100%",duration:.6}),s.a.to("#myWork",{opacity:0,x:2e3,delay:.6,duration:1.4,onComplete:function(){window.location="/mywork"}}),s.a.to("#profile",{x:-2e3,delay:.6,duration:1.4}),s.a.to("#profileTitle",{color:"rgb(0,0,0)",borderColor:"rgb(0,0,0)",delay:.6,duration:1.4}),s.a.to("#myWorkTitle",{color:"rgb(0,0,0)",borderColor:"rgb(0,0,0)",delay:.6,duration:1.4})}))})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),Object(h.jsxs)("div",{id:"mainPage",children:[Object(h.jsx)(u.b,{to:"/aboutme",id:"profileTitle",children:"About me"}),Object(h.jsx)("div",{id:"profile",children:Object(h.jsx)("div",{className:"background-image1"})}),Object(h.jsx)(u.b,{to:"/mywork",id:"myWorkTitle",children:"My Work"}),Object(h.jsx)("div",{id:"myWork",children:Object(h.jsx)("div",{className:"background-image2"})})]})]})};var C=function(){return Object(h.jsx)("div",{children:"My Work"})};var N=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(c.a,{exact:!0,path:"/",component:W}),Object(h.jsx)(c.a,{exact:!0,path:"/main",component:M}),Object(h.jsx)(c.a,{exact:!0,path:"/aboutme",component:g}),Object(h.jsx)(c.a,{exact:!0,path:"/mywork",component:C})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(N,{})})}),document.getElementById("root")),P()}},[[59,1,2]]]);
//# sourceMappingURL=main.f1cdf0dd.chunk.js.map