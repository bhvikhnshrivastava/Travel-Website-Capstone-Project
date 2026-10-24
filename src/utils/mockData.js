export const EXCHANGE_RATE = 90;
export const FALLBACK_IMG = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800";
export const formatPrice = (priceInEur, currency) => currency === 'INR' ? `₹${(priceInEur * EXCHANGE_RATE).toLocaleString('en-IN')}` : `€${priceInEur}`;

const BLOGS = [
    { id: 1, title: "Chasing Sunsets in Santorini", author: "Elena Rossi", date: "Oct 24, 2026", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800", content: "Discover the best hidden spots in Oia to watch the sun dip below the caldera without the massive crowds. The vibrant blues of the domes contrast beautifully with the fiery sky." },
    { id: 2, title: "A Culinary Journey Through Tokyo", author: "Kenji Sato", date: "Oct 22, 2026", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800", content: "From Michelin-starred sushi to late-night ramen stalls, here is your ultimate foodie guide to Japan's capital. Explore the narrow alleys of Omoide Yokocho for an unforgettable meal." },
    { id: 3, title: "The Ultimate Safari Packing List", author: "David L.", date: "Oct 20, 2026", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800", content: "Don't forget these 15 essential items when preparing for your once-in-a-lifetime African safari. Binoculars, neutral-colored clothing, and plenty of memory cards are just the beginning." }
];
export const ALL_BLOGS = [...BLOGS, ...BLOGS.map((b, i) => ({ ...b, id: b.id + 8, title: b.title + " (Part 2)" })), ...BLOGS.map((b, i) => ({ ...b, id: b.id + 16, title: b.title + " (Part 3)" }))];

const HOTEL_IMAGES = ["https://images.unsplash.com/photo-1566073771259-6a8506099945","https://images.unsplash.com/photo-1582719508461-905c673771fd","https://images.unsplash.com/photo-1571896349842-33c89424de2d","https://images.unsplash.com/photo-1590490360182-c33d57733427","https://images.unsplash.com/photo-1578683010236-d716f9a3f461","https://images.unsplash.com/photo-1584132967334-10e028bd69f7"];
const HOTEL_TYPES = ["Gateway", "Boutique Hotel", "Seaside Villa", "Urban Suites", "Historic Inn", "Eco-Lodge"];
const CITIES = { HR: ["Dubrovnik", "Split", "Hvar", "Zagreb"], US: ["New York", "Miami", "Aspen", "San Francisco"], GB: ["London", "Edinburgh", "Bath", "Manchester"] };
const AMENITIES_POOL = [["Free Wi-Fi", "Swimming Pool", "Spa", "Gym"],["Ocean View", "Balcony", "Air Conditioning", "Bar"],["Kitchenette", "Pet Friendly", "Parking", "Room Service"],["Butler Service", "Private Beach", "Fine Dining", "Helipad"]];

export const ALL_HOTELS = (() => {
    const hotels = []; let id = 1;
    ['HR', 'US', 'GB'].forEach(country => {
        for (let i = 0; i < 15; i++) {
            const city = CITIES[country][i % CITIES[country].length];
            const basePrice = Math.floor(Math.random() * 300) + 100;
            const type = HOTEL_TYPES[i % HOTEL_TYPES.length];
            hotels.push({
                id: `h_${id++}`, name: `Mussoorie ${type}`, city, country,
                rating: (Math.random() * 2 + 7.5).toFixed(1), reviews: Math.floor(Math.random() * 800) + 50,
                price: basePrice, oldPrice: Math.floor(basePrice * 1.5),
                img: `${HOTEL_IMAGES[(id + i) % HOTEL_IMAGES.length]}?auto=format&fit=crop&q=80&w=800`,
                description: `Set in a peaceful location, Mussoorie ${type} offers fully furnished accommodations and leisure amenities for a perfect mountain vacation.`,
                amenities: AMENITIES_POOL[i % AMENITIES_POOL.length]
            });
        }
    });
    return hotels;
})();