'use client';

import * as React from 'react';
import {
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

const items = [
  {
    icon: <SchoolRoundedIcon fontSize="medium" />,
    title: 'One-on-one Tutoring',
    description: 'Get personalized support from a certified teacher through one-on-one online tutoring.',
    imageLight: '/one-on-one.png',
  },
  {
    icon: <ChecklistRoundedIcon fontSize="medium" />,
    title: 'Exam Preparation',
    description: 'Access structured resources and tutoring sessions to help you prepare confidently for American Curriculum exams.',
    imageLight: '/exam-prep.png',
  },
  {
    icon: <AccessTimeRoundedIcon fontSize="medium" />,
    title: 'Self-Paced Program',
    description: 'Study anytime, anywhere. Access all learning materials immediately after registration, 24/7 on any device.',
    imageLight: '/self-paced.png',
  },
  {
    icon: <AutoFixHighRoundedIcon fontSize="medium" />,
    title: 'Personalized Learning Path',
    description: 'Start with a placement test. Let AI guide your study journey by focusing only on areas you need to improve.',
    imageLight: '/learning-path.png',
  },
  {
    icon: <MenuBookRoundedIcon fontSize="medium" />,
    title: 'Multi-Format Learning',
    description: 'Learn through bite-sized videos, instant-feedback quizzes, and downloadable workbooks — all designed for mastery.',
    imageLight: '/multi-format-learning.png',
  },
];

export default function ProgrammeOverview() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const selectedFeature = items[selectedItemIndex];

  // Preload all images once on mount
  React.useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.imageLight;
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: '#FBE5A6', color: 'text.primary' }}>
      <Container sx={{ py: { xs: 8, sm: 16 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: 6 }}>
          <Typography component="h2" variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Ezee Learning Centre Help With
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            See how Ezee Learning Centre supports your child’s journey through American Curriculum: from exam preparation to
            personalized tutoring and a flexible online curriculum — all aligned with your goals.
          </Typography>
        </Box>

        {/* Main Layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'center',
          }}
        >
          {/* Image Section */}
          <Card
            sx={{
              width: '100%',
              maxWidth: 480,
              height: 360,
              mx: 'auto',
              borderRadius: 4,
              boxShadow: 3,
              overflow: 'hidden',
              backgroundColor: 'transparent',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${selectedFeature.imageLight})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </Card>

          {/* Feature List */}
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {items.map(({ icon, title, description }, index) => {
              const isSelected = selectedItemIndex === index;
              return (
                <Box
                  key={index}
                  onClick={() => setSelectedItemIndex(index)}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    cursor: 'pointer',
                    backgroundColor: isSelected ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                    transition: 'background 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ mt: '2px' }}>{icon}</Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: isSelected ? 'bold' : 'medium' }}>
                        {title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
