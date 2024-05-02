"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8218],{4180:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=o(5893),n=o(1151);const r={title:"Introduction",description:"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.",sidebar_position:1,slug:"/telemetry"},a=void 0,s={id:"telemetry/introduction",title:"Introduction",description:"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.",source:"@site/docs/telemetry/introduction.md",sourceDirName:"telemetry",slug:"/telemetry",permalink:"/docs/telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/telemetry/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.",sidebar_position:1,slug:"/telemetry"},sidebar:"tutorialSidebar",previous:{title:"Watch Mode",permalink:"/docs/guides/watch-mode"},next:{title:"Data Dog",permalink:"/docs/telemetry/data-dog"}},l={},c=[{value:"What is Observability",id:"what-is-observability",level:2},{value:"Comparison with Apollo Studio",id:"comparison-with-apollo-studio",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Tailcall config",id:"tailcall-config",level:2},{value:"Export to OTLP",id:"export-to-otlp",level:3},{value:"OpenTelemetry Collector",id:"opentelemetry-collector",level:4},{value:"Export to prometheus",id:"export-to-prometheus",level:3},{value:"Data generated",id:"data-generated",level:2},{value:"Relation with other services",id:"relation-with-other-services",level:3},{value:"Customize generated data",id:"customize-generated-data",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This guide will walk you through observability support in Tailcall i.e. how to collect and analyze telemetry data with different observability backends. In this guide you'll learn:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"How to enable generation of telemetry data in Tailcall?"}),"\n",(0,i.jsx)(t.li,{children:"How to update config to forward telemetry data to your chosen observability platforms?"}),"\n",(0,i.jsx)(t.li,{children:"See some examples of integration with existing observability tools?"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Let's get started!"}),"\n",(0,i.jsx)(t.h2,{id:"what-is-observability",children:"What is Observability"}),"\n",(0,i.jsx)(t.p,{children:"Observability is essential for maintaining the health and performance of your applications. It provides insights into your software's operation in real-time by analyzing telemetry data \u2014 logs, metrics, and traces. This data helps in troubleshooting, optimizing, and ensuring your application works as expected."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Logs"})," offer a record of events that have happened within your application, useful for understanding actions taken or errors that have occurred."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Metrics"})," are numerical data that measure different aspects of your system's performance, such as request rates or memory usage."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Traces"})," show the journey of requests through your system, highlighting how different parts of your application interact and perform."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Tailcall provides observability support by integrating OpenTelemetry specification into it with help of provided SDKs and data formats."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://opentelemetry.io",children:"OpenTelemetry"})," is a toolkit for collecting telemetry data in a consistent manner across different languages and platforms. It frees you from being locked into a single observability platform, allowing you to send your data to different tools for analysis, such as New Relic or Honeycomb."]}),"\n",(0,i.jsx)(t.h2,{id:"comparison-with-apollo-studio",children:"Comparison with Apollo Studio"}),"\n",(0,i.jsxs)(t.p,{children:["While ",(0,i.jsx)(t.a,{href:"/docs/telemetry/apollo-studio",children:"Apollo studio"})," telemetry also provides analytics tools for your schema but when choosing between it and OpenTelemetry integration consider next points:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"OpenTelemetry is more generalized observability framework that could be used for cross-service analytics while Apollo Studio can provide insights related purely to graphQL"}),"\n",(0,i.jsx)(t.li,{children:"OpenTelemetry is vendor-agnostic and therefore you could actually use different observability platforms depending on your needs and don't rely on single tool like Apollo Studio"}),"\n",(0,i.jsx)(t.li,{children:"OpenTelemetry integration in Tailcall can provide more analytical data that is out of scope of graphQL analytics provided by Apollo Studio"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Consider we have following Tailcall config that connects with jsonplaceholder.com to fetch the data about user and posts"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'schema\n  @server(port: 8000, hostname: "0.0.0.0")\n  @upstream(\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n}\n\ntype Query {\n  posts: [Post] @http(path: "/posts") @cache(maxAge: 3000)\n  user(id: Int!): User @http(path: "/users/{{.args.id}}")\n}\n\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  user: User @http(path: "/users/{{.value.userId}}")\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"We will update that config with telemetry integration in following sections."}),"\n",(0,i.jsx)(t.h2,{id:"tailcall-config",children:"Tailcall config"}),"\n",(0,i.jsx)(t.p,{children:"By default, telemetry data is not generated by Tailcall since it requires some setup to know where to send this data and also that affects performance of server that could be undesirable in some cases."}),"\n",(0,i.jsxs)(t.p,{children:["Telemetry configuration is provided by ",(0,i.jsx)(t.a,{href:"/docs/directives/telemetry",children:(0,i.jsx)(t.code,{children:"@telemetry"})})," directive to setup how and where the telemetry data is send."]}),"\n",(0,i.jsx)(t.p,{children:"To enable it we can update our config with something like config below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'schema\n  @telemetry(\n    export: {\n      otlp: {url: "http://your-otlp-compatible-backend.com"}\n    }\n  ) {\n  query: Query\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Here, ",(0,i.jsx)(t.code,{children:"export"})," specifies the format of generated data and endpoint to which to send that data. Continue reading to know more about different options for it."]}),"\n",(0,i.jsx)(t.h3,{id:"export-to-otlp",children:"Export to OTLP"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://opentelemetry.io/docs/specs/otlp/",children:"OTLP"})," is a vendor agnostic protocol that is supported by growing ",(0,i.jsx)(t.a,{href:"https://opentelemetry.io/ecosystem/vendors/",children:"number of observability backends"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"opentelemetry-collector",children:"OpenTelemetry Collector"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://opentelemetry.io/docs/collector/",children:"OpenTelemetry Collector"})," is a vendor-agnostic way to receive, process and export telemetry data in OTLP format."]}),"\n",(0,i.jsx)(t.p,{children:"Although, tailcall can send the data directly to the backends that supports OTLP format using Otel Collector could be valuable choice since it's more robust solution well-suited for a high-scale, more flexible settings and ability to export in different formats other than OTLP."}),"\n",(0,i.jsxs)(t.p,{children:["In summary, if you're gonna to use OTLP compatible platform or ",(0,i.jsx)(t.a,{href:"#export-to-prometheus",children:"prometheus"})," and your load is not that massive you could send the data directly to platforms. From the other side, if you need to export to different formats (like Jaeger or Datadog) or your application involves high load consider using Otel Collector as an export target."]}),"\n",(0,i.jsx)(t.h3,{id:"export-to-prometheus",children:"Export to prometheus"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://prometheus.io",children:"Prometheus"})," is a metric monitoring solution. Please note that prometheus works purely with metrics and other telemetry data like traces and logs won't be sent to it."]}),"\n",(0,i.jsx)(t.p,{children:"Prometheus integration works by adding a special route for tailcall server router that outputs generated metrics in prometheus format consumable by prometheus scraper."}),"\n",(0,i.jsx)(t.h2,{id:"data-generated",children:"Data generated"}),"\n",(0,i.jsxs)(t.p,{children:["You can find a reference of type of info generated by Tailcall in the ",(0,i.jsxs)(t.a,{href:"/docs/directives/telemetry",children:[(0,i.jsx)(t.code,{children:"@telemetry"})," reference"]})," or consult examples in the next section, in order to gain some understanding."]}),"\n",(0,i.jsx)(t.h3,{id:"relation-with-other-services",children:"Relation with other services"}),"\n",(0,i.jsxs)(t.p,{children:["Tailcall fully supports ",(0,i.jsx)(t.a,{href:"https://opentelemetry.io/docs/concepts/context-propagation/",children:"Context Propagation"})," functionality and therefore you can analyze distributed traces across all of your services that are provides telemetry data."]}),"\n",(0,i.jsx)(t.p,{children:"That may look like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"honeycomb-propagation",src:o(4019).Z+"",width:"2126",height:"1212"})}),"\n",(0,i.jsx)(t.p,{children:"Where Tailcall is a part of whole distributed trace"}),"\n",(0,i.jsx)(t.h3,{id:"customize-generated-data",children:"Customize generated data"}),"\n",(0,i.jsxs)(t.p,{children:["In some cases you may want to customize the data that were added to telemetry payload to have more control over analyzing process. Tailcall supports that customization for specific use cases described below. For eg. the metric ",(0,i.jsx)(t.a,{href:"/docs/directives/telemetry#metrics",children:(0,i.jsx)(t.code,{children:"http.server.request.count"})})," can be customized with the ",(0,i.jsx)(t.a,{href:"/docs/directives/telemetry#requestheaders",children:(0,i.jsx)(t.code,{children:"requestHeaders"})})," property to allow splitting the overall count by specific headers."]}),"\n",(0,i.jsx)(t.admonition,{type:"important",children:(0,i.jsx)(t.p,{children:"The value of specified headers will be sent to telemetry backend as is, so use it with care to prevent of leaking any sensitive data to third-party services you don't have control over."})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4019:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/honeycomb-propagation-bcfb054f75c12d3638692c1974d321de.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>a});var i=o(7294);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);