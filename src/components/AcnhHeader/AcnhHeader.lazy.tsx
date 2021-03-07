import React, { lazy, Suspense } from 'react';

const LazyAcnhHeader = lazy(() => import('./AcnhHeader'));

const AcnhHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAcnhHeader {...props} />
  </Suspense>
);

export default AcnhHeader;
