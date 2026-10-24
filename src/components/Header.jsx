import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrency } from '../redux/actions';
import { BrandLogo } from './Icons';
import { FaHeart } from 'react-icons/fa';

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const wishlistCount = useSelector(state => state.favorites.items.length);
    const currency = useSelector(state => state.currency);
    
    const isStories = location.pathname === '/' || location.pathname.startsWith('/blog');
    const isHotels = location.pathname === '/hotels' || location.pathname.startsWith('/hotel') || location.pathname.startsWith('/checkout');
    const isAbout = location.pathname === '/about';

    return (
        <header className="fixed w-full top-0 z-50 bg-brand-sand/95 backdrop-blur-md border-b border-brand-navy/10 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-32 grid grid-cols-3 items-center">
                <nav className="flex gap-8 justify-start items-center">
                    <Link to="/" className={`text-xs font-bold uppercase tracking-[0.15em] cursor-pointer transition-all duration-300 relative group hover:-translate-y-0.5 ${isStories ? 'text-brand-sunset' : 'text-brand-navy hover:text-brand-sunset'}`}>
                        Stories
                        <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand-sunset transition-all duration-300 ${isStories ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                    <Link to="/hotels" className={`text-xs font-bold uppercase tracking-[0.15em] cursor-pointer transition-all duration-300 relative group hover:-translate-y-0.5 ${isHotels ? 'text-brand-sunset' : 'text-brand-navy hover:text-brand-sunset'}`}>
                        Hotels
                        <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand-sunset transition-all duration-300 ${isHotels ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                    <Link to="/about" className={`text-xs font-bold uppercase tracking-[0.15em] cursor-pointer transition-all duration-300 relative group hover:-translate-y-0.5 ${isAbout ? 'text-brand-sunset' : 'text-brand-navy hover:text-brand-sunset'}`}>
                        About
                        <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand-sunset transition-all duration-300 ${isAbout ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                </nav>
                
                <Link to="/" className="flex justify-center cursor-pointer transition-transform duration-500 hover:scale-105 hover:opacity-90">
                    <BrandLogo scale={0.9} />
                </Link>
                
                <div className="flex justify-end items-center gap-4">
                    <div className="flex bg-white rounded-full border-2 border-brand-navy/10 p-1 transition-shadow duration-300 hover:shadow-md">
                        <button onClick={() => dispatch(setCurrency('EUR'))} className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${currency === 'EUR' ? 'bg-brand-navy text-white shadow-md' : 'text-brand-navy hover:bg-slate-100'}`}>EUR</button>
                        <button onClick={() => dispatch(setCurrency('INR'))} className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${currency === 'INR' ? 'bg-brand-navy text-white shadow-md' : 'text-brand-navy hover:bg-slate-100'}`}>INR</button>
                    </div>
                    <Link to="/favorites" className="relative flex items-center gap-3 px-5 py-2.5 rounded-full border-2 border-brand-navy/10 hover:border-brand-sunset transition-all duration-300 bg-white group shadow-sm hover:shadow-md hover:-translate-y-0.5">
                        <span className="text-brand-navy group-hover:text-brand-sunset transition-colors duration-300"><FaHeart className="text-red-500 text-lg transition-transform duration-300 group-hover:scale-110" /></span>
                        <span className="text-xs font-bold text-brand-navy uppercase tracking-widest hidden md:block group-hover:text-brand-sunset transition-colors duration-300">Wishlist</span>
                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-brand-sunset text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-lg border-2 border-white animate-pop-in">{wishlistCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;