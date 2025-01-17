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
    <AppBar component="nav" sx={{ paddingX: { sm: 4 } }}>
      <Toolbar sx={{ justifyContent: 'space-around', display: 'flex' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          onClick={() => router.push('/projects')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Image
            style={{ cursor: 'pointer' }}
            src={logo}
            alt="Logo"
            width={80}
            height={40}
          />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' }, height: 80 }}>
          {navItems.map((item) => (
            <Button key={item.route}
              sx={{ color: '#fff', height: "100%", padding: 2 }}
              onClick={() => handleNavigation(item.route)}>
              <Typography
                variant="body1"
                sx={{
                  color: '#fff',
                  fontWeight: 500,
                  textTransform: 'capitalize',
                  position: 'relative',
                  transition: 'color 0.3s, transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    '&::after': {
                      width: '100%',
                    },
                    transition: 'width 0.5s',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    height: '2px',
                    width: 0,
                    backgroundColor: 'white',
                    transition: 'width 0.5s',
                  },
                }}
              >{item.title}</Typography>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
