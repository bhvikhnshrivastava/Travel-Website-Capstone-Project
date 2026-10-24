import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ALL_HOTELS, formatPrice } from '../utils/mockData';
import { IconStar, IconCheckCircle } from '../components/Icons';

const Checkout = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const hotel = ALL_HOTELS.find(h => h.id === id);
    const currency = useSelector(state => state.currency);
    
    const [isSuccess, setIsSuccess] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    if (!hotel) return <div className="pt-40 text-center font-serif text-3xl text-brand-navy">Hotel not found.</div>;

    const nights = 3;
    const subtotal = hotel.price * nights;
    const taxes = Math.round(subtotal * 0.15);
    const total = subtotal + taxes;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => { setIsProcessing(false); setIsSuccess(true); }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="page-enter pt-32 max-w-3xl mx-auto px-6 pb-24 min-h-screen flex items-center justify-center">
                <div className="bg-white p-12 rounded-3xl shadow-2xl border border-brand-navy/10 text-center w-full">
                    <IconCheckCircle />
                    <h1 className="font-serif text-4xl font-bold text-brand-navy mb-4">Booking Confirmed!</h1>
                    <p className="text-brand-gray font-sans mb-8">Thank you for choosing Bhvikhn. Your reservation at <strong>{hotel.name}</strong> has been successfully processed.</p>
                    <div className="bg-brand-sand p-6 rounded-2xl mb-8 border border-brand-navy/5 text-left">
                        <p className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Booking Reference</p>
                        <p className="text-2xl font-mono font-bold text-brand-navy tracking-wider">BHV-{Math.floor(Math.random() * 900000) + 100000}</p>
                    </div>
                    <button onClick={() => navigate('/')} className="bg-brand-navy text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-sunset transition-all duration-300 shadow-md uppercase tracking-widest text-xs">Back to Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="page-enter pt-32 max-w-7xl mx-auto px-6 pb-24 bg-brand-sand">
            <Link to={`/hotel/${hotel.id}`} className="relative z-10 inline-flex items-center gap-2 text-brand-gray hover:text-brand-sunset font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors cursor-pointer">
                &larr; Back to Hotel
            </Link>
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                    <h1 className="font-serif text-4xl font-bold text-brand-navy mb-8">Secure Checkout</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-navy/5 mb-8">
                            <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">1. Guest Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div><label className="block text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">First Name</label><input type="text" required className="input-field" placeholder="John" /></div>
                                <div><label className="block text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">Last Name</label><input type="text" required className="input-field" placeholder="Doe" /></div>
                                <div className="md:col-span-2"><label className="block text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">Email Address</label><input type="email" required className="input-field" placeholder="john.doe@example.com" /></div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-navy/5 mb-8">
                            <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">2. Payment Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2"><label className="block text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">Card Number</label><input type="text" required className="input-field" placeholder="0000 0000 0000 0000" maxLength="19" /></div>
                                <div><label className="block text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">Expiry Date</label><input type="text" required className="input-field" placeholder="MM/YY" maxLength="5" /></div>
                                <div><label className="block text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">CVV</label><input type="password" required className="input-field" placeholder="123" maxLength="3" /></div>
                            </div>
                        </div>
                        <button type="submit" disabled={isProcessing} className="w-full bg-sunset-gradient text-white font-bold text-lg py-5 rounded-xl hover:opacity-90 transition-all duration-300 shadow-xl uppercase tracking-widest flex justify-center items-center gap-3">
                            {isProcessing ? 'Processing...' : `Confirm & Pay ${formatPrice(total, currency)}`}
                        </button>
                    </form>
                </div>
                <div className="lg:w-1/3">
                    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-brand-navy/10 sticky top-32">
                        <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6 border-b border-brand-navy/10 pb-4">Booking Summary</h2>
                        <div className="flex gap-4 mb-6">
                            <img src={hotel.img} alt={hotel.name} className="w-24 h-24 object-cover rounded-xl" />
                            <div>
                                <h3 className="font-bold text-brand-navy leading-tight mb-1">{hotel.name}</h3>
                                <p className="text-xs text-brand-gray font-semibold">{hotel.city}, {hotel.country}</p>
                                <div className="flex items-center gap-1 mt-2 text-brand-sunset text-xs font-bold"><IconStar /> {hotel.rating}</div>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm font-sans mb-6">
                            <div className="flex justify-between"><span className="text-brand-gray">{formatPrice(hotel.price, currency)} × {nights} nights</span><span className="font-bold text-brand-navy">{formatPrice(subtotal, currency)}</span></div>
                            <div className="flex justify-between"><span className="text-brand-gray">Taxes & Fees</span><span className="font-bold text-brand-navy">{formatPrice(taxes, currency)}</span></div>
                        </div>
                        <div className="border-t border-brand-navy/10 pt-4 flex justify-between text-xl font-bold text-brand-navy"><span>Total</span><span>{formatPrice(total, currency)}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Checkout;