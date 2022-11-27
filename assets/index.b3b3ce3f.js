(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerpolicy&&(c.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?c.credentials="include":l.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function w(){}function _e(t){return t()}function ce(){return Object.create(null)}function J(t){t.forEach(_e)}function Ne(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Q;function E(t,e){return Q||(Q=document.createElement("a")),Q.href=e,t===Q.href}function ye(t){return Object.keys(t).length===0}function Ae(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function T(t,e,n){t.$$.on_destroy.push(Ae(e,n))}function p(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function k(){return L(" ")}function xe(){return L("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Le(t){return Array.from(t.childNodes)}function F(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let oe;function Y(t){oe=t}const V=[],se=[],X=[],re=[],Me=Promise.resolve();let ne=!1;function Ce(){ne||(ne=!0,Me.then(Ie))}function ie(t){X.push(t)}const te=new Set;let U=0;function Ie(){const t=oe;do{for(;U<V.length;){const e=V[U];U++,Y(e),Ee(e.$$)}for(Y(null),V.length=0,U=0;se.length;)se.pop()();for(let e=0;e<X.length;e+=1){const n=X[e];te.has(n)||(te.add(n),n())}X.length=0}while(V.length);for(;re.length;)re.pop()();ne=!1,te.clear(),Y(t)}function Ee(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ie)}}const Z=new Set;let O;function be(){O={r:0,c:[],p:O}}function De(){O.r||J(O.c),O=O.p}function y(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function x(t,e,n,i){if(t&&t.o){if(Z.has(t))return;Z.add(t),O.c.push(()=>{Z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function W(t){t&&t.c()}function j(t,e,n,i){const{fragment:l,on_mount:c,on_destroy:o,after_update:s}=t.$$;l&&l.m(e,n),i||ie(()=>{const r=c.map(_e).filter(Ne);o?o.push(...r):J(r),t.$$.on_mount=[]}),s.forEach(ie)}function P(t,e){const n=t.$$;n.fragment!==null&&(J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(t,e){t.$$.dirty[0]===-1&&(V.push(t),Ce(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(t,e,n,i,l,c,o,s=[-1]){const r=oe;Y(t);const f=t.$$={fragment:null,ctx:null,props:c,update:w,not_equal:l,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:ce(),dirty:s,skip_bound:!1,root:e.target||r.$$.root};o&&o(f.root);let u=!1;if(f.ctx=n?n(t,e.props||{},(_,g,...a)=>{const d=a.length?a[0]:g;return f.ctx&&l(f.ctx[_],f.ctx[_]=d)&&(!f.skip_bound&&f.bound[_]&&f.bound[_](d),u&&Te(t,_)),g}):[],f.update(),u=!0,J(f.before_update),f.fragment=i?i(f.ctx):!1,e.target){if(e.hydrate){const _=Le(e.target);f.fragment&&f.fragment.l(_),_.forEach(b)}else f.fragment&&f.fragment.c();e.intro&&y(t.$$.fragment),j(t,e.target,e.anchor,e.customElement),Ie()}Y(r)}class H{$destroy(){P(this,1),this.$destroy=w}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const z=[];function $e(t,e=w){let n;const i=new Set;function l(s){if(B(t,s)&&(t=s,n)){const r=!z.length;for(const f of i)f[1](),z.push(f,t);if(r){for(let f=0;f<z.length;f+=2)z[f][0](z[f+1]);z.length=0}}}function c(s){l(s(t))}function o(s,r=w){const f=[s,r];return i.add(f),i.size===1&&(n=e(l)||w),s(t),()=>{i.delete(f),i.size===0&&(n(),n=null)}}return{set:l,update:c,subscribe:o}}let G=$e(null),M=$e([{lID:0,lName:"Personal",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lItems:[{iID:0,iName:"Milk",iDone:!1,iAmount:2,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:1,iName:"Bread",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:2,iName:"Eggs",iDone:!1,iAmount:12,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:3,iName:"Butter",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:4,iName:"Cookies",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:5,iName:"Sausages",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:6,iName:"Chicken",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:7,iName:"Pork",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:8,iName:"Beef",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:9,iName:"Fish",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:10,iName:"Rice",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:11,iName:"Pasta",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:12,iName:"Potatoes",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:13,iName:"Tomatoes",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:14,iName:"Onions",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:15,iName:"Garlic",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:16,iName:"Lettuce",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:17,iName:"Cucumber",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:18,iName:"Carrots",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:19,iName:"Apples",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:20,iName:"Oranges",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"}]},{lID:1,lName:"Work",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lItems:[{iID:0,iName:"Cake",iDone:!1,iAmount:2,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:1,iName:"Water",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:2,iName:"Muffins",iDone:!1,iAmount:12,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"}]},{lID:2,lName:"WG",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lMembers:[{mID:0,mName:"Max",mIcon:"https://thispersondoesnotexist.com/image"},{mID:1,mName:"Lukas",mIcon:"https://thispersondoesnotexist.com/image"},{mID:2,mName:"Lena",mIcon:"https://thispersondoesnotexist.com/image"}],lItems:[{iID:0,iName:"Beer",iDone:!0,iAmount:2,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:1,iName:"Chrips",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:2,iName:"Vodka",iDone:!1,iAmount:12,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:3,iName:"Butter",iDone:!1,iAmount:12,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:4,iName:"Cookies",iDone:!1,iAmount:20,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:5,iName:"Sausages",iDone:!1,iAmount:4,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:6,iName:"Chicken",iDone:!1,iAmount:2,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:7,iName:"Pork",iDone:!1,iAmount:9,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:8,iName:"Beef",iDone:!1,iAmount:2,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:9,iName:"Fish",iDone:!1,iAmount:6,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:10,iName:"Rice",iDone:!1,iAmount:10,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"}]}]);function Be(t){let e,n,i;return{c(){e=h("button"),e.innerHTML='<div class="bg-green-400 p-2 rounded-full drop-shadow-2xl"><img src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" alt="plus" width="40px"/></div>'},m(l,c){$(l,e,c),n||(i=ee(e,"click",t[1]),n=!0)},p:w,i:w,o:w,d(l){l&&b(e),n=!1,i()}}}function Oe(t){function e(i){G.set(null)}return[e,()=>e()]}class je extends H{constructor(e){super(),S(this,e,Oe,Be,B,{})}}function fe(t){let e,n;return{c(){e=h("img"),E(e.src,n="https://cdn-icons-png.flaticon.com/512/3033/3033143.png")||m(e,"src",n),m(e,"alt",""),m(e,"width","30px")},m(i,l){$(i,e,l)},d(i){i&&b(e)}}}function Pe(t){let e,n;return{c(){e=h("img"),E(e.src,n="https://cdn-icons-png.flaticon.com/512/3388/3388530.png")||m(e,"src",n),m(e,"alt",""),m(e,"width","25px")},m(i,l){$(i,e,l)},p:w,d(i){i&&b(e)}}}function Se(t){let e,n,i=t[1][t[0]].lItems.filter(ue).length+"",l,c,o=t[1][t[0]].lItems.length+"",s;return{c(){e=h("h2"),n=h("h2"),l=L(i),c=L("/"),s=L(o)},m(r,f){$(r,e,f),p(e,n),p(n,l),p(n,c),p(n,s)},p(r,f){f&3&&i!==(i=r[1][r[0]].lItems.filter(ue).length+"")&&F(l,i),f&3&&o!==(o=r[1][r[0]].lItems.length+"")&&F(s,o)},d(r){r&&b(e)}}}function He(t){let e,n,i,l,c,o,s,r,f=t[1][t[0]].lName+"",u,_,g,a,d,I,v=t[1][t[0]].lMembers!=null&&fe();function R(D,A){return A&5&&(I=null),I==null&&(I=D[2][D[0]].lItems.filter(qe).length!=D[2][D[0]].lItems.length),I?Se:Pe}let C=R(t,-1),N=C(t);return{c(){e=h("div"),n=h("div"),i=h("img"),c=k(),o=h("div"),s=h("div"),r=h("h2"),u=L(f),_=k(),g=h("div"),v&&v.c(),a=k(),d=h("div"),N.c(),E(i.src,l=t[1][t[0]].lIcon)||m(i,"src",l),m(i,"alt",""),m(i,"width","52px"),m(n,"class",""),m(g,"class",""),m(s,"class","text-2xl bg-green-400 drop-shadow-lg flex gap-2"),m(d,"class","flex text-2xl bg-green-400 px-2 rounded-full drop-shadow-lg"),m(o,"class","flex w-full justify-between ml-10"),m(e,"class","flex flex-row justify-between p-2 border-b-2 mx-2 items-center")},m(D,A){$(D,e,A),p(e,n),p(n,i),p(e,c),p(e,o),p(o,s),p(s,r),p(r,u),p(s,_),p(s,g),v&&v.m(g,null),p(o,a),p(o,d),N.m(d,null)},p(D,[A]){A&3&&!E(i.src,l=D[1][D[0]].lIcon)&&m(i,"src",l),A&3&&f!==(f=D[1][D[0]].lName+"")&&F(u,f),D[1][D[0]].lMembers!=null?v||(v=fe(),v.c(),v.m(g,null)):v&&(v.d(1),v=null),C===(C=R(D,A))&&N?N.p(D,A):(N.d(1),N=C(D),N&&(N.c(),N.m(d,null)))},i:w,o:w,d(D){D&&b(e),v&&v.d(),N.d()}}}const qe=t=>t.iDone==!0,ue=t=>t.iDone==!0;function ze(t,e,n){let i;T(t,M,o=>n(2,i=o));let{listID:l=0}=e,c;return M.subscribe(o=>{n(1,c=o)}),t.$$set=o=>{"listID"in o&&n(0,l=o.listID)},[l,c,i]}class Fe extends H{constructor(e){super(),S(this,e,ze,He,B,{listID:0})}}function ve(t){return t.lItems.filter(e=>e.iDone==!0).length}function We(t){return t.lItems.length-ve(t)}function Ge(){return ke()+Re()}function ke(){let t=0;return M.subscribe(e=>{e.forEach(n=>{t+=ve(n)})}),t}function Re(){let t=0;return M.subscribe(e=>{e.forEach(n=>{t+=We(n)})}),t}function Ke(t){let e=t[1][t[0]].lName+"",n;return{c(){n=L(e)},m(i,l){$(i,n,l)},p(i,l){l&3&&e!==(e=i[1][i[0]].lName+"")&&F(n,e)},d(i){i&&b(n)}}}function Ve(t){let e;return{c(){e=L("Your lists")},m(n,i){$(n,e,i)},p:w,d(n){n&&b(e)}}}function Ye(t){let e,n,i,l,c,o,s;function r(_,g){return _[0]==null?Ve:Ke}let f=r(t),u=f(t);return{c(){e=h("div"),n=h("div"),n.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/8550/8550935.png" alt="burger" width="40px"/>',i=k(),l=h("div"),c=h("h2"),u.c(),o=k(),s=h("div"),s.innerHTML='<img src="https://thispersondoesnotexist.com/image" alt="profile" width="40px" class="rounded-full"/>',m(n,"class","ml-3"),m(c,"class","bg-white text-2xl drop-shadow-lg"),m(l,"class",""),m(s,"class","mr-2"),m(e,"class","w-full bg-green-400 h-20 pt-5 sticky flex justify-between")},m(_,g){$(_,e,g),p(e,n),p(e,i),p(e,l),p(l,c),u.m(c,null),p(e,o),p(e,s)},p(_,[g]){f===(f=r(_))&&u?u.p(_,g):(u.d(1),u=f(_),u&&(u.c(),u.m(c,null)))},i:w,o:w,d(_){_&&b(e),u.d()}}}function Je(t,e,n){let i,l;return T(t,G,c=>n(0,i=c)),T(t,M,c=>n(1,l=c)),[i,l]}class Qe extends H{constructor(e){super(),S(this,e,Je,Ye,B,{})}}function ae(t,e,n){const i=t.slice();return i[3]=e[n],i}function me(t){let e,n,i,l,c,o;n=new Fe({props:{listID:t[3].lID}});function s(){return t[2](t[3])}return{c(){e=h("button"),W(n.$$.fragment),i=k(),m(e,"class","w-full")},m(r,f){$(r,e,f),j(n,e,null),p(e,i),l=!0,c||(o=ee(e,"click",s),c=!0)},p(r,f){t=r;const u={};f&1&&(u.listID=t[3].lID),n.$set(u)},i(r){l||(y(n.$$.fragment,r),l=!0)},o(r){x(n.$$.fragment,r),l=!1},d(r){r&&b(e),P(n),c=!1,o()}}}function Ue(t){let e,n,i,l,c,o,s,r,f=t[0],u=[];for(let g=0;g<f.length;g+=1)u[g]=me(ae(t,f,g));const _=g=>x(u[g],1,1,()=>{u[g]=null});return{c(){e=h("div"),n=h("div"),i=h("div"),i.innerHTML="<h2>Total:</h2>",l=k(),c=h("div"),o=h("h2"),o.textContent=`${ke()}/${Ge()}`,s=k();for(let g=0;g<u.length;g+=1)u[g].c();m(i,"class","text-2xl bg-green-400 drop-shadow-lg rounded-l-full pl-2"),m(c,"class","flex text-2xl bg-green-400 px-2 rounded-r-full drop-shadow-lg"),m(n,"class","flex flex-row p-2 border-b-2 mx-2 items-center"),m(e,"class","")},m(g,a){$(g,e,a),p(e,n),p(n,i),p(n,l),p(n,c),p(c,o),p(e,s);for(let d=0;d<u.length;d+=1)u[d].m(e,null);r=!0},p(g,[a]){if(a&3){f=g[0];let d;for(d=0;d<f.length;d+=1){const I=ae(g,f,d);u[d]?(u[d].p(I,a),y(u[d],1)):(u[d]=me(I),u[d].c(),y(u[d],1),u[d].m(e,null))}for(be(),d=f.length;d<u.length;d+=1)_(d);De()}},i(g){if(!r){for(let a=0;a<f.length;a+=1)y(u[a]);r=!0}},o(g){u=u.filter(Boolean);for(let a=0;a<u.length;a+=1)x(u[a]);r=!1},d(g){g&&b(e),le(u,g)}}}function Xe(t,e,n){let i;T(t,M,o=>n(0,i=o));function l(o){G.set(o)}return[i,l,o=>l(o.lID)]}class Ze extends H{constructor(e){super(),S(this,e,Xe,Ue,B,{})}}function de(t,e,n){const i=t.slice();return i[4]=e[n],i}function et(t){let e;return{c(){e=h("div"),e.textContent="Collab",m(e,"class","bg-white text-xl p-2 rounded-full drop-shadow-lg")},m(n,i){$(n,e,i)},p:w,d(n){n&&b(e)}}}function tt(t){let e,n=t[0][t[1]].lMembers,i=[];for(let l=0;l<n.length;l+=1)i[l]=pe(de(t,n,l));return{c(){e=h("div");for(let l=0;l<i.length;l+=1)i[l].c();m(e,"class","flex bg-white rounded-full p-2 drop-shadow-lg")},m(l,c){$(l,e,c);for(let o=0;o<i.length;o+=1)i[o].m(e,null)},p(l,c){if(c&3){n=l[0][l[1]].lMembers;let o;for(o=0;o<n.length;o+=1){const s=de(l,n,o);i[o]?i[o].p(s,c):(i[o]=pe(s),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(l){l&&b(e),le(i,l)}}}function pe(t){let e,n,i,l;return{c(){e=h("div"),n=h("img"),l=k(),E(n.src,i=t[4].mIcon)||m(n,"src",i),m(n,"alt",""),m(n,"width","32px"),m(n,"class","rounded-full drop-shadow-md"),m(e,"class","")},m(c,o){$(c,e,o),p(e,n),p(e,l)},p(c,o){o&3&&!E(n.src,i=c[4].mIcon)&&m(n,"src",i)},d(c){c&&b(e)}}}function nt(t){let e,n,i,l,c,o,s,r,f,u;function _(d,I){return d[0][d[1]].lMembers!=null?tt:et}let g=_(t),a=g(t);return{c(){e=h("div"),n=h("div"),i=h("button"),i.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="Icon" width="35px"/>',l=k(),c=h("div"),c.innerHTML=`<div class="my-2 ml-2 bg-white rounded-l-full h-min p-2"><img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" alt="search" width="30px"/></div> 
        <div class="my-2 mr-2 bg-white rounded-r-full h-min p-2"><img src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png" alt="search" width="30px"/></div>`,o=k(),a.c(),s=k(),r=h("div"),r.innerHTML=`<h2>Sort</h2> 
        <img src="https://cdn-icons-png.flaticon.com/512/25/25243.png" alt="" width="20px"/>`,m(i,"class","drop-shadow-lg"),m(n,"class","ml-3 p-2 "),m(c,"class","flex drop-shadow-lg"),m(r,"class","flex text-xl bg-white rounded-full p-2 mr-3 ml-2 gap-2 drop-shadow-lg"),m(e,"class","bg-green-400 h-20 flex items-center justify-between")},m(d,I){$(d,e,I),p(e,n),p(n,i),p(e,l),p(e,c),p(e,o),a.m(e,null),p(e,s),p(e,r),f||(u=ee(i,"click",t[3]),f=!0)},p(d,[I]){g===(g=_(d))&&a?a.p(d,I):(a.d(1),a=g(d),a&&(a.c(),a.m(e,s)))},i:w,o:w,d(d){d&&b(e),a.d(),f=!1,u()}}}function it(t,e,n){let i,l;T(t,M,s=>n(0,i=s)),T(t,G,s=>n(1,l=s));function c(s){G.set(null)}return[i,l,c,()=>c()]}class lt extends H{constructor(e){super(),S(this,e,it,nt,B,{})}}function ge(t,e,n){const i=t.slice();return i[5]=e[n],i[6]=e,i[7]=n,i}function he(t){let e,n,i,l,c,o,s=t[5].iName+"",r,f,u,_,g=t[5].iAmount+"",a,d,I,v,R,C,N,D,A;function we(){t[3].call(v,t[5])}return{c(){e=h("div"),n=h("div"),i=h("img"),c=k(),o=h("div"),r=L(s),f=k(),u=h("div"),_=h("div"),a=L(g),d=k(),I=h("label"),v=h("input"),R=k(),C=h("span"),N=k(),E(i.src,l=t[5].iIcon)||m(i,"src",l),m(i,"alt","Icon"),m(i,"width","40px"),m(n,"class",""),m(o,"class","text-2xl bg-green-400 drop-shadow-lg"),m(_,"class","mr-5 bg-green-400 text-2xl rounded-full px-2 drop-shadow-lg"),m(v,"type","checkbox"),m(C,"class","checkmark"),m(I,"class","container scale-125 drop-shadow-lg"),m(u,"class","flex place-content-center"),m(e,"class","flex flex-row justify-between p-2 border-b-2 mx-2 items-center")},m(K,q){$(K,e,q),p(e,n),p(n,i),p(e,c),p(e,o),p(o,r),p(e,f),p(e,u),p(u,_),p(_,a),p(u,d),p(u,I),p(I,v),v.checked=t[2][t[0]].lItems[t[5].iID].iDone,p(I,R),p(I,C),p(e,N),D||(A=ee(v,"change",we),D=!0)},p(K,q){t=K,q&3&&!E(i.src,l=t[5].iIcon)&&m(i,"src",l),q&3&&s!==(s=t[5].iName+"")&&F(r,s),q&3&&g!==(g=t[5].iAmount+"")&&F(a,g),q&7&&(v.checked=t[2][t[0]].lItems[t[5].iID].iDone)},d(K){K&&b(e),D=!1,A()}}}function ot(t){let e,n,i,l,c;n=new lt({});let o=t[1][t[0]].lItems,s=[];for(let r=0;r<o.length;r+=1)s[r]=he(ge(t,o,r));return{c(){e=h("div"),W(n.$$.fragment),i=k(),l=h("div");for(let r=0;r<s.length;r+=1)s[r].c();m(e,"class",""),m(l,"class","")},m(r,f){$(r,e,f),j(n,e,null),$(r,i,f),$(r,l,f);for(let u=0;u<s.length;u+=1)s[u].m(l,null);c=!0},p(r,[f]){if(f&7){o=r[1][r[0]].lItems;let u;for(u=0;u<o.length;u+=1){const _=ge(r,o,u);s[u]?s[u].p(_,f):(s[u]=he(_),s[u].c(),s[u].m(l,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=o.length}},i(r){c||(y(n.$$.fragment,r),c=!0)},o(r){x(n.$$.fragment,r),c=!1},d(r){r&&b(e),P(n),r&&b(i),r&&b(l),le(s,r)}}}function ct(t,e,n){let i;T(t,M,s=>n(2,i=s));let l;M.subscribe(s=>{n(1,l=s)});let{openListID:c=0}=e;function o(s){i[c].lItems[s.iID].iDone=this.checked,M.set(i)}return t.$$set=s=>{"openListID"in s&&n(0,c=s.openListID)},[c,l,i,o]}class st extends H{constructor(e){super(),S(this,e,ct,ot,B,{openListID:0})}}function rt(t){let e,n;return e=new st({props:{openListID:t[0]}}),{c(){W(e.$$.fragment)},m(i,l){j(e,i,l),n=!0},p(i,l){const c={};l&1&&(c.openListID=i[0]),e.$set(c)},i(i){n||(y(e.$$.fragment,i),n=!0)},o(i){x(e.$$.fragment,i),n=!1},d(i){P(e,i)}}}function ft(t){let e,n;return e=new Ze({}),{c(){W(e.$$.fragment)},m(i,l){j(e,i,l),n=!0},p:w,i(i){n||(y(e.$$.fragment,i),n=!0)},o(i){x(e.$$.fragment,i),n=!1},d(i){P(e,i)}}}function ut(t){let e,n,i,l,c,o,s,r,f;e=new Qe({}),l=new je({});const u=[ft,rt],_=[];function g(a,d){return a[0]==null?0:1}return o=g(t),s=_[o]=u[o](t),{c(){W(e.$$.fragment),n=k(),i=h("div"),W(l.$$.fragment),c=k(),s.c(),r=xe(),m(i,"class","absolute bottom-2 right-2 scale-110 z-10")},m(a,d){j(e,a,d),$(a,n,d),$(a,i,d),j(l,i,null),$(a,c,d),_[o].m(a,d),$(a,r,d),f=!0},p(a,[d]){let I=o;o=g(a),o===I?_[o].p(a,d):(be(),x(_[I],1,1,()=>{_[I]=null}),De(),s=_[o],s?s.p(a,d):(s=_[o]=u[o](a),s.c()),y(s,1),s.m(r.parentNode,r))},i(a){f||(y(e.$$.fragment,a),y(l.$$.fragment,a),y(s),f=!0)},o(a){x(e.$$.fragment,a),x(l.$$.fragment,a),x(s),f=!1},d(a){P(e,a),a&&b(n),a&&b(i),P(l),a&&b(c),_[o].d(a),a&&b(r)}}}function at(t,e,n){let i;return T(t,G,l=>n(0,i=l)),[i]}class mt extends H{constructor(e){super(),S(this,e,at,ut,B,{})}}new mt({target:document.getElementById("app")});
