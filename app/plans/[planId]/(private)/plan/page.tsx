import Plan from "@/components/plan/Plan";

interface PageProps {
  params: Promise<{ planId: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function PlanPage(props: PageProps) {
  const { searchParams } = props;
  const { planId } = await props.params;
  const isNewPlan = searchParams && searchParams.isNewPlan ? Boolean(searchParams.isNewPlan) : false;
  
  return <Plan planId={planId} isNewPlan={isNewPlan} isPublic={false} />;
}
