import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FaFacebook, FaTwitter, FaLinkedinIn, FaWhatsapp,
} from 'react-icons/fa';
import { getFreelancersAction } from '../redux/freelancersReducer';

const Freelancers = () => {
  const freelancers = useSelector((state) => state.freelancers);
  const dispatch = useDispatch();
  /* eslint-disable */
  useEffect(() => {
    dispatch(getFreelancersAction());
  }, []);
  console.log(freelancers);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-7 xl:pl-0">
        {!freelancers.length ? (
          <div className="flex items-center justify-center font-bold text-lg w-full h-64 text-red-500">
            Freelancers Not Available At This Moment!
          </div>
        ) : (
          <>
            <div className="text-center mt-16 xl:mt-2">
              <h1 className="text-2xl font-black m-0 py-3 leading-4">AVAILABLE FREELANCERS</h1>
              <p className="text-gray-400 m-0 py-1 leading-3">Select a freelancer</p>
            </div>
            <hr className="border-t-2 border-dashed border-gray-200 w-48 m-0 xl:my-4 invisible xl:visible" />
            <div className="m-0 p-0 md:grid md:grid-cols-3 lg:grid-cols-3 lg:gap-4 flex flex-col items-center lg:items-start justify-center w-full">
              {freelancers.map((fl) => (
                <Link to={`/details/${fl.id}`} type="button" key={fl.id}>
                  <div className="border col-auto rounded shadow-lg px-4 mb-6 flex flex-col items-center justify-center mobileWidth mobilePadding mx-auto" key={fl.id}>
                    <img src={fl.featured_image ? fl.featured_image['url'] : 'default.png'} alt={fl.name} className="w-60 h-60 rounded-full p-1 my-1 bg-slate-100 border-slate-700" />
                    <h2 className="uppercase font-bold my-1">{fl.name}</h2>
                    <hr className="border-t-2 border-dashed border-gray-200 w-48 my-2" />
                    <p className="text-gray-400 text-center my-2 w-full">{fl.details}</p>
                    <div className="flex items-center justify-center w-full m-3">
                      <FaTwitter size={32} className="text-gray-500 hover:text-gray-300 w-6 mx-2" />
                      <FaFacebook size={32} className="text-gray-500 hover:text-gray-300 w-6 mx-2" />
                      <FaLinkedinIn size={32} className="text-gray-500 hover:text-gray-300 w-6 mx-2" />
                      <FaWhatsapp size={32} className="text-gray-500 hover:text-gray-300 w-6 mx-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )
        }
      </div>
    </>
  );
};

export default Freelancers;
