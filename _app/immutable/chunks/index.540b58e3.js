function b(){}const K=t=>t;function kt(t,e){for(const n in e)t[n]=e[n];return t}function ut(t){return t()}function rt(){return Object.create(null)}function T(t){t.forEach(ut)}function P(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let G;function te(t,e){return G||(G=document.createElement("a")),G.href=e,t===G.href}function Tt(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t){let e;return ft(t,n=>e=n)(),e}function ne(t,e,n){t.$$.on_destroy.push(ft(e,n))}function ie(t,e,n,i){if(t){const s=_t(t,e,n,i);return t[0](s)}}function _t(t,e,n,i){return t[1]&&i?kt(n.ctx.slice(),t[1](i(e))):n.ctx}function se(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function re(t,e,n,i,s,l){if(s){const r=_t(e,n,i,l);t.p(r,s)}}function oe(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ce(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function le(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ae(t){const e={};for(const n in t)e[n]=!0;return e}function ue(t,e,n){return t.set(n),e}function fe(t){return t&&P(t.destroy)?t.destroy:b}const dt=typeof window<"u";let Q=dt?()=>window.performance.now():()=>Date.now(),tt=dt?t=>requestAnimationFrame(t):b;const S=new Set;function ht(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&tt(ht)}function U(t){let e;return S.size===0&&tt(ht),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}const _e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let V=!1;function Nt(){V=!0}function At(){V=!1}function Ct(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function St(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:Ct(1,s,h=>e[n[h]].claim_order,a))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(r[c],f)}}function Mt(t,e){t.appendChild(e)}function mt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Dt(t){const e=et("style");return Pt(mt(t),e),e.sheet}function Pt(t,e){return Mt(t.head||t,e),e.sheet}function jt(t,e){if(V){for(St(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){t.insertBefore(e,n||null)}function Lt(t,e,n){V&&!n?jt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function de(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function pt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function he(){return nt(" ")}function me(){return nt("")}function pe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Rt=["width","height"];function ge(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Rt.indexOf(i)===-1?t[i]=e[i]:Ot(t,i,e[i])}function Bt(t){return Array.from(t.childNodes)}function gt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function yt(t,e,n,i,s=!1){gt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function xt(t,e,n,i){return yt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ye(t,e,n){return xt(t,e,n,et)}function xe(t,e,n){return xt(t,e,n,pt)}function qt(t,e){return yt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>nt(e),!0)}function be(t){return qt(t," ")}function ot(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function $e(t,e){const n=ot(t,"HTML_TAG_START",0),i=ot(t,"HTML_TAG_END",n);if(n===i)return new ct(void 0,e);gt(t);const s=t.splice(n,i-n+1);L(s[0]),L(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ct(l,e)}function we(t,e){e=""+e,t.data!==e&&(t.data=e)}function ve(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Ee(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class zt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=pt(n.nodeName):this.e=et(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(L)}}class ct extends zt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}}function ke(t,e){return new t(e)}const I=new Map;let J=0;function Ft(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Gt(t,e){const n={stylesheet:Dt(e),rules:{}};return I.set(t,n),n}function O(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*l(m);a+=m*100+`%{${r(g,1-g)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Ft(f)}_${o}`,h=mt(t),{stylesheet:u,rules:d}=I.get(h)||Gt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,J+=1,_}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),J-=s,J||Wt())}function Wt(){tt(()=>{J||(I.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&L(e)}),I.clear())})}function Te(t,e,n,i){if(!e)return b;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return b;const{delay:l=0,duration:r=300,easing:o=K,start:c=Q()+l,end:a=c+r,tick:f=b,css:_}=n(t,{from:e,to:s},i);let h=!0,u=!1,d;function p(){_&&(d=O(t,0,1,r,l,o,_)),l||(u=!0)}function m(){_&&R(t,d),h=!1}return U(g=>{if(!u&&g>=c&&(u=!0),u&&g>=a&&(f(1,0),m()),!h)return!1;if(u){const $=g-c,x=0+1*o($/r);f(x,1-x)}return!0}),p(),f(0,1),m}function Ne(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,It(t,s)}}function It(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let B;function H(t){B=t}function q(){if(!B)throw new Error("Function called outside component initialization");return B}function Ae(t){q().$$.on_mount.push(t)}function Ce(t){q().$$.after_update.push(t)}function Se(){const t=q();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=bt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Me(t,e){return q().$$.context.set(t,e),e}function De(t){return q().$$.context.get(t)}function Pe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const C=[],lt=[];let M=[];const at=[],$t=Promise.resolve();let Z=!1;function wt(){Z||(Z=!0,$t.then(vt))}function je(){return wt(),$t}function D(t){M.push(t)}const Y=new Set;let A=0;function vt(){if(A!==0)return;const t=B;do{try{for(;A<C.length;){const e=C[A];A++,H(e),Jt(e.$$)}}catch(e){throw C.length=0,A=0,e}for(H(null),C.length=0,A=0;lt.length;)lt.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];Y.has(n)||(Y.add(n),n())}M.length=0}while(C.length);for(;at.length;)at.pop()();Z=!1,Y.clear(),H(t)}function Jt(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function Kt(t){const e=[],n=[];M.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),M=e}let j;function it(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function N(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const W=new Set;let k;function He(){k={r:0,c:[],p:k}}function Le(){k.r||T(k.c),k=k.p}function Et(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Qt(t,e,n,i){if(t&&t.o){if(W.has(t))return;W.add(t),k.c.push(()=>{W.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const st={duration:0};function Oe(t,e,n){const i={direction:"in"};let s=e(t,n,i),l=!1,r,o,c=0;function a(){r&&R(t,r)}function f(){const{delay:h=0,duration:u=300,easing:d=K,tick:p=b,css:m}=s||st;m&&(r=O(t,0,1,u,h,d,m,c++)),p(0,1);const g=Q()+h,$=g+u;o&&o.abort(),l=!0,D(()=>N(t,!0,"start")),o=U(x=>{if(l){if(x>=$)return p(1,0),N(t,!0,"end"),a(),l=!1;if(x>=g){const w=d((x-g)/u);p(w,1-w)}}return l})}let _=!1;return{start(){_||(_=!0,R(t),P(s)?(s=s(i),it().then(f)):f())},invalidate(){_=!1},end(){l&&(a(),l=!1)}}}function Re(t,e,n){const i={direction:"out"};let s=e(t,n,i),l=!0,r;const o=k;o.r+=1;function c(){const{delay:a=0,duration:f=300,easing:_=K,tick:h=b,css:u}=s||st;u&&(r=O(t,1,0,f,a,_,u));const d=Q()+a,p=d+f;D(()=>N(t,!1,"start")),U(m=>{if(l){if(m>=p)return h(0,1),N(t,!1,"end"),--o.r||T(o.c),!1;if(m>=d){const g=_((m-d)/f);h(1-g,g)}}return l})}return P(s)?it().then(()=>{s=s(i),c()}):c(),{end(a){a&&s.tick&&s.tick(1,0),l&&(r&&R(t,r),l=!1)}}}function Be(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function f(){a&&R(t,a)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=K,tick:g=b,css:$}=l||st,x={start:Q()+d,b:u};u||(x.group=k,k.r+=1),o||c?c=x:($&&(f(),a=O(t,r,u,p,d,m,$)),u&&g(0,1),o=_(x,p),D(()=>N(t,u,"start")),U(w=>{if(c&&w>c.start&&(o=_(c,p),c=null,N(t,o.b,"start"),$&&(f(),a=O(t,r,o.b,o.duration,0,m,l.css))),o){if(w>=o.end)g(r=o.b,1-r),N(t,o.b,"end"),c||(o.b?f():--o.group.r||T(o.group.c)),o=null;else if(w>=o.start){const z=w-o.start;r=o.a+o.d*m(z/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(u){P(l)?it().then(()=>{l=l(s),h(u)}):h(u)},end(){f(),o=c=null}}}function Ut(t,e){Qt(t,1,1,()=>{e.delete(t.key)})}function qe(t,e){t.f(),Ut(t,e)}function ze(t,e,n,i,s,l,r,o,c,a,f,_){let h=t.length,u=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],g=new Map,$=new Map,x=[];for(d=u;d--;){const y=_(s,l,d),v=n(y);let E=r.get(v);E?i&&x.push(()=>E.p(y,e)):(E=a(v,y),E.c()),g.set(v,m[d]=E),v in p&&$.set(v,Math.abs(d-p[v]))}const w=new Set,z=new Set;function X(y){Et(y,1),y.m(o,f),r.set(y.key,y),f=y.first,u--}for(;h&&u;){const y=m[u-1],v=t[h-1],E=y.key,F=v.key;y===v?(f=y.first,h--,u--):g.has(F)?!r.has(E)||w.has(E)?X(y):z.has(F)?h--:$.get(E)>$.get(F)?(z.add(E),X(y)):(w.add(F),h--):(c(v,r),h--)}for(;h--;){const y=t[h];g.has(y.key)||c(y,r)}for(;u;)X(m[u-1]);return T(x),m}function Fe(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ge(t){t&&t.c()}function We(t,e){t&&t.l(e)}function Vt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||D(()=>{const r=t.$$.on_mount.map(ut).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...r):T(r),t.$$.on_mount=[]}),l.forEach(D)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(Kt(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(C.push(t),wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ie(t,e,n,i,s,l,r,o=[-1]){const c=B;H(t);const a=t.$$={fragment:null,ctx:[],props:l,update:b,not_equal:s,bound:rt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:rt(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&s(a.ctx[_],a.ctx[_]=d)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](d),f&&Yt(t,_)),h}):[],a.update(),f=!0,T(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Nt();const _=Bt(e.target);a.fragment&&a.fragment.l(_),_.forEach(L)}else a.fragment&&a.fragment.c();e.intro&&Et(t.$$.fragment),Vt(t,e.target,e.anchor,e.customElement),At(),vt()}H(c)}class Je{$destroy(){Xt(this,1),this.$destroy=b}$on(e,n){if(!P(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as $,Vt as A,Xt as B,ie as C,jt as D,re as E,oe as F,se as G,ae as H,kt as I,ce as J,pe as K,Pe as L,P as M,T as N,Me as O,ge as P,Fe as Q,le as R,Je as S,De as T,ct as U,pt as V,Ee as W,$e as X,xe as Y,b as Z,ne as _,he as a,ze as a0,Ne as a1,It as a2,Te as a3,D as a4,Oe as a5,Re as a6,qe as a7,_e as a8,Se as a9,Be as aa,ft as ab,te as ac,de as ad,fe as ae,ee as af,K as ag,Lt as b,be as c,Qt as d,me as e,Le as f,Et as g,L as h,Ie as i,Ce as j,et as k,ye as l,Bt as m,Ot as n,Ae as o,ve as p,nt as q,qt as r,Zt as s,je as t,we as u,He as v,lt as w,ke as x,Ge as y,We as z};
