(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerpolicy&&(c.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?c.credentials="include":l.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function b(){}function pe(e){return e()}function oe(){return Object.create(null)}function Y(e){e.forEach(pe)}function Ie(e){return typeof e=="function"}function M(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let J;function X(e,t){return J||(J=document.createElement("a")),J.href=t,e===J.href}function ve(e){return Object.keys(e).length===0}function De(e,...t){if(e==null)return b;const i=e.subscribe(...t);return i.unsubscribe?()=>i.unsubscribe():i}function ne(e,t,i){e.$$.on_destroy.push(De(t,i))}function a(e,t){e.appendChild(t)}function w(e,t,i){e.insertBefore(t,i||null)}function k(e){e.parentNode.removeChild(e)}function he(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function p(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function y(){return L(" ")}function ke(){return L("")}function ie(e,t,i,n){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i,n)}function m(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function ye(e){return Array.from(e.childNodes)}function S(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let le;function G(e){le=e}const F=[],re=[],R=[],ce=[],we=Promise.resolve();let ee=!1;function Ne(){ee||(ee=!0,we.then(ge))}function te(e){R.push(e)}const Z=new Set;let Q=0;function ge(){const e=le;do{for(;Q<F.length;){const t=F[Q];Q++,G(t),Le(t.$$)}for(G(null),F.length=0,Q=0;re.length;)re.pop()();for(let t=0;t<R.length;t+=1){const i=R[t];Z.has(i)||(Z.add(i),i())}R.length=0}while(F.length);for(;ce.length;)ce.pop()();ee=!1,Z.clear(),G(e)}function Le(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}const U=new Set;let O;function _e(){O={r:0,c:[],p:O}}function be(){O.r||Y(O.c),O=O.p}function N(e,t){e&&e.i&&(U.delete(e),e.i(t))}function A(e,t,i,n){if(e&&e.o){if(U.has(e))return;U.add(e),O.c.push(()=>{U.delete(e),n&&(i&&e.d(1),n())}),e.o(t)}else n&&n()}function V(e){e&&e.c()}function P(e,t,i,n){const{fragment:l,on_mount:c,on_destroy:s,after_update:o}=e.$$;l&&l.m(t,i),n||te(()=>{const r=c.map(pe).filter(Ie);s?s.push(...r):Y(r),e.$$.on_mount=[]}),o.forEach(te)}function T(e,t){const i=e.$$;i.fragment!==null&&(Y(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(F.push(e),Ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,i,n,l,c,s,o=[-1]){const r=le;G(e);const u=e.$$={fragment:null,ctx:null,props:c,update:b,not_equal:l,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:oe(),dirty:o,skip_bound:!1,root:t.target||r.$$.root};s&&s(u.root);let g=!1;if(u.ctx=i?i(e,t.props||{},(d,$,...f)=>{const h=f.length?f[0]:$;return u.ctx&&l(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),g&&Ae(e,d)),$}):[],u.update(),g=!0,Y(u.before_update),u.fragment=n?n(u.ctx):!1,t.target){if(t.hydrate){const d=ye(t.target);u.fragment&&u.fragment.l(d),d.forEach(k)}else u.fragment&&u.fragment.c();t.intro&&N(e.$$.fragment),P(e,t.target,t.anchor,t.customElement),ge()}G(r)}class z{$destroy(){T(this,1),this.$destroy=b}$on(t,i){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(i),()=>{const l=n.indexOf(i);l!==-1&&n.splice(l,1)}}$set(t){this.$$set&&!ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=[];function $e(e,t=b){let i;const n=new Set;function l(o){if(M(e,o)&&(e=o,i)){const r=!q.length;for(const u of n)u[1](),q.push(u,e);if(r){for(let u=0;u<q.length;u+=2)q[u][0](q[u+1]);q.length=0}}}function c(o){l(o(e))}function s(o,r=b){const u=[o,r];return n.add(u),n.size===1&&(i=t(l)||b),o(e),()=>{n.delete(u),n.size===0&&(i(),i=null)}}return{set:l,update:c,subscribe:s}}let se=$e(2),K=$e([{lID:0,lName:"Personal",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lItems:[{iID:0,iName:"Milk",iDone:!1,iAmount:2,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:1,iName:"Bread",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:2,iName:"Eggs",iDone:!1,iAmount:12,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"}]},{lID:1,lName:"Work",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lItems:[{iID:0,iName:"Cake",iDone:!1,iAmount:2,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:1,iName:"Water",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:2,iName:"Muffins",iDone:!1,iAmount:12,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"}]},{lID:2,lName:"WG",lIcon:"https://cdn-icons-png.flaticon.com/512/151/151917.png",lItems:[{iID:0,iName:"Beer",iDone:!0,iAmount:2,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:1,iName:"Chrips",iDone:!1,iAmount:1,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"},{iID:2,iName:"Vodka",iDone:!1,iAmount:12,iIcon:"https://cdn-icons-png.flaticon.com/512/2662/2662503.png"}]}]);function Ee(e){let t,i,n;return{c(){t=p("button"),t.innerHTML='<div class="bg-green-400 p-2 rounded-full"><img src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" alt="plus" width="40px"/></div>'},m(l,c){w(l,t,c),i||(n=ie(t,"click",e[1]),i=!0)},p:b,i:b,o:b,d(l){l&&k(t),i=!1,n()}}}function xe(e){function t(n){se.set(999)}return[t,()=>t()]}class je extends z{constructor(t){super(),W(this,t,xe,Ee,M,{})}}function Oe(e){let t;return{c(){t=p("div"),t.innerHTML=`<div class="ml-2"><img src="https://cdn-icons-png.flaticon.com/512/8550/8550935.png" alt="burger" width="40px"/></div> 
    <div class=""><h2 class="text-2xl">Your Lists</h2></div> 
    <div class="mr-2"><img src="https://thispersondoesnotexist.com/image" alt="profile" width="40px" class="rounded-full"/></div>`,m(t,"class","w-full bg-green-400 h-20 pt-5 sticky flex justify-between")},m(i,n){w(i,t,n)},p:b,i:b,o:b,d(i){i&&k(t)}}}class Me extends z{constructor(t){super(),W(this,t,null,Oe,M,{})}}function Be(e){let t,i,n,l,c,s,o,r,u=e[0]+1+"",g,d,$,f=e[1][e[0]].lName+"",h,v,D,E,x=e[1][e[0]].lItems.filter(ue).length+"",B,C,j=e[1][e[0]].lItems.length+"",H;return{c(){t=p("div"),i=p("div"),n=p("img"),c=y(),s=p("div"),o=p("h2"),r=L("No. "),g=L(u),d=y(),$=p("h2"),h=L(f),v=y(),D=p("div"),E=p("h2"),B=L(x),C=L(" / "),H=L(j),X(n.src,l=e[1][e[0]].lIcon)||m(n,"src",l),m(n,"alt",""),m(n,"width","40px"),m(i,"class",""),m(D,"class","flex "),m(s,"class","flex w-full justify-between ml-10"),m(t,"class","flex justify-between m-5 border-b-4 pb-2")},m(_,I){w(_,t,I),a(t,i),a(i,n),a(t,c),a(t,s),a(s,o),a(o,r),a(o,g),a(s,d),a(s,$),a($,h),a(s,v),a(s,D),a(D,E),a(E,B),a(E,C),a(E,H)},p(_,[I]){I&3&&!X(n.src,l=_[1][_[0]].lIcon)&&m(n,"src",l),I&1&&u!==(u=_[0]+1+"")&&S(g,u),I&3&&f!==(f=_[1][_[0]].lName+"")&&S(h,f),I&3&&x!==(x=_[1][_[0]].lItems.filter(ue).length+"")&&S(B,x),I&3&&j!==(j=_[1][_[0]].lItems.length+"")&&S(H,j)},i:b,o:b,d(_){_&&k(t)}}}const ue=e=>e.iDone==!0;function Ce(e,t,i){let{listID:n=0}=t,l;return K.subscribe(c=>{i(1,l=c)}),e.$$set=c=>{"listID"in c&&i(0,n=c.listID)},[n,l]}class qe extends z{constructor(t){super(),W(this,t,Ce,Be,M,{listID:0})}}function fe(e,t,i){const n=e.slice();return n[3]=t[i],n}function ae(e){let t,i,n,l,c,s;i=new qe({props:{listID:e[3].lID}});function o(){return e[2](e[3])}return{c(){t=p("button"),V(i.$$.fragment),n=y(),m(t,"class","w-full")},m(r,u){w(r,t,u),P(i,t,null),a(t,n),l=!0,c||(s=ie(t,"click",o),c=!0)},p(r,u){e=r;const g={};u&1&&(g.listID=e[3].lID),i.$set(g)},i(r){l||(N(i.$$.fragment,r),l=!0)},o(r){A(i.$$.fragment,r),l=!1},d(r){r&&k(t),T(i),c=!1,s()}}}function Se(e){let t,i,n=e[0],l=[];for(let s=0;s<n.length;s+=1)l[s]=ae(fe(e,n,s));const c=s=>A(l[s],1,1,()=>{l[s]=null});return{c(){t=p("div");for(let s=0;s<l.length;s+=1)l[s].c();m(t,"class","")},m(s,o){w(s,t,o);for(let r=0;r<l.length;r+=1)l[r].m(t,null);i=!0},p(s,[o]){if(o&3){n=s[0];let r;for(r=0;r<n.length;r+=1){const u=fe(s,n,r);l[r]?(l[r].p(u,o),N(l[r],1)):(l[r]=ae(u),l[r].c(),N(l[r],1),l[r].m(t,null))}for(_e(),r=n.length;r<l.length;r+=1)c(r);be()}},i(s){if(!i){for(let o=0;o<n.length;o+=1)N(l[o]);i=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)A(l[o]);i=!1},d(s){s&&k(t),he(l,s)}}}function Pe(e,t,i){let n;ne(e,K,s=>i(0,n=s));function l(s){se.set(s)}return[n,l,s=>l(s.lID)]}class Te extends z{constructor(t){super(),W(this,t,Pe,Se,M,{})}}function de(e,t,i){const n=e.slice();return n[5]=t[i],n[6]=t,n[7]=i,n}function me(e){let t,i,n,l,c,s,o=e[5].iName+"",r,u,g,d,$=e[5].iAmount+"",f,h,v,D,E,x,B,C,j;function H(){e[3].call(D,e[5])}return{c(){t=p("div"),i=p("div"),n=p("img"),c=y(),s=p("div"),r=L(o),u=y(),g=p("div"),d=p("div"),f=L($),h=y(),v=p("label"),D=p("input"),E=y(),x=p("span"),B=y(),X(n.src,l=e[5].iIcon)||m(n,"src",l),m(n,"alt","Icon"),m(n,"width","40px"),m(i,"class",""),m(s,"class","text-2xl bg-green-400 place-content-center align-middle "),m(d,"class","mr-5 bg-green-400 text-2xl rounded-full px-2 align-middle"),m(D,"type","checkbox"),m(x,"class","checkmark"),m(v,"class","container scale-125"),m(g,"class","flex place-content-center"),m(t,"class","flex flex-row justify-between p-2 border-b-2 mx-2 items-center")},m(_,I){w(_,t,I),a(t,i),a(i,n),a(t,c),a(t,s),a(s,r),a(t,u),a(t,g),a(g,d),a(d,f),a(g,h),a(g,v),a(v,D),D.checked=e[2][e[0]].lItems[e[5].iID].iDone,a(v,E),a(v,x),a(t,B),C||(j=ie(D,"change",H),C=!0)},p(_,I){e=_,I&3&&!X(n.src,l=e[5].iIcon)&&m(n,"src",l),I&3&&o!==(o=e[5].iName+"")&&S(r,o),I&3&&$!==($=e[5].iAmount+"")&&S(f,$),I&7&&(D.checked=e[2][e[0]].lItems[e[5].iID].iDone)},d(_){_&&k(t),C=!1,j()}}}function We(e){let t,i=e[1][e[0]].lItems,n=[];for(let l=0;l<i.length;l+=1)n[l]=me(de(e,i,l));return{c(){t=p("div");for(let l=0;l<n.length;l+=1)n[l].c();m(t,"class","")},m(l,c){w(l,t,c);for(let s=0;s<n.length;s+=1)n[s].m(t,null)},p(l,[c]){if(c&7){i=l[1][l[0]].lItems;let s;for(s=0;s<i.length;s+=1){const o=de(l,i,s);n[s]?n[s].p(o,c):(n[s]=me(o),n[s].c(),n[s].m(t,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=i.length}},i:b,o:b,d(l){l&&k(t),he(n,l)}}}function ze(e,t,i){let n;ne(e,K,o=>i(2,n=o));let l;K.subscribe(o=>{i(1,l=o)});let{openListID:c=0}=t;function s(o){n[c].lItems[o.iID].iDone=this.checked,K.set(n)}return e.$$set=o=>{"openListID"in o&&i(0,c=o.openListID)},[c,l,n,s]}class He extends z{constructor(t){super(),W(this,t,ze,We,M,{openListID:0})}}function Fe(e){let t,i;return t=new He({props:{openListID:e[0]}}),{c(){V(t.$$.fragment)},m(n,l){P(t,n,l),i=!0},p(n,l){const c={};l&1&&(c.openListID=n[0]),t.$set(c)},i(n){i||(N(t.$$.fragment,n),i=!0)},o(n){A(t.$$.fragment,n),i=!1},d(n){T(t,n)}}}function Ge(e){let t,i;return t=new Te({}),{c(){V(t.$$.fragment)},m(n,l){P(t,n,l),i=!0},p:b,i(n){i||(N(t.$$.fragment,n),i=!0)},o(n){A(t.$$.fragment,n),i=!1},d(n){T(t,n)}}}function Ke(e){let t,i,n,l,c,s,o,r,u;t=new Me({}),l=new je({});const g=[Ge,Fe],d=[];function $(f,h){return f[0]==999?0:1}return s=$(e),o=d[s]=g[s](e),{c(){V(t.$$.fragment),i=y(),n=p("div"),V(l.$$.fragment),c=y(),o.c(),r=ke(),m(n,"class","absolute bottom-2 right-2 scale-110")},m(f,h){P(t,f,h),w(f,i,h),w(f,n,h),P(l,n,null),w(f,c,h),d[s].m(f,h),w(f,r,h),u=!0},p(f,[h]){let v=s;s=$(f),s===v?d[s].p(f,h):(_e(),A(d[v],1,1,()=>{d[v]=null}),be(),o=d[s],o?o.p(f,h):(o=d[s]=g[s](f),o.c()),N(o,1),o.m(r.parentNode,r))},i(f){u||(N(t.$$.fragment,f),N(l.$$.fragment,f),N(o),u=!0)},o(f){A(t.$$.fragment,f),A(l.$$.fragment,f),A(o),u=!1},d(f){T(t,f),f&&k(i),f&&k(n),T(l),f&&k(c),d[s].d(f),f&&k(r)}}}function Ve(e,t,i){let n;return ne(e,se,l=>i(0,n=l)),[n]}class Ye extends z{constructor(t){super(),W(this,t,Ve,Ke,M,{})}}new Ye({target:document.getElementById("app")});
