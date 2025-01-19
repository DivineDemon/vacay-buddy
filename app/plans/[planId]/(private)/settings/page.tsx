import CurrencySelector from "@/components/settings/CurrencySelector";
import DangerZone from "@/components/settings/DangerZone";
import DisplayName from "@/components/settings/DisplayName";

interface PageProps {
  params: Promise<{ planId: string }>;
}

export default async function PlanSettings(props: PageProps) {
  const { planId } = await props.params;

  return (
    <section className="flex flex-col gap-5">
      <CurrencySelector planId={planId} />
      <DisplayName />
      <DangerZone planId={planId} />
    </section>
  );
}
