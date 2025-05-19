'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url('/welcome.svg')`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url('/welcome.svg')`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        {/* Welcome Message Section */}
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
        <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Welcome&nbsp;to&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              EzeeLearning
            </Typography>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We’re thrilled to have you here! At EzeeLearning, we believe that education should be
            flexible, empowering, and accessible to everyone. That’s why we offer a fully self-paced,
            online GED program tailored to suit your lifestyle.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Whether you're a homeschooling student, a young adult seeking a high school equivalent,
            or someone ready to rewrite their future — you're in the right place.
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
            ✨ Why EzeeLearning?
          </Typography>
          <Stack spacing={1} sx={{ textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
            <Typography>• SAQA-Recognized GED Program – Equivalent to Grade 12 in South Africa</Typography>
            <Typography>• Study Anytime, Anywhere – Access your learning portal 24/7 on any device</Typography>
            <Typography>• One-on-One Tutoring Support – Work with certified teachers who care</Typography>
            <Typography>• Smart Learning Paths – Let AI help you focus on what matters most</Typography>
            <Typography>• Exam Prep Made Easy – With downloadable workbooks, quizzes, and videos</Typography>
            <Typography>• Trusted Testing Centers – Write your GED at a Pearson VUE center near you</Typography>
          </Stack>
          <Typography variant="body1" color="text.secondary">
            You’ll receive all your study materials immediately after registration, and our dedicated
            support team is with you every step of the way — from your first login to your final test.
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            🎓 Ready to start your journey?
          </Typography>
          <Typography>
            Join hundreds of students achieving their dreams with EzeeLearning.
            <br />
            <strong>Learn @ Home. Learn with Confidence. Learn for Life.</strong>
          </Typography>
        </Stack>

        {/* Existing Section Below */}
        
      </Container>
    </Box>
  );
}