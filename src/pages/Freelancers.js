import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegSadTear, FaSpinner } from 'react-icons/fa';
import { getFreelancersAction } from '../redux/freelancersReducer';
import Slider from '../components/slide';
import '../app.css';

const Freelancers = () => {
  const loading = useSelector((state) => state.loading);
  const freelancers = useSelector((state) => state.freelancers);
  const dispatch = useDispatch();
  /* eslint-disable */
    useEffect(() => {
        dispatch(getFreelancersAction());
    }, [dispatch]);
    return (
        <>
            <div className="flex flex-col items-center h-screen lg:mx-4 mx-2 justify-center w-full p-7 xl:pl-0">
                { loading ? (  <div className="flex items-center justify-center font-bold text-lg w-full h-64 text-6xl text-clrPrime">
                        Loading <FaSpinner className="spinner" />
                    </div>
                ):(
                    !freelancers.length ? (
                    <div className="flex justify-center font-bold  text-6xl text-clrPrime">
                    No Record Found! <FaRegSadTear className="spinner"/>
                    </div>
                    ) : (
                    <>
                    <div className="text-center mt-16 xl:mt-2">
                    <h1 className="text-2xl font-black m-0 py-3 leading-4">AVAILABLE FREELANCERS</h1>
                    <p className="text-gray-400 m-0 py-1 leading-3">Select a freelancer</p>
                    </div>
                    <hr className="border-t-2 border-dashed border-gray-200 w-48 m-0 xl:my-4 invisible xl:visible"/>
                    <div className="w-full">
                    <Slider freelancers={freelancers}/>
                    </div>
                    </>
                    )

                )
                }
            </div>
        </>
    );
};

export default Freelancers;
