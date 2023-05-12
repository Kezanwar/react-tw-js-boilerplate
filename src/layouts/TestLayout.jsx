import React from 'react';
import { Outlet } from 'react-router-dom';

const TestLayout = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <div className="mb-10">
        <h1 className="text-xl font-bold">This is the Test Layout</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

TestLayout.propTypes = {};

export default TestLayout;
