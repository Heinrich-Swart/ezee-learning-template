'use client'

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EzeeLearningLogo from './EzeeLearningLogo';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 80;
  
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <EzeeLearningLogo />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="text"
                size="small"
                sx={{ color: 'black' }}
                onClick={() => scrollToSection('programme-overview')}
              >
                Programme Overview
              </Button>
              <Button
                variant="text"
                size="small"
                sx={{ color: 'black' }}
                onClick={() => scrollToSection('testimonials')}
              >
                Testimonials
              </Button>
              <Button
                variant="text"
                size="small"
                sx={{ color: 'black' }}
                onClick={() => scrollToSection('our-promise')}
              >
                Our Promise
              </Button>
              <Button
                variant="text"
                size="small"
                sx={{ color: 'black' }}
                onClick={() => scrollToSection('pricing')}
              >
                Pricing
              </Button>
              <Button
                variant="text"
                size="small"
                sx={{ color: 'black' }}
                onClick={() => scrollToSection('faq')}
              >
                FAQ
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem onClick={() => scrollToSection('programme-overview')}>Programme Overview</MenuItem>
                <MenuItem onClick={() => scrollToSection('testimonials')}>Testimonials</MenuItem>
                <MenuItem onClick={() => scrollToSection('our-promise')}>Our Promise</MenuItem>
                <MenuItem onClick={() => scrollToSection('pricing')}>Pricing</MenuItem>
                <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                <Divider sx={{ my: 3 }} />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
