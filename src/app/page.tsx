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
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import Container from '@mui/material/Container';

//MUI
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import NavBar from '@/components/NavBar';

export default function EzeeLearingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <NavBar />
      <Hero />
      <div>
        {/* <LogoCollection /> */}
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
        <Footer />
      </div>
    </AppTheme>
  );
}
