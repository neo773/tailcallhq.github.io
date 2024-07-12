"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7378],{35463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(74848),a=n(28453);const s={title:"Unraveling the Challenges of BFF Federation",authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems and building high performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=4",description:"A different take on GraphQL Federation."}],image:"/images/blog/bff-cover.png",hide_table_of_contents:!0,slug:"unraveling-the-challenges-of-bff-federation"},r=void 0,o={permalink:"/blog/unraveling-the-challenges-of-bff-federation",source:"@site/blog/bff-challenges-2023-06-19.md",title:"Unraveling the Challenges of BFF Federation",description:"Cover Image for Unraveling the Challenges of BFF Federation",date:"2023-06-19T00:00:00.000Z",tags:[],readingTime:10.425,hasTruncateMarker:!0,authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems and building high performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=4",description:"A different take on GraphQL Federation.",imageURL:"https://avatars.githubusercontent.com/u/194482?v=4"}],frontMatter:{title:"Unraveling the Challenges of BFF Federation",authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems and building high performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=4",description:"A different take on GraphQL Federation.",imageURL:"https://avatars.githubusercontent.com/u/194482?v=4"}],image:"/images/blog/bff-cover.png",hide_table_of_contents:!0,slug:"unraveling-the-challenges-of-bff-federation"},unlisted:!1,prevItem:{title:"The truth about scaling Automatic Persisted Queries",permalink:"/blog/2023/08/11/automatic-persisted-queries-"},nextItem:{title:"No one talks about API Orchestration",permalink:"/blog/no-one-talks-about-api-orchestration"}},h={authorsImageUrls:[void 0]},l=[{value:"Using a BFF Federation",id:"using-a-bff-federation",level:2},{value:"Federation Benefits",id:"federation-benefits",level:2},{value:"Federation vs BFF",id:"federation-vs-bff",level:2},{value:"Pitfalls of GraphQL Federation",id:"pitfalls-of-graphql-federation",level:2},{value:"We are onto something",id:"we-are-onto-something",level:2}];function c(e){const t={a:"a",br:"br",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Cover Image for Unraveling the Challenges of BFF Federation",src:n(29691).A+"",width:"1600",height:"840"}),"\nIn our ",(0,i.jsx)(t.a,{href:"https://blog.tailcall.run/no-one-talks-about-api-orchestration",children:"previous"})," blog post, we discussed the challenges of API Orchestration and its often overlooked role in a microservices architecture. We explored how, while it serves as an abstraction for frontend apps and websites, this abstraction's performance is very sensitive to network latency and device performance thus directly impacting end-user experience. One proposed solution was to create a Backend for Frontend (BFF) layer, essentially moving the frontend abstraction to powerful servers within your VPC. Although this approach effectively addresses the user experience problem and simplifies the work of front-end engineers, it introduces a new set of challenges for the backend, leading to difficulties in scaling the monolithic solution. Here's what the BFF architecture looked like:"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("link",{rel:"canonical",href:"https://tailcall.hashnode.dev/unraveling-the-challenges-of-bff-federation"}),(0,i.jsx)("title",{children:"Unraveling the Challenges of BFF Federation"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Architecture Diagram for BFF",src:n(21005).A+"",width:"3616",height:"2224"})}),"\n",(0,i.jsx)(t.h2,{id:"using-a-bff-federation",children:"Using a BFF Federation"}),"\n",(0,i.jsx)(t.p,{children:"Federation, as a concept, is not exclusive to GraphQL. In essence, it's about abstracting multiple data sources or services into a unified, single API interface that can be consumed by clients. This approach is not unique to any particular technology or framework and can be implemented with various tools and languages."}),"\n",(0,i.jsx)(t.p,{children:"However, GraphQL has played a significant role in popularizing the concept of federation. With its strong typing, introspective capabilities, and its natural fit for defining schemas across distributed services, it has provided an elegant solution to the challenge of federating APIs."}),"\n",(0,i.jsx)(t.p,{children:"While this blog discusses federation in the context of GraphQL, it's essential to understand that the core principles and challenges of the federation can be applied beyond GraphQL. Remember, the implementation of federation is not about a specific technology, but about the architectural approach to create a unified interface from multiple data sources."}),"\n",(0,i.jsx)(t.p,{children:"With this in mind, let's delve into the pros and cons of the federation, using GraphQL as our main context for the discussion. As you'll see, the benefits and pitfalls of federation are relevant, whether you're using GraphQL or not."}),"\n",(0,i.jsx)(t.p,{children:"Federation is a concept that originates from the philosophy of microservices. This approach promotes the partitioning of large monolithic systems into smaller, more manageable components. In a federated architecture, instead of having a monolithic Backend-for-Frontend (BFF) handling all requests, you have multiple smaller BFFs that handle different aspects of the request."}),"\n",(0,i.jsx)(t.p,{children:"Imagine a client makes a request to your system. This request still goes through an API gateway, which serves as the entry point to your system. However, instead of hitting a monolithic BFF, it now meets a BFF Router, specifically designed to understand and route requests to the appropriate BFFs."}),"\n",(0,i.jsx)(t.p,{children:"The Router is smart. It understands the client's request and can break it down into smaller parts. It then delegates these smaller tasks to the appropriate services, each responsible for a specific aspect of the request. These services work in parallel, handling their part of the request, which often involves calling downstream microservices and orchestrating their responses."}),"\n",(0,i.jsx)(t.p,{children:"Once the BFFs have finished their tasks, they send their responses back to the Router. The Router, in turn, takes these individual responses, combines them into a single response that fulfils the original request, and sends it back to the client."}),"\n",(0,i.jsx)(t.p,{children:'This system, where individual services handle specific parts of a request in a coordinated manner, is often referred to as a Federation. The term "Apollo Federation" or "Super Graph" is commonly used to describe this setup when it\'s implemented with Apollo, a popular GraphQL implementation, but the concept is not limited to any specific technology or tool.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"BFF Federation Architecture",src:n(88799).A+"",width:"4267",height:"2340"})}),"\n",(0,i.jsx)(t.h2,{id:"federation-benefits",children:"Federation Benefits"}),"\n",(0,i.jsx)(t.p,{children:"Many large organizations using GraphQL in production have transitioned to this architecture to accommodate their scaling needs. The primary selling points of this architecture are:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Enhanced Team Ownership"}),": GraphQL Federation fosters a sense of ownership among teams by allowing each team to own and maintain its GraphQL service. With Federation, teams can operate independently, focusing on their specific domain without worrying about the overall schema. This separation of concerns leads to more maintainable code, faster development cycles, and increased productivity. It empowers teams to work in parallel, each owning a piece of the larger schema while ensuring that the entire system operates as a cohesive whole. This significantly enhances team efficiency and collaboration, particularly in larger organizations with multiple teams working on different services. This alone is by far the most significant aspect of using GraphQL Federation."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Incremental Adoption"}),": A major advantage of GraphQL Federation is its ability to support incremental adoption. This means teams can gradually wrap their domain-specific microservices with a GraphQL layer, one at a time, and integrate it into the federated schema without disrupting the entire system. This flexible approach minimizes the impact on existing workflows and reduces the risks associated with large-scale changes.",(0,i.jsx)(t.br,{}),"\n","From the frontend perspective, GraphQL Federation offers a unified interface for querying the data. This simplifies the frontend code and enables the development of rich, interactive UIs with less effort. As soon as the first services are federated, frontend developers can begin transitioning their queries to the federated schema, reducing disruption and allowing for a smoother adoption process.",(0,i.jsx)(t.br,{}),"\n","This incremental approach also allows teams to evaluate and demonstrate the value of federation at each step, building confidence and promoting buy-in across the organization. It ensures teams are not overwhelmed by the complexity of new technology or architecture and can adjust their practices as they learn."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"federation-vs-bff",children:"Federation vs BFF"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"BFF vs Federation",src:n(19187).A+"",width:"1024",height:"1024"})}),"\n",(0,i.jsxs)(t.p,{children:["It's not hard to see that GraphQL Federation carries some serious muscle over its monolithic adversary, the BFF. But before we declare a champion, let's take a few rounds to scrutinize the ",(0,i.jsx)(t.a,{href:"https://blog.tailcall.run/no-one-talks-about-api-orchestration#heading-highly-specialized",children:"limitations"})," we've come across in our BFF solution, and see how the GraphQL Federation stands up under pressure. It's time for a head-to-head comparison!"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Specialization"}),": Both BFF and GraphQL Federation require a certain amount of manual intervention. In the BFF approach, the entire layer is custom-built, meaning there's no ready-to-use solution, which necessitates significant manual management. On the other hand, GraphQL Federation provides an open-source, ready-to-use Apollo Router. However, it's not an all-inclusive solution, as the individual GraphQL services still need to be manually maintained and written by hand for specific use cases. While it's still a tough fight, the federation manages to land a jab here and gets a few extra points in this round."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Fragility"}),": Federation offers an enhanced strategy. In a federated architecture, when a GraphQL service malfunction, only its segment of the graph becomes inaccessible to the user. This results in a more resilient system, less prone to total failure, demonstrating the ability to continue the fight even after taking a hit. In this round, Federation steps up and delivers a solid punch."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Performance"}),": When it comes to Performance, the Federation architecture introduces an extra journey for each packet. The request has to travel through the router, then to the individual GraphQL services, before finally reaching the domain service. This journey can add a few milliseconds of latency, a difference that may not be perceptible to the end user. However, this seemingly small delay has a broader impact on the performance of the entire architecture. The addition of the router introduces a requirement for more infrastructure and increases the frequency of data serialization and deserialization. This increased complexity affects both the system's throughput and infrastructure costs. In this round, the Federation architecture might not be the clear knockout winner we were hoping for."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Monolith Tendency"}),": It's a clear knockout in this round for the Federation! It elegantly sidesteps the monolith tendency, keeping the architecture agile and modular. BFF, in contrast, takes a heavy fall with its tendency to become a monolithic layer over time."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Canary Release:"})," Federation, unlike BFF, reveals graph dependencies and compatibility issues at runtime, not compile time. This amps up the need for first-class canary releases. However, when it comes to canary support, it's a draw. Both fighters are still in the ring, each showing resilience in their own way. No knockout here, folks!"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Coupled Release"}),": In the Federation architecture, each GraphQL service operates independently, significantly reducing the coupling between services and the router. This independence allows each team to manage its own release cycles, putting an end to the wide-scale halts that were commonplace with the BFF layer. However, it's important to note that each GraphQL service still maintains a tight connection with its corresponding downstream domain service. While this is a form of coupling, it's considerably less invasive than the BFF approach, where the entire layer was intertwined. Despite this necessary connection to the domain services, the Federation architecture proves to be more agile. In this round, GraphQL Federation edges out the BFF approach."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Organizational Friction:"})," With Federation, the responsibility for managing the architecture often falls squarely on the shoulders of backend engineers. The reason is simple: the complexity of the architecture and its intimate ties with downstream domain services necessitate a deep level of technical understanding. This is a departure from the BFF paradigm, where frontend teams could claim ownership of this part of the infrastructure. The intricate nature of the Federation, however, makes this almost untenable. When put head-to-head with BFFs, the Federation seems to take a step back in this regard. The power to control abstraction slips away from the consumer. In this round, BFFs manage to hold their ground."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Legacy Gateway:"})," Just as in the BFF model, the API gateway maintains its place in the Federation architecture, and rightfully so. However, we find ourselves reestablishing a substantial amount of resiliency and caching logic within these new layers, duplicating efforts previously expended on a traditional gateway. This redundancy marks a lack of efficiency in the Federation approach, signaling a tie in this round."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Overall, this round favors GraphQL Federation. It proves to be a significantly more robust architecture when evaluated based on the aforementioned criteria. Let's explore further and assess how it performs in isolation and as the company expands."}),"\n",(0,i.jsx)(t.h2,{id:"pitfalls-of-graphql-federation",children:"Pitfalls of GraphQL Federation"}),"\n",(0,i.jsx)(t.p,{children:"While GraphQL Federation has numerous benefits, it is not without its downsides. Here are some points of caution that should be considered when deciding to use this architecture:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Cost and Complexity:"})," GraphQL Federation introduces significant complexity into the architecture. Setting up, maintaining, and testing a federated graph can be a challenge as it requires a deep understanding of both GraphQL and distributed systems. Additionally, this architecture demands more infrastructure and a larger team for maintenance. As such, the adoption and migration process can be complex and costly. Typically, only large organizations with platform teams, robust budgets, and a governing body to maintain the schema's sanctity and system reliability, tend to consider adopting this approach. The inherent complexity and cost implications make the Federation a less likely choice for small to medium-sized organizations."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Ownership Challenges:"})," It is often argued that domain service owners maintain their individual GraphQL layers. However, this doesn't always reflect the reality. Services can frequently be divided or merged, leading to uncertainty about how to modify the GraphQL layer. This results in a complex web of requests from GraphQL services to domain services outside the team's control."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Infrastructure Scaling:"})," Each subgraph in a federated architecture operates on a separate piece of infrastructure, scaling independently. This brings its own set of challenges. For instance, when a subgraph is divided or merged, computing and scaling requirements need to be re-evaluated. Moreover, a deployment in another subgraph can trigger a substantial increase in load from the router on your subgraph, potentially causing unexpected stress on your infrastructure. This underscores the need for robust scaling and load-balancing strategies within a federated architecture."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"While GraphQL Federation has the potential to solve some issues of traditional BFF architecture, it brings in its own set of challenges. Therefore, it's important to evaluate these considerations based on the specific requirements and constraints of your project before deciding to implement this architecture."}),"\n",(0,i.jsx)(t.h2,{id:"we-are-onto-something",children:"We are onto something"}),"\n",(0,i.jsx)(t.p,{children:"When examining the underlying issue, the debate essentially revolves around microservices and monoliths. Undoubtedly, the federated solution offers better scalability compared to a monolithic architecture; however, it also introduces a myriad of distinct challenges related to maintenance and costs that warrant careful consideration. This is not the end of the discussion, as client requests pass through CDNs and the Gateway before reaching the router, and we have yet to explore those components of the infrastructure. In the following sections, we will delve into these components and further investigate how they interact, as well as delve deeper into GraphQL."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},21005:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/bff-architecture-a7202e41d6faa47b7ef3598111eb96eb.png"},29691:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/bff-cover-591717954e6cfda4e001dc14b9914060.png"},88799:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/bff-federation-37fccede46429acf5aa4fc8853314c68.png"},19187:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/bff-vs-federation-7684785c9ae161b9b5377301b07079fe.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);