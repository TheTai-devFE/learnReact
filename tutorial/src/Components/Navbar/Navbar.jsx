import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeNavbar = {
    color: "white",
    background: "#003A57",
    borderRadius: "8px",
    padding: "10px 20px",
    border: "2px solid #fff",
  };
  return (
    <div className="navbar">
      <h1>Header</h1>
      <div className="links">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeNavbar : {})}
        >
          Home
        </NavLink>
        <NavLink
          to="/create"
          style={({ isActive }) => (isActive ? activeNavbar : {})}
        >
          New Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
