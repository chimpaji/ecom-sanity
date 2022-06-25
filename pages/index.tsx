import React from 'react';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className='products-heading'>
        <h2>Best sellign produts</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {['Products1', 'Produts2'].map((p, k) => (
          <div key={k}>{p}</div>
        ))}
      </div>
    </>
  );
};

export default Home;
