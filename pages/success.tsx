import React, { useEffect, useState } from 'react';
import { StateContext, useStateContext } from '../context/StateContext';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFirework } from '../lib/utils';
const Sucess = () => {
  //clearCart
  const { setCartItems, setTotalPrice, setTotalQuantities } =
    useStateContext() as StateContext;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFirework();
  }, []);
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email inbox for the receipt.</p>
        <p className='description'>
          If you have any quations, please email
          <a href='mailto:order@example.com' className='email'>
            order@example.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sucess;
