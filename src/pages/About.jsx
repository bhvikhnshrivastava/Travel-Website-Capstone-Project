import { useState } from 'react';

const About = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const faqs = [
        { q: "How do I book a hotel?", a: "Simply go to the Hotels page, select your country, pick your favorite hotel, and click 'Book This Now' to proceed to checkout." },
        { q: "Is my wishlist saved if I close the browser?", a: "Yes! We use your browser's LocalStorage via Redux to ensure your wishlist is saved for your next visit." },
        { q: "Can I cancel my booking?", a: "Yes, all our properties offer free cancellation up to 24 hours before check-in." }
    ];

    return (
        <div className="page-enter pt-32 pb-24 max-w-6xl mx-auto px-6 min-h-screen bg-brand-sand">
            <div className="text-center mb-20">
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-navy mb-6">Our Story</h1>
                <p className="text-brand-gray font-sans max-w-3xl mx-auto text-xl leading-relaxed">
                    We believe travel should be effortless, inspiring, and deeply personal. Discover handpicked luxury hotels, boutique resorts, and captivating travel stories from across the globe.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-navy/10 text-center">
                    <h3 className="text-4xl font-serif font-bold text-brand-sunset mb-2">500+</h3>
                    <p className="text-brand-navy font-bold uppercase tracking-widest text-sm">Luxury Hotels</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-navy/10 text-center">
                    <h3 className="text-4xl font-serif font-bold text-brand-sunset mb-2">10k+</h3>
                    <p className="text-brand-navy font-bold uppercase tracking-widest text-sm">Happy Travelers</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-navy/10 text-center">
                    <h3 className="text-4xl font-serif font-bold text-brand-sunset mb-2">45</h3>
                    <p className="text-brand-navy font-bold uppercase tracking-widest text-sm">Countries Covered</p>
                </div>
            </div>

            <div className="mb-24">
                <h2 className="font-serif text-4xl font-bold text-brand-navy mb-10 text-center">Meet the Founders</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-navy/10">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" alt="Founder" className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md" />
                        <h3 className="font-serif text-2xl font-bold text-brand-navy">Bhvikhn Shrivastava</h3>
                        <p className="text-brand-sunset text-sm font-bold uppercase tracking-wider mb-3">Founder & CEO</p>
                        <p className="text-brand-gray text-sm font-sans">A visionary traveler who has visited over 40 countries and founded Bhvikhn to share the joy of discovery.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-navy/10">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" alt="Co-Founder" className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md" />
                        <h3 className="font-serif text-2xl font-bold text-brand-navy">Elena Rossi</h3>
                        <p className="text-brand-sunset text-sm font-bold uppercase tracking-wider mb-3">Co-Founder & COO</p>
                        <p className="text-brand-gray text-sm font-sans">Expert in luxury hospitality and customer experience, ensuring every trip is flawless.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-navy/10">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" alt="Investor" className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md" />
                        <h3 className="font-serif text-2xl font-bold text-brand-navy">David Chen</h3>
                        <p className="text-brand-sunset text-sm font-bold uppercase tracking-wider mb-3">Lead Investor</p>
                        <p className="text-brand-gray text-sm font-sans">Partner at Global Ventures, backing innovative tech startups that disrupt the travel industry.</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="font-serif text-4xl font-bold text-brand-navy mb-10 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border border-brand-navy/10 rounded-2xl overflow-hidden shadow-sm">
                            <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full text-left px-8 py-6 font-bold text-brand-navy text-lg flex justify-between items-center outline-none">
                                {faq.q}
                                <span className="text-brand-sunset text-2xl">{openFaq === index ? '−' : '+'}</span>
                            </button>
                            {openFaq === index && <div className="px-8 pb-6 text-brand-gray font-sans border-t border-brand-navy/10 pt-4 text-base">{faq.a}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default About;