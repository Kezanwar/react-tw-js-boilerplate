import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router';

const TestTwo = () => {
  const { pathname } = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="flex justify-center "
    >
      <h4 className="text-blue-400 font-extrabold">
        <span className=" text-black">Test Outlet -</span> on {pathname}
      </h4>
    </motion.div>
  );
};

TestTwo.propTypes = {};

export default TestTwo;
