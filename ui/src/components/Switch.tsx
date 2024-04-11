import { motion } from 'framer-motion';
import { Fragment, forwardRef } from 'react';
import { css, styled } from 'styled-components';
import { KeysOf } from '../utils/types';

const ACTIVE_COLOR = '#082f49';
const INACTIVE_COLOR = '#e2e8f0';

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

const sizeClass = {
  [sizes.sm]: `
    width: 50px;
    height: 25px;
    padding: 1.5px;
  `,
  [sizes.md]: `
    width: 70px;
    height: 36px;
    padding: 2px;
  `, 
  [sizes.lg]: `
    width: 85px;
    height: 42px;
    padding: 2.5px;
  `
} as const;

const controlSizeClass = {
  [sizes.sm]: `
    width: 20px;
    height: 20px;
  `,
  [sizes.md]: `
    width: 30px;
    height: 30px;
  `,
  [sizes.lg]: `
    width: 35px;
    height: 35px;
  `,
} as const;

type StyledTypes = {
  $active: boolean;
  $size: KeysOf<typeof sizes>;
};

type Props = {
  size?: keyof typeof sizes;
  sizeClassName?: string;
  controlClassName?: string;
  onChange: () => void;
  active: boolean;
};

const StyledButton = styled.button<StyledTypes>`
  display: flex;
  background-color: rgba(255,255,255,0.4);
  justify-content: flex-start;
  cursor: pointer;
  border: 1px solid rgb(229 231 235);
  transition: all 150ms ease;
  border-radius: 50px;

  &:focus-visible {
    outline-color: ${ACTIVE_COLOR};
    outline-offset: 0px;
    outline-width: 1px;
  }

  ${props => props.$active && css`
    justify-content: flex-end;
  `}

  ${props => props.$size && css`${sizeClass[props.$size]}`}
`;

const StyledControl = styled(motion.div)<StyledTypes>`
  background-color: rgb(229 231 235);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;

  ${props => props.$active && css`
    background-color: ${ACTIVE_COLOR};
  `}

  ${props => props.$size && css`${controlSizeClass[props.$size]}`}
`;

const StyledIcon = styled(motion.path)<Pick<StyledTypes, '$active'>>`
  fill: ${ACTIVE_COLOR};

  ${props => props.$active && css`
    fill: ${INACTIVE_COLOR};
  `}
`;

export const Switch = forwardRef<HTMLButtonElement, Props>(({
  size = 'md',
  sizeClassName,
  controlClassName,
  onChange,
  active
}, ref) => {
  return (
    <StyledButton
      type="button"
      role="switch"
      aria-checked={active ? 'true' : 'false'}
      ref={ref}
      $active={active}
      $size={size}
      onClick={onChange}
      className={sizeClassName}
    >
      <StyledControl
        $size={size}
        $active={active}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35
        }}
        className={controlClassName}
      >
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          {active && (
            <Fragment>
              <StyledIcon
                initial={{ rotateY: 180 }}
                animate={{ rotateY: 0 }}
                transition={{ delay: 0.1 }}
                $active
                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
              />
              <StyledIcon
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                $active
                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
              />
            </Fragment>
          )}

          {!active && (
            <Fragment>
              <StyledIcon
                initial={{ opacity: 0, rotate: 360 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.4 }}
                $active={false}
                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
              />
              <StyledIcon
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                $active={false}
                className="fill-sky-950" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
              />
            </Fragment>
          )}
        </svg>
      </StyledControl>
    </StyledButton>
  );
});
