const Footer = () => (
  <footer className="bg-primary text-white mt-16 py-10">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-4">
      <div>
        <h3 className="font-bold text-lg mb-2">Wanderlust</h3>
        <p className="text-sm opacity-80">Explore the world with ease.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Quick Links</h4>
        <ul className="text-sm space-y-1 opacity-80">
          <li>Hotels</li>
          <li>Blogs</li>
          <li>About</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Contact</h4>
        <p className="text-sm opacity-80">support@wanderlust.com</p>
        <p className="text-sm opacity-80">+1 555 123 4567</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Newsletter</h4>
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-2 rounded text-black"
          required
        />
      </div>
    </div>
    <p className="text-center text-xs mt-6 opacity-70">
      (c) 2025 Wanderlust. All rights reserved.
    </p>
  </footer>
);

export default Footer;