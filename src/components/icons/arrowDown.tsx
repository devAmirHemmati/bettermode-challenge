import { IIconProps } from '.';

interface IProps extends IIconProps {
  rotate?: boolean;
}

function ArrowDownIcon({
  width = '24px',
  height = '24px',
  color = 'currentColor',
  style = {},
  rotate,
  ...props
}: IProps) {
  return (
    <svg
      id="arrow-down"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{ transform: `${rotate ? 'rotate(180deg)' : ''}`, ...style }}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="arrow-down-2"
        data-name="arrow-down"
        transform="translate(-236 -252)"
      >
        <path
          id="Vector"
          d="M15.84,0,9.32,6.52a1.986,1.986,0,0,1-2.8,0L0,0"
          transform="translate(240.08 260.95)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,0H24V24H0Z"
          transform="translate(260 276) rotate(180)"
          fill="none"
          opacity="0"
        />
      </g>
    </svg>
  );
}

export default ArrowDownIcon;
