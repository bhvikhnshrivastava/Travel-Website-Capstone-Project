import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHeart, FaHotel, FaBlog, FaPlane } from 'react-icons/fa';

const Header = () => {
  const count = useSelector((s) => s.favorites.items.length);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2 tracking-tight">
          <FaPlane className="text-accent" /> Wanderlust
        </Link>
        <ul className="flex gap-8 items-center font-medium text-gray-600">
          <NavLink to="/" className={({isActive}) => isActive ? "text-accent" : "hover:text-accent transition-colors"}>
            Blogs
          </NavLink>
          <NavLink to="/hotels" className={({isActive}) => isActive ? "text-accent" : "hover:text-accent transition-colors"}>
            Hotels
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-accent" : "hover:text-accent transition-colors"}>
            About
          </NavLink>
          <NavLink to="/favorites" className="relative p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
            <FaHeart className={count > 0 ? "text-red-500" : "text-gray-400"} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                {count}
              </span>
            )}
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;