"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7656],{5269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(4848),s=t(8453);const o={title:"Problem Statement",slug:"problem-statement"},r=void 0,a={id:"problem-statement",title:"Problem Statement",description:"Tailcall is solving the problem of API orchestration for a microservices architecture. In a microservices architecture, different services are developed and deployed separately. However, when you are building an application, you need to access multiple services to do anything meaningful. Typically you would access these services via APIs using REST, GRPC, or GraphQL protocol.",source:"@site/graphql/problem-statement.md",sourceDirName:".",slug:"/problem-statement",permalink:"/graphql/problem-statement",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171973222e4,frontMatter:{title:"Problem Statement",slug:"problem-statement"},sidebar:"graphql",previous:{title:"CTOs Guide",permalink:"/graphql/cto-guide"}},c={},l=[{value:"Problem Space",id:"problem-space",level:2},{value:"Microservice Architecture",id:"microservice-architecture",level:2},{value:"API Orchestration",id:"api-orchestration",level:2},{value:"Composition on Clients",id:"composition-on-clients",level:2},{value:"Backend For Frontend (BFF)",id:"backend-for-frontend-bff",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Tailcall is solving the problem of API orchestration for a microservices architecture. In a microservices architecture, different services are developed and deployed separately. However, when you are building an application, you need to access multiple services to do anything meaningful. Typically you would access these services via APIs using REST, GRPC, or GraphQL protocol.\nA backend for frontend (BFF) layer is a hand-crafted first-class solution for aggregating data from multiple services, catered towards frontend applications. However similar use-cases exist even for the backend, e.g.service-to-service communication. Developers who are working in the trenches often come across business logic that can\u2019t be part of the services interacting with each other, instead this should be part of an orchestration layer that combines the output of multiple services into one, performs transformations and extends it with the business logic."}),"\n",(0,i.jsx)(n.p,{children:"Tailcall is that orchestration layer, providing a fine set of primitives to compose APIs without writing any code and create a single unified data layer across all APIs. We are building a high-performance open-source Apache 2.0 API Orchestrator, enabling organizations to build versatile data access layers atop existing APIs."}),"\n",(0,i.jsx)(n.h2,{id:"problem-space",children:"Problem Space"}),"\n",(0,i.jsx)(n.p,{children:"Two of the major paradigm shifts happening in the technology industry over the past few years are:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Complex User Interfaces:"})," Responsive websites that worked on desktop and mobile are dead. To build a successful B2C business, you need to build for all three platforms viz. Android, iOS, and Web (Desktop/PWA). The applications need to look slick, rich in information, and have snappy response times."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Microservice Proliferation:"})," Many companies these days bootstrap themselves on microservices instead of monoliths. This is because the tooling has gotten a lot better, and reusable components are available either in open-source or as a fully managed SAAS solution. This allows developers to focus on their core business logic and move fast."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"microservice-architecture",children:"Microservice Architecture"}),"\n",(0,i.jsx)(n.p,{children:"This is what a typical microservices architecture looks like today:"}),"\n",(0,i.jsx)(n.p,{children:'The clients (Mobile/Web) make requests to the microservices through an API gateway. An API gateway is a server that acts as a single point of entry for any type of request, responsible for routing requests to the appropriate backend service and forwarding the response to the client. An API gateway can also perform common tasks such as authentication, rate limiting, and caching, making it a useful component in a microservices architecture: each service exposes an API to the gateway, and the gateway acts as the "front desk" for clients to access the services.'}),"\n",(0,i.jsx)(n.h2,{id:"api-orchestration",children:"API Orchestration"}),"\n",(0,i.jsx)(n.p,{children:"API orchestration refers to the process of combining one or more APIs to create a new API. This can be done by creating a new API that either acts as a facade for the underlying APIs, or splits up incoming requests, delegates to the underlying APIs, and combines the results back together.\nConsider a scenario where a social media client application wants to display a timeline of posts with the author's profile information next to each one. In this case, the client can send two separate requests to two different APIs and combine them as follows:\nFirst to /posts to retrieve recent posts, with the following response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type Post {\n  id: ID!\n  title: String!\n  body: String!\n  userId: ID! # Reference to the user by its id.\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Second, with the userId from the above post response, make a request to /users to retrieve the user's profile information, with the following response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type User {\n  id: ID!\n  name: String!\n  email: String!\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The client can then combine the results from these two APIs to create a single response that contains all the required information. This new response can be considered as the output of the composed API."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type Post {\n  id: ID!\n  title: String!\n  body: String!\n  user: User # Reference to the complete user object\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Orchestration is not limited to stitching APIs, here are some other use cases where having an API Orchestrator is of significant value:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Access Control"}),": Instead of building an \u201cadmin\u201d API and a \u201ccustomer\u201d API, you could create a set of basic CRUD endpoints and build access control on top of the orchestrator."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Localization"}),": Adding support for language translations can be moved to an orchestration layer instead of embedding into the application layer."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Batching"}),": An orchestrator can intelligently leverage batch APIs automatically without the consumer making any change, thus drastically reducing load."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Obfuscation"}),": An orchestrator can precisely control which field needs to be obfuscated, how, and when."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Protocol Translation"}),": An orchestrator can very efficiently convert between protocols."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Validations"}),": An orchestrator could filter out invalid requests up front, reducing unnecessary work on the underlying services."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Type Safe SDK"}),": Orchestration engines can generate type safe client SDKs to consume APIs."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Discoverability"}),": Orchestrators can provide detailed & up-to-date documentation of the APIs that are exposed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Collaboration"}),': Allows consumers and producers of APIs to move at different speeds via "mocking". Optimize APIs based on usage patterns.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Breaking Changes"}),": Identify breaking changes, performance degradations and other potential issues even before deployment."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Business Logic"}),": Logic controlling the flow of requests based on business conditions is best suited to execution within the gateway or orchestration layer."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Distributed Management"}),": Instead of giving control of all APIs to one team, each team can manage their part of the API and seamlessly compose with the existing API network."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsx)(n.p,{children:"API Orchestration is distinct from Microservice Orchestration, the latter relates to managing multiple micro-services working together to perform a larger task or workflow."})}),"\n",(0,i.jsx)(n.h2,{id:"composition-on-clients",children:"Composition on Clients"}),"\n",(0,i.jsx)(n.p,{children:"Composition on the client side remains unstandardized. Common problems include over-fetching and under-fetching. Over-fetching is where the server responds to a client request with more data than is required to render the screen. Under fetching is where the client needs to make multiple, often chained, API requests to get relevant data for a particular screen because the server couldn't provide all the required data in a single request. These two problems in conjunction with modest hardware and an unreliable network connection can make the overall solution unreliable, slow, and frustrating."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"When composing on the client side, modest hardware and unfavorable network conditions often result in poor user-experience."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Increased Complexity:"}),"\nTo build a rich user interface, API composition is necessary. One of the main challenges with API composition on the client side is that it can lead to increased complexity in the client application: the client needs to handle sending requests to multiple APIs and combining the results, adding to the overall size and complexity of the client code."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reduced Performance:"}),"\nAnother challenge with API composition on the client side is that it can result in reduced performance and increased latency",":the"," client often needs to make multiple requests to different APIs, taking more time and resulting in a slower response from the composed API."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Increased Risk:"}),"\nIn addition, API composition on the client side can also lead to increased security risks",":the"," client needs to handle sensitive information such as API keys and authentication credentials for multiple APIs. These critical security tokens can be vulnerable to attacks if not properly secured, and many clients lack access to powerful CPUs and reliable network connections."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"backend-for-frontend-bff",children:"Backend For Frontend (BFF)"}),"\n",(0,i.jsx)(n.p,{children:"A BFF layer can help to solve the challenges of API composition mentioned above by providing a separate backend service that is optimized for each specific frontend client. This can enable the BFF to perform API composition on behalf of the client, which can help to improve the performance and reliability of the composed API. The BFF layer typically sits as a separate component in the overall architecture, between the frontend client and the microservices. It can communicate with both the frontend client and the microservices using well-defined interfaces and protocols, such as REST or gRPC."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"BFFs can dramatically improve the reliability and performance of the system, thereby having a direct positive impact on user-experience."})}),"\n",(0,i.jsx)(n.p,{children:"The BFF can take advantage of a powerful CPU and access to a fast network to improve the performance and reliability of the composed API. It can also provide added flexibility and control over the composition process. This can make it a useful tool for developers who want to create new APIs by combining the functionality of multiple underlying APIs. However, there are a few challenges with a BFF layer:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Highly Specialized:"}),"\nBFF layers are highly specialized solutions that require a significant amount of hand-written code. Unlike an API gateway, there is no standard BFF solution that can be deployed out-of-the-box, and each BFF implementation must be custom-tailored to the specific requirements of the frontend client. This lack of standardization and reusability can make the BFF solution more complex and difficult to maintain."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fragile:"}),"\nFragile and susceptible to failure, the BFF solution is dependent on the developers to follow best practices and handle all error scenarios. If these steps are not taken, the solution can be prone to bugs and performance issues. Additionally, the BFF solution must be thoroughly tested, including performance testing, unit testing, and integration testing, to ensure that it is reliable and performs well in production. This can require significant effort and expertise, and if these steps are not properly followed, the resulting BFF solution will likely be fragile and prone to failure. Since the BFF layer is the client's sole entry point to your backend, it becoming unavailable translates into a complete service outage for the user - it is therefore essential this layer be robust and resilient to exceptions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Speculative Performance:"}),"\nBecause BFF layers are typically custom-written for each use case, it can be difficult to predict the performance impact of a small code change. Issues such as unoptimized algorithms, inefficient caching, and unnecessary downstream requests can go unnoticed and only be discovered very late in the development cycle. Typically this means companies must perform thorough benchmarking and load testing before anything goes to production, resulting in a high time to market even for minor changes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Monolithic:"}),"\nThis layer frequently becomes quite comprehensive, intertwining with numerous backend services. It's not unusual for it to include a significant amount of complex, manually written code that can be challenging to manage. These issues can make it more difficult for new engineers to get up to speed, and can increase the time and cost associated with updating libraries or making architectural enhancements. Even small changes might necessitate large scale deployments across your infrastructure."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Canary Support (Lack thereof):"}),"\nEvery change that happens in the backend requires the deployment of the BFF layer. Any feature that is built on the client also requires changes on the BFF layer. Such frequent changes can not be exposed to 100% of users because the reliability and performance of this system are unknown. A common way to solve this problem is to use Blue-Green deployments. This requires additional infrastructure and complex routing mechanisms. First-class support to do canary releases is very important and should be part of a modern BFF layer, however, most companies rely on DevOps for its support."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Coupled Releases:"}),"\nSince the BFF layer acts as a bridge between clients and services it serves as the middle link in the dependency chain: the client depends on the BFF, which in turn depends on the services. When it's time to deploy new features, first you must deploy the new services (which must support the existing and new BFF), then the new BFF layer is deployed (which must support existing and new clients), and finally the client can be deployed. If, due to a bug in a microservice, you need to revert the services, then you'd also need to replace the BFF layer with one that supports the new client calls even though the services have (temporarily) lost support for these calls. This coupling makes for expensive operational management."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Composability:"}),"\nTraditional APIs, such as REST, work well when interacting directly with a single data source. REST benefits from a mature infrastructure that handles various cross-cutting concerns, such as routing, load balancing, caching, rate limiting, authentication, and authorization. However, the semantics of these capabilities start to break down when we consider API composition.\nFor example, imagine an API composed of two other APIs, where one is highly cacheable and the other is not well defined. The same issues arise with authorization, authentication, and rate limiting. This inherent lack of composability makes REST challenging to use in scenarios requiring API composition."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Presentation Layer, Facade, Middleware, Frontend Layer, Orchestration Layer, API Adapter \u2014 these are all terms that are sometimes used to refer to the BFF layer"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);