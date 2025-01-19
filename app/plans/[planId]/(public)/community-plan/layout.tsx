// import {getAuthToken} from "@/app/auth";
import Header from "@/components/plan/Header";
import PlanLayoutContent from "@/components/plan/PlanLayoutContent";
import {api} from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";
import {fetchQuery} from "convex/nextjs";
import { type ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  params: Promise<{ planId: string }>;
}

export async function generateMetadata(props: PageProps) {
  const { planId: id } = await props.params;

  try {
    const plan = await fetchQuery(
      api.plan.getSinglePlan,
      {id: id as Id<"plan">, isPublic: true},
      // {token}
    );
    return {
      title: plan ? plan.nameoftheplace : "Your Plan",
    };
  } catch (error) {
    return {
      title: "Unauthorized Access!",
    };
  }
}

export default async function RootLayout(props: PageProps) {
  const { planId } = await props.params;

  return (
    <>
      <Header isPublic={true} />
      <main className="flex min-h-[calc(100svh-4rem)] flex-col items-center dark:bg-background">
        <PlanLayoutContent planId={planId} isPublic={true}>
          {props.children}
        </PlanLayoutContent>
      </main>
    </>
  );
}
