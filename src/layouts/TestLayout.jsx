import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const TestLayout = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mb-10"
      >
        <h1 className="text-xl font-bold">This is the Test Layout</h1>
      </motion.div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

TestLayout.propTypes = {};

export default TestLayout;
