import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import * as z from "zod";
import { login } from "@/utils/api/auth/api";

import CoverImage from "../../assets/images/forLogin.png";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useToken } from "@/utils/states/contexts/token-context";

const schema = z.object({
  username: z.string().min(3, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

function Login() {
  const navigate = useNavigate();
  const { changeToken } = useToken;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function handleLogin(data) {
    try {
      const result = await login(data);
      changeToken(JSON.stringify(result));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

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
          <form onSubmit={handleSubmit(handleLogin)}>
            <Input
              className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none"
              error={errors.username?.message}
              placeholder="Username"
              register={register}
              name="username"
              type="text"
            />
            <Input
              className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none "
              error={errors.password?.message}
              placeholder="Password"
              register={register}
              name="password"
              type="password"
            />
            <div className="w-full flex items-center justify-between mb-3">
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
                onClick={() => navigate("/register")}
                className="w-full text-black btn btn-ghost font-semibold rounded-md p-4  mt-3 text-center flex items-center justify-center"
                label="Sign Up"
              />
            </div>
          </form>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm text-black font-normal">
            Do not have an account?
            <span
              onClick={() => navigate("/register")}
              className="font-semibold text-black underline underline-offset-1 cursor-pointer">
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
