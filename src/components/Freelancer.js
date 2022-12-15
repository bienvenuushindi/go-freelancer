import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFreelancerAction } from '../redux/freelancersReducer';
import SpecializationList from './specializationList';

const Freelancer = () => {
  const { id } = useParams();
  const freelancer = useSelector((state) => state.freelancers);
  const dispatch = useDispatch();
  /* eslint-disable */
  useEffect(() => {
    dispatch(getFreelancerAction(id));
  }, []);
  return (
    <>
      <div className="flex px-4 mt-52 content-center ">
        <div className="w-9/12 flex justify-center text-center pb-4">
          <img src={freelancer.featured_image ? freelancer.featured_image['url'] : 'default.png'} alt={freelancer.name} className=" w-4/12 p-1 my-1 bg-slate-100 border-slate-700" />
        </div>
        <div className="flex-auto w-3/12 flex-col">
          <div className="details">
            <h1 className="text-right font-extrabold pb-10 text-3xl">{freelancer.name}</h1>
            <div className="flex justify-between p-4 bg-gray-100">
              <h4 className="font-bold">Fee</h4>
              <h4>{freelancer.fee}$</h4>
            </div>
            <div className="flex justify-between p-4 ">
              <h4 className="font-bold">Location</h4>
              <h4>{freelancer.location}</h4>
            </div>
            <div className="p-4">
              <h4 className="pb-4 font-bold">Details</h4>
              <p>
                {freelancer.details}
              </p>
            </div>
            <div className="p-4">
              <h4 className="pb-4 font-bold">Specialization</h4>
              <SpecializationList specializations={freelancer.specializations || []} />
            </div>
          </div>
          <div className="p-4">
            <Link to={`/reserve/${freelancer.id}`} type="button" key={freelancer.id}  className="bg-green-500 w-fit hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex">
              <svg className="fill-current w-4 h-4 mr-2 pt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Reserve</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freelancer;
