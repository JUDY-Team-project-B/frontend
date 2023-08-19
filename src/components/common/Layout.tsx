import React, { ReactNode } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer';

interface IProps {
  children: ReactNode;
}
export const Layout = ({ children }: IProps) => {
  return (
    <main className="flex flex-col h-screen">
      {/* <Header /> */} 
      <section className="flex-grow max-w-6xl mx-auto py-12 sm:px-6 lg:px-8">
        {children}
      </section>
      <Footer />
    </main>
  );
};
