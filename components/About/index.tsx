import Image from "next/image";
import {ArrowDownIcon, EnvelopeIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import Tooltip from "../Tooltip";
import ClipboardCopyTooltip from "../ClipboardCopy";

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/leanderhoedt',
    Icon: () => (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  }, {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leander-hoedt-49506294/',
    Icon: () => (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative lg:h-screen py-10 px-4 lg:px-10 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900"
    >
      <div className="mx-auto max-w-7xl lg:px-8 h-5/6 flex">
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          <div
            className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:flex-col lg:justify-center lg:items-center lg:px-0 lg:text-left">
            <div>
              <h1
                className="flex mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span>{'> '}about(</span>
                <span className="text-cyan-400">Leander</span><span>)</span>
              </h1>
              <p className="mt-8 pb-4 text-base font-medium text-gray-50 sm:text-xl lg:text-lg xl:text-xl">
                "As a full stack developer with a focus on frontend development, I bring a unique blend of technical
                skills and creative flair to every project. I am always striving to create engaging and user-friendly
                applications, and I am eager to work on big projects where I can be a valuable partner."
              </p>
              <p className="pb-4 text-base text-gray-50 sm:text-xl lg:text-lg xl:text-xl">
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="grid grid-cols-2 mt-4 text-sm text-gray-50">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Angular</li>
                <li>TypeScript</li>
                <li>GraphQL</li>
                <li>NestJS</li>
                <li>Java</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Jenkins</li>
                <li>Gitlab CI/CD</li>
              </ul>
              {/*<p className="mt-10 pb-4 text-base text-gray-50 sm:text-xl lg:text-lg xl:text-xl">
                I believe that every challenge is an opportunity to learn and improve, and I am always willing to put in
                the hard work and dedication to see a project through to completion. I am confident in my abilities and
                am always ready to take on whatever comes my way.
              </p>*/}
            </div>
            <p className="mt-10 font-medium text-gray-300 text-lg hover:text-gray-50 hidden lg:block">
              <Link href="/#blog" className="flex space-x-4">
                <span>Scroll for more</span>{'  '}<ArrowDownIcon className="w-6 h-6"/></Link>
            </p>
          </div>
          <div className="-mb-16 sm:-mb-48 lg:relative lg:m-0 sm:text-center lg:flex lg:items-center">
            <div
              className="mx-auto max-w-md px-4 py-10 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center justify-center">
              <Image
                src="/leander-removedbg.png" alt="Leander Hoedt avatar"
                className="rounded-full border-8 border-white bg-cyan-300"
                width={350}
                height={350}
              />
              <div className="mt-8 flex justify-center space-x-6">
                {
                  socials.map(({name, href, Icon}) => (
                    <a target="_blank" key={name} href={href} className="text-gray-200 hover:text-cyan-400"
                       rel="noreferrer">
                      <span className="sr-only">{name}</span>
                      <Icon/>
                    </a>
                  ))
                }
                <span className="text-gray-200 hover:text-cyan-400">
                  <span className="sr-only">Mail</span>
                  <ClipboardCopyTooltip text="Click to copy!" copiedText="Email is copied!" textToCopy="leander.hoedt@gmail.com">
                    <EnvelopeIcon
                      className="h-8 w-8 cursor-pointer"
                    />
                  </ClipboardCopyTooltip>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
