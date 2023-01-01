import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';
import Freelancers from '../components/Freelancers';

export function showMessage(message) {
  return toast.custom((t) => (

    <div className="flex justify-between gap-4 items-baseline bg-clrPrime text-white shadow-black shadow rounded ">
      <span className="p-2">{message}</span>
      <button type="button" className="bg-red-600 text-white h-full font-bold p-2  focus:border-0 hover:border-0" onClick={() => toast.dismiss(t.id)}>
        <MdOutlineClose />
      </button>
    </div>
  ), { id: 'unique-notification', position: 'top-right' });
}

export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  if (!token || token === '') {
    showMessage('You are not signed in!');
    return false;
  }
  return true;
};

/* eslint-disable react/prop-types */
export const RequireAuth = ({ children }) => {
  const auth = isLoggedIn();
  return auth === true ? (
    children
  ) : (
    <>
      <div className="relative top-24 text-red-500 z-10 text-lg text-right pr-6">
        <Toaster />
      </div>
      <Freelancers />
    </>
  );
};
