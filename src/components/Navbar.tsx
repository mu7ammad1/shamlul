import React from "react";
import Models_navbar from "./Platya";
import Link from "next/link";
import Image from "next/image";
import logo from '@/asset/images/shamlul.svg'
import logo_dark from '@/asset/images/shamlul_dark.svg'


export default function Navbar() {
  return (
    <div>
      <nav className=" dark:bg-[#10101010]">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center justify-start sm:items-stretch sm:justify-start">
              <Link href={`/`} className="flex justify-center items-center">
                <Image src={logo} alt="logo" className="w-32 dark:hidden" />
                <Image src={logo_dark} alt="logo" className="w-32 hidden dark:block" />
              </Link>
              <div className="max-md:hidden sm:ml-6 sm:block">
                <div className="flex text-[#101010]">
                  <Link
                    href="/explore"
                    className="hover:text-gray-900 hover:bg-gray-200  dark:hover:bg-[#272727] dark:hover:text-white dark:text-[#fcfcfc] rounded-full px-5 py-1"
                  >
                    Explores
                  </Link>
                  <Link
                    href="/fonts"
                    className="hover:text-gray-900 hover:bg-gray-200  dark:hover:bg-[#272727] dark:hover:text-white dark:text-[#fcfcfc] rounded-full px-5 py-1"
                  >
                    Fonts
                  </Link>
                  <Link
                    href="/palettes"
                    className="hover:text-gray-900 hover:bg-gray-200  dark:hover:bg-[#272727] dark:hover:text-white dark:text-[#fcfcfc] rounded-full px-5 py-1"
                  >
                    Palettes
                  </Link>
                  <Link
                    href="/icons"
                    className="hover:text-gray-900 hover:bg-gray-200  dark:hover:bg-[#272727] dark:hover:text-white dark:text-[#fcfcfc] rounded-full px-5 py-1"
                  >
                    Icons
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  className="relative flex rounded-full text-sm dark:bg-[#202020] p-2 px-5 mr-2"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="relative flex rounded-full text-sm  bg-[#FFB534] p-2 px-5 ml-2"
                >
                  Sigin Up
                </button>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
