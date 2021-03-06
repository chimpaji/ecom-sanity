import React from 'react';
import FooterBanner from '../components/FooterBanner';
import HeroBanner from '../components/HeroBanner';
import Product from '../components/Product';

import { client } from '../lib/client';
import { BannerData, Products } from '../types/types';

type HomeProps = {
  products: Products;
  bannerData: BannerData;
};

const Home = ({ products, bannerData }: HomeProps) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length ? bannerData[0] : null} />

      <div className='products-heading'>
        <h2>Best sellign produts</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((p, k) => (
          <Product key={p._id} product={p} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData.length ? bannerData[0] : null} />
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
