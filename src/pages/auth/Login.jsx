import React from "react";

import CoverImage from "../../assets/images/forLogin.png";
import { Input } from "../../components/Input";
import Button from "../../components/Button";

function Login() {
  return (
    <div className="w-full h-screen bg-[#FFCF96] flex items-start overflow-hidden">
      {/* Left */}
      <div className="relative  w-1/2 h-full flex flex-col justify-center left-[5%] top-[10%]">
        <div className="absolute top-[5%] left-[5%] flex flex-col">
          <h1 className="text-4xl text-black font-bold">
            Selamat Datang di PIKU!
          </h1>
          <p className="text-base text-black font-semibold my-2">
            Gabung dan pinjam buku favoritmu!
          </p>
        </div>
        <img src={CoverImage} className="w-4/6 h-auto object-cover" alt="" />
      </div>
      {/* End Left */}
      {/* Right */}
      <div className="w-1/2 h-full bg-[#FAF8ED] flex flex-col p-14 rounded-md justify-between">
        <h1 className="text-4xl text-black font-bold">PIKU</h1>
        <div className="w-full flex flex-col">
          <h3 className="text-2xl text-black font-semibold mb-2">Login</h3>
          <p className="text-sm mb-2 text-black">Masukkan identitas anda</p>
        </div>

        <div className="w-full flex flex-col">
          <Input
            className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none"
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
          />
          <Input
            className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none "
            label="Password"
            name="assword"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="w-full flex items-center">
            <input type="checkbox" className="w-3 h-3 mr-2" />
            <p className="text-sm text-black">Remember me</p>
          </div>

          <p className="text-sm text-black font-medium whitespace-nowrap cursor-pointer underline-offset-1">
            Forgot password?
          </p>
        </div>

        <div className="w-full flex flex-col">
          <Button
            className="w-full text-white btn btn-accent font-semibold rounded-md p-4 text-center flex items-center justify-center"
            label="LOGIN"
          />
          <Button
            className="w-full text-black btn btn-ghost font-semibold rounded-md p-4  mt-3 text-center flex items-center justify-center"
            label="Sign Up"
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm text-black font-normal">
            Do not have an account?
            <span className="font-semibold text-black underline underline-offset-1 cursor-pointer">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
      {/* End Right */}
    </div>
  );
}

export default Login;
