import { IIconProps } from '.';

function BackIcon({
  color = '#171717',
  height = '26px',
  width = '26px',
  ...props
}: IIconProps) {
  return (
    <svg
      id="arrow-left"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="arrow-left-2"
        data-name="arrow-left"
        transform="translate(-684 -188)"
      >
        <path
          id="Vector"
          d="M6.07,0,0,6.07l6.07,6.07"
          transform="translate(687.5 193.93)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M16.83,0H0"
          transform="translate(687.67 200)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M0,0H24V24H0Z"
          transform="translate(708 212) rotate(180)"
          fill="none"
          opacity="0"
        />
      </g>
    </svg>
  );
}

export default BackIcon;
