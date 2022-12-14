import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaFacebook, FaTwitter, FaLinkedinIn, FaWhatsapp,
} from 'react-icons/fa';
import '../index.css';
import { isLoggedIn } from '../auth/authHelpers';
import BaseUrl from '../redux/base_url';

const Navigation = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    fetch(`${BaseUrl}users/sign_out`, {
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

  const toggleMenu = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      <div className="fixed top-0 z-10 flex items-center justify-between w-full p-9 border rounded shadow-lg bg-bgDefault xl:hidden sm:border-gray-200">
        <Link to="/" onClick={() => setShow(false)} className="flex items-center justify-between space-x-3 text-white hover:text-clrSec focus:outline-none focus:text-indigo-200">
          <span className="flex items-center justify-between text-2xl leading-6 text-clrPrime">
            GoFreeLancer
          </span>
        </Link>
        <div aria-label="toggler" className="flex items-center justify-center text-indigo-300">
          <button type="button" id="open" aria-label="open" onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} focus:outline-none focus:ring-2`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <button type="button" id="close" aria-label="close" onClick={() => setShow(!show)} className={`${show ? '' : 'hidden'} focus:outline-none focus:ring-2`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div id="Main" className={`${show ? 'translate-x-0' : '-translate-x-full'} xl:translate-x-0 transform ease-in-out xl:ease-linear transition duration-500 side__bar`}>
        <div>
          <Link to="/" onClick={() => toggleMenu()} type="button" className="hidden items-center justify-start w-full p-6 space-x-3 text-xl font-bold text-clrPrime xl:text-3xl xl:block">
            GoFreelancers
          </Link>
          <div className="flex flex-col items-center justify-start w-full px-1">
            <Link to="/" onClick={() => toggleMenu()} type="button" className="nav__link">
              FREELANCERS
            </Link>
            <Link to="/reserve" onClick={() => toggleMenu()} type="button" className="nav__link">
              RESERVE
            </Link>
            <Link to="/myreservation" onClick={() => toggleMenu()} type="button" className="nav__link">
              MY RESERVATIONS
            </Link>
            {isLoggedIn() ? (
              <>
                <Link to="/addfreelancer" onClick={() => toggleMenu()} type="button" className="nav__link">
                  ADD FREELANCER
                </Link>
                <Link to="/deletefreelancer" onClick={() => toggleMenu()} type="button" className="nav__link">
                  DELETE FREELANCER
                </Link>
                <button onClick={() => handleSignOut()} type="button" className="flex items-center justify-start w-full py-3 pl-6 space-x-6 font-bold text-red-500 rounded focus:outline-none focus:text-700 hover:text-red-600 ">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" onClick={() => toggleMenu()} type="button" className="nav__link">
                  SIGN IN
                </Link>
                <Link to="/signup" onClick={() => toggleMenu()} type="button" className="nav__link">
                  SIGN UP
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
