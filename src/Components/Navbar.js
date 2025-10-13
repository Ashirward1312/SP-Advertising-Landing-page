import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuItems = ["Home", "Services", "About", "Contact"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 240 }} onClick={handleDrawerToggle}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton href={`#${item.toLowerCase()}`}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="default" sx={{ boxShadow: 2 }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 8 } }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
            SP ADVERTISING
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  mx: 1,
                  "&:hover": { color: "#1976d2" },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
