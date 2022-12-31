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
    <div className="grid grid-flow-row items-center h-screen">
      <div className="flex flex-col gap-1 mt-20 lg:grid lg:grid-cols-4 ">
        <div className="flex items-center justify-center lg:col-span-2 marker:pl-20 mt-14 lg:mt-0 ">
          <img src={freelancer.featured_image ? freelancer.featured_image['url'] : freelancer.photo ? freelancer.photo : 'default.png'} alt={freelancer.name} className="w-2/3 rounded shadow-lg " />
        </div>

        <div className="flex flex-col col-span-2">
          <div className="my-8">
            <div className="w-full text-2xl font-bold text-center uppercase ">
              <h3>{freelancer.name}</h3>
            </div>
            <div className="w-full my-2 text-center text-gray-400 px-14">
              <p>{freelancer.details}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full p-4">
                    <tr className="w-full px-6  border-b">
                      <td className="px-2 py-4 text-sm font-medium text-left text-gray-900">City</td>
                      <td colSpan={3} className="px-2 py-4 text-sm font-medium text-left text-gray-900">{freelancer.location}</td>
                    </tr>
                    <tr className="w-full  border-b">
                      <td className="px-2 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"> Fee</td>
                      <td colSpan={3} className="">${freelancer.fee}</td>
                    </tr>
                    <tr className="w-full  ">
                      <td className="px-2 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Specialization</td>
                    </tr>
                    <tr className="px-2 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      <td colSpan={4}>
                        <SpecializationList specializations={freelancer.specializations || []} />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mt-6 ">
            <Link to="/reserve" className="py-2.5 px-8 text-sm font-medium text-gray-900 focus:outline-none bg-clrPrime rounded-full border border-menu hover:bg-lime-300 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Reserve
              {' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
