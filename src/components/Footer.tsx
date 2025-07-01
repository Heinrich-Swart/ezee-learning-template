'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import EzeeLearningLogo from './EzeeLearningLogo';
import FacebookIcon from '@mui/icons-material/Facebook';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = React.useState('');

  const handleNewsletterSubmit = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail);

    if (!isValidEmail) {
      toast.error('Please enter a valid email.');
      return;
    }

    const templateParams = {
      email: newsletterEmail,
    };

    emailjs.send(
      'ezeelearn-email-service',
      'ezeelearn-emailcontact',
      templateParams,
      'JCzjDGZdOwADwXbqF'
    ).then(() => {
      toast.success('Thanks! We will contact you soon.');
      setNewsletterEmail('');
    }).catch((err) => {
      console.error(err);
      toast.error('There was an error. Please try again later.');
    });
  };

  return (
    <Box sx={{ color: '#000' }}>
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        py: 4,
        textAlign: 'center',
      }}
    >
      <EzeeLearningLogo />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mt: 1,
        }}
      >
        Start your kids{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          FUTURE
        </Box>
      </Typography>
  
      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
        <TextField
          id="email-newsletter"
          hiddenLabel
          size="small"
          variant="outlined"
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
          placeholder="Your email address"
          slotProps={{
            htmlInput: {
              autoComplete: 'off',
              'aria-label': 'Enter your email address',
            },
          }}
          sx={{ width: '250px' }}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleNewsletterSubmit}
        >
          Join the team
        </Button>
      </Stack>
  
        <Typography
          sx={{
            mt: 1,
            fontSize: {
              xs: '0.9rem',
              sm: '1rem',
              md: '1.05rem'
            }
          }}
        >
          <strong>By clicking &quot;Join the team&quot; you invest in your kid’s future.</strong><br />
          Need help? Contact us at <Link href="mailto:ezeelearningcentre@outlook.com">ezeelearningcentre@outlook.com</Link> or <Link href="tel:+27823022371">+27 82 302 2371</Link>
        </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
          pt: 2,
          mt: 2,
        }}
      >
          <Stack direction="row" spacing={1} sx={{ mb: { xs: 1, sm: 0 } }}>
            <Link
              color="text.secondary"
              variant="body2"
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
            <Typography sx={{ opacity: 0.5 }}>&bull;</Typography>
            <Link
              color="text.secondary"
              variant="body2"
              href="/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </Link>
          </Stack>
  
        <Stack direction="row" spacing={1}>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.instagram.com/ezee.learning.centre/"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.facebook.com/profile.php?id=61576121303663"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Box>
  
      <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
        © EzeeLearning {new Date().getFullYear()}
      </Typography>
    </Container>
  </Box>
  
  );
}
