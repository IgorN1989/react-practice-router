import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout';
// import { SubBreeds } from './Subbreeds';
// import { Gallery } from './Gallery';

const Home = lazy(() => import('../pages/Home'));
const Dogs = lazy(() => import('../pages/Dogs'));
const DogDetails = lazy(() => import('../pages/DogDetails'));
const SubBreeds = lazy(() =>
  import('./SubBreeds').then(module => ({
    ...module,
    default: module.SubBreeds,
  }))
);
const Gallery = lazy(() =>
  import('./Gallery').then(module => ({
    ...module,
    default: module.Gallery,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<SubBreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
