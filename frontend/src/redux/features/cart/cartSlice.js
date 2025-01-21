import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          title: 'Product added to cart!',
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: 'Product already in cart!',

          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Add to cart again',
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
    },
    clearCart: state => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
