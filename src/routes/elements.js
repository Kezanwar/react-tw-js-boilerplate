import { Suspense, lazy } from 'react';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// * Home

export const HomePage = Loadable(lazy(() => import('../pages/home/Home')));

// ----------------------------------------------------------------------

// * Test Pages

export const TestIndexPage = Loadable(lazy(() => import('../pages/test/TestIndex')));
export const TestOnePage = Loadable(lazy(() => import('../pages/test/TestOne')));
export const TestTwoPage = Loadable(lazy(() => import('../pages/test/TestTwo')));
export const TestThreePage = Loadable(lazy(() => import('../pages/test/TestThree')));
