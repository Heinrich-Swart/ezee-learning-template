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
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  TextField,
  IconButton,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { toast } from 'react-toastify';

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
          {subheader && (
            <Chip
              icon={<AutoAwesomeIcon />}
              label={subheader}
              color="secondary"
              variant="outlined"
            />
          )}
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

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    number: '',
    plan: '',
    additionalInfo: '',
  })

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = () => {
    const { name, surname, email, plan } = form;

    if (!name || !surname || !email || !plan) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Simulate success
    toast.success("Your request has been submitted! We'll be in touch.");
    handleDialogClose();

    // Optional: Reset form
    setForm({
      name: '',
      surname: '',
      email: '',
      number: '',
      plan: '',
      additionalInfo: '',
    });
  };

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
        <Box sx={{ flex: '1 1 320px', maxWidth: 360, mt: 22 }}>
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
      <Box sx={{ mt: 6 }}>
        <Button variant="contained" size="large" onClick={handleDialogOpen}>
          Let's get chatting
        </Button>
      </Box>
      <Dialog open={open} onClose={handleDialogClose} fullWidth maxWidth="sm">
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          Contact Form

          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Name"
              required
              value={form.name}
              onChange={handleChange('name')}
            />
            <TextField
              label="Surname"
              required
              value={form.surname}
              onChange={handleChange('surname')}
            />
            <TextField
              label="Email"
              required
              type="email"
              value={form.email}
              onChange={handleChange('email')}
            />
            <TextField
              label="Phone Number"
              type="tel"
              value={form.number}
              onChange={handleChange('number')}
            />
            <TextField
              label="Type of Plan"
              required
              select
              value={form.plan}
              onChange={handleChange('plan')}
            >
              <MenuItem value="Centre Fees">Centre Fees</MenuItem>
              <MenuItem value="Exams">Exams</MenuItem>
              <MenuItem value="Practice Tests">Practice Tests</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
            <TextField
              label="Message (Optional)"
              multiline
              rows={3}
              value={form.additionalInfo}
              onChange={handleChange('message')}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3, justifyContent: 'center' }}>
          <Button variant="contained" size="medium" onClick={handleSubmit}>
            Contact us
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
}
