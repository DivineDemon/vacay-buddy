"use client";
import PlanContextProvider from "@/contexts/PlanContextProvider";
import Sidebar from "@/components/plan/Sidebar";
import {ReactNode} from "react";

const PlanLayoutContent = ({
  planId,
  children,
  isPublic,
}: {
  planId: string;
  children: ReactNode;
  isPublic: boolean;
}) => {
  
  return (
      <>
    <PlanContextProvider planId={planId} isPublic={isPublic}>
      <div className="container">
      <div className="w-full py-6 min-h-[calc(100svh-6.5rem)] bg-background">
        <div className="lg:grid lg:grid-cols-5 lg:gap-2 lg:gap-5 my-6 gap-3">
          <div
            className="hidden lg:flex lg:col-span-1 lg:border-muted-foreground/30 relative"
          >
            <Sidebar planId={planId} isPublic={isPublic}/>
          </div>
          <div className="rounded-[30px] lg:col-span-4 p-4 lg:p-8 bg-[#F5F5F5]">{children}</div>
        </div>
      </div>
      </div>

    </PlanContextProvider>
      </>
  );
};

export default PlanLayoutContent;
