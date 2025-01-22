import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [message, setMessage] = useState('');
  const { registerUser } = useAuth();
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navigate('/');
    } catch (error) {
      setMessage(`Error registering user: ${error.message}`);
    }
  };

  const [email, password] = watch(['email', 'password']);

  useEffect(() => {
    setMessage('');
  }, [email, password]);

  const handleGoogleSignIn = () => {};

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              {...register('email', { required: true })}
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              {...register('password', { required: true })}
              type="password"
              name="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow"
              placeholder="Password"
            />
          </div>
          {message && <p className="text-red-500 text-xs italic mb-3">{message}</p>}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:online-none focus:shadow">
              Register
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Have an account?{' '}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-rull flex flex-wreap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">@2025 Bookstore. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
