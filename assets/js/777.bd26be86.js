"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[777],{7293:(e,n,t)=>{t.d(n,{A:()=>z});var i=t(6540),a=t(4848);function s(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=n.filter((e=>e!==t)),l=t?.props.children;return{mdxAdmonitionTitle:l,rest:s.length>0?(0,a.jsx)(a.Fragment,{children:s}):null}}(e.children),s=e.title??n;return{...e,...s&&{title:s},children:t}}var l=t(4164),r=t(1312),o=t(7559);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,a.jsx)("div",{className:(0,l.A)(o.G.common.admonition,o.G.common.admonitionType(n),c.admonition,t),children:i})}function u(e){let{icon:n,title:t}=e;return(0,a.jsxs)("div",{className:c.admonitionHeading,children:[(0,a.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function h(e){let{children:n}=e;return n?(0,a.jsx)("div",{className:c.admonitionContent,children:n}):null}function m(e){const{type:n,icon:t,title:i,children:s,className:l}=e;return(0,a.jsxs)(d,{type:n,className:l,children:[i||t?(0,a.jsx)(u,{title:i,icon:t}):null,(0,a.jsx)(h,{children:s})]})}function x(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,a.jsx)(x,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(e){return(0,a.jsx)(m,{...p,...e,className:(0,l.A)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,a.jsx)(j,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,a.jsx)(m,{...g,...e,className:(0,l.A)("alert alert--success",e.className),children:e.children})}function A(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,a.jsx)(A,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,a.jsx)(m,{...N,...e,className:(0,l.A)("alert alert--info",e.className),children:e.children})}function y(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const w={icon:(0,a.jsx)(y,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const _={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const U={icon:(0,a.jsx)(y,{}),title:(0,a.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const T={...{note:f,tip:v,info:b,warning:function(e){return(0,a.jsx)(m,{...w,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(m,{..._,...e,className:(0,l.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(f,{title:"secondary",...e}),important:e=>(0,a.jsx)(b,{title:"important",...e}),success:e=>(0,a.jsx)(v,{title:"success",...e}),caution:function(e){return(0,a.jsx)(m,{...U,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})}}};function z(e){const n=s(e),t=(i=n.type,T[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),T.info));var i;return(0,a.jsx)(t,{...n})}},4336:(e,n,t)=>{t.d(n,{A:()=>f});t(6540);var i=t(4164),a=t(1312),s=t(7559),l=t(8774);const r={iconEdit:"iconEdit_Z9Sw"};var o=t(4848);function c(e){let{className:n,...t}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(r.iconEdit,n),"aria-hidden":"true",...t,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:n}=e;return(0,o.jsxs)(l.A,{to:n,className:s.G.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(a.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=t(6266);function h(e){let{lastUpdatedAt:n}=e;const t=new Date(n),i=(0,u.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,o.jsx)(a.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:i})})},children:" on {date}"})}function m(e){let{lastUpdatedBy:n}=e;return(0,o.jsx)(a.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:n})},children:" by {user}"})}function x(e){let{lastUpdatedAt:n,lastUpdatedBy:t}=e;return(0,o.jsxs)("span",{className:s.G.common.lastUpdated,children:[(0,o.jsx)(a.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,o.jsx)(h,{lastUpdatedAt:n}):"",byUser:t?(0,o.jsx)(m,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_JAkA"};function f(e){let{className:n,editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s}=e;return(0,o.jsxs)("div",{className:(0,i.A)("row",n),children:[(0,o.jsx)("div",{className:"col",children:t&&(0,o.jsx)(d,{editUrl:t})}),(0,o.jsx)("div",{className:(0,i.A)("col",p.lastUpdated),children:(a||s)&&(0,o.jsx)(x,{lastUpdatedAt:a,lastUpdatedBy:s})})]})}},2857:(e,n,t)=>{t.d(n,{A:()=>k});var i=t(6540),a=t(8453),s=t(5260),l=t(1432),r=t(4848);function o(e){return(0,r.jsx)("code",{...e})}var c=t(8774);var d=t(4164),u=t(3427),h=t(2303),m=t(1422);const x={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function f(e,n){return!!e&&(e===n||f(e.parentElement,n))}function j(e){let{summary:n,children:t,...a}=e;(0,u.A)().collectAnchor(a.id);const s=(0,h.A)(),l=(0,i.useRef)(null),{collapsed:o,setCollapsed:c}=(0,m.u)({initialState:!a.open}),[j,g]=(0,i.useState)(a.open),v=i.isValidElement(n)?n:(0,r.jsx)("summary",{children:n??"Details"});return(0,r.jsxs)("details",{...a,ref:l,open:j,"data-collapsed":o,className:(0,d.A)(x.details,s&&x.isBrowser,a.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;p(n)&&f(n,l.current)&&(e.preventDefault(),o?(c(!1),g(!0)):c(!0))},children:[v,(0,r.jsx)(m.N,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),g(!e)},children:(0,r.jsx)("div",{className:x.collapsibleContent,children:t})})]})}const g={details:"details_b_Ee"},v="alert alert--info";function A(e){let{...n}=e;return(0,r.jsx)(j,{...n,className:(0,d.A)(v,g.details,n.className)})}function N(e){const n=i.Children.toArray(e.children),t=n.find((e=>i.isValidElement(e)&&"summary"===e.type)),a=(0,r.jsx)(r.Fragment,{children:n.filter((e=>e!==t))});return(0,r.jsx)(A,{...e,summary:t,children:a})}var b=t(1107);function y(e){return(0,r.jsx)(b.A,{...e})}const w={containsTaskList:"containsTaskList_mC6p"};function C(e){if(void 0!==e)return(0,d.A)(e,e?.includes("contains-task-list")&&w.containsTaskList)}const _={img:"img_ev3q"};var U=t(7293),T=t(418);const z={Head:s.A,details:N,Details:N,code:function(e){return function(e){return void 0!==e.children&&i.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,r.jsx)(o,{...e}):(0,r.jsx)(l.A,{...e})},a:function(e){return(0,r.jsx)(c.A,{...e})},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",{...e,className:C(e.className)})},li:function(e){return(0,u.A)().collectAnchor(e.id),(0,r.jsx)("li",{...e})},img:function(e){return(0,r.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,d.A)(n,_.img))});var n},h1:e=>(0,r.jsx)(y,{as:"h1",...e}),h2:e=>(0,r.jsx)(y,{as:"h2",...e}),h3:e=>(0,r.jsx)(y,{as:"h3",...e}),h4:e=>(0,r.jsx)(y,{as:"h4",...e}),h5:e=>(0,r.jsx)(y,{as:"h5",...e}),h6:e=>(0,r.jsx)(y,{as:"h6",...e}),admonition:U.A,mermaid:T.A};function k(e){let{children:n}=e;return(0,r.jsx)(a.x,{components:z,children:n})}},9022:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var i=t(4164),a=t(8774),s=t(4848);function l(e){const{permalink:n,title:t,subLabel:l,isNext:r}=e;return(0,s.jsxs)(a.A,{className:(0,i.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[l&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,s.jsx)("div",{className:"pagination-nav__label",children:t})]})}},6133:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var i=t(4164),a=t(8774);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=t(4848);function r(e){let{permalink:n,label:t,count:r,description:o}=e;return(0,l.jsxs)(a.A,{href:n,title:o,className:(0,i.A)(s.tag,r?s.tagWithCount:s.tagRegular),children:[t,r&&(0,l.jsx)("span",{children:r})]})}},2053:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var i=t(4164),a=t(1312),s=t(6133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var r=t(4848);function o(e){let{tags:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,i.A)(l.tags,"padding--none","margin-left--sm"),children:n.map((e=>(0,r.jsx)("li",{className:l.tag,children:(0,r.jsx)(s.A,{...e})},e.permalink)))})]})}},6266:(e,n,t)=>{t.d(n,{i:()=>a});var i=t(4586);function a(e){void 0===e&&(e={});const{i18n:{currentLocale:n}}=(0,i.A)(),t=function(){const{i18n:{currentLocale:e,localeConfigs:n}}=(0,i.A)();return n[e].calendar}();return new Intl.DateTimeFormat(n,{calendar:t,...e})}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const a={},s=i.createContext(a);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);