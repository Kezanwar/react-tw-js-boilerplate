import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10"
    >
      <div className="bg-[#ffb48e] rounded-xl">
        <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 md:w-auto">
          <img src="https://media.giphy.com/media/7NoNw4pMNTvgc/giphy.gif" className="w-64 rounded-lg" alt="meow" />
          <div className="mt-3 font-semibold text-2xl mb-1">Hello World!</div>
          <div className="text-sm font-light  md:w-auto">Happy hacking...</div>
        </div>
      </div>
    </motion.div>
  );
};

Home.propTypes = {};

export default Home;
