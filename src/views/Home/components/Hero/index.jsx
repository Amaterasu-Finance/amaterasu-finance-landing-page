import React, { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { motion } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'


// const steez = {
//   width: "600px",
//   height: "600px",
// };

export default function Hero() {
  
  return (
    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <a
                href="https://discord.com/invite/UvV6bER3gz"
                className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200 py mx-1"
              >
                <span className="ml-4 text-sm">Join the Discord</span>
                <ChevronRightIcon className="ml- w-5 h-5 text-gray-500" aria-hidden="true" />
              </a>
              <a
                href="https://t.me/amaterasufi"
                className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="ml-4 text-sm">Join the Telegram</span>
                <ChevronRightIcon className="ml- w-5 h-5 text-gray-500" aria-hidden="true" />
              </a>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-400 sm:pb-5">
                  DeFi protocol on the
                </span>
                <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-300 sm:pb-5"> <a className = "hover:from-orange-600 hover:to-yellow-500" href="https://aurora.dev/" target = "_blank">Aurora chain</a>
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl pt-4">
                Amaterasu Finance is a DeFi protocol on the Aurora chain. The DEX is the main product and the governance token is $IZA.
              </p>
              <div className="mt-10 sm:mt-12">
                
                <div className="sm:flex">
                  {/* <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                    />
                  </div> */}
                  <div className="mt-3 sm:mt-0 sm:ml-0">
                    <a href=""
                      type="submit"
                      className="block w-full py-3 px-4 rounded-full shadow bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-medium hover:from-orange-600 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 focus:ring-offset-gray-900"
                    >
                      Launch DApp
                    </a>
                  </div>
                </div>
              
              
              </div>
            </div>
          </div>
          <div className="sm:mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative flex">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 content-center">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <motion.img
                className="sm:ml-20 w-full p-6 mb-8 sm:pt-16"
                src="images/amaterasu-logo.svg"
                alt=""
                href="https://github.com/Amaterasu-Finance"              
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
