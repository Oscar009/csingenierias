import { ReactNode } from 'react';
import ClientThemeProvider from './theme/clientThemeProvider';
import DrawerAppBar from './components/AppBar/DrawerAppBar';
import { FooterComponent } from './components/Footer/Footer';
import './globals.css'; // Archivo CSS para estilos globales

export const metadata = {
  title: 'Inmobiliaria CS Ingenierías y asociados',
  description: 'Construcciones CS Ingenierías S.A. de C.V.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
