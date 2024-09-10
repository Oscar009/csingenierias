import { ReactNode } from 'react';
import ClientThemeProvider from './theme/clientThemeProvider';
import DrawerAppBar from './components/AppBar/DrawerAppBar';

export const metadata = {
  title: 'Inmobiliaria CS Ingenierías y asociados',
  description: 'A Next.js 14 project using Material-UI and TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider>
          <DrawerAppBar />
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}