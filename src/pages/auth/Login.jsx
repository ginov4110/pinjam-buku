import React from "react";

import CoverImage from "../../assets/images/6737457.jpg";

function Login() {
  return (
    <div className="w-full h-screen flex items-start overflow-hidden">
      <div className="relative w-1/2 h-full flex flex-col justify-center left-[5%] top-[10%]">
        <div className="absolute top-[5%] left-[5%] flex flex-col">
          <h1 className="text-4xl font-bold">Selamat Datang di PIKU!</h1>
          <p className="text-base font-semibold my-2">
            Gabung dan pinjam buku favoritmu!
          </p>
        </div>
        <img src={CoverImage} className="w-4/6 h-auto object-cover" alt="" />
      </div>
      <div className="w-1/2 h-full bg-[#f7f7f7] flex flex-col p-14 rounded-md justify-between">
        <h1 className="text-4xl text-black font-bold">PIKU</h1>
        <div className="w-full flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">Login</h3>
          <p className="text-sm mb-2">Masukkan identitas anda</p>
        </div>

        <div className="w-full flex flex-col">
          <input
            type="text"
            placeholder="username"
            className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none "
          />
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="w-full flex items-center">
            <input type="checkbox" className="w-3 h-3 mr-2" />
            <p className="text-sm">Remember me</p>
          </div>

          <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline-offset-1">
            Forgot password?
          </p>
        </div>

        <div className="w-full flex flex-col">
          <button className="w-full text-white bg-green-500 font-semibold rounded-md p-4 text-center flex items-center justify-center">
            Login
          </button>
          <button className="w-full text-black bg-white font-semibold rounded-md p-4 border-black border-2 mt-3 text-center flex items-center justify-center">
            Sign Up
          </button>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal">
            Do not have an account?
            <span className="font-semibold underline underline-offset-1 cursor-pointer">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
