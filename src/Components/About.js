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
        background: "#ffffff",
        color: "#0b1220",
        py: { xs: 6, md: 10 }, // reduced vertical padding
        px: { xs: 2, md: 3 },
        textAlign: "center",
        minHeight: "auto",
      }}
    >
      {/* Header */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 1,
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
            fontSize: { xs: "0.9rem", md: "1rem" },
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
          gap: { xs: 2, md: 4 },
        }}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: 250, sm: 260, md: 280 },
              p: { xs: 2.5, md: 3 },
              borderRadius: 2,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
              transition: "transform 0.4s, box-shadow 0.4s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 25px rgba(0,0,0,0.1)",
              },
            }}
          >
            <CardContent
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  display: "inline-block",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "rotate(15deg) scale(1.15)" },
                }}
              >
                {card.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "1rem", md: "1.1rem" } }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#475569",
                  mb: 2,
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                }}
              >
                {card.desc}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  backgroundColor: "#2563eb",
                  fontSize: { xs: "0.75rem", md: "0.85rem" },
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
            0% { opacity: 0; transform: translateY(-40px); }
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
