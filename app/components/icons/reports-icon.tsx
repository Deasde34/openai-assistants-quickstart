import React from 'react';

type Props = {
  fill?: string;
  className?: string;
  width?: number;
  height?: number;
};

const ReportIcon: React.FC<Props> = ({
  fill = 'none',
  className = '',
  width = 20,
  height = 21,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 21"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
	<path
		d="M13.9136 2.3689L7.13633 2.3689C4.19248 2.3689 2.4375 4.12388 2.4375 7.06773L2.4375 13.837C2.4375 16.7889 4.19248 18.5439 7.13633 18.5439H13.9056C16.8494 18.5439 18.6044 16.7889 18.6044 13.845V7.06773C18.6125 4.12388 16.8575 2.3689 13.9136 2.3689ZM8.8347 13.845C8.8347 14.3626 8.41415 14.7832 7.88847 14.7832C7.37087 14.7832 6.95032 14.3626 6.95032 13.845L6.95032 11.2085C6.95032 10.6909 7.37087 10.2704 7.88847 10.2704C8.41415 10.2704 8.8347 10.6909 8.8347 11.2085L8.8347 13.845ZM14.0997 13.845C14.0997 14.3626 13.6791 14.7832 13.1615 14.7832C12.6358 14.7832 12.2153 14.3626 12.2153 13.845L12.2153 7.06773C12.2153 6.55013 12.6358 6.12958 13.1615 6.12958C13.6791 6.12958 14.0997 6.55013 14.0997 7.06773L14.0997 13.845Z"
		fill="#898989"
	/>

  </svg>
);

export default ReportIcon;