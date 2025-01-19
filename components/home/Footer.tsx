"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="body-font border-t-[1px] py-[50px] w-full">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href=""
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <Image
                src="/logo.svg"
                className="w-[150px]"
                width={100}
                height={100}
                quality={100}
                alt="logo"
                priority
              />
            </Link>
            <p className="mt-2 text-sm text-gray-500 py-4">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
            <span className="inline-flex gap-1 sm:ml-auto sm:mt-0 mt-5 justify-center sm:justify-start">
              <Link href="" className="cursor-pointer">
                <Image
                  src="/facebook.svg"
                  width={11}
                  height={18}
                  quality={100}
                  alt="logo"
                  priority
                />
              </Link>
              <Link href="" className="ml-3 cursor-pointer">
                <Image
                  src="/Twitter.svg"
                  width={18}
                  height={14}
                  quality={100}
                  alt="logo"
                  priority
                />
              </Link>
              <Link href="" className="ml-3 cursor-pointer">
                <Image
                  src="/Instagram.svg"
                  width={18}
                  height={18}
                  quality={100}
                  alt="logo"
                  priority
                />
              </Link>
              <Link href="" className="ml-3 cursor-pointer">
                <Image
                  src="/LinkedIn.svg"
                  width={18}
                  height={18}
                  quality={100}
                  alt="logo"
                  priority
                />
              </Link>
              <Link href="" className="ml-3 cursor-pointer">
                <Image
                  src="/YouTube.svg"
                  width={20}
                  height={15}
                  quality={100}
                  alt="logo"
                  priority
                />
              </Link>
            </span>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black pt-5 tracking-widest text-md mb-6">
                Product
              </h2>
              <nav className="list-none mb-10 text-gray-500 text-sm">
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Features
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Pricing
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Case Studies
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Reviews
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Updates
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black pt-5 tracking-widest text-md mb-6">
                Company
              </h2>
              <nav className="list-none mb-10 text-gray-500 text-sm">
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    About
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Contact Us
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Careers
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Culture
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Blog
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black pt-5 tracking-widest text-md mb-6">
                Support
              </h2>
              <nav className="list-none mb-10 text-gray-500 text-sm">
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Getting Started
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Help center
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Server status
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Report a bug
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="" className="hover:text-gray-800">
                    Chat support
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black pt-5 tracking-widest text-md mb-6">
                Contact us
              </h2>
              <nav className="list-none mb-10 text-gray-500 text-sm">
                <li className="my-3 flex gap-1 justify-center md:justify-start">
                  <Image
                    width={20}
                    height={100}
                    quality={100}
                    alt="icon"
                    src="/email.svg"
                    priority
                  />
                  <Link
                    className="hover:text-gray-800"
                    href="mailto:email@gmail.com"
                  >
                    email@gmail.com
                  </Link>
                </li>
                <li className="my-3 flex gap-1 justify-center md:justify-start">
                  <Image
                    width={20}
                    height={100}
                    quality={100}
                    alt="icon"
                    src="/phone.svg"
                    priority
                  />
                  <Link className="hover:text-gray-800" href="tel:0123456789">
                    (xx) xxxx-xxxx
                  </Link>
                </li>
                <li className="my-3 flex gap-1 items-start justify-center md:justify-start">
                  <Image
                    width={20}
                    height={100}
                    quality={100}
                    alt="icon"
                    src="/location-icon.svg"
                    priority
                  />
                  <Link href="" className="hover:text-gray-800">
                    794 Mcallister St San Francisco, 94102
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-muted py-4 w-full">
        <div className="container mx-auto py-4 px-5 flex flex-wrap justify-between flex-col sm:flex-row sm:text-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Copyright © 2024
            <Link
              href=""
              rel="noopener noreferrer"
              className="ml-1 text-[#6D5FFD]"
              target="_blank"
            >
              VacayBuddy.{" "}
            </Link>
            All Rights Reserved.
          </p>

          <div className="flex justify-center sm:text-center">
            <Link
              href=""
              rel="noopener noreferrer"
              className="ml-1 text-[#6D5FFD] underline"
              target="_blank"
            >
              Terms & Conditions
            </Link>
            <p className="mx-2">|</p>
            <Link
              href=""
              rel="noopener noreferrer"
              className="ml-1 text-[#6D5FFD] underline"
              target="_blank"
            >
              Privacy Policy{" "}
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
