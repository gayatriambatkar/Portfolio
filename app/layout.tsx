import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gayatri Ambatkar | Software Engineer',
  description:
    'Full-stack software developer building SaaS products, automation systems, admin panels, and AI-assisted tools.',
  keywords: ['software engineer', 'full-stack', 'MERN', 'Node.js', 'React', 'Sezone'],
  authors: [{ name: 'Gayatri Ambatkar' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
