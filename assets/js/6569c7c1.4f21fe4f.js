"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8637],{5429:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(5893),n=s(1151);const i={title:"@grpc"},o=void 0,c={id:"operators/grpc",title:"@grpc",description:"The @grpc operator, a crucial GraphQL custom directive, interfaces with gRPC services. It directly invokes gRPC services through GraphQL queries, bridging two powerful technologies. This directive proves useful in integrating GraphQL with microservices exposing gRPC endpoints.",source:"@site/docs/operators/grpc.md",sourceDirName:"operators",slug:"/operators/grpc",permalink:"/docs/operators/grpc",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/operators/grpc.md",tags:[],version:"current",frontMatter:{title:"@grpc"},sidebar:"tutorialSidebar",previous:{title:"@graphQL",permalink:"/docs/operators/graphql"},next:{title:"@http",permalink:"/docs/operators/http"}},h={},a=[{value:"Using the <code>@grpc</code> Operator",id:"using-the-grpc-operator",level:3},{value:"Sample proto File",id:"sample-proto-file",level:3},{value:"service",id:"service",level:3},{value:"method",id:"method",level:3},{value:"protoPath",id:"protopath",level:3},{value:"baseURL",id:"baseurl",level:3},{value:"body",id:"body",level:3},{value:"headers",id:"headers",level:3},{value:"groupBy",id:"groupby",level:3}];function l(e){const r={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"@grpc"})," operator, a crucial GraphQL custom directive, interfaces with gRPC services. It directly invokes gRPC services through GraphQL queries, bridging two powerful technologies. This directive proves useful in integrating GraphQL with microservices exposing gRPC endpoints."]}),"\n",(0,t.jsxs)(r.h3,{id:"using-the-grpc-operator",children:["Using the ",(0,t.jsx)(r.code,{children:"@grpc"})," Operator"]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"@grpc"})," operator resolves GraphQL fields using gRPC services. For example, querying the ",(0,t.jsx)(r.code,{children:"users"})," field triggers a gRPC request to the ",(0,t.jsx)(r.code,{children:"ListUsers"})," method of the ",(0,t.jsx)(r.code,{children:"UserService"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User] @grpc(service: "UserService", method: "ListUsers", protoPath: "./proto/user_service.proto")\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["In this example, querying the ",(0,t.jsx)(r.code,{children:"users"})," field prompts the GraphQL server to make a gRPC request to the ",(0,t.jsx)(r.code,{children:"ListUsers"})," method of the ",(0,t.jsx)(r.code,{children:"UserService"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"sample-proto-file",children:"Sample proto File"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:".proto"})," file outlines the gRPC service structure and its methods. For instance:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-proto",metastring:"showLineNumbers",children:'syntax = "proto3";\n\nservice UserService {\n  rpc ListUsers (UserListRequest) returns (UserListReply) {}\n  rpc GetUser (UserGetRequest) returns (UserGetReply) {}\n}\n\nmessage UserListRequest {\n  // Request parameters\n}\n\nmessage UserListReply {\n  // Reply structure\n}\n\nmessage UserGetRequest {\n  // Reply structure\n}\n\nmessage UserGetReply {\n  // Reply structure\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"service",children:"service"}),"\n",(0,t.jsxs)(r.p,{children:["Indicates the gRPC service for calling. It must match the service name defined in the ",(0,t.jsx)(r.code,{children:".proto"})," file."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User]\n    @grpc(\n      # highlight-start\n      service: "UserService"\n      # highlight-end\n      method: "ListUsers"\n      protoPath: "./proto/user_service.proto"\n    )\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"method",children:"method"}),"\n",(0,t.jsxs)(r.p,{children:["Specifies the gRPC method for invocation within the service. It must match the method name in the ",(0,t.jsx)(r.code,{children:".proto"})," file."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User]\n    @grpc(\n      service: "UserService"\n      # highlight-start\n      method: "ListUsers"\n      # highlight-end\n      protoPath: "./proto/user_service.proto"\n    )\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"protopath",children:"protoPath"}),"\n",(0,t.jsxs)(r.p,{children:["Specifies the path to the ",(0,t.jsx)(r.code,{children:".proto"})," file, which contains definitions for service and method for encoding and decoding requests/responses. The system resolves relative paths from the directory where it runs the tailcall command."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User]\n    @grpc(\n      service: "UserService"\n      method: "ListUsers"\n      # highlight-start\n      protoPath: "./proto/user_service.proto"\n      # highlight-end\n    )\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"baseurl",children:"baseURL"}),"\n",(0,t.jsxs)(r.p,{children:["Indicates the base URL for the gRPC API. If omitted, it defaults to the URL defined in the ",(0,t.jsx)(r.code,{children:"@upstream"})," operator."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User]\n    @grpc(\n      service: "UserService"\n      method: "ListUsers"\n      protoPath: "./proto/user_service.proto"\n      # highlight-start\n      baseURL: "https://grpc-server.example.com"\n      # highlight-end\n    )\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"body",children:"body"}),"\n",(0,t.jsxs)(r.p,{children:["Outlines the arguments for the gRPC call. The ",(0,t.jsx)(r.code,{children:"body"})," field specifies the arguments for the gRPC call, either static or dynamic."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type UserInput {\n  id: ID\n}\n\ntype Query {\n  user(id: UserInput!): User\n    @grpc(\n      service: "UserService"\n      method: "GetUser"\n      protoPath: "./proto/user_service.proto"\n      # highlight-start\n      body: "{{args.id}}"\n      # highlight-end\n    )\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"headers",children:"headers"}),"\n",(0,t.jsxs)(r.p,{children:["Custom headers for the gRPC request can specify using the ",(0,t.jsx)(r.code,{children:"headers"})," argument. This proves useful for passing authentication tokens or other contextual information."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User]\n    @grpc(\n      service: "UserService"\n      method: "ListUsers"\n      protoPath: "./proto/user_service.proto"\n      baseURL: "https://grpc-server.example.com"\n      # highlight-start\n      headers: [{key: "X-CUSTOM-HEADER", value: "custom-value"}]\n      # highlight-end\n    )\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"groupby",children:"groupBy"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"groupBy"})," argument optimizes batch requests by grouping them based on specified response keys, enhancing performance in scenarios with similar requests."]}),"\n",(0,t.jsx)(r.p,{children:"By understanding and using its fields, developers can create efficient, streamlined APIs that leverage the strengths of both GraphQL and gRPC."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users(id: UserInput!): User\n    @grpc(\n      service: "UserService"\n      method: "ListUsers"\n      protoPath: "./proto/user_service.proto"\n      baseURL: "https://grpc-server.example.com"\n      # highlight-start\n      groupBy: ["id"]\n      # highlight-end\n    )\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"@grpc"})," operator is a powerful tool for GraphQL developers, enabling seamless integration with gRPC services. By understanding and utilizing its specific fields, developers can create efficient, streamlined APIs that leverage the strengths of both GraphQL and gRPC."]})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>c,a:()=>o});var t=s(7294);const n={},i=t.createContext(n);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);