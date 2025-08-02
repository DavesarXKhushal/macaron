import type { CSSProperties } from '@vanilla-extract/css';

/**
 * रंगरूप Types - Type definitions for the library
 */

// रूप गुण (Style Properties) 
export type RoopProperties = CSSProperties;

// रूप विकल्प (Style Variants)
export type RoopVariantsConfig = Record<string, RoopProperties>;

// शैली कॉन्फ़िग (Styled Config)
export interface ShailIConfig {
  /** आधार (base) - Base styles */
  aadhar?: RoopProperties;
  /** विकल्प (variants) - Style variants */
  vikalp?: Record<string, Record<string, RoopProperties>>;
  /** मुख्य विकल्प (default variants) */
  mukhyaVikalp?: Record<string, string>;
}

// विकल्प कॉन्फ़िग (Variant Config)
export type VikapConfig<T> = T extends Record<string, Record<string, any>>
  ? {
      [K in keyof T]?: keyof T[K];
    }
  : {};

// रंग पैमाना (Color Scale)
export interface RangPaimana {
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

// थीम कॉन्फ़िग (Theme Config)
export interface ThemeConfig {
  rang: {
    mukhya: RangPaimana;
    dwitiyak: RangPaimana;
    akaryatmak: {
      safalta: string;
      chetavani: string;
      khatara: string;
      jankari: string;
    };
  };
  sthan: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  akar: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// घटक गुण (Component Props)
export interface GhatakProps {
  /** कक्षा (className) */
  className?: string;
  /** बच्चे (children) */
  children?: React.ReactNode;
}
