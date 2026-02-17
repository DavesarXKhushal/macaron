import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

/**
 * रंग (Rang) - Color system for RangRoop
 */

// रंग अनुबंध (Color Contract)
export const rangAnubandh = createThemeContract({
  rang: {
    // मुख्य रंग (Primary Colors)
    mukhya: {
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },
    // द्वितीयक रंग (Secondary Colors)
    dwitiyak: {
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },
    // अकार्यात्मक रंग (Semantic Colors)
    akaryatmak: {
      safalta: null,     // सफलता (success)
      chetavani: null,   // चेतावनी (warning)  
      khatara: null,     // खतरा (danger)
      jankari: null,     // जानकारी (info)
    }
  },
  // स्थान (Space/Spacing)
  sthan: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
  },
  // आकार (Sizes)
  akar: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  }
});

// उजला थीम (Light Theme)
export const ujlaTheme = createGlobalTheme(':root', rangAnubandh, {
  rang: {
    mukhya: {
      50: '#f0f9ff',
      100: '#e0f2fe', 
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    dwitiyak: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },
    akaryatmak: {
      safalta: '#10b981',
      chetavani: '#f59e0b', 
      khatara: '#ef4444',
      jankari: '#3b82f6',
    }
  },
  sthan: {
    xs: '4px',
    sm: '8px', 
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },
  akar: {
    xs: '20px',
    sm: '24px',
    md: '28px', 
    lg: '32px',
    xl: '36px',
  }
});

// अंधेरा थीम (Dark Theme) - Modern dark colors
export const andheraTheme = createTheme(rangAnubandh, {
  rang: {
    mukhya: {
      50: '#0a0e1a',
      100: '#0f172a',
      200: '#1e293b', 
      300: '#334155',
      400: '#475569',
      500: '#64748b',
      600: '#94a3b8',
      700: '#cbd5e1',
      800: '#e2e8f0',
      900: '#f1f5f9',
    },
    dwitiyak: {
      50: '#1a0a1a',
      100: '#2d1b3d',
      200: '#4c1d95',
      300: '#6d28d9',
      400: '#8b5cf6',
      500: '#a78bfa',
      600: '#c4b5fd',
      700: '#ddd6fe',
      800: '#ede9fe',
      900: '#f5f3ff',
    },
    akaryatmak: {
      safalta: '#34d399',
      chetavani: '#fbbf24',
      khatara: '#f87171', 
      jankari: '#60a5fa',
    }
  },
  sthan: {
    xs: '4px',
    sm: '8px',
    md: '16px', 
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },
  akar: {
    xs: '20px',
    sm: '24px',
    md: '28px',
    lg: '32px', 
    xl: '36px',
  }
});

/**
 * रंग सहायक (Color Helpers)
 */
export const rangSahayak = {
  /** पारदर्शिता (transparency) */
  pardarshita: (color: string, alpha: number) => {
    // Convert hex to rgba
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);  
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },

  /** ग्रेडिएंट (gradient) */
  gradient: (from: string, to: string, direction = '45deg') => 
    `linear-gradient(${direction}, ${from}, ${to})`,
};
