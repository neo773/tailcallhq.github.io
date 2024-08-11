import React from "react"
import Link from "@docusaurus/Link"
import {socials, tailCallBlogUrl} from "@site/src/constants"
import TailcallLogo from "@site/static/icons/companies/tailcall-white.svg"
import {pageLinks} from "@site/src/constants/routes"

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-tailCall-dark-700 pt-SPACE_10 pb-SPACE_05 flex flex-col items-center justify-center gap-SPACE_10 w-full relative px-SPACE_04">
      <img
        src={require("@site/static/images/about/grid-dark.png").default}
        alt="grid background"
        className="absolute inset-0 w-full h-full"
      />
      <TailcallLogo className="w-[120px] h-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-SPACE_06 w-full max-w-7xl z-10 text-white">
        <div>
          <h4 className="font-bold mb-2 text-lg">Product Overview</h4>
          <div><Link href="https://tailcall.run/docs/graphql-n-plus-one-problem-solved-tailcall/" className="text-sm text-white hover:text-white">About</Link></div>
          <div><Link href="https://github.com/tailcallhq/tailcall" className="text-sm text-white hover:text-white">Tailcall</Link></div>
          <div><Link href="https://tailcall.run/" className="text-sm text-white hover:text-white">Key Features</Link></div>
          {/* <div><Link href="" className="text-sm text-white hover:text-white">Use Cases</Link></div> */}
          <div><Link href="https://tailcall.run/playground/" className="text-sm text-white hover:text-white">Tailcall Playground</Link></div>
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Tailcall for Developers</Link></div> */}
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Tailcall for Architects</Link></div> */}
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Tailcall for Businesses</Link></div> */}
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">Documentation</h4>
          <div><Link href="https://tailcall.run/docs/#installing-the-tailcall-cli" className="text-sm text-white hover:text-white">Getting Started</Link></div>
          <div><Link href="https://tailcall.run/graphql/what-is-graphql/" className="text-sm text-white hover:text-white">What is GraphQL?</Link></div>
          <div><Link href="https://tailcall.run/docs/tailcall-dsl-graphql-custom-directives/" className="text-sm text-white hover:text-white">Configuration Reference</Link></div>
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Tutorials</Link></div> */}
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Examples</Link></div> */}
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Top 10 GraphQL API platforms</Link></div> */}
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Best platforms to test your GraphQL integrations</Link></div> */}
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Top 10 GraphQL tutorials</Link></div> */}
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">Community</h4>
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Community Forum</Link></div> */}
          <div><Link href="https://github.com/tailcallhq" className="text-sm text-white hover:text-white">GitHub Repository</Link></div>
          <div><Link href="https://discord.gg/Hy42fFWQ" className="text-sm text-white hover:text-white">Discord Channel</Link></div>
          <div><Link href="https://tailcall.run/docs/contribution-guidelines/" className="text-sm text-white hover:text-white">Contributing Guide</Link></div>
          </div>
          <div>
          <h4 className="font-bold mb-2 text-lg">Working with Tailcall?</h4>
          <div><Link href="https://tailcall.run/docs/integrate-apollo-studio-graphql-tailcall/" className="text-sm text-white hover:text-white">Tailcall Integration with Apollo GraphQL</Link></div>
          <div><Link href="https://tailcall.run/docs/graphql-data-dog-telemetry-tailcall/" className="text-sm text-white hover:text-white">Telemetry Integration with Data Dog</Link></div>
          <div><Link href="https://tailcall.run/docs/graphql-newrelic-guide-telemetry/" className="text-sm text-white hover:text-white">Telemetry Integration with New Relic</Link></div>
          <div><Link href="https://tailcall.run/docs/tailcall-on-aws/" className="text-sm text-white hover:text-white">Deploy Tailcall on AWS</Link></div>
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">More Comparison based content on using Tailcall vs &lt;tech product&gt;</Link></div> */}
          <div><Link href="https://tailcall.run/docs/graphql-client-performance-tuning/" className="text-sm text-white hover:text-white">Performance Tuning </Link></div>
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">More opinionated slightly controversial content preferably directly by leadership authors</Link></div> */}
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Tailcall vs Stepzen</Link></div> */}
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">More Integration based content on using Tailcall with &lt;tech product&gt;</Link></div> */}
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">Support</h4>
          <div><Link href="https://discord.gg/kRZBPpkgwq" className="text-sm text-white hover:text-white">Contact Support</Link></div>
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">FAQs</Link></div> */}
          <div><Link href="https://github.com/tailcallhq/tailcall/issues" className="text-sm text-white hover:text-white">Troubleshooting</Link></div>
          <div><Link href="https://github.com/tailcallhq/tailcall/blob/main/CODE_OF_CONDUCT.md" className="text-sm text-white hover:text-white">Code of Conduct</Link></div>
          <div><Link href="https://discord.gg/kRZBPpkgwq" className="text-sm text-white hover:text-white">Report an Issue</Link></div>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">Resources</h4>
          <div><Link href="https://tailcall.run/blog/" className="text-sm text-white hover:text-white">Blog</Link></div>
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Webinars</Link></div> */}
          <div><Link href="https://tailcall.run/graphql/graphql-vs-rest-api-comparison/" className="text-sm text-white hover:text-white">Case Studies</Link></div>
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Whitepapers</Link></div> */}
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">Company</h4>
          <div><Link href="https://tailcall.run/docs/contributors/wrk-benchmark/" className="text-sm text-white hover:text-white">About Us</Link></div>
          <div><Link href="https://tailcall.run/docs/contributors/bounty/" className="text-sm text-white hover:text-white">Careers</Link></div>
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Press</Link></div> */}
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Privacy Policy</Link></div> */}
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Terms of Service</Link></div> */}
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">Social Media</h4>
          <div><Link href="https://x.com/tailcallhq" className="text-sm text-white hover:text-white">Twitter</Link></div>
          <div><Link href="https://www.linkedin.com/company/tailcall" className="text-sm text-white hover:text-white">LinkedIn</Link></div>
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Reddit</Link></div> */}
          <div><Link href="#" className="text-sm text-white hover:text-white">YouTube Coming Soon</Link></div>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">Newsletter</h4>
          <div><Link href="https://github.com/tailcallhq" className="text-sm text-white hover:text-white">Sign Up for Updates</Link></div>
          {/* <div><Link href="#" className="text-sm text-white hover:text-white">Newsletter Archive</Link></div> */}
        </div>
        <div>
          <h4 className="font-bold mb-2 text-lg">Events</h4>
          <div><Link href="https://discord.com/channels/1044859667798568962/1156188728474214472" className="text-sm text-white hover:text-white">Upcoming Events</Link></div>
          <div><Link href="https://discord.com/channels/1044859667798568962/1156188728474214472" className="text-sm text-white hover:text-white">Past Events</Link></div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row items-center gap-y-SPACE_04 sm:justify-between w-[100%] max-w-7xl sm:mt-SPACE_10 z-10">
        <p className="text-content-tiny text-tailCall-light-700 font-space-mono font-normal">
          Copyright © {year} Tailcall, Inc.
        </p>
        <div className="space-x-SPACE_04">
          {socials.map((social) => (
            <Link href={social.href} className="cursor-pointer" key={social.id}>
              <social.image className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    

    </footer>
  )
}

export default Footer
