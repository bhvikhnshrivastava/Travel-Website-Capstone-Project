import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/actions';
import { ALL_HOTELS, formatPrice, FALLBACK_IMG } from '../utils/mockData';
import { 
    IconStar, IconPin, IconCoffee, IconMap, IconPool, 
    IconWifi, IconSpa, IconGym, IconHeart 
} from '../components/Icons';

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

    // --- ROOM SELECTION LOGIC ---
    const [selectedRoomId, setSelectedRoomId] = useState('premium');
    
    const rooms = [
        {
            id: 'premium',
            name: 'Premium Club Room',
            size: '32 m² (344 sq.ft.) | Valley View | Double Bed',
            features: ['Laundry Service', 'Wi-Fi', 'Room-service', 'Charging Points', 'Daily Housekeeping'],
            priceOffset: 0,
            img: hotel?.img || FALLBACK_IMG,
            tag: 'Most Popular'
        },
        {
            id: 'deluxe',
            name: 'Deluxe Ocean Suite',
            size: '45 m² (484 sq.ft.) | Ocean View | King Bed',
            features: ['Jacuzzi', 'Wi-Fi', 'Balcony', 'Mini Bar', 'Ocean View'],
            priceOffset: 50,
            img: galleryImages[1],
            tag: 'Luxury Option'
        }
    ];

    const selectedRoom = rooms.find(r => r.id === selectedRoomId);

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
    const basePrice = hotel.price + selectedRoom.priceOffset;
    const oldPrice = hotel.oldPrice + selectedRoom.priceOffset;

    return (
        <div className="page-enter pt-24 max-w-7xl mx-auto px-6 pb-24 bg-brand-sand">
            <Link to="/hotels" className="relative z-10 inline-flex items-center gap-2 text-brand-gray hover:text-brand-sunset font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors cursor-pointer mt-4">
                &larr; Back to Hotels
            </Link>
            
            {/* Title Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8 gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight">{hotel.name}</h1>
                        <div className="flex text-brand-sunset"><IconStar /><IconStar /><IconStar /><IconStar /><IconStar /></div>
                    </div>
                    <p className="text-brand-gray font-bold text-sm uppercase tracking-widest flex items-center"><IconPin /> {hotel.city}, {hotel.country}</p>
                </div>
            </div>

            {/* Interactive Gallery Grid */}
            <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 h-[400px] md:h-[550px]">
                <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-lg group">
                    <img src={activeImage} onError={(e) => { e.target.src = FALLBACK_IMG; }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={hotel.name} />
                    <div className="absolute bottom-4 left-4 bg-brand-navy/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold border border-white/20">+7 Photos</div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                    {galleryImages.slice(1).map((img, idx) => (
                        <div 
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setActiveImage(img); }} 
                            className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${activeImage === img ? 'ring-4 ring-brand-sunset' : 'hover:opacity-90'}`}
                        >
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

            <p className="text-brand-gray leading-relaxed text-base mb-8 font-sans max-w-4xl">
                Set in a peaceful location, {hotel.name} offers fully furnished accommodations and leisure amenities for a perfect mountain vacation. Enjoy breathtaking views right from your room.
            </p>

            {/* Quick Info Pills */}
            <div className="flex flex-wrap gap-4 mb-10">
                <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-brand-navy/10 text-sm font-bold text-brand-navy shadow-sm hover:border-brand-sunset transition-colors"><IconCoffee /> Food and Dining</button>
                <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-brand-navy/10 text-sm font-bold text-brand-navy shadow-sm hover:border-brand-sunset transition-colors"><IconMap /> Location & Surroundings</button>
                <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-brand-navy/10 text-sm font-bold text-brand-navy shadow-sm hover:border-brand-sunset transition-colors"><IconPool /> Amenities</button>
            </div>

            {/* Amenities Inline */}
            <div className="flex flex-wrap items-center gap-8 mb-12 text-brand-gray text-sm font-bold border-b border-brand-navy/10 pb-6">
                <span className="flex items-center gap-2"><IconWifi /> Wi-Fi</span>
                <span className="flex items-center gap-2"><IconPool /> Pool</span>
                <span className="flex items-center gap-2"><IconSpa /> Spa</span>
                <span className="flex items-center gap-2"><IconGym /> Gym</span>
                <span className="text-brand-sunset underline cursor-pointer ml-auto">+26 Amenities</span>
            </div>

            {/* Main Content Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 mb-16">
                {/* Left Column: Room Types */}
                <div className="lg:col-span-8">
                    
                    <div className="flex items-end justify-between mb-6">
                        <h2 className="font-serif text-3xl font-bold text-brand-navy">Room Types</h2>
                        <span className="text-xs font-bold text-brand-navy bg-white px-4 py-2 rounded-full border border-brand-navy/10 flex items-center gap-2 shadow-sm mb-1">
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                            Free Cancellation
                        </span>
                    </div>

                    {/* Generate Room Cards Dynamically */}
                    {rooms.map((room) => {
                        const isActive = selectedRoomId === room.id;
                        return (
                            <div 
                                key={room.id}
                                onClick={() => setSelectedRoomId(room.id)}
                                className={`cursor-pointer bg-white rounded-3xl shadow-sm border p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 transition-all duration-300 mb-6 
                                    ${isActive ? 'border-brand-sunset shadow-md ring-1 ring-brand-sunset' : 'border-brand-navy/10 hover:shadow-lg'}`}
                            >
                                {/* Image */}
                                <div className="lg:col-span-4 h-56 lg:h-auto rounded-2xl overflow-hidden relative">
                                    <img src={room.img} className="w-full h-full object-cover" alt={room.name} />
                                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-[11px] font-bold px-3 py-1.5 rounded-lg text-brand-navy shadow-sm flex items-center gap-2"><IconCoffee size={12}/> Free Breakfast</div>
                                </div>

                                {/* Details */}
                                <div className="lg:col-span-5 flex flex-col justify-between py-1">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] font-bold text-brand-sunset border border-brand-sunset/30 bg-brand-sunset/5 px-2.5 py-1 rounded uppercase tracking-wider">{room.tag}</span>
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold text-brand-navy mb-1">{room.name}</h3>
                                        <p className="text-sm text-brand-gray mb-4 font-semibold">{room.size}</p>
                                        
                                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-brand-gray mb-4 font-sans">
                                            {room.features.map((feature, idx) => (
                                                <span key={idx} className="flex items-center gap-2 whitespace-nowrap">• {feature}</span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <ul className="text-sm text-brand-gray space-y-1 font-sans">
                                            <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Meal plans included</li>
                                            <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Free Cancellation before 14 Sep</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="lg:col-span-3 flex flex-col justify-center items-end border-t lg:border-t-0 lg:border-l border-brand-navy/10 pt-5 lg:pt-0 lg:pl-6">
                                    <div className="w-full flex flex-col items-end">
                                        <p className="text-sm text-brand-gray line-through mb-1">{formatPrice(hotel.oldPrice + room.priceOffset, currency)}</p>
                                        <p className="text-3xl font-serif font-bold text-brand-navy mb-1">{formatPrice(hotel.price + room.priceOffset, currency)}</p>
                                        <p className="text-[11px] text-brand-gray mb-4 text-right w-full">+ {formatPrice(Math.round((hotel.price + room.priceOffset) * 0.15), currency)} taxes / night</p>
                                        
                                        <button className={`w-full font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl transition-colors shadow-lg mb-2 
                                            ${isActive ? 'bg-brand-sunset text-white' : 'bg-slate-100 text-brand-navy hover:bg-slate-200'}`}>
                                            {isActive ? 'Selected' : 'Select Room'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                                {/* Right Column: Sticky Booking Widget (Dynamically Changes) */}
                <div className="lg:col-span-4">
                    <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-2xl border border-brand-navy/10 sticky top-32 transition-all duration-500">
                        
                        {/* Dynamic Room Name with key to trigger animation */}
                        <h3 key={`name-${selectedRoom.id}`} className="font-serif text-2xl font-bold text-brand-navy mb-2 animate-pop-in">{selectedRoom.name}</h3>
                        <div className="flex gap-2 mb-6">
                            <span className="text-xs font-bold text-brand-gray bg-slate-100 px-3 py-1.5 rounded-lg transition-colors duration-300 hover:bg-slate-200 cursor-default">For 2 Adults</span>
                        </div>
                        
                        <ul className="space-y-3 mb-8 text-sm text-brand-gray font-sans border-b border-brand-navy/10 pb-6">
                            <li className="flex items-center gap-2 transition-transform hover:translate-x-1"><span className="text-green-500 text-[10px]">●</span> Meals included</li>
                            <li className="flex items-center gap-2 transition-transform hover:translate-x-1"><span className="text-green-500 text-[10px]">●</span> Free Transfers</li>
                            <li className="flex items-center gap-2 transition-transform hover:translate-x-1"><span className="text-green-500 text-[10px]">●</span> Free Cancellation</li>
                        </ul>

                        <div className="mb-6">
                            <p className="text-xs text-brand-gray font-bold uppercase tracking-widest mb-2">Price for 3 Nights</p>
                            <div className="flex items-end gap-3 overflow-hidden">
                                {/* Dynamic Price with pop animation */}
                                <p key={`price-${selectedRoom.id}`} className="text-4xl font-serif font-bold text-brand-navy animate-pop-in">{formatPrice(basePrice * 3, currency)}</p>
                            </div>
                            <p className="text-xs text-brand-gray mt-1">+ {formatPrice(Math.round(basePrice * 0.15), currency)} taxes & fees per night</p>
                        </div>

                        <button onClick={() => navigate(`/checkout/${hotel.id}`)} className="w-full bg-brand-sunset text-white font-bold text-sm py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg mb-3 uppercase tracking-widest hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-95">Book This Now</button>
                        
                        <button onClick={() => dispatch(toggleFavorite(hotel.id))} className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold border-2 transition-all duration-300 shadow-sm mb-6 ${isSaved ? 'bg-red-50 border-red-500 text-red-500' : 'bg-white border-brand-navy/10 text-brand-navy hover:border-brand-sunset hover:-translate-y-1'}`}>
                            <IconHeart filled={isSaved} /> {isSaved ? 'Saved to Wishlist' : 'Add to Wishlist'}
                        </button>
                        
                        <div className="grid grid-cols-2 gap-3 mt-4 pt-6 border-t border-brand-navy/10">
                            <div className="bg-white border border-brand-navy/10 p-3 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-sunset cursor-pointer">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-brand-sunset text-white text-xs font-bold px-2 py-1 rounded-md">4.3</span>
                                    <span className="text-xs font-bold text-brand-navy">Excellent</span>
                                </div>
                                <p className="text-[10px] text-brand-gray leading-tight mb-2">45% guests rated 5/5</p>
                                <a href="#" className="text-[10px] text-brand-sunset font-bold underline block hover:text-orange-600">All Reviews</a>
                            </div>
                            <div className="bg-white border border-brand-navy/10 p-3 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-sunset cursor-pointer">
                                <div className="flex items-center gap-1 mb-2 text-brand-navy">
                                    <IconPin /> <span className="text-xs font-bold">{hotel.city}</span>
                                </div>
                                <p className="text-[10px] text-brand-gray leading-tight mb-2">1.6 kms to Mall Road</p>
                                <a href="#" className="text-[10px] text-brand-sunset font-bold underline block hover:text-orange-600">See on Map</a>
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
                        <p className="font-bold text-brand-navy text-base mb-3 flex items-center gap-3">
                            Couple/Bachelor Rules <span className="bg-brand-sunset text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Couple Friendly</span>
                        </p>
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

            {/* User Rating & Reviews */}
            <div>
                <h2 className="font-serif text-3xl font-bold text-brand-navy mb-6">User Rating & Reviews</h2>
                
                <div className="flex gap-6 border-b border-brand-navy/10 mb-8">
                    <button className="text-base font-bold text-brand-sunset border-b-2 border-brand-sunset pb-3">All</button>
                    <button className="text-base font-bold text-brand-gray hover:text-brand-navy pb-3 transition-colors">Couple</button>
                    <button className="text-base font-bold text-brand-gray hover:text-brand-navy pb-3 transition-colors">Family</button>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-brand-navy/10 shadow-sm flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/3 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-brand-navy/10 pb-8 md:pb-0 md:pr-8">
                        <p className="text-sm font-bold text-brand-gray uppercase tracking-widest mb-4">Overall Rating</p>
                        <div className="bg-brand-sunset text-white text-5xl font-bold px-6 py-3 rounded-2xl mb-4 shadow-lg">4.3</div>
                        <div className="flex text-brand-sunset mb-2"><IconStar /><IconStar /><IconStar /><IconStar /><IconStar /></div>
                        <p className="text-base text-brand-navy font-bold">Excellent</p>
                    </div>
                    
                    <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                        <div className="flex items-center gap-4 text-sm font-bold text-brand-gray">
                            <span className="w-20">Excellent</span>
                            <div className="flex-grow bg-gray-100 h-2.5 rounded-full overflow-hidden"><div className="bg-brand-sunset h-full rounded-full" style={{width: '51%'}}></div></div>
                            <span className="w-10 text-right">51%</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm font-bold text-brand-gray">
                            <span className="w-20">Very Good</span>
                            <div className="flex-grow bg-gray-100 h-2.5 rounded-full overflow-hidden"><div className="bg-brand-sunset h-full rounded-full" style={{width: '23%'}}></div></div>
                            <span className="w-10 text-right">23%</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm font-bold text-brand-gray">
                            <span className="w-20">Average</span>
                            <div className="flex-grow bg-gray-100 h-2.5 rounded-full overflow-hidden"><div className="bg-brand-sunset h-full rounded-full" style={{width: '11%'}}></div></div>
                            <span className="w-10 text-right">11%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;