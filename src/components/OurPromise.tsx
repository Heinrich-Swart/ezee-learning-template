'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';

const items = [
  {
    icon: <AccessTimeRoundedIcon />,
    title: 'Flexible Learning',
    description:
      "Learn anytime, anywhere with a schedule that fits your family's lifestyle and your child's pace.",
  },
  {
    icon: <SchoolRoundedIcon />,
    title: 'Curriculum-Aligned',
    description:
      "Our lessons are tailored to align with academic standards while remaining engaging and easy to follow.",
  },
  {
    icon: <LiveTvRoundedIcon />,
    title: 'Interactive Classes',
    description:
      "Live sessions led by qualified tutors make learning fun, personal, and effective.",
  },
  {
    icon: <GroupsRoundedIcon />,
    title: 'Supportive Community',
    description:
      "Join a vibrant learning community with parent groups, peer interaction, and collaborative growth.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Dedicated Support',
    description:
      "Our friendly team is always ready to assist with technical help, academic queries, or general guidance.",
  },
  {
    icon: <EmojiEventsRoundedIcon />,
    title: 'Trackable Progress',
    description:
      "Stay on top of your child's journey with clear reports, milestone tracking, and continuous feedback.",
  },
];

export default function OurPromise() {
  return (
    <Box
      id="ourPromise"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Our Promise
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            At Ezee Learning Centre, we&rsquo;re committed to delivering quality education that&rsquo;s flexible,
            accessible, and effective. From expert support and engaging content to a user-friendly experience —
            every detail is designed to help your child succeed, wherever they are.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
