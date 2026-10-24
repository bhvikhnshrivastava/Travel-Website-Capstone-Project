import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../redux/actions';
import { formatPrice, FALLBACK_IMG } from '../utils/mockData';
import { IconStar, IconPin, IconHeart, IconCouple, IconShield } from './Icons';

const HotelCard = ({ hotel }) => {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.favorites.items);
    const currency = useSelector(state => state.currency);
    const isSaved = wishlist.includes(hotel.id);
    const discount = Math.round((1 - (hotel.price / hotel.oldPrice)) * 100);
    
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out border border-brand-navy/10 flex flex-col group h-full hover:-translate-y-2">
            <div className="h-64 overflow-hidden relative shrink-0">
                <Link to={`/hotel/${hotel.id}`}>
                    <img src={hotel.img} onError={(e) => { e.target.src = FALLBACK_IMG; }} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                </Link>
                <div className="absolute top-4 left-4 bg-brand-sunset text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm uppercase tracking-wider transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Save {discount}%</div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-brand-navy px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-sm"><IconStar /> {hotel.rating}</div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                    <Link to={`/hotel/${hotel.id}`}>
                        <h3 className="font-serif text-2xl font-bold text-brand-navy mb-1 group-hover:text-brand-sunset transition-colors duration-300 line-clamp-1">{hotel.name}</h3>
                    </Link>
                    <p className="text-xs font-bold text-brand-gray flex items-center uppercase tracking-wider"><IconPin /> {hotel.city}, {hotel.country}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 my-3">
                    <span className="flex items-center text-[10px] font-bold text-brand-navy bg-brand-sand px-2 py-1 rounded-md border border-brand-navy/5"><IconCouple /> Couple Friendly</span>
                    <span className="flex items-center text-[10px] font-bold text-brand-navy bg-brand-sand px-2 py-1 rounded-md border border-brand-navy/5"><IconShield /> Free Cancel</span>
                </div>
                
                <p className="text-brand-gray text-sm leading-relaxed line-clamp-2 mt-2 mb-6 font-sans">{hotel.description}</p>
                
                <div className="mt-auto pt-4 border-t border-brand-navy/10 flex justify-between items-center">
                    <div>
                        <p className="text-xs text-brand-gray line-through mb-1 font-semibold">{formatPrice(hotel.oldPrice, currency)}</p>
                        <p className="text-2xl font-serif font-bold text-brand-navy">{formatPrice(hotel.price, currency)} <span className="text-xs font-sans font-normal text-brand-gray tracking-normal">/ night</span></p>
                    </div>
                    <button 
                        onClick={(e) => { e.preventDefault(); dispatch(toggleFavorite(hotel.id)); }} 
                        className={`p-3 rounded-full transition-all duration-300 active:scale-75 ${isSaved ? 'bg-red-50 text-red-500' : 'bg-brand-sand text-brand-gray hover:bg-brand-navy hover:text-white'}`}
                    >
                        <div className={isSaved ? 'animate-heart' : ''}>
                            <IconHeart filled={isSaved} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default HotelCard;