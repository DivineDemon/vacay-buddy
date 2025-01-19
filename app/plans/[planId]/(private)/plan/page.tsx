import Plan from "@/components/plan/Plan";

interface PageProps {
  params: Promise<{ planId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PlanPage(props: PageProps) {
  const { planId } = await props.params;
  const { isNewPlan: np } = await props.searchParams;
  
  return <Plan planId={planId} isNewPlan={np ? Boolean(np) : false} isPublic={false} />;
}
