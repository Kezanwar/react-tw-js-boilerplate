import React from 'react';
import { motion } from 'framer-motion';

const TestIndex = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="flex justify-center "
    >
      <h4 className="text-cyan-700 font-extrabold">
        <span className=" text-black">Test Outlet -</span> on /test
      </h4>
    </motion.div>
  );
};

TestIndex.propTypes = {};

export default TestIndex;
