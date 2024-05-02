"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6789],{2661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(5893),a=t(1151),l=t(4866),i=t(5162);const s={title:"Configuration Format",description:"Explore the seamless format conversion capabilities of the Tailcall CLI, which supports GraphQL, YAML, and JSON for configuration files. Tailored for developers, this documentation unveils how to effortlessly convert and manage configurations, leveraging GraphQL for its clear type definitions, and YAML and JSON for their ubiquity in tools and API integration, enhancing development and deployment workflows."},o=void 0,c={id:"guides/configuration",title:"Configuration Format",description:"Explore the seamless format conversion capabilities of the Tailcall CLI, which supports GraphQL, YAML, and JSON for configuration files. Tailored for developers, this documentation unveils how to effortlessly convert and manage configurations, leveraging GraphQL for its clear type definitions, and YAML and JSON for their ubiquity in tools and API integration, enhancing development and deployment workflows.",source:"@site/docs/guides/configuration.mdx",sourceDirName:"guides",slug:"/guides/configuration",permalink:"/docs/guides/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/configuration.mdx",tags:[],version:"current",frontMatter:{title:"Configuration Format",description:"Explore the seamless format conversion capabilities of the Tailcall CLI, which supports GraphQL, YAML, and JSON for configuration files. Tailored for developers, this documentation unveils how to effortlessly convert and manage configurations, leveraging GraphQL for its clear type definitions, and YAML and JSON for their ubiquity in tools and API integration, enhancing development and deployment workflows."},sidebar:"tutorialSidebar",previous:{title:"Client Tuning",permalink:"/docs/guides/client-tuning"},next:{title:"Context Overview",permalink:"/docs/guides/context"}},u={},d=[{value:"Converting Formats",id:"converting-formats",level:2},{value:"Format Conversions",id:"format-conversions",level:2},{value:"Editor Support",id:"editor-support",level:2},{value:"GraphQL",id:"graphql",level:3},{value:"JSON &amp; YAML",id:"json--yaml",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The Tailcall CLI's ",(0,r.jsx)(n.a,{href:"/docs/guides/cli#check",children:"check"})," command enables the conversion of configuration files between three supported formats: gql or graphql, yml or yaml, and json, with ",(0,r.jsx)(n.code,{children:"graphql"})," set as the default format."]}),"\n",(0,r.jsxs)(n.p,{children:["The three formats, ",(0,r.jsx)(n.code,{children:"GraphQL"}),", ",(0,r.jsx)(n.code,{children:"YAML"}),", and ",(0,r.jsx)(n.code,{children:"JSON"}),", are supported due to their distinct advantages. ",(0,r.jsx)(n.code,{children:"GraphQL"})," is chosen for its ability to clearly define types and their relationships. ",(0,r.jsx)(n.code,{children:"YAML"})," and ",(0,r.jsx)(n.code,{children:"JSON"})," are included for their widespread use in platform tools, with ",(0,r.jsx)(n.code,{children:"JSON"})," also favored for its role as a transport format, allowing configurations to be auto generated and exposed as APIs for consumption by the Tailcall server."]}),"\n",(0,r.jsx)(n.h2,{id:"converting-formats",children:"Converting Formats"}),"\n",(0,r.jsx)(n.p,{children:"To convert files between different formats, use the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tailcall check <input_files> --format format_type\n"})}),"\n",(0,r.jsx)(n.p,{children:"Let's try to convert a Tailcall graphql file to json and then back to graphql"}),"\n",(0,r.jsx)(n.p,{children:"To convert graphql to json"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'tailcall check examples/jsonplaceholder.graphql --format json > "examples/jsonplaceholder.json"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now to convert back to graphql"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'tailcall check examples/jsonplaceholder.json --format graphql > "examples/jsonplaceholder2.graphql"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about writing configuration to leverage the full power of Tailcall, explore the ",(0,r.jsx)(n.a,{href:"/docs/directives",children:"Directives"})," documentation."]}),"\n",(0,r.jsx)(n.h2,{id:"format-conversions",children:"Format Conversions"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"graphql",label:"graphql",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @server(port: 8000, hostname: "0.0.0.0")\n  @upstream(baseURL: "http://jsonplaceholder.typicode.com", httpCache: true, batch: {delay: 100}) {\n  query: Query\n}\n\ntype Query {\n  posts: [Post] @http(path: "/posts")\n  users: [User] @http(path: "/users")\n  user(id: Int!): User @http(path: "/users/{{.args.id}}")\n}\n\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  user: User @call(query: "user", args: {id: "{{.value.userId}}"})\n}\n'})})}),(0,r.jsx)(i.Z,{value:"yml",label:"yml",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",metastring:"showLineNumbers",children:"server:\n  hostname: 0.0.0.0\n  port: 8000\nupstream:\n  baseURL: http://jsonplaceholder.typicode.com\n  httpCache: true\n  batch:\n    maxSize: 100\n    delay: 100\n    headers: []\nschema:\n  query: Query\ntypes:\n  Post:\n    fields:\n      body:\n        type: String\n        required: true\n        cache: null\n      id:\n        type: Int\n        required: true\n        cache: null\n      title:\n        type: String\n        required: true\n        cache: null\n      user:\n        type: User\n        cache: null\n      userId:\n        type: Int\n        required: true\n        cache: null\n    cache: null\n  Query:\n    fields:\n      posts:\n        type: Post\n        list: true\n        http:\n          path: /posts\n        cache: null\n      user:\n        type: User\n        args:\n          id:\n            type: Int\n            required: true\n        http:\n          path: /users/{{.args.id}}\n        cache: null\n      users:\n        type: User\n        list: true\n        http:\n          path: /users\n        cache: null\n    cache: null\n  User:\n    fields:\n      email:\n        type: String\n        required: true\n        cache: null\n      id:\n        type: Int\n        required: true\n        cache: null\n      name:\n        type: String\n        required: true\n        cache: null\n      phone:\n        type: String\n        cache: null\n      username:\n        type: String\n        required: true\n        cache: null\n      website:\n        type: String\n        cache: null\n    cache: null\n"})})}),(0,r.jsx)(i.Z,{value:"json",label:"json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n  "server": {\n    "hostname": "0.0.0.0",\n    "port": 8000\n  },\n  "upstream": {\n    "baseURL": "http://jsonplaceholder.typicode.com",\n    "httpCache": true,\n    "batch": {\n      "maxSize": 100,\n      "delay": 100,\n      "headers": []\n    }\n  },\n  "schema": {\n    "query": "Query"\n  },\n  "types": {\n    "Post": {\n      "fields": {\n        "body": {\n          "type": "String",\n          "required": true,\n          "cache": null\n        },\n        "id": {\n          "type": "Int",\n          "required": true,\n          "cache": null\n        },\n        "title": {\n          "type": "String",\n          "required": true,\n          "cache": null\n        },\n        "user": {\n          "type": "User",\n          "cache": null\n        },\n        "userId": {\n          "type": "Int",\n          "required": true,\n          "cache": null\n        }\n      },\n      "cache": null\n    },\n    "Query": {\n      "fields": {\n        "posts": {\n          "type": "Post",\n          "list": true,\n          "http": {\n            "path": "/posts"\n          },\n          "cache": null\n        },\n        "user": {\n          "type": "User",\n          "args": {\n            "id": {\n              "type": "Int",\n              "required": true\n            }\n          },\n          "http": {\n            "path": "/users/{{.args.id}}"\n          },\n          "cache": null\n        },\n        "users": {\n          "type": "User",\n          "list": true,\n          "http": {\n            "path": "/users"\n          },\n          "cache": null\n        }\n      },\n      "cache": null\n    },\n    "User": {\n      "fields": {\n        "email": {\n          "type": "String",\n          "required": true,\n          "cache": null\n        },\n        "id": {\n          "type": "Int",\n          "required": true,\n          "cache": null\n        },\n        "name": {\n          "type": "String",\n          "required": true,\n          "cache": null\n        },\n        "phone": {\n          "type": "String",\n          "cache": null\n        },\n        "username": {\n          "type": "String",\n          "required": true,\n          "cache": null\n        },\n        "website": {\n          "type": "String",\n          "cache": null\n        }\n      },\n      "cache": null\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"editor-support",children:"Editor Support"}),"\n",(0,r.jsxs)(n.p,{children:["To leverage autocomplete and validation for Tailcall configurations, the ",(0,r.jsx)(n.a,{href:"/docs/guides/cli#init",children:"init"})," command can be used to automatically create ",(0,r.jsx)(n.code,{children:".tailcallrc.graphql"})," for GraphQL configurations and ",(0,r.jsx)(n.code,{children:".tailcallrc.schema.json"})," for JSON and YAML configurations. These files enhance editor support by providing schema definitions, facilitating faster and error-free configuration."]}),"\n",(0,r.jsx)(n.h3,{id:"graphql",children:"GraphQL"}),"\n",(0,r.jsxs)(n.p,{children:["When you run ",(0,r.jsx)(n.code,{children:"tailcall init"}),", it creates a ",(0,r.jsx)(n.code,{children:".tailcallrc.graphql"})," file containing your GraphQL schema definitions and a ",(0,r.jsx)(n.code,{children:".graphqlrc.yml"})," file configured to use this schema. The ",(0,r.jsx)(n.code,{children:".graphqlrc.yml"})," file is set up as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'schema:\n  - "./.tailcallrc.graphql"\n  - "./app.graphql"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This file contains the path to the ",(0,r.jsx)(n.code,{children:".tailcallrc.graphql"})," file and the path to the main Tailcall configuration file which is ",(0,r.jsx)(n.code,{children:"app.graphql"}),". This setup allows GraphQL IDE plugins and Language Server Protocols (LSP) to automatically pick up the schema for autocomplete and validation, enhancing your development experience with real-time feedback and suggestions."]}),"\n",(0,r.jsx)(n.h3,{id:"json--yaml",children:"JSON & YAML"}),"\n",(0,r.jsxs)(n.p,{children:["For JSON or YAML configurations, ",(0,r.jsx)(n.code,{children:"tailcall init"})," also creates a ",(0,r.jsx)(n.code,{children:".tailcallrc.schema.json"})," file. To enable validation and autocomplete in your JSON files, reference the ",(0,r.jsx)(n.code,{children:".tailcallrc.schema.json"})," in the ",(0,r.jsx)(n.code,{children:"$schema"})," attribute at the beginning of your JSON file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "$schema": "./.tailcallrc.schema.json"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This reference enables your IDE to validate and autocomplete using the JSON schema, offering a streamlined configuration process with instant error and typo detection."})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var r=t(512);const a={tabItem:"tabItem_Ymn6"};var l=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>q});var r=t(7294),a=t(512),l=t(2466),i=t(6550),s=t(469),o=t(1980),c=t(7392),u=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=f({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),y=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function q(e){const n=(0,g.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);