import { useState, useMemo } from 'react';
import { ALL_HOTELS } from '../utils/mockData';
import HotelCard from '../components/HotelCard';

const Hotels = () => {
    const [country, setCountry] = useState('HR');
    const [sortBy, setSortBy] = useState('recommended');
    const [currentPage, setCurrentPage] = useState(1);
    const hotelsPerPage = 10;

    const filteredAndSortedHotels = useMemo(() => {
        let result = ALL_HOTELS.filter(h => h.country === country);
        if (sortBy === 'priceLow') result.sort((a, b) => a.price - b.price);
        if (sortBy === 'priceHigh') result.sort((a, b) => b.price - a.price);
        if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
        return result;
    }, [country, sortBy]);

    const indexOfLastHotel = currentPage * hotelsPerPage;
    const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
    const currentHotels = filteredAndSortedHotels.slice(indexOfFirstHotel, indexOfLastHotel);
    const totalPages = Math.ceil(filteredAndSortedHotels.length / hotelsPerPage);

    return (
        <div className="page-enter pt-32 max-w-7xl mx-auto px-6 pb-24 min-h-screen">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-brand-navy/10 pb-8 gap-6">
                <div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-2">Find Your Stay</h1>
                    <p className="text-brand-gray text-sm font-bold uppercase tracking-widest">Showing {filteredAndSortedHotels.length} properties</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <select value={country} onChange={(e) => { setCountry(e.target.value); setCurrentPage(1); }} className="bg-white border border-brand-navy/20 text-brand-navy font-bold text-xs uppercase tracking-wider rounded-xl px-6 py-3 outline-none focus:ring-2 focus:ring-brand-sunset cursor-pointer shadow-sm">
                        <option value="HR">Croatia (HR)</option><option value="US">United States (US)</option><option value="GB">United Kingdom (GB)</option>
                    </select>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-white border border-brand-navy/20 text-brand-navy font-bold text-xs uppercase tracking-wider rounded-xl px-6 py-3 outline-none focus:ring-2 focus:ring-brand-sunset cursor-pointer shadow-sm">
                        <option value="recommended">Recommended</option><option value="priceLow">Price: Low to High</option><option value="priceHigh">Price: High to Low</option><option value="rating">Top Rated</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentHotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)}
            </div>
            {totalPages > 1 && (
                <div className="flex flex-wrap justify-center mt-16 gap-3">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button key={i + 1} onClick={() => { setCurrentPage(i + 1); window.scrollTo({ top: 300, behavior: 'smooth' }); }} className={`w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 ${currentPage === i + 1 ? 'bg-brand-navy text-white shadow-xl scale-110' : 'bg-white text-brand-navy border border-gray-200 hover:border-brand-sunset hover:text-brand-sunset'}`}>{i + 1}</button>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Hotels;