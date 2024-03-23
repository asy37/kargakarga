"use client";
import { signIn } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    })
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-md">
        <div className="px-8 py-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" value="true" />
            <div className="mb-6">
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Email Address" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Password" />
            </div>
            <div>
              <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
