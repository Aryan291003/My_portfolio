import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <LoginHeader />

      <div className="flex flex-auto justify-center items-center px-4 py-10 sm:py-0">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Who's watching?</h1>

          <div className="flex flex-col items-center">
            <button
              onClick={handleLogin}
              className="rounded-full hover:scale-105 transition-transform duration-300 focus:outline-none"
            >
              <img
                src="/image/Login.png"
                alt="Profile Icon"
                className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover"
              />
            </button>
            <h1 className="text-xl sm:text-2xl font-semibold mt-3 text-center">Recruiter</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
