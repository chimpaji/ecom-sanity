import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Image from 'next/image';
import { Banner } from '../pages/types';
type HeroBannerProps = {
  heroBanner: Banner | null;
};

const HeroBanner = ({ heroBanner }: HeroBannerProps) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner?.smallText}</p>
        <h3>{heroBanner?.midText}</h3>
        <h1>{heroBanner?.largeText1}</h1>
        <Image
          src={urlFor(heroBanner?.image).toString()}
          alt='headphones'
          width={500}
          height={500}
          layout='raw'
          className='hero-banner-image'
        />
        <div>
          <Link href={`/product/${heroBanner?.product}`}>
            <button>{heroBanner?.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>DESCRTIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
