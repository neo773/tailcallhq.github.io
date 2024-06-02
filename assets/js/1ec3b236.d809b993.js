"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[832],{2208:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var t=n(4848),l=n(8453);const s={title:"CLI",description:"Discover the TailCall CLI, a vital tool for developers to manage and optimize GraphQL configurations directly from the command line. Learn about commands like 'check', 'start', 'init', and 'gen' to validate GraphQL specs, launch servers, bootstrap projects, and generate configurations. Explore options for detecting N+1 issues, displaying schemas, formatting inputs, and more. TailCall CLI simplifies GraphQL composition and enhances development workflows."},a=void 0,r={id:"guides/cli",title:"CLI",description:"Discover the TailCall CLI, a vital tool for developers to manage and optimize GraphQL configurations directly from the command line. Learn about commands like 'check', 'start', 'init', and 'gen' to validate GraphQL specs, launch servers, bootstrap projects, and generate configurations. Explore options for detecting N+1 issues, displaying schemas, formatting inputs, and more. TailCall CLI simplifies GraphQL composition and enhances development workflows.",source:"@site/docs/guides/cli.md",sourceDirName:"guides",slug:"/guides/cli",permalink:"/docs/guides/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/cli.md",tags:[],version:"current",frontMatter:{title:"CLI",description:"Discover the TailCall CLI, a vital tool for developers to manage and optimize GraphQL configurations directly from the command line. Learn about commands like 'check', 'start', 'init', and 'gen' to validate GraphQL specs, launch servers, bootstrap projects, and generate configurations. Explore options for detecting N+1 issues, displaying schemas, formatting inputs, and more. TailCall CLI simplifies GraphQL composition and enhances development workflows."},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/guides/getting-started-with-graphql-using-tailcall"},next:{title:"Client Tuning",permalink:"/docs/guides/client-tuning"}},c={},o=[{value:"check",id:"check",level:2},{value:"--n-plus-one-queries",id:"--n-plus-one-queries",level:3},{value:"--schema",id:"--schema",level:3},{value:"--format",id:"--format",level:3},{value:"start",id:"start",level:2},{value:"init",id:"init",level:2},{value:"gen",id:"gen",level:2},{value:"--input",id:"--input",level:3},{value:"--output",id:"--output",level:3}];function h(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"The TailCall CLI (Command Line Interface) allows developers to manage and optimize GraphQL configurations directly from the command line."}),"\n",(0,t.jsx)(i.h2,{id:"check",children:"check"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"check"})," command validates a composition spec. Notably, this command can detect potential N+1 issues. To use the ",(0,t.jsx)(i.code,{children:"check"})," command, follow this format:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"tailcall check [OPTIONS] <FILE_PATHS>...\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"check"})," command offers options that control settings such as the display of the generated schema, n + 1 issues etc."]}),"\n",(0,t.jsx)(i.h3,{id:"--n-plus-one-queries",children:"--n-plus-one-queries"}),"\n",(0,t.jsx)(i.p,{children:"This flag triggers the detection of N+1 issues."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Type: Boolean"}),"\n",(0,t.jsx)(i.li,{children:"Default: false"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"tailcall check --n-plus-one-queries <FILE_PATHS> ...\n"})}),"\n",(0,t.jsx)(i.h3,{id:"--schema",children:"--schema"}),"\n",(0,t.jsx)(i.p,{children:"This option enables the display of the schema of the composition spec."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Type: Boolean"}),"\n",(0,t.jsx)(i.li,{children:"Default: false"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"tailcall check --schema <file1> <file2> ... <fileN>\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"check"})," command allows for files. Specify each file path, separated by a space, after the options."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Example:"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"tailcall check --schema ./path/to/file1.graphql ./path/to/file2.graphql\n"})}),"\n",(0,t.jsx)(i.h3,{id:"--format",children:"--format"}),"\n",(0,t.jsxs)(i.p,{children:["This is an optional command which allows changing the format of the input file. It accepts ",(0,t.jsx)(i.code,{children:"gql"})," or ",(0,t.jsx)(i.code,{children:"graphql"}),",",(0,t.jsx)(i.code,{children:"yml"})," or ",(0,t.jsx)(i.code,{children:"yaml"}),", ",(0,t.jsx)(i.code,{children:"json"})," ."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"tailcall check ./path/to/file1.graphql ./path/to/file2.graphql --format json\n"})}),"\n",(0,t.jsx)(i.h2,{id:"start",children:"start"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"start"})," command launches the TailCall Server, acting as a GraphQL proxy with specific configurations. The server can publish GraphQL configurations."]}),"\n",(0,t.jsx)(i.p,{children:"To start the server, use the following command:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"tailcall start <file1> <file2> ... <fileN> <http_path1> <http_path2> .. <http_pathN>\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"start"})," command allows for files and supports loading configurations over HTTP. You can mix file system paths with HTTP paths. Specify each path, separated by a space, after the options."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Example:"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"tailcall start ./path/to/file1.graphql ./path/to/file2.graphql http://example.com/file2.graphql\n"})}),"\n",(0,t.jsx)(i.h2,{id:"init",children:"init"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"init"})," command bootstraps a new TailCall project. It creates the necessary GraphQL schema files in the provided file path."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"tailcall init <file_path>\n"})}),"\n",(0,t.jsx)(i.p,{children:"This command prompts for file creation and configuration, creating the following files:"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"right"},children:"File Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:(0,t.jsx)(i.a,{href:"https://github.com/tailcallhq/tailcall/blog/main/generated/.tailcallrc.schema.json",children:".tailcallrc.schema.json"})}),(0,t.jsxs)(i.td,{children:["Provides autocomplete in your editor when the configuration is written in ",(0,t.jsx)(i.code,{children:"json"})," or ",(0,t.jsx)(i.code,{children:"yml"})," format."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:(0,t.jsx)(i.a,{href:"https://the-guild.dev/graphql/config/docs",children:".graphqlrc.yml"})}),(0,t.jsxs)(i.td,{children:["A GraphQL Configuration that references your Tailcall config (if it's in ",(0,t.jsx)(i.code,{children:".graphql"})," format) and the following ",(0,t.jsx)(i.code,{children:".tailcallrc.graphql"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:(0,t.jsx)(i.a,{href:"https://github.com/tailcallhq/tailcall/blog/main/generated/.tailcallrc.graphql",children:".tailcallrc.graphql"})}),(0,t.jsxs)(i.td,{children:["Contains Tailcall specific auto-completions for ",(0,t.jsx)(i.code,{children:".graphql"})," format."]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"gen",children:"gen"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"gen"})," command in the TailCall CLI is designed for generating TailCall configurations from one or more source files."]}),"\n",(0,t.jsx)(i.h3,{id:"--input",children:"--input"}),"\n",(0,t.jsxs)(i.p,{children:["Supported input formats include ",(0,t.jsx)(i.code,{children:"PROTO"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"--output",children:"--output"}),"\n",(0,t.jsxs)(i.p,{children:["Output is same as ",(0,t.jsx)(i.a,{href:"#--format",children:"--format"}),", it supports ",(0,t.jsx)(i.code,{children:"graphql"}),", ",(0,t.jsx)(i.code,{children:"json"})," and ",(0,t.jsx)(i.code,{children:"yaml"})," as output type"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Example:"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"tailcall gen <file1> <file2> ... <fileN> --input proto --output gql\n"})})]})}function d(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>r});var t=n(6540);const l={},s=t.createContext(l);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);