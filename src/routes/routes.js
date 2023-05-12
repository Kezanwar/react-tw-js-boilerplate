import { useRoutes } from 'react-router-dom';

// layouts
import TestLayout from '../layouts/TestLayout';

// pages
import { HomePage, TestIndexPage, TestOnePage, TestThreePage, TestTwoPage } from './elements';

// config
import { PATH_TEST, TEST_ONE, TEST_THREE, TEST_TWO } from './paths';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
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
}
