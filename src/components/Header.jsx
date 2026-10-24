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
    
    const isStories = ['/', '/blog'].some(path => location.pathname.startsWith(path));
    const isHotels = ['/hotels', '/hotel', '/checkout'].some(path => location.pathname.startsWith(path));

    return (
        <header className="fixed w-full top-0 z-50 bg-brand-sand/95 backdrop-blur-md border-b border-brand-navy/10 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-32 grid grid-cols-3 items-center">
                <nav className="flex gap-8 justify-start items-center">
                    <Link to="/" className={`text-xs font-bold uppercase tracking-[0.15em] cursor-pointer transition-colors relative ${isStories ? 'text-brand-sunset' : 'text-brand-navy hover:text-brand-sunset'}`}>
                        Stories
                        {isStories && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-sunset"></span>}
                    </Link>
                    <Link to="/hotels" className={`text-xs font-bold uppercase tracking-[0.15em] cursor-pointer transition-colors relative ${isHotels ? 'text-brand-sunset' : 'text-brand-navy hover:text-brand-sunset'}`}>
                        Hotels
                        {isHotels && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-sunset"></span>}
                    </Link>
                    <Link to="/about" className="text-xs font-bold uppercase tracking-[0.15em] cursor-pointer transition-colors relative text-brand-navy hover:text-brand-sunset">
                        About
                    </Link>
                </nav>
                
                <Link to="/" className="flex justify-center cursor-pointer group hover:opacity-90 transition-opacity">
                    <BrandLogo scale={0.9} />
                </Link>
                
                <div className="flex justify-end items-center gap-4">
                    <div className="flex bg-white rounded-full border-2 border-brand-navy/10 p-1">
                        <button onClick={() => dispatch(setCurrency('EUR'))} className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${currency === 'EUR' ? 'bg-brand-navy text-white' : 'text-brand-navy hover:bg-slate-100'}`}>EUR</button>
                        <button onClick={() => dispatch(setCurrency('INR'))} className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${currency === 'INR' ? 'bg-brand-navy text-white' : 'text-brand-navy hover:bg-slate-100'}`}>INR</button>
                    </div>
                    <Link to="/favorites" className="relative flex items-center gap-3 px-5 py-2.5 rounded-full border-2 border-brand-navy/10 hover:border-brand-sunset cursor-pointer transition-all bg-white group shadow-sm">
                        <span className="text-brand-navy group-hover:text-brand-sunset transition-colors"><FaHeart className="text-red-500 text-lg" /></span>
                        <span className="text-xs font-bold text-brand-navy uppercase tracking-widest hidden md:block group-hover:text-brand-sunset transition-colors">Wishlist</span>
                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-brand-sunset text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-lg border-2 border-white">{wishlistCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};
export default Header;