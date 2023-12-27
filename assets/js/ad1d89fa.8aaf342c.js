"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4241],{4654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var s=n(5893),i=n(1151);const d={title:"@addField"},r=void 0,a={id:"operators/add-field",title:"@addField",description:"The @addField operator simplifies data structures and queries by adding a field that inlines or flattens a nested field or node within your schema. It works by modifying the schema and the data transformation process, simplifying how nested data is accessed and presented.",source:"@site/docs/operators/add-field.md",sourceDirName:"operators",slug:"/operators/add-field",permalink:"/docs/operators/add-field",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/operators/add-field.md",tags:[],version:"current",frontMatter:{title:"@addField"},sidebar:"tutorialSidebar",previous:{title:"Operators",permalink:"/docs/operators/"},next:{title:"@const",permalink:"/docs/operators/const"}},o={},l=[];function c(e){const t={code:"code",em:"em",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"@addField"})," operator simplifies data structures and queries by adding a field that ",(0,s.jsx)(t.em,{children:"inlines"})," or flattens a nested field or node within your schema. It works by modifying the schema and the data transformation process, simplifying how nested data is accessed and presented."]}),"\n",(0,s.jsx)(t.p,{children:"For instance, consider a schema:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema {\n  query: Query\n}\n\ntype User @addField(name: "street", path: ["address", "street"]) {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n  address: Address @modify(omit: true)\n}\n\ntype Address {\n  street: String!\n  city: String!\n  state: String!\n}\n\ntype Query {\n  user(id: Int!): User @http(path: "/users/{{args.id}}")\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Suppose we are only interested in the ",(0,s.jsx)(t.code,{children:"street"})," field in ",(0,s.jsx)(t.code,{children:"Address"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"@addField"})," operator above, applied to the ",(0,s.jsx)(t.code,{children:"User"})," type in this case, creates a field called ",(0,s.jsx)(t.code,{children:"street"})," in the ",(0,s.jsx)(t.code,{children:"User"})," type. It includes a ",(0,s.jsx)(t.code,{children:"path"})," argument, indicating the chain of fields to be traversed from a declared field (",(0,s.jsx)(t.code,{children:"address"})," in this case), to the field within Address to be added. We can also add a ",(0,s.jsx)(t.code,{children:"@modify(omit: true)"})," to omit the ",(0,s.jsx)(t.code,{children:"address"})," field from the schema, since we have already made its ",(0,s.jsx)(t.code,{children:"street"})," field available on the ",(0,s.jsx)(t.code,{children:"User"})," type."]}),"\n",(0,s.jsx)(t.p,{children:"Post application, the schema becomes:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema {\n  query: Query\n}\n\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n  street: String\n}\n\ntype Query {\n  user(id: Int): Post!\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In the above example, since we added a ",(0,s.jsx)(t.code,{children:"@modify(omit: true)"})," on the ",(0,s.jsx)(t.code,{children:"address"})," field, the ",(0,s.jsx)(t.code,{children:"Address"})," type is eliminated from the schema."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"@addField"})," operator also take cares of nullablity of the fields. If any of the fields in the path is nullable, the resulting type will be nullable."]}),"\n",(0,s.jsxs)(t.p,{children:["Additionally, ",(0,s.jsx)(t.code,{children:"@addField"})," supports indexing, meaning you can specify the array index to be inlined. If a field ",(0,s.jsx)(t.code,{children:"posts"})," is of type ",(0,s.jsx)(t.code,{children:"[Post]"}),", and you want to, for example, get the title of the first post, you can specify the path as [",(0,s.jsx)(t.code,{children:'"posts"'}),",",(0,s.jsx)(t.code,{children:'"0"'}),",",(0,s.jsx)(t.code,{children:'"title"'}),"]."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type User @addField(name: "firstPostTitle", path: ["posts", "0", "title"]) {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n  posts: Post @http(path: "/users/{{value.id}}/posts")\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In conclusion, the ",(0,s.jsx)(t.code,{children:"@addField"})," operator helps tidy up your schema and streamline data fetching by reducing query depth, promoting better performance and simplicity."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(7294);const i={},d=s.createContext(i);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);