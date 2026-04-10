import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import DownloadHubSpotButton from './DownloadHubSpotButton';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
        <DownloadHubSpotButton />
      </main>
      <Footer />
    </div>
  );
}
