"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6895],{16142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var i=n(74848),a=n(28453);const s={title:"How Tailcall statically identifies N+1 issues in GraphQL",authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems, and building high-performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=4"}],description:"A deep dive into the implementation details of the N+1 tracker",slug:"tailcall-n+1-identification-algorithm"},r=void 0,l={permalink:"/blog/tailcall-n+1-identification-algorithm",source:"@site/blog/tailcall-n+1-working-2024-08-04.md",title:"How Tailcall statically identifies N+1 issues in GraphQL",description:"A deep dive into the implementation details of the N+1 tracker",date:"2024-08-04T00:00:00.000Z",tags:[],readingTime:4.605,hasTruncateMarker:!1,authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems, and building high-performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=4",imageURL:"https://avatars.githubusercontent.com/u/194482?v=4"}],frontMatter:{title:"How Tailcall statically identifies N+1 issues in GraphQL",authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems, and building high-performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=4",imageURL:"https://avatars.githubusercontent.com/u/194482?v=4"}],description:"A deep dive into the implementation details of the N+1 tracker",slug:"tailcall-n+1-identification-algorithm"},unlisted:!1,nextItem:{title:"GraphQL in Vue: 5 Best Approaches for Data Fetching",permalink:"/blog/graphql-vue-client"}},o={authorsImageUrls:[void 0]},h=[{value:"High-Level Working",id:"high-level-working",level:2},{value:"The Algorithm",id:"the-algorithm",level:2},{value:"Performance",id:"performance",level:2},{value:"1. Memoization",id:"1-memoization",level:3},{value:"2. Chunk Data Structure",id:"2-chunk-data-structure",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["As a developer working with GraphQL, you're likely familiar with the concept of N+1 issues, if not you should definitely check out our ",(0,i.jsx)(t.a,{href:"/docs/graphql-n-plus-one-problem-solved-tailcall",children:"N+1 guide"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"To summarize they occur when a GraphQL resolver is called multiple times for a single GraphQL request, leading a large set of requests upstream and overall a slower query execution. In this blog post, we'll dive into how Tailcall specifically identifies N+1 issues in GraphQL, and explore the algorithm and data structures used to detect these issues."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Actual Usage Image",src:n(82212).A+"",width:"3232",height:"984"})}),"\n",(0,i.jsx)(t.h2,{id:"high-level-working",children:"High-Level Working"}),"\n",(0,i.jsxs)(t.p,{children:["Unlike a traditional GraphQL implementation where the resolvers are written by hand Tailcall encourages developers to take a configuration-driven approach. This has many benefits and we have talked about them in our previous ",(0,i.jsx)(t.a,{href:"/blog/writing-a-graphql-backend-by-hand-is-long-gone",children:"blog"}),". One of the main advantages of not handwriting is the ability to introspect and optimize. This means a configuration file can be parsed, validated and semantically analyzed to identify issues such as N+1 very precisely. With code, that's written in a general-purpose language if you wish to perform semantic analysis automatically you will need to depend on some sort of LLM solution and still it won't be as precise (at least today)."]}),"\n",(0,i.jsx)(t.h2,{id:"the-algorithm",children:"The Algorithm"}),"\n",(0,i.jsxs)(t.p,{children:["Tailcall reads your ",(0,i.jsx)(t.a,{href:"/docs/tailcall-graphql-configuration-format-conversion",children:"configuration"}),", parses it, and internally stores it in an efficient graph data-structure that resembles a ",(0,i.jsx)(t.code,{children:"HashMap"}),". This allows ",(0,i.jsx)(t.code,{children:"O(1)"})," access to a GraphQL type which represented as a node by its name. Once the graph data-structure is ready we make it go through a series of validators, one of them being the ",(0,i.jsx)(t.strong,{children:"N+1 tracker"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["To see the actual implementation you can check out the ",(0,i.jsx)(t.a,{href:"https://github.com/tailcallhq/tailcall/blob/main/src/core/config/npo/tracker.rs",children:"tracker.rs"})," implementation."]})}),"\n",(0,i.jsx)(t.p,{children:"We essentially use a Depth-First Search (DFS) algorithm starting at the root query and traversing all the connected nodes. The algorithm works as follows:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Initialize a to variables to track the currently traversed path and visited fields so that we can avoid cycles."}),"\n",(0,i.jsx)(t.li,{children:"Start at the root query and begin traversing the graph data structure."}),"\n",(0,i.jsxs)(t.li,{children:["For each field in the current node, check if it has a resolver and is not batched. We know if the node contains a resolver if that node has a ",(0,i.jsx)(t.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#http-directive",children:(0,i.jsx)(t.code,{children:"@http"})})," or a ",(0,i.jsx)(t.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#grpc-directive",children:(0,i.jsx)(t.code,{children:"@grpc"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"important",children:(0,i.jsx)(t.p,{children:"Tailcall supports powerful batching primitives and if a field uses a Batch API, then that resolver is whitelisted and dropped from the list of potential N+1 candidates."})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsx)(t.li,{children:"If the field has a resolver and is not batched, and the current path contains a list, then the current path is added to the result."}),"\n",(0,i.jsx)(t.li,{children:"Otherwise, we recursively traverse the graph data structure, updating the current path and visited fields as necessary."}),"\n",(0,i.jsx)(t.li,{children:"If a cycle is detected, return the cached result instead of re-traversing the path."}),"\n",(0,i.jsx)(t.li,{children:"Once the traversal is complete, return the result, which represents the identified N+1 issues."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"performance",children:"Performance"}),"\n",(0,i.jsxs)(t.p,{children:["While starting, Tailcall automatically performs these validations and one of our users complained that it would take around 5 minutes to start the server for their configuration which was around 10,000 lines. The thing is finding N+1 issues is a complex dynamic-programming problem. All this while our team has been focused on ",(0,i.jsx)(t.a,{href:"https://github.com/tailcallhq/graphql-benchmarks",children:"benchmarking"})," and optimizing the runtime performance of the server. This was the first time perhaps that we were surprised to see such a degradation in performance. We quickly realized that this a dynamic programming problem and there are certain tricks to make such algorithms efficient for us it was basically two things \u2014"]}),"\n",(0,i.jsx)(t.h3,{id:"1-memoization",children:"1. Memoization"}),"\n",(0,i.jsx)(t.p,{children:"Our algorithm uses a cache to store the results of previous traversals. The cache is used to avoid re-traversing the same path multiple times. It's essentially memoization however is super critical if you have a huge configuration that you'd want to validate."}),"\n",(0,i.jsx)(t.h3,{id:"2-chunk-data-structure",children:"2. Chunk Data Structure"}),"\n",(0,i.jsx)(t.p,{children:"Our algorithm uses a special chunk data structure to store and manipulate the query paths. The chunk data structure is implemented as an enum with three variants:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"enum Chunk<A> {\n    Empty,\n    Append(A, Rc<Chunk<A>>),\n    Concat(Rc<Chunk<A>>, Rc<Chunk<A>>)\n}\n\nimpl<A> Chunk<A> {\n    pub fn new() -> Self {\n        Self::Empty\n    }\n\n    pub fn is_null(&self) -> bool {\n        matches!(self, Chunk::Empty)\n    }\n\n    pub fn append(self, a: A) -> Self {\n        Chunk::Append(a, Rc::new(self))\n    }\n\n    pub fn concat(self, other: Chunk<A>) -> Self {\n        if self.is_null() {\n            return other;\n        }\n        if other.is_null() {\n            return self;\n        }\n        Self::Concat(Rc::new(self), Rc::new(other))\n    }\n\n    pub fn as_vec(&self) -> Vec<&A> {\n        // ... converts the chunk into a vec\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Variant"})}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Nil"})}),(0,i.jsx)(t.td,{children:"Represents an empty chunk"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Append"})}),(0,i.jsx)(t.td,{children:"Represents an append operation performed on an existing chunk"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Concat"})}),(0,i.jsx)(t.td,{children:"Represents the concatenation of two chunks"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The chunk data structure has the following properties:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"O(1)"})," complexity for append and concat operations."]}),"\n",(0,i.jsx)(t.li,{children:"Uses Reference Counting instead of Boxing to make cloning faster."}),"\n",(0,i.jsx)(t.li,{children:"Can be converted to a vector of references to the elements in the chunk."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You can clearly see that we don't actually perform an append or a concat operation instead we store a representation of that operation. This reduces the overall compute required especially while performing the concat operation."}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"Lastly to ensure that we are always correct and no N+1 issues go unidentified we perform tests with actual configurations."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Source Code Screenshot",src:n(71183).A+"",width:"1318",height:"1148"})}),"\n",(0,i.jsx)(t.p,{children:"Hopefully, this gives some insight on how Tailcall identifies N+1 issues in your GraphQL configuration."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you think we can make our N+1 detection faster or better in some other way please help us improve by ",(0,i.jsx)(t.a,{href:"https://github.com/tailcallhq/tailcall",children:"contributing"})," \ud83d\ude4f"]}),"\n",(0,i.jsx)(t.li,{children:"If you find this interesting please spread the word \ud83d\ude4c"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},71183:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/github-npo-screenshot-5e40d335542b593af7cd038ab6814fb7.png"},82212:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/n+1-image-terminal-2bfbafada99d3c089f9d703c60855bef.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);