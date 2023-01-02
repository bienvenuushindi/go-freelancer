import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { FaRegSadTear } from 'react-icons/fa';
import BaseUrl from '../redux/base_url';
import { getFreelancersAction } from '../redux/freelancersReducer';
import defaultImage from '../images/avatar.png';
import showMessage, { showError } from '../helpers';
import { tableListLoader } from '../components/Loaders';

const DeleteFreelancers = () => {
  const freelancers = useSelector((state) => state.freelancers);
  const loading = useSelector((state) => state.loading);
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
          { loading ? (
                  tableListLoader()
          ):(
              (freelancers.length === 0) ? (
            <div className="flex items-center justify-center font-bold text-lg w-full h-64 text-6xl text-clrPrime">
              No Record Found! <FaRegSadTear className="spinner"/>
            </div>
        ) : (
          <>
            {freelancers.map((fl) => (
              <div key={fl.id} className="flex items-center justify-center w-11/12 mt-3 ">
                <div className="flex  items-center justify-around w-full py-2 bg-white rounded-lg shadow-lg flex-row">
                  <img className="rounded-full h-20 w-20 " src={fl.featured_image ? fl.featured_image['url'] : defaultImage} alt={fl.name}  />
                  <div className="flex-grow md:ml-10 grid grid-cols-3 gap-5">
                    <div>
                      <div className="text-xs font-bold text-gray-400">Name:</div>
                      <div className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{fl.name}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400">Location:</div>
                      <div className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{fl.location}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400">Fee:</div>
                      <div className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">${fl.fee}</div>
                    </div>
                  </div>
                    <small>
                        <button onClick={() => handleDelete(fl.id)} type="button"
                                className="px-2 py-1 font-semibold bg-transparent border border-red-400 rounded hover:bg-red-500 text-grey-700 hover:text-white m-7 border-blue">
                            Delete
                        </button>
                    </small>

                </div>
              </div>
            ))}
          </>
        )
        )}
      </div>
    </>
  );
};

export default DeleteFreelancers;
