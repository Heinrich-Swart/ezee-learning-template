'use client';

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
import emailjs from 'emailjs-com';

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

type FormField = 'name' | 'surname' | 'email' | 'number';

interface FormData {
  name: string;
  surname: string;
  email: string;
  number: string;
  plan: string;
  additionalInfo: string;
}

function PricingCard({
  title,
  price,
  timespan,
  description,
  subheader,
}: {
  title: string;
  price: string;
  timespan: string;
  description: string[];
  subheader?: string;
}) {
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
        {description.map((line) => (
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
  const [form, setForm] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    number: '',
    plan: '',
    additionalInfo: '',
  });

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleChange = (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = () => {
    const { name, surname, email, number, plan, additionalInfo } = form;

    if (!name || !surname || !email || !plan) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    const templateParams = {
      name: `${name} ${surname}`,
      email: email,
      title: plan,
      message: `
A new enquiry has been submitted:

Name: ${name} ${surname}
Email: ${email}
Phone Number: ${number || 'Not provided'}
Selected Plan: ${plan}
Message: ${additionalInfo || 'No message entered'}
      `,
    };

    emailjs.send(
      'ezeelearn-email-service',
      'ezeelearn-pricing',
      templateParams,
      'JCzjDGZdOwADwXbqF'
    )
      .then(() => {
        toast.success('Your message was sent successfully!');
        handleDialogClose();
        setForm({
          name: '',
          surname: '',
          email: '',
          number: '',
          plan: '',
          additionalInfo: '',
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error('Failed to send your message. Please try again later.');
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
          Explore flexible learning plans designed to fit every family’s needs. Whether you’re just getting started or looking for full support, our packages offer quality education, live classes, and helpful resources—all at an affordable price.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: { xs: 'nowrap', md: 'wrap' },
          alignItems: 'stretch',
          justifyContent: 'center',
          gap: 4,
          width: '100%',
        }}
      >
        <Box sx={{ flex: '1 1 320px', maxWidth: 360, mt: { xs: 0, md: 22 } }}>
          <PricingCard {...cards.left} />
        </Box>

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

        <Box sx={{ flex: '1 1 320px', maxWidth: 360, mt: { xs: 0, md: 22 } }}>
          <PricingCard {...cards.right} />
        </Box>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Button variant="contained" size="large" onClick={handleDialogOpen}>
          Let’s get chatting
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
        <DialogContent sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            {(['name', 'surname', 'email', 'number'] as FormField[]).map((field) => (
              <TextField
                key={field}
                label={`${field.charAt(0).toUpperCase() + field.slice(1)}${field === 'name' ? ' *' : ''}`}
                value={form[field]}
                onChange={handleChange(field)}
                fullWidth
                type={field === 'email' ? 'email' : field === 'number' ? 'tel' : 'text'}
                sx={{
                  backgroundColor: '#fffbe6',
                  '& .MuiInputBase-root': { backgroundColor: '#fffbe6' },
                  '& .MuiInputLabel-root': {
                    backgroundColor: '#fffbe6',
                    padding: '0 4px',
                    zIndex: 1,
                  },
                }}
              />
            ))}

            <TextField
              label="Type of Plan"
              required
              select
              value={form.plan}
              onChange={handleChange('plan')}
              fullWidth
              sx={{
                backgroundColor: '#fffbe6',
                '& .MuiInputBase-root': { backgroundColor: '#fffbe6' },
                '& .MuiInputLabel-root': {
                  backgroundColor: '#fffbe6',
                  padding: '0 4px',
                  zIndex: 1,
                },
              }}
            >
              <MenuItem value="Centre Fees">Centre Fees</MenuItem>
              <MenuItem value="Exams">Exams</MenuItem>
              <MenuItem value="Practice Tests">Practice Tests</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>

            <TextField
              label="Message (Optional)"
              rows={3}
              value={form.additionalInfo}
              onChange={handleChange('additionalInfo')}
              fullWidth
              multiline
              sx={{
                backgroundColor: '#fffbe6',
                '& .MuiInputBase-root': { backgroundColor: '#fffbe6' },
                '& .MuiInputLabel-root': {
                  backgroundColor: '#fffbe6',
                  padding: '0 4px',
                  zIndex: 1,
                },
              }}
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
