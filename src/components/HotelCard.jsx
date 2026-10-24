import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../redux/actions/favoriteActions';

const HotelCard = ({ hotel }) => {
  const dispatch = useDispatch();
  const favs = useSelector((s) => s.favorites.items);
  const isFav = favs.some((h) => h.id === hotel.id);

  const toggle = (e) => {
    e.preventDefault();
    isFav ? dispatch(removeFavorite(hotel.id)) : dispatch(addFavorite(hotel));
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 relative">
      <Link to={'/hotel/' + hotel.id}>
        <div className="relative h-60 overflow-hidden">
          <img
            src={hotel.photo || hotel.main_photo || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop'}
            alt={hotel.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <button 
            onClick={toggle} 
            className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2.5 rounded-full shadow-md hover:bg-white transition-colors z-10"
          >
            {isFav ? <FaHeart className="text-red-500 text-lg" /> : <FaRegHeart className="text-gray-400 text-lg" />}
          </button>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-sm flex items-center gap-1 font-bold text-primary">
            <FaStar className="text-yellow-400" /> {hotel.rating || 4.2} <span className="text-gray-400 text-xs font-normal">({hotel.reviewCount || 120})</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-bold text-xl text-primary truncate">{hotel.name || 'Luxury Hotel'}</h3>
          <div className="flex items-center gap-1 text-gray-500 text-sm mt-1 mb-4">
            <FaMapMarkerAlt className="text-accent" />
            <p className="truncate">{hotel.city || hotel.address || 'Location unavailable'}</p>
          </div>
          
          <div className="flex justify-between items-end border-t border-gray-100 pt-4 mt-auto">
            <div>
              <p className="text-xs text-gray-400 mb-1">Price per night</p>
              <span className="font-bold text-2xl text-accent">${hotel.price || 150}</span>
            </div>
            <span className="bg-sky-50 text-accent px-4 py-2 rounded-lg font-semibold text-sm hover:bg-accent hover:text-white transition-colors">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCard;