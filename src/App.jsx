import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadFavorites } from './redux/actions/favoriteActions';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import HotelDetail from './pages/HotelDetail';
import Favorites from './pages/Favorites';
import About from './pages/About';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;