"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7643],{35124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(96540);var a=n(34164),i=n(44586),r=n(61213),s=n(17559),o=n(26535),l=n(47713),c=n(41463),d=n(33892),g=n(5260),p=n(6676),m=n(74848);function u(e){const t=(0,p.k)(e);return(0,m.jsx)(g.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,i.A)(),{blogDescription:a,blogTitle:s,permalink:o}=t,l="/"===o?n:s;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.be,{title:l,description:a}),(0,m.jsx)(c.A,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:n,sidebar:a}=e;return(0,m.jsxs)(o.A,{sidebar:a,children:[(0,m.jsx)(d.A,{items:n}),(0,m.jsx)(l.A,{metadata:t})]})}function b(e){return(0,m.jsxs)(r.e3,{className:(0,a.A)(s.G.wrapper.blogPages,s.G.page.blogListPage),children:[(0,m.jsx)(h,{...e}),(0,m.jsx)(u,{...e}),(0,m.jsx)(x,{...e})]})}},47713:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(21312),i=n(39022),r=n(74848);function s(e){const{metadata:t}=e,{previousPage:n,nextPage:s}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.A,{permalink:n,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),s&&(0,r.jsx)(i.A,{permalink:s,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},33892:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(7131),i=n(24651),r=n(74848);function s(e){let{items:t,component:n=i.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.i,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},6676:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>g});var a=n(86025),i=n(44586),r=n(36803);var s=n(7131);const o=e=>new Date(e).toISOString();function l(e){const t=e.map(p);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:m({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,i.A)(),{withBaseUrl:n}=(0,a.hH)(),{metadata:{blogDescription:r,blogTitle:s,permalink:d}}=e,g=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:s,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:r}=e,{date:s,title:d,description:g,lastUpdatedAt:p}=r,m=a.image??i.image,u=i.keywords??[],h=`${t.url}${r.permalink}`,x=p?o(p):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:d,name:d,description:g,datePublished:s,...x?{dateModified:x}:{},...l(r.authors),...c(m,n,d),...u?{keywords:u}:{}}}(e.content,t,n)))}}function g(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,s.e)(),{siteConfig:d}=(0,i.A)(),{withBaseUrl:g}=(0,a.hH)(),{date:p,title:m,description:u,frontMatter:h,lastUpdatedAt:x}=n,b=t.image??h.image,f=h.keywords??[],j=x?o(x):void 0,w=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":w,mainEntityOfPage:w,url:w,headline:m,name:m,description:u,datePublished:p,...j?{dateModified:j}:{},...l(n.authors),...c(b,g,m),...f?{keywords:f}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function p(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function m(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},26334:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(96540),i=n(21432),r=n(74848);function s(e){const[t,n]=(0,a.useState)(!1),s=(e=>{if(!e)return{};const t={},n=/(\w+)(?:="([^"]*)"|\s*)/g;let a;for(;null!==(a=n.exec(e));){const[,e,n]=a;t[e]=n||"true"}return t})(e.metastring);return(0,r.jsxs)("div",{className:"rounded-3xl overflow-hidden",children:[(0,r.jsxs)("div",{className:"bg-[#35353A] p-4 flex justify-between items-center",children:[(0,r.jsx)("span",{className:"text-white text-xs font-space-mono",children:s.title}),(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(e.children?.toString()||""),n(!0),setTimeout((()=>n(!1)),2e3)},"aria-label":"Copy code",className:"flex flex-row items-center bg-transparent appearance-none border-none",children:[t&&(0,r.jsx)("span",{className:"text-xs text-white mr-2 opacity-70 font-space-mono p-0",style:{lineHeight:"0"},children:"Copied!"}),(0,r.jsx)("img",{src:"/icons/basic/copy-icon.svg",alt:"Copy Icon",className:"w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity duration-150"})]})})]}),(0,r.jsx)(i.A,{...e})]})}}}]);