import { type FC } from 'react';

type SvgProps = {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  className?: string;
};

export const CrossIcon: FC<SvgProps> = ({ width = 17, height = 18, stroke = '#C9C9C9', className }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 17 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path d='M1.01031 1.00002L15.0103 17' stroke={stroke} strokeWidth={2} strokeLinecap='round' />
    <path d='M15 1.00002L1 17' stroke={stroke} strokeWidth={2} strokeLinecap='round' />
  </svg>
);
