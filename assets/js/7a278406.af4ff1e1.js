"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4088],{7183:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(4848),r=n(8453);const o={title:"Exposing GraphQL as REST APIs",description:"Exposing REST endpoints on top of GraphQL via the @rest directive.",slug:"graphql-rest-integration",sidebar_label:"REST on GraphQL"},s=void 0,a={id:"rest",title:"Exposing GraphQL as REST APIs",description:"Exposing REST endpoints on top of GraphQL via the @rest directive.",source:"@site/docs/rest.md",sourceDirName:".",slug:"/graphql-rest-integration",permalink:"/docs/graphql-rest-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/rest.md",tags:[],version:"current",lastUpdatedAt:172042647e4,frontMatter:{title:"Exposing GraphQL as REST APIs",description:"Exposing REST endpoints on top of GraphQL via the @rest directive.",slug:"graphql-rest-integration",sidebar_label:"REST on GraphQL"},sidebar:"docs",previous:{title:"Log Levels",permalink:"/docs/graphql-logging-levels-tailcall"},next:{title:"GraphQL Scalars",permalink:"/docs/graphql-scalars-guide"}},l={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Example",id:"example",level:2},{value:"Step 1: Define your GraphQL configuration",id:"step-1-define-your-graphql-configuration",level:3},{value:"Step 2: Define an operation using <code>@rest</code> directive",id:"step-2-define-an-operation-using-rest-directive",level:3},{value:"Step 3: Link the operation to the main config file",id:"step-3-link-the-operation-to-the-main-config-file",level:3},{value:"Response",id:"response",level:4}];function h(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"In order to handle complicated business problems, modern systems frequently need to work with hundreds or even thousands of APIs. Because of its powerful API composition capabilities, GraphQL has been adopted by numerous organisations. But switching to GraphQL can be difficult. It involves a lot of team training as well as major adjustments to frontend and backend architectures."}),"\n",(0,t.jsxs)(i.p,{children:["That's why Tailcall has developed a directive called ",(0,t.jsx)(i.code,{children:"@rest"})," to streamline this transition and take advantage of GraphQL's power without requiring a complete overhaul. With the help of this directive, Tailcall GraphQL queries and mutations may be made available as REST endpoints."]}),"\n",(0,t.jsx)(i.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(i.p,{children:"This guide show you how to expose REST endpoints for your GraphQL operations by using the @rest directive like follows:"}),"\n",(0,t.jsx)(i.p,{children:"There are three main steps to this process:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Define your Tailcall GraphQL configuration file."}),"\n",(0,t.jsxs)(i.li,{children:["Define an operation using ",(0,t.jsx)(i.code,{children:"@rest"})," directive in a separate file."]}),"\n",(0,t.jsx)(i.li,{children:"Link the operation to the main config file."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(i.h3,{id:"step-1-define-your-graphql-configuration",children:"Step 1: Define your GraphQL configuration"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:'schema\n  @upstream(\n    baseURL: "https://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n}\n\ntype Query {\n  post(id: Int!): Post @http(path: "/posts/{{.args.id}}")\n}\n\ntype Post {\n  userId: Int!\n  id: Int\n  title: String\n  body: String\n  user: User @http(path: "/users/{{.value.userId}}")\n}\n\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["for more information on how to define your Tailcall GraphQL configuration file, please refer to the ",(0,t.jsx)(i.a,{href:"/docs/#writing-a-graphql-configuration",children:"Tailcall GraphQL Configuration"}),"."]}),"\n",(0,t.jsxs)(i.h3,{id:"step-2-define-an-operation-using-rest-directive",children:["Step 2: Define an operation using ",(0,t.jsx)(i.code,{children:"@rest"})," directive"]}),"\n",(0,t.jsxs)(i.p,{children:["We will define an operation and use the ",(0,t.jsx)(i.code,{children:"@rest"})," directive to define a REST endpoint for the operation. We will create a new file and add the following content to it. Save the file with the\nfilename: ",(0,t.jsx)(i.code,{children:"user-operation.graphql"}),". You can name the file anything you want, but make sure to link it to the main config file in the next step."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:'query ($id: Int!) @rest(method: GET, path: "/post/$id") {\n  post(id: $id) {\n    id\n    title\n    body\n    user {\n      id\n      name\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["to know more about the ",(0,t.jsx)(i.code,{children:"@rest"})," directive, please refer to the ",(0,t.jsx)(i.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#rest-directive",children:"Tailcall GraphQL Directives"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"step-3-link-the-operation-to-the-main-config-file",children:"Step 3: Link the operation to the main config file"}),"\n",(0,t.jsxs)(i.p,{children:["checkout the ",(0,t.jsx)(i.code,{children:"@link"})," directive in the config snippet below to link the operation file. This step is crucial to make the REST endpoint available."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:'schema\n  @upstream(baseURL: "https://jsonplaceholder.typicode.com")\n  #highlight-start\n  @link(type: Operation, src: "user-operation.graphql") {\n  #highlight-end\n  query: Query\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["To know more about the ",(0,t.jsx)(i.code,{children:"@link"})," directive, please refer to the ",(0,t.jsx)(i.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#link-directive",children:"Tailcall GraphQL Directives"}),"."]}),"\n",(0,t.jsx)(i.h4,{id:"response",children:"Response"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"REST Demo",src:n(4246).A+"",width:"2992",height:"1688"})}),"\n",(0,t.jsxs)(i.p,{children:["In summary, by utilizing the ",(0,t.jsx)(i.code,{children:"@rest"})," directive, we've seamlessly exposed RESTful services over Tailcall's GraphQL, enhancing the traditional posts API to offer richer functionality without additional code. This approach combines the simplicity and ubiquity of REST with the modularity and flexibility of GraphQL, allowing for easy consumption from any HTTP client while leveraging GraphQL's powerful data querying capabilities."]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4246:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/rest-a52c465c2068d2934afcdf32f01461b7.png"},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var t=n(6540);const r={},o=t.createContext(r);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);