// src/HomeHero.jsx
import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { styled, keyframes } from '@mui/system';

// Animations
const fadeUp = keyframes`
  0% { opacity: 0; transform: translateY(18px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const floatY = keyframes`
  0%,100% { transform: translateY(0) rotate(0.001deg); }
  50% { transform: translateY(-10px) rotate(0.001deg); }
`;

const blobMorph = keyframes`
  0%   { border-radius: 58% 42% 40% 60% / 48% 35% 65% 52% }
  25%  { border-radius: 45% 55% 60% 40% / 40% 60% 40% 60% }
  50%  { border-radius: 58% 42% 40% 60% / 48% 35% 65% 52% }
  75%  { border-radius: 65% 35% 50% 50% / 55% 45% 55% 45% }
  100% { border-radius: 58% 42% 40% 60% / 48% 35% 65% 52% }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, .45); }
  70% { box-shadow: 0 0 0 18px rgba(37, 99, 235, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
`;

// Styled pieces
const HeroRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  minHeight: '100vh', // desktop unchanged
  display: 'flex',
  alignItems: 'center',
  // blue gradient background
  background:
    'linear-gradient(115deg, #0f66d3 0%, #0ea5e9 45%, #22d3ee 100%)',
  color: '#fff',
  isolation: 'isolate',
  '&::after': {
    // soft light vignette
    content: '""',
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(1500px 600px at -20% 110%, rgba(255,255,255,.18), transparent 60%)',
    pointerEvents: 'none',
  },
  // MOBILE ONLY changes
  [theme.breakpoints.down('sm')]: {
    minHeight: '100dvh',
    paddingBlock: theme.spacing(6),
  },
}));

const Blob = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '6%',
  top: '50%',
  transform: 'translateY(-50%)',
  width: 560,
  height: 560,
  background:
    'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
  filter: 'drop-shadow(0 20px 50px rgba(2, 6, 23, 0.25))',
  animation: `${blobMorph} 16s ease-in-out infinite`,
  zIndex: 0,
  // original medium behavior unchanged
  [theme.breakpoints.down('md')]: {
    width: 420,
    height: 420,
    right: '2%',
  },
  // MOBILE ONLY: hide on phones
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const DotPattern = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: 200,
  height: 200,
  opacity: 0.6,
  backgroundImage:
    'radial-gradient(rgba(255,255,255,0.7) 1.2px, transparent 1.2px)',
  backgroundSize: '16px 16px',
  zIndex: 0,
  // MOBILE ONLY: hide decorative dots
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const FloatImage = styled('img')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: 520,
  animation: `${floatY} 7s ease-in-out infinite`,
  filter: 'drop-shadow(0 20px 40px rgba(3, 7, 18, 0.25))',
  // original medium behavior unchanged
  [theme.breakpoints.down('md')]: {
    maxWidth: 420,
    marginInline: 'auto',
  },
  // MOBILE ONLY: slightly smaller
  [theme.breakpoints.down('sm')]: {
    maxWidth: 360,
  },
}));

const GradientWord = styled('span')(({ theme }) => ({
  background:
    'linear-gradient(90deg, #ffffff 0%, #dbeafe 50%, #ffffff 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}));

const CTAButton = styled(Button)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(1),
  height: 64,
  borderRadius: 999,
  textTransform: 'none',
  fontWeight: 700,
  fontSize: '1.05rem',
  backgroundColor: '#fff',
  color: '#0b1220',
  boxShadow:
    '0 15px 40px rgba(2, 6, 23, .18), 0 2px 6px rgba(2, 6, 23, .08)',
  transition: 'transform .25s ease, box-shadow .25s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow:
      '0 20px 50px rgba(2, 6, 23, .22), 0 4px 10px rgba(2, 6, 23, .10)',
    backgroundColor: '#fff',
  },
  '& .MuiButton-endIcon': {
    marginLeft: theme.spacing(2),
  },
}));

const ArrowCircle = styled(Box)(({ theme }) => ({
  width: 52,
  height: 52,
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  background:
    'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
  color: '#fff',
  boxShadow: '0 10px 20px rgba(14,165,233, .4)',
  transition: 'transform .25s ease',
  animation: `${pulse} 2.6s ease-out infinite`,
  '& svg': { transform: 'translateX(0)', transition: 'transform .25s ease' },
  '.MuiButton-root:hover &': {
    transform: 'scale(1.05)',
  },
  '.MuiButton-root:hover & svg': {
    transform: 'translateX(2px)',
  },
}));

export default function HomeHero() {
  return (
    <HeroRoot>
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left content */}
          <Grid item xs={12} md={7} lg={6}>
            <Stack
              spacing={2}
              sx={{
                animation: `${fadeUp} .8s ease .05s both`,
                // MOBILE ONLY: center text
                textAlign: { xs: 'center', sm: 'left' },
                alignItems: { xs: 'center', sm: 'flex-start' },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  lineHeight: 1.1,
                  fontSize: { xs: 30, sm: 40, md: 50 },
                }}
              >
                Empowering Your Brand
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  lineHeight: 1.1,
                  fontSize: { xs: 32, sm: 40, md: 50 },
                }}
              >
                with Strategic Advertising
              </Typography>

              <Typography
                component="h1"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.15,
                  fontSize: { xs: 38, sm: 52, md: 66 },
                  letterSpacing: { md: -1 },
                }}
              >
                <GradientWord>SEO Optimization</GradientWord>
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: 'rgba(255,255,255,.9)',
                  maxWidth: 780,
                  fontSize: { xs: 15.5, md: 18 },
                }}
              >
                Welcome to SP ADVERTISING, one of the most creative and
                well‑established advertising agencies in Raipur, Chhattisgarh.
                With SP Advertising, make your brand live better.
              </Typography>

              <Stack
                // MOBILE ONLY: stack buttons vertically
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1.5, sm: 2 }}
                sx={{
                  pt: 2,
                  width: '100%',
                  alignItems: { xs: 'stretch', sm: 'center' },
                }}
              >
                <CTAButton
                  variant="contained"
                  endIcon={
                    <ArrowCircle>
                      <ArrowForwardRoundedIcon />
                    </ArrowCircle>
                  }
                  sx={{
                    width: { xs: '100%', sm: 'auto' },
                    height: { xs: 56, sm: 64 },
                    fontSize: { xs: '1rem', sm: '1.05rem' },
                  }}
                >
                  Get Services
                </CTAButton>

                {/* Optional secondary hoverable link/button */}
                <Button
                  variant="text"
                  sx={{
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    transition: 'transform .25s ease, opacity .25s ease',
                    '&:hover': { opacity: 0.85, transform: 'translateY(-2px)' },
                    width: { xs: '100%', sm: 'auto' },
                    height: { xs: 48, sm: 56 },
                  }}
                >
                  Learn more
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Right illustration */}
          <Grid item xs={12} md={5} lg="auto" sx={{ position: 'relative' }}>
            <FloatImage
              alt="SEO optimization illustration"
              // Replace with your image or SVG
              src="https://raw.githubusercontent.com/negomi/illustrations/main/seo-analytics-blue.svg"
              onError={(e) => {
                // graceful fallback
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop';
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Decorative shapes */}
      <Blob aria-hidden />
      <DotPattern aria-hidden sx={{ left: { xs: -20, md: 40 }, top: 80 }} />
      <DotPattern aria-hidden sx={{ right: 140, top: 120, opacity: 0.35 }} />
      <DotPattern
        aria-hidden
        sx={{ right: 60, bottom: 80, width: 160, height: 160, opacity: 0.25 }}
      />
    </HeroRoot>
  );
}