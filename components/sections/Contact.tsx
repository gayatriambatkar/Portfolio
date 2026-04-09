'use client';

import PanelTopbar from '@/components/PanelTopbar';
import SectionReveal from '@/components/SectionReveal';

const contactLinks = [
  { label: 'Email', value: 'gayatriambatkar44@gmail.com', href: 'mailto:gayatriambatkar44@gmail.com' },
  { label: 'Phone', value: '+91 8767033128', href: 'tel:+918767033128' },
  { label: 'LinkedIn', value: 'linkedin.com/in/gayatri-ambatkar-304621236', href: 'https://linkedin.com/in/gayatri-ambatkar-304621236', external: true },
  { label: 'GitHub', value: 'github.com/gayatriambatkar', href: 'https://github.com/gayatriambatkar', external: true },
  { label: 'Resume', value: 'View resume', href: 'https://drive.google.com/file/d/1nGL78QnLnvSBzmRJ2utNC_tAgc_xdMVa/view?usp=sharing', external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section-max" style={{ paddingTop: 'clamp(40px,5vw,64px)', paddingBottom: 'clamp(64px,8vw,108px)' }}>
      <div className="font-mono-base text-[0.78rem] tracking-[0.1em] mb-6" style={{ color: 'var(--accent)' }}>
        // Contact
      </div>

      <SectionReveal>
        <div className="panel-surface rounded-[var(--radius)] overflow-hidden">
          <PanelTopbar title="connect.sh" />

          <div className="grid gap-8 p-5 md:grid-cols-[0.95fr_1.05fr] md:p-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 font-mono-base text-[0.84rem] tracking-[0.03em]" style={{ color: 'var(--text-dim)' }}>
                <span style={{ color: 'var(--accent)' }}>$</span>
                <span>preferred contact channels</span>
              </div>

              <div className="flex flex-col gap-2">
                {contactLinks.map(({ label, value, href, external }) => (
                  <a
                    key={href}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="rounded-[12px] border px-4 py-4 transition-all duration-200"
                    style={{ borderColor: 'var(--line)', background: 'var(--surface-chip)' }}
                  >
                    <span className="font-mono-base text-[0.76rem] uppercase tracking-[0.05em]" style={{ color: 'var(--accent)' }}>
                      {label}
                    </span>
                    <p className="mt-2 break-all text-[0.95rem] leading-7 sm:break-normal" style={{ color: 'var(--text-soft)' }}>
                      {value}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-[18px] border p-5 md:p-6" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)' }}>
              <div className="flex flex-col gap-2">
                <span className="font-mono-base text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: 'var(--accent)' }}>
                  Hiring summary
                </span>
                <h2 className="text-[1.3rem] font-semibold tracking-[-0.03em]" style={{ color: 'var(--text)' }}>
                  Best fit for product engineering roles with real production ownership
                </h2>
              </div>

              <p className="text-[0.95rem] leading-8" style={{ color: 'var(--text-soft)' }}>
                If you are hiring for full-stack engineering, backend-heavy product work, automation systems, or reliability-minded software roles, email is the fastest way to reach me.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[14px] border px-4 py-4" style={{ borderColor: 'var(--line)', background: 'var(--surface-chip)' }}>
                  <span className="font-mono-base text-[0.72rem] uppercase tracking-[0.05em]" style={{ color: 'var(--text-dim)' }}>
                    experience
                  </span>
                  <p className="mt-2 text-[1.08rem] font-semibold" style={{ color: 'var(--text)' }}>
                    2 years
                  </p>
                </div>
                <div className="rounded-[14px] border px-4 py-4" style={{ borderColor: 'var(--line)', background: 'var(--surface-chip)' }}>
                  <span className="font-mono-base text-[0.72rem] uppercase tracking-[0.05em]" style={{ color: 'var(--text-dim)' }}>
                    strongest work
                  </span>
                  <p className="mt-2 text-[1.08rem] font-semibold" style={{ color: 'var(--text)' }}>
                    SaaS + automation
                  </p>
                </div>
                <div className="rounded-[14px] border px-4 py-4" style={{ borderColor: 'var(--line)', background: 'var(--surface-chip)' }}>
                  <span className="font-mono-base text-[0.72rem] uppercase tracking-[0.05em]" style={{ color: 'var(--text-dim)' }}>
                    current interest
                  </span>
                  <p className="mt-2 text-[1.08rem] font-semibold" style={{ color: 'var(--text)' }}>
                    Ownership roles
                  </p>
                </div>
              </div>

      
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
