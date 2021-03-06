import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { Banner } from '../types/types';
type FooterBannerProps = {
  footerBanner: Banner | null;
};

const FooterBanner = ({ footerBanner }: FooterBannerProps) => {
  const {
    _createdAt,
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    desc,
    buttonText,
    image,
  } = footerBanner || {};
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <Image
          src={urlFor(image).toString()}
          alt='footer-banner-image'
          className='footer-banner-image'
          width={350}
          height={350}
          layout='raw'
        />
      </div>
    </div>
  );
};

export default FooterBanner;
