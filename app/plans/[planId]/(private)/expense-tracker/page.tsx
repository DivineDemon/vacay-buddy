import ExpenseSection from "@/components/expenseTracker/ExpenseSection";

interface PageProps {
  params: Promise<{ planId: string }>;
}

export default async function ExpenseTracker(props: PageProps) {
  const { planId } = await props.params;

  return <ExpenseSection planId={planId} />;
}
