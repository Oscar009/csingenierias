'use client';  // Asegura que se ejecute en el lado del cliente

import { NavItem } from "@/app/interfaces/AppBar";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useRouter } from 'next/navigation'; // App Router

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
    <Box onClick={onClose} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavigation(item.route)}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
