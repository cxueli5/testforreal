import{s as Y,n as W,i as ee}from"../chunks/scheduler.61ee4713.js";import{S as K,i as Z,e as te,a as k,f as g,g as u,m as se,h as p,j as O,n as ie,k as f,A as o,B as le,o as re,s as h,c as v,x as _,r as R,D as ne,u as U,v as N,d as z,t as F,w as G}from"../chunks/index.ad37b216.js";import{b as T}from"../chunks/paths.88e73484.js";import{S as X}from"../chunks/Step.b8234421.js";import{P as ae}from"../chunks/PDFViewer.5bf604eb.js";function oe(m){let t,r,l,e;return{c(){t=u("button"),r=se(m[1]),this.h()},l(s){t=p(s,"BUTTON",{class:!0});var i=O(t);r=ie(i,m[1]),i.forEach(g),this.h()},h(){f(t,"class","view-image-btn svelte-2xfb09")},m(s,i){k(s,t,i),o(t,r),l||(e=le(t,"click",m[3]),l=!0)},p(s,i){i&2&&re(r,s[1])},d(s){s&&g(t),l=!1,e()}}}function de(m){let t,r,l,e,s,i="Close",a,$;return{c(){t=u("div"),r=u("img"),e=h(),s=u("button"),s.textContent=i,this.h()},l(b){t=p(b,"DIV",{class:!0});var d=O(t);r=p(d,"IMG",{src:!0,alt:!0,class:!0}),e=v(d),s=p(d,"BUTTON",{class:!0,"data-svelte-h":!0}),_(s)!=="svelte-18jd9s3"&&(s.textContent=i),d.forEach(g),this.h()},h(){ee(r.src,l=m[0])||f(r,"src",l),f(r,"alt","Image Preview"),f(r,"class","svelte-2xfb09"),f(s,"class","close-image-btn svelte-2xfb09"),f(t,"class","image-preview svelte-2xfb09")},m(b,d){k(b,t,d),o(t,r),o(t,e),o(t,s),a||($=le(s,"click",m[4]),a=!0)},p(b,d){d&1&&!ee(r.src,l=b[0])&&f(r,"src",l)},d(b){b&&g(t),a=!1,$()}}}function ce(m){let t;function r(s,i){return s[2]?de:oe}let l=r(m),e=l(m);return{c(){e.c(),t=te()},l(s){e.l(s),t=te()},m(s,i){e.m(s,i),k(s,t,i)},p(s,[i]){l===(l=r(s))&&e?e.p(s,i):(e.d(1),e=l(s),e&&(e.c(),e.m(t.parentNode,t)))},i:W,o:W,d(s){s&&g(t),e.d(s)}}}function ue(m,t,r){let{imagePath:l}=t,{buttonText:e="View PDF"}=t,s=!1;function i(){r(2,s=!0)}function a(){r(2,s=!1)}return m.$$set=$=>{"imagePath"in $&&r(0,l=$.imagePath),"buttonText"in $&&r(1,e=$.buttonText)},[l,e,s,i,a]}class pe extends K{constructor(t){super(),Z(this,t,ue,ce,Y,{imagePath:0,buttonText:1})}}function ge(m){let t,r=`<b style="color: var(--xpeach);">Data Viz Intern (Developer, Straits Times Digigraphics)</b>
          |
          <b style="color: var(--xblue);">Aug 2023 - Apr 2024 (8 months)</b>`,l,e,s=`<ul class="circle-bullet-list svelte-1ddjqki"><li class="svelte-1ddjqki">Developed interactive articles using Svelte</li> <li class="svelte-1ddjqki">Create collaterals using Adobe Illustrator and Adobe Photoshop</li> <li class="svelte-1ddjqki">Collaborative work with local and international developers and
              designers</li> <li class="svelte-1ddjqki">Collaborate with designers for UI design, pre-planning stage such
              as: research, ideation and content planning for mockups</li> <li class="svelte-1ddjqki">Publish and maintain weekly discover articles</li></ul> <br/> <b style="color: var(--xgreen);">Projects (not shown / no link):</b> <br/> <p><b style="color: var(--xblue);">Taylor Swift 2024</b> - Participated
            in pre-planning stage (Research, UI design, Content planning for mockup),
            Assisted in development of anagram game.</p> <br/> <p><b style="color:var(--xpurple);">Skills:</b> Svelte · Adobe Illustrator
            · Adobe XD · Adobe Photoshop · GitHub · UI Design · NodeJS · JavaScript
            · HTML5 · CSS · Microsoft Excel · Interpersonal Skills · Team Collaboration</p>`,i,a,$=`<div class="grid-item"><img src="${`${T}/intern/arts-analysis.jpg`}" alt="Arts Analysis"/><br/> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2024/01/discover-art-georgette-chen/index.html" target="_blank" rel="noopener noreferrer">Discover SG Art Link</a></button> <br/><br/> <p>Developed template for designers to adjust zoom levels, Tested
              with landscape, potrait and svg artworks.</p></div> <div class="grid-item"><img src="${`${T}/intern/food.jpg`}" alt="Food in your hood"/><br/> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://youtu.be/h2X7KYX63V0?si=TpTIYVaEzzyZ2IBA" target="_blank" rel="noopener noreferrer">Food in your Hood Link</a></button> <br/><br/> <ul class="circle-bullet-list svelte-1ddjqki" style="width: 300px; margin-right:auto; margin-left:auto;"><li class="svelte-1ddjqki">Assisted development works (from end Aug 2023)</li> <li class="svelte-1ddjqki">Styling (overall website)</li> <li class="svelte-1ddjqki">Create custom components (Image Slider, Food label, Custom
                buttons, Custom props to hide show content etc.)</li> <li class="svelte-1ddjqki">Spreadsheet database maintainence</li></ul></div> <div class="grid-item"><img src="${`${T}/intern/superlative.jpg`}" alt="Superlative Cartoons"/><br/> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/12/superlative-singapore/index.html" target="_blank" rel="noopener noreferrer">Superlative Cartoons Link</a></button> <br/><br/> <p>Development Works (Adjust current template to get desired context
              card)</p></div> <div class="grid-item"><img src="${`${T}/intern/arts-pick.jpg`}" alt="Arts Calendar Events"/><br/> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/10/arts-calendar-events-singapore/index.html" target="_blank" rel="noopener noreferrer">Arts Calendar Events Link</a></button> <br/><br/> <p>Assisted with styling, UI enhancement, update of events</p></div> <div class="grid-item"><img src="${`${T}/intern/cartoons.jpg`}" alt="Cartoons"/><br/> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/12/cartoons-of-the-week-december-26/index.html" target="_blank" rel="noopener noreferrer">Cartoons Link</a></button> <br/><br/> <p><b style="color: var(--xpink);">Weekly Discover Task</b></p> <br/> <p>Designed newsletter thumbnail using Adobe Illustrator and cover
              image using Adobe Photoshop, <br/><br/>Assisted designers and
              artists with content input and deployment to publish on The
              Straits Times</p></div> <div class="grid-item"><img src="${`${T}/intern/wip.jpg`}" alt="Week in Pictures"/><br/> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/10/arts-calendar-events-singapore/index.html" target="_blank" rel="noopener noreferrer">Week in Pictures Link</a></button> <br/><br/> <p><b style="color: var(--xpink);">Weekly Discover Task</b></p> <br/> <p>Designed newsletter blurb using Adobe Illustrator, <br/><br/>
              Assist journalists to update content and deployment to publish on Straits
              Times</p></div>`;return{c(){t=u("p"),t.innerHTML=r,l=h(),e=u("div"),e.innerHTML=s,i=h(),a=u("div"),a.innerHTML=$,this.h()},l(b){t=p(b,"P",{"data-svelte-h":!0}),_(t)!=="svelte-m9uv73"&&(t.innerHTML=r),l=v(b),e=p(b,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),_(e)!=="svelte-bemy42"&&(e.innerHTML=s),i=v(b),a=p(b,"DIV",{class:!0,"data-svelte-h":!0}),_(a)!=="svelte-eyo40j"&&(a.innerHTML=$),this.h()},h(){f(e,"id","internContent"),f(e,"class","svelte-1ddjqki"),f(a,"class","grid grid-cols-1 md:grid-cols-3 gap-4")},m(b,d){k(b,t,d),k(b,l,d),k(b,e,d),k(b,i,d),k(b,a,d)},p:W,d(b){b&&(g(t),g(l),g(e),g(i),g(a))}}}function be(m){let t,r=`<b style="color: var(--xpeach);">Software Developer Intern</b>
          |
          <b style="color: var(--xblue);">May 2022 - Aug 2022 (4 months)</b>`,l,e,s,i=`<li class="svelte-1ddjqki">C# asp.net mvc project (self-learn), includes Microsoft SQL Server
              Integration</li> <li class="svelte-1ddjqki">Project I was working on: <a href="https://studytrustintl.com/" target="_blank">https://studytrustintl.com/</a></li>`,a,$,b,d,E,j,M,H,B,I,q=`<b style="color:var(--xpurple);">Skills:</b> C# · ASP.NET MVC · Microsoft
            SQL Server`,w,C,S=`<div class="grid-item"><img src="${`${T}/intern/studytrust.jpeg`}" alt="Study Trust" style="margin-right: auto; margin-left:auto;"/><br/> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://studytrustintl.com/" target="_blank" rel="noopener noreferrer">Study Trust International Link</a></button> <br/><br/> <p>Assist in redevelopment of website in C# Asp.Net for easier
              maintenance.</p></div>`,D;return d=new ae({props:{filePath:`${T}/testimonials/E-Speed.pdf#toolbar=0`,buttonText:"View Testimonial"}}),{c(){t=u("p"),t.innerHTML=r,l=h(),e=u("div"),s=u("ul"),s.innerHTML=i,a=h(),$=u("br"),b=h(),R(d.$$.fragment),E=h(),j=u("br"),M=h(),H=u("br"),B=h(),I=u("p"),I.innerHTML=q,w=h(),C=u("div"),C.innerHTML=S,this.h()},l(n){t=p(n,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1ckmhkh"&&(t.innerHTML=r),l=v(n),e=p(n,"DIV",{id:!0,class:!0});var c=O(e);s=p(c,"UL",{class:!0,"data-svelte-h":!0}),_(s)!=="svelte-1u76s3u"&&(s.innerHTML=i),a=v(c),$=p(c,"BR",{}),b=v(c),U(d.$$.fragment,c),E=v(c),j=p(c,"BR",{}),M=v(c),H=p(c,"BR",{}),B=v(c),I=p(c,"P",{"data-svelte-h":!0}),_(I)!=="svelte-1ojlw2v"&&(I.innerHTML=q),c.forEach(g),w=v(n),C=p(n,"DIV",{class:!0,"data-svelte-h":!0}),_(C)!=="svelte-17ntjao"&&(C.innerHTML=S),this.h()},h(){f(s,"class","circle-bullet-list svelte-1ddjqki"),f(e,"id","internContent"),f(e,"class","svelte-1ddjqki"),f(C,"class","grid grid-cols-1 md:grid-cols-1 gap-4")},m(n,c){k(n,t,c),k(n,l,c),k(n,e,c),o(e,s),o(e,a),o(e,$),o(e,b),N(d,e,null),o(e,E),o(e,j),o(e,M),o(e,H),o(e,B),o(e,I),k(n,w,c),k(n,C,c),D=!0},p:W,i(n){D||(z(d.$$.fragment,n),D=!0)},o(n){F(d.$$.fragment,n),D=!1},d(n){n&&(g(t),g(l),g(e),g(w),g(C)),G(d)}}}function me(m){let t,r=`<b style="color: var(--xpeach);">Internet Marketing Intern + Part Time</b>
          |
          <b style="color: var(--xblue);">March 2020 - Sep 2020 (8 months)</b>`,l,e,s,i=`<li class="svelte-1ddjqki">Managed and maintained company&#39;s blog page</li> <li class="svelte-1ddjqki">Redesign company&#39;s website homepage</li> <li class="svelte-1ddjqki">Revamp store locator page</li> <li class="svelte-1ddjqki">Designed promotional posters in-store and online (e.g. featured on
              TV products)</li> <li class="svelte-1ddjqki">Did product photoshoot and generate new ideas for bundle sales</li> <li class="svelte-1ddjqki">Assisted online sales via chatbot and in-store sales</li> <li class="svelte-1ddjqki">Used company&#39;s third-party software to send electronic mail to
              store members (require HTML, CSS and PS knowledge)</li>`,a,$,b,d,E="Part Time:",j,M,H='<li class="svelte-1ddjqki">Managed company&#39;s blog page</li> <li class="svelte-1ddjqki">Assist online and in-store sales</li>',B,I,q,w,C,S,D,n,c,V,P=`<b style="color:var(--xpurple);">Skills:</b> Cascading Style Sheets
            (CSS) · HTML5 · Adobe Photoshop · JavaScript`,A,L,J=`<div class="grid-item"><img src="${`${T}/icons/bic.png`}" alt="Born in Colour" style="margin-right: auto; margin-left:auto;"/><br/> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.bornincolour.com/" target="_blank" rel="noopener noreferrer">Home page Link</a></button> <br/><br/> <p>Revamp homepage</p></div> <div class="grid-item"><img src="${`${T}/intern/bic2.jpeg`}" alt="Born in Colour" style="margin-right: auto; margin-left:auto;"/><br/> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.bornincolour.com/blog/" target="_blank" rel="noopener noreferrer">Tips &amp; Inspiration Blog Link</a></button> <br/><br/> <p><b>Highlight blogs:</b></p> <br/> <ul class="circle-bullet-list svelte-1ddjqki"><li class="svelte-1ddjqki">Tired of working from home during the circuit breaker period in
                Singapore? Make your workspace more fun with the Macaron Family!</li> <li class="svelte-1ddjqki">All the korean blogs</li> <li class="svelte-1ddjqki">Designed new blog thumbnails and redesigned old blog thumbnails</li> <li class="svelte-1ddjqki">Propose using tags to categorise articles, link to collections
                and leverage korean media feature to attract younger audience.
                Designed offline posters to put in-store.</li> <li class="svelte-1ddjqki">SEO integration to improve Google search rankings</li> <li class="svelte-1ddjqki">Blog site maintanence and update</li></ul></div> <div class="grid-item"><img src="${`${T}/intern/bic3.jpeg`}" alt="Born in Colour" style="margin-right: auto; margin-left:auto;"/><br/> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.bornincolour.com/store-locator" target="_blank" rel="noopener noreferrer">Store Locator Link</a></button> <br/><br/> <p>Redesigned store locator page</p></div>`,Q;return w=new pe({props:{imagePath:`${T}/testimonials/Bic-Testimonial.jpeg`,buttonText:"View Testimonial"}}),{c(){t=u("p"),t.innerHTML=r,l=h(),e=u("div"),s=u("ul"),s.innerHTML=i,a=h(),$=u("br"),b=h(),d=u("b"),d.textContent=E,j=h(),M=u("ul"),M.innerHTML=H,B=h(),I=u("br"),q=h(),R(w.$$.fragment),C=h(),S=u("br"),D=h(),n=u("br"),c=h(),V=u("p"),V.innerHTML=P,A=h(),L=u("div"),L.innerHTML=J,this.h()},l(y){t=p(y,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1tj3s2h"&&(t.innerHTML=r),l=v(y),e=p(y,"DIV",{id:!0,class:!0});var x=O(e);s=p(x,"UL",{class:!0,"data-svelte-h":!0}),_(s)!=="svelte-1n5ifo6"&&(s.innerHTML=i),a=v(x),$=p(x,"BR",{}),b=v(x),d=p(x,"B",{"data-svelte-h":!0}),_(d)!=="svelte-2phhq4"&&(d.textContent=E),j=v(x),M=p(x,"UL",{class:!0,"data-svelte-h":!0}),_(M)!=="svelte-nabafw"&&(M.innerHTML=H),B=v(x),I=p(x,"BR",{}),q=v(x),U(w.$$.fragment,x),C=v(x),S=p(x,"BR",{}),D=v(x),n=p(x,"BR",{}),c=v(x),V=p(x,"P",{"data-svelte-h":!0}),_(V)!=="svelte-1adrtag"&&(V.innerHTML=P),x.forEach(g),A=v(y),L=p(y,"DIV",{class:!0,"data-svelte-h":!0}),_(L)!=="svelte-ynwzrw"&&(L.innerHTML=J),this.h()},h(){f(s,"class","circle-bullet-list svelte-1ddjqki"),f(M,"class","circle-bullet-list svelte-1ddjqki"),f(e,"id","internContent"),f(e,"class","svelte-1ddjqki"),f(L,"class","grid grid-cols-1 md:grid-cols-3 gap-4")},m(y,x){k(y,t,x),k(y,l,x),k(y,e,x),o(e,s),o(e,a),o(e,$),o(e,b),o(e,d),o(e,j),o(e,M),o(e,B),o(e,I),o(e,q),N(w,e,null),o(e,C),o(e,S),o(e,D),o(e,n),o(e,c),o(e,V),k(y,A,x),k(y,L,x),Q=!0},p:W,i(y){Q||(z(w.$$.fragment,y),Q=!0)},o(y){F(w.$$.fragment,y),Q=!1},d(y){y&&(g(t),g(l),g(e),g(A),g(L)),G(w)}}}function fe(m){let t,r=`<b style="color: var(--xpeach);">Part Time Vaccination Administration</b>
          |
          <b style="color: var(--xblue);">March 2021 - Dec 2021 (10 months)</b>`,l,e,s=`<ul class="circle-bullet-list svelte-1ddjqki"><li class="svelte-1ddjqki">Administered registration for patients coming in for COVID-19
              vaccination</li> <li class="svelte-1ddjqki">Usher patients to their allocated vaccination booths</li></ul> <br/> <p><b style="color:var(--xpurple);">Skills:</b> Data Entry · Administrative
            Assistance · Customer Service</p>`;return{c(){t=u("p"),t.innerHTML=r,l=h(),e=u("div"),e.innerHTML=s,this.h()},l(i){t=p(i,"P",{"data-svelte-h":!0}),_(t)!=="svelte-gz3o99"&&(t.innerHTML=r),l=v(i),e=p(i,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),_(e)!=="svelte-5gcxyd"&&(e.innerHTML=s),this.h()},h(){f(e,"id","internContent"),f(e,"class","svelte-1ddjqki")},m(i,a){k(i,t,a),k(i,l,a),k(i,e,a)},p:W,d(i){i&&(g(t),g(l),g(e))}}}function he(m){let t,r=`<b style="color: var(--xpeach);">Part Time Tearista @ LiHo</b>
          |
          <b style="color: var(--xblue);">Nov 2017 - Nov 2019 (2 years)</b>`,l,e,s='<b>Responsibilities:</b> <ul class="circle-bullet-list svelte-1ddjqki"><li class="svelte-1ddjqki">Cashier</li> <li class="svelte-1ddjqki">Handle customers enquiries</li> <li class="svelte-1ddjqki">Maintain store&#39;s cleanliness</li> <li class="svelte-1ddjqki">Ensure that stocks are enough to last for the day</li> <li class="svelte-1ddjqki">Tally and report the sales of the day</li></ul>';return{c(){t=u("p"),t.innerHTML=r,l=h(),e=u("div"),e.innerHTML=s,this.h()},l(i){t=p(i,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1rzs2zm"&&(t.innerHTML=r),l=v(i),e=p(i,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),_(e)!=="svelte-3c4506"&&(e.innerHTML=s),this.h()},h(){f(e,"id","internContent"),f(e,"class","svelte-1ddjqki")},m(i,a){k(i,t,a),k(i,l,a),k(i,e,a)},p:W,d(i){i&&(g(t),g(l),g(e))}}}function ve(m){let t,r,l,e,s='<h6 class="text-large sm:text-xl md:text-2xl">Polytechnic / University</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">Internship</span> Experience</h3>',i,a,$,b,d,E,j,M,H,B='<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">Part Time</span> Jobs</h3>',I,q,w,C,S,D;return $=new X({props:{step:m[0][0],$$slots:{default:[ge]},$$scope:{ctx:m}}}),d=new X({props:{step:m[0][1],$$slots:{default:[be]},$$scope:{ctx:m}}}),j=new X({props:{step:m[0][2],$$slots:{default:[me]},$$scope:{ctx:m}}}),w=new X({props:{step:m[0][3],$$slots:{default:[fe]},$$scope:{ctx:m}}}),S=new X({props:{step:m[0][4],$$slots:{default:[he]},$$scope:{ctx:m}}}),{c(){t=h(),r=u("main"),l=u("section"),e=u("div"),e.innerHTML=s,i=h(),a=u("div"),R($.$$.fragment),b=h(),R(d.$$.fragment),E=h(),R(j.$$.fragment),M=h(),H=u("div"),H.innerHTML=B,I=h(),q=u("div"),R(w.$$.fragment),C=h(),R(S.$$.fragment),this.h()},l(n){ne("svelte-gmvvf3",document.head).forEach(g),t=v(n),r=p(n,"MAIN",{class:!0});var V=O(r);l=p(V,"SECTION",{class:!0,id:!0});var P=O(l);e=p(P,"DIV",{class:!0,"data-svelte-h":!0}),_(e)!=="svelte-1oi87mj"&&(e.innerHTML=s),i=v(P),a=p(P,"DIV",{class:!0});var A=O(a);U($.$$.fragment,A),b=v(A),U(d.$$.fragment,A),E=v(A),U(j.$$.fragment,A),A.forEach(g),M=v(P),H=p(P,"DIV",{class:!0,"data-svelte-h":!0}),_(H)!=="svelte-kecngy"&&(H.innerHTML=B),I=v(P),q=p(P,"DIV",{class:!0});var L=O(q);U(w.$$.fragment,L),C=v(L),U(S.$$.fragment,L),L.forEach(g),P.forEach(g),V.forEach(g),this.h()},h(){document.title="Internship",f(e,"class","flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"),f(a,"class","grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25"),f(H,"class","flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"),f(q,"class","grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25"),f(l,"class","py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"),f(l,"id","projects"),f(r,"class","flex flex-col flex-1 p-4")},m(n,c){k(n,t,c),k(n,r,c),o(r,l),o(l,e),o(l,i),o(l,a),N($,a,null),o(a,b),N(d,a,null),o(a,E),N(j,a,null),o(l,M),o(l,H),o(l,I),o(l,q),N(w,q,null),o(q,C),N(S,q,null),D=!0},p(n,[c]){const V={};c&2&&(V.$$scope={dirty:c,ctx:n}),$.$set(V);const P={};c&2&&(P.$$scope={dirty:c,ctx:n}),d.$set(P);const A={};c&2&&(A.$$scope={dirty:c,ctx:n}),j.$set(A);const L={};c&2&&(L.$$scope={dirty:c,ctx:n}),w.$set(L);const J={};c&2&&(J.$$scope={dirty:c,ctx:n}),S.$set(J)},i(n){D||(z($.$$.fragment,n),z(d.$$.fragment,n),z(j.$$.fragment,n),z(w.$$.fragment,n),z(S.$$.fragment,n),D=!0)},o(n){F($.$$.fragment,n),F(d.$$.fragment,n),F(j.$$.fragment,n),F(w.$$.fragment,n),F(S.$$.fragment,n),D=!1},d(n){n&&(g(t),g(r)),G($),G(d),G(j),G(w),G(S)}}}function $e(m){return[[{name:"SPH Media",image:`${T}/icons/sph_logo.jpeg`},{name:"E-Speed Stabilizing Network Technology Pte. Ltd.",image:`${T}/icons/espeed_logo.png`},{name:"Born in Colour",image:`${T}/icons/bic.png`},{name:"Fullerton Health",image:`${T}/icons/fullerton.jpeg`},{name:"Royal T Group Pte. Ltd.",image:`${T}/icons/liho.jpeg`}]]}class ke extends K{constructor(t){super(),Z(this,t,$e,ve,Y,{})}}function xe(m){let t,r;return t=new ke({}),{c(){R(t.$$.fragment)},l(l){U(t.$$.fragment,l)},m(l,e){N(t,l,e),r=!0},p:W,i(l){r||(z(t.$$.fragment,l),r=!0)},o(l){F(t.$$.fragment,l),r=!1},d(l){G(t,l)}}}class Ce extends K{constructor(t){super(),Z(this,t,null,xe,Y,{})}}export{Ce as component};