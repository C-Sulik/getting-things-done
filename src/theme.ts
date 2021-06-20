import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  radius: { default: '0.8rem' },
  colors: {
    background: { hard: '#FF467D', normal: '#FF5F5F', easy: '#FE8368', easiest: '#FFB966' },
  },
  fontSize: {
    extraSmall: '1rem',
    small: '1.2rem',
    regular: '1.4rem',
    default: '1.6rem',
    medium: '1.8rem',
    large: '2.2rem',
    largest: '3rem',
  },
  opacity: {
    minimal: 0.1,
    medium: 0.4,
    regular: 0.6,
    small: 0.8,
  },
};
