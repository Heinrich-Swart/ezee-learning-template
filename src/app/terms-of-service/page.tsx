'use client'

import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

export default function TermsOfServicePage() {
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
          Terms of Service
        </Typography>

        <Typography paragraph sx={{ color: 'text.primary', mb: 2 }}>
          Welcome to EzeeLearning. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
        </Typography>

        <Section title="1. Use of Service">
          You may use our services only as permitted by law and in accordance with these terms. You must not misuse our services or interfere with their operation.
        </Section>

        <Section title="2. User Responsibilities">
          You are responsible for maintaining the confidentiality of your account information. You agree to provide accurate and complete information during registration or when using any of our features.
        </Section>

        <Section title="3. Intellectual Property">
          All content, materials, and logos on our site are the intellectual property of EzeeLearning. You may not reproduce, distribute, or use them without permission.
        </Section>

        <Section title="4. Modifications">
          We reserve the right to modify or discontinue our services at any time. Changes to these Terms will be posted on this page. Continued use of the site means acceptance of those changes.
        </Section>

        <Section title="5. Termination">
          We may suspend or terminate your access to the site if you violate these Terms of Service or engage in behavior that we deem inappropriate or harmful.
        </Section>

        <Section title="6. Limitation of Liability">
          We are not liable for any damages or losses resulting from the use of our services. All services are provided &quot;as is&quot; without warranty of any kind.
        </Section>

        <Section title="7. Contact">
          If you have any questions about these terms, please contact us at{' '}
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
