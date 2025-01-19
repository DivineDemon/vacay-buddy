"use client";

import {Button} from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";

const GeneratePlanButton = () => {
  const {openSignInPopupOrDirect, isAuthenticated} = useAuth();
  return (
    <Button
      aria-label="generate plan"
      onClick={openSignInPopupOrDirect}
      variant="default"
      className="bg-[#6D5FFD] text-white
                 hover:bg-[#111]
                  text-sm px-6 py-4
                   rounded-full"
    >
      {isAuthenticated ? "Go to Dashboard" : "Get Started"}
    </Button>
  );
};

export default GeneratePlanButton;
