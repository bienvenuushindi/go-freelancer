import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { addFreelancerAction } from '../redux/freelancersReducer';
import { getSpecializationAction } from '../redux/specializationReducer';
import SpecializationOption from '../components/specializationOption';
import { loaded } from '../redux/loaderReducer';
import { specializationLoader } from '../components/Loaders';

const AddFreelancer = () => {
  const data = {
    name: '', fee: 0, details: '', photo: 'image', featured_image: null, location: '', specializations: [],
  };
  const dispatch = useDispatch();
  const specializations = useSelector((state) => state.specializations);
  const loading = useSelector((state) => state.loading);
  const [notSubmit, setNotSubmit] = useState(true);
  const [formData, setFormData] = useState(data);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    dispatch(loaded());
    dispatch(getSpecializationAction());
  }, [dispatch]);
  const onImageChange = (e) => {
    setFormData((prevState) => ({ ...prevState, featured_image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotSubmit(false);
    const freelancer = {
      freelancer: {
        ...formData,
      },
    };
    const form = new FormData();
    Object.keys(freelancer.freelancer).forEach((key) => {
      form.append(`freelancer[${key}]`, freelancer.freelancer[key]);
    });
    dispatch(addFreelancerAction(form, navigate));
  };

  const updateSelected = (e) => {
    const value = parseInt(e.target.value, 10);
    if (e.target.checked) {
      // eslint-disable-next-line max-len
      setFormData((prevState) => ({ ...prevState, specializations: [...prevState.specializations, value] }));
      // data.specializations.push(e.target.value);
    } else {
      // eslint-disable-next-line max-len
      setFormData((prevState) => {
        const filtered = prevState.specializations.filter((item) => item !== value);
        return ({ ...prevState, specializations: [...filtered] });
      });
    }
  };
  return (
    <>
      {/* add from using tailwindcss */}
      <form className="w-full  mt-40 flex justify-center" onSubmit={(e) => handleSubmit(e)}>
        <div className="lg:w-6/12 md:w-9/12 sm:w-full">
          <div className="flex flex-wrap -mx-10 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  minLength="2"
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-10 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="image"
              >
                Photo
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="photo"
                  type="file"
                  placeholder="Photo"
                  name="photo"
                  accept="image/*"
                  multiple={false}
                  onChange={(e) => onImageChange(e)}
                />
              </label>

            </div>
          </div>
          <div className="flex flex-wrap -mx-10 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="fee"
              >
                Fee
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="type"
                  type="number"
                  placeholder="fee"
                  name="fee"
                  required
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-10 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="details"
              >
                Details
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  resize-none focus:outline-none focus:bg-white"
                  id="details"
                  rows="5"
                  name="details"
                  placeholder="Details"
                  required
                  minLength="5"
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-10 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="location"
              >
                Location
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Location"
                  required
                  minLength="2"
                  onChange={(e) => handleChange(e)}
                />
              </label>

            </div>
          </div>
          <div className="w-full -mx-10 mb-2 pl-2">
            <h4 className="pb-4 font-bold">Specialization</h4>
            { (loading && notSubmit) ? (
              specializationLoader()
            ) : (
              <SpecializationOption
                specializations={specializations}
                updateSelected={(e) => updateSelected(e)}
              />
            )}
          </div>
          <div className="flex flex-wrap -mx-10 mb-2 mt-4">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              {(loading && !notSubmit) ? (<span className="text-black"><FaSpinner className="spinner" /></span>)
                : (
                  <button
                    className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    disabled={loading}
                  >
                    Add Freelancer
                  </button>
                )}
            </div>
          </div>
        </div>

      </form>
    </>
  );
};
export default AddFreelancer;
