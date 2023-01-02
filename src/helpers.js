import toast from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';

function showMessage(message = 'Successful operation') {
  return toast.custom((t) => (

    <span className="flex justify-between gap-4 items-baseline bg-clrPrime text-white shadow-black shadow rounded ">
      <span className="p-1">{message}</span>
      <button type="button" className=" bg-red-700 text-white h-full font-bold p-1  focus:border-0 hover:border-0" onClick={() => toast.dismiss(t.id)}>
        <MdOutlineClose />
      </button>
    </span>
  ), { id: 'unique-notification', position: 'top-right', icon: <MdOutlineClose /> });
}

export function showError(message = 'Sorry, something went wrong!!') {
  showMessage(message);
}
export default showMessage;
