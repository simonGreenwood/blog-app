import { Link } from "react-router-dom";
const Navbar = () => {
  const navItemStyle = {
    padding: 5
  }
  return (
    <div className="navbar">
      <Link to="/" style={navItemStyle}>Blog App</Link>
      <Link to="/create" style={navItemStyle}>Create Blog</Link>
      <Link to="/login" style={navItemStyle}>Login</Link>
    </div>
  );
}
export default Navbar