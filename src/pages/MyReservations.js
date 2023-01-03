import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegSadTear } from 'react-icons/fa';
import { getReservationsAction } from '../redux/reservationReducer';
import BaseUrl from '../redux/base_url';
import defaultImage from '../images/avatar.png';
import showMessage, { showError } from '../helpers';
import { tableListLoader } from '../components/Loaders';

const MyReservations = () => {
  const myReservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  /* eslint-disable */
    useEffect(() => {
        dispatch(getReservationsAction());
    }, [dispatch]);

    const handleDelete = async (id) => {
        await axios.delete(`${BaseUrl}api/v1/reservations/${id}`, {headers: {Authorization: localStorage.getItem('token')}})
            .then(() => {
                dispatch(getReservationsAction());
                showMessage('Successfully Deleted')
            }).catch((err) => {
                showError()
                console.log(err);
            });
    };

    return (
        <>
            <div className="flex flex-col justify-center h-screen w-full md:w-11/12 mx-auto ">
                {loading ? (
                    tableListLoader()
                ) : (
                    (myReservations.length === 0) ? (
                        <div className="flex justify-center font-bold  text-6xl text-clrPrime">
                            No Record Found! <FaRegSadTear className="spinner"/>
                        </div>
                    ) : (
                        myReservations.map((reservation) => (
                            <div key={reservation.id} className="flex items-center justify-center mt-5 ">
                                <div
                                    className="flex gap-3 flex-col items-center justify-around w-screen py-2 bg-white rounded-lg shadow-lg sm:flex-row">
                                    <img className="rounded-full w-20 h-20"
                                         src={reservation.freelancer ? reservation.freelancer.featured_image['url'] : defaultImage}
                                         alt="freelancer"/>
                                    <div className="flex-grow md:ml-10 grid grid-cols-2 gap-5">
                                        <div>
                                            <div className="text-xs font-bold text-gray-400">Freelancer:</div>
                                            <div className="mt-2 font-bold">{reservation.freelancer ? reservation.freelancer.data.name : 'Not found'}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-gray-400">Appointment Date:</div>
                                            <div className="mt-2 font-bold">{reservation.appointment_date}</div>
                                        </div>
                                    </div>
                                    <small>
                                        <button onClick={() => handleDelete(reservation.id)} type="button"
                                                className="px-2 py-1 font-semibold bg-transparent border border-red-400 rounded hover:bg-red-500 text-grey-700 hover:text-white m-7 border-blue">
                                            Cancel
                                        </button>
                                    </small>

                                </div>
                            </div>
                        ))
                    )
                )}
            </div>
        </>
    );
};

export default MyReservations;
