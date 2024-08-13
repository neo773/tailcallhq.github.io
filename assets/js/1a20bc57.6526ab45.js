"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9114],{74699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=t(74848),r=t(28453),i=t(11470),a=t(19365);const l={title:"Command Line Reference",sidebar_position:3,description:"Discover the TailCall CLI, a crucial tool for developers to manage and optimize GraphQL configurations from the command line. Learn commands like 'check', 'start', 'init', and 'gen' to validate specs, launch servers, bootstrap projects, and generate configurations. Detect N+1 issues, display schemas, format inputs, and more. Simplify GraphQL composition and enhance your development workflow with TailCall CLI.",slug:"tailcall-graphql-cli",sidebar_label:"Command Line"},o=void 0,c={id:"cli",title:"Command Line Reference",description:"Discover the TailCall CLI, a crucial tool for developers to manage and optimize GraphQL configurations from the command line. Learn commands like 'check', 'start', 'init', and 'gen' to validate specs, launch servers, bootstrap projects, and generate configurations. Detect N+1 issues, display schemas, format inputs, and more. Simplify GraphQL composition and enhance your development workflow with TailCall CLI.",source:"@site/docs/cli.md",sourceDirName:".",slug:"/tailcall-graphql-cli",permalink:"/docs/tailcall-graphql-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/cli.md",tags:[],version:"current",lastUpdatedAt:172352605e4,sidebarPosition:3,frontMatter:{title:"Command Line Reference",sidebar_position:3,description:"Discover the TailCall CLI, a crucial tool for developers to manage and optimize GraphQL configurations from the command line. Learn commands like 'check', 'start', 'init', and 'gen' to validate specs, launch servers, bootstrap projects, and generate configurations. Detect N+1 issues, display schemas, format inputs, and more. Simplify GraphQL composition and enhance your development workflow with TailCall CLI.",slug:"tailcall-graphql-cli",sidebar_label:"Command Line"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Configuration",permalink:"/docs/tailcall-dsl-graphql-custom-directives"}},h={},d=[{value:"check",id:"check",level:2},{value:"--n-plus-one-queries",id:"--n-plus-one-queries",level:3},{value:"--schema",id:"--schema",level:3},{value:"--format",id:"--format",level:3},{value:"start",id:"start",level:2},{value:"init",id:"init",level:2},{value:"gen",id:"gen",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Output",id:"output",level:3},{value:"Preset",id:"preset",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The TailCall CLI (Command Line Interface) allows developers to manage and optimize GraphQL configurations directly from the command line."}),"\n",(0,s.jsx)(n.h2,{id:"check",children:"check"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"check"})," command validates a composition spec. Notably, this command can detect potential N+1 issues. To use the ",(0,s.jsx)(n.code,{children:"check"})," command, follow this format:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"tailcall check [OPTIONS] <FILE_PATHS>...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"check"})," command offers options that control settings such as the display of the generated schema, n + 1 issues etc."]}),"\n",(0,s.jsx)(n.h3,{id:"--n-plus-one-queries",children:"--n-plus-one-queries"}),"\n",(0,s.jsx)(n.p,{children:"This flag triggers the detection of N+1 issues."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Type: Boolean"}),"\n",(0,s.jsx)(n.li,{children:"Default: false"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"tailcall check --n-plus-one-queries <FILE_PATHS> ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"--schema",children:"--schema"}),"\n",(0,s.jsx)(n.p,{children:"This option enables the display of the schema of the composition spec."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Type: Boolean"}),"\n",(0,s.jsx)(n.li,{children:"Default: false"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tailcall check --schema <file1> <file2> ... <fileN>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"check"})," command allows for files. Specify each file path, separated by a space, after the options."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tailcall check --schema ./path/to/file1.graphql ./path/to/file2.graphql\n"})}),"\n",(0,s.jsx)(n.h3,{id:"--format",children:"--format"}),"\n",(0,s.jsxs)(n.p,{children:["This is an optional command which allows changing the format of the input file. It accepts ",(0,s.jsx)(n.code,{children:"gql"})," or ",(0,s.jsx)(n.code,{children:"graphql"}),",",(0,s.jsx)(n.code,{children:"yml"})," or ",(0,s.jsx)(n.code,{children:"yaml"}),", ",(0,s.jsx)(n.code,{children:"json"})," ."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tailcall check ./path/to/file1.graphql ./path/to/file2.graphql --format json\n"})}),"\n",(0,s.jsx)(n.h2,{id:"start",children:"start"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"start"})," command launches the GraphQL Server for the specific configuration."]}),"\n",(0,s.jsx)(n.p,{children:"To start the server, use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tailcall start <file1> <file2> ... <fileN> <http_path1> <http_path2> .. <http_pathN>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"start"})," command allows for files and supports loading configurations over HTTP. You can mix file system paths with HTTP paths. Specify each path, separated by a space, after the options."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tailcall start ./path/to/file1.graphql ./path/to/file2.graphql http://example.com/file2.graphql\n"})}),"\n",(0,s.jsx)(n.h2,{id:"init",children:"init"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"init"})," command bootstraps a new TailCall project. It creates the necessary GraphQL schema files in the provided file path."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tailcall init <file_path>\n"})}),"\n",(0,s.jsx)(n.p,{children:"This command prompts for file creation and configuration, creating the following files:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"File Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.a,{href:"https://github.com/tailcallhq/tailcall/blob/main/generated/.tailcallrc.schema.json",children:".tailcallrc.schema.json"})}),(0,s.jsxs)(n.td,{children:["Provides autocomplete in your editor when the configuration is written in ",(0,s.jsx)(n.code,{children:"json"})," or ",(0,s.jsx)(n.code,{children:"yml"})," format."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.a,{href:"https://the-guild.dev/graphql/config/docs",children:".graphqlrc.yml"})}),(0,s.jsxs)(n.td,{children:["An IDE configuration that references your GraphQL configuration (if it's in ",(0,s.jsx)(n.code,{children:".graphql"})," format) and the following ",(0,s.jsx)(n.code,{children:".tailcallrc.graphql"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:(0,s.jsx)(n.a,{href:"https://github.com/tailcallhq/tailcall/blob/main/generated/.tailcallrc.graphql",children:".tailcallrc.graphql"})}),(0,s.jsxs)(n.td,{children:["Contains Tailcall specific auto-completions for ",(0,s.jsx)(n.code,{children:".graphql"})," format."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"gen",children:"gen"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"gen"})," command in the TailCall CLI is designed to generate GraphQL configurations from various sources, such as protobuf files and REST endpoints."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tailcall gen path_to_configuration_file.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To generate a TailCall GraphQL configuration, provide a configuration file to the ",(0,s.jsx)(n.code,{children:"gen"})," command like done above. This configuration file should be in JSON or YAML format, as illustrated in the example below:"]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"json",label:"JSON",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "inputs": [\n    {\n      "curl": {\n        "src": "https://jsonplaceholder.typicode.com/posts/1",\n        "fieldName": "post",\n        "headers": {\n          "Content-Type": "application/json",\n          "Accept": "application/json",\n          "Authorization": "Bearer {{.env.AUTH_TOKEN}}"\n        }\n      }\n    },\n    {\n      "proto": {\n        "src": "./news.proto"\n      }\n    }\n  ],\n  "output": {\n    "path": "./output.graphql",\n    "format": "graphQL"\n  },\n  "schema": {\n    "query": "Query"\n  },\n  "preset": {\n    "mergeType": 1,\n    "consolidateURL": 0.5,\n    "treeShake": true,\n    "unwrapSingleFieldTypes": true,\n    "inferTypeNames": true\n  }\n}\n'})})}),(0,s.jsx)(a.A,{value:"yml",label:"YML",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'inputs:\n  - curl:\n      src: "https://jsonplaceholder.typicode.com/posts/1"\n      fieldName: "post"\n      headers:\n        Content-Type: "application/json"\n        Accept: "application/json"\n        Authorization: "Bearer {{.env.AUTH_TOKEN}}"\n  - proto:\n      src: "./news.proto"\noutput:\n  path: "./output.graphql"\n  format: "graphQL"\nschema:\n  query: "Query"\npreset:\n  mergeType: 1\n  consolidateURL: 0.5\n  treeShake: true\n  unwrapSingleFieldTypes: true\n  inferTypeNames: true\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"inputs",children:"Inputs"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"inputs"})," section specifies the sources from which the GraphQL configuration should be generated. Each source can be either a REST endpoint or a protobuf file."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"REST:"})," When defining REST endpoints, the configuration should include the following properties."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"src (Required):"})," The URL of the REST endpoint. In this example, it points to a specific post on ",(0,s.jsx)(n.code,{children:"jsonplaceholder.typicode.com"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"fieldName (Required):"})," A unique name that should be used as the field name, which is then used in the operation type. In the example below, it's set to ",(0,s.jsx)(n.code,{children:"post"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"headers (Optional):"})," Users can specify the required headers to make the HTTP request in the headers section."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Ensure that secrets are not stored directly in the configuration file. Instead, use templates to securely reference secrets from environment variables. For example, see the following configuration where AUTH_TOKEN is referenced from the environment like ",(0,s.jsx)(n.code,{children:"{{.env.AUTH_TOKEN}}"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"json",label:"JSON",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "curl": {\n    "src": "https://jsonplaceholder.typicode.com/posts/1",\n    "fieldName": "post",\n    "headers": {\n      "Authorization": "Bearer {{.env.AUTH_TOKEN}}"\n    }\n  }\n}\n'})})}),(0,s.jsx)(a.A,{value:"yml",label:"YML",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'- curl:\n    src: "https://jsonplaceholder.typicode.com/posts/1"\n    fieldName: "post"\n    headers:\n      Content-Type: "application/json"\n      Accept: "application/json"\n      Authorization: "Bearer {{.env.AUTH_TOKEN}}"\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"For the above input configuration, the following field will be generated in the operation type:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:"{2} showLineNumbers",children:'type Query {\n  # field name is taken from the above JSON config\n  post(p1: Int!): Post @http(path: "/posts/{{arg.p1}}")\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["Ensure that each field name is ",(0,s.jsx)(n.strong,{children:"unique"})," across the entire configuration to prevent overwriting previous definitions."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Proto:"})," For protobuf files, specify the path to the proto file (",(0,s.jsx)(n.code,{children:"src"}),")."]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"json",label:"JSON",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "proto": {\n    "src": "./path/to/file.proto"\n  }\n}\n'})})}),(0,s.jsx)(a.A,{value:"yml",label:"YML",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'- proto:\n    src: "./news.proto"\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"output"})," section specifies the path and format for the generated GraphQL configuration."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"path"}),": The file path where the output will be saved."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"format"}),": The format of the output file. Supported formats are ",(0,s.jsx)(n.code,{children:"json"}),", ",(0,s.jsx)(n.code,{children:"yml"}),", and ",(0,s.jsx)(n.code,{children:"graphQL"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can also change the format of the configuration later using the ",(0,s.jsx)(n.a,{href:"#--format",children:"check"})," command."]})}),"\n",(0,s.jsx)(n.h3,{id:"preset",children:"Preset"}),"\n",(0,s.jsxs)(n.p,{children:["The config generator provides a set of tuning parameters that can make the generated configurations more readable by reducing duplication. This can be configured using the ",(0,s.jsx)(n.code,{children:"preset"})," section."]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"json",label:"JSON",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="Presets with default values"',children:'{\n  "preset": {\n    "mergeType": 1,\n    "consolidateURL": 0.5,\n    "treeShake": true,\n    "unwrapSingleFieldTypes": true,\n    "inferTypeNames": true\n  }\n}\n'})})}),(0,s.jsx)(a.A,{value:"yml",label:"YML",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",metastring:'title="Presets with default values"',children:"preset:\n    mergeType: 1\n    consolidateURL: 0.5\n    treeShake: true\n    unwrapSingleFieldTypes: true\n    inferTypeNames: true\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"mergeType:"})," This setting merges types in the configuration that satisfy the threshold criteria. It takes a threshold value between ",(0,s.jsx)(n.code,{children:"0.0"})," and ",(0,s.jsx)(n.code,{children:"1.0"})," to determine if two types should be merged or not. The default is ",(0,s.jsx)(n.code,{children:"1.0"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, the following types ",(0,s.jsx)(n.code,{children:"T1"})," and ",(0,s.jsx)(n.code,{children:"T2"})," are exactly similar, and with a threshold value of ",(0,s.jsx)(n.code,{children:"1.0"}),", they can be merged into a single type called ",(0,s.jsx)(n.code,{children:"M1"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:'{14} showLineNumbers title="Merging type T1 and T2 into M1"',children:"# BEFORE\ntype T1 {\n  id: ID\n  firstName: String\n  lastName: String\n}\n\ntype T2 {\n  id: ID\n  firstName: String\n  lastName: String\n}\n\n# AFTER: T1 and T2 are merged into M1.\ntype M1 {\n  id: ID\n  firstName: String\n  lastName: String\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"consolidateURL:"})," The setting identifies the most common base URL among multiple REST endpoints and uses this URL in the ",(0,s.jsx)(n.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#upstream-directive",children:"upstream"})," directive. It takes a threshold value between 0.0 and 1.0 to determine the most common endpoint. The default is ",(0,s.jsx)(n.code,{children:"0.5"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if the ",(0,s.jsx)(n.code,{children:"Query"})," type has three base URLs, using the ",(0,s.jsx)(n.code,{children:"consolidateURL"})," setting with a ",(0,s.jsx)(n.code,{children:"0.5"})," threshold will pick the base URL that is used in more than 50% of the ",(0,s.jsx)(n.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#http-directive",children:"http"})," directives, ",(0,s.jsx)(n.code,{children:"http://jsonplaceholder.typicode.com"}),", and add it to the upstream, cleaning the base URLs from the ",(0,s.jsx)(n.code,{children:"Query"})," type."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @server(hostname: "0.0.0.0", port: 8000)\n  @upstream(httpCache: 42) {\n  query: Query\n}\n\ntype Query {\n  post(id: Int!): Post\n    @http(\n      baseURL: "http://jsonplaceholder.typicode.com"\n      path: "/posts/{{.args.id}}"\n    )\n  posts: [Post]\n    @http(\n      baseURL: "http://jsonplaceholder.typicode.com"\n      path: "/posts"\n    )\n  user(id: Int!): User\n    @http(\n      baseURL: "http://jsonplaceholder.typicode.com"\n      path: "/users/{{.args.id}}"\n    )\n  users: [User]\n    @http(\n      baseURL: "http://jsonplaceholder-1.typicode.com"\n      path: "/users"\n    )\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After enabling the ",(0,s.jsx)(n.code,{children:"consolidateURL"})," setting:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @server(hostname: "0.0.0.0", port: 8000)\n  @upstream(\n    baseURL: "http://jsonplaceholder.typicode.com"\n    httpCache: 42\n  ) {\n  query: Query\n}\n\ntype Query {\n  post(id: Int!): Post @http(path: "/posts/{{.args.id}}")\n  posts: [Post] @http(path: "/posts")\n  user(id: Int!): User @http(path: "/users/{{.args.id}}")\n  users: [User]\n    @http(\n      baseURL: "http://jsonplaceholder-1.typicode.com"\n      path: "/users"\n    )\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"treeShake:"})," This setting removes unused types from the configuration. When enabled, any type that is defined in the configuration but not referenced anywhere else (e.g., as a field type, union member, or interface implementation) will be removed. This helps to keep the configuration clean and free from unnecessary definitions."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:'showLineNumbers title="Before applying treeShake, the configuration might look like this."',children:"type Query {\n  foo: Foo\n}\n\ntype Foo {\n  bar: Bar\n}\n\n# Type not used anywhere else\ntype UnusedType {\n  baz: String\n}\n\ntype Bar {\n  a: Int\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:'showLineNumbers title="After enabling treeShake, the UnusedType will be removed."',children:"type Query {\n  foo: Foo\n}\n\ntype Foo {\n  bar: Bar\n}\n\ntype Bar {\n  a: Int\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"unwrapSingleFieldTypes:"})," This setting instructs Tailcall to flatten out types with single field."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:'showLineNumbers title="Before applying the setting"',children:"type Query {\n  foo: Foo\n}\n\n# Type with only one field\ntype Foo {\n  bar: Bar\n}\n\n# Type with only one field\ntype Bar {\n  a: Int\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:'showLineNumbers title="After applying setting"',children:"type Query {\n  foo: Int\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This helps in flattening out types into single field."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"inferTypeNames:"})," This setting enables the automatic inference of type names based on their schema and it's usage. For it to work reliably it depends on an external secure AI agent."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:'title="Before enabling inferTypeNames setting"',children:'type T1 {\n  id: ID\n  name: String\n  email: String\n  post: [T2]\n}\n\ntype T2 {\n  id: ID\n  title: String\n  body: String\n}\n\ntype Query {\n  users: [T1] @http(path: "/users")\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type T1:"})," T1 is used as the output type for the ",(0,s.jsx)(n.code,{children:"user"})," field in the Query type. We recognize that T1 is associated with users in the users field of Query. Therefore, it infers that T1 should be named ",(0,s.jsx)(n.code,{children:"User"})," to indicate that it represents user data."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type T2:"})," T2 is used as the output type for the ",(0,s.jsx)(n.code,{children:"post"})," field within T1. We recognize that T2 is associated with posts in the post field of User. Therefore, it infers that T2 should be named ",(0,s.jsx)(n.code,{children:"Post"})," to indicate that it represents post data."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:'title="After enabling inferTypeNames setting"',children:'type User {\n  id: ID\n  name: String\n  email: String\n  post: [Post]\n}\n\ntype Post {\n  id: ID\n  title: String\n  body: String\n}\n\ntype Query {\n  user: User @http(path: "/users")\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"By leveraging field names to derive type names, the schema becomes more intuitive and aligned with the data it represents, enhancing overall readability and understanding."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>T});var s=t(96540),r=t(34164),i=t(23104),a=t(56347),l=t(205),o=t(57485),c=t(31682),h=t(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,h.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),j=(()=>{const e=c??g;return u({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function y(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),h=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==s&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:h,...i,className:(0,r.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(y,{...n,...e}),(0,x.jsx)(b,{...n,...e})]})}function T(e){const n=(0,f.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);