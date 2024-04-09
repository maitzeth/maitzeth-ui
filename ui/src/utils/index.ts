import classNames, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};
