"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2892],{9265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(4848),i=t(8453);const r={title:"Step-by-Step Tutorial: Building GraphQL over gRPC",sidebar_label:"GraphQL on gRPC",description:"Learn how gRPC and GraphQL boost microservices. Discover their benefits and how they work together for better APIs.",slug:"graphql-grpc-tailcall",image:"/images/docs/graphql_on_grpc.png"},a=void 0,l={id:"grpc",title:"Step-by-Step Tutorial: Building GraphQL over gRPC",description:"Learn how gRPC and GraphQL boost microservices. Discover their benefits and how they work together for better APIs.",source:"@site/docs/grpc.md",sourceDirName:".",slug:"/graphql-grpc-tailcall",permalink:"/docs/graphql-grpc-tailcall",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/grpc.md",tags:[],version:"current",lastUpdatedAt:1719477637e3,frontMatter:{title:"Step-by-Step Tutorial: Building GraphQL over gRPC",sidebar_label:"GraphQL on gRPC",description:"Learn how gRPC and GraphQL boost microservices. Discover their benefits and how they work together for better APIs.",slug:"graphql-grpc-tailcall",image:"/images/docs/graphql_on_grpc.png"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/field-level-access-control-graphql-authentication"},next:{title:"Custom Resolvers",permalink:"/docs/graphql-javascript-customization"}},o={},c=[{value:"What is gRPC?",id:"what-is-grpc",level:2},{value:"gRPC upstream",id:"grpc-upstream",level:2},{value:"Protobuf definition",id:"protobuf-definition",level:3},{value:"Implement gRPC service",id:"implement-grpc-service",level:3},{value:"GraphQL Configuration for GRPC",id:"graphql-configuration-for-grpc",level:2},{value:"Batching",id:"batching",level:2},{value:"Reflection",id:"reflection",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Key Takeaways",id:"key-takeaways",level:3},{value:"Next Steps",id:"next-steps",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r,{children:[(0,s.jsx)("meta",{property:"og:type",content:"article"}),(0,s.jsx)("title",{children:"How to build GraphQL over gRPC APIs"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"GraphQL on gRPC",src:t(7562).A+"",width:"1975",height:"1218"}),"\n",(0,s.jsx)(n.em,{children:"Architecture Diagram Showcasing GraphQL as an API Orchestrator for gRPC APIs"})]}),"\n",(0,s.jsx)(n.p,{children:"In this guide, we will set up a simple gRPC service and use it inside Tailcall's GraphQL config to fetch some of the data provided by the service. This way Tailcall can provide a single GraphQL schema wrapping any number of gRPC services. Which client side can use to fetch data from multiple services in a single request."}),"\n",(0,s.jsx)(n.h2,{id:"what-is-grpc",children:"What is gRPC?"}),"\n",(0,s.jsx)(n.p,{children:"This guide assumes a basic familiarity with gRPC. It is a high-performance framework created by Google for remote procedure calls (RPCs). Its key features include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"HTTP/2 Transport:"})," Ensures efficient and fast data transfer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Protocol Buffers (Protobuf):"})," Serves as a powerful interface description language."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Efficiency:"})," Offers binary serialization, reduces latency, and supports data streaming."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This combination of features makes gRPC ideal for microservices and distributed systems. If you need a more detailed understanding or are new to gRPC, we recommend visiting the ",(0,s.jsx)(n.a,{href:"https://grpc.io/",children:"official gRPC website"})," for comprehensive documentation and resources."]}),"\n",(0,s.jsx)(n.p,{children:"Now, let's explore how gRPC can be integrated into our proxy gateway to enhance communication and data exchange in distributed systems."}),"\n",(0,s.jsx)(n.h2,{id:"grpc-upstream",children:"gRPC upstream"}),"\n",(0,s.jsx)(n.p,{children:"We need some gRPC service available to be able to execute requests from the Tailcall gateway. For pure example purposes, we will build some simple gRPC services."}),"\n",(0,s.jsx)(n.h3,{id:"protobuf-definition",children:"Protobuf definition"}),"\n",(0,s.jsxs)(n.p,{children:["First, we need to create an example protobuf file that will define the structure of the data we want to transmit using gRPC. Here is the definition of ",(0,s.jsx)(n.code,{children:"NewsService"})," that implements CRUD operations on news data that we'll put into the ",(0,s.jsx)(n.code,{children:"news.proto"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-protobuf",children:'syntax = "proto3";\n\nimport "google/protobuf/empty.proto";\n\npackage news;\n\n// Define message type for News with all its fields\nmessage News {\n    int32 id = 1;\n    string title = 2;\n    string body = 3;\n    string postImage = 4;\n}\n\n// Message with the id of a single news\nmessage NewsId {\n    int32 id = 1;\n}\n\n// List of IDs of news to get multiple responses\nmessage MultipleNewsId {\n    repeated NewsId ids = 1;\n}\n\n// List of all news\nmessage NewsList {\n   repeated News news = 1;\n}\n\n// NewsService defines read and write operations for news items\nservice NewsService {\n    // GetAllNews retrieves all news items without any arguments\n    rpc GetAllNews (google.protobuf.Empty) returns (NewsList) {}\n\n    // GetNews fetches a single news item by its ID\n    rpc GetNews (NewsId) returns (News) {}\n\n    // GetMultipleNews retrieves multiple news items based on their IDs\n    rpc GetMultipleNews (MultipleNewsId) returns (NewsList) {}\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"implement-grpc-service",children:"Implement gRPC service"}),"\n",(0,s.jsxs)(n.p,{children:["Now having the protobuf file you can write a server that implements ",(0,s.jsx)(n.code,{children:"NewsService"})," at any language you want that supports gRPC. Tailcall organization has a sample node.js service inside ",(0,s.jsx)(n.a,{href:"https://github.com/tailcallhq/node-grpc",children:"this repo"})," that you can pull to your local machine. To spin up the sample service run inside the repo and wait for logs about the service running."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm i\nnpm start\n"})}),"\n",(0,s.jsx)(n.h2,{id:"graphql-configuration-for-grpc",children:"GraphQL Configuration for GRPC"}),"\n",(0,s.jsxs)(n.p,{children:["Now when we have a running gRPC service we're going to write Tailcall's config to make the integration. To do this we need to specify GraphQL types corresponding to gRPC types we have defined in the protobuf file. Let's create a new file ",(0,s.jsx)(n.code,{children:"grpc.graphql"})," file with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"# The GraphQL representation for News message type\ntype News {\n  id: Int\n  title: String\n  body: String\n  postImage: String\n}\n\n# Input type that is used to fetch news data by its id\ninput NewsInput {\n  id: Int\n}\n\n# Resolves multiple news entries\ntype NewsData {\n  news: [News]!\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now when we have corresponding types in schema we want to define GraphQL Query that specifies the operation we can execute onto news. We can extend our config with the next Query:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type Query {\n  # Get all news i.e. NewsService.GetAllNews\n  news: NewsData!\n  # Get single news by id i.e. NewsService.GetNews\n  newsById(news: NewsInput!): News!\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Also, let's specify options for Tailcall's ingress and egress at the beginning of the config using ",(0,s.jsx)(n.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#server-directive",children:(0,s.jsx)(n.code,{children:"@server"})})," and ",(0,s.jsx)(n.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#upstream-directive",children:(0,s.jsx)(n.code,{children:"@upstream"})})," directives."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'schema\n  @server(port: 8000)\n  @upstream(\n    baseURL: "http://localhost:50051"\n    httpCache: 42\n  ) {\n  query: Query\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To specify the protobuf file to read types from, use the ",(0,s.jsx)(n.code,{children:"@link"})," directive with the type ",(0,s.jsx)(n.code,{children:"Protobuf"})," on the schema. ",(0,s.jsx)(n.code,{children:"id"})," is an important part of the definition that will be used by the ",(0,s.jsx)(n.code,{children:"@grpc"})," directive later"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'schema @link(id: "news", src: "./news.proto", type: Protobuf)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now you can connect GraphQL types to gRPC types. To do this you may want to explore more about ",(0,s.jsxs)(n.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#grpc-directive",children:[(0,s.jsx)(n.code,{children:"@grpc"})," directive"]}),". Its usage is pretty straightforward and requires you to specify the path to a method that should be used to make a call. The method name will start with the package name, followed by the service name and the method name, all separated by the ",(0,s.jsx)(n.code,{children:"."})," symbol."]}),"\n",(0,s.jsxs)(n.p,{children:["If you need to provide any input to the gRPC method call you can specify it with the ",(0,s.jsx)(n.code,{children:"body"})," option that allows you to specify a Mustache template and therefore it could use any input data like ",(0,s.jsx)(n.code,{children:"args"})," and ",(0,s.jsx)(n.code,{children:"value"})," to construct the body request. The body value is specified in the JSON format if you need to create the input manually and cannot use ",(0,s.jsx)(n.code,{children:"args"})," input."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'type Query {\n  news: NewsData!\n    @grpc(method: "news.news.NewsService.GetAllNews")\n  newsById(news: NewsInput!): News!\n    @grpc(\n      service: "news.news.NewsService.GetNews"\n      body: "{..args.news}}"\n    )\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Wrapping up the whole result config that may look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'# file: app.graphql\n\nschema\n  @server(port: 8000)\n  @upstream(\n    baseURL: "http://localhost:50051"\n    httpCache: 42\n  )\n  @link(id: "news", src: "./news.proto", type: Protobuf) {\n  query: Query\n}\n\ntype Query {\n  news: NewsData!\n    @grpc(method: "news.news.NewsService.GetAllNews")\n  newsById(news: NewsInput!): News!\n    @grpc(\n      method: "news.news.NewsService.GetNews"\n      body: "{{.args.news}}"\n    )\n}\n\ntype News {\n  id: Int\n  title: String\n  body: String\n  postImage: String\n}\n\ninput NewsInput {\n  id: Int\n}\n\ntype NewsData {\n  news: [News]!\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Start the server by pointing it to the config."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"tailcall start ./app.graphql\n"})}),"\n",(0,s.jsxs)(n.p,{children:["And now you can go to the page ",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8000/graphql"})," and execute some GraphQL queries e.g.:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"{\n  news {\n    news {\n      id\n      title\n      body\n    }\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"{\n  newsById(news: {id: 2}) {\n    id\n    title\n    body\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"batching",children:"Batching"}),"\n",(0,s.jsxs)(n.p,{children:["Another important feature of the ",(0,s.jsx)(n.code,{children:"@grpc"})," directive is that it allows you to implement request batching for remote data almost effortlessly as soon as you have gRPC methods that resolve multiple responses for multiple inputs in a single request."]}),"\n",(0,s.jsxs)(n.p,{children:["In our protobuf example file, we have a method called ",(0,s.jsx)(n.code,{children:"GetMultipleNews"})," that we can use. To enable batching we need to enable ",(0,s.jsxs)(n.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#batch",children:[(0,s.jsx)(n.code,{children:"@upstream.batch"})," option"]})," first and specify ",(0,s.jsx)(n.code,{children:"batchKey"})," option for the ",(0,s.jsx)(n.code,{children:"@grpc"})," directive."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'schema\n  @server(port: 8000)\n  @upstream(\n    baseURL: "http://localhost:50051"\n    httpCache: 42\n    batch: {delay: 10}\n  )\n  @link(id: "news", src: "./news.proto", type: Protobuf) {\n  query: Query\n}\n\ntype Query {\n  newsById(news: NewsInput!): News!\n    @grpc(\n      method: "news.NewsService.GetNews"\n      body: "{{.args.news}}"\n      # highlight-next-line\n      batchKey: ["news", "id"]\n    )\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Restart the GraphQL server and make the query with multiple news separately, e.g.:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"{\n  n1: newsById(news: {id: 1}) {\n    id\n    title\n    body\n  }\n  n2: newsById(news: {id: 2}) {\n    id\n    title\n    body\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Those 2 requests will be executed inside a single request to the gRPC method ",(0,s.jsx)(n.code,{children:"GetMultipleNews"})]}),"\n",(0,s.jsx)(n.h2,{id:"reflection",children:"Reflection"}),"\n",(0,s.jsx)(n.p,{children:"gRPC reflection is a potent feature enabling clients to dynamically discover services and their methods at runtime. Tailcall enhances this capability by obviating the need for developers to link each proto file individually. This feature proves particularly valuable in environments where proto files are continuously evolving or when services dynamically expose varying methods. Here are the steps to follow:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the gRPC endpoint as a [link] with type set to ",(0,s.jsx)(n.code,{children:"Grpc"}),". This enables the GraphQL server to understand that the specified source is a gRPC endpoint that supports reflection."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'schema\n  @link(\n    src: "https://my-grpc-service.com:50051"\n    type: Grpc\n  ) {\n  query: Query\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Next, as before we will just add the methods with a fully qualified name:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'type Query {\n  news: [News]\n    @grpc(method: "news.NewsService.GetAllNews")\n}\n\ntype News {\n  id: Int\n  title: String\n  body: String\n  postImage: String\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Well done on integrating a gRPC service with the Tailcall gateway! This tutorial has demonstrated the straightforward and efficient process, showcasing Tailcall's compatibility with advanced communication protocols like gRPC."}),"\n",(0,s.jsx)(n.p,{children:"You can find this working example and test it by yourself by the next links:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/tailcallhq/node-grpc",children:"node-grpc"})," - example implementation for gRPC service in node.js"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/tailcallhq/tailcall/blob/main/examples/grpc.graphql",children:"gRPC example config"})," - Tailcall's config to integrate with gRPC service above"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"key-takeaways",children:"Key Takeaways"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simplicity of Integration:"})," The integration of gRPC with Tailcall seamlessly enhances the overall capability of your system to handle high-performance and efficient data composition."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scalability and Performance:"})," By leveraging the power of gRPC along with Tailcall, we've laid a foundation for building scalable and high-performing distributed systems."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"With the basics in place, we encourage you to explore further:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dive Deeper:"})," Tailcall gateway offers a lot of other features and configurations that you can utilize. Dive deeper into our documentation to explore more advanced settings and customization options."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Explore Other Guides:"})," Our documentation includes a variety of guides and tutorials that can help you leverage the full potential of Tailcall in different scenarios. Whether it's adding security layers, load balancing, or detailed logging, there's a lot more to explore."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7562:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/graphql_on_grpc-64a80892e45cbcdeda80a426112fbda6.png"}}]);