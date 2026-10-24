import { useParams, Link } from 'react-router-dom';
import { ALL_BLOGS, FALLBACK_IMG } from '../utils/mockData';

const BlogDetail = () => {
    const { id } = useParams();
    const blog = ALL_BLOGS.find(b => b.id === parseInt(id));
    if (!blog) return <div className="pt-40 text-center font-serif text-3xl text-brand-navy">Story not found.</div>;

    return (
        <div className="page-enter pt-32 bg-brand-sand">
            <div className="w-full h-[500px] relative">
                <img src={blog.img} onError={(e) => { e.target.src = FALLBACK_IMG; }} alt={blog.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-navy/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6 max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">{blog.title}</h1>
                        <div className="flex items-center justify-center gap-6 text-white font-bold uppercase tracking-widest text-xs drop-shadow-md">
                            <span>By {blog.author}</span><span>•</span><span>{blog.date}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-20 bg-white rounded-3xl -mt-10 relative z-20 shadow-xl border border-brand-navy/5">
                <Link to="/" className="relative z-30 inline-flex items-center gap-2 text-brand-gray hover:text-brand-sunset font-bold uppercase tracking-widest text-[10px] mb-10 transition-colors cursor-pointer">
                    &larr; Back to Stories
                </Link>
                <p className="text-xl text-brand-navy font-serif leading-relaxed mb-8 first-letter:text-6xl first-letter:font-bold first-letter:text-brand-sunset first-letter:float-left first-letter:mr-4">{blog.content}</p>
                <p className="text-lg text-brand-gray leading-relaxed mb-6 font-sans">Traveling here is not just about the destination; it's about the journey and the connections you make along the way. The local cuisine, the culture, and the warm hospitality of the people will leave a lasting impression on you.</p>
                <div className="mt-16 pt-8 border-t border-gray-200 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-brand-navy flex items-center justify-center text-white font-serif text-2xl font-bold">{blog.author.charAt(0)}</div>
                    <div>
                        <p className="font-bold text-brand-navy text-lg">{blog.author}</p>
                        <p className="text-sm text-brand-gray font-sans">Travel Writer & Photographer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BlogDetail;