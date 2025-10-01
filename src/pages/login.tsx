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

      <div className="flex flex-auto m-20 justify-center">
        
          
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Who's watching?</h1>
            <div className='flex flex-col '>
            <button
              onClick={handleLogin}
              className="rounded-full hover:scale-105 transition-transform duration-300 focus:outline-none"
            >
              <img
                src="/Login.png"
                alt="Profile Icon"
                className="w-50 h-50 rounded-full object-cover"
              />
            </button>
            <h1 className="text-3xl font-bold mb-6 text-center justify-center">Recruiter</h1>
            </div>
                      
          </div>
        </div>
      </div>
   
  );
}
