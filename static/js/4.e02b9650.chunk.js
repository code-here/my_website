(this.webpackJsonpmy_website=this.webpackJsonpmy_website||[]).push([[4],{105:function(e,t,c){},106:function(e,t,c){},241:function(e,t,c){},242:function(e,t,c){},243:function(e,t,c){},244:function(e,t,c){},251:function(e,t,c){"use strict";c.r(t);var n,r,l=c(0),a=c(2),s=c(14),i=c(9),o=(c(105),c(1)),u=Object(a.f)((function(e){var t=e.match,c=e.project;return Object(o.jsxs)(i.c,{to:"".concat(t.path,"/").concat(c.id),className:"project-preview",children:[Object(o.jsx)("div",{className:"project-name",children:c.title}),Object(o.jsx)("div",{className:"project-desc",children:c.description})]})})),j=c(15),d=(c(106),function(e){e.history;var t=Object(l.useState)("all"),c=Object(s.a)(t,2),n=c[0],r=c[1],a=Object(l.useContext)(j.a).projects,i=function(e){document.querySelectorAll(".filter").forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected"),r(e.target.attributes.value.value)};return Object(o.jsxs)("div",{className:"projects-container",children:[Object(o.jsxs)("div",{className:"filter-container",children:[Object(o.jsx)("h3",{className:"title",children:"Filter"}),Object(o.jsxs)("div",{className:"filter-type-container",children:[Object(o.jsxs)("div",{className:"filter selected",value:"all",onClick:i,children:[" ","All"," "]}),Object(o.jsxs)("div",{className:"filter",value:"react",onClick:i,children:[" ","React"]}),Object(o.jsxs)("div",{className:"filter",value:"rust",onClick:i,children:[" ","Rust"]}),Object(o.jsxs)("div",{className:"filter",value:"web",onClick:i,children:[" ","WEB"]}),Object(o.jsxs)("div",{className:"filter",value:"cli",onClick:i,children:[" ","CLI"]})]})]}),Object(o.jsxs)("div",{className:"project-preview-container",children:[Object(o.jsx)("h3",{className:"title",children:"Projects"}),a.map((function(e){return n===e.technology||n===e.type||"all"===n?Object(o.jsx)(u,{project:e},e.id):""}))]})]})}),h=c(57),b=["title","titleId"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}function m(e,t){var c=e.title,a=e.titleId,s=p(e,b);return l.createElement("svg",f({id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 122.88 92.24",ref:t,"aria-labelledby":a},s),n||(n=l.createElement("defs",null,l.createElement("style",null,".cls-1{fill-rule:evenodd;}"))),void 0===c?l.createElement("title",{id:a},"world-wide-web"):c?l.createElement("title",{id:a},c):null,r||(r=l.createElement("path",{className:"cls-1",d:"M93.65,71.49H82.56q-1.4,2-3,4c-1.11,1.36-2.31,2.72-3.58,4.08s-2.44,2.5-3.77,3.76q-1.62,1.55-3.37,3.06l.93-.17c.64-.13,1.29-.28,1.94-.45s1.3-.34,1.94-.54,1.26-.41,1.9-.64,1.25-.49,1.86-.76,1.26-.55,1.85-.84,1.2-.6,1.79-.92,1.17-.64,1.73-1,1.13-.69,1.66-1S85.5,79.29,86,78.9s1-.79,1.53-1.2,1-.83,1.47-1.27,1-.89,1.42-1.35.71-.73,1-1.09.68-.74,1-1.12.52-.61.77-.92l.37-.46ZM16,56.75,10.68,35.49h7.64l2.44,13h.16l2.71-13h7.42l2.83,12.85H34l2.32-12.85H44L38.69,56.75H30.44l-3-11.41h-.22l-3,11.41Zm34.09,0L44.78,35.49h7.64l2.43,13H55l2.71-13h7.42L68,48.34h.17l2.32-12.85H78.1L72.79,56.75H64.54l-3-11.41h-.22l-3,11.41Zm34.1,0L78.88,35.49h7.64l2.43,13h.16l2.72-13h7.42l2.82,12.85h.16l2.33-12.85h7.64l-5.32,21.26H98.63l-3-11.41h-.22l-3,11.41ZM9.48,22.19H22l0,0c.38-.62.77-1.25,1.18-1.86s.82-1.2,1.26-1.79.88-1.16,1.34-1.73.95-1.13,1.45-1.67,1-1.11,1.55-1.63h0c.51-.53,1-1,1.57-1.52s1.09-1,1.66-1.44l1.74-1.35h0c.6-.44,1.2-.86,1.79-1.25s1.24-.82,1.87-1.2,1.28-.75,2-1.11,1.31-.69,2-1,1.37-.64,2.05-.93h0c.71-.31,1.42-.59,2.12-.84S47,2.27,47.76,2s1.46-.43,2.19-.62,1.46-.35,2.22-.51h0C53,.76,53.7.63,54.45.51S56,.31,56.73.23,58.29.1,59.07.06,60.66,0,61.44,0C63,0,64.58.08,66.13.23c.78.08,1.55.17,2.3.28s1.51.25,2.27.4,1.47.31,2.2.5,1.45.38,2.17.6,1.43.47,2.12.72,1.39.53,2.08.82l.21.1c.66.28,1.31.58,2,.9s1.34.67,2,1h0c.65.36,1.3.73,1.93,1.11h0c.64.39,1.27.79,1.89,1.19s1.19.82,1.77,1.25,1.17.89,1.74,1.35,1.13.95,1.68,1.45,1.1,1,1.62,1.54l0,0c.51.51,1,1,1.51,1.57s1,1.09,1.44,1.66.91,1.14,1.35,1.74.86,1.2,1.27,1.81v0c.41.62.81,1.24,1.18,1.85l0,0H113.4a9.49,9.49,0,0,1,9.48,9.48v28.9a9.5,9.5,0,0,1-2.78,6.68l0,0a9.46,9.46,0,0,1-6.67,2.78H100.89l0,0c-.38.63-.77,1.25-1.18,1.87s-.82,1.2-1.26,1.79-.88,1.16-1.34,1.72h0c-.48.58-1,1.14-1.45,1.68h0c-.5.55-1,1.09-1.52,1.6l0,0q-.76.78-1.56,1.5c-.54.49-1.09,1-1.66,1.44s-1.15.91-1.74,1.35-1.2.86-1.81,1.27-1.23.81-1.86,1.19-1.29.75-2,1.11-1.32.7-2,1-1.37.64-2,.94-1.41.58-2.13.85-1.44.5-2.17.73-1.46.43-2.18.62-1.48.35-2.24.51-1.51.29-2.26.4-1.52.2-2.3.28c-1.56.15-3.13.23-4.71.23-.78,0-1.57,0-2.36-.06s-1.55-.09-2.33-.17-1.55-.17-2.3-.28-1.5-.25-2.27-.4S50.71,91,50,90.84s-1.45-.39-2.17-.61-1.42-.46-2.11-.71-1.41-.54-2.1-.84l-.2-.09c-.66-.28-1.32-.58-2-.91s-1.32-.65-2-1-1.3-.72-1.93-1.11-1.3-.8-1.92-1.21-1.2-.82-1.79-1.25-1.16-.88-1.73-1.35-1.13-1-1.68-1.46-1.11-1-1.62-1.53l0,0c-.52-.51-1-1-1.51-1.57s-1-1.09-1.44-1.66-.91-1.15-1.35-1.74-.86-1.2-1.26-1.81S22.4,70.73,22,70.1l0,0H9.48A9.51,9.51,0,0,1,0,60.57V31.67a9.49,9.49,0,0,1,9.48-9.48Zm44.6,64.18c-1.17-1-2.29-2-3.37-3.06q-2-1.87-3.76-3.75c-1.27-1.36-2.47-2.72-3.58-4.08s-2.09-2.65-3-4H29.29l.36.46.78.92c.65.75,1.34,1.49,2,2.2l0,0c.46.46.93.91,1.41,1.34s1,.87,1.47,1.27,1,.81,1.53,1.2,1.06.76,1.6,1.13,1.09.71,1.67,1.06,1.13.67,1.7,1,1.2.64,1.81.92,1.22.57,1.85.84l.13.08c.61.25,1.21.49,1.82.71s1.23.43,1.87.63h0c.62.2,1.26.38,1.9.54s1.3.31,1.95.43l.86.16ZM29.24,20.75H41q1.39-2,3-3.95t3.5-4.08c1.15-1.26,2.38-2.53,3.67-3.81,1.06-1,2.17-2.1,3.31-3.15L54,5.85,53.18,6c-.64.13-1.3.28-2,.45s-1.3.35-1.93.54-1.27.42-1.91.65-1.25.48-1.86.75-1.26.56-1.86.85-1.2.59-1.79.91-1.17.65-1.74,1-1.11.69-1.64,1-1.09.74-1.61,1.13-1,.78-1.53,1.19-1,.83-1.47,1.28-1,.88-1.42,1.35l0,0c-.35.35-.7.71-1,1.07s-.68.74-1,1.11l-.78.93-.38.48ZM68.43,5.8c1.15,1,2.26,2.09,3.31,3.14,1.29,1.26,2.5,2.52,3.65,3.78s2.41,2.72,3.5,4.08,2,2.63,3,3.95H93.62l-.37-.46c-.25-.31-.51-.62-.77-.92s-.66-.74-1-1.11-.68-.72-1.06-1.09-1-.93-1.42-1.36-1-.87-1.47-1.27-1-.81-1.53-1.2-1.06-.76-1.6-1.13-1.09-.71-1.66-1.05-1.14-.67-1.72-1-1.18-.63-1.78-.91S78,8.7,77.37,8.42l-.13-.08c-.61-.25-1.22-.48-1.82-.71S74.18,7.2,73.55,7h0c-.63-.19-1.26-.37-1.9-.54s-1.3-.3-2-.43l-.83-.16-.43-.07ZM64,8.82V20.75H75.43c-.71-.9-1.45-1.8-2.23-2.7q-1.36-1.59-2.89-3.18t-3.23-3.24c-1-.93-2-1.87-3-2.81Zm0,62.67V83.64q1.68-1.41,3.26-2.85,1.78-1.64,3.41-3.27c1.07-1.09,2.09-2.17,3.05-3.26.82-.92,1.6-1.84,2.34-2.77Zm-5.2,12.15V71.49H46.78c.74.93,1.51,1.86,2.33,2.78,1,1.08,2,2.16,3,3.24s2.22,2.18,3.42,3.28c1,.95,2.14,1.9,3.27,2.85Zm0-62.89V8.82c-1.05.94-2.06,1.87-3,2.8q-1.71,1.64-3.24,3.25c-1,1.06-2,2.12-2.89,3.18q-1.17,1.35-2.22,2.7ZM9.48,26.41H113.4a5.28,5.28,0,0,1,5.26,5.26v28.9a5.28,5.28,0,0,1-5.26,5.26H9.48a5.28,5.28,0,0,1-5.26-5.26V31.67a5.28,5.28,0,0,1,5.26-5.26Z"})))}var v=l.forwardRef(m),O=(c.p,c(107)),x=c.n(O),w=c(206),g=c.n(w),y=c(238),k=c.n(y),N=c(240),H=function(e){var t=Object(l.useState)(void 0),c=Object(s.a)(t,2),n=c[0],r=c[1],a=Object(l.useState)(void 0),i=Object(s.a)(a,2),o=i[0],u=i[1],j=Object(l.useState)(!0),d=Object(s.a)(j,2),h=d[0],b=d[1];return Object(l.useEffect)((function(){(function(){var t=Object(N.a)(k.a.mark((function t(){var c,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return c=t.sent,t.next=6,c.text();case 6:n=t.sent,r(n),b(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),u(t.t0),b(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),[n,o,h]},S=c(16),E=(c(241),function(e){var t=e.url,c=H(t),n=Object(s.a)(c,3),r=n[0],l=n[1],a=n[2];return Object(o.jsx)("div",{className:"markdown-container",children:a?Object(o.jsx)(S.a,{}):l?console.log(l):Object(o.jsx)(x.a,{className:"markdown",remarkPlugins:[g.a],children:r})})}),Z=c(67),_=(c(242),function(e){var t=e.tags;return Object(o.jsx)("p",{className:"tags",children:t.map((function(e,t){return Object(o.jsx)("span",{children:e},t)}))})}),C=(c(243),function(e){var t=e.match,c=(0,Object(l.useContext)(j.a).selectProject)(parseInt(t.params.projectId)),n=c.title,r=c.description,a=c.github_link,s=c.website_link,i=c.tags,u=c.readme,d=[{name:"github",link:a,icon_as_component:Object(o.jsx)(h.a,{})},{name:"website",link:s,icon_as_component:Object(o.jsx)(v,{})}];return Object(o.jsxs)("div",{className:"project-page",children:[Object(o.jsx)("h1",{className:"title",children:n}),Object(o.jsxs)("div",{className:"description",children:[Object(o.jsx)("p",{children:r}),Object(o.jsx)(Z.a,{links:d}),Object(o.jsx)(_,{tags:i})]}),Object(o.jsx)(E,{url:u})]})});c(244),t.default=function(e){var t=e.match;return Object(o.jsx)("div",{className:"projects-page",children:Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{exact:!0,path:t.path,component:d}),Object(o.jsx)(a.a,{path:"".concat(t.path,"/:projectId"),component:C})]})})}},57:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n,r=c(0),l=["title","titleId"];function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}function i(e,t){var c=e.title,i=e.titleId,o=s(e,l);return r.createElement("svg",a({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},o),void 0===c?r.createElement("title",{id:i},"GitHub"):c?r.createElement("title",{id:i},c):null,n||(n=r.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))}var o=r.forwardRef(i);c.p},67:function(e,t,c){"use strict";c(68);var n=c(1);t.a=function(e){var t=e.links;return Object(n.jsx)("div",{className:"link_container",children:t.map((function(e){var t=e.link,c=e.icon_as_component,r=e.name;return t?Object(n.jsxs)("a",{href:t,target:"_blank",rel:"noreferrer",children:[c," ",r]}):""}))})}},68:function(e,t,c){}}]);
//# sourceMappingURL=4.e02b9650.chunk.js.map