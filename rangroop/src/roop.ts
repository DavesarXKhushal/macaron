import { style as vanillaStyle, styleVariants } from '@vanilla-extract/css';
import type { RoopProperties, RoopVariantsConfig } from './types';

/**
 * रूप (Roop) - Create style classes
 * Usage: const className = roop({ rang: 'blue', padding: '10px' })
 */
export function roop(properties: RoopProperties): string {
  return vanillaStyle(properties);
}

/**
 * रूपविकल्प (RoopVikalp) - Create style variants
 * Usage: const classes = roopVikalp({ primary: {...}, secondary: {...} })
 */
export function roopVikalp<T extends RoopVariantsConfig>(
  variants: T
): { [K in keyof T]: string } {
  return styleVariants(variants);
}

/**
 * सरल रूप (Saral Roop) - Simple style helper for common patterns
 */
export const saralRoop = {
  /** केंद्र (center) - Center content */
  kendr: () => roop({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),

  /** छाया (shadow) - Add shadow */
  chhaya: (size: 'small' | 'medium' | 'large' = 'medium') => {
    const shadows = {
      small: '0 2px 4px rgba(0,0,0,0.1)',
      medium: '0 4px 8px rgba(0,0,0,0.15)',
      large: '0 8px 16px rgba(0,0,0,0.2)'
    };
    return roop({ boxShadow: shadows[size] });
  },

  /** गोल (round) - Round corners */
  gol: (radius: string = '8px') => roop({
    borderRadius: radius
  }),

  /** पूर्ण चौड़ाई (full width) */
  purnChaudai: () => roop({
    width: '100%'
  })
};
