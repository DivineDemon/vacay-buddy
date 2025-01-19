import Collaborator from "@/components/settings/Collaborator";

interface PageProps {
  planId: string;
}

export default function Collaborate({ planId }: PageProps) {
  return <Collaborator />;
}
