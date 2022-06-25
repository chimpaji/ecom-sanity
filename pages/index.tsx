import React from 'react';
import FooterBanner from '../components/FooterBanner';
import HeroBanner from '../components/HeroBanner';

import { client } from '../lib/client';
import { Banner, BannerData, Products } from './types';

type HomeProps = {
  products: Products;
  bannerData: BannerData;
};

const Home = ({ products, bannerData }: HomeProps) => {
  console.log('products', products);
  console.log('banner', bannerData);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length ? bannerData[0] : null} />

      <div className='products-heading'>
        <h2>Best sellign produts</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((p, k) => (
          <div key={k}>{p.name}</div>
        ))}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
