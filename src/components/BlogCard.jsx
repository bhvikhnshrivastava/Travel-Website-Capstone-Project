import { Link } from 'react-router-dom';
import { FALLBACK_IMG } from '../utils/mockData';

const BlogCard = ({ blog, idx, currentPage }) => {
    const isFeatured = idx === 0 && currentPage === 1;
    return (
        <Link to={`/blog/${blog.id}`} className={`group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-navy/5 ${isFeatured ? 'md:col-span-2 md:flex-row' : ''}`}>
            <div className={`overflow-hidden relative ${isFeatured ? 'md:w-1/2 h-64 md:h-auto' : 'h-56'}`}>
                <img src={blog.img} onError={(e) => { e.target.src = FALLBACK_IMG; }} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className={`p-6 flex flex-col flex-grow ${isFeatured ? 'md:w-1/2 justify-center' : ''}`}>
                <div className="flex justify-between items-center text-[10px] font-bold text-brand-sunset uppercase tracking-widest mb-3">
                    <span>{blog.author}</span><span>{blog.date}</span>
                </div>
                <h3 className={`font-serif font-bold text-brand-navy group-hover:text-brand-sunset transition-colors mb-3 leading-snug ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl line-clamp-2'}`}>{blog.title}</h3>
                <p className="text-brand-gray line-clamp-3 text-sm leading-relaxed flex-grow font-sans">{blog.content}</p>
            </div>
        </Link>
    );
};
export default BlogCard;