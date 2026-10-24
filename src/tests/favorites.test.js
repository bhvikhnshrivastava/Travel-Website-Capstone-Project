import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';
import HotelCard from '../components/HotelCard';
import { MemoryRouter } from 'react-router-dom';

const hotel = {
  id: '1',
  name: 'Test Hotel',
  city: 'Delhi',
  price: 100,
  rating: 4.5,
};

test('renders hotel and toggles wishlist', () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  render(
    <Provider store={store}>
      <MemoryRouter>
        <HotelCard hotel={hotel} />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText('Test Hotel')).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText('wishlist'));
  const saved = JSON.parse(localStorage.getItem('favorites'));
  expect(saved.length).toBe(1);
});