import { useSelector } from 'react-redux';
import HotelCard from '../components/HotelCard';

const Favorites = () => {
  const favs = useSelector((s) => s.favorites.items);
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 pb-10">
      <h1 className="text-3xl font-bold text-primary mb-6">Your Wishlist</h1>
      {favs.length === 0 ? (
        <p className="text-gray-500">No favorites yet. Start exploring hotels!</p>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favs.map((h) => (
            <HotelCard key={h.id} hotel={h} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;