'use client'

import { createTheme, alpha, PaletteMode, Shadows } from '@mui/material/styles';

// Extend MUI theme types

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}

declare module '@mui/material/styles' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PaletteColor extends ColorRange {} // Intentional alias for clarity in theme overrides

  interface Palette {
    baseShadow: string;
  }
}

const defaultTheme = createTheme();
const customShadows: Shadows = [...defaultTheme.shadows];

// BRAND COLORS
export const gold = {
  50: '#FFF9E6',
  100: '#FDEDBB',
  200: '#FBE5A6',
  300: '#F3CD62',
  400: '#D4AF37',
  500: '#B38F12',
  600: '#A67C00',
  700: '#8B6C00',
  800: '#5C4600',
  900: '#3A2C00',
};

export const orange = {
  50: '#FFF3E0',
  100: '#FFE0B2',
  200: '#FFCC80',
  300: '#FFB74D',
  400: '#FFA726',
  500: '#FF9800',
  600: '#FB8C00',
  700: '#F57C00',
  800: '#EF6C00',
  900: '#E65100',
};

export const brand = gold;

export const red = {
  50: '#FFECEC',
  100: '#FFCFCF',
  200: '#FFA9A9',
  300: '#FF7A7A',
  400: '#D72638',
  500: '#B61E2D',
  600: '#9E1A29',
  700: '#861521',
  800: '#620F18',
  900: '#400A10',
};

export const gray = {
  50: '#F9FAFB',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827',
};

export const green = {
  50: '#E8F5E9',
  100: '#C8E6C9',
  200: '#A5D6A7',
  300: '#81C784',
  400: '#66BB6A',
  500: '#4CAF50',
  600: '#43A047',
  700: '#388E3C',
  800: '#2E7D32',
  900: '#1B5E20',
};

export const getDesignTokens = (mode: PaletteMode) => {
  
  customShadows[1] =
    mode === 'dark'
      ? 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
      : 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';

  return {
    palette: {
      mode,
      primary: {
        light: gold[200],
        main: gold[400],
        dark: gold[700],
        contrastText: '#ffffff',
      },
      secondary: {
        light: red[200],
        main: red[400],
        dark: red[700],
        contrastText: '#ffffff',
      },
      grey: { ...gray },
      divider: mode === 'dark' ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
      background: {
        default: mode === 'dark' ? gray[900] : '#FDFDFD',
        paper: mode === 'dark' ? gray[800] : gray[50],
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : gray[900],
        secondary: mode === 'dark' ? gray[400] : gray[600],
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: alpha(gray[200], 0.3),
      },
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
    },
    shape: {
      borderRadius: 8,
    },
    shadows: customShadows,
  };
};

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: gold[200],
        main: gold[400],
        dark: gold[700],
        contrastText: '#ffffff',
      },
      secondary: {
        light: red[200],
        main: red[400],
        dark: red[700],
        contrastText: '#ffffff',
      },
      background: {
        default: '#FFF9E6', // light gold background
        paper: '#FFFFFF',   // white for paper elements
      },
      text: {
        primary: gray[900],
        secondary: gray[600],
      },
      divider: alpha(gray[300], 0.4),
      baseShadow:
        'hsla(220, 30%, 5%, 0.07) 0px 4px 16px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
    },
  },
  dark: {
    palette: {
      primary: {
        light: gold[200],
        main: gold[400],
        dark: gold[700],
        contrastText: '#ffffff',
      },
      secondary: {
        light: red[200],
        main: red[400],
        dark: red[700],
        contrastText: '#ffffff',
      },
      background: {
        default: gray[900],
        paper: gray[800],
      },
      text: {
        primary: '#ffffff',
        secondary: gray[400],
      },
      divider: alpha(gray[700], 0.6),
      baseShadow:
        'hsla(220, 30%, 5%, 0.7) 0px 4px 16px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
    },
  },
};


export const typography = {
  fontFamily: 'Inter, sans-serif',
  h1: {
    fontSize: defaultTheme.typography.pxToRem(48),
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: defaultTheme.typography.pxToRem(36),
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: defaultTheme.typography.pxToRem(30),
    lineHeight: 1.2,
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 600,
  },
  h6: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18),
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 500,
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(14),
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 400,
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400,
  },
};

export const shape = {
  borderRadius: 8,
};

// @ts-expect-error -- 'var(--template-palette-baseShadow)' is not a valid string for MUI shadow type
const defaultShadows: Shadows = [
  'none',
  'var(--template-palette-baseShadow)',
  ...defaultTheme.shadows.slice(2),
];
export const shadows = defaultShadows;
