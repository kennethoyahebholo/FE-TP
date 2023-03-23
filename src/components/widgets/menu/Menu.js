// import { motion } from "framer-motion";

const Path = (props) => {
  return (
    <path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 25%, 95%)"
      strokeLinecap="round"
      {...props}
    />
  );
};

const Menu = ({ toggle }) => (
  <button className="lg:hidden" onClick={() => toggle()}>
    <svg width="20" height="20" viewBox="0 0 20 20">
      <Path
        variants={{
          closed: { d: "M 2 3.5 L 20 3.5" },
          open: { d: "M 3 16.5 L 17 3.5" },
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 3.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export default Menu;
