import {
  forwardRef,
  HTMLAttributes,
  createElement,
  PropsWithChildren,
} from 'react';
import { PropsWithClassName } from '../utils/types';
import { cn } from '../utils';

type AsProp = 'main' | 'section' | 'div';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: AsProp;
};

type Props = PropsWithChildren<PropsWithClassName<ContainerProps>>

const defaultElement = 'div';

export const Container = forwardRef<HTMLElement, Props>((props, ref) => {
  const { as, children, className, ...rest } = props;
  const Element = as || defaultElement;

  // Render the specified HTML element with its props and children
  return createElement(
    Element,
    {
      ...rest,
      ref,
      className: cn('container px-4 mx-auto', className),
    }, 
    children
  );
});
