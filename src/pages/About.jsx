import { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: "How do I book a hotel?", a: "Simply go to the Hotels page, select your country, pick your favorite hotel, and click 'Book This Now' to proceed to checkout." },
        { q: "Is my wishlist saved if I close the browser?", a: "Yes! We use your browser's LocalStorage via Redux to ensure your wishlist is saved for your next visit." },
        { q: "Can I cancel my booking?", a: "Yes, all our properties offer free cancellation up to 24 hours before check-in." },
        { q: "Do you offer custom travel guides?", a: "Absolutely. Check out our 'Stories' section for curated guides written by our travel experts." }
    ];

    return (
        <div className="page-enter pt-32 max-w-5xl mx-auto px-6 pb-24 min-h-screen">
            <div className="text-center mb-16">
                <h1 className="font-serif text-5xl font-bold text-brand-navy mb-4">Our Story</h1>
                <p className="text-brand-gray font-sans max-w-2xl mx-auto">We believe travel should be effortless, inspiring, and deeply personal. Discover handpicked luxury hotels, boutique resorts, and captivating travel stories from across the globe.</p>
            </div>

            {/* Co-Founders Section */}
            <div className="mb-20">
                <h2 className="font-serif text-3xl font-bold text-brand-navy mb-8 border-b border-brand-navy/10 pb-4">Meet the Founders</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-navy/5">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" alt="Founder" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                        <h3 className="font-serif text-xl font-bold text-brand-navy">Bhvikhn Shrivastava</h3>
                        <p className="text-brand-sunset text-sm font-bold uppercase tracking-wider mb-2">Founder & CEO</p>
                        <p className="text-brand-gray text-sm font-sans">A visionary traveler who has visited over 40 countries.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-navy/5">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" alt="Co-Founder" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                        <h3 className="font-serif text-xl font-bold text-brand-navy">Elena Rossi</h3>
                        <p className="text-brand-sunset text-sm font-bold uppercase tracking-wider mb-2">Co-Founder & COO</p>
                        <p className="text-brand-gray text-sm font-sans">Expert in luxury hospitality and customer experience.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-navy/5">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" alt="Investor" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                        <h3 className="font-serif text-xl font-bold text-brand-navy">David Chen</h3>
                        <p className="text-brand-sunset text-sm font-bold uppercase tracking-wider mb-2">Lead Investor</p>
                        <p className="text-brand-gray text-sm font-sans">Partner at Global Ventures, backing innovative travel tech.</p>
                    </div>
                </div>
            </div>

            {/* FAQ Accordion */}
            <div>
                <h2 className="font-serif text-3xl font-bold text-brand-navy mb-8 border-b border-brand-navy/10 pb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border border-brand-navy/10 rounded-2xl overflow-hidden shadow-sm">
                            <button 
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full text-left px-6 py-5 font-bold text-brand-navy flex justify-between items-center outline-none"
                            >
                                {faq.q}
                                <span className="text-brand-sunset text-2xl">{openFaq === index ? '−' : '+'}</span>
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-5 text-brand-gray font-sans border-t border-gray-100 pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default About;