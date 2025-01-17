import { ReactNode } from 'react';
import ClientThemeProvider from './theme/clientThemeProvider';
import DrawerAppBar from './components/AppBar/DrawerAppBar';
import { FooterComponent } from './components/Footer/Footer';
import './globals.css'; // Archivo CSS para estilos globales

export const metadata = {
  title: 'Inmobiliaria CS Ingenierías y asociados',
  description: 'A Next.js 14 project using Material-UI and TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <ClientThemeProvider>
          <div className="layout-container flex flex-col min-h-full">
            <DrawerAppBar />
            <main className="flex-grow">{children}</main>
            <FooterComponent />
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
