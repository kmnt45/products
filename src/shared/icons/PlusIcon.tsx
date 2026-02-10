import { type FC } from 'react';

type SvgProps = {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  className?: string;
};

export const PlusIcon: FC<SvgProps> = ({ width = 24, height = 24, stroke = 'white', className }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path d='M12 5V19' stroke={stroke} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 12H19' stroke={stroke} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
