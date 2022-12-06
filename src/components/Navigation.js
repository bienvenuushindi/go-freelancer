import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaFacebook, FaTwitter, FaLinkedinIn, FaWhatsapp,
} from 'react-icons/fa';

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
          <Link to="/" type="button" className="flex items-center justify-center w-full py-6 text-xl text-clrPrime xl:text-3xl">
            GoFreelancers
          </Link>
          <div className="flex flex-col items-center justify-start w-full px-1 mt-4 ">
            <Link to="/" type="button" className="flex items-center w-full py-3 pl-6 space-x-6 font-bold text-black rounded focus:outline-none focus:bg-clrPrime jusitfy-start hover:bg-clrPrime ">
              <p className="font-bold leading-4 text-black border-b border-transparent hover:border-clrSec focus:border-clrSec">FREELANCERS</p>
            </Link>
            <Link to="/reserve" type="button" className="flex items-center w-full py-3 pl-6 space-x-6 font-bold text-black rounded focus:outline-none focus:bg-clrPrime jusitfy-start hover:bg-clrPrime ">
              <p className="font-bold leading-4 text-black border-b border-transparent hover:border-clrSec focus:border-white ">RESERVE</p>
            </Link>
            <Link to="/myreservation" type="button" className="flex items-center w-full py-3 pl-6 space-x-6 font-bold text-black rounded focus:outline-none focus:bg-clrPrime jusitfy-start hover:bg-clrPrime ">
              <p className="font-bold leading-4 text-black border-b border-transparent hover:border-clrSec focus:border-white ">MY RESERVATIONS</p>
            </Link>
            <Link to="/addfreelancer" type="button" className="flex items-center w-full py-3 pl-6 space-x-6 font-bold text-black rounded focus:outline-none focus:bg-clrPrime jusitfy-start hover:bg-clrPrime ">
              <p className="font-bold leading-4 text-black border-b border-transparent hover:border-clrSec focus:border-white ">ADD FREELANCER</p>
            </Link>
            <Link to="/deletefreelancer" type="button" className="flex items-center w-full py-3 pl-6 space-x-6 font-bold text-black rounded focus:outline-none focus:bg-clrPrime jusitfy-start hover:bg-clrPrime ">
              <p className="font-bold leading-4 text-black border-b border-transparent hover:border-clrSec focus:border-white ">DELETE FREELANCER</p>
            </Link>
            <button onClick={() => handleSignOut()} type="button" className="flex items-center justify-start w-full py-3 pl-6 space-x-6 font-bold text-red-500 rounded focus:outline-none focus:text-700 hover:text-red-600 ">
              <p className="leading-4 border-b border-transparent text-danger">Logout</p>
            </button>
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
