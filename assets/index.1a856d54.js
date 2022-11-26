(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(i){if(i.ep)return;i.ep=!0;const c=l(i);fetch(i.href,c)}})();function b(){}function he(e){return e()}function re(){return Object.create(null)}function Y(e){e.forEach(he)}function Ie(e){return typeof e=="function"}function C(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let J;function X(e,t){return J||(J=document.createElement("a")),J.href=t,e===J.href}function ve(e){return Object.keys(e).length===0}function De(e,...t){if(e==null)return b;const l=e.subscribe(...t);return l.unsubscribe?()=>l.unsubscribe():l}function ne(e,t,l){e.$$.on_destroy.push(De(t,l))}function a(e,t){e.appendChild(t)}function k(e,t,l){e.insertBefore(t,l||null)}function v(e){e.parentNode.removeChild(e)}function pe(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function p(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function D(){return w(" ")}function ke(){return w("")}function le(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function h(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function ye(e){return Array.from(e.childNodes)}function P(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let ie;function G(e){ie=e}const F=[],oe=[],R=[],ce=[],we=Promise.resolve();let ee=!1;function Ne(){ee||(ee=!0,we.then(_e))}function te(e){R.push(e)}const Z=new Set;let Q=0;function _e(){const e=ie;do{for(;Q<F.length;){const t=F[Q];Q++,G(t),Le(t.$$)}for(G(null),F.length=0,Q=0;oe.length;)oe.pop()();for(let t=0;t<R.length;t+=1){const l=R[t];Z.has(l)||(Z.add(l),l())}R.length=0}while(F.length);for(;ce.length;)ce.pop()();ee=!1,Z.clear(),G(e)}function Le(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}const U=new Set;let B;function ge(){B={r:0,c:[],p:B}}function be(){B.r||Y(B.c),B=B.p}function y(e,t){e&&e.i&&(U.delete(e),e.i(t))}function A(e,t,l,n){if(e&&e.o){if(U.has(e))return;U.add(e),B.c.push(()=>{U.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}function V(e){e&&e.c()}function T(e,t,l,n){const{fragment:i,on_mount:c,on_destroy:s,after_update:r}=e.$$;i&&i.m(t,l),n||te(()=>{const o=c.map(he).filter(Ie);s?s.push(...o):Y(o),e.$$.on_mount=[]}),r.forEach(te)}function x(e,t){const l=e.$$;l.fragment!==null&&(Y(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(F.push(e),Ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,l,n,i,c,s,r=[-1]){const o=ie;G(e);const u=e.$$={fragment:null,ctx:null,props:c,update:b,not_equal:i,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:re(),dirty:r,skip_bound:!1,root:t.target||o.$$.root};s&&s(u.root);let g=!1;if(u.ctx=l?l(e,t.props||{},(d,I,...f)=>{const m=f.length?f[0]:I;return u.ctx&&i(u.ctx[d],u.ctx[d]=m)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](m),g&&Ae(e,d)),I}):[],u.update(),g=!0,Y(u.before_update),u.fragment=n?n(u.ctx):!1,t.target){if(t.hydrate){const d=ye(t.target);u.fragment&&u.fragment.l(d),d.forEach(v)}else u.fragment&&u.fragment.c();t.intro&&y(e.$$.fragment),T(e,t.target,t.anchor,t.customElement),_e()}G(o)}class z{$destroy(){x(this,1),this.$destroy=b}$on(t,l){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const i=n.indexOf(l);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const S=[];function $e(e,t=b){let l;const n=new Set;function i(r){if(C(e,r)&&(e=r,l)){const o=!S.length;for(const u of n)u[1](),S.push(u,e);if(o){for(let u=0;u<S.length;u+=2)S[u][0](S[u+1]);S.length=0}}}function c(r){i(r(e))}function s(r,o=b){const u=[r,o];return n.add(u),n.size===1&&(l=t(i)||b),r(e),()=>{n.delete(u),n.size===0&&(l(),l=null)}}return{set:i,update:c,subscribe:s}}let se=$e(2),K=$e([{lID:0,lName:"Personal",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lItems:[{iID:0,iName:"Milk",iDone:!1,iAmount:2,iIcon:""},{iID:1,iName:"Bread",iDone:!1},{iID:2,iName:"Eggs",iDone:!1,amount:12}]},{lID:1,lName:"Work",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lItems:[{iID:0,iName:"Cake",iDone:!1,iAmount:2,iIcon:""},{iID:1,iName:"Water",iDone:!1,iAmount:1,iIcon:""},{iID:2,iName:"Muffins",iDone:!1,iAmount:12,iIcon:""}]},{lID:2,lName:"WG",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lItems:[{iID:0,iName:"Beer",iDone:!0,iAmount:2,iIcon:""},{iID:1,iName:"Chrips",iDone:!1,iAmount:1,iIcon:""},{iID:2,iName:"Vodka",iDone:!1,iAmount:12,iIcon:""}]}]);function Ee(e){let t,l,n;return{c(){t=p("button"),t.innerHTML='<div class="bg-green-400 p-2 rounded-full"><img src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" alt="plus" width="40px"/></div>'},m(i,c){k(i,t,c),l||(n=le(t,"click",e[1]),l=!0)},p:b,i:b,o:b,d(i){i&&v(t),l=!1,n()}}}function je(e){function t(n){se.set(999)}return[t,()=>t()]}class Oe extends z{constructor(t){super(),W(this,t,je,Ee,C,{})}}function Me(e){let t;return{c(){t=p("div"),t.innerHTML=`<div class="ml-2"><img src="https://cdn-icons-png.flaticon.com/512/8550/8550935.png" alt="burger" width="40px"/></div> 
    <div class=""><h2 class="text-2xl">Your Lists</h2></div> 
    <div class="mr-2"><img src="https://thispersondoesnotexist.com/image" alt="profile" width="40px" class="rounded-full"/></div>`,h(t,"class","w-full bg-green-400 h-20 pt-5 sticky flex justify-between")},m(l,n){k(l,t,n)},p:b,i:b,o:b,d(l){l&&v(t)}}}class Be extends z{constructor(t){super(),W(this,t,null,Me,C,{})}}function Ce(e){let t,l,n,i,c,s,r,o,u=e[0]+1+"",g,d,I,f=e[1][e[0]].lName+"",m,$,E,N,j=e[1][e[0]].lItems.filter(ue).length+"",O,H,q=e[1][e[0]].lItems.length+"",L;return{c(){t=p("div"),l=p("div"),n=p("img"),c=D(),s=p("div"),r=p("h2"),o=w("No. "),g=w(u),d=D(),I=p("h2"),m=w(f),$=D(),E=p("div"),N=p("h2"),O=w(j),H=w(" / "),L=w(q),X(n.src,i=e[1][e[0]].lIcon)||h(n,"src",i),h(n,"alt",""),h(n,"width","40px"),h(l,"class",""),h(E,"class","flex "),h(s,"class","flex w-full justify-between ml-10"),h(t,"class","flex justify-between m-5 border-b-4 pb-2")},m(_,M){k(_,t,M),a(t,l),a(l,n),a(t,c),a(t,s),a(s,r),a(r,o),a(r,g),a(s,d),a(s,I),a(I,m),a(s,$),a(s,E),a(E,N),a(N,O),a(N,H),a(N,L)},p(_,[M]){M&3&&!X(n.src,i=_[1][_[0]].lIcon)&&h(n,"src",i),M&1&&u!==(u=_[0]+1+"")&&P(g,u),M&3&&f!==(f=_[1][_[0]].lName+"")&&P(m,f),M&3&&j!==(j=_[1][_[0]].lItems.filter(ue).length+"")&&P(O,j),M&3&&q!==(q=_[1][_[0]].lItems.length+"")&&P(L,q)},i:b,o:b,d(_){_&&v(t)}}}const ue=e=>e.iDone==!0;function qe(e,t,l){let{listID:n=0}=t,i;return K.subscribe(c=>{l(1,i=c)}),e.$$set=c=>{"listID"in c&&l(0,n=c.listID)},[n,i]}class Se extends z{constructor(t){super(),W(this,t,qe,Ce,C,{listID:0})}}function fe(e,t,l){const n=e.slice();return n[3]=t[l],n}function ae(e){let t,l,n,i,c,s;l=new Se({props:{listID:e[3].lID}});function r(){return e[2](e[3])}return{c(){t=p("button"),V(l.$$.fragment),n=D(),h(t,"class","w-full")},m(o,u){k(o,t,u),T(l,t,null),a(t,n),i=!0,c||(s=le(t,"click",r),c=!0)},p(o,u){e=o;const g={};u&1&&(g.listID=e[3].lID),l.$set(g)},i(o){i||(y(l.$$.fragment,o),i=!0)},o(o){A(l.$$.fragment,o),i=!1},d(o){o&&v(t),x(l),c=!1,s()}}}function Pe(e){let t,l,n=e[0],i=[];for(let s=0;s<n.length;s+=1)i[s]=ae(fe(e,n,s));const c=s=>A(i[s],1,1,()=>{i[s]=null});return{c(){t=p("div");for(let s=0;s<i.length;s+=1)i[s].c();h(t,"class","")},m(s,r){k(s,t,r);for(let o=0;o<i.length;o+=1)i[o].m(t,null);l=!0},p(s,[r]){if(r&3){n=s[0];let o;for(o=0;o<n.length;o+=1){const u=fe(s,n,o);i[o]?(i[o].p(u,r),y(i[o],1)):(i[o]=ae(u),i[o].c(),y(i[o],1),i[o].m(t,null))}for(ge(),o=n.length;o<i.length;o+=1)c(o);be()}},i(s){if(!l){for(let r=0;r<n.length;r+=1)y(i[r]);l=!0}},o(s){i=i.filter(Boolean);for(let r=0;r<i.length;r+=1)A(i[r]);l=!1},d(s){s&&v(t),pe(i,s)}}}function Te(e,t,l){let n;ne(e,K,s=>l(0,n=s));function i(s){se.set(s)}return[n,i,s=>i(s.lID)]}class xe extends z{constructor(t){super(),W(this,t,Te,Pe,C,{})}}function de(e,t,l){const n=e.slice();return n[5]=t[l],n[6]=t,n[7]=l,n}function me(e){let t,l,n,i,c,s,r=e[5].iName+"",o,u,g=e[5].iAmount+"",d,I,f,m,$,E,N,j,O,H;function q(){e[3].call($,e[5])}return{c(){t=p("div"),l=p("div"),n=p("img"),c=D(),s=p("div"),o=w(r),u=D(),d=w(g),I=D(),f=p("div"),m=p("label"),$=p("input"),E=D(),N=p("span"),j=D(),X(n.src,i=e[5].iIcon)||h(n,"src",i),h(n,"alt","Icon"),h(l,"class",""),h(s,"class",""),h($,"type","checkbox"),h(N,"class","checkmark"),h(m,"class","container"),h(f,"class",""),h(t,"class","flex flex-row justify-between p-2 border-b-2 mx-2 h")},m(L,_){k(L,t,_),a(t,l),a(l,n),a(t,c),a(t,s),a(s,o),a(s,u),a(s,d),a(t,I),a(t,f),a(f,m),a(m,$),$.checked=e[2][e[0]].lItems[e[5].iID].iDone,a(m,E),a(m,N),a(t,j),O||(H=le($,"change",q),O=!0)},p(L,_){e=L,_&3&&!X(n.src,i=e[5].iIcon)&&h(n,"src",i),_&3&&r!==(r=e[5].iName+"")&&P(o,r),_&3&&g!==(g=e[5].iAmount+"")&&P(d,g),_&7&&($.checked=e[2][e[0]].lItems[e[5].iID].iDone)},d(L){L&&v(t),O=!1,H()}}}function We(e){let t,l=e[1][e[0]].lItems,n=[];for(let i=0;i<l.length;i+=1)n[i]=me(de(e,l,i));return{c(){t=p("div");for(let i=0;i<n.length;i+=1)n[i].c();h(t,"class","")},m(i,c){k(i,t,c);for(let s=0;s<n.length;s+=1)n[s].m(t,null)},p(i,[c]){if(c&7){l=i[1][i[0]].lItems;let s;for(s=0;s<l.length;s+=1){const r=de(i,l,s);n[s]?n[s].p(r,c):(n[s]=me(r),n[s].c(),n[s].m(t,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=l.length}},i:b,o:b,d(i){i&&v(t),pe(n,i)}}}function ze(e,t,l){let n;ne(e,K,r=>l(2,n=r));let i;K.subscribe(r=>{l(1,i=r)});let{openListID:c=0}=t;function s(r){n[c].lItems[r.iID].iDone=this.checked,K.set(n)}return e.$$set=r=>{"openListID"in r&&l(0,c=r.openListID)},[c,i,n,s]}class He extends z{constructor(t){super(),W(this,t,ze,We,C,{openListID:0})}}function Fe(e){let t,l;return t=new He({props:{openListID:e[0]}}),{c(){V(t.$$.fragment)},m(n,i){T(t,n,i),l=!0},p(n,i){const c={};i&1&&(c.openListID=n[0]),t.$set(c)},i(n){l||(y(t.$$.fragment,n),l=!0)},o(n){A(t.$$.fragment,n),l=!1},d(n){x(t,n)}}}function Ge(e){let t,l;return t=new xe({}),{c(){V(t.$$.fragment)},m(n,i){T(t,n,i),l=!0},p:b,i(n){l||(y(t.$$.fragment,n),l=!0)},o(n){A(t.$$.fragment,n),l=!1},d(n){x(t,n)}}}function Ke(e){let t,l,n,i,c,s,r,o,u;t=new Be({}),i=new Oe({});const g=[Ge,Fe],d=[];function I(f,m){return f[0]==999?0:1}return s=I(e),r=d[s]=g[s](e),{c(){V(t.$$.fragment),l=D(),n=p("div"),V(i.$$.fragment),c=D(),r.c(),o=ke(),h(n,"class","absolute bottom-2 right-2 scale-110")},m(f,m){T(t,f,m),k(f,l,m),k(f,n,m),T(i,n,null),k(f,c,m),d[s].m(f,m),k(f,o,m),u=!0},p(f,[m]){let $=s;s=I(f),s===$?d[s].p(f,m):(ge(),A(d[$],1,1,()=>{d[$]=null}),be(),r=d[s],r?r.p(f,m):(r=d[s]=g[s](f),r.c()),y(r,1),r.m(o.parentNode,o))},i(f){u||(y(t.$$.fragment,f),y(i.$$.fragment,f),y(r),u=!0)},o(f){A(t.$$.fragment,f),A(i.$$.fragment,f),A(r),u=!1},d(f){x(t,f),f&&v(l),f&&v(n),x(i),f&&v(c),d[s].d(f),f&&v(o)}}}function Ve(e,t,l){let n;return ne(e,se,i=>l(0,n=i)),[n]}class Ye extends z{constructor(t){super(),W(this,t,Ve,Ke,C,{})}}new Ye({target:document.getElementById("app")});
