import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Header />
      <main className="flex-1">
        <Outlet /> {/* This is where nested route components will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
