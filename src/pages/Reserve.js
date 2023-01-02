import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegSadTear } from 'react-icons/fa';
import { getFreelancersAction } from '../redux/freelancersReducer';
import { requestReservationAction } from '../redux/reservationReducer';

const Reserve = () => {
  const freelancers = useSelector((state) => state.freelancers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* eslint-disable */
  const handleSubmit = (e) => {
    e.preventDefault();
    const freelancer_id = e.target[0].value;
    const appointment_date = e.target[1].value;
    const params = {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reservation: {
          freelancer_id,
          appointment_date,
          user_id: 'current_user.id',
        },
      }),
    };
    dispatch(requestReservationAction(params, navigate));
    e.target.reset();
  };
  useEffect(() => {
    dispatch(getFreelancersAction());
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center h-screen w-full md:w-11/12 mx-auto ">
      {!freelancers.length ? (
          <div className="flex justify-center font-bold  text-6xl text-clrPrime">
          Freelancers Not Available At This Moment! <FaRegSadTear className="spinner"/>
        </div>
      ) : (
        <div className="bg__img bg-gray-600">
          <div className="flex flex-col items-center justify-center flex-grow w-full h-screen px-3 lighter-bg backdrop-blur-sm">
            <div className="mb-3 text-4xl font-bold text-white ">
              <h2 className="text-center">Freelancer Reservation</h2>
              <hr className="text-3xl " />
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-transparent" style={{ fontFamily: '"Lato", sans-serif' }}>
                <div className="flex flex-col items-center px-4 py-8 form-input xl:flex-row xl:space-x-4">
                  <div className="flex flex-col py-4">
                    <div className="relative opacity-70">
                        <div className="absolute flex items-center h-full px-4 text-white border-r cursor-pointer dark:text-gray-400 dark:border-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                      <select id="fl" name="fl" className="flex items-center w-64 h-16 pl-16 font-normal text-white bg-green-500 border border-gray-300 rounded-lg shadow dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 text-l">
                        {freelancers.map((fl) => (
                          <option key={fl.id} value={fl.id}>
                            {fl.name}
                          </option>
                        ))}
                        ;
                      </select>
                    </div>
                  </div>
                  {/* Code block ends */}
                  {/* Code block starts */}
                  <div className="flex flex-col">
                    <div className="relative">
                      <div className="absolute flex items-center h-full px-5 text-white bg-iransparent border-r cursor-pointer dark:border-gray-700 dark:bg-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x="4" y="5" width="16" height="16" rx="2" />
                          <line x1="16" y1="3" x2="16" y2="7" />
                          <line x1="8" y1="3" x2="8" y2="7" />
                          <line x1="4" y1="11" x2="20" y2="11" />
                          <rect x="8" y="15" width="2" height="2" />
                        </svg>
                      </div>
                      <input type="date" id="date" name="date" className="opacity-60 flex items-center w-64 h-16 pl-16 pr-2 font-normal text-white bg-green-500 border border-gray-300 rounded-lg shadow form-input dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 text-L" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-60 flex flex-col items-center justify-center w-48 h-16 text-xl font-normal text-gray-600 bg-white border border-gray-300 rounded-xl shadow dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 hover:text-menu">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </>
  )

};

export default Reserve;
