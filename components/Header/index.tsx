import {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const Header = () => {

  return (
    <header className="sticky top-0 z-10">
      <Popover className="bg-gray-900">
        <div
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="ml-4 font-bold text-3xl text-gray-50">
                <span>Leander</span>{''}<span className="text-cyan-400">.</span>
              </span>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-12 md:space-x-4 md:flex text-gray-50 hover:text-gray-400">
            <Link href="/#" className="text-base font-medium hover:text-white">
              <span>{'// about'}</span>
            </Link>
            <Link href="/#blog" className="text-base font-medium hover:text-white">
              <span>{'// blog'}</span>
            </Link>
            <Link href="/#experience" className="text-base font-medium hover:text-white">
              <span>{'// experience'}</span>
            </Link>
            <Link href="/#contact" className="text-base font-medium hover:text-white">
              <span>{'// contact'}</span>
            </Link>
            <Link href="/resume" className="text-base font-medium hover:text-white">
              <span>{'// resume'}</span>
            </Link>
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/">
                      <span className="ml-4 font-bold text-3xl text-gray-700">
                        <span>Leander</span>{''}<span className="text-cyan-400">.</span>
                      </span>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">

                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/#about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    about
                  </Link>
                  <Link href="/#blog" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    blog
                  </Link>
                  <Link href="/#experience" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    experience
                  </Link>
                  <Link href="/#contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    contact
                  </Link>
                  <Link href="#resume" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    resume
                  </Link>
                </div>
                <div className="sr-only mt-6">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-50">
                    Existing customer?
                    <a href="#" className="text-gray-900">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

export default Header;
