'use client';

import { useState } from "react";
import { Box, CssBaseline, Drawer } from "@mui/material";
import NavBar from "./NavBar";
import NavDrawer from "./NavDrawer";

const drawerWidth = 240;
const navItems = ['Projects', 'About', 'Contact', 'Services', 'Frequent Questions'];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', marginBottom: 10 }}>
      <CssBaseline />
      <NavBar navItems={navItems} onMenuClick={handleDrawerToggle} />
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <NavDrawer navItems={navItems} onClose={handleDrawerToggle} />
        </Drawer>
      </nav>
    </Box>
  );
}
