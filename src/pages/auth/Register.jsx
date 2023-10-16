import React from "react";

import CoverImage from "../../assets/images/6737457.jpg";

function Register() {
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
          <h3 className="text-2xl font-semibold mb-2">Register</h3>
          <p className="text-sm mb-2">Masukkan identitas baru anda</p>
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none "
          />
        </div>

        <div className="w-full flex flex-col">
          <button className="w-full text-white bg-green-500 font-semibold rounded-md p-4 text-center flex items-center justify-center">
            Register
          </button>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal">
            Already have account?
            <span className="font-semibold underline underline-offset-1 cursor-pointer">
              Sign In Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
