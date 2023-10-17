import React from "react";

import CoverImage from "../../assets/images/forLogin.png";
import { Input } from "../../components/Input";
import Button from "../../components/Button";

function Register() {
  return (
    <div className="w-full h-screen flex bg-[#FFCF96] items-start overflow-hidden">
      <div className="relative w-1/2 h-full flex flex-col justify-center left-[5%] top-[10%]">
        <div className="absolute top-[5%] left-[5%] flex flex-col">
          <h1 className="text-4xl font-bold text-black">
            Selamat Datang di PIKU!
          </h1>
          <p className="text-base font-semibold my-2 text-black">
            Gabung dan pinjam buku favoritmu!
          </p>
        </div>
        <img src={CoverImage} className="w-4/6 h-auto object-cover" alt="" />
      </div>
      <div className="w-1/2 h-full bg-[#FAF8ED] flex flex-col p-14 rounded-md justify-between">
        <h1 className="text-4xl text-black font-bold">PIKU</h1>
        <div className="w-full flex flex-col">
          <h3 className="text-2xl font-semibold mb-2 text-black">Register</h3>
          <p className="text-sm mb-2 text-black">
            Masukkan identitas baru anda
          </p>
        </div>

        <div className="w-full flex flex-col">
          <Input
            className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none "
            type="text"
            name="username"
            placeholder="Username"
          />
          <Input
            className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none "
            type="password"
            name="password"
            placeholder="Password"
          />
          <Input
            className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none "
            type="password"
            name="password"
            placeholder="Confirm Password"
          />
        </div>

        <div className="w-full flex flex-col">
          <Button
            className="w-full text-white btn btn-accent font-semibold rounded-md p-4 text-center flex items-center justify-center"
            label="Register"
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black">
            Already have account?
            <span className="font-semibold underline underline-offset-1 cursor-pointer text-black">
              Sign In Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
