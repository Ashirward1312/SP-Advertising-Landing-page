import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { FaBullhorn, FaLightbulb, FaChartLine, FaVideo, FaPaintBrush, FaChartPie } from "react-icons/fa";

const ServicesPage = () => {
  const servicesData = [
    {
      icon: <FaBullhorn style={{ fontSize: "3rem", color: "#2563eb" }} />,
      title: "Outdoor Advertising",
      desc: "Billboards, hoardings, and outdoor campaigns to reach wider audiences.",
    },
    {
      icon: <FaLightbulb style={{ fontSize: "3rem", color: "#f59e0b" }} />,
      title: "Indoor Advertising",
      desc: "Indoor media like malls, offices, and stores to target your audience closely.",
    },
    {
      icon: <FaChartLine style={{ fontSize: "3rem", color: "#10b981" }} />,
      title: "Digital Marketing",
      desc: "SEO, PPC, SMM, and content marketing for better online presence.",
    },
    {
      icon: <FaVideo style={{ fontSize: "3rem", color: "#8b5cf6" }} />,
      title: "Audio Visual",
      desc: "Professional AV solutions for events and advertisements.",
    },
    {
      icon: <FaPaintBrush style={{ fontSize: "3rem", color: "#ec4899" }} />,
      title: "Branding",
      desc: "Logo, identity, and visual strategies to strengthen your brand.",
    },
    {
      icon: <FaChartPie style={{ fontSize: "3rem", color: "#f97316" }} />,
      title: "Event Promotion",
      desc: "Promoting events and campaigns effectively for maximum impact.",
    },
  ];

  return (
    <Box
      sx={{
        background: "#ffffff", // white background
        color: "#0b1220",
        py: 10,
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
          }}
        >
          Our Services
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
          We offer a wide range of marketing and advertising services tailored to your needs.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {servicesData.map((service, index) => (
          <Card
            key={index}
            sx={{
              width: 280,
              height: 380, // fixed height for alignment
              p: 4,
              borderRadius: 2,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
              transition: "transform 0.4s, box-shadow 0.4s",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              },
            }}
          >
            <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <Box
                sx={{
                  mb: 2,
                  display: "inline-block",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "rotate(20deg) scale(1.2)" },
                }}
              >
                {service.icon}
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#475569", mb: 2 }}>
                  {service.desc}
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  backgroundColor: "#2563eb",
                  "&:hover": { backgroundColor: "#1e40af" },
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
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

export default ServicesPage;
