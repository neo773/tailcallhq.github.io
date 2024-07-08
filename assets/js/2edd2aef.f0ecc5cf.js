"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2286],{2211:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=n(4848),s=n(8453);const i={title:"Using GraphQL Variables for Type-Safe Queries",sidebar_label:"Variables",description:"Discover how to utilize GraphQL variables effectively for type-safe queries. Learn best practices and examples to enhance your application's performance and reliability.",slug:"graphql-variables"},t=void 0,l={id:"variables",title:"Using GraphQL Variables for Type-Safe Queries",description:"Discover how to utilize GraphQL variables effectively for type-safe queries. Learn best practices and examples to enhance your application's performance and reliability.",source:"@site/graphql/variables.md",sourceDirName:".",slug:"/graphql-variables",permalink:"/graphql/graphql-variables",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:172042647e4,frontMatter:{title:"Using GraphQL Variables for Type-Safe Queries",sidebar_label:"Variables",description:"Discover how to utilize GraphQL variables effectively for type-safe queries. Learn best practices and examples to enhance your application's performance and reliability.",slug:"graphql-variables"},sidebar:"graphql",previous:{title:"Mutations",permalink:"/graphql/graphql-mutations"},next:{title:"Fragments",permalink:"/graphql/graphql-fragments"}},o={},h=[{value:"What Are GraphQL Variables?",id:"what-are-graphql-variables",level:2},{value:"Defining and Using Variables in GraphQL Queries",id:"defining-and-using-variables-in-graphql-queries",level:2},{value:"Default Values for GraphQL Variables",id:"default-values-for-graphql-variables",level:2},{value:"Using Variables in GraphQL Mutations",id:"using-variables-in-graphql-mutations",level:2},{value:"Example:",id:"example",level:3},{value:"Passing Variables:",id:"passing-variables",level:3},{value:"Using JavaScript to Make a GraphQL Request:",id:"using-javascript-to-make-a-graphql-request",level:3},{value:"GraphQL Variable Types and Type Safety",id:"graphql-variable-types-and-type-safety",level:2},{value:"Building Apps with GraphQL",id:"building-apps-with-graphql",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"what-are-graphql-variables",children:"What Are GraphQL Variables?"}),"\n",(0,r.jsxs)(a.p,{children:["GraphQL variables are similar to variables in any other programming language. They store values that you can access using their names. These variables are used to pass data from your application to your GraphQL ",(0,r.jsx)(a.a,{href:"/graphql/graphql-queries",children:"queries"})," and ",(0,r.jsx)(a.a,{href:"/graphql/graphql-mutations",children:"mutations"}),". For instance, take a look at this example where a GraphQL query uses a variable to fetch data:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-graphql",children:"query GetUserByName($name: String!) {\n  user(name: $name) {\n    name\n    email\n    age\n  }\n}\n"})}),"\n",(0,r.jsxs)(a.p,{children:["In this query, the ",(0,r.jsx)(a.code,{children:"$name"})," variable in the query helps find a user by its name. You can easily spot GraphQL variables because they always start with a dollar sign ($). Here\u2019s how a response might look:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-json",children:'{\n  "data": {\n    "user": {\n      "name": "John",\n      "email": "john@example.com",\n      "age": 10\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(a.h2,{id:"defining-and-using-variables-in-graphql-queries",children:"Defining and Using Variables in GraphQL Queries"}),"\n",(0,r.jsx)(a.p,{children:"GraphQL variables are defined separately from the query string itself. When you run the query, these variables are inserted into it, and the API responds with matching results. Here\u2019s how you define a query and its variables in a JSON object for HTTP requests:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-json",children:'{\n  "query": "query GetUserByName($name: String!) { user(name: $name) { name email age } }",\n  "variables": {\n    "name": "John"\n  }\n}\n'})}),"\n",(0,r.jsx)(a.p,{children:"Separating the query from the variables makes it easy to write reusable queries. When making requests, you send the query and variables as separate objects."}),"\n",(0,r.jsx)(a.h2,{id:"default-values-for-graphql-variables",children:"Default Values for GraphQL Variables"}),"\n",(0,r.jsx)(a.p,{children:"You can set default values for variables, which allows queries to run even without input. Here\u2019s how you do it:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-graphql",children:'query GetUserByName($name: String = "Jack") {\n  user(name: $name) {\n    name\n    email\n    age\n  }\n}\n'})}),"\n",(0,r.jsxs)(a.p,{children:["In this example, if no value is provided for ",(0,r.jsx)(a.code,{children:"$name"}),', the query uses "Jack" as the default.']}),"\n",(0,r.jsx)(a.h2,{id:"using-variables-in-graphql-mutations",children:"Using Variables in GraphQL Mutations"}),"\n",(0,r.jsx)(a.p,{children:"GraphQL mutations can create, update, or delete data on the server. Variables work the same way in mutations as they do in queries."}),"\n",(0,r.jsx)(a.h3,{id:"example",children:"Example:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-graphql",children:"mutation UpdateUserName($id: ID!, $new_name: String!) {\n  updateUserName(id: $id, name: $new_name) {\n    id\n    name\n    email\n    age\n  }\n}\n"})}),"\n",(0,r.jsx)(a.h3,{id:"passing-variables",children:"Passing Variables:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-json",children:'{\n  "id": "1",\n  "new_name": "Johnny"\n}\n'})}),"\n",(0,r.jsx)(a.h3,{id:"using-javascript-to-make-a-graphql-request",children:"Using JavaScript to Make a GraphQL Request:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:'const query = `\n  query GetUserByName($name: String!) {\n    user(name: $name) {\n      name\n      email\n      age\n    }\n  }\n`\n\nconst variables = {name: "John"}\n\nfetch("https://YOUR_GRAPHQL_SERVER_URL", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json",\n  },\n  body: JSON.stringify({query, variables}),\n})\n  .then((response) => response.json())\n  .then((data) => console.log(data))\n'})}),"\n",(0,r.jsxs)(a.p,{children:["Replace ",(0,r.jsx)(a.code,{children:"YOUR_GRAPHQL_SERVER_URL"})," with your GraphQL Server url."]}),"\n",(0,r.jsx)(a.h2,{id:"graphql-variable-types-and-type-safety",children:"GraphQL Variable Types and Type Safety"}),"\n",(0,r.jsxs)(a.p,{children:["GraphQL variables come with types to ensure type safety. For example, ",(0,r.jsx)(a.code,{children:"String!"})," indicates that the variable must be a string GraphQL type and is required. If you pass a different type, an error occurs, and the query won\u2019t run. This type safety prevents unexpected inputs and results, ensuring your application runs smoothly."]}),"\n",(0,r.jsxs)(a.p,{children:["GraphQL has several built-in types: ",(0,r.jsx)(a.code,{children:"String"}),", ",(0,r.jsx)(a.code,{children:"Int"}),", ",(0,r.jsx)(a.code,{children:"Float"}),", ",(0,r.jsx)(a.code,{children:"Boolean"}),", and ",(0,r.jsx)(a.code,{children:"ID"}),". These types form the foundation for ",(0,r.jsx)(a.a,{href:"/graphql/schemas-and-types#input-types",children:"input object types"}),". You can also define custom input types to model your data."]}),"\n",(0,r.jsx)(a.h2,{id:"building-apps-with-graphql",children:"Building Apps with GraphQL"}),"\n",(0,r.jsxs)(a.p,{children:["TailCall\u2019s CLI tool can generate GraphQL configurations from various sources, such as protobuf files and REST endpoints. This tool simplifies the process of creating GraphQL configurations, enabling you to build powerful applications with ease. To know more about the ",(0,r.jsx)(a.code,{children:"gen"})," command in the TailCall CLI, check out the ",(0,r.jsx)(a.a,{href:"/docs/tailcall-graphql-cli#gen",children:"documentation"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(a.p,{children:["GraphQL variables and type safety ensure consistent data across your applications. By leveraging these features, you can build flexible, reliable, and scalable applications. TailCall\u2019s CLI tool simplifies the process of generating GraphQL configurations, enabling you to create powerful applications with ease. To learn more about building apps with GraphQL, explore the ",(0,r.jsx)(a.a,{href:"/docs",children:"TailCall documentation"}),"."]})]})}function c(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>l});var r=n(6540);const s={},i=r.createContext(s);function t(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);