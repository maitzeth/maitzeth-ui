import classNames, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

/**
 * UTILITY
 * Combines class names provided as arguments and merges them with Tailwind CSS class names
 * producing a single string of class names suitable for applying to HTML elements for styling.
 * Also remove duplicated classnames
 *
 * @public
 */
export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};

export function generateSpacingToken() {
  const spacingToken: Record<string, string> = {};
  
  for (let i = 0; i <= 96; i += 4) {
    spacingToken[i] = `${i / 4}rem`;
  }

  spacingToken[1] = '1px';
  spacingToken[0.5] = '0.125rem';
  spacingToken[1.5] = '0.375rem';
  spacingToken[2.5] = '0.625rem';
  spacingToken[3.5] = '0.875rem';

  return spacingToken;
}

