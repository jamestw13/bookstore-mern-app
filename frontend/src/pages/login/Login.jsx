import React, { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [message, setMessage] = useState('');
  const { loginUser } = useAuth();
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password);
      navigate('/');
    } catch (error) {
      setMessage(`Error logging in: ${error.message}`);
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
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>
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
              Login
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500">
            Register
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
