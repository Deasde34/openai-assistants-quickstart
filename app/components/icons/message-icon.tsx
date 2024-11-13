import React from 'react';

type Props = {
  fill?: string;
  className?: string;
  width?: number;
  height?: number;
};

const MessageIcon: React.FC<Props> = ({
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
		d="M13.7487 1.85059L5.66118 1.85059C3.42903 1.85059 1.61743 3.6541 1.61743 5.87815L1.61743 10.7145V11.5232C1.61743 13.7473 3.42903 15.5508 5.66118 15.5508H6.8743C7.09266 15.5508 7.38381 15.6964 7.5213 15.8743L8.73442 17.4837C9.26819 18.1954 10.1416 18.1954 10.6754 17.4837L11.8885 15.8743C12.0422 15.6721 12.2848 15.5508 12.5355 15.5508H13.7487C15.9808 15.5508 17.7924 13.7473 17.7924 11.5232V5.87815C17.7924 3.6541 15.9808 1.85059 13.7487 1.85059ZM10.5137 11.3534L5.66118 11.3534C5.32959 11.3534 5.05461 11.0784 5.05461 10.7468C5.05461 10.4152 5.32959 10.1403 5.66118 10.1403L10.5137 10.1403C10.8453 10.1403 11.1202 10.4152 11.1202 10.7468C11.1202 11.0784 10.8453 11.3534 10.5137 11.3534ZM13.7487 7.30964L5.66118 7.30964C5.32959 7.30964 5.05461 7.03467 5.05461 6.70308C5.05461 6.37149 5.32959 6.09652 5.66118 6.09652L13.7487 6.09652C14.0802 6.09652 14.3552 6.37149 14.3552 6.70308C14.3552 7.03467 14.0802 7.30964 13.7487 7.30964Z"
		fill={fill}
	/>

  </svg>
);

export default MessageIcon;