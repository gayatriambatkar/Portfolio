'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import PanelTopbar from '@/components/PanelTopbar';
import SectionReveal from '@/components/SectionReveal';

const contactLinks = [
  { label: '+91 8767033128', href: 'tel:+918767033128' },
  { label: 'gayatriambatkar44@gmail.com', href: 'mailto:gayatriambatkar44@gmail.com' },
  { label: 'linkedin', href: 'https://linkedin.com/in/gayatri-ambatkar-304621236', external: true },
  { label: 'github', href: 'https://github.com/gayatriambatkar', external: true },
  { label: 'resume', href: 'https://drive.google.com/file/d/1nGL78QnLnvSBzmRJ2utNC_tAgc_xdMVa/view?usp=sharing', external: true },
];

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState('sending');
    setErrorMsg('');

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        }
      );
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.');
        setFormState('error');
        return;
      }

      setFormState('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setErrorMsg('Could not reach the server. Please try another channel.');
      setFormState('error');
    }
  }

  const inputStyle = {
    background: 'var(--terminal-output-bg)',
    border: '1px solid var(--line)',
    borderRadius: '8px',
    color: 'var(--text)',
    padding: '12px 14px',
    width: '100%',
    fontFamily: 'var(--font-ibm-plex)',
    fontSize: '1rem',
    minHeight: 48,
    outline: 'none',
    transition: 'border-color 0.2s',
  } as React.CSSProperties;

  return (
    <section id="contact" className="section-max" style={{ paddingTop: 'clamp(40px,5vw,64px)', paddingBottom: 'clamp(64px,8vw,108px)' }}>
      <div className="font-mono-base text-[0.78rem] tracking-[0.1em] mb-6" style={{ color: 'var(--accent)' }}>
        // Contact
      </div>

      <SectionReveal>
        <div className="panel-surface rounded-[var(--radius)] overflow-hidden">
          <PanelTopbar title="connect.sh" />

          <div className="grid gap-8 p-5 md:grid-cols-2 md:p-8">
            {/* Left: quick links */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 font-mono-base text-[0.84rem] tracking-[0.03em]" style={{ color: 'var(--text-dim)' }}>
                <span style={{ color: 'var(--accent)' }}>$</span>
                <span>open communication-channel</span>
              </div>

              <div className="flex flex-col gap-2">
                {contactLinks.map(({ label, href, external }) => (
                  <a
                    key={href}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="inline-flex min-h-[48px] items-center rounded-[8px] border border-[var(--line)] px-4 py-3 font-mono-base text-[0.92rem] tracking-[0.03em] transition-all duration-200 break-all sm:break-normal"
                    style={{ color: 'var(--text-soft)', background: 'var(--surface-chip)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-soft)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: contact form */}
            <div className="flex flex-col gap-4">
              <div className="font-mono-base text-[0.82rem] tracking-[0.04em]" style={{ color: 'var(--text-dim)' }}>
                or send a message directly
              </div>

              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[10px] border border-[var(--line)] p-5 font-mono-base text-[0.92rem]"
                  style={{ background: 'var(--bg-accent)', color: 'var(--accent)' }}
                >
                  Message sent. I will get back to you soon.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <label htmlFor="contact-name" className="flex flex-col gap-2">
                    <span className="font-mono-base text-[0.84rem] tracking-[0.03em]" style={{ color: 'var(--text-dim)' }}>
                      Name
                    </span>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
                    />
                  </label>
                  <label htmlFor="contact-email" className="flex flex-col gap-2">
                    <span className="font-mono-base text-[0.84rem] tracking-[0.03em]" style={{ color: 'var(--text-dim)' }}>
                      Email
                    </span>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      inputMode="email"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
                    />
                  </label>
                  <label htmlFor="contact-message" className="flex flex-col gap-2">
                    <span className="font-mono-base text-[0.84rem] tracking-[0.03em]" style={{ color: 'var(--text-dim)' }}>
                      Message
                    </span>
                    <textarea
                      id="contact-message"
                      placeholder="Tell me a little about what you're building or hiring for"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={4}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 132 }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
                    />
                  </label>

                  {formState === 'error' && (
                    <p className="font-mono-base text-[0.84rem] tracking-[0.03em]" style={{ color: 'var(--danger)' }}>
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="min-h-[48px] rounded-[8px] px-5 py-3 font-mono-base text-[0.92rem] tracking-[0.03em] transition-all duration-200 disabled:opacity-60"
                    style={{ background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    {formState === 'sending' ? 'sending...' : 'send message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
