import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 h-[100vh] w-[100vw] flex justify-center items-center bg-black bg-opacity-60 z-20">
      <h1 className="text-white">LOADING....</h1>
    </div>
  );
};

LoadingScreen.propTypes = {};

export default LoadingScreen;
