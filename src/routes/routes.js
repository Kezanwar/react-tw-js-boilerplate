import { useLocation, useRoutes } from 'react-router-dom';

// layouts
import TestLayout from '../layouts/TestLayout';

// pages
import { HomePage, TestIndexPage, TestOnePage, TestThreePage, TestTwoPage } from './elements';

// config
import { PATH_TEST, TEST_ONE, TEST_THREE, TEST_TWO } from './paths';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

// ----------------------------------------------------------------------

export default function Router() {
  const elements = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: PATH_TEST.root,
      element: <TestLayout />,
      children: [
        { element: <TestIndexPage />, index: true },
        {
          path: TEST_ONE,
          element: <TestOnePage />,
        },
        {
          path: TEST_TWO,
          element: <TestTwoPage />,
        },
        {
          path: TEST_THREE,
          element: <TestThreePage />,
        },
      ],
    },
  ]);
  const location = useLocation();
  if (!elements) return null;
  return <AnimatePresence mode="wait">{React.cloneElement(elements, { key: location.pathname })}</AnimatePresence>;
}
