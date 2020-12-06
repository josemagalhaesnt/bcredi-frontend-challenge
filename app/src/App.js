import React from 'react';

import ROUTES, { RenderRoutes } from './routes';

export default function App() {
  return (
    <div className="App">
      <main className="Main">
        <RenderRoutes routes={ROUTES} />
      </main>
    </div>
  );
}
