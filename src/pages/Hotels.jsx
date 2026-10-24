import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/actions';
import { ALL_HOTELS, formatPrice, FALLBACK_IMG } from '../utils/mockData';
import { IconStar, IconPin, IconCoffee, IconMap, IconPool, IconWifi, IconSpa, IconGym } from '../components/Icons';

const HotelDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const hotel = ALL_HOTELS.find(h => h.id === id);
    const wishlist = useSelector(state => state.favorites.items);
    const currency = useSelector(state => state.currency);

    const galleryImages = [
        hotel?.img || FALLBACK_IMG,
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1582719478250-c8944994a478?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800"
    ];

    const [activeImage, setActiveImage] = useState(galleryImages[0]);
    const galleryRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (galleryRef.current && !galleryRef.current.contains(event.target)) {
                setActiveImage(galleryImages[0]);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [galleryImages]);

    if (!hotel) return <div className="pt-40 text-center font-serif text-3xl text-brand-navy">Hotel not found.</div>;

    const isSaved = wishlist.includes(hotel.id);

    return (
        <div className="page-enter pt-24 max-w-7xl mx-auto px-6 pb-24 bg-brand-sand">
            <button onClick={() => navigate('/hotels')} className="relative z-10 inline-flex items-center gap-2 text-brand-gray hover:text-brand-sunset font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors cursor-pointer mt-4">
                &larr; Back to Hotels
            </button>
            
            {/* Title Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8 gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight">{hotel.name}</h1>
                        <div className="flex text-brand-sunset"><IconStar /><IconStar /><IconStar /><IconStar /><IconStar /></div>
                    </div>
                    <p className="text-brand-gray font-bold text-sm uppercase tracking-widest flex items-center"><IconPin /> {hotel.city}, {hotel.country}</p>
                </div>
                <button onClick={() => dispatch(toggleFavorite(hotel.id))} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 transition-all ${isSaved ? 'bg-red-50 border-red-500 text-red-500' : 'bg-white border-brand-navy/10 text-brand-navy hover:border-brand-sunset'}`}>
                    {isSaved ? '❤️ Saved to Wishlist' : '🤍 Add to Wishlist'}
                </button>
            </div>

            {/* Interactive Gallery Grid */}
            <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 h-[400px] md:h-[550px]">
                <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-lg group">
                    <img src={activeImage} onError={(e) => { e.target.src = FALLBACK_IMG; }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={hotel.name} />
                    <div className="absolute bottom-4 left-4 bg-brand-navy/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold border border-white/20">
                        +7 Photos
                    </div>
                </div>
                
                <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                    {galleryImages.slice(1).map((img, idx) => (
                        <div key={idx} onClick={(e) => { e.stopPropagation(); setActiveImage(img); }} className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${activeImage === img ? 'ring-4 ring-brand-sunset' : 'hover:opacity-90'}`}>
                            <img src={img} onError={(e) => { e.target.src = FALLBACK_IMG; }} className="w-full h-full object-cover" alt={`Gallery ${idx + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Great Deal Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-center gap-3 shadow-sm">
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Great Deal!</span>
                <span className="text-brand-navy text-sm font-bold">Book now at <span className="text-brand-sunset font-extrabold">₹1,000 off</span> on Online Payment.</span>
            </div>

            <p className="text-brand-gray leading-relaxed text-base mb-8 font-sans max-w-4xl">{hotel.description}</p>

            {/* Quick Info Pills */}
            <div className="flex flex-wrap gap-4 mb-10">
                <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-brand-navy/10 text-sm font-bold text-brand-navy shadow-sm hover:border-brand-sunset transition-colors"><IconCoffee /> Food and Dining</button>
                <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-brand-navy/10 text-sm font-bold text-brand-navy shadow-sm hover:border-brand-sunset transition-colors"><IconMap /> Location & Surroundings</button>
                <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-brand-navy/10 text-sm font-bold text-brand-navy shadow-sm hover:border-brand-sunset transition-colors"><IconPool /> Amenities</button>
            </div>

            {/* Amenities Inline */}
            <div className="flex flex-wrap items-center gap-8 mb-12 text-brand-gray text-sm font-bold border-b border-brand-navy/10 pb-6">
                <span className="flex items-center gap-2"><IconWifi size={20} /> Wi-Fi</span>
                <span className="flex items-center gap-2"><IconPool size={20} /> Pool</span>
                <span className="flex items-center gap-2"><IconSpa size={20} /> Spa</span>
                <span className="flex items-center gap-2"><IconGym size={20} /> Gym</span>
                <span className="text-brand-sunset underline cursor-pointer ml-auto">+26 Amenities</span>
            </div>

            {/* Main Content Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                {/* Left Column: Room Types */}
                <div className="lg:col-span-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-serif font-bold text-brand-navy">Room Type</h2>
                        <span className="text-xs font-bold text-brand-navy bg-white px-4 py-2 rounded-full border border-brand-navy/10 flex items-center gap-2 shadow-sm">Free Cancellation</span>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-brand-navy/10 p-6 flex flex-col md:flex-row gap-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-full md:w-[300px] h-56 md:h-auto rounded-2xl overflow-hidden relative flex-shrink-0">
                            <img src={hotel.img} className="w-full h-full object-cover" alt="Room" />
                            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-[11px] font-bold px-3 py-1.5 rounded-lg text-brand-navy shadow-sm flex items-center gap-2"><IconCoffee size={12}/> Free Breakfast</div>
                            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur text-[11px] font-bold px-3 py-1.5 rounded-lg text-brand-navy shadow-sm flex items-center gap-2"><IconPool size={12}/> Swimming Pool</div>
                        </div>

                        <div className="flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[10px] font-bold text-brand-sunset border border-brand-sunset/30 bg-brand-sunset/5 px-2.5 py-1 rounded uppercase tracking-wider">Most Popular</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">Premium Club Room</h3>
                                <p className="text-sm text-brand-gray mb-4 font-semibold">32 m² (344 sq.ft.) | Valley View | Double Bed</p>
                                
                                <div className="grid grid-cols-2 gap-3 text-sm text-brand-gray mb-6 font-sans">
                                    <span className="flex items-center gap-2">• Laundry Service</span>
                                    <span className="flex items-center gap-2">• Wi-Fi</span>
                                    <span className="flex items-center gap-2">• Room-service</span>
                                    <span className="flex items-center gap-2">• Charging Points</span>
                                    <span className="flex items-center gap-2">• Daily Housekeeping</span>
                                    <button className="text-brand-sunset underline font-bold text-left hover:text-orange-600">More details</button>
                                </div>
                            </div>
                            
                            <div className="mt-4">
                                <ul className="text-sm text-brand-gray space-y-2 font-sans mb-3">
                                    <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Meal plans included</li>
                                    <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Free Cancellation before 14 Sep, 11:59 AM</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-[200px] flex flex-col justify-end items-end border-t md:border-t-0 md:border-l border-brand-navy/10 pt-6 md:pt-0 md:pl-8">
                            <p className="text-sm text-brand-gray line-through mb-1">{formatPrice(hotel.oldPrice, currency)}</p>
                            <p className="text-3xl font-serif font-bold text-brand-navy mb-1">{formatPrice(hotel.price, currency)}</p>
                            <p className="text-[11px] text-brand-gray mb-4 text-right">+ {formatPrice(Math.round(hotel.price * 0.15), currency)} taxes & fees / per night</p>
                            <button onClick={() => navigate(`/checkout/${hotel.id}`)} className="w-full bg-brand-sunset text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl hover:bg-orange-600 transition-colors shadow-lg mb-3">
                                Select Room
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Sticky Booking Widget */}
                <div className="lg:col-span-4">
                    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-brand-navy/10 sticky top-32">
                        <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">Premium Club Room</h3>
                        <div className="flex gap-2 mb-6">
                            <span className="text-xs font-bold text-brand-gray bg-slate-100 px-3 py-1.5 rounded-lg">For 2 Adults</span>
                        </div>
                        
                        <ul className="space-y-3 mb-8 text-sm text-brand-gray font-sans border-b border-brand-navy/10 pb-6">
                            <li className="flex items-center gap-2"><span className="text-green-500 text-[10px]">●</span> Meals included</li>
                            <li className="flex items-center gap-2"><span className="text-green-500 text-[10px]">●</span> Free Transfers</li>
                            <li className="flex items-center gap-2"><span className="text-green-500 text-[10px]">●</span> Free Cancellation before 14 Sep 11:59 AM</li>
                        </ul>

                        <div className="mb-6">
                            <p className="text-xs text-brand-gray font-bold uppercase tracking-widest mb-2">Price for 3 Nights</p>
                            <div className="flex items-end gap-3">
                                <p className="text-4xl font-serif font-bold text-brand-navy">{formatPrice(hotel.price * 3, currency)}</p>
                            </div>
                            <p className="text-xs text-brand-gray mt-1">+ {formatPrice(Math.round(hotel.price * 0.15), currency)} taxes & fees per night</p>
                        </div>

                        <button onClick={() => navigate(`/checkout/${hotel.id}`)} className="w-full bg-brand-sunset text-white font-bold text-sm py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg mb-6 uppercase tracking-widest">
                            Book This Now
                        </button>
                        
                        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-brand-navy/10">
                            <div className="bg-white border border-brand-navy/10 p-4 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-brand-sunset text-white text-xs font-bold px-2 py-1 rounded-md">4.3</span>
                                    <span className="text-xs font-bold text-brand-navy">Excellent</span>
                                </div>
                                <p className="text-[10px] text-brand-gray leading-tight mb-2">45% guests rated this property 5/5</p>
                            </div>
                            <div className="bg-white border border-brand-navy/10 p-4 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-1 mb-2 text-brand-navy">
                                    <IconPin /> <span className="text-xs font-bold">Mussoorie</span>
                                </div>
                                <p className="text-[10px] text-brand-gray leading-tight mb-2">1.6 kms to The Mall Road</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Property Rules */}
            <div className="mb-16">
                <h2 className="font-serif text-3xl font-bold text-brand-navy mb-6">Property Rules</h2>
                <div className="flex gap-8 text-base font-bold text-brand-navy mb-6">
                    <span>Check-in: 12 PM</span>
                    <span>Check-out: 10 AM</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-3xl border border-brand-navy/10 shadow-sm">
                    <div className="space-y-4 text-sm text-brand-gray font-sans">
                        <p className="font-bold text-brand-navy text-base mb-3 flex items-center gap-3">Couple/Bachelor Rules <span className="bg-brand-sunset text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Couple Friendly</span></p>
                        <p className="flex items-center gap-3"><span className="text-red-500 font-bold">×</span> Unmarried couples with Local IDs are not allowed</p>
                        <p className="flex items-center gap-3"><span className="text-red-500 font-bold">×</span> Guests below 18 years of age are not allowed at the property.</p>
                    </div>
                    <div className="space-y-4 text-sm text-brand-gray font-sans md:border-l md:border-brand-navy/10 md:pl-10">
                        <p className="font-bold text-brand-navy text-base mb-3">ID Proof</p>
                        <p className="flex items-center gap-3"><span className="text-green-500 font-bold">✓</span> Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)</p>
                        <p className="flex items-center gap-3"><span className="text-red-500 font-bold">×</span> Pets are not allowed.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;