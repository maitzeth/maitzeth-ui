import { PropsWithChildren } from 'react';
import { cn } from '../utils';
import { Directions, PropsWithClassName, Responsive, sizeMap, sizesMap, KeysOf } from '../utils/types';
import { styled, css } from 'styled-components';
import type { SupportedHTMLElements } from 'styled-components';

type DirectionProps = Responsive<Directions>;
type GapProps = Responsive<KeysOf<typeof sizesMap>>;

type Props = {
  as?: SupportedHTMLElements;
  direction: DirectionProps;
  gap?: GapProps,
} & PropsWithClassName & PropsWithChildren;

type StyledType = {
  $direction: DirectionProps;
  $gap: GapProps;
};

const generateDirectionCN = (directions: DirectionProps) => {
  const flexMap: Record<string, string> = {
    h: 'flex-direction: row',
    v: 'flex-direction: column',
  };

  let classNames = [];

  Object.entries(directions).forEach(([size, direction]) => {
    const responsiveSize = sizeMap[size];
    const directionRule = flexMap[direction];
    if (directionRule && responsiveSize) {

      classNames.push(`
        ${responsiveSize} {
          ${directionRule};
        }
      `);
    }
  });

  return css`${classNames.join('')}`;
}

const generateGapCN = (gap: GapProps) => {
  let classNames = [];

  Object.entries(gap).forEach(([size, gapSize]) => {
    const gapValue = sizesMap[gapSize];
    const responsiveSize = sizeMap[size];

    if (gapValue && responsiveSize) {

      classNames.push(`
        ${responsiveSize} {
          gap: ${gapValue};
        }
      `);
    }
  });

  return css`${classNames.join('')}`;
}

const StyledStack = styled.div<StyledType>`
  display: flex;

  ${props => generateDirectionCN(props.$direction)}
  ${props => generateGapCN(props.$gap)}
`;

export const Stack = (props: Props) => {
  const { as, children, direction, className, gap, ...rest } = props;
  const Component = as || 'div';

  const classNames = cn(className);

  return (
    <StyledStack
      as={Component}
      className={classNames}
      $direction={direction}
      $gap={gap}
      {...rest}
    >
      {children}
    </StyledStack>
  );
};
