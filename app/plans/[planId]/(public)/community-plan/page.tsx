import CommunityPlan from "@/components/plan/CommunityPlan";

interface PageProps {
  params: Promise<{ planId: string }>;
}

export default async function PlanPage(props: PageProps) {
  const { planId } = await props.params;

  return <CommunityPlan planId={planId} />;
}
