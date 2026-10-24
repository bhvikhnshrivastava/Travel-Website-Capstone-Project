import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ALL_HOTELS } from '../utils/mockData';
import HotelCard from '../components/HotelCard';
import { IconHeart } from '../components/Icons';

const Favorites = () => {
    const wishlist = useSelector(state => state.favorites.items);
    const savedHotels = ALL_HOTELS.filter(h => wishlist.includes(h.id));
    
    return (
        <div className="page-enter pt-32 pb-24 max-w-7xl mx-auto px-6 min-h-screen bg-brand-sand">
            <div className="flex justify-between items-end mb-12 border-b border-brand-navy/10 pb-8">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy">Your Wishlist</h1>
                <span className="text-brand-gray text-xs font-bold uppercase tracking-widest">{savedHotels.length} Properties</span>
            </div>
            {savedHotels.length === 0 ? (
                <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-brand-navy/20 flex flex-col items-center">
                    <div className="w-24 h-24 mb-6 text-gray-200"><IconHeart filled={false} size={96} /></div>
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">Your wishlist is empty</h2>
                    <Link to="/hotels" className="bg-brand-navy text-white font-bold py-4 px-10 rounded-xl hover:bg-brand-sunset transition-all duration-300 shadow-xl uppercase tracking-widest text-xs mt-4">Explore Hotels</Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {savedHotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)}
                </div>
            )}
        </div>
    );
};
export default Favorites;