import React, { createElement } from 'react';
import { cn } from '../utils';
import { Directions, GapProps, PropsWithClassName, Responsive, sizeMap } from '../utils/types';

type DirectionProps = Responsive<Directions>;

type Props<T extends React.ElementType = 'div'> = {
  as?: T;
  direction: DirectionProps;
  gap?: GapProps,
} & Omit<React.ComponentPropsWithRef<T>, 'as'> & PropsWithClassName;

const directionCNGenerator = (sizes: DirectionProps) => {
  const flexMap: Record<string, string> = {
    h: 'row',
    v: 'col',
  };

  let classNames = ['flex'];

  Object.entries(sizes).forEach(([size, direction]) => {
    if (flexMap[direction]) {
      const responsiveSize = sizeMap[size];

      classNames.push(`${responsiveSize.length > 0 ? `${responsiveSize}:` : ''}flex-${flexMap[direction]}`);
    }
  });

  return classNames.join(' ');
};

const gapCNGenerator = (gap: GapProps) => {
  let classNames = [''];

  Object.entries(gap).forEach(([size, value]) => {
    const responsiveSize = sizeMap[size];
    classNames.push(`${responsiveSize.length > 0 ? `${responsiveSize}:` : ''}gap-${value}`);
  });

  return classNames.join(' ');
};

export const Stack = <T extends React.ElementType = 'div'>(props: Props<T>) => {
  const { as, children, direction, gap, className, ...rest } = props;
  const Component = as || 'div';

  const directionClassName = directionCNGenerator(direction);
  const gapClassName = gapCNGenerator(gap);

  const classNames = cn(directionClassName, gapClassName, className);

  return createElement(
    Component,
    {
      className: classNames,
      ...rest
    },
    children
  );
};
