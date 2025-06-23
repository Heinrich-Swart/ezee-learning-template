'use client'

import * as React from 'react';
import FAQ from '@/components/FAQ';
import ProgrammeOverview from '@/components/programmeOverview';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import OurPromise from '@/components/OurPromise';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import AppTheme from '@/shared-theme/AppTheme';

//MUI
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import NavBar from '@/components/NavBar';
import MeetTheFounder from '@/components/MeetTheTeam';

export default function EzeeLearingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
    <CssBaseline enableColorScheme />

    <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      <NavBar />
      <Hero />
      <div>
        <div id="programme-overview">
          <ProgrammeOverview />
        </div>
        <Divider />
        <div id="testimonials">
          <Testimonials />
        </div>
        <Divider />
        <div id="our-promise">
          <OurPromise />
        </div>
        <Divider />
        <div id="pricing">
          <Pricing />
        </div>
        <Divider />
        <div id="faq">
          <FAQ />
        </div>
        <Divider />
        <div id="founder">
          <MeetTheFounder />
        </div>
        <Divider />
        <Footer />
      </div>
    </div>
  </AppTheme>
);
}