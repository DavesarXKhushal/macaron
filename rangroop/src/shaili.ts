import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import React from 'react';
import type { ShailIConfig, VikapConfig } from './types';

/**
 * शैली (Shaili) - Create styled components with Hindi terminology
 * Usage: const Button = shaili('button', { aadhar: {...}, vikalp: {...} })
 */
export function shaili<T extends keyof JSX.IntrinsicElements>(
  element: T,
  config: ShailIConfig = {}
) {
  const { aadhar = {}, vikalp = {}, mukhyaVikalp = {} } = config;

  // Create recipe for variants
  const recipeStyles = recipe({
    base: style(aadhar),
    variants: vikalp,
    defaultVariants: mukhyaVikalp
  });

  // Create the styled component
  const StyledComponent = React.forwardRef<
    HTMLElement,
    JSX.IntrinsicElements[T] & VikapConfig<typeof vikalp>
  >((props, ref) => {
    const { className, ...restProps } = props;
    const variantProps = extractVariantProps(props, vikalp);
    const elementProps = removeVariantProps(restProps, vikalp);

    const combinedClassName = [
      recipeStyles(variantProps),
      className
    ].filter(Boolean).join(' ');

    return React.createElement(element, {
      ...elementProps,
      className: combinedClassName,
      ref
    });
  });

  StyledComponent.displayName = `Shaili(${element})`;
  return StyledComponent;
}

// Helper functions
function extractVariantProps(props: any, variants: any) {
  const variantProps: any = {};
  Object.keys(variants).forEach(key => {
    if (key in props) {
      variantProps[key] = props[key];
    }
  });
  return variantProps;
}

function removeVariantProps(props: any, variants: any) {
  const elementProps = { ...props };
  Object.keys(variants).forEach(key => {
    delete elementProps[key];
  });
  return elementProps;
}
