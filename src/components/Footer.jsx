import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-brand-navy text-gray-300 pt-20 pb-10 mt-20 border-t-8 border-brand-sunset relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                <div className="md:col-span-5">
                    <Link to="/" className="mb-6 cursor-pointer inline-block">
                        <div className="flex flex-col items-start">
                            <div className="flex items-end gap-2">
                                <span className="font-cursive text-5xl text-white leading-none">Bhvikhn</span>
                                <svg width="80" height="50" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="75" cy="40" r="28" fill="url(#sunsetGradientFooter)" />
                                    <path d="M45 70 L70 45 L95 70 Z" fill="#FFFFFF" opacity="0.9" />
                                    <path d="M0 70 Q 20 60, 40 70 T 80 70 T 120 70" stroke="#F59E0B" strokeWidth="4" fill="none" />
                                    <defs><linearGradient id="sunsetGradientFooter" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFB347" /><stop offset="100%" stopColor="#FF7B00" /></linearGradient></defs>
                                </svg>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="h-[1px] w-8 bg-gray-500"></span>
                                <span className="text-[9px] tracking-[0.3em] font-bold text-gray-400 uppercase">Travel • Explore • Belong</span>
                                <span className="h-[1px] w-8 bg-gray-500"></span>
                            </div>
                        </div>
                    </Link>
                    <p className="text-sm leading-relaxed mb-8 max-w-sm text-gray-400 font-sans">
                        We believe travel should be effortless, inspiring, and deeply personal. Discover handpicked luxury hotels, boutique resorts, and captivating travel stories from across the globe.
                    </p>
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-widest">Explore</h4>
                    <ul className="space-y-4 text-sm font-sans">
                        <li><Link to="/" className="hover:text-brand-sunset transition-colors">Travel Blogs</Link></li>
                        <li><Link to="/hotels" className="hover:text-brand-sunset transition-colors">Our Hotels</Link></li>
                        <li><Link to="/favorites" className="hover:text-brand-sunset transition-colors">My Wishlist</Link></li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-widest">Support</h4>
                    <ul className="space-y-4 text-sm font-sans">
                        <li className="hover:text-brand-sunset cursor-pointer transition-colors">Help Center</li>
                        <li className="hover:text-brand-sunset cursor-pointer transition-colors">Cancellation Policy</li>
                        <li className="hover:text-brand-sunset cursor-pointer transition-colors">Privacy Policy</li>
                    </ul>
                </div>
                <div className="md:col-span-3">
                    <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-widest">Newsletter</h4>
                    <p className="text-sm mb-4 font-sans text-gray-400">Get the latest travel deals and inspiration delivered straight to your inbox.</p>
                    <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                        <input type="email" placeholder="Email address" className="bg-transparent border-none outline-none text-white px-4 py-3 w-full text-sm font-sans placeholder-gray-500" />
                        <button className="bg-brand-sunset text-white px-5 py-2 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-orange-600 transition-colors" onClick={() => alert('Subscribed!')}>Join</button>
                    </div>
                </div>
            </div>
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-500 tracking-wider">
                <p>&copy; 2026 Bhvikhn Travel. All rights reserved.</p>
                <div className="flex gap-6"><span>Privacy</span><span>Terms</span><span>Sitemap</span></div>
            </div>
        </div>
    </footer>
);
export default Footer;