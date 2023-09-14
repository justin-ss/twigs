import React, { FunctionComponent } from 'react';
import { CSS, VariantProps } from '@stitches/react';
import { styled, keyframes, config } from '../../stitches.config';
import { Box } from '../box';

const loaderSpin = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

const StyledContainer = styled(Box, {
  borderRadius: '100px',
  position: 'relative',
  overflow: 'hidden',

  '.outer-circle': {
    stroke: 'rgba(255, 255, 255, 0.15)',
    fill: 'none'
  },

  '.inner-circle': {
    stroke: '#fff',
    fill: 'none',
    transformOrigin: '50% 50%',
    animation: `${loaderSpin} 0.8s infinite linear`
  },

  svg: {
    width: '100%',
    height: '100%',
    display: 'block'
  },

  variants: {
    size: {
      xs: {
        height: '8px',
        width: '8px'
      },
      sm: {
        height: '10px',
        width: '10px'
      },
      md: {
        height: '12px',
        width: '12px'
      },
      lg: {
        height: '16px',
        width: '16px'
      },
      xl: {
        height: '40px',
        width: '40px'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

export type CircleLoaderProps = VariantProps<typeof StyledContainer> &
  React.HTMLAttributes<HTMLDivElement> & {
    containerCSS?: CSS<typeof config>;
    containerRef?: React.RefObject<HTMLDivElement>;
  };

export const CircleLoader: FunctionComponent<CircleLoaderProps> = ({
  containerCSS,
  containerRef,
  ...props
}) => {
  const circumference = 2 * Math.PI * 6;

  return (
    <StyledContainer
      data-testid="circle-loader"
      {...props}
      css={{
        ...containerCSS
      }}
      ref={containerRef}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="5" strokeWidth="2" className="outer-circle" />
        <circle
          cx="6"
          cy="6"
          r="5"
          strokeWidth="2"
          className="inner-circle"
          strokeDasharray={`${circumference / 4} ${circumference}`}
        />
      </svg>
    </StyledContainer>
  );
};