import React, { useState } from 'react';
import { PATH_TEST } from '../../routes/paths';
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const testRoutes = Object.entries(PATH_TEST);

const Navigation = () => {
  const [showLoading, setShowLoading] = useState(false);

  const handleToddleLoading = () => {
    setShowLoading((prev) => !prev);
  };
  return (
    <>
      <nav className="bg-black p-6 flex justify-center">
        <ul className="text-white flex gap-5 font-medium">
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          {testRoutes.map(([key, route], index) => {
            return (
              <Link key={key} to={route}>
                <li>Test {index == 0 ? '' : index}</li>
              </Link>
            );
          })}
          <li className="cursor-pointer" onClick={handleToddleLoading}>
            Show Loading Screen
          </li>
        </ul>
      </nav>
      {showLoading ? <LoadingScreen /> : null}
    </>
  );
};

Navigation.propTypes = {};

export default Navigation;
