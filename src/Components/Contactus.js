import React, { useState } from 'react';
import {
  Box,
  Dialog,
  Slide,
  Typography,
  IconButton,
  TextField,
  Button,
  Stack,
  InputAdornment,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ContactUsModal({ open, onClose, onSubmit }) {
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const change = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Enter a valid email';
    if (values.phone && !/^[\d+\-\s()]{7,15}$/.test(values.phone)) e.phone = 'Enter a valid phone';
    if (!values.message.trim() || values.message.trim().length < 10) e.message = 'Message must be 10+ characters';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setSending(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '5086a787-47c0-416a-8498-f6751f82a234', // ✅ your Web3Forms key
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Message sent successfully!');
        setValues({ name: '', email: '', phone: '', message: '' });
        onSubmit?.(values);
        onClose?.();
      } else {
        alert('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('⚠️ An error occurred while sending the message.');
    } finally {
      setSending(false);
    }
  };

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      bgcolor: '#f7f8fb',
      borderRadius: 2,
    },
    '& .MuiOutlinedInput-root fieldset': { borderColor: '#e5e7eb' },
    '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1e40af' },
    '& .MuiOutlinedInput-input': { pl: 0.5 },
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      maxWidth="sm"
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: { xs: 0, sm: 3 },
          p: { xs: 2.5, sm: 3.5 },
          boxShadow: { xs: 'none', sm: '0 24px 60px rgba(2,6,23,.18)' },
          overflow: 'visible',
        },
      }}
    >
      {/* Close button */}
      <IconButton
        aria-label="Close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          bgcolor: '#f2f4f7',
          '&:hover': { bgcolor: '#e6e9ef' },
          width: 36,
          height: 36,
          borderRadius: 2,
        }}
      >
        <CloseRoundedIcon />
      </IconButton>

      {/* Header */}
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            letterSpacing: 0.2,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box sx={{ width: 8, height: 28, bgcolor: '#1e40af', borderRadius: 1 }} />
          Contact Us
        </Typography>
      </Box>

      {/* Form */}
      <Box component="form" onSubmit={submit}>
        <Stack spacing={2}>
          <TextField
            name="name"
            label="Name"
            value={values.name}
            onChange={change}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            sx={fieldSx}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineRoundedIcon sx={{ color: '#1e40af' }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="email"
            label="Email"
            value={values.email}
            onChange={change}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            sx={fieldSx}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: '#1e40af' }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="phone"
            label="Phone (optional)"
            value={values.phone}
            onChange={change}
            error={!!errors.phone}
            helperText={errors.phone}
            fullWidth
            sx={fieldSx}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIphoneOutlinedIcon sx={{ color: '#1e40af' }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="message"
            label="Message"
            value={values.message}
            onChange={change}
            error={!!errors.message}
            helperText={errors.message}
            fullWidth
            multiline
            minRows={4}
            sx={fieldSx}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                  <MessageOutlinedIcon sx={{ color: '#1e40af' }} />
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={sending}
            sx={{
              mt: 0.5,
              textTransform: 'none',
              fontWeight: 800,
              borderRadius: 2,
              py: 1.3,
              bgcolor: '#0b74de',
              '&:hover': { bgcolor: '#095db4' },
              boxShadow: '0 10px 24px rgba(11,116,222,.28)',
            }}
          >
            {sending ? 'Sending…' : 'Send Message'}
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
}
