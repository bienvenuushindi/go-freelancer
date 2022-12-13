import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaFacebook, FaTwitter, FaLinkedinIn, FaWhatsapp,
} from 'react-icons/fa';
import '../index.css';
import { isLoggedIn } from '../auth/authHelpers';

const Navigation = () => {
  const url = 'http://localhost:3000/';
  const navigate = useNavigate();
  const handleSignOut = () => {
    fetch(`${url}users/sign_out`, {
      method: 'DELETE',
      headers: {
        'Content-Type': '*/*',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(() => {
        localStorage.clear();
      })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div>
      <div id="Main" className="border rounded fixed h-full bg-white flex justify-between w-64 flex-col">
        <div>
          <Link to="/" type="button" className="flex items-center justify-start w-full pl-6 py-6 text-xl font-bold text-clrPrime xl:text-3xl">
            GoFreelancers
          </Link>
          <div className="flex flex-col items-center justify-start w-full px-1 mt-4 ">
            <Link to="/" type="button" className="nav__link">
              FREELANCERS
            </Link>
            <Link to="/reserve" type="button" className="nav__link">
              RESERVE
            </Link>
            <Link to="/myreservation" type="button" className="nav__link">
              MY RESERVATIONS
            </Link>
            {isLoggedIn() ? (
              <>
                <Link to="/addfreelancer" type="button" className="nav__link">
                  ADD FREELANCER
                </Link>
                <Link to="/deletefreelancer" type="button" className="nav__link">
                  DELETE FREELANCER
                </Link>
                <button onClick={() => handleSignOut()} type="button" className="flex items-center justify-start w-full py-3 pl-6 space-x-6 font-bold text-red-500 rounded focus:outline-none focus:text-700 hover:text-red-600 ">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" type="button" className="nav__link">
                  sign in
                </Link>
                <Link to="/signup" type="button" className="nav__link">
                  sign up
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="pb-32 xl:pb-10 w-full flex flex-col items-center justify-start space-x-2 ">
          <div className="flex px-6 justify-start md:justify-end items-start  w-full md:w-auto md:items-center space-x-6 ">
            <button type="button" className="text-black  hover:text-gray-200 w-6">
              <FaTwitter size={24} />
            </button>
            <button type="button" className="text-black hover:text-gray-200 w-6">
              <FaFacebook size={24} />
            </button>
            <button type="button" className="text-black hover:text-gray-200 w-6">
              <FaLinkedinIn size={24} />
            </button>
            <button type="button" className="text-black hover:text-gray-200 w-6">
              <FaWhatsapp size={24} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navigation;
