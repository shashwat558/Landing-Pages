import './globals.css';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';



export const metadata: Metadata = {
  title: 'Maximus AI - Advanced AI & Web Solutions',
  description: 'Powering businesses with cutting-edge AI/ML and web solutions to transform digital experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          storageKey="Maximus-theme"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}