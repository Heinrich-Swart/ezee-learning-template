'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const maxShift = 50;
  const shift = Math.min(scrollY, maxShift);

  const maxFadeStart = 0;
  const maxFadeEnd = 50;
  const fade = Math.min(Math.max((scrollY - maxFadeStart) / (maxFadeEnd - maxFadeStart), 0), 1);

  return (
    <>
      {/* Hero with only the heading over the image */}
      <Box
        id="hero"
        sx={{
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#fff8ee',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          minHeight: '100vh',
        }}
      >
        {/* Background image fade-in */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: `linear-gradient(to bottom, rgba(255, 248, 238, 0) 70%, #fff8ee 100%), url('/cover-image2.0.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: fade,
            transition: 'opacity 0.6s ease-out',
            zIndex: 1,
          }}
        />

        {/* Only the heading here */}
        <Container
          sx={{
            position: 'relative',
            textAlign: 'center',
            transform: `translateY(-${shift}px)`,
            transition: 'transform 0.2s ease-out',
            maxWidth: { xs: '90%', sm: '70%' },
            zIndex: 2,
            pt: { xs: 8, sm: 12 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Ezee Learning
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
          Empowering Students for Success
          </Typography>
        </Container>
      </Box>

      {/* New white section below with the rest of the text */}
      <Box
        sx={{
          backgroundColor: '#fff8ee',
          py: { xs: 8, sm: 12 },
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={4} textAlign="center">
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                color: '#c29234',
              }}
            >
              Personalized Online Tutoring for Academic Excellence
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#3c2f1e',
              }}
            >
              We’re thrilled to have you here! At Ezee Learning, we believe that education should be flexible,
              empowering, and accessible to everyone. That’s why we offer a fully self-paced, online American Curriculum program
              tailored to suit your lifestyle.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
