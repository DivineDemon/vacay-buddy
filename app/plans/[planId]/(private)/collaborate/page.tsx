import AccessRecords from "@/components/settings/AccessRecords";
import InviteForm from "@/components/settings/InviteForm";
import PendingInvites from "@/components/settings/PendingInvites";

interface PageProps {
  params: Promise<{ planId: string }>;
}

export default async function Collaborate(props: PageProps) {
  const { planId } = await props.params;

  return (
    <div className="bg-background shadow-sm rounded-lg p-4 border-2 border-border">
      <div className="border-b-2 border-b-border pb-2 mb-2 font-bold">
        Collaborators
      </div>
      <p className="text-sm text-muted-foreground">
        To invite people to your travel plan, send them a email invite using
        below
      </p>
      <InviteForm planId={planId} />
      <PendingInvites planId={planId} />
      <AccessRecords planId={planId} />
    </div>
  );
}
