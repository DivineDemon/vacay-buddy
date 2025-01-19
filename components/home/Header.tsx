"use client";

import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

import { Loading } from "@/components/shared/Loading";
import DrawerWithDialog from "@/components/shared/DrawerWithDialog";
import { cn } from "@/lib/utils";
// import {ThemeDropdown} from "@/components/ThemeDropdown";
import FeedbackSheet from "@/components/common/FeedbackSheet";
import Logo from "@/components/common/Logo";
import MenuItems from "@/components/home/MenuItems";
import MobileMenu from "@/components/home/MobileMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={cn(
        "w-full border-b bottom-2 border-border/40 z-50 sticky top-0",
        "bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="container">
        <nav className="py-3 mx-auto">
          <div className="flex justify-evenly w-full">
            <Logo />
            <div className="hidden lg:flex items-center justify-center">
              <ul className="flex gap-8 items-center text-sm">
                <MenuItems />
              </ul>
            </div>
            <div className="lg:hidden flex gap-6 flex-1">
              <MobileMenu />
            </div>
            <div className="flex gap-4 justify-end items-center flex-1">
              {/* <AuthLoading>
                <Loading />
              </AuthLoading> */}
              <Unauthenticated>
                {/* <ThemeDropdown /> */}
                {/* <div>
                  <SignInButton mode="modal" afterSignInUrl="/dashboard" />
                </div>
                <div className="bg-[#6D5FFD] text-white px-4 py-2 rounded-full hover:bg-black transition-all">
                  <SignUpButton mode="modal" afterSignInUrl="/dashboard" />
                </div> */}
                <Link href="/sign-in">
                  <button className="text-sm">Log In</button>
                </Link>
                <Link href="/sign-up">
                  <button className="bg-[#6D5FFD] text-white px-4 py-2 text-sm rounded-full hover:bg-black transition-all">
                    Sign Up{" "}
                  </button>
                </Link>
              </Unauthenticated>
              <Authenticated>
                <div className="flex justify-center items-center gap-2">
                  <DrawerWithDialog />
                  <FeedbackSheet />
                  {/* <ThemeDropdown /> */}
                  <UserButton afterSignOutUrl="/" />
                </div>
              </Authenticated>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
