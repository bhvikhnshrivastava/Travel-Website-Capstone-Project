import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import About from './pages/About';

// Page Transition Wrapper
const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-fade-up w-full">
      {children}
    </div>
  );
};

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-brand-sand overflow-hidden">
        <Header />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotel/:id" element={<HotelDetail />} />
              <Route path="/checkout/:id" element={<Checkout />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;