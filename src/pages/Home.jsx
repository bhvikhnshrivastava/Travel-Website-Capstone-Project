import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../redux/actions/apiActions';
import { ALL_BLOGS } from '../utils/mockData';
import BlogCard from '../components/BlogCard';

const Home = () => {
    const dispatch = useDispatch();
    const { items: blogs } = useSelector(state => state.blogs);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    useEffect(() => {
        if (blogs.length === 0) {
            dispatch(fetchBlogs());
        }
    }, [dispatch, blogs.length]);

    // Use API data if available, otherwise fallback to Mock Data
    const activeBlogs = blogs.length > 0 ? blogs : ALL_BLOGS;
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = activeBlogs.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(activeBlogs.length / postsPerPage);

    return (
        <div className="page-enter pt-32">
            <div className="relative h-[550px] flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2000')" }}>
                <div className="absolute inset-0 bg-brand-navy/40"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="text-brand-sunset font-bold tracking-[0.4em] uppercase text-sm mb-4 block drop-shadow-md">Welcome to Bhvikhn</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-white font-bold mb-8 leading-tight drop-shadow-lg">Discover the Extraordinary</h1>
                    <p className="text-lg md:text-xl text-gray-100 mx-auto font-light drop-shadow font-sans">Curated travel guides, hidden gems, and luxury stays across the globe.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex justify-between items-end mb-12 border-b border-brand-navy/10 pb-6">
                    <h2 className="font-serif text-4xl font-bold text-brand-navy">Latest Stories</h2>
                    <span className="text-brand-gray text-xs font-bold uppercase tracking-widest">Page {currentPage} of {totalPages}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {currentPosts.map((blog, idx) => <BlogCard key={blog.id} blog={blog} idx={idx} currentPage={currentPage} />)}
                </div>

                <div className="flex flex-wrap justify-center mt-16 gap-3">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 ${currentPage === i + 1 ? 'bg-brand-navy text-white shadow-xl scale-110' : 'bg-white text-brand-navy border border-gray-200 hover:border-brand-sunset hover:text-brand-sunset'}`}>{i + 1}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;