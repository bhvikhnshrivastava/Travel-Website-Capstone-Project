import axios from 'axios';
import { ALL_BLOGS, ALL_HOTELS } from '../../utils/mockData';

// Add your actual keys here or in a .env file
const BLOGGER_API_KEY = import.meta.env.VITE_BLOGGER_API_KEY || '';
const BLOG_ID = import.meta.env.VITE_BLOG_ID || '';
const LITEAPI_KEY = import.meta.env.VITE_LITEAPI_KEY || '';

export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';

// 1. Fetch Blogs (Blogger API)
export const fetchBlogs = () => async (dispatch) => {
    try {
        if (!BLOGGER_API_KEY || !BLOG_ID) throw new Error("No API keys");
        const res = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${BLOGGER_API_KEY}`);
        
        // Map Blogger data to our UI format
        const fetchedBlogs = res.data.items.map((item, index) => ({
            id: index + 100,
            title: item.title,
            author: item.author.displayName,
            date: new Date(item.published).toDateString(),
            img: item.images ? item.images[0].url : ALL_BLOGS[0].img,
            content: item.content.replace(/<[^>]+>/g, '').slice(0, 200) // strip HTML
        }));
        dispatch({ type: FETCH_BLOGS_SUCCESS, payload: fetchedBlogs });
    } catch (error) {
        console.warn("Blogger API failed or missing keys. Using Mock Data.");
        dispatch({ type: FETCH_BLOGS_SUCCESS, payload: ALL_BLOGS }); // Fallback to mock data
    }
};

// 2. Fetch Hotels (LiteAPI)
export const fetchHotels = (countryCode) => async (dispatch) => {
    try {
        if (!LITEAPI_KEY) throw new Error("No API keys");
        const res = await axios.get(`https://api.liteapi.travel/v3.0/data/hotels?countryCode=${countryCode}`, {
            headers: { 'X-API-Key': LITEAPI_KEY }
        });
        
        const fetchedHotels = res.data.data.slice(0, 50).map((item, index) => ({
            id: item.id,
            name: item.name,
            city: item.city || 'Unknown',
            country: countryCode,
            rating: item.rating || '4.5',
            reviews: item.reviewCount || 120,
            price: item.price || 150,
            oldPrice: (item.price || 150) * 1.5,
            img: item.main_photo || ALL_HOTELS[0].img,
            description: item.description || 'A beautiful stay.',
            amenities: item.amenities || ["Wi-Fi", "Pool"]
        }));
        dispatch({ type: FETCH_HOTELS_SUCCESS, payload: fetchedHotels });
    } catch (error) {
        console.warn("LiteAPI failed or missing keys. Using Mock Data.");
        // Fallback to our mock data filtered by country
        const filteredHotels = ALL_HOTELS.filter(h => h.country === countryCode);
        dispatch({ type: FETCH_HOTELS_SUCCESS, payload: filteredHotels }); 
    }
};