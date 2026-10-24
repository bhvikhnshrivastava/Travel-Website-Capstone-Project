import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../redux/actions';
import { formatPrice, FALLBACK_IMG } from '../utils/mockData';
import { IconStar, IconPin, IconHeart, IconCouple, IconShield, IconCoffee } from './Icons';

const HotelCard = ({ hotel }) => {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.favorites.items);
    const currency = useSelector(state => state.currency);
    const isSaved = wishlist.includes(hotel.id);
    const discount = Math.round((1 - (hotel.price / hotel.oldPrice)) * 100);
    
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-navy/5 flex flex-col group">
            <div className="h-64 overflow-hidden relative">
                <Link to={`/hotel/${hotel.id}`}>
                    <img src={hotel.img} onError={(e) => { e.target.src = FALLBACK_IMG; }} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </Link>
                <div className="absolute top-4 left-4 bg-brand-sunset text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm uppercase tracking-wider">Save {discount}%</div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-brand-navy px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-sm"><IconStar /> {hotel.rating}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <Link to={`/hotel/${hotel.id}`}><h3 className="font-serif text-2xl font-bold text-brand-navy mb-1 hover:text-brand-sunset transition-colors line-clamp-1">{hotel.name}</h3></Link>
                        <p className="text-xs font-bold text-brand-gray flex items-center uppercase tracking-wider"><IconPin /> {hotel.city}, {hotel.country}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 my-3">
                    <span className="flex items-center text-[10px] font-bold text-brand-navy bg-brand-sand px-2 py-1 rounded-md border border-brand-navy/5"><IconCouple /> Couple Friendly</span>
                    <span className="flex items-center text-[10px] font-bold text-brand-navy bg-brand-sand px-2 py-1 rounded-md border border-brand-navy/5"><IconShield /> Free Cancel</span>
                    <span className="flex items-center text-[10px] font-bold text-brand-navy bg-brand-sand px-2 py-1 rounded-md border border-brand-navy/5"><IconCoffee /> Breakfast</span>
                </div>
                <p className="text-brand-gray text-sm leading-relaxed line-clamp-2 mt-2 mb-4 font-sans">{hotel.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div>
                        <p className="text-xs text-brand-gray line-through mb-1 font-semibold">{formatPrice(hotel.oldPrice, currency)}</p>
                        <p className="text-2xl font-serif font-bold text-brand-navy">{formatPrice(hotel.price, currency)} <span className="text-xs font-sans font-normal text-brand-gray tracking-normal">/ night</span></p>
                    </div>
                    <button onClick={() => dispatch(toggleFavorite(hotel.id))} className={`p-3 rounded-full transition-all duration-300 ${isSaved ? 'bg-red-50 text-red-500' : 'bg-brand-sand text-brand-gray hover:bg-brand-navy hover:text-white'}`}>
                        <IconHeart filled={isSaved} />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default HotelCard;