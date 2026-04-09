import { runtimeCards } from '@/lib/data';
import SectionReveal from '@/components/SectionReveal';

export default function Runtime() {
  return (
    <section id="now" className="section-max" style={{ paddingTop: 'clamp(40px,5vw,64px)', paddingBottom: 'clamp(40px,5vw,64px)' }}>
      <div className="font-mono-base text-[0.78rem] tracking-[0.1em] mb-6" style={{ color: 'var(--accent)' }}>
        // Runtime
      </div>

      <SectionReveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {runtimeCards.map((card) => (
            <article
              key={card.label}
              className="panel-surface rounded-[var(--radius)] p-6 flex flex-col gap-3"
            >
              <div className="font-mono-base text-[0.68rem] tracking-[0.1em]" style={{ color: 'var(--accent)' }}>
                {card.label}
              </div>
              <p className="text-[0.86rem] leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
