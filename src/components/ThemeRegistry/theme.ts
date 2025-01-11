import { extendTheme } from '@mui/material/styles';
import { JetBrains_Mono } from 'next/font/google';

const jb_mono = JetBrains_Mono({
  subsets: ['latin'],
  adjustFontFallback: false,
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
  display: 'swap',
})

const theme = extendTheme({
  typography: {
    fontFamily: jb_mono.style.fontFamily,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#66ff66',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
          },
        },
      },
    },
  }
});

export default theme;
