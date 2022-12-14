import React from 'react';

const Freelancer = () => (

  <>
    <div className="flex flex-col items-center justify-center w-full p-6 lg:pl-0">
      <div className="text-center mt-20 xl:mt-2">
        <h1 className="text-2xl font-black m-0 py-3 leading-4">FREELANCER</h1>
        <p className="text-gray-400 m-0 py-1 leading-3">Select a freelancer</p>
      </div>
    </div>
    <div className="flex px-4">
      <div className="w-9/12 text-center pb-4">Freelancer Picture</div>
      <div className="flex-auto w-3/12 flex-col">
        <div className="details">
          <h1 className="text-right font-extrabold pb-10 text-3xl">Freelancer name</h1>
          <div className="flex justify-between p-4 bg-gray-100">
            <h4>Fee</h4>
            <h4>20$</h4>
          </div>
          <div className="flex justify-between py-4">
            <h4>Location</h4>
            <h4>Microverse Remote</h4>
          </div>
          <div className="py-4">
            <h4 className="pb-8">Details</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
              aliquam aspernatur commodi corporis dignissimos eum minus nam neque
              nostrum odio, placeat qui quia quidem repellendus saepe tenetur,
              veritatis vero vitae?
            </p>
          </div>
          <div className="py-4">
            <h4 className="pb-8">Specialization</h4>
            <ul className="flex gap-1">
              <li className="p-2 rounded-full bg-gray-100">
                {' '}
                <span>HTML</span>
                {' '}
              </li>
              <li className="p-2 rounded-full bg-gray-100">
                {' '}
                <span>Ruby</span>
                {' '}
              </li>
              <li className="p-2 rounded-full bg-gray-100">
                {' '}
                <span>Javascript</span>
                {' '}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex">
            <svg className="fill-current w-4 h-4 mr-2 pt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Button</span>
          </button>
        </div>
      </div>
    </div>
  </>
);

export default Freelancer;
