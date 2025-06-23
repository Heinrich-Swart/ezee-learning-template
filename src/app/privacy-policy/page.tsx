'use client'

import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

export default function PrivacyPolicyPage() {
  return (
    <Box sx={{ backgroundColor: '#fff9ec', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 4,
            fontSize: { xs: '2rem', sm: '2.5rem' },
          }}
        >
          Privacy Policy
        </Typography>

        <Typography paragraph sx={{ color: 'text.primary', mb: 2 }}>
          At EzeeLearning, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your information when you use our website and services.
        </Typography>

        <Section title="1. Information We Collect">
          We may collect personal information such as your name, email address, phone number, and other details when you sign up, contact us, or use our services.
        </Section>

        <Section title="2. How We Use Your Information">
          We use your information to respond to inquiries, provide educational services, send updates, and improve our platform. We do not sell your data to third parties.
        </Section>

        <Section title="3. Cookies">
          Our website may use cookies to enhance user experience. You can disable cookies in your browser settings if you prefer not to share this data.
        </Section>

        <Section title="4. Data Protection">
          We take security measures to protect your information against unauthorized access, alteration, or disclosure. However, no online system is completely secure.
        </Section>

        <Section title="5. Third-Party Services">
          We may use third-party tools (e.g., analytics, payment processors) that may collect limited information to support our services.
        </Section>

        <Section title="6. Your Rights">
          You have the right to access, update, or request deletion of your personal data. To exercise your rights, contact us at the address below.
        </Section>

        <Section title="7. Contact Us">
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <Link
            href="mailto:support@ezeelearning.co.za"
            sx={{ color: 'primary.main', fontWeight: 500 }}
          >
            support@ezeelearning.co.za
          </Link>.
        </Section>

        <Typography variant="body2" sx={{ mt: 6, color: 'text.secondary' }}>
          Last updated: June 2025
        </Typography>
      </Container>
    </Box>
  );
}

// Reusable Section Component
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          mt: 4,
          mb: 1,
          color: 'text.primary',
        }}
      >
        {title}
      </Typography>
      <Typography paragraph sx={{ color: 'text.primary' }}>{children}</Typography>
    </>
  );
}
