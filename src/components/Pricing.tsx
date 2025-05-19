'use client'

import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
  Chip,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const cards = {
   centerTop: {
    title: 'Centre Fees',
    price: 'R1 800',
    timespan: 'once-off',
    subheader: 'Most Popular',
    description: [
      'Includes access to learning platform',
      'Tutor support & weekly check-ins',
      'Study materials included',
    ],
  },
   centerBottom: {
    title: 'Exams',
    price: 'R1500',
    timespan: 'per subject',
    subheader: 'Most Popular',
    description: [
      '4 GED subjects in total',
      'Exams written at Pearson VUE centers',
      'Book per subject when ready',
    ],
  },
  right: {
    title: 'Practice Tests',
    price: 'R150',
    timespan: 'per subject',
    description: [
      'Optional mock tests before real exam',
      'Immediate feedback & results',
    ],
  },
  left: {
    title: 'Once-off Fees',
    price: 'Varies',
    timespan: 'per subject',
    description: [
      'GED Licence Fee (once-off)',
      'Registration Fee (initial sign-up)',
    ],
  },
};

function PricingCard({ title, price, timespan, description, subheader }: any) {
  return (
    <Card sx={{ p: 3, flex: 1 }}>
      <CardContent>
        <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography component="h3" variant="h6">
            {title}
          </Typography>
          {subheader && <Chip icon={<AutoAwesomeIcon />} label={subheader} />}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
          <Typography component="h3" variant="h2">
            {price}
          </Typography>
          <Typography component="h3" variant="h6">&nbsp;{timespan}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        {description.map((line: string) => (
          <Box key={line} sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}>
            <CheckCircleRoundedIcon sx={{ width: 20, color: 'primary.main' }} />
            <Typography variant="subtitle2" component="span">
              {line}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
      }}
    >
      <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' } }}>
        <Typography component="h2" variant="h4" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Explore flexible learning plans designed to fit every family's needs. Whether you're just getting started or looking for full support, our packages offer quality education, live classes, and helpful resources—all at an affordable price.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          width: '100%',
        }}
      >
        {/* Left Tall Card */}
        <Box sx={{ flex: '1 1 320px', maxWidth: 360, mt: 22}}>
          <PricingCard {...cards.left} />
        </Box>

        {/* Center Block (Stacked but merged visually) */}
        <Box
          sx={{
            flex: '1 1 320px',
            maxWidth: 360,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <PricingCard {...cards.centerTop} />
          <PricingCard {...cards.centerBottom} />
        </Box>

        {/* Right Tall Card */}
        <Box sx={{ flex: '1 1 320px', maxWidth: 360, mt: 22 }}>
          <PricingCard {...cards.right} />
        </Box>
      </Box>
      
    </Container>
  );
}
