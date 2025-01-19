import {useConvexAuth} from "convex/react";
import {MapPinIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const {isAuthenticated} = useConvexAuth();

  return (
    <div className="hidden lg:flex gap-10 items-center justify-start flex-1">
      <Link href={isAuthenticated ? "/dashboard" : "/"}>
        <div className="flex gap-1 justify-center items-center">
           <Image className="w-[150px]" src='/logo.svg' width={100} height={100} quality={100} alt="logo" priority />
        </div>
      </Link>
    </div>
  );
}
