import React from "react";
import { Fab, Zoom } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppFloat = () => {
  const handleClick = () => {
    // WhatsApp chat open
    window.open("https://wa.me/919876543210", "_blank"); // 👈 apna number daalna
  };

  return (
    <Zoom in={true} timeout={800}>
      <Fab
        onClick={handleClick}
        color="success"
        aria-label="whatsapp"
        sx={{
          position: "fixed",
          bottom: 24,
          left: 24, // 👈 Left me shift
          backgroundColor: "#25D366",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#1EBE5D",
            transform: "scale(1.1)",
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
          },
          transition: "all 0.3s ease",
          zIndex: 9999,
        }}
      >
        <WhatsAppIcon sx={{ fontSize: "2rem" }} />
      </Fab>
    </Zoom>
  );
};

export default WhatsAppFloat;
