import { type FC } from 'react';

type SvgProps = {
  width?: number | string;
  height?: number | string;
  stroke?: string;
  className?: string;
  onClick?: () => void;
};

export const EyeIcon: FC<SvgProps> = ({ width = 24, height = 24, stroke = '#9c9c9c', className, onClick }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <path
      d='M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z'
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx='12' cy='12' r='3' stroke={stroke} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
