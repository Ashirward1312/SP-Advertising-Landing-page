import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed" color="default" sx={{ boxShadow: 2 }}>
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 8 } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
          SP ADVERTISING
        </Typography>
        <Box>
          {["Home", "Services", "About", "Contact"].map((item) => (
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
