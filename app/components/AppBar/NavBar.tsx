'use client'; // Esto asegura que se renderiza solo en el cliente

import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation'; // Reemplaza con la versión correcta del hook en App Router

interface NavBarProps {
  navItems: string[];
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
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          MUI
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }} onClick={() => handleNavigation(item)}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
