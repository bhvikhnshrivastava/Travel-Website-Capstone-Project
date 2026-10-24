import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../redux/actions/blogActions';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((s) => s.blogs);
  const [page, setPage] = useState(1);
  const per = 9;

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const paginated = blogs.slice((page - 1) * per, page * per);
  const total = Math.ceil(blogs.length / per);

  return (
    <main>
      {/* Cinematic Hero */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-50" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Discover Your Next <span className="text-accent">Adventure</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Explore breathtaking destinations, find luxury stays, and read stories from fellow travelers.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-accent hover:bg-sky-400 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-accent/50">
              Explore Hotels
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-primary">Travel Stories</h2>
            <p className="text-gray-500 mt-1">Tips, guides, and inspiration for your next trip.</p>
          </div>
        </div>
        
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.length === 0 ? (
                <p className="col-span-3 text-gray-500 text-center py-10">No blogs loaded. Check API keys.</p>
              ) : (
                paginated.map((b) => <BlogCard key={b.id} blog={b} />)
              )}
            </div>
            <Pagination currentPage={page} totalPages={total} onPageChange={setPage} />
          </>
        )}
      </section>
    </main>
  );
};

export default Home;