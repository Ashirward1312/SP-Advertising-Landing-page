import React from 'react';
import {
  Box,
  Container,
  Card,
  
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Chip,
  CssBaseline,
  ThemeProvider,
  Button,
} from '@mui/material';
import { createTheme, alpha } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1565D8', contrastText: '#fff' },
    background: { default: '#ffffff', paper: '#ffffff' },
    text: { primary: '#0f172a', secondary: '#475569' },
    divider: '#E5E7EB',
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: '"Inter","Roboto","Helvetica","Arial",sans-serif',
    h2: { fontWeight: 800, letterSpacing: -0.5 },
    h6: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
});

const reveal = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

function useInView(options) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.18, ...options });
    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);
  return { ref, inView };
}

const FALLBACK = 'https://picsum.photos/seed/mui/800/600';

const services = [
  {
    title: 'Social Media Marketing',
    desc: 'Campaigns, calendars, creatives + analytics that actually grow.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=60',
  },
  {
    title: 'Content Marketing',
    desc: 'SEO-backed content that educates and converts.',
    image: 'https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=bo9P4L3HQM2cipWrh8W7_HwPYNnUdHKqucWnduQLge0=',
  },
  {
    title: 'Email Marketing',
    desc: 'Lifecycle strategy, segmentation, and A/B tests for ROI.',
    image: 'https://plus.unsplash.com/premium_photo-1682309526815-efe5d6225117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2112',
  },
  {
    title: 'Performance Optimization',
    desc: 'Core Web Vitals tuning for a fast, smooth UX.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60',
  },
  {
    title: 'UI/UX Design',
    desc: 'Clean, usable interfaces that convert.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=60',
  },
  {
    title: 'Web Development',
    desc: 'React/Next.js builds with scalable architecture.',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=60',
  },
];

function ServiceCard({ service, index }) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 6px 18px rgba(2,6,23,0.06)',
        transition: 'transform .22s ease, box-shadow .22s ease, border-color .22s ease',
        minHeight: { xs: 320, sm: 340 },   // bigger card height
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: (t) => `0 18px 44px ${alpha(t.palette.primary.main, 0.16)}`,
          borderColor: (t) => alpha(t.palette.primary.main, 0.4),
        },
        animation: `${reveal} ${460 + index * 80}ms cubic-bezier(.2,.8,.2,1) both`,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          alt={service.title}
          src={service.image}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = FALLBACK; }}
          sx={{
            width: '100%',
            height: { xs: 190, sm: 210 },   // bigger image height
            objectFit: 'cover',
            display: 'block',
            transition: 'transform .45s ease',
            '.MuiCard-root:hover &': { transform: 'scale(1.03)' },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            pointerEvents: 'none',
            background: (t) => `linear-gradient(0deg, ${alpha(t.palette.primary.main, 0.10)}, transparent 40%)`,
            opacity: 0,
            transition: 'opacity .22s ease',
            '.MuiCard-root:hover &': { opacity: 1 },
          }}
        />
      </Box>

      <CardContent sx={{ p: 2.5, display: 'grid', gap: 1, flexGrow: 1 }}>
        <Typography variant="h6">{service.title}</Typography>
        <Typography
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {service.desc}
        </Typography>
        <Button
          size="small"
          variant="text"
          endIcon={<ArrowForwardIcon />}
          sx={{ mt: 'auto', justifySelf: 'start', color: 'primary.main', '&:hover': { textDecoration: 'underline' } }}
        >
          Learn more
        </Button>
      </CardContent>
    </Card>
  );
}

function ServicesSection() {
  const { ref, inView } = useInView();
  return (
    <Box component="section" sx={{ bgcolor: 'background.default' }}>
      {/* zyada width dene ke liye lg */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Stack
          ref={ref}
          spacing={1}
          sx={{
            mb: 4,
            textAlign: 'left',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(8px)',
            transition: 'all 600ms cubic-bezier(.2,.8,.2,1)',
          }}
        >
          <Chip
            label="Our Services"
            color="primary"
            variant="outlined"
            size="small"
            sx={{
              fontWeight: 700,
              borderColor: (t) => alpha(t.palette.primary.main, 0.35),
              bgcolor: (t) => alpha(t.palette.primary.main, 0.06),
              width: 'fit-content',
            }}
          />
          <Typography variant="h2">Boost Your Brand with Our Expertise</Typography>
          
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 2, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, minmax(0, 1fr))',
              sm: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(3, minmax(0, 1fr))',
            },
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title + i} service={s} index={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default function ServiceCardsPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ServicesSection />
    </ThemeProvider>
  );
}