"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7063],{9781:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(4848),a=n(8453);const i={title:"Sequencing & Parallelism",description:"Tailcall revolutionizes data access layer development by automating API call orchestration, ensuring optimal execution strategies through advanced sequencing and parallelism techniques.",slug:"graphql-data-access-parallel-vs-sequence",sidebar_label:"Sequence vs Parallel"},r=void 0,l={id:"execution-strategy",title:"Sequencing & Parallelism",description:"Tailcall revolutionizes data access layer development by automating API call orchestration, ensuring optimal execution strategies through advanced sequencing and parallelism techniques.",source:"@site/docs/execution-strategy.md",sourceDirName:".",slug:"/graphql-data-access-parallel-vs-sequence",permalink:"/docs/graphql-data-access-parallel-vs-sequence",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/execution-strategy.md",tags:[],version:"current",lastUpdatedAt:1717408113e3,frontMatter:{title:"Sequencing & Parallelism",description:"Tailcall revolutionizes data access layer development by automating API call orchestration, ensuring optimal execution strategies through advanced sequencing and parallelism techniques.",slug:"graphql-data-access-parallel-vs-sequence",sidebar_label:"Sequence vs Parallel"},sidebar:"docs",previous:{title:"Best Practices",permalink:"/docs/graphql-best-practices-tailcall"},next:{title:"Watch Mode",permalink:"/docs/graphql-watch-mode-tailcall"}},o={},c=[{value:"Examples",id:"examples",level:2},{value:"Example 1: Fetching a Specific User and Their Posts",id:"example-1-fetching-a-specific-user-and-their-posts",level:3},{value:"Example 2: Searching Multiple Posts and Users by ID",id:"example-2-searching-multiple-posts-and-users-by-id",level:3},{value:"Example 3: Fetching Posts with Users",id:"example-3-fetching-posts-with-users",level:3}];function d(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Building data access layers often involves meticulous orchestration of API calls, but Tailcall simplifies this process. By analyzing your defined schema, it automatically determines the optimal execution strategy, deciding when to sequence calls and when to run them in parallel. This allows you to focus on your core application logic, while Tailcall handles the optimization seamlessly. Now, let's get into some real-world examples to illustrate its functionality."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.h3,{id:"example-1-fetching-a-specific-user-and-their-posts",children:"Example 1: Fetching a Specific User and Their Posts"}),"\n",(0,t.jsx)(s.p,{children:"Imagine you're building a blog and want to display a specific user's profile page containing their information and all their posts."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Schema:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:'type Query {\n  # Retrieve a specific user by ID\n  user(id: Int!): User @http(path: "/users/{{.value.id}}")\n}\n\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n\n  # Access user\'s posts using their ID in the path\n  posts: [Post] @http(path: "/users/{{.value.id}}/posts")\n}\n\ntype Post {\n  id: Int!\n  title: String!\n  body: String!\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"GraphQL Query:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"query getUserAndPosts($userId: Int!) {\n  # Fetch the user by ID\n  user(id: $userId) {\n    id\n    name\n    username\n    email\n    # Sequentially retrieve all posts for the fetched user\n    posts {\n      id\n      title\n      body\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"Tailcall understands that retrieving the user's posts depends on knowing the user's ID, which is obtained in the first step. Therefore, it automatically fetches the user first and then uses their ID to retrieve all their posts in a sequential manner."}),"\n",(0,t.jsx)(s.h3,{id:"example-2-searching-multiple-posts-and-users-by-id",children:"Example 2: Searching Multiple Posts and Users by ID"}),"\n",(0,t.jsx)(s.p,{children:"Suppose you're building a social media platform and want to display profiles of specific users and their recent posts."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Schema:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:'type Query {\n  # Retrieve users from the "/users" endpoint\n  users: [User] @http(path: "/users")\n}\n\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n\n  # Access user\'s posts using their ID in the path\n  posts: [Post] @http(path: "/users/{{.value.id}}/posts")\n}\n\ntype Post {\n  id: Int!\n  title: String!\n  body: String!\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"GraphQL Query:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"query getUsersWithLatestPosts {\n  # Retrieve all users\n  users {\n    id\n    name\n    username\n    email\n    # Access user's posts through the nested field\n    posts {\n      id\n      title\n      body\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"This query retrieves details of multiple users and their most recent posts based on the provided user IDs. Tailcall recognizes that fetching user details and their individual posts are independent tasks. As a result, it can execute these requests concurrently for each user."}),"\n",(0,t.jsx)(s.h3,{id:"example-3-fetching-posts-with-users",children:"Example 3: Fetching Posts with Users"}),"\n",(0,t.jsx)(s.p,{children:"Imagine you're building a social media platform and want to display a list of posts with each post's author. Traditionally, you might write a query that retrieves all posts and then, for each post, make a separate request to fetch its corresponding user. This approach leads to the N+1 problem, where N represents the number of posts, and 1 represents the additional request per post to retrieve its user."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Schema:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:'type Query {\n  posts: [Post] @http(path: "/posts")\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  user: User @http(path: "/users/{{.value.userId}}")\n}\n\ntype User {\n  id: Int!\n  name: String!\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"GraphQL Query:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"query getPostsWithUsers {\n  posts {\n    id\n    userId\n    title\n    body\n    user {\n      id\n      name\n    }\n  }\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Tailcall analyzes the schema and recognizes that fetching user details for each post is independent. It can potentially execute these requests to ",(0,t.jsx)(s.code,{children:"/users/{{.value.userId}}"})," concurrently, fetching user data for multiple posts simultaneously."]}),"\n",(0,t.jsx)(s.p,{children:"In summary, Tailcall automates the management of sequence and parallelism in API calls. It analyzes the defined schema to optimize execution, freeing developers from manual intervention."})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(6540);const a={},i=t.createContext(a);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);