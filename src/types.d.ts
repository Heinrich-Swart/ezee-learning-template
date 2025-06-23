// src/types.d.ts
import 'next';

declare module 'next' {
  interface PageProps {
    disableCustomTheme?: boolean;
  }
}