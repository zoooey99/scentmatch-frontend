
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-playfair text-2xl font-semibold">
          ScentMatch
        </Link>
        <div className="flex gap-8">
          <Link to="/" className="hover:text-lavender-200 transition-colors">Home</Link>
          <Link to="/dashboard" className="hover:text-lavender-200 transition-colors">Dashboard</Link>
          <Link to="/scents" className="hover:text-lavender-200 transition-colors">My Scents</Link>
          <button className="hover:text-lavender-200 transition-colors">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
