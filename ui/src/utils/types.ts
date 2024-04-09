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
