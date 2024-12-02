'use client'; // Esto asegura que se renderiza solo en el cliente

import { AppBar, Box, Button, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation'; // Reemplaza con la versión correcta del hook en App Router
import { NavItem } from "@/app/interfaces/AppBar";
import Image from "next/image";
import logo from "../../assets/img/logo_blanco.png";

interface NavBarProps {
  navItems: NavItem[];
  onMenuClick: () => void;
}

export default function NavBar({ navItems, onMenuClick }: NavBarProps) {
  const router = useRouter(); // Asegúrate de que esto solo se usa en un entorno del cliente

  const handleNavigation = (route: string) => {
    router.push(`/${route.toLowerCase()}`); // Redirige a la página correspondiente
  };

  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box onClick={() => router.push('/projects')} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          <Image
            style={{ cursor: 'pointer' }}
            src={logo}
            alt="Logo"
            width={80}
            height={40}
          />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' }, height: 60 }}>
          {navItems.map((item) => (
            <Button key={item.route} sx={{ color: '#fff', height: "100%" }} onClick={() => handleNavigation(item.route)}>
              <Typography variant="body1">{item.title}</Typography>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
