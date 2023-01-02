import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { FaRegSadTear } from 'react-icons/fa';
import BaseUrl from '../redux/base_url';
import { getFreelancersAction } from '../redux/freelancersReducer';
import defaultImage from '../images/avatar.png';
import showMessage, { showError } from '../helpers';

const DeleteFreelancers = () => {
  const freelancers = useSelector((state) => state.freelancers);
  const dispatch = useDispatch();
  /* eslint-disable */
  useEffect(() => {
    dispatch(getFreelancersAction());
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${BaseUrl}api/v1/freelancers/${id}`, { headers: { Authorization: localStorage.getItem('token') } })
      .then(() => {
        dispatch(getFreelancersAction());
        showMessage('Successfully Deleted')
      }).catch((err) => {
            showError()
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen lg:mx-4 mx-2 justify-center w-full p-7 xl:pl-0">
        {!freelancers.length ? (
            <div className="flex items-center justify-center font-bold text-lg w-full h-64 text-6xl text-clrPrime">
              No Records Found! <FaRegSadTear className="spinner"/>
            </div>
        ) : (
          <>
            {freelancers.map((fl) => (
              <div key={fl.id} className="flex items-center justify-center w-11/12 mt-5 ">
                <div className="flex flex-col items-center justify-around w-screen py-5 bg-white rounded-lg shadow-lg sm:flex-row">
                  <div className="w-20">
                    <img className="rounded-full" src={fl.featured_image ? fl.featured_image['url'] : defaultImage} alt={fl.name}  />
                  </div>
                  <div className="flex items-center mt-7">
                    <div className>
                      <p className="text-xs font-bold text-grey-400">Name:</p>
                      <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{fl.name}</p>
                    </div>
                    <div className="ml-12">
                      <p className="text-xs font-bold text-grey-400">Location:</p>
                      <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{fl.location}</p>
                    </div>
                    <div className="ml-12">
                      <p className="text-xs font-bold text-grey-400">Fee:</p>
                      <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">${fl.fee}</p>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(fl.id)} type="button" className="px-4 py-2 font-semibold bg-transparent border border-red-400 rounded hover:bg-red-500 text-grey-700 hover:text-white m-7 border-blue">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </>
        )
        }
      </div>
    </>
  );
};

export default DeleteFreelancers;
