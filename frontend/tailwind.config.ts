import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm-plex)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'Courier New', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      colors: {
        bg: 'var(--bg)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-panel': 'var(--bg-panel)',
        'text-base': 'var(--text)',
        'text-soft': 'var(--text-soft)',
        'text-dim': 'var(--text-dim)',
        accent: 'var(--accent)',
        'accent-blue': 'var(--accent-blue)',
        'accent-amber': 'var(--accent-amber)',
        danger: 'var(--danger)',
      },
      borderColor: {
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
      },
      backgroundColor: {
        panel: 'var(--bg-panel)',
        chip: 'var(--surface-chip)',
      },
    },
  },
  plugins: [],
};

export default config;
