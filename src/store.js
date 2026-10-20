import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/CartSlice.jsx';

export const store = configureStore({ reducer: { cart: cartReducer } });
