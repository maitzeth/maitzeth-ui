import classNames, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names provided as arguments and merges them with Tailwind CSS class names
 * producing a single string of class names suitable for applying to HTML elements for styling.
 *
 * @public
 */
export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};

