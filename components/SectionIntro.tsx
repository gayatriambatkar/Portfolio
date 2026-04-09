interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionIntroProps) {
  const centered = align === 'center';

  return (
    <div
      className={`flex flex-col gap-4 ${centered ? 'items-center text-center max-w-[760px] mx-auto' : 'max-w-[720px]'}`}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <div className="flex flex-col gap-3">
        <h2 className="section-title">{title}</h2>
        <p className="section-copy">{description}</p>
      </div>
    </div>
  );
}
