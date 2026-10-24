const BlogCard = ({ blog }) => {
  const image = blog.images && blog.images[0] && blog.images[0].url;
  const plain = (blog.content || '').replace(/<[^>]+>/g, '').slice(0, 120);

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      <div className="relative h-56 overflow-hidden">
        {image ? (
          <img src={image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent" />
        )}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
          Travel
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
          {blog.title}
        </h3>
        <p className="text-gray-500 text-sm flex-1 leading-relaxed">
          {plain}...
        </p>
        <a
          href={blog.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 text-accent font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
        >
          Read Article <span>&rarr;</span>
        </a>
      </div>
    </article>
  );
};

export default BlogCard;