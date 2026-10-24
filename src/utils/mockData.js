export const EXCHANGE_RATE = 90;
export const FALLBACK_IMG = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800";
export const formatPrice = (priceInEur, currency) => currency === 'INR' ? `₹${(priceInEur * EXCHANGE_RATE).toLocaleString('en-IN')}` : `€${priceInEur}`;

export const ALL_BLOGS = [
    { id: 1, title: "Chasing Sunsets in Santorini", author: "Elena Rossi", date: "Oct 24, 2026", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800", content: "Discover the best hidden spots in Oia to watch the sun dip below the caldera without the massive crowds. The vibrant blues of the domes contrast beautifully with the fiery sky." },
    { id: 2, title: "A Culinary Journey Through Tokyo", author: "Kenji Sato", date: "Oct 22, 2026", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800", content: "From Michelin-starred sushi to late-night ramen stalls, here is your ultimate foodie guide to Japan's capital. Explore the narrow alleys of Omoide Yokocho for an unforgettable meal." },
    { id: 3, title: "The Ultimate Safari Packing List", author: "David L.", date: "Oct 20, 2026", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800", content: "Don't forget these 15 essential items when preparing for your once-in-a-lifetime African safari. Binoculars, neutral-colored clothing, and plenty of memory cards are just the beginning." },
    { id: 4, title: "Hidden Gems of the Amalfi Coast", author: "Sofia Bianchi", date: "Oct 18, 2026", img: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?auto=format&fit=crop&q=80&w=800", content: "Beyond Positano lies a world of quiet fishing villages and lemon groves. Here is how to explore the Amalfi Coast like a local." },
    { id: 5, title: "A Weekend in the Swiss Alps", author: "Markus Weber", date: "Oct 15, 2026", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800", content: "From thrilling ski slopes to cozy chalets, here is your perfect 48-hour itinerary for the ultimate alpine escape." },
    { id: 6, title: "The Magic of Marrakech", author: "Amira Khan", date: "Oct 12, 2026", img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800", content: "Lose yourself in the vibrant souks, taste the rich tagines, and experience the warmth of Moroccan hospitality." },
    { id: 7, title: "Island Hopping in Greece", author: "Nikos Papadopoulos", date: "Oct 10, 2026", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800", content: "From Mykonos to Milos, discover the perfect route for your Greek island adventure." },
    { id: 8, title: "Exploring the Streets of Paris", author: "Claire Dubois", date: "Oct 08, 2026", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800", content: "Skip the Eiffel Tower and discover the real Paris through its hidden cafes and local markets." },
    { id: 9, title: "Northern Lights in Iceland", author: "Erik Jonsson", date: "Oct 05, 2026", img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=800", content: "A comprehensive guide to chasing the aurora borealis and exploring Iceland's rugged landscapes." },
    ...Array(9).fill(0).map((_, i) => ({ id: 10 + i, title: `Amazing Travel Story Part 2 - ${i+1}`, author: "Guest Writer", date: "Sep 28, 2026", img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=800", content: "More incredible travel insights and guides for the modern explorer." }))
];

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