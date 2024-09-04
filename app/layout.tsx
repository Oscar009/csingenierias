import { ReactNode } from 'react';
import ClientThemeProvider from './clientThemeProvider';

export const metadata = {
  title: 'Next.js 14 with Material-UI',
  description: 'A Next.js 14 project using Material-UI and TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider>
          <div>Hola</div>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}