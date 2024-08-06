'use client';

import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0d1b2a]">
      <div className="flex flex-col items-center w-full max-w-2xl p-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <img
          src="/placeholder.svg"
          alt="Journey to a trillion miles starts from here!!"
          className="w-full h-auto md:w-1/2"
        />
        <div className="flex flex-col items-center w-full p-6 space-y-4 bg-[#1b263b] rounded-lg md:w-1/2">
          <h2 className="text-2xl font-bold text-white">Sign Up</h2>
          <form onSubmit={handleSignUp} className="flex flex-col space-y-4 w-full">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-white bg-[#0d1b2a] rounded-md"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-white bg-[#0d1b2a] rounded-md"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center w-full px-4 py-2 text-white bg-[#4285F4] rounded-md"
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>
          {error && <p className="text-red-500">{error.message}</p>}
        </div>
      </div>
    </div>
  );
}