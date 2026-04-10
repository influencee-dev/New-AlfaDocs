/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Solution from './pages/Solution';
import Academy from './pages/Academy';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="prezzi" element={<Pricing />} />
          <Route path="soluzioni/:category" element={<Solution />} />
          <Route path="soluzioni/:category/:id" element={<Solution />} />
          {/* Catch-all for other links in the menu to show the generic solution page for now */}
          <Route path="soluzioni" element={<Solution />} />
          <Route path="branche" element={<Solution />} />
          <Route path="branche/:id" element={<Solution />} />
          <Route path="risorse" element={<Solution />} />
          <Route path="risorse/:id" element={<Solution />} />
          <Route path="academy" element={<Academy />} />
          <Route path="academy/:id" element={<Solution />} />
          <Route path="academy/blog" element={<Solution />} />
          <Route path="academy/blog/:id" element={<Solution />} />
          <Route path="chi-siamo" element={<Solution />} />
          <Route path="chi-siamo/:id" element={<Solution />} />
          <Route path="accedi" element={<Solution />} />
          <Route path="prenotazione/:id" element={<Solution />} />
          <Route path="prenota-online" element={<Solution />} />
          <Route path="alia" element={<Solution />} />
          <Route path="cookies" element={<Solution />} />
          <Route path="privacy" element={<Solution />} />
          <Route path="condizioni-generali" element={<Solution />} />
          <Route path="*" element={<Solution />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

