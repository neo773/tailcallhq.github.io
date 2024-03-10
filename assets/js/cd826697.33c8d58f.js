"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1593],{1174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=r(5893),n=r(1151);const s={title:"@telemetry",description:"Integrate observability into your Tailcall services using @telemetry directive with OpenTelemetry."},l=void 0,o={id:"operators/telemetry",title:"@telemetry",description:"Integrate observability into your Tailcall services using @telemetry directive with OpenTelemetry.",source:"@site/docs/operators/telemetry.md",sourceDirName:"operators",slug:"/operators/telemetry",permalink:"/docs/operators/telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/operators/telemetry.md",tags:[],version:"current",frontMatter:{title:"@telemetry",description:"Integrate observability into your Tailcall services using @telemetry directive with OpenTelemetry."},sidebar:"tutorialSidebar",previous:{title:"@server",permalink:"/docs/operators/server"},next:{title:"@upstream",permalink:"/docs/operators/upstream"}},h={},d=[{value:"Traces",id:"traces",level:2},{value:"Metrics",id:"metrics",level:2},{value:"export",id:"export",level:2},{value:"otlp",id:"otlp",level:2},{value:"prometheus",id:"prometheus",level:2},{value:"stdout",id:"stdout",level:2},{value:"apollo",id:"apollo",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"@telemetry"})," directive facilitates seamless integration with ",(0,i.jsx)(t.a,{href:"https://open-telemetry.io",children:"OpenTelemetry"}),", enhancing the observability of your GraphQL services powered by Tailcall. By leveraging this directive, developers gain access to valuable insights into the performance and behavior of their applications."]}),"\n",(0,i.jsx)(t.h2,{id:"traces",children:"Traces"}),"\n",(0,i.jsxs)(t.p,{children:["Here are the traces that are captured by the ",(0,i.jsx)(t.code,{children:"@telemetry"})," directive:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Trace Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"handle_request"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Captures the span for processing the HTTP request on the server side, providing foundational observability."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"field::resolver"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Denotes spans for fields with defined resolvers, offering insights into field names and execution times for resolver logic."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"expr::eval"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Nested within the ",(0,i.jsx)(t.code,{children:"field::resolver"})," spans, these granulated spans detail the execution of expressions in resolving a field, highlighting the hierarchical execution pattern of nested expressions."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"metrics",children:"Metrics"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"@telemetry"})," directive also captures the following metrics:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Metric"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"cache::hit_rate"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Reflects the cache hit rate for the cache powered by the ",(0,i.jsx)(t.a,{href:"/docs/operators/cache",children:(0,i.jsx)(t.code,{children:"@cache"})})," directive"]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"export",children:"export"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"export"})," field defines how the open-telemetry data should be exported and in which format. The following are the supported formats:"]}),"\n",(0,i.jsx)(t.h2,{id:"otlp",children:"otlp"}),"\n",(0,i.jsx)(t.p,{children:"Utilizes the OTLP format to export telemetry data to backend systems, supported by most modern tracing and analytics platforms. Here is an example using [honeycomb.io]:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'schema\n  @telemetry(\n    export: {\n      otlp: {\n        url: "https://api.honeycomb.io:443"\n        headers: [\n          {key: "x-honeycomb-team", value: "{{env.HONEYCOMB_API_KEY}}"}\n          {key: "x-honeycomb-dataset", value: "tailcall"}\n        ]\n      }\n    }\n  ) {\n  query: Query\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can configure the OTLP exporter with the following options:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Field"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"url"}),(0,i.jsx)(t.td,{children:"Defines the URL for the OTLP Collector."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"headers"}),(0,i.jsx)(t.td,{children:"Sets additional headers for requests to the OTLP Collector."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"prometheus",children:"prometheus"}),"\n",(0,i.jsx)(t.p,{children:"Facilitates metrics export in a Prometheus compatible format, providing a dedicated endpoint for metrics."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'schema @telemetry(export: {prometheus: {path: "/metrics"}}) {\n  query: Query\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can configure the Prometheus exporter with the following options:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Field"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"path"}),(0,i.jsxs)(t.td,{children:["Designates the endpoint path for Prometheus metrics, defaulting to ",(0,i.jsx)(t.code,{children:"/metrics"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"format"}),(0,i.jsxs)(t.td,{children:["Controls the format viz. ",(0,i.jsx)(t.strong,{children:"text"})," or ",(0,i.jsx)(t.strong,{children:"protobuf"}),", for sending data to Prometheus."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"stdout",children:"stdout"}),"\n",(0,i.jsx)(t.p,{children:"Outputs all telemetry data to stdout, ideal for testing or local development environments."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"schema @telemetry(export: {stdout: {pretty: true}}) {\n  query: Query\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"You can configure the stdout exporter with the following options:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Field"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"pretty"}),(0,i.jsx)(t.td,{children:"Enables formatted output of telemetry data for enhanced readability."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"apollo",children:"apollo"}),"\n",(0,i.jsxs)(t.p,{children:["Facilitates seamless integration with ",(0,i.jsx)(t.a,{href:"https://studio.apollographql.com/",children:"Apollo Studio"}),", enhancing the observability of GraphQL services. By leveraging this field, developers gain access to valuable insights into the performance and behavior of their GraphQL APIs."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'schema\n  @telemetry(\n    export: {\n      otlp: {\n        api_key: "{{env.APOLLO_API_KEY}}"\n        graph_ref: "graph-id@current"\n        platform: "website.com"\n        version: "1.0.0"\n      }\n    }\n  ) {\n  query: Query\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can configure the apollo exporter with the following options:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Field"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"api_key"}),(0,i.jsx)(t.td,{children:"The API Key generated from Apollo Studio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"graph_ref"}),(0,i.jsxs)(t.td,{children:["The Graph Ref, which is the ",(0,i.jsx)(t.code,{children:"graph_id"})," and the ",(0,i.jsx)(t.code,{children:"variant"})," concatenated using ",(0,i.jsx)(t.code,{children:"@"}),"(i.e. <graph_id>@<variant>)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"platform"}),(0,i.jsx)(t.td,{children:"An arbitrary value which can contain the name of your website or some other value to identify your deployment uniqely, in case you have multiple deployments."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"version"}),(0,i.jsx)(t.td,{children:"Version of Apollo which is being used."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["By integrating the ",(0,i.jsx)(t.code,{children:"@telemetry"})," directive into your GraphQL schema, you empower your development teams with critical insights into application performance, enabling proactive optimization and maintenance."]})]})}function a(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>l});var i=r(7294);const n={},s=i.createContext(n);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);