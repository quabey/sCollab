(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();function a(){}function ce(e){return e()}function te(){return Object.create(null)}function q(e){e.forEach(ce)}function ae(e){return typeof e=="function"}function k(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let z;function ne(e,t){return z||(z=document.createElement("a")),z.href=t,e===z.href}function de(e){return Object.keys(e).length===0}function me(e,...t){if(e==null)return a;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function he(e,t,n){e.$$.on_destroy.push(me(t,n))}function f(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function j(){return I(" ")}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ge(e){return Array.from(e.childNodes)}function H(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let X;function M(e){X=e}const E=[],ie=[],G=[],re=[],_e=Promise.resolve();let R=!1;function $e(){R||(R=!0,_e.then(ue))}function U(e){G.push(e)}const Q=new Set;let F=0;function ue(){const e=X;do{for(;F<E.length;){const t=E[F];F++,M(t),be(t.$$)}for(M(null),E.length=0,F=0;ie.length;)ie.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];Q.has(n)||(Q.add(n),n())}G.length=0}while(E.length);for(;re.length;)re.pop()();R=!1,Q.clear(),M(e)}function be(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}const K=new Set;let y;function Ie(){y={r:0,c:[],p:y}}function ye(){y.r||q(y.c),y=y.p}function _(e,t){e&&e.i&&(K.delete(e),e.i(t))}function A(e,t,n,r){if(e&&e.o){if(K.has(e))return;K.add(e),y.c.push(()=>{K.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function V(e){e&&e.c()}function O(e,t,n,r){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=e.$$;i&&i.m(t,n),r||U(()=>{const s=c.map(ce).filter(ae);l?l.push(...s):q(s),e.$$.on_mount=[]}),u.forEach(U)}function B(e,t){const n=e.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(e,t){e.$$.dirty[0]===-1&&(E.push(e),$e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function C(e,t,n,r,i,c,l,u=[-1]){const s=X;M(e);const o=e.$$={fragment:null,ctx:null,props:c,update:a,not_equal:i,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:te(),dirty:u,skip_bound:!1,root:t.target||s.$$.root};l&&l(o.root);let D=!1;if(o.ctx=n?n(e,t.props||{},(p,w,...$)=>{const N=$.length?$[0]:w;return o.ctx&&i(o.ctx[p],o.ctx[p]=N)&&(!o.skip_bound&&o.bound[p]&&o.bound[p](N),D&&ve(e,p)),w}):[],o.update(),D=!0,q(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const p=ge(t.target);o.fragment&&o.fragment.l(p),p.forEach(g)}else o.fragment&&o.fragment.c();t.intro&&_(e.$$.fragment),O(e,t.target,t.anchor,t.customElement),ue()}M(s)}class S{$destroy(){B(this,1),this.$destroy=a}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!de(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function De(e){let t;return{c(){t=m("div"),t.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" alt="plus" width="40px"/>',h(t,"class","bg-green-400 p-2 rounded-full")},m(n,r){v(n,t,r)},p:a,i:a,o:a,d(n){n&&g(t)}}}class we extends S{constructor(t){super(),C(this,t,null,De,k,{})}}function Ne(e){let t;return{c(){t=m("div"),t.innerHTML=`<div class="ml-2"><img src="https://cdn-icons-png.flaticon.com/512/8550/8550935.png" alt="burger" width="40px"/></div> 
    <div class=""><h2 class="text-2xl">Your Lists</h2></div> 
    <div class="mr-2"><img src="https://thispersondoesnotexist.com/image" alt="profile" width="40px" class="rounded-full"/></div>`,h(t,"class","w-full bg-green-400 h-20 pt-5 sticky flex justify-between")},m(n,r){v(n,t,r)},p:a,i:a,o:a,d(n){n&&g(t)}}}class xe extends S{constructor(t){super(),C(this,t,null,Ne,k,{})}}const x=[];function Ae(e,t=a){let n;const r=new Set;function i(u){if(k(e,u)&&(e=u,n)){const s=!x.length;for(const o of r)o[1](),x.push(o,e);if(s){for(let o=0;o<x.length;o+=2)x[o][0](x[o+1]);x.length=0}}}function c(u){i(u(e))}function l(u,s=a){const o=[u,s];return r.add(o),r.size===1&&(n=t(i)||a),u(e),()=>{r.delete(o),r.size===0&&(n(),n=null)}}return{set:i,update:c,subscribe:l}}let fe=Ae([{lID:0,lName:"Personal",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lItems:[{iID:0,iName:"Milk",iDone:!1,iAmount:2,iIcon:""},{iID:1,iName:"Bread",iDone:!1},{iID:2,iName:"Eggs",iDone:!1,amount:12}]},{lID:1,lName:"Work",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lItems:[{iID:0,iName:"Cake",iDone:!1,iAmount:2,iIcon:""},{iID:1,iName:"Water",iDone:!1,iAmount:1,iIcon:""},{iID:2,iName:"Muffins",iDone:!1,iAmount:12,iIcon:""}]},{lID:2,lName:"WG",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lItems:[{iID:0,iName:"Beer",iDone:!0,iAmount:2,iIcon:""},{iID:1,iName:"Chrips",iDone:!1,iAmount:1,iIcon:""},{iID:2,iName:"Vodka",iDone:!1,iAmount:12,iIcon:""}]}]);function ke(e){let t,n,r,i,c,l,u,s,o=e[0]+1+"",D,p,w,$=e[1][e[0]].lName+"",N,Z,P,L,T=e[1][e[0]].lItems.filter(se).length+"",Y,ee,W=e[1][e[0]].lItems.length+"",J;return{c(){t=m("div"),n=m("div"),r=m("img"),c=j(),l=m("div"),u=m("h2"),s=I("No. "),D=I(o),p=j(),w=m("h2"),N=I($),Z=j(),P=m("div"),L=m("h2"),Y=I(T),ee=I(" / "),J=I(W),ne(r.src,i=e[1][e[0]].lIcon)||h(r,"src",i),h(r,"alt",""),h(r,"width","40px"),h(n,"class",""),h(P,"class","flex "),h(l,"class","flex w-full justify-between ml-10"),h(t,"class","flex justify-between m-5 border-b-4 pb-2")},m(d,b){v(d,t,b),f(t,n),f(n,r),f(t,c),f(t,l),f(l,u),f(u,s),f(u,D),f(l,p),f(l,w),f(w,N),f(l,Z),f(l,P),f(P,L),f(L,Y),f(L,ee),f(L,J)},p(d,[b]){b&3&&!ne(r.src,i=d[1][d[0]].lIcon)&&h(r,"src",i),b&1&&o!==(o=d[0]+1+"")&&H(D,o),b&3&&$!==($=d[1][d[0]].lName+"")&&H(N,$),b&3&&T!==(T=d[1][d[0]].lItems.filter(se).length+"")&&H(Y,T),b&3&&W!==(W=d[1][d[0]].lItems.length+"")&&H(J,W)},i:a,o:a,d(d){d&&g(t)}}}const se=e=>e.iDone==!0;function Le(e,t,n){let{listID:r=0}=t,i;return fe.subscribe(c=>{n(1,i=c)}),e.$$set=c=>{"listID"in c&&n(0,r=c.listID)},[r,i]}class Ee extends S{constructor(t){super(),C(this,t,Le,ke,k,{listID:0})}}function le(e,t,n){const r=e.slice();return r[1]=t[n],r}function oe(e){let t,n;return t=new Ee({props:{listID:e[1].lID}}),{c(){V(t.$$.fragment)},m(r,i){O(t,r,i),n=!0},p(r,i){const c={};i&1&&(c.listID=r[1].lID),t.$set(c)},i(r){n||(_(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){B(t,r)}}}function je(e){let t,n,r=e[0],i=[];for(let l=0;l<r.length;l+=1)i[l]=oe(le(e,r,l));const c=l=>A(i[l],1,1,()=>{i[l]=null});return{c(){t=m("div");for(let l=0;l<i.length;l+=1)i[l].c();h(t,"class","")},m(l,u){v(l,t,u);for(let s=0;s<i.length;s+=1)i[s].m(t,null);n=!0},p(l,[u]){if(u&1){r=l[0];let s;for(s=0;s<r.length;s+=1){const o=le(l,r,s);i[s]?(i[s].p(o,u),_(i[s],1)):(i[s]=oe(o),i[s].c(),_(i[s],1),i[s].m(t,null))}for(Ie(),s=r.length;s<i.length;s+=1)c(s);ye()}},i(l){if(!n){for(let u=0;u<r.length;u+=1)_(i[u]);n=!0}},o(l){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)A(i[u]);n=!1},d(l){l&&g(t),pe(i,l)}}}function Me(e,t,n){let r;return he(e,fe,i=>n(0,r=i)),[r]}class Oe extends S{constructor(t){super(),C(this,t,Me,je,k,{})}}function Be(e){let t,n,r,i,c,l,u;return t=new xe({}),i=new we({}),l=new Oe({}),{c(){V(t.$$.fragment),n=j(),r=m("div"),V(i.$$.fragment),c=j(),V(l.$$.fragment),h(r,"class","absolute bottom-2 right-2 scale-110")},m(s,o){O(t,s,o),v(s,n,o),v(s,r,o),O(i,r,null),v(s,c,o),O(l,s,o),u=!0},p:a,i(s){u||(_(t.$$.fragment,s),_(i.$$.fragment,s),_(l.$$.fragment,s),u=!0)},o(s){A(t.$$.fragment,s),A(i.$$.fragment,s),A(l.$$.fragment,s),u=!1},d(s){B(t,s),s&&g(n),s&&g(r),B(i),s&&g(c),B(l,s)}}}class qe extends S{constructor(t){super(),C(this,t,null,Be,k,{})}}new qe({target:document.getElementById("app")});
