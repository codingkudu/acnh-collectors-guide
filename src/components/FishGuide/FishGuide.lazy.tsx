import React, { lazy, Suspense } from 'react';

const LazyFishGuide = lazy(() => import('./FishGuide'));

const FishGuide = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFishGuide {...props} />
  </Suspense>
);

export default FishGuide;
