import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegSadTear } from 'react-icons/fa';
import { getReservationsAction } from '../redux/reservationReducer';
import BaseUrl from '../redux/base_url';
import defaultImage from '../images/avatar.png';

const MyReservations = () => {
  const myReservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  /* eslint-disable */
    useEffect(() => {
        dispatch(getReservationsAction());
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`${BaseUrl}api/v1/reservations/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
            .then(() => {
                dispatch(getReservationsAction());
            }).catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="flex flex-col items-center h-screen lg:mx-4 mx-2 justify-center w-full p-7 xl:pl-0">
            {!myReservations.length ? (
                <div className="flex items-center justify-center font-bold text-lg w-full h-64 text-6xl text-clrPrime">
                    No Records Found! <FaRegSadTear className="spinner"/>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-32 mb-20">
                    {myReservations.map((reservation) => (
                        <div key={reservation.id} className="flex items-center justify-center w-11/12 mt-5 ">
                            <div
                                className="flex flex-col items-center justify-around w-screen py-5 bg-white rounded-lg shadow-lg sm:flex-row">
                                <div className="w-20">
                                    <img className="rounded-full"
                                         src={reservation.freelancer ? reservation.freelancer.featured_image['url'] : defaultImage}
                                         alt="freelancer"/>
                                </div>
                                <div className="flex items-center mt-7">
                                    <div className>
                                        <p className="text-xs font-bold text-grey-400">Freelancer:</p>
                                        <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{reservation.freelancer ? reservation.freelancer.data.name : 'Not found'}</p>
                                    </div>
                                    <div className="ml-12">
                                        <p className="text-xs font-bold text-grey-400">Date:</p>
                                        <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-grey-400">{reservation.appointment_date}</p>
                                    </div>
                                </div>
                                <button disabled onClick={() => handleDelete(reservation.id)} type="button"
                                        className="px-4 py-2 font-semibold bg-gray-100 border border-red-400 rounded text-light">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
        </>
    );
};

export default MyReservations;
