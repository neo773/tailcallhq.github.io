"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3259],{7739:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=o(5893),s=o(1151);const r={title:"N + 1 Checks",sidebar_position:5,description:"Learn how to perform compile-time validations to detect N + 1 problems even before the GraphQL server starts."},i=void 0,a={id:"n+1/compile-time-check",title:"N + 1 Checks",description:"Learn how to perform compile-time validations to detect N + 1 problems even before the GraphQL server starts.",source:"@site/docs/n+1/compile-time-check.md",sourceDirName:"n+1",slug:"/n+1/compile-time-check",permalink:"/docs/n+1/compile-time-check",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/n+1/compile-time-check.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"N + 1 Checks",sidebar_position:5,description:"Learn how to perform compile-time validations to detect N + 1 problems even before the GraphQL server starts."},sidebar:"tutorialSidebar",previous:{title:"Deduplication",permalink:"/docs/n+1/dedupe"},next:{title:"Batch APIs",permalink:"/docs/n+1/batching"}},c={},l=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Before we get into the actual solution, if you observe closely the above logs Tailcall identified that there was one N + 1 issue, even before the requests were made:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",metastring:"{3}",children:"\u276f tailcall start ./examples/jsonplaceholder.graphql\n  INFO File read: ./examples/jsonplaceholder.graphql ... ok\n  INFO N + 1 detected: 1\n  INFO \ud83d\ude80 Tailcall launched at [0.0.0.0:8000] over HTTP/1.1\n  INFO \ud83c\udf0d Playground: https://tailcall.run/playground/?u=http://127.0.0.1:8000/graphql\n  INFO GET http://jsonplaceholder.typicode.com/posts HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/8 HTTP/1.1\n  ...\n  INFO GET http://jsonplaceholder.typicode.com/users/10 HTTP/1.1\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To get a deeper understanding of what this N + 1 issue is, we can use the ",(0,n.jsx)(t.a,{href:"/docs/guides/cli#--n-plus-one-queries",children:"--n-plus-one-queries"})," parameter with the ",(0,n.jsx)(t.code,{children:"check"})," command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",metastring:"{4,5}",children:"\u276f tailcall check ./jsonplaceholder.graphql --n-plus-one-queries\n  INFO File read: ./examples/jsonplaceholder.graphql ... ok\n  INFO Config ./examples/jsonplaceholder.graphql ... ok\n  INFO N + 1 detected: 1\n  query { posts { user } }\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Incredible, isn't it? Tailcall has discovered that querying for posts followed by their users would result in N + 1 upstream calls. This represents a significant productivity gain, as you can now identify all such N + 1 issues upfront without resorting to complex profiling, tracing, or other runtime techniques. The ",(0,n.jsx)(t.code,{children:"check"})," command also identifies the minimal query that could lead to these N + 1 problems by performing semantic analysis of your configuration. With these powerful tools handy you can go about making extremely efficient GraphQL backends as we will see next:"]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var n=o(7294);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);