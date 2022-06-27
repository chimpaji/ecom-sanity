// @ts-nocheck
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { Product } from '../pages/types';
type ProductProps = {
  product: Product;
};
const Product = ({ product: { image, name, price, slug } }: ProductProps) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <Image
            src={urlFor(image && image[0]).toString()}
            alt='product-img'
            width={250}
            height={250}
            layout='raw'
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
