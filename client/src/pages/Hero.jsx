/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ReactComponent as LoudIcon } from "../assets/loud.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import banner from "../assets/bg.jpg";
const navigation = [
  { name: "GitHub", href: "https://github.com/pawankm21/Collegium" },
  { name: "Donate", href: "#" },
];

export default function Hero({ isAuth }) {
  return (
    <div className="bg-blue-900 h-[100vh]">
      <div className="relative bg-blue-900 h-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 h-full">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-[100vh] w-48 text-gray-900 transform translate-x-1/2 "
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <Link to="/">
                        <span className="sr-only"></span>
                        <LoudIcon
                          className="h-8 w-auto sm:h-10 rounded shadow-xl bg-yellow-400 text-white"
                          alt="logo"
                        />
                      </Link>
                      <div className="-mr-2 flex items-center md:hidden bg-blue-900">
                        <Popover.Button className="bg-blue-900 rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset ">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
                    <Link
                      to="/about"
                      className="font-medium text-white hover:text-yellow-400"
                    >
                      About
                    </Link>
                    <Link
                      to="/team"
                      className="font-medium text-white hover:text-yellow-400"
                    >
                      Team
                    </Link>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-white hover:text-yellow-400"
                      >
                        {item.name}
                      </a>
                    ))}
                    <Link
                      to="/login"
                      className="font-medium text-white hover:text-gray-500"
                    >
                      Log in
                    </Link>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between bg-gray-900">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src={process.env.PUBLIC_URL + "/images/loud.svg"}
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-blue-900 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-yellow-400 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base text-white hover:text-yellow-400 hover:bg-blue-900 first-of-type:font-medium "
                        >
                          {item.name}
                        </a>
                      ))}
                      <Link
                        to="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-blue-900 "
                      >
                        About
                      </Link>
                      <Link
                        to="/team"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-blue-900 "
                      >
                        Team
                      </Link>
                    </div>
                    <Link
                      to="/login"
                      className="block w-full px-5 py-3 text-center font-medium bg-black text-white hover:text-yellow-400 hover:bg-blue-900 "
                    >
                      Log in
                    </Link>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">All events at</span>
                  <span className="block text-yellow-400 xl:inline">
                    {" "}
                    One Place.
                  </span>
                </h1>
                <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Create, Edit and View Events happening around, in and around
                  your college.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to={isAuth ? "/dashboard" : "/login"}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-yellow-500 hover:bg-blue-700 duration-300 ease-in-out transform hover:text-yellow-500 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={banner}
            alt="banner"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
