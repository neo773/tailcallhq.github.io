"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Auth","href":"/docs/auth","docId":"auth","unlisted":false},{"type":"link","label":"Introduction","href":"/docs/","docId":"introduction","unlisted":false},{"type":"link","label":"Introduction","href":"/docs/telemetry","docId":"telemetry","unlisted":false},{"type":"link","label":"Data Dog","href":"/docs/data-dog","docId":"data-dog","unlisted":false},{"type":"link","label":"Getting Started","href":"/docs/getting-started-with-graphql-using-tailcall","docId":"getting-started","unlisted":false},{"type":"link","label":"New Relic","href":"/docs/new-relic","docId":"new-relic","unlisted":false},{"type":"link","label":"Honeycomb","href":"/docs/honey-comb","docId":"honey-comb","unlisted":false},{"type":"link","label":"Apollo Studio","href":"/docs/apollo-studio","docId":"apollo-studio","unlisted":false},{"type":"link","label":"N + 1 Problem","href":"/docs/N+1","docId":"N+1","unlisted":false},{"type":"link","label":"CLI","href":"/docs/cli","docId":"cli","unlisted":false},{"type":"link","label":"Client Tuning","href":"/docs/client-tuning","docId":"client-tuning","unlisted":false},{"type":"link","label":"Configuration Format","href":"/docs/configuration","docId":"configuration","unlisted":false},{"type":"link","label":"Context Overview","href":"/docs/context","docId":"context","unlisted":false},{"type":"link","label":"Naming Conventions","href":"/docs/conventions","docId":"conventions","unlisted":false},{"type":"link","label":"Tailcall Directives","href":"/docs/directives","docId":"directives","unlisted":false},{"type":"link","label":"Environment Variables","href":"/docs/environment-variables","docId":"environment-variables","unlisted":false},{"type":"link","label":"Sequencing & Parallelism","href":"/docs/execution-strategy","docId":"execution-strategy","unlisted":false},{"type":"link","label":"GraphQL on gRPC","href":"/docs/grpc","docId":"grpc","unlisted":false},{"type":"link","label":"Http Cache","href":"/docs/http-cache","docId":"http-cache","unlisted":false},{"type":"link","label":"HTTP/2","href":"/docs/http2","docId":"http2","unlisted":false},{"type":"link","label":"Logging","href":"/docs/logging","docId":"logging","unlisted":false},{"type":"link","label":"Playground","href":"/docs/playground","docId":"playground","unlisted":false},{"type":"link","label":"REST on top of GraphQL","href":"/docs/rest","docId":"rest","unlisted":false},{"type":"link","label":"Scalars","href":"/docs/scalar","docId":"scalar","unlisted":false},{"type":"link","label":"Scripting","href":"/docs/scripting","docId":"scripting","unlisted":false},{"type":"link","label":"Tailcall on AWS","href":"/docs/tailcall-on-aws","docId":"tailcall-on-aws","unlisted":false},{"type":"link","label":"Watch Mode","href":"/docs/watch-mode","docId":"watch-mode","unlisted":false}]},"docs":{"apollo-studio":{"id":"apollo-studio","title":"Apollo Studio","description":"Learn to enhance your GraphQL server\'s efficiency by integrating Tailcall with Apollo Studio through our concise guide. Discover how to configure Tailcall to send vital usage metrics to Apollo Studio, enabling advanced performance monitoring and optimization. Whether you\'re establishing a Monolith graph or improving an existing one, our instructions will facilitate a seamless integration. This guide helps you set up for better insights and also advises on leveraging Apollo Studio\'s features for a more responsive GraphQL server. Start optimizing today with our straightforward steps, and explore how to access Apollo Studio\'s free trial for new users.","sidebar":"tutorialSidebar"},"auth":{"id":"auth","title":"Auth","description":"Learn how you can provide granular access to types and fields in GraphQL schema with the help of authentication providers","sidebar":"tutorialSidebar"},"cli":{"id":"cli","title":"CLI","description":"Discover the TailCall CLI, a vital tool for developers to manage and optimize GraphQL configurations directly from the command line. Learn about commands like \'check\', \'start\', \'init\', and \'gen\' to validate GraphQL specs, launch servers, bootstrap projects, and generate configurations. Explore options for detecting N+1 issues, displaying schemas, formatting inputs, and more. TailCall CLI simplifies GraphQL composition and enhances development workflows.","sidebar":"tutorialSidebar"},"client-tuning":{"id":"client-tuning","title":"Client Tuning","description":"Tuning client for performance","sidebar":"tutorialSidebar"},"configuration":{"id":"configuration","title":"Configuration Format","description":"Explore the seamless format conversion capabilities of the Tailcall CLI, which supports GraphQL, YAML, and JSON for configuration files. Tailored for developers, this documentation unveils how to effortlessly convert and manage configurations, leveraging GraphQL for its clear type definitions, and YAML and JSON for their ubiquity in tools and API integration, enhancing development and deployment workflows.","sidebar":"tutorialSidebar"},"context":{"id":"context","title":"Context Overview","description":"Explore Tailcall\'s dynamic Context mechanism for schema field resolution, enabling access to arguments, values, and environment variables for efficient GraphQL queries. Tailcall, GraphQL, Context, dynamic resolution, schema fields, environment variables, query arguments.","sidebar":"tutorialSidebar"},"conventions":{"id":"conventions","title":"Naming Conventions","description":"Enhance your understanding of naming and casing conventions for GraphQL schema to ensure clarity and consistency in your schema design using Tailcall.","sidebar":"tutorialSidebar"},"data-dog":{"id":"data-dog","title":"Data Dog","description":"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.","sidebar":"tutorialSidebar"},"directives":{"id":"directives","title":"Tailcall Directives","description":"Tailcall DSL builds on your existing GraphQL knowledge by allowing the addition of some custom directives. These directives provide powerful compile time guarantees to ensure your API composition is tight and robust. Tailcall automatically generates highly optimized resolver logic for your types using the information in the directives.","sidebar":"tutorialSidebar"},"environment-variables":{"id":"environment-variables","title":"Environment Variables","description":"Environment variables are key-value pairs stored in our operating systems. Most of them come by default, and we can also create our own. They store information used by our operating system or other programs. For example, the PATH variable stores a list of directories the operating system searches when we run a command in the terminal. The HOME variable stores the path to our home directory.","sidebar":"tutorialSidebar"},"execution-strategy":{"id":"execution-strategy","title":"Sequencing & Parallelism","description":"Tailcall revolutionizes data access layer development by automating the orchestration of API calls, enabling optimal execution strategies for both sequencing and parallelism.","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Learn how to get started with GraphQL using Tailcall.","sidebar":"tutorialSidebar"},"grpc":{"id":"grpc","title":"GraphQL on gRPC","description":"Learn how to integrate gRPC services with Tailcall\'s GraphQL gateway in this comprehensive guide. Discover the benefits of using gRPC, a high-performance framework by Google, for efficient data transfer in microservices and distributed systems. Understand how to set up simple gRPC services, define protobuf files, and implement a gRPC server. Explore how to configure Tailcall to seamlessly connect GraphQL types to gRPC types and enable advanced features like batching and reflection for dynamic service discovery. This guide is perfect for developers looking to enhance their system\'s capability to handle high-performance data operations with simplicity and scalability. Ideal for those with a basic understanding of gRPC, ready to dive into practical integration with Tailcall.","sidebar":"tutorialSidebar"},"honey-comb":{"id":"honey-comb","title":"Honeycomb","description":"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.","sidebar":"tutorialSidebar"},"http-cache":{"id":"http-cache","title":"Http Cache","description":"A comprehensive guide to leverage HTTP cache for REST APIs using Tailcall","sidebar":"tutorialSidebar"},"http2":{"id":"http2","title":"HTTP/2","description":"Boost web performance and secure your communications by utilizing HTTP/2 with Tailcall.","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"Good APIs craft a broad spectrum of functionalities. Yet, the broader their scope, the more they diverge from being the perfect fit for any specific use case. This fundamental discrepancy \u2014 the impedance mismatch between the general capabilities of an API and the precise needs of a particular scenario \u2014 amplifies the necessity for an orchestration layer. Such a layer adeptly bridges this gap, tailor-fitting generic APIs to meet exact requirements with finesse. Tailcall stands at the forefront of this innovation, seamlessly transforming the way APIs are integrated and interacted with.","sidebar":"tutorialSidebar"},"logging":{"id":"logging","title":"Logging","description":"Logging acts as an essential tool for obtaining insights into code execution and addressing software development challenges. You can configure the verbosity of logs via log levels. Use TAILCALLLOGLEVEL or TCLOGLEVEL environment variables to set the application\'s log level. The available log levels include:","sidebar":"tutorialSidebar"},"N+1":{"id":"N+1","title":"N + 1 Problem","description":"Discover the power of Tailcall\'s introspection capabilities in tackling the N+1 problem, a common performance issue in systems where a single downstream request triggers numerous upstream requests. Tailcall allows you to identify all instances of N+1 issues before starting your server, ensuring optimal performance and efficiency. Learn more about how Tailcall addresses this challenge and enhances your system\'s functionality.","sidebar":"tutorialSidebar"},"new-relic":{"id":"new-relic","title":"New Relic","description":"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.","sidebar":"tutorialSidebar"},"playground":{"id":"playground","title":"Playground","description":"Explore and test server configurations with @server directive\'s showcase feature in a controlled environment. Ideal for quick experimentation and learning with dynamic GraphQL schema configurations. Not recommended for production due to performance and security considerations.","sidebar":"tutorialSidebar"},"rest":{"id":"rest","title":"REST on top of GraphQL","description":"Exposing REST endpoints on top of GraphQL via @rest directive.","sidebar":"tutorialSidebar"},"scalar":{"id":"scalar","title":"Scalars","description":"Explore GraphQL\'s core and Tailcall\'s custom scalars, including `Int`, `Float`, `String`, `Boolean`, `ID`, `Email`, and more, in our guide that simplifies data handling with clear definitions and examples. Enhance your applications with our comprehensive scalar support, designed for precise data validation and efficiency.","sidebar":"tutorialSidebar"},"scripting":{"id":"scripting","title":"Scripting","description":"Discover how to effortlessly manipulate HTTP requests and responses using Tailcall\'s lightweight JS runtime. Tailcall provides a streamlined JavaScript environment specifically designed for simple yet powerful request/response modifications without the complexity of a full Node.js setup. Ideal for developers looking to implement middleware solutions, Tailcall\'s runtime does not require file system or network access, ensuring a secure and focused development process.","sidebar":"tutorialSidebar"},"tailcall-on-aws":{"id":"tailcall-on-aws","title":"Tailcall on AWS","description":"Deploy Tailcall on AWS effortlessly using the tailcall-on-aws template and Terraform. This guide covers everything from setting environment variables to configuring and updating your Tailcall deployment, complete with logging via AWS CloudWatch for comprehensive monitoring and management.","sidebar":"tutorialSidebar"},"telemetry":{"id":"telemetry","title":"Introduction","description":"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.","sidebar":"tutorialSidebar"},"watch-mode":{"id":"watch-mode","title":"Watch Mode","description":"Developers often find themselves in situations where they need to run a server in watch mode to streamline the development process. This guide will introduce you to [entr], a versatile file-watcher tool, and how to run your server in watch mode with it. We\'ll also touch on the installation process and suggest some best practices to optimize your workflow.","sidebar":"tutorialSidebar"}}}')}}]);