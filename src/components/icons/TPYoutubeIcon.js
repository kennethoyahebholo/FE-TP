const SvgTPYoutubeIcon = ({ size, color, className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M31.8313 4.27475C31.4633 2.89369 30.3791 1.80616 29.0022 1.43707C26.5067 0.766291 16.5 0.766291 16.5 0.766291C16.5 0.766291 6.49333 0.766291 3.9978 1.43707C2.62102 1.80616 1.53665 2.89369 1.16868 4.27475C0.5 6.77783 0.5 12.0003 0.5 12.0003C0.5 12.0003 0.5 17.2228 1.16868 19.7261C1.53665 21.107 2.62102 22.1945 3.9978 22.5637C6.49333 23.2344 16.5 23.2344 16.5 23.2344C16.5 23.2344 26.5067 23.2344 29.0022 22.5637C30.3791 22.1945 31.4633 21.107 31.8313 19.7261C32.5 17.2228 32.5 12.0003 32.5 12.0003C32.5 12.0003 32.5 6.77783 31.8313 4.27475Z"
        fill="#2A2A2B"
      />
      <path
        d="M13.2273 16.7422L21.5909 12.0008L13.2273 7.25893V16.7422Z"
        fill="#000001"
      />
    </svg>
  );
};
SvgTPYoutubeIcon.defaultProps = {
  size: 32,
  color: "currentColor" || "none",
};
export default SvgTPYoutubeIcon;
