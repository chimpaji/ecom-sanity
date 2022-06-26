// @ts-nocheck
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
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
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
