"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4097],{8857:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(5893),s=t(1151);const a={title:"@upstream"},r=void 0,o={id:"directives/upstream",title:"@upstream",description:"The upstream directive enables control over specific aspects of the upstream server connection, including settings such as connection timeouts, keep-alive intervals, and more. The system applies default values if you do not specify them.",source:"@site/docs/directives/upstream.md",sourceDirName:"directives",slug:"/directives/upstream",permalink:"/docs/directives/upstream",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/directives/upstream.md",tags:[],version:"current",frontMatter:{title:"@upstream"},sidebar:"tutorialSidebar",previous:{title:"@telemetry",permalink:"/docs/directives/telemetry"},next:{title:"Guidelines",permalink:"/docs/contributors"}},l={},c=[{value:"poolIdleTimeout",id:"poolidletimeout",level:2},{value:"poolMaxIdlePerHost",id:"poolmaxidleperhost",level:2},{value:"keepAliveInterval",id:"keepaliveinterval",level:2},{value:"keepAliveTimeout",id:"keepalivetimeout",level:2},{value:"keepAliveWhileIdle",id:"keepalivewhileidle",level:2},{value:"proxy",id:"proxy",level:2},{value:"connectTimeout",id:"connecttimeout",level:2},{value:"timeout",id:"timeout",level:2},{value:"tcpKeepAlive",id:"tcpkeepalive",level:2},{value:"userAgent",id:"useragent",level:2},{value:"allowedHeaders",id:"allowedheaders",level:2},{value:"baseURL",id:"baseurl",level:2},{value:"httpCache",id:"httpcache",level:2},{value:"Tips",id:"tips",level:3},{value:"batch",id:"batch",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"upstream"})," directive enables control over specific aspects of the upstream server connection, including settings such as connection timeouts, keep-alive intervals, and more. The system applies default values if you do not specify them."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @upstream(...[UpstreamSetting]...){\n    query: Query\n    mutation: Mutation\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The document below details the options for ",(0,i.jsx)(n.code,{children:"UpstreamSetting"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"poolidletimeout",children:"poolIdleTimeout"}),"\n",(0,i.jsx)(n.p,{children:"The connection pool waits for this duration in seconds before closing idle connections."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    poolIdleTimeout: 60\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"poolmaxidleperhost",children:"poolMaxIdlePerHost"}),"\n",(0,i.jsx)(n.p,{children:"The max number of idle connections each host will maintain."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    poolMaxIdlePerHost: 60\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"keepaliveinterval",children:"keepAliveInterval"}),"\n",(0,i.jsx)(n.p,{children:"The time in seconds between each keep-alive message sent to maintain the connection."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    keepAliveInterval: 60\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"keepalivetimeout",children:"keepAliveTimeout"}),"\n",(0,i.jsx)(n.p,{children:"The time in seconds that the connection will wait for a keep-alive message before closing."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    keepAliveTimeout: 60\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"keepalivewhileidle",children:"keepAliveWhileIdle"}),"\n",(0,i.jsx)(n.p,{children:"A boolean value that determines whether to send keep-alive messages while the connection is idle."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    keepAliveWhileIdle: false\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"proxy",children:"proxy"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"proxy"})," setting defines an intermediary server that routes upstream requests before they reach their intended endpoint. By specifying a proxy URL, you introduce a layer, enabling custom routing and security policies."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    proxy: {url: "http://localhost:3000"}\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the provided example, we've set the proxy's ",(0,i.jsx)(n.code,{children:"url"}),' to "',(0,i.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),'". This configuration ensures that all requests aimed at the designated ',(0,i.jsx)(n.code,{children:"baseURL"})," first go through this proxy. To illustrate, if the ",(0,i.jsx)(n.code,{children:"baseURL"}),' is "',(0,i.jsx)(n.a,{href:"http://jsonplaceholder.typicode.com",children:"http://jsonplaceholder.typicode.com"}),'", any request targeting it initially goes to "',(0,i.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),'" before the proxy redirects it to its final destination.']}),"\n",(0,i.jsx)(n.h2,{id:"connecttimeout",children:"connectTimeout"}),"\n",(0,i.jsx)(n.p,{children:"The time in seconds that the connection will wait for a response before timing out."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    connectTimeout: 60\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"timeout",children:"timeout"}),"\n",(0,i.jsx)(n.p,{children:"The max time in seconds that the connection will wait for a response."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    timeout: 60\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"tcpkeepalive",children:"tcpKeepAlive"}),"\n",(0,i.jsx)(n.p,{children:"The time in seconds between each TCP keep-alive message sent to maintain the connection."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    tcpKeepAlive: 60\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"useragent",children:"userAgent"}),"\n",(0,i.jsx)(n.p,{children:"The User-Agent header value for HTTP requests."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    userAgent: "Tailcall/1.0"\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"allowedheaders",children:"allowedHeaders"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"allowedHeaders"})," configuration defines a set of whitelisted HTTP headers that can be forwarded to upstream services during requests.\nWithout specifying ",(0,i.jsx)(n.code,{children:"allowedHeaders"}),", the system will not forward any incoming headers to upstream services, offering an extra security layer but potentially limiting necessary data flow. Tailcall compares the provided whitelisted headers in a case-insensitive format."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    allowedHeaders: ["Authorization", "X-Api-Key"]\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the example above, the configuration for ",(0,i.jsx)(n.code,{children:"allowedHeaders"})," permits ",(0,i.jsx)(n.code,{children:"Authorization"})," and ",(0,i.jsx)(n.code,{children:"X-Api-Key"})," headers. Thus, requests with these headers will forward them to upstream services; the system ignores all others. This configuration ensures communication of the expected headers to dependent services, emphasizing security and consistency."]}),"\n",(0,i.jsx)(n.h2,{id:"baseurl",children:"baseURL"}),"\n",(0,i.jsxs)(n.p,{children:["This refers to the default base URL for your APIs. If it's not explicitly mentioned in the ",(0,i.jsx)(n.code,{children:"@upstream"})," directive, then each ",(0,i.jsx)(n.a,{href:"/docs/directives/http",children:(0,i.jsx)(n.code,{children:"@http"})})," directive must specify its own ",(0,i.jsx)(n.code,{children:"baseURL"}),". If neither ",(0,i.jsx)(n.code,{children:"@upstream"})," nor ",(0,i.jsx)(n.a,{href:"/docs/directives/http",children:(0,i.jsx)(n.code,{children:"@http"})})," provides a ",(0,i.jsx)(n.code,{children:"baseURL"}),", it results in a compilation error."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this representation, ",(0,i.jsx)(n.code,{children:"http://jsonplaceholder.typicode.com"})," serves as the ",(0,i.jsx)(n.code,{children:"baseURL"}),". Thus, all API calls made by ",(0,i.jsx)(n.code,{children:"@http"})," prepend this URL to their respective paths."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Ensure that your base URL remains free from specific path segments."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GOOD:"})," ",(0,i.jsx)(n.code,{children:"@upstream(baseURL: http://jsonplaceholder.typicode.com)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"BAD:"})," ",(0,i.jsx)(n.code,{children:"@upstream(baseURL: http://jsonplaceholder.typicode.com/api)"})]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"httpcache",children:"httpCache"}),"\n",(0,i.jsxs)(n.p,{children:["When activated, directs Tailcall to use HTTP caching mechanisms, following the ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7234",children:"HTTP Caching RFC"})," to enhance performance by minimizing unnecessary data fetches. If left unspecified, this feature defaults to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema @upstream(httpCache: false) {\n  query: Query\n  mutation: Mutation\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"tips",children:"Tips"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use batching when other optimization techniques fail to resolve performance issues."}),"\n",(0,i.jsx)(n.li,{children:"Apply batching and thoroughly assess its impact."}),"\n",(0,i.jsx)(n.li,{children:"Understand that batching may make debugging more challenging."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"batch",children:"batch"}),"\n",(0,i.jsxs)(n.p,{children:["An object that specifies the batch settings, including ",(0,i.jsx)(n.code,{children:"maxSize"})," (the max size of the batch), ",(0,i.jsx)(n.code,{children:"delay"})," (the delay in milliseconds between each batch), and ",(0,i.jsx)(n.code,{children:"headers"})," (an array of HTTP headers that the batch will include)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @upstream(\n    batch: {\n      maxSize: 1000\n      delay: 10\n      headers: ["X-Server", "Authorization"]\n    }\n  ) {\n  query: Query\n  mutation: Mutation\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(7294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);