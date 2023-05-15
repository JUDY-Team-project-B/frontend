import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface IProps {
  children: ReactNode;
}
export const Layout = ({ children }: IProps) => {
  return (
    <div>
      <Header />
      <main className="relative py-9 | w-f-full relative px-4">{children}</main>
      <Footer />
    </div>
  );
};
