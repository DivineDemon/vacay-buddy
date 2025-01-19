import {navlinks} from "@/lib/constants";
import {useConvexAuth} from "convex/react";
import Link from "next/link";

export default function MenuItems() {
  const {isAuthenticated} = useConvexAuth();
  return (
    <>
      {navlinks.map((link) => (
        <li key={link.id} className="transition ease-in-out delay-250 hover:font-bold active:font-bold focus:font-bold target:font-bold cursor-pointer">
          <Link href={`/${link.id}`}>{link.text}</Link>
        </li>
      ))}
      {isAuthenticated && (
        <li className="hover:underline cursor-pointer">
          <Link href="dashboard" scroll>
            Dashboard
          </Link>
        </li>
      )}
    </>
  );
}
