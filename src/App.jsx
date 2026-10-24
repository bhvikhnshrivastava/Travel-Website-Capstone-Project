// Add this import at the top:
import About from './pages/About';

// Add this inside your <Routes>:
<Route path="/about" element={<About />} />

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadFavorites } from './redux/actions';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import Hotels from './pages/Hotels';
import HotelDetail from './pages/HotelDetail';
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-brand-sand">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotel/:id" element={<HotelDetail />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;