import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#0F171E] text-white flex flex-col">
      <LoginHeader />

      <div className="flex flex-auto justify-center items-center px-4 py-10 sm:py-0">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
            Who's watching?
          </h1>

          <div className="flex flex-col items-center group">
            <button
              onClick={handleLogin}
              className="rounded-lg overflow-hidden ring-2 ring-transparent group-hover:ring-orange-400 transition-all duration-300 focus:outline-none focus:ring-orange-400"
            >
              <img
                src="/image/Login.png"
                alt="Profile Icon"
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
            <h1 className="text-base sm:text-lg font-medium mt-3 text-center text-gray-300 group-hover:text-white transition-colors">
              Recruiter
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}