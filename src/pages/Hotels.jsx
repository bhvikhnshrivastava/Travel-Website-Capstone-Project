import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../redux/actions/hotelActions';
import HotelCard from '../components/HotelCard';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

const countries = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'IN', name: 'India' },
  { code: 'FR', name: 'France' },
  { code: 'DE', name: 'Germany' },
  { code: 'AU', name: 'Australia' },
  { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' },
  { code: 'AE', name: 'UAE' },
  { code: 'SG', name: 'Singapore' },
];

const Hotels = () => {
  const dispatch = useDispatch();
  const { hotels, loading, error } = useSelector((s) => s.hotels);
  const [country, setCountry] = useState('US');
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchHotels(country));
  }, [country, dispatch]);

  const per = 10;
  const paginated = hotels.slice((page - 1) * per, page * per);
  const total = Math.ceil(hotels.length / per);

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 pb-10">
      <h1 className="text-3xl font-bold text-primary mb-4">Find Hotels</h1>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setPage(1);
        }}
        className="border rounded px-4 py-2 mb-6"
      >
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name} ({c.code})
          </option>
        ))}
      </select>

      {loading && <Loader />}
      {error && (
        <p className="text-red-500 mb-4">
          Error: {error}. Check your .env API key.
        </p>
      )}

      {!loading && !error && paginated.length === 0 && (
        <p className="text-gray-500 text-center py-10">
          No hotels found. Check your LiteAPI key or try another country.
        </p>
      )}

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginated.map((h) => (
          <HotelCard key={h.id} hotel={h} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={total} onPageChange={setPage} />
    </div>
  );
};

export default Hotels;