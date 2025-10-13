import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { FaBullhorn, FaLightbulb, FaChartLine } from "react-icons/fa";

const About = () => {
  const cardData = [
    {
      icon: <FaBullhorn style={{ fontSize: "3rem", color: "#2563eb" }} />,
      title: "Marketing Strategy",
      desc: "We create targeted campaigns that maximize reach and engagement for your brand.",
    },
    {
      icon: <FaLightbulb style={{ fontSize: "3rem", color: "#2563eb" }} />,
      title: "Creative Ideas",
      desc: "Innovative concepts and designs that make your brand memorable and impactful.",
    },
    {
      icon: <FaChartLine style={{ fontSize: "3rem", color: "#2563eb" }} />,
      title: "Analytics & Growth",
      desc: "We analyze campaigns and optimize results for growth and higher ROI.",
    },
  ];

  return (
    <Box
      sx={{
        background: "#ffffff", // White background
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
          About Our Advertising Company
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
          We craft innovative campaigns that connect brands with audiences. Our expertise
          spans digital marketing, brand strategy, and creative storytelling.
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
        {cardData.map((card, index) => (
          <Card
            key={index}
            sx={{
              width: 280,
              p: 4,
              borderRadius: 2,
              border: "1px solid #e5e7eb", // subtle border
              background: "#ffffff",
              transition: "transform 0.4s, box-shadow 0.4s",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              },
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  mb: 2,
                  display: "inline-block",
                  transition: "transform 0.3s, color 0.3s",
                  "&:hover": { transform: "rotate(20deg) scale(1.2)" },
                }}
              >
                {card.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#475569", mb: 2 }}>
                {card.desc}
              </Typography>
              {/* Example Button */}
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

export default About;
