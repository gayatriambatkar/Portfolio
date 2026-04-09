import { failures } from '@/lib/data';
import SectionReveal from '@/components/SectionReveal';

export default function Failures() {
  return (
    <section id="failures" className="section-max" style={{ paddingTop: 'clamp(24px,3vw,40px)', paddingBottom: 'clamp(40px,5vw,64px)' }}>
      <div className="font-mono-base text-[0.78rem] tracking-[0.1em] mb-6" style={{ color: 'var(--accent)' }}>
        // Failures &amp; Lessons
      </div>

      <SectionReveal>
        <div className="flex flex-col gap-3">
          {failures.map((item) => (
            <article
              key={item.marker}
              className="panel-surface rounded-[var(--radius)] p-5 md:p-6 flex gap-5 items-start"
            >
              <span
                className="font-mono-base text-[0.65rem] tracking-[0.1em] shrink-0 mt-1"
                style={{ color: 'var(--danger)' }}
              >
                {item.marker}
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="text-[0.95rem] font-medium leading-snug" style={{ color: 'var(--text)' }}>
                  {item.title}
                </h2>
                <p className="text-[0.84rem] leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
