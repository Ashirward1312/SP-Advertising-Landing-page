import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  MenuItem,
} from '@mui/material';
import { keyframes } from '@mui/system';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const SERVICE_OPTIONS = [
  'Outdoor Advertising',
  'Digital Marketing',
  'SEO Optimization',
  'Google Ads (PPC)',
  'Social Media Marketing',
  'Branding & Identity',
  'Print Advertising',
  'Event Promotion',
];

const panelIn = keyframes`
  0% { opacity: 0; transform: translateY(8px) scale(.99); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;
const revealUp = keyframes`
  0% { opacity: 0; transform: translateY(6px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export default function ContactForm() {
  const [values, setValues] = useState({
    name: '', email: '', phone: '', service: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, sent: false });

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!values.name || values.name.trim().length < 2) e.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Enter a valid email';
    if (values.phone && !/^[\d+\-\s()]{7,15}$/.test(values.phone)) e.phone = 'Enter a valid phone';
    if (!values.message || values.message.trim().length < 10) e.message = 'Min 10 characters';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus({ loading: true, sent: false });
    setTimeout(() => {
      setStatus({ loading: false, sent: true });
      // Reset if needed:
      // setValues({ name:'', email:'', phone:'', service:'', subject:'', message:'' });
    }, 900);
  };

  const fieldSx = {
    '& .MuiOutlinedInput-root': { bgcolor: '#f8fafc', borderRadius: 2 },
    '& .MuiOutlinedInput-root fieldset': { borderColor: '#e2e8f0' },
    '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#2563eb' },
    '& .MuiOutlinedInput-input': { pl: 0.5 },
  };

  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#fff',            // pure white background
        color: '#0b1220',
        // Compact vertical spacing; no 100vh
        py: { xs: 4, sm: 5 },       // top/bottom padding smaller
      }}
    >
      <Box
        sx={{
          width: { xs: '92vw', sm: '88vw', md: '82vw' },
          maxWidth: 980,            // not too wide
          mx: 'auto',
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 2.5, md: 3 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              animation: `${revealUp} .45s ease both`,
              fontSize: { xs: 24, sm: 28, md: 32 },
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            sx={{
              color: '#475569',
              maxWidth: 680,
              mx: 'auto',
              mt: 0.75,
              animation: `${revealUp} .5s ease .03s both`,
              fontSize: { xs: 13.5, sm: 14.5, md: 15.5 },
            }}
          >
            Have questions or need a quote? Fill out the form and we’ll get back to you.
          </Typography>
        </Box>

        {/* Form panel */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            bgcolor: '#fff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 24px rgba(2,6,23,.06)',  // lighter shadow
            borderRadius: 2,
            p: { xs: 2, sm: 3 },                       // compact padding
            animation: `${panelIn} .4s ease both`,
            mb: 0,                                      // no extra bottom space
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 1.5, sm: 2 },                 // tighter gaps
            }}
          >
            <TextField
              name="name" label="Your Name" value={values.name}
              onChange={onChange} error={!!errors.name} helperText={errors.name}
              required sx={fieldSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineRoundedIcon sx={{ color: '#2563eb' }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="email" label="Email" value={values.email}
              onChange={onChange} error={!!errors.email} helperText={errors.email}
              required sx={fieldSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon sx={{ color: '#2563eb' }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="phone" label="Phone (optional)" value={values.phone}
              onChange={onChange} error={!!errors.phone} helperText={errors.phone}
              sx={fieldSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIphoneOutlinedIcon sx={{ color: '#2563eb' }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="service" label="Service Interested In" value={values.service}
              onChange={onChange} select sx={fieldSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkOutlineOutlinedIcon sx={{ color: '#2563eb' }} />
                  </InputAdornment>
                ),
              }}
            >
              <MenuItem value=""></MenuItem>
              {SERVICE_OPTIONS.map((opt) => (
                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
              ))}
            </TextField>

            <TextField
              name="subject" label="Subject" value={values.subject} onChange={onChange}
              sx={{ ...fieldSx, gridColumn: { md: '1 / -1' } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkOutlineOutlinedIcon sx={{ color: '#2563eb' }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="message" label="Message" value={values.message} onChange={onChange}
              error={!!errors.message} helperText={errors.message}
              multiline minRows={4} required
              sx={{ ...fieldSx, gridColumn: { md: '1 / -1' } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                    <MessageOutlinedIcon sx={{ color: '#2563eb' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            sx={{
              mt: 2,                       // compact
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              flexWrap: 'wrap',
            }}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={status.loading}
              sx={{
                textTransform: 'none',
                fontWeight: 800,
                borderRadius: 999,
                px: 2.5,
                py: 1,
                bgcolor: '#2563eb',
                '&:hover': { bgcolor: '#1e40af' },
                boxShadow: '0 6px 16px rgba(37,99,235,.25)',
              }}
            >
              {status.loading ? 'Sending…' : 'Send Message'}
            </Button>

            {status.sent && (
              <Typography
                role="status"
                aria-live="polite"
                sx={{
                  fontWeight: 700,
                  bgcolor: '#d1fae5',
                  color: '#065f46',
                  border: '1px solid #a7f3d0',
                  px: 1.25,
                  py: 0.5,
                  borderRadius: 1.25,
                }}
              >
                Thanks! We’ll reach out shortly.
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}