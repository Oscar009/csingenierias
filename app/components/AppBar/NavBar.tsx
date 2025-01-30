'use client';

import { AppBar, Box, Button, IconButton, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'; // Importa el ícono de flecha
import { useRouter } from 'next/navigation';
import { NavItem } from "@/app/interfaces/AppBar";
import Image from "next/image";
import logo from "../../assets/img/logo_blanco.png";
import { useState } from 'react';

interface NavBarProps {
  navItems: NavItem[];
  projectSubItems: NavItem[];
  onMenuClick: () => void;
}

export default function NavBar({ navItems, projectSubItems, onMenuClick }: NavBarProps) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleNavigation = (route: string) => {
    router.push(`/${route.toLowerCase()}`);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (route: string) => {
    handleNavigation(route);
    handleMenuClose();
  };

  return (
    <AppBar
      component="nav" sx={{ boxShadow: 'none', width: '100%', top: 0, left: 0, right: 0, position: { xs: 'sticky', sm: 'fixed' } }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        {/* Contenedor del logo (para pantallas grandes) */}
        <Box
          onClick={() => router.push('/home')}
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

        {/* Botón de menú (solo en pantallas móviles) */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }} // Mostrar solo en pantallas pequeñas
        >
          <MenuIcon />
        </IconButton>

        {/* Contenedor de los botones de navegación */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' }, // Mostrar solo en pantallas grandes
            justifyContent: 'space-around', // Espacio alrededor de los navItems en pantallas grandes
            alignItems: 'center',
            height: 80,
            width: 'auto', // Asegura que se ajuste el tamaño a los elementos
          }}
        >
          {navItems.map((item) => (
            item.title === 'Proyectos' ? (
              <Box key={item.route}>
                <Button
                  sx={{
                    height: "100%", padding: 2,
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
                  }}
                  onClick={handleMenuOpen}
                >
                  <Typography
                    fontFamily={'Bebas Neue'}
                    variant="body1"
                    sx={{
                      color: '#fff',
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
                  >
                    {item.title}
                  </Typography>
                  <ArrowDropDown
                    sx={{
                      color: '#fff',
                      ml: 1,
                      transform: Boolean(anchorEl) ? 'rotate(180deg)' : 'rotate(0deg)', // Animación de rotación
                      transition: 'transform 0.3s',
                    }}
                  />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {projectSubItems.map((subItem) => (
                    <MenuItem key={subItem.route} onClick={() => handleMenuItemClick(subItem.route)}>
                      {subItem.title}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Button
                key={item.route}
                sx={{
                  height: "100%", padding: 2,
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
                onClick={() => handleNavigation(item.route)}
              >
                <Typography
                  fontFamily={'Bebas Neue'}
                  variant="body1"
                  sx={{
                    color: '#fff',
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
                >
                  {item.title}
                </Typography>
              </Button>
            )
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}