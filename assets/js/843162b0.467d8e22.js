"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4316],{9850:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=s(5893),i=s(1151);const t={title:"@server"},a=void 0,o={id:"operators/server",title:"@server",description:"The @server directive, when applied at the schema level, offers a comprehensive set of server configurations. It dictates how the server behaves and helps tune tailcall for various use-cases.",source:"@site/docs/operators/server.md",sourceDirName:"operators",slug:"/operators/server",permalink:"/docs/operators/server",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/operators/server.md",tags:[],version:"current",frontMatter:{title:"@server"},sidebar:"tutorialSidebar",previous:{title:"@modify",permalink:"/docs/operators/modify"},next:{title:"@upstream",permalink:"/docs/operators/upstream"}},l={},c=[{value:"workers",id:"workers",level:2},{value:"port",id:"port",level:2},{value:"cacheControlHeader",id:"cachecontrolheader",level:2},{value:"graphiql",id:"graphiql",level:2},{value:"vars",id:"vars",level:2},{value:"introspection",id:"introspection",level:2},{value:"queryValidation",id:"queryvalidation",level:2},{value:"responseValidation",id:"responsevalidation",level:2},{value:"responseHeaders",id:"responseheaders",level:2},{value:"globalResponseTimeout",id:"globalresponsetimeout",level:2},{value:"http",id:"http",level:2},{value:"cert",id:"cert",level:2},{value:"key",id:"key",level:2},{value:"batchRequests",id:"batchrequests",level:2},{value:"Trade-offs",id:"trade-offs",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"@server"})," directive, when applied at the schema level, offers a comprehensive set of server configurations. It dictates how the server behaves and helps tune tailcall for various use-cases."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(...[ServerSettings]...){\n    query: Query\n    mutation: Mutation\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this templated structure, replace ",(0,r.jsx)(n.code,{children:"...[ServerSettings]..."})," with specific configurations tailored to your project's needs. Adjust and expand these settings as necessary."]}),"\n",(0,r.jsxs)(n.p,{children:["The various ",(0,r.jsx)(n.code,{children:"ServerSettings"})," options and their details are explained below."]}),"\n",(0,r.jsx)(n.h2,{id:"workers",children:"workers"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"workers"})," sets the number of worker threads the server will use. If not specified, the default value is the number of cores available to the system."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(workers: 32) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, the ",(0,r.jsx)(n.code,{children:"workers"})," is set to ",(0,r.jsx)(n.code,{children:"32"}),". This means that the Tailcall server will use 32 worker threads."]}),"\n",(0,r.jsx)(n.h2,{id:"port",children:"port"}),"\n",(0,r.jsxs)(n.p,{children:["This refers to the ",(0,r.jsx)(n.code,{children:"port"})," on which the Tailcall will be running. If not specified, the default port is ",(0,r.jsx)(n.code,{children:"8000"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(port: 8090) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, the ",(0,r.jsx)(n.code,{children:"port"})," is set to ",(0,r.jsx)(n.code,{children:"8090"}),". This means that the Tailcall will be accessible at ",(0,r.jsx)(n.code,{children:"http://localhost:8090"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Always lean towards non-standard ports, steering clear of typical ones like 80 or 8080. Ensure your chosen port is unoccupied."})}),"\n",(0,r.jsx)(n.h2,{id:"cachecontrolheader",children:"cacheControlHeader"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"cacheControlHeader"})," configuration, when activated, instructs Tailcall to transmit ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",children:"Cache-Control"})," headers in its responses. The ",(0,r.jsx)(n.code,{children:"max-age"})," value in the header, is the least of the values in the responses received by tailcall from the upstream services. By default, this is set to ",(0,r.jsx)(n.code,{children:"false"})," meaning no header is set."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(cacheControlHeader: true) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"graphiql",children:"graphiql"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"grahiql"})," configuration enables the GraphiQL IDE at the root (/) path within Tailcall. GraphiQL is a built-in, interactive in-browser GraphQL IDE, designed to streamline query development and testing. By default, this feature is turned off."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(port: 8000, graphiql: true) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"While the GraphiQL interface is a powerful tool for development, it's recommended to disable it in production environments, especially if you're not exposing GraphQL APIs directly to users. This ensures an added layer of security and reduces unnecessary exposure."})}),"\n",(0,r.jsx)(n.h2,{id:"vars",children:"vars"}),"\n",(0,r.jsx)(n.p,{children:"This configuration allows you to define local variables that can be leveraged during the server's operations. These variables are particularly handy when you need to store constant configurations, secrets, or other shared information that various operations might require."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @server(vars: {key: "apiKey", value: "YOUR_API_KEY_HERE"}) {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  externalData: Data\n    @http(path: "/external-api/data", headers: [{key: "Authorization", value: "Bearer {{vars.apiKey}}"}])\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In the provided example, a variable named ",(0,r.jsx)(n.code,{children:"apiKey"}),' is set with a placeholder value of "YOUR_API_KEY_HERE". This configuration implies that whenever Tailcall fetches data from the ',(0,r.jsx)(n.code,{children:"externalData"})," endpoint, it includes the ",(0,r.jsx)(n.code,{children:"apiKey"})," in the Authorization header of the HTTP request."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Local variables, like ",(0,r.jsx)(n.code,{children:"apiKey"}),", can be instrumental in securing access to external services or providing a unified place for configurations. Ensure that sensitive information stored this way is well protected and not exposed unintentionally, especially if your Tailcall configuration is publicly accessible."]})}),"\n",(0,r.jsx)(n.h2,{id:"introspection",children:"introspection"}),"\n",(0,r.jsxs)(n.p,{children:["This setting governs whether introspection queries are permitted on the server. Introspection is an intrinsic feature of GraphQL, allowing clients to fetch information about the schema directly. This can be instrumental for tools and client applications to understand the types, fields, and operations available. By default, this setting is enabled (",(0,r.jsx)(n.code,{children:"true"}),")."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(introspection: false) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Although introspection is beneficial during development and debugging stages, it's wise to consider disabling it in production environments. Turning off introspection in live deployments can enhance security by preventing potential attackers from easily discerning the schema and any associated business logic or data structures."})}),"\n",(0,r.jsx)(n.h2,{id:"queryvalidation",children:"queryValidation"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"queryValidation"})," configuration specifies whether the server should validate incoming GraphQL queries against the defined schema. Validating each query ensures its conformity to the schema, preventing errors from invalid or malformed queries. However, there are situations where you might opt to disable it, notably when seeking to ",(0,r.jsx)(n.strong,{children:"enhance server performance"})," at the cost of such checks. This defaults to ",(0,r.jsx)(n.code,{children:"false"})," if not specified."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(queryValidation: true) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above, ",(0,r.jsx)(n.code,{children:"queryValidation"})," is set to ",(0,r.jsx)(n.code,{children:"true"}),", enabling the validation phase for incoming queries."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"This should be enabled in dev environment to make sure the queries sent are correct and validated, however in production env, you could consider disabling it for improved performance."})}),"\n",(0,r.jsx)(n.h2,{id:"responsevalidation",children:"responseValidation"}),"\n",(0,r.jsxs)(n.p,{children:["Tailcall automatically can infer the schema of the http endpoints for you. This information can be used to validate responses that are received from the upstream services. Enabling this setting allows you to perform exactly that. If this is not specified, the default setting for ",(0,r.jsx)(n.code,{children:"responseValidation"})," is ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(responseValidation: true) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Disabling this setting will offer major performance improvements, but at the potential expense of data."})}),"\n",(0,r.jsx)(n.h2,{id:"responseheaders",children:"responseHeaders"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"responseHeader"})," is an array of key-value pairs. These headers are added to the response of every request made to the server. This can be useful for adding headers like ",(0,r.jsx)(n.code,{children:"Access-Control-Allow-Origin"})," to allow cross-origin requests, or some\nadditional headers like ",(0,r.jsx)(n.code,{children:"X-Allowed-Roles"})," to be used by the downstream services."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @server(responseHeaders: [{key: "X-Allowed-Roles", value: "admin,user"}]) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"globalresponsetimeout",children:"globalResponseTimeout"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"globalResponseTimeout"})," configuration determines the maximum duration a query is allowed to run before it's terminated by the server. Essentially, it acts as a safeguard against long-running queries that could strain resources or pose security concerns."]}),"\n",(0,r.jsx)(n.p,{children:"If not explicitly defined, there might be a system-specific or default value that applies."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(globalResponseTimeout: 5000) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this given example, the ",(0,r.jsx)(n.code,{children:"globalResponseTimeout"})," is set to ",(0,r.jsx)(n.code,{children:"5000"})," milliseconds, or 5 seconds. This means any query execution taking longer than this duration will be automatically terminated by the server."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"It's crucial to set an appropriate response timeout, especially in production environments. This not only optimizes resource utilization but also acts as a security measure against potential denial-of-service attacks where adversaries might run complex queries to exhaust server resources."})}),"\n",(0,r.jsx)(n.h2,{id:"http",children:"http"}),"\n",(0,r.jsxs)(n.p,{children:["The version of HTTP to be used by the server. If not specified, the default value is ",(0,r.jsx)(n.code,{children:"HTTP1"}),". The available options are ",(0,r.jsx)(n.code,{children:"HTTP1"})," and ",(0,r.jsx)(n.code,{children:"HTTP2"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(http: HTTP2) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"cert",children:"cert"}),"\n",(0,r.jsxs)(n.p,{children:["The path to certificate(s) to be used when running the server over HTTP2 (HTTPS). If not specified, the default value is ",(0,r.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @server(cert: "./cert.pem") {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The certificate can be of any extension, but it's highly recommended to use standards (",(0,r.jsx)(n.code,{children:"pem"}),", ",(0,r.jsx)(n.code,{children:"crt"}),", ",(0,r.jsx)(n.code,{children:"key"}),")."]})}),"\n",(0,r.jsx)(n.h2,{id:"key",children:"key"}),"\n",(0,r.jsxs)(n.p,{children:["The path to key to be used when running the server over HTTP2 (HTTPS). If not specified, the default value is ",(0,r.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @server(key: "./key.pem") {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The key can be of any extension, but it's highly recommended to use standards (",(0,r.jsx)(n.code,{children:"pem"}),", ",(0,r.jsx)(n.code,{children:"crt"}),", ",(0,r.jsx)(n.code,{children:"key"}),")."]})}),"\n",(0,r.jsx)(n.h2,{id:"batchrequests",children:"batchRequests"}),"\n",(0,r.jsx)(n.p,{children:"Batching in GraphQL combines multiple requests into one, reducing server round trips."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @server(\n  port: 8000\n  batchRequests: true\n)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"trade-offs",children:"Trade-offs"}),"\n",(0,r.jsx)(n.p,{children:"Batching can improve performance but may introduce latency if one request in the batch takes longer. It also makes network traffic debugging harder."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var r=s(7294);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);