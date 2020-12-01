import React from 'react';

import Header from './components/Header';
import Testimonial from './components/Testimonial';

import Cadastro from './pages/Cadastro/index';

export default function App() {
  return (
    <div className="App">
      <Testimonial />

      <main className="Main">
        <Header className="Header" />
        <Cadastro />
      </main>
    </div>
  );
}
