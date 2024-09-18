'use client';  // Asegura que se ejecute en el lado del cliente

import { NavItem } from "@/app/interfaces/AppBar";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import logo from "../../assets/img/logo_blanco.png";
import theme from "@/app/theme/theme";

interface NavDrawerProps {
  navItems: NavItem[];
  onClose: () => void;
}

export default function NavDrawer({ navItems, onClose }: NavDrawerProps) {
  const router = useRouter();  // Hook para manejar la navegación

  const handleNavigation = (route: string) => {
    router.push(`/${route.toLowerCase()}`);  // Redirige a la página correspondiente
    onClose();  // Cierra el Drawer después de la navegación
  };

  return (
    <Box onClick={onClose} sx={{ textAlign: 'center', backgroundColor: theme.palette.primary.main, height: "100vh" }} >
      <Box onClick={() => router.push('/projects')} sx={{ my: 2 }}>
        <Image
          style={{ cursor: 'pointer' }}
          src={logo}
          alt="Logo"
          width={100}
          height={55}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavigation(item.route)}>
              <ListItemText sx={{ color: 'white' }} primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
