import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StateContext, useStateContext } from '../context/StateContext';
import Cart from './Cart';
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } =
    useStateContext() as StateContext;
  return (
    <div className='navbar-container'>
      <p>
        <Link href='/'>Sanity Store</Link>
      </p>
      <button
        type='button'
        className='cart-icon'
        onClick={() => {
          setShowCart(true);
        }}
      >
        <AiOutlineShoppingCart />
        <span className='cart-item-qty'>1</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
