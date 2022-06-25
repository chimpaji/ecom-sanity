export type Product = {
  name: string;
  price: number;
  image: string;
};

export type Products = Product[];

export type Banner = typeof dummyBanner;

export type BannerData = Banner[];

const dummyBanner = {
  _createdAt: '2022-06-25T17:00:59Z',
  _id: 'c223e072-41e7-407c-b145-ea3e14b074c3',
  _rev: 'oV5AkreV0DW9Fuq9ch53ZG',
  _type: 'banner',
  _updatedAt: '2022-06-25T17:00:59Z',
  buttonText: 'Shop Now',
  desc: 'Best headphones on the market',
  discount: '20% OFF',
  image: {
    _type: 'image',
    asset: {
      _ref: 'image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp',
      _type: 'reference',
    },
  },
  largeText1: 'FINE',
  largeText2: 'SMILE',
  midText: 'Summer Sale',
  product: 'headphones',
  saleTime: '15 Nov to 7 Dec',
  smallText: 'Beats Solo Air',
};
