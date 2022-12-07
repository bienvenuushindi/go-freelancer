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

  // const freelancers = [
  //   {
  //     id: 1,
  //     name: 'Tom',
  //     details: 'Full-Stack Developer Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     photo: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg',
  //     fee: 280,
  //     location: 'Munich',
  //     specializations: ['Ruby', 'Rails'],
  //   },
  //   {
  //     id: 2,
  //     name: 'Cindy',
  //     details: 'Full-Stack Developer Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     photo: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/1445.jpg',
  //     fee: 280,
  //     location: 'Milan',
  //     specializations: ['JavaScript', 'React'],
  //   },
  //   {
  //     id: 3,
  //     name: 'Cindy',
  //     details: 'Full-Stack Developer Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     photo: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/1398.jpg',
  //     fee: 200,
  //     location: 'Milan',
  //     specializations: ['JavaScripts'],
  //   },
  // ];

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-6 lg:pl-0">
        <div className="text-center mt-20 xl:mt-2">
          <h1 className="text-2xl font-black m-0 py-3 leading-4">AVAILABLE FREELANCERS</h1>
          <p className="text-gray-400 m-0 py-1 leading-3">Select a freelancer</p>
        </div>
        <hr className="border-t-2 border-dashed border-gray-200 w-48 m-0 xl:my-4 invisible xl:visible" />
        <div className="m-0 p-0 lg:grid lg:grid-cols-3 lg:gap-4 flex flex-col items-center lg:items-start justify-center w-full">
          {freelancers.map((fl) => (
            <Link to={`/details/${fl.id}`} type="button" key={fl.id}>
              <div className="border col-auto rounded shadow-lg px-4 mb-6 flex flex-col items-center justify-center mobileWidth mobilePadding mx-auto" key={fl.id}>
                <img src={fl.photo} alt={fl.name} className="w-60 h-60 rounded-full p-1 my-1 bg-slate-100 border-slate-700" />
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
      </div>
    </>
  );
};

export default Freelancers;
