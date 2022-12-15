import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFreelancerAction } from '../redux/freelancersReducer';

const AddFreelancer = () => {
  const data = {
    name: '', fee: 0, details: '', photo: 'image', featured_image: null, location: '',
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(data);
  const handleChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const onImageChange = (e) => {
    setFormData((prevState) => ({ ...prevState, featured_image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const freelancer = {
      freelancer: {
        ...formData,
      },
    };
    const form = new FormData();
    Object.keys(freelancer.freelancer).forEach((key) => {
      form.append(`freelancer[${key}]`, freelancer.freelancer[key]);
    });
    dispatch(addFreelancerAction(form));
  };
  return (
    <>
      {/* add from using tailwindcss */}
      <form className="w-full  mt-40 flex justify-center" onSubmit={(e) => handleSubmit(e)}>
        <div className="w-6/12">
          <div className="flex flex-wrap -mx-3 mb-2">
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
          <div className="flex flex-wrap -mx-3 mb-2">
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
          <div className="flex flex-wrap -mx-3 mb-2">
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
          <div className="flex flex-wrap -mx-3 mb-2">
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
          <div className="flex flex-wrap -mx-3 mb-2">
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
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <button
                className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Add Car
              </button>
            </div>
          </div>
        </div>

      </form>
    </>
  );
};
export default AddFreelancer;
