import { styled } from 'styled-components';

type Props = {
  width: number | '100%';
  height: number;
  rounded?: boolean;
  theme: 'light' | 'dark';
};

type StyledProps = {
  $width: Props['width'];
  $height: Props['height'];
  $rounded?: Props['rounded'];
  $theme?: Props['theme'];
};

const StyledSkeleton = styled.div<StyledProps>`
  animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite;
  background-color: ${
    props => props.$theme === 'light' ? 'rgba(250, 250, 250, 0.1)' : 'rgba(0, 0, 0, 0.1)'
  };
  border-radius: ${props => props.$rounded ? '100%' : '6px'};

  width: ${props => props.$width === '100%' ? '100%' : `${props.$width}px`};
  height: ${props => props.$height}px;

  @keyframes pulse {
    50% {
      opacity: .5;
    }
  }
`;

export const Skeleton = ({ width, height, rounded, theme }: Props) => {
  return (
    <StyledSkeleton
      $width={width}
      $height={height}
      $rounded={rounded}
      $theme={theme}
    />
  );
};

