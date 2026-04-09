export default function Footer() {
  return (
    <footer className="section-max pb-8 pt-2">
      <div
        className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] border px-5 py-5 font-mono-base text-[0.72rem] tracking-[0.08em]"
        style={{ color: 'var(--text-dim)', borderColor: 'var(--line)', background: 'var(--surface-ghost)' }}
      >
        <span>Gayatri Rajendra Ambatkar</span>
        <span>portfolio_state: polished for hiring conversations</span>
        <span>base: Nagpur, India</span>
      </div>
    </footer>
  );
}
