import {getAuthToken} from "@/app/auth";
import Footer from "@/components/home/Footer";
import Header from "@/components/plan/Header";
import PlanLayoutContent from "@/components/plan/PlanLayoutContent";
import Progress from "@/components/Progress";
import {Toaster} from "@/components/ui/toaster";
import {api} from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";
import {Analytics} from "@vercel/analytics/react";
import {fetchQuery} from "convex/nextjs";
import {Metadata} from "next";
import { type ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  params: Promise<{ planId: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { planId: id } = await props.params;
  const token = await getAuthToken();

  try {
    const plan = await fetchQuery(
      api.plan.getSinglePlan,
      {id: id as Id<"plan">, isPublic: false},
      {token}
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
        <PlanLayoutContent planId={planId} isPublic={false}>
          {props.children}
        </PlanLayoutContent>
        <Progress />
        <Analytics />
        <Toaster />
      </main>
      <Footer/>
    </>
  );
}
