'use client';

import { NavItem } from "@/app/interfaces/AppBar";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Collapse } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import logo from "../../assets/img/logo_blanco.png";
import theme from "@/app/theme/theme";
import { useState } from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore'; // Ícono de flecha
import ExpandLess from '@mui/icons-material/ExpandLess'; // Ícono de flecha hacia arriba

interface NavDrawerProps {
  navItems: NavItem[];
  projectSubItems: NavItem[];
  onClose: () => void;
}

export default function NavDrawer({ navItems, projectSubItems, onClose }: NavDrawerProps) {
  const router = useRouter();
  const [openProjects, setOpenProjects] = useState(false);

  const handleNavigation = (route: string) => {
    router.push(`/${route.toLowerCase()}`);
    onClose();
  };

  const handleProjectsClick = () => {
    setOpenProjects(!openProjects);
  };

  return (
    <Box sx={{ textAlign: 'center', backgroundColor: theme.palette.primary.main, height: "100vh" }}>
      {/* Logo */}
      <Box onClick={() => router.push('/home')} sx={{ my: 2, cursor: 'pointer' }}>
        <Image
          style={{ cursor: 'pointer' }}
          src={logo}
          alt="Logo"
          width={100}
          height={55}
        />
      </Box>
      <Divider />

      {/* Lista de elementos del menú */}
      <List>
        {navItems.map((item) => (
          item.title === 'Proyectos' ? (
            <Box key={item.route}>
              <ListItemButton onClick={handleProjectsClick}>
                <ListItemText sx={{ color: 'white' }} primary={item.title} />
                {openProjects ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />} 
              </ListItemButton>
              <Collapse in={openProjects} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {projectSubItems.map((subItem) => (
                    <ListItemButton
                      key={subItem.route}
                      sx={{ pl: 4 }}
                      onClick={() => handleNavigation(subItem.route)}
                    >
                      <ListItemText sx={{ color: 'white' }} primary={subItem.title} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </Box>
          ) : (
            <ListItem key={item.route} disablePadding>
              <ListItemButton sx={{ textAlign: 'start' }} onClick={() => handleNavigation(item.route)}>
                <ListItemText sx={{ color: 'white' }} primary={item.title} />
              </ListItemButton>
            </ListItem>
          )
        ))}
      </List>
    </Box>
  );
}