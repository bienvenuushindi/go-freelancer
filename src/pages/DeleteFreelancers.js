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
        await axios.delete(`${BaseUrl}api/v1/freelancers/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
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
            <div className="flex flex-col items-center min-h-screen lg:mx-4 pb-3   justify-center w-full mt-48  md:mt-1 xl:pl-0">
                {loading ? (
                    tableListLoader()
                ) : (
                    (freelancers.length === 0) ? (
                        <div
                            className="flex items-center justify-center font-bold text-lg w-full h-64 text-6xl text-clrPrime">
                            No Record Found! <FaRegSadTear className="spinner"/>
                        </div>
                    ) : (
                        <>
                            {freelancers.map((fl) => (
                                <div key={fl.id} className="flex items-center justify-center w-11/12  mb-3 ">
                                    <div
                                        className="flex gap-3 items-center justify-between w-full py-2 bg-white rounded-lg shadow-lg">
                                        <div>

                                        </div><img className="rounded-full h-20 w-20 "
                                             src={fl.featured_image ? fl.featured_image['url'] : defaultImage}
                                             alt={fl.name}/>
                                        <div className="flex-grow md:ml-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
                                            <div className="flex lg:flex-col items-center gap-3">
                                                <div className="font-bold text-gray-400">Name:</div>
                                                <div>{fl.name}</div>
                                            </div>
                                            <div className="flex lg:flex-col items-center gap-3">
                                                <div className="font-bold text-gray-400">Location:</div>
                                                <div>{fl.location}</div>
                                            </div>
                                            <div className="flex lg:flex-col items-center gap-3">
                                                <div className="font-bold text-gray-400">Fee:</div>
                                                <div>${fl.fee}</div>
                                            </div>
                                            <div>
                                                <small>
                                                    <button onClick={() => handleDelete(fl.id)} type="button"
                                                            className="px-2 py-1 font-semibold bg-transparent border border-red-400 rounded hover:bg-red-500 text-grey-700 hover:text-white  border-blue">
                                                        Delete
                                                    </button>
                                                </small>
                                            </div>
                                        </div>
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
