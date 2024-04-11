import {
  forwardRef,
  HTMLAttributes,
  createElement,
  PropsWithChildren,
} from 'react';
import { PropsWithClassName } from '../utils/types';
import { devices, breakpoints } from '../utils/constants';
import { styled } from 'styled-components';

type AsProp = 'main' | 'section' | 'div';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: AsProp;
};

type Props = PropsWithChildren<PropsWithClassName<ContainerProps>>

const defaultElement = 'div';

const ContainerRaw = forwardRef<HTMLElement, Props>((props, ref) => {
  const { as, children, className, ...rest } = props;
  const Element = as || defaultElement;

  // Render the specified HTML element with its props and children
  return createElement(
    Element,
    {
      ...rest,
      ref,
      className,
    }, 
    children
  );
});

export const Container = styled(ContainerRaw)`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media only screen and ${devices.sm} {
    max-width: ${breakpoints.sm};
  }

  @media only screen and ${devices.md} {
    max-width: ${breakpoints.md};
  }

  @media only screen and ${devices.lg} {
    max-width: ${breakpoints.lg};
  }
`;
