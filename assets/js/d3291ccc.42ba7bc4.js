"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5797],{9906:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(5893),s=t(1151);const a={title:"N+1 Problem",description:"Learn how to efficiently tackle the N+1 problem in application development, reducing server requests and optimizing performance. Discover practical solutions using the TailCall CLI for GraphQL applications, with step-by-step examples to enhance your coding practices."},o=void 0,l={id:"guides/n+1",title:"N+1 Problem",description:"Learn how to efficiently tackle the N+1 problem in application development, reducing server requests and optimizing performance. Discover practical solutions using the TailCall CLI for GraphQL applications, with step-by-step examples to enhance your coding practices.",source:"@site/docs/guides/n+1.md",sourceDirName:"guides",slug:"/guides/n+1",permalink:"/docs/guides/n+1",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/n+1.md",tags:[],version:"current",frontMatter:{title:"N+1 Problem",description:"Learn how to efficiently tackle the N+1 problem in application development, reducing server requests and optimizing performance. Discover practical solutions using the TailCall CLI for GraphQL applications, with step-by-step examples to enhance your coding practices."},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/docs/guides/logging"},next:{title:"Playground",permalink:"/docs/guides/playground"}},r={},c=[{value:"Example Scenario",id:"example-scenario",level:2},{value:"Fetching Posts",id:"fetching-posts",level:3},{value:"Fetching Authors",id:"fetching-authors",level:3},{value:"Initial Configuration with TailCall CLI",id:"initial-configuration-with-tailcall-cli",level:2},{value:"Optimizing with Batching",id:"optimizing-with-batching",level:2},{value:"The Impact of Optimization",id:"the-impact-of-optimization",level:3}];function h(e){const i={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"N+1 problem"})," hampers application performance, manifesting when an app issues numerous requests downstream in response to a single upstream request. To grasp this, consider the following example:"]}),"\n",(0,n.jsx)(i.h2,{id:"example-scenario",children:"Example Scenario"}),"\n",(0,n.jsx)(i.p,{children:"Imagine we're enhancing a feature that involves fetching data from the [JSON Placeholder API], requiring posts and their authors' details."}),"\n",(0,n.jsx)(i.h3,{id:"fetching-posts",children:"Fetching Posts"}),"\n",(0,n.jsx)(i.p,{children:"Initially, we request all posts:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:'\u276f curl https::/jsonplaceholder.typicode.com/posts\n  [\n    {\n      "userId": 1,\n      "id": 1,\n      "title": "Creating Solutions for Challenges",\n      "body": "We anticipate and understand challenges, creating solutions while considering exceptions and criticisms."\n    },\n    {\n      "userId": 1,\n      "id": 2,\n      "title": "Understanding Identity",\n      "body": "Life\'s essence, measured through time, presents pains and joys. We find solace in the mundane, seeking meaning beyond the visible."\n    }\n  ]\n'})}),"\n",(0,n.jsxs)(i.p,{children:["This command retrieves posts from the API, with each post containing a ",(0,n.jsx)(i.code,{children:"userId"})," field denoting its author."]}),"\n",(0,n.jsx)(i.h3,{id:"fetching-authors",children:"Fetching Authors"}),"\n",(0,n.jsx)(i.p,{children:"Subsequently, we fetch details for each post's author, exemplified by:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:'\u276f curl https://jsonplaceholder.typicode.com/users/1\n  {\n    "id": 1,\n    "name": "Leanne Graham",\n    "username": "Bret",\n    "email": "Sincere@april.biz",\n    "address": {\n      "street": "Kulas Light",\n      "suite": "Apt. 556",\n      "city": "Gwenborough",\n      "zipcode": "92998-3874",\n      "geo": {\n        "lat": "-37.3159",\n        "lng": "81.1496"\n      }\n    },\n    "phone": "1-770-736-8031 x56442",\n    "website": "hildegard.org",\n    "company": {\n      "name": "Romaguera-Crona",\n      "catchPhrase": "Multi-layered client-server neural-net",\n      "bs": "harness real-time e-markets"\n    }\n  }\n'})}),"\n",(0,n.jsx)(i.p,{children:"For 100 posts, this leads to 100 additional requests to obtain author details, totaling 101 requests."}),"\n",(0,n.jsx)(i.p,{children:"The N+1 issue with the JSON Placeholder API arises when fetching 100 posts prompts 100 separate requests for author details, cumulating to 101 requests."}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"This issue escalates in real-life scenarios with thousands of posts and users, multiplying the server requests, which strains resources, hikes server costs, slows response times, and can even cause server downtime. Addressing the N+1 issue during application design and development is crucial for efficient API usage. We will examine solutions to mitigate this problem."})}),"\n",(0,n.jsx)(i.h2,{id:"initial-configuration-with-tailcall-cli",children:"Initial Configuration with TailCall CLI"}),"\n",(0,n.jsxs)(i.p,{children:["Before diving into solutions, it's insightful to see the N+1 problem in action using the TailCall CLI with the initial ",(0,n.jsx)(i.code,{children:".graphql"})," configuration:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:"{3}",children:"\u276f tailcall start ./examples/jsonplaceholder.graphql\n  INFO File read: ./examples/jsonplaceholder.graphql ... ok\n  INFO N + 1 detected: 1\n  INFO \ud83d\ude80 Tailcall launched at [0.0.0.0:8000] over HTTP/1.1\n  INFO \ud83c\udf0d Playground: https://tailcall.run/playground/?u=http://127.0.0.1:8000/graphql\n  INFO GET http://jsonplaceholder.typicode.com/posts HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/8 HTTP/1.1\n  ...\n  INFO GET http://jsonplaceholder.typicode.com/users/10 HTTP/1.1\n"})}),"\n",(0,n.jsx)(i.p,{children:"These logs demonstrate the sequence of requests made to fetch posts and then individual users, highlighting the N+1 problem in real-time."}),"\n",(0,n.jsx)(i.h2,{id:"optimizing-with-batching",children:"Optimizing with Batching"}),"\n",(0,n.jsxs)(i.p,{children:["After incorporating the ",(0,n.jsx)(i.code,{children:"batchKey"})," optimization, let's observe the transformed behavior through the TailCall CLI:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:"{3}",children:"\u276f tailcall start ./examples/jsonplaceholder.graphql\n  INFO File read: ./examples/jsonplaceholder.graphql ... ok\n  INFO N + 1 detected: 0\n  INFO \ud83d\ude80 Tailcall launched at [0.0.0.0:8000] over HTTP/1.1\n  INFO \ud83c\udf0d Playground: https://tailcall.run/playground/?u=http://127.0.0.1:8000/graphql\n  INFO GET http://jsonplaceholder.typicode.com/posts HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users?id=1&id=10&id=2&id=3&id=4&id=5&id=6&id=7&id=8&id=9 HTTP/1.1\n"})}),"\n",(0,n.jsx)(i.h3,{id:"the-impact-of-optimization",children:"The Impact of Optimization"}),"\n",(0,n.jsxs)(i.p,{children:["The logs now reveal a substantial reduction in requests. Initially, fetching 100 posts would lead to an additional 100 requests to gather author details, totaling 101 requests. However, after applying batching with the ",(0,n.jsx)(i.code,{children:"batchKey"}),", we observe two requests:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"A single request to fetch all posts."}),"\n",(0,n.jsx)(i.li,{children:"A single consolidated request for all users involved in the posts, using query parameters to fetch multiple users in one go."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"This optimization starkly contrasts the initial approach by reducing the number of server requests, thus minimizing server load, enhancing response times, and potentially lowering server costs. It demonstrates the effectiveness of addressing the N+1 problem through thoughtful schema design and the use of advanced tooling like the TailCall CLI, which facilitates a more efficient data fetching strategy that's crucial for scalable and performant web applications."})]})}function d(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>l,a:()=>o});var n=t(7294);const s={},a=n.createContext(s);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);