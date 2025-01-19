type SectionWrapperProps = {
  children: React.ReactNode;
  id: string;
};
export default function SectionWrapper({children, id}: SectionWrapperProps) {
  return (
    <article
      id={id}
      className="scroll-mt-20 text-foreground p-5 bg-white rounded-2xl"
    >
      {children}
    </article>
  );
}
