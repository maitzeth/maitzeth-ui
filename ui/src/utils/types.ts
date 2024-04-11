import { generateSpacingToken } from './index';
import { devices } from './constants';

/**
 * This alias essentially gives you a union type containing all the value types from the properties.
*
* @public
*/
export type ValuesOf<T> = T[keyof T];

/**
 * This alias is useful in scenarios where you want to explicitly represent the keys of an object type.
*
* @public
*/
export type KeysOf<T> = keyof T;

/**
 * This type alias is useful for scenarios where a value can be explicitly set to null.
 *
 * @public
*/
export type Maybe<T> = T | null;

/**
 * This type alias is commonly used to indicate that a particular property or variable may or may not have a value assigned to it.
 *
 * @public
 */
export type Optional<T> = T | undefined;

/**
 * This type alias receive additional properties, including a className to allow for custom styling.
 *
 * @public
*/
export type PropsWithClassName<T = unknown> = T & {
  className?: string;
};

/**
 * This type alias that creates a new type identical to T, ensuring that each property remains the same
 * and possibly guards against unwanted augmentation or modification of the type.
 *
 * @public
*/
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * it maps string keys representing sizes ('small' and 'large')
 * to their respective abbreviations ('sm' and 'lg').
 * @public
 */
export const sizeMap: Record<string, string> = {
  xsmall: `@media only screen and ${devices.xs}`,
  small: `@media only screen and ${devices.sm}`,
  medium: `@media only screen and ${devices.md}`,
  large: `@media only screen and ${devices.lg}`,
} as const;

/**
 * This type it is useful in scenarios where you need to represent responsive behavior for a given property.
 *
 * @public
*/
export interface Responsive<T> {
  xsmall?: T,
  small?: T,
  medium?: T,
  large?: T
};

/**
 * This type alias might be useful in scenarios where you need to specify directionality, horizontal and vertical.
 *
 * @public
*/
export type Directions = 'h' | 'v';

/**
 * Serves as a handy tool for managing and standardizing spacing values within all my projects
 *
 * @public
*/
export const sizesMap = {
  "0": "0rem",
  "4": "1rem",
  "8": "2rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "28": "7rem",
  "32": "8rem",
  "36": "9rem",
  "40": "10rem",
  "44": "11rem",
  "48": "12rem",
  "52": "13rem",
  "56": "14rem",
  "60": "15rem",
  "64": "16rem",
  "68": "17rem",
  "72": "18rem",
  "76": "19rem",
  "80": "20rem",
  "84": "21rem",
  "88": "22rem",
  "92": "23rem",
  "96": "24rem",
  "px": "1px",
  "0.5": "0.125rem",
  "1.5": "0.375rem",
  "2.5": "0.625rem",
  "3.5": "0.875rem"
} as const;
