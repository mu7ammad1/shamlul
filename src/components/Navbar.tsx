import React from "react";
import Models_navbar from "./Platya";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className=" dark:bg-[#10101010]">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center justify-start sm:items-stretch sm:justify-start">
              <Link href={`/`} className="flex justify-center items-center">
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 590 550"
                  width="126"
                  height="126"
                  className="h-8  w-auto"
                >
                  <defs>
                    <image
                      id="img2"
                      href="data:image/png;base64,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"
                    />
                  </defs>
                  <use id="Layer 1" href="#img2" x="0" y="0" />
                </svg>
                <h1 className="ml-3 font-medium text-lg text-[#101010] dark:text-[#fcfcfc]">
                  Shamlul
                </h1>
              </Link>
              <div className="max-md:hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 text-[#101010]">
                  <Link
                    href="/explore"
                    className=" hover:bg-[#272727] hover:text-white dark:text-[#fcfcfc] rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Explores
                  </Link>
                  <Link
                    href="/fonts"
                    className=" hover:bg-[#272727] hover:text-white dark:text-[#fcfcfc] rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Fonts
                  </Link>
                  <Link
                    href="/palettes"
                    className=" hover:bg-[#272727] hover:text-white dark:text-[#fcfcfc] rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Palettes
                  </Link>
                  <Link
                    href="/icons"
                    className=" hover:bg-[#272727] hover:text-white dark:text-[#fcfcfc] rounded-md px-3 py-2 text-sm font-medium"
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
