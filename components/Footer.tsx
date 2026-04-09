export default function Footer() {
  return (
    <footer className="section-max pb-8 pt-2">
      <div
        className="flex flex-col items-start gap-2 rounded-[20px] border px-5 py-5 font-mono-base text-[0.82rem] tracking-[0.04em] sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        style={{ color: 'var(--text-dim)', borderColor: 'var(--line)', background: 'var(--surface-ghost)' }}
      >
        <span>Gayatri Rajendra Ambatkar</span>
        <span>portfolio_state: hiring-ready</span>
        <span>base: Nagpur, India</span>
      </div>
    </footer>
  );
}
