import React from 'react';

type Props = {
  fill?: string;
  className?: string;
  width?: number;
  height?: number;
};

const EmployeeIcon: React.FC<Props> = ({
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
		d="M10.5247 10.5804C12.758 10.5804 14.5684 8.76996 14.5684 6.53666C14.5684 4.30337 12.758 2.49292 10.5247 2.49292C8.2914 2.49292 6.48096 4.30337 6.48096 6.53666C6.48096 8.76996 8.2914 10.5804 10.5247 10.5804Z"
		fill={fill}
	/>
	<path
		d="M10.5249 12.6021C6.47303 12.6021 3.17334 15.3194 3.17334 18.6677C3.17334 18.8941 3.35126 19.072 3.57771 19.072H17.472C17.6985 19.072 17.8764 18.8941 17.8764 18.6677C17.8764 15.3194 14.5767 12.6021 10.5249 12.6021Z"
		fill={fill}
	/>

  </svg>
);

export default EmployeeIcon;