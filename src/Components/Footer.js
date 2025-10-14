import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

// MUI-style sx prop implementation
const Box = ({ sx = {}, children, component = 'div', ...props }) => {
  const Component = component;
  return <Component style={sx} {...props}>{children}</Component>;
};

const Container = ({ maxWidth = '1200px', children, sx = {} }) => {
  const styles = {
    maxWidth,
    margin: '0 auto',
    padding: '0 20px',
    ...sx
  };
  return <div style={styles}>{children}</div>;
};

const Grid = ({ container, item, xs, md, spacing = 0, children, sx = {} }) => {
  const styles = container ? {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: `${spacing * 8}px`,
    ...sx
  } : {
    ...sx
  };
  return <div style={styles}>{children}</div>;
};

const Typography = ({ variant = 'body1', sx = {}, children, ...props }) => {
  const variants = {
    h5: { fontSize: '24px', fontWeight: 700, margin: 0 },
    h6: { fontSize: '18px', fontWeight: 600, margin: 0 },
    body1: { fontSize: '16px', margin: 0 },
    body2: { fontSize: '14px', margin: 0 }
  };
  
  const variantStyle = variants[variant] || variants.body1;
  const Component = variant.startsWith('h') ? variant : 'p';
  
  return <Component style={{ ...variantStyle, ...sx }} {...props}>{children}</Component>;
};

const Link = ({ href, sx = {}, children, ...props }) => {
  return <a href={href} style={{ textDecoration: 'none', ...sx }} {...props}>{children}</a>;
};

const IconButton = ({ sx = {}, children, ...props }) => {
  return (
    <button style={{
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...sx
    }} {...props}>
      {children}
    </button>
  );
};

const Divider = ({ sx = {} }) => {
  return <div style={{ height: '1px', width: '100%', ...sx }} />;
};

export default function AdvertisingFooter() {
  const footerLinks = {
    services: [
      'Digital Marketing',
      'Brand Strategy',
      'Content Creation',
      'Social Media',
      'SEO Services'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Portfolio',
      'Blog'
    ],
   
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a2e',
        color: '#ffffff',
        paddingTop: '48px',
        paddingBottom: '24px',
        marginTop: 'auto'
      }}
    >
      <Container maxWidth="1200px">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Box sx={{ flex: '1 1 300px', minWidth: '250px' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 650,
                marginBottom: '14px',
                background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Sp Advertising
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '16px', color: '#b0b0b0' }}>
              Transforming brands through 
              innovative advertising solutions and creative excellence.
            </Typography>
            
            </Box>

          {/* Services */}
          <Box sx={{ flex: '1 1 150px', minWidth: '150px' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '16px' }}>
              Services
            </Typography>
            {footerLinks.services.map((link) => (
              <Link
                key={link}
                href="#"
                sx={{
                  display: 'block',
                  color: '#b0b0b0',
                  marginBottom: '8px',
                  fontSize: '14px',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}
              >
                {link}
              </Link>
            ))}
          </Box>

          {/* Company */}
          <Box sx={{ flex: '1 1 150px', minWidth: '150px' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '16px' }}>
              Company
            </Typography>
            {footerLinks.company.map((link) => (
              <Link
                key={link}
                href="#"
                sx={{
                  display: 'block',
                  color: '#b0b0b0',
                  marginBottom: '8px',
                  fontSize: '14px',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}
              >
                {link}
              </Link>
            ))}
          </Box>

          

          {/* Follow Us + Contact Info */}
<Box sx={{ flex: '1 1 150px', minWidth: '150px' }}>
  <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '16px' }}>
    Follow Us
  </Typography>
  <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
    <IconButton
      sx={{ color: '#b0b0b0', backgroundColor: '#2d2d44', transition: 'all 0.3s' }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#667eea'; e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2d2d44'; e.currentTarget.style.color = '#b0b0b0'; }}
    >
      <Facebook size={18} />
    </IconButton>
    <IconButton
      sx={{ color: '#b0b0b0', backgroundColor: '#2d2d44', transition: 'all 0.3s' }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#667eea'; e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2d2d44'; e.currentTarget.style.color = '#b0b0b0'; }}
    >
      <Twitter size={18} />
    </IconButton>
    <IconButton
      sx={{ color: '#b0b0b0', backgroundColor: '#2d2d44', transition: 'all 0.3s' }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#667eea'; e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2d2d44'; e.currentTarget.style.color = '#b0b0b0'; }}
    >
      <Instagram size={18} />
    </IconButton>
    <IconButton
      sx={{ color: '#b0b0b0', backgroundColor: '#2d2d44', transition: 'all 0.3s' }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#667eea'; e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2d2d44'; e.currentTarget.style.color = '#b0b0b0'; }}
    >
      <Linkedin size={18} />
    </IconButton>
  </Box>

  {/* Contact Details under Follow Us */}
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Mail size={16} style={{ marginRight: '8px' }} />
      <Typography variant="body2">Sp@gmail.com</Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Phone size={16} style={{ marginRight: '8px' }} />
      <Typography variant="body2">+91 9123456780 </Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <MapPin size={16} style={{ marginRight: '8px', marginTop: '4px' }} />
      <Typography variant="body2">
        Shankar Nagar <br />
        Raipur,Chhattisgarh 492001
      </Typography>
    </Box>
  </Box>
</Box>

        </Grid>

        <Divider sx={{ margin: '24px 0', backgroundColor: '#2d2d44' }} />
{/* Bottom Bar */}
<Box
  sx={{
    display: 'flex',
    justifyContent: 'center', // <-- center align horizontally
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px'
  }}
>
  <Typography variant="body2" sx={{ color: '#b0b0b0', textAlign: 'center' }}>
    © 2025 SP Advertising. All rights reserved.
  </Typography>
  <Box sx={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
    
  </Box>
</Box>

      </Container>
    </Box>
  );
}