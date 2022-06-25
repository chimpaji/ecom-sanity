import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='layout'>
      <Head>
        <title>Sanity Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
