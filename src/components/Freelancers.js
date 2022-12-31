import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFreelancersAction } from '../redux/freelancersReducer';
import Slider from './slide';

const Freelancers = () => {
  const freelancers = useSelector((state) => state.freelancers);
  const dispatch = useDispatch();
  /* eslint-disable */
    useEffect(() => {
        dispatch(getFreelancersAction());
    }, [dispatch]);
    return (
        <>
            <div className="flex flex-col items-center h-screen lg:mx-4 mx-2 justify-center w-full p-7 xl:pl-0">
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
                        <hr className="border-t-2 border-dashed border-gray-200 w-48 m-0 xl:my-4 invisible xl:visible"/>
                        <div className="w-full">
                            <Slider freelancers={freelancers}/>
                        </div>
                    </>
                )
                }
            </div>
        </>
    );
};

export default Freelancers;
