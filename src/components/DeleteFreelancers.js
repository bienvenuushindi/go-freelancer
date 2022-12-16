import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import BaseUrl from '../redux/base_url';
import { getFreelancersAction } from '../redux/freelancersReducer';

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
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-7 xl:pl-0">
        {!freelancers.length ? (
          <div className="flex justify-center m-auto mt-20 w-80 align-center">
            <h1 className="text-2xl font-black m-0 py-3 mt-20 leading-4 uppercase ">No Records Found!</h1>
          </div>
        ) : (
          <>
            {freelancers.map((fl) => (
              <div key={fl.id} className="flex items-center justify-center w-11/12 mt-5 ">
                <div className="flex flex-col items-center justify-around w-screen py-5 bg-white rounded-lg shadow-lg sm:flex-row">
                  <div className="w-20">
                    <img className="rounded-full" src={fl.photo} alt="doctor" />
                  </div>
                  <div className="flex items-center mt-7">
                    <div className>
                      <p className="text-xs font-bold text-grey-400">Doctor:</p>
                      <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{fl.name}</p>
                    </div>
                    <div className="ml-12">
                      <p className="text-xs font-bold text-grey-400">City:</p>
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
