const SvgTPFacebookIcon = ({ size, color, className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M32 16.0972C32 7.26064 24.8366 0.0972042 16 0.0972042C7.16344 0.0972042 0 7.26064 0 16.0972C0 24.0833 5.85097 30.7025 13.5 31.9028V20.7222H9.4375V16.0972H13.5V12.5722C13.5 8.5622 15.8887 6.3472 19.5434 6.3472C21.294 6.3472 23.125 6.6597 23.125 6.6597V10.5972H21.1074C19.1198 10.5972 18.5 11.8305 18.5 13.0959V16.0972H22.9375L22.2281 20.7222H18.5V31.9028C26.149 30.7025 32 24.0833 32 16.0972Z"
        fill="#2A2A2B"
      />
    </svg>
  );
};
SvgTPFacebookIcon.defaultProps = {
  size: 32,
  color: "currentColor" || "none",
};
export default SvgTPFacebookIcon;
