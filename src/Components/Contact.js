import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        background: "#f8f9fa", // light grey background for subtle contrast
        color: "#0b1220",
        py: 12,
        px: 3,
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            opacity: 0,
            animation: "fadeInDown 1s forwards",
            color: "#0b1220",
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 700,
            margin: "0 auto",
            opacity: 0,
            animation: "fadeIn 1.5s forwards",
            color: "#475569",
          }}
        >
          Have questions or need a quote? Fill out the form below and we will get back to you
          as soon as possible.
        </Typography>
      </Box>

      {/* Contact Form */}
      <Box
        component="form"
        sx={{
          maxWidth: 600,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          backgroundColor: "#ffffff", // white form background
          p: 5,
          borderRadius: 3,
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            sx={{
              backgroundColor: "#f5f5f5", // subtle grey input
              "& .MuiOutlinedInput-root": { borderRadius: 2 },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            sx={{
              backgroundColor: "#f5f5f5",
              "& .MuiOutlinedInput-root": { borderRadius: 2 },
            }}
          />
        </Stack>
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: "#f5f5f5",
            "& .MuiOutlinedInput-root": { borderRadius: 2 },
          }}
        />
        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
          required
          sx={{
            backgroundColor: "#f5f5f5",
            "& .MuiOutlinedInput-root": { borderRadius: 2 },
          }}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          sx={{
            backgroundColor: "#f5f5f5",
            "& .MuiOutlinedInput-root": { borderRadius: 2 },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#2563eb",
            color: "#fff",
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: 2,
            py: 1.5,
            "&:hover": { backgroundColor: "#1e40af" },
          }}
        >
          Send Message
        </Button>
      </Box>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-50px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default Contact;
