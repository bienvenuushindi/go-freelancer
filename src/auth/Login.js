import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BaseUrl from '../redux/base_url';

export default function Login() {
  const navigate = useNavigate();
  const fldClass = 'block w-full px-4 py-2 mt-2 text-clrPrime bg-white border rounded-md focus:border-clrPrime focus:ring-clrPrime focus:outline-none focus:ring focus:ring-opacity-20';
  const lblClass = 'block text-sm font-semibold text-gray-800';
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const password = e.target[1].value;
    await axios.post(`${BaseUrl}users/sign_in`, {
      user: {
        name,
        password,
      },
    }).then((response) => {
      const token = response.headers.authorization;
      if (token && token !== '') {
        localStorage.setItem('token', token);
        navigate('/');
      }
    }).catch((err) => {
      document.getElementById('msg').textContent = `${err.response ? err.response.data : err.message}!`;
    });
    e.target.reset();
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <p className="text-md text-red-600 text-center mb-3" id="msg" />
        <h1 className="text-3xl font-semibold text-center text-clrSec">
          GoFreelancers
          {' '}
          <span className="text-xl text-clrPrime">Sign in</span>
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className={`${lblClass}`}
            >
              Name
              <input
                type="text"
                className={`${fldClass}`}
                placeholder="enter your name"
                minLength={2}
                maxLength={30}
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className={`${lblClass}`}
            >
              Password
              <input
                type="password"
                className={`${fldClass}`}
                placeholder="password"
                minLength={6}
                required
              />
            </label>

          </div>
          <a
            href="/"
            className="text-xs text-lime-600 hover:underline"
          >
            Forget Password?
          </a>
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-clrPrime rounded-md hover:bg-lime-400 focus:outline-none focus:bg-clrPrime">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {' '}
          Don&apos;t have an account?
          {' '}
          <a
            href="/signup"
            className="font-medium text-clrPrime hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
