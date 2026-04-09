'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, ProjectCase, CaseContent } from '@/lib/data';
import PanelTopbar from '@/components/PanelTopbar';
import SectionReveal from '@/components/SectionReveal';

function renderContent(content: CaseContent) {
  if (content.type === 'list') {
    return (
      <ul className="flex w-full min-w-0 flex-col gap-2 pl-4 whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
        {content.items.map((item, i) => (
          <li key={i} className="w-full min-w-0 whitespace-pre-wrap break-words text-[0.92rem] leading-7 list-disc [overflow-wrap:anywhere]" style={{ color: 'var(--text-soft)' }}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (content.type === 'paragraph' && content.links && content.links.length > 0) {
    const links = content.links;
    const parts = content.text.split(/\{([^}]+)\}/g);
    return (
      <div className="w-full min-w-0 whitespace-pre-wrap break-words text-[0.92rem] leading-7 [overflow-wrap:anywhere]" style={{ color: 'var(--text-soft)' }}>
        {parts.map((part, i) => {
          const link = links.find((item) => item.label === part);
          return link ? (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-transparent transition-colors duration-200 hover:decoration-current break-all"
              style={{ color: 'var(--accent)' }}
            >
              {link.label}
            </a>
          ) : (
            <span key={i} className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
              {part}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full min-w-0 whitespace-pre-wrap break-words text-[0.92rem] leading-7 [overflow-wrap:anywhere]" style={{ color: 'var(--text-soft)' }}>
      {content.text}
    </div>
  );
}

const coreLabels = ['problem', 'approach', 'outcome', 'key decision'];

function CaseCard({ caseItem, isDesktop }: { caseItem: ProjectCase; isDesktop: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const isCore = coreLabels.includes(caseItem.label);
  const isFull = caseItem.content.type === 'full';
  const shouldShowContent = isDesktop || isCore || expanded;

  return (
    <div
      className="min-w-0 rounded-[16px] border"
      style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)', gridColumn: isFull ? '1 / -1' : undefined }}
    >
      <button
        type="button"
        onClick={() => !isDesktop && !isCore && setExpanded((value) => !value)}
        className="flex min-h-[44px] w-full items-center justify-between gap-3 px-4 py-4 text-left"
        style={{ cursor: isDesktop || isCore ? 'default' : 'pointer' }}
      >
        <span className="font-mono-base text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: 'var(--accent)' }}>
          {caseItem.label}
        </span>
        {!isDesktop && !isCore && (
          <span className="font-mono-base text-[0.9rem] shrink-0" style={{ color: 'var(--text-dim)' }}>
            {expanded ? '-' : '+'}
          </span>
        )}
      </button>

      <div className={`${shouldShowContent ? 'block w-full min-w-0' : 'hidden'} px-4 pb-4`}>
        {renderContent(caseItem.content)}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [isDesktop, setIsDesktop] = useState(false);
  const active = projects.find((project) => project.id === activeId) ?? projects[0];
  const detailRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);

    return () => mediaQuery.removeEventListener('change', updateViewport);
  }, []);

  function handleProjectSelect(projectId: string) {
    setActiveId(projectId);

    if (!isDesktop && typeof window !== 'undefined') {
      requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  return (
    <section id="projects" className="section-max section-pad">
      <div className="font-mono-base mb-6 text-[0.78rem] tracking-[0.1em]" style={{ color: 'var(--accent)' }}>
        // Featured Projects
      </div>

      <SectionReveal>
        <div className="panel-surface grid min-w-0 rounded-[var(--radius)] md:grid-cols-[280px_minmax(0,1fr)] md:min-h-[520px]">
          <div
            className="flex flex-col gap-3 border-b p-4 md:border-b-0 md:border-r"
            style={{ borderColor: 'var(--line)', background: 'var(--surface-ghost)' }}
          >
            <div className="px-2 py-2">
              <div className="font-mono-base text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: 'var(--text-dim)' }}>
                recruiter view
              </div>
              <p className="mt-2 text-[0.92rem] leading-7" style={{ color: 'var(--text-soft)' }}>
                Four projects with the clearest evidence of ownership, technical decisions, and business-facing outcomes.
              </p>
            </div>

            <div className="grid gap-2 md:hidden">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => handleProjectSelect(project.id)}
                  className="min-h-[44px] w-full rounded-[16px] border px-4 py-3 text-left transition-all duration-200"
                  style={{
                    borderColor: activeId === project.id ? 'var(--accent)' : 'var(--line)',
                    background: activeId === project.id ? 'var(--bg-accent)' : 'var(--surface-chip)',
                  }}
                  aria-pressed={activeId === project.id}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono-base shrink-0 text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: activeId === project.id ? 'var(--accent)' : 'var(--text-dim)' }}>
                      {project.index}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[0.96rem] font-semibold leading-tight" style={{ color: 'var(--text)' }}>
                        {project.title}
                      </span>
                      <span className="mt-1 block font-mono-base text-[0.76rem] uppercase tracking-[0.04em]" style={{ color: 'var(--text-dim)' }}>
                        {project.kicker}
                      </span>
                    </div>
                    <span
                      className="font-mono-base shrink-0 self-center text-[0.72rem] uppercase tracking-[0.05em]"
                      style={{ color: activeId === project.id ? 'var(--accent)' : 'var(--text-dim)' }}
                    >
                      {activeId === project.id ? 'open' : 'view'}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="hidden md:flex md:flex-col md:gap-2">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => handleProjectSelect(project.id)}
                  className="min-h-[44px] rounded-[16px] border px-4 py-4 text-left transition-all duration-200"
                  style={{
                    borderColor: activeId === project.id ? 'var(--accent)' : 'transparent',
                    background: activeId === project.id ? 'var(--bg-accent)' : 'transparent',
                  }}
                >
                  <div className="flex gap-3">
                    <span className="font-mono-base text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: activeId === project.id ? 'var(--accent)' : 'var(--text-dim)' }}>
                      {project.index}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-[0.94rem] font-semibold" style={{ color: 'var(--text)' }}>
                        {project.title}
                      </span>
                      <span className="font-mono-base text-[0.78rem] uppercase tracking-[0.04em]" style={{ color: 'var(--text-dim)' }}>
                        {project.tabMeta}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              ref={detailRef}
              key={active.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-w-0 flex-col"
              role="tabpanel"
            >
              <PanelTopbar title={active.filename} />

              <div className="flex flex-col gap-4 p-4 sm:gap-5 md:gap-6 md:p-7">
                <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="font-mono-base mb-2 text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: 'var(--text-dim)' }}>
                      {active.kicker}
                    </div>
                    <h2 className="text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[1.5rem] md:text-[1.85rem]" style={{ color: 'var(--text)' }}>
                      {active.title}
                    </h2>
                    <p className="mt-2 break-words font-mono-base text-[0.82rem] uppercase tracking-[0.04em]" style={{ color: 'var(--text-dim)' }}>
                      {active.tabMeta}
                    </p>
                  </div>

                  <span
                    className="font-mono-base self-start rounded-full border px-3 py-2 text-[0.78rem] uppercase tracking-[0.04em] sm:shrink-0"
                    style={{ borderColor: 'var(--line)', color: 'var(--text-dim)', background: 'var(--surface-chip)' }}
                  >
                    status: {active.status}
                  </span>
                </header>

                <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                  <div className="rounded-[18px] border p-4 md:p-5" style={{ borderColor: 'var(--line)', background: 'var(--surface-ghost)' }}>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-mono-base text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: 'var(--accent)' }}>
                          project system view
                        </span>
                        <h3 className="text-[1.08rem] font-semibold" style={{ color: 'var(--text)' }}>
                          {active.visualTitle}
                        </h3>
                        <p className="text-[0.9rem] leading-7" style={{ color: 'var(--text-soft)' }}>
                          {active.visualSummary}
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {active.visualStats.map((stat) => (
                          <div key={stat.label} className="rounded-[14px] border px-4 py-4" style={{ borderColor: 'var(--line)', background: 'var(--surface-chip)' }}>
                            <span className="font-mono-base text-[0.72rem] uppercase tracking-[0.05em]" style={{ color: 'var(--text-dim)' }}>
                              {stat.label}
                            </span>
                            <p className="mt-2 text-[1.15rem] font-semibold tracking-[-0.03em]" style={{ color: 'var(--text)' }}>
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="grid gap-3 md:grid-cols-3">
                        {active.visualFlow.map((step) => (
                          <div key={`${step.from}-${step.to}`} className="rounded-[14px] border p-4" style={{ borderColor: 'var(--line)', background: 'linear-gradient(145deg, rgba(94, 160, 255, 0.12), rgba(124, 224, 195, 0.08))' }}>
                            <span className="font-mono-base text-[0.72rem] uppercase tracking-[0.05em]" style={{ color: 'var(--text-dim)' }}>
                              {step.from}
                            </span>
                            <p className="mt-3 text-[0.96rem] font-semibold leading-6" style={{ color: 'var(--text)' }}>
                              {step.to}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <aside className="rounded-[18px] border p-4 md:p-5" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)' }}>
                    <div className="flex flex-col gap-3">
                      <span className="font-mono-base text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: 'var(--accent)' }}>
                        recruiter snapshot
                      </span>
                      {active.recruiterSnapshot.map((item) => (
                        <div key={item.label} className="border-b pb-3 last:border-b-0 last:pb-0" style={{ borderColor: 'var(--line)' }}>
                          <div className="font-mono-base text-[0.72rem] uppercase tracking-[0.05em]" style={{ color: 'var(--text-dim)' }}>
                            {item.label}
                          </div>
                          <p className="mt-1 text-[0.9rem] leading-7" style={{ color: 'var(--text-soft)' }}>
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </aside>
                </div>

                <p
                  className="max-w-full min-w-0 whitespace-normal break-words text-[0.92rem] leading-7 [overflow-wrap:anywhere]"
                  style={{ color: 'var(--text-soft)' }}
                >
                  {active.summary}
                </p>

                {active.tabLinks && active.tabLinks.length > 0 && (
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {active.tabLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary w-full sm:w-auto"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                <div className="grid gap-3 lg:grid-cols-2">
                  {active.cases.map((caseItem, index) => (
                    <CaseCard key={index} caseItem={caseItem} isDesktop={isDesktop} />
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </SectionReveal>
    </section>
  );
}
