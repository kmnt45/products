import { type FC } from 'react';

type SvgProps = {
  width?: number | string;
  height?: number | string;
  stroke?: string;
  className?: string;
};

export const UserIcon: FC<SvgProps> = ({ width = 24, height = 24, stroke = '#9c9c9c', className }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <circle cx='12' cy='7.25' r='4' stroke={stroke} strokeWidth={2} />
    <path
      d='M9 13.75H15C16.6569 13.75 18 15.0931 18 16.75V20.75H6V16.75C6 15.0931 7.34315 13.75 9 13.75Z'
      stroke={stroke}
      strokeWidth={2}
    />
  </svg>
);
