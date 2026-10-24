import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelDetail } from '../redux/actions/hotelActions';
import { addFavorite } from '../redux/actions/favoriteActions';
import { FaHeart, FaCheckCircle } from 'react-icons/fa';
import Loader from '../components/Loader';

const HotelDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail: hotel, loading } = useSelector((s) => s.hotels);

  useEffect(() => {
    dispatch(fetchHotelDetail(id));
  }, [id, dispatch]);

  if (loading || !hotel) return <Loader />;

  return (
    <div className="pt-24 max-w-5xl mx-auto px-4 pb-10">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={
            hotel.main_photo ||
            hotel.photo ||
            'https://via.placeholder.com/600x400?text=Hotel'
          }
          alt={hotel.name}
          className="rounded-xl w-full h-80 object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-primary">{hotel.name}</h1>
          <p className="text-gray-600 mt-2">{hotel.address}</p>
          <p className="mt-3">{hotel.description}</p>
          <button
            onClick={() => dispatch(addFavorite(hotel))}
            className="mt-4 bg-primary text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-blue-800"
          >
            <FaHeart /> Add to Wishlist
          </button>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {(hotel.amenities || []).map((a, i) => (
            <li key={i} className="flex items-center gap-2">
              <FaCheckCircle className="text-accent" /> {a}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HotelDetail;