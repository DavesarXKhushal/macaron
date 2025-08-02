import { recipe } from '@vanilla-extract/recipes';
import type { RoopProperties } from './types';

/**
 * विकल्प (Vikalp) - Variant utilities for RangRoop
 */

// सामान्य विकल्प (Common Variants)
export const samanyaVikalp = {
  /** आकार विकल्प (Size variants) */
  akar: {
    xs: { fontSize: '12px', padding: '4px 8px' },
    sm: { fontSize: '14px', padding: '6px 12px' },
    md: { fontSize: '16px', padding: '8px 16px' },
    lg: { fontSize: '18px', padding: '12px 24px' },
    xl: { fontSize: '20px', padding: '16px 32px' },
  },

  /** रंग विकल्प (Color variants) */
  rang: {
    mukhya: { 
      backgroundColor: '#3b82f6', 
      color: 'white',
      ':hover': { backgroundColor: '#2563eb' }
    },
    dwitiyak: { 
      backgroundColor: '#8b5cf6', 
      color: 'white',
      ':hover': { backgroundColor: '#7c3aed' }
    },
    safalta: { 
      backgroundColor: '#10b981', 
      color: 'white',
      ':hover': { backgroundColor: '#059669' }
    },
    khatara: { 
      backgroundColor: '#ef4444', 
      color: 'white',
      ':hover': { backgroundColor: '#dc2626' }
    },
    saaf: { 
      backgroundColor: 'transparent', 
      color: '#374151',
      border: '1px solid #d1d5db',
      ':hover': { backgroundColor: '#f9fafb' }
    },
  },

  /** गोलाई विकल्प (Rounded variants) */
  golai: {
    none: { borderRadius: '0' },
    sm: { borderRadius: '4px' },
    md: { borderRadius: '8px' },
    lg: { borderRadius: '12px' },
    xl: { borderRadius: '16px' },
    purn: { borderRadius: '9999px' }, // पूर्ण = full/complete
  },
};

/**
 * विकल्प बनाएं (Create Variant) - Helper to create custom variant recipes
 */
export function vikalpBanaye<T extends Record<string, Record<string, RoopProperties>>>(
  config: {
    aadhar?: RoopProperties;
    vikalp: T;
    mukhyaVikalp?: { [K in keyof T]?: keyof T[K] };
  }
) {
  return recipe({
    base: config.aadhar || {},
    variants: config.vikalp,
    defaultVariants: config.mukhyaVikalp || {},
  });
}

/**
 * मिश्रित विकल्प (Compound Variants) - For complex variant combinations
 */
export function mishritVikalp<T extends Record<string, Record<string, RoopProperties>>>(
  baseConfig: {
    aadhar?: RoopProperties;
    vikalp: T;
  },
  compoundVariants: Array<{
    conditions: { [K in keyof T]?: keyof T[K] };
    style: RoopProperties;
  }>
) {
  return recipe({
    base: baseConfig.aadhar || {},
    variants: baseConfig.vikalp,
    compoundVariants: compoundVariants.map(cv => ({
      variants: cv.conditions,
      style: cv.style,
    })),
  });
}
