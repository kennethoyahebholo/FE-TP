import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={to}
      className={`${
        pathname === to
          ? "text-primary border-b-2 border-b-primary font-bold"
          : "text-white hover:text-primary"
      } pb-px px-1 text-base`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
