import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ALL_HOTELS, formatPrice, FALLBACK_IMG } from '../utils/mockData';
import { IconStar, IconPin, IconCoffee, IconMap, IconPool, IconWifi, IconSpa, IconGym } from '../components/Icons';

const HotelDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const hotel = ALL_HOTELS.find(h => h.id === id);
    const currency = useSelector(state => state.currency);

    if (!hotel) return <div className="pt-40 text-center font-serif text-3xl text-brand-navy">Hotel not found.</div>;

    const galleryImages = [
        hotel.img,
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1582719478250-c8944994a478?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800"
    ];

    const [activeImage, setActiveImage] = useState(galleryImages[0]);
    const galleryRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (galleryRef.current && !galleryRef.current.contains(event.target)) setActiveImage(galleryImages[0]);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [galleryImages]);

    return (
        <div className="page-enter pt-24 max-w-7xl mx-auto px-6 pb-24 bg-brand-sand">
            <Link to="/hotels" className="relative z-10 inline-flex items-center gap-2 text-brand-gray hover:text-brand-sunset font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors cursor-pointer mt-4">
                &larr; Back to Hotels
            </Link>
            
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8 gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight">{hotel.name}</h1>
                        <div className="flex text-brand-sunset"><IconStar /><IconStar /><IconStar /><IconStar /><IconStar /></div>
                    </div>
                    <p className="text-brand-gray font-bold text-sm uppercase tracking-widest flex items-center"><IconPin /> {hotel.city}, {hotel.country}</p>
                </div>
            </div>

            <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 h-[400px] md:h-[550px]">
                <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-lg group">
                    <img src={activeImage} onError={(e) => { e.target.src = FALLBACK_IMG; }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={hotel.name} />
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                    {galleryImages.slice(1).map((img, idx) => (
                        <div key={idx} onClick={(e) => { e.stopPropagation(); setActiveImage(img); }} className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${activeImage === img ? 'ring-4 ring-brand-sunset' : 'hover:opacity-90'}`}>
                            <img src={img} onError={(e) => { e.target.src = FALLBACK_IMG; }} className="w-full h-full object-cover" alt={`Gallery ${idx + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-center gap-3 shadow-sm">
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Great Deal!</span>
                <span className="text-brand-navy text-sm font-bold">Book now at <span className="text-brand-sunset font-extrabold">₹1,000 off</span> on Online Payment.</span>
            </div>

            <p className="text-brand-gray leading-relaxed text-base mb-8 font-sans max-w-4xl">{hotel.description}</p>

            <div className="flex flex-wrap gap-4 mb-10">
                <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-brand-navy/10 text-sm font-bold text-brand-navy shadow-sm"><IconCoffee /> Food and Dining</button>
                <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-brand-navy/10 text-sm font-bold text-brand-navy shadow-sm"><IconMap /> Location</button>
                <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-brand-navy/10 text-sm font-bold text-brand-navy shadow-sm"><IconPool /> Amenities</button>
            </div>

            <div className="flex flex-wrap items-center gap-8 mb-12 text-brand-gray text-sm font-bold border-b border-brand-navy/10 pb-6">
                <span className="flex items-center gap-2"><IconWifi size={20} /> Wi-Fi</span>
                <span className="flex items-center gap-2"><IconPool size={20} /> Pool</span>
                <span className="flex items-center gap-2"><IconSpa size={20} /> Spa</span>
                <span className="flex items-center gap-2"><IconGym size={20} /> Gym</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                <div className="lg:col-span-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-serif font-bold text-brand-navy">Room Type</h2>
                    </div>
                    <div className="bg-white rounded-3xl shadow-sm border border-brand-navy/10 p-6 flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-[300px] h-56 md:h-auto rounded-2xl overflow-hidden relative flex-shrink-0">
                            <img src={hotel.img} className="w-full h-full object-cover" alt="Room" />
                        </div>
                        <div className="flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">Premium Club Room</h3>
                                <p className="text-sm text-brand-gray mb-4 font-semibold">32 m² (344 sq.ft.) | Valley View | Double Bed</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[200px] flex flex-col justify-end items-end border-t md:border-t-0 md:border-l border-brand-navy/10 pt-6 md:pt-0 md:pl-8">
                            <p className="text-sm text-brand-gray line-through mb-1">{formatPrice(hotel.oldPrice, currency)}</p>
                            <p className="text-3xl font-serif font-bold text-brand-navy mb-1">{formatPrice(hotel.price, currency)}</p>
                            <button onClick={() => navigate(`/checkout/${hotel.id}`)} className="w-full bg-brand-sunset text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl hover:bg-orange-600 transition-colors shadow-lg mb-3">Select Room</button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-brand-navy/10 sticky top-32">
                        <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">Premium Club Room</h3>
                        <div className="mb-6">
                            <p className="text-xs text-brand-gray font-bold uppercase tracking-widest mb-2">Price for 3 Nights</p>
                            <p className="text-4xl font-serif font-bold text-brand-navy">{formatPrice(hotel.price * 3, currency)}</p>
                        </div>
                        <button onClick={() => navigate(`/checkout/${hotel.id}`)} className="w-full bg-brand-sunset text-white font-bold text-sm py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg mb-6 uppercase tracking-widest">Book This Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HotelDetail;