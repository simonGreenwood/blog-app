import { Link } from "react-router-dom";
const Navbar = () => {
  const navItemStyle = {
    padding: 5
  }
  return (
    <div className="navbar">
      <Link to="/" style={navItemStyle}>Blog App</Link>
    </div>
  );
}
export default Navbar