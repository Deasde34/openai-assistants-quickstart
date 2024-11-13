import React from 'react';

type Props = {
  fill?: string;
  className?: string;
  width?: number;
  height?: number;
};

const DocumentsIcon: React.FC<Props> = ({
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
		d="M13.5982 2.60046C13.2666 2.26887 12.6924 2.49532 12.6924 2.95631V5.77884C12.6924 6.95962 13.6952 7.9382 14.9164 7.9382C15.6848 7.94629 16.7523 7.94629 17.6662 7.94629C18.1272 7.94629 18.3698 7.40443 18.0463 7.08093C16.8817 5.90824 14.7951 3.79741 13.5982 2.60046Z"
		fill={fill}
	/>
	<path
		d="M17.399 9.05456H15.0617C13.145 9.05456 11.5841 7.49368 11.5841 5.57694V3.23966C11.5841 2.79485 11.2202 2.43091 10.7754 2.43091L7.34628 2.43091C4.85534 2.43091 2.84155 4.04841 2.84155 6.93564L2.84155 14.1012C2.84155 16.9884 4.85534 18.6059 7.34628 18.6059H13.703C16.194 18.6059 18.2078 16.9884 18.2078 14.1012V9.86331C18.2078 9.4185 17.8438 9.05456 17.399 9.05456ZM10.1203 15.1687H6.8853C6.55371 15.1687 6.27873 14.8937 6.27873 14.5621C6.27873 14.2306 6.55371 13.9556 6.8853 13.9556H10.1203C10.4519 13.9556 10.7269 14.2306 10.7269 14.5621C10.7269 14.8937 10.4519 15.1687 10.1203 15.1687ZM11.7378 11.9337L6.8853 11.9337C6.55371 11.9337 6.27873 11.6587 6.27873 11.3271C6.27873 10.9956 6.55371 10.7206 6.8853 10.7206L11.7378 10.7206C12.0694 10.7206 12.3443 10.9956 12.3443 11.3271C12.3443 11.6587 12.0694 11.9337 11.7378 11.9337Z"
		fill={fill}
	/>

  </svg>
);

export default DocumentsIcon;