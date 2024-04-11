import classNames, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

/**
 * UTILITY
 * Combines class names provided as arguments and merges them with Tailwind CSS class names
 * producing a single string of class names suitable for applying to HTML elements for styling.
 *
 * @public
 */
export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
} as const;

export const devices = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`
};

