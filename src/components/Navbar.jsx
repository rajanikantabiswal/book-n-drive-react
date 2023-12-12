import React from "react";
import Logo from '../assets/logo.png';

function Navbar() {
  return (
    <>
      <div class="relative w-full bg-white px-4 sm:px-6 md:px-10 lg:px-24">
        <div class="mx-auto flex items-center justify-between py-6">
          <div class="inline-flex items-center space-x-2">
            <span>
                <img src={Logo} alt="" className="w-14"/>
            </span>
            <span className="font-bold text-2xl">BOOK-N-DRIVE</span>
          </div>
          <div class="hidden grow items-start lg:flex">
            <ul class="ml-12 inline-flex space-x-8">
              <li>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Contact
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="hidden space-x-2 lg:block">
            <button
              type="button"
              class="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-600/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign Up
            </button>
            <button
              type="button"
              class="rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Log In
            </button>
          </div>
          <div class="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
