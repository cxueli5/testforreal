import{s as F,n as P,i as y}from"./scheduler.61ee4713.js";import{S as E,i as g,s as w,e as D,c as C,a as m,f as h,g as _,h as d,j as v,x as k,l as b,k as u,A as p,B as x,m as N,n as V,o as B}from"./index.ad37b216.js";function I(a){let s,e,i,o;return{c(){s=_("button"),e=N(a[1]),this.h()},l(t){s=d(t,"BUTTON",{class:!0});var l=v(s);e=V(l,a[1]),l.forEach(h),this.h()},h(){u(s,"class","view-pdf-btn svelte-fph8h")},m(t,l){m(t,s,l),p(s,e),i||(o=x(s,"click",a[4]),i=!0)},p(t,l){l&2&&B(e,t[1])},d(t){t&&h(s),i=!1,o()}}}function O(a){let s,e,i,o,t,l="Close PDF",r,f;return{c(){s=_("div"),e=_("iframe"),o=w(),t=_("button"),t.textContent=l,this.h()},l(c){s=d(c,"DIV",{class:!0});var n=v(s);e=d(n,"IFRAME",{src:!0,frameborder:!0,class:!0}),v(e).forEach(h),o=C(n),t=d(n,"BUTTON",{class:!0,"data-svelte-h":!0}),k(t)!=="svelte-dxiemh"&&(t.textContent=l),n.forEach(h),this.h()},h(){y(e.src,i=a[0])||u(e,"src",i),u(e,"frameborder","0"),u(e,"class","svelte-fph8h"),u(t,"class","close-pdf-btn svelte-fph8h"),u(s,"class","pdf-preview svelte-fph8h")},m(c,n){m(c,s,n),p(s,e),p(s,o),p(s,t),r||(f=x(t,"click",a[5]),r=!0)},p(c,n){n&1&&!y(e.src,i=c[0])&&u(e,"src",i)},d(c){c&&h(s),r=!1,f()}}}function T(a){let s,e,i=`PDF cannot be displayed on mobile devices. Please view on a larger screen
      (tablet, laptop).`,o,t,l="Close Error",r,f;return{c(){s=_("div"),e=_("p"),e.textContent=i,o=w(),t=_("button"),t.textContent=l,this.h()},l(c){s=d(c,"DIV",{class:!0});var n=v(s);e=d(n,"P",{style:!0,"data-svelte-h":!0}),k(e)!=="svelte-tpctlk"&&(e.textContent=i),o=C(n),t=d(n,"BUTTON",{class:!0,"data-svelte-h":!0}),k(t)!=="svelte-1jc1gz1"&&(t.textContent=l),n.forEach(h),this.h()},h(){b(e,"color","white"),b(e,"font-weight","bold"),b(e,"margin-top","10px"),b(e,"text-align","center"),u(t,"class","close-error-btn svelte-fph8h"),u(s,"class","error-message")},m(c,n){m(c,s,n),p(s,e),p(s,o),p(s,t),r||(f=x(t,"click",a[6]),r=!0)},p:P,d(c){c&&h(s),r=!1,f()}}}function U(a){let s,e;function i(r,f){return r[2]?O:I}let o=i(a),t=o(a),l=a[3]&&T(a);return{c(){t.c(),s=w(),l&&l.c(),e=D()},l(r){t.l(r),s=C(r),l&&l.l(r),e=D()},m(r,f){t.m(r,f),m(r,s,f),l&&l.m(r,f),m(r,e,f)},p(r,[f]){o===(o=i(r))&&t?t.p(r,f):(t.d(1),t=o(r),t&&(t.c(),t.m(s.parentNode,s))),r[3]?l?l.p(r,f):(l=T(r),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:P,o:P,d(r){r&&(h(s),h(e)),t.d(r),l&&l.d(r)}}}function j(a,s,e){let{filePath:i}=s,{buttonText:o="View PDF"}=s,t=!1,l=!1;function r(){window.innerWidth<=768?e(3,l=!0):(e(2,t=!0),e(3,l=!1))}function f(){e(2,t=!1),e(3,l=!1)}function c(){e(3,l=!1)}return a.$$set=n=>{"filePath"in n&&e(0,i=n.filePath),"buttonText"in n&&e(1,o=n.buttonText)},[i,o,t,l,r,f,c]}class S extends E{constructor(s){super(),g(this,s,j,U,F,{filePath:0,buttonText:1})}}export{S as P};
