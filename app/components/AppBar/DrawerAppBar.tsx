'use client';

import { useState } from "react";
import { Box, CssBaseline, Drawer } from "@mui/material";
import NavBar from "./NavBar";
import NavDrawer from "./NavDrawer";
import { NavItem } from "@/app/interfaces/AppBar";
import { usePathname } from "next/navigation"; // Importa usePathname

const drawerWidth = 240;
const navItems: NavItem[] = [
  { title: 'Inicio', route: 'Home' },
  { title: 'Proyectos', route: 'Projects' }, // Este será el elemento padre en el NavBar
  { title: 'Nosotros', route: 'About' },
  { title: 'Contacto', route: 'Contact' },
];

// Rutas específicas para los submenús de "Proyectos"
const projectSubItems: NavItem[] = [
  { title: 'Proyectos Activos', route: 'Projects/Active' },
  { title: 'Proyectos Ejecutados', route: 'Projects/Completed' },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname(); // Obtén la ruta actual

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Determina si estamos en la ruta de inicio
  const isHome = pathname === '/';

  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: isHome
          ? 0 // Sin margen en la ruta de inicio
          : { xs: 'none', sm: 10 }, // Margen responsivo: 5 en móviles, 10 en desktop
      }}
    >
      <CssBaseline />
      <NavBar navItems={navItems} projectSubItems={projectSubItems} onMenuClick={handleDrawerToggle} />
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          anchor="right"
        >
          <NavDrawer navItems={navItems} projectSubItems={projectSubItems} onClose={handleDrawerToggle} />
        </Drawer>
      </nav>
    </Box>
  );
}