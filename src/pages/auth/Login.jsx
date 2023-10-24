import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import Swal from "sweetalert2";

import CoverImage from "../../assets/images/forLogin.png";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "@/utils/states/contexts/token-context";
import { FaBookReader } from "react-icons/fa";
import { userLogin, loginSchema } from "@/utils/api/auth";

function Login() {
  const navigate = useNavigate();
  const { changeToken } = useToken();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  async function handleLogin(data) {
    try {
      const result = await userLogin(data);
      changeToken(JSON.stringify(result.payload));
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      navigate("/");
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error.message,
      });
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
        <div className="flex flex-row">
          <FaBookReader className="w-8 h-8 items-center mr-3" />
          <Link to="/" className="normal-case text-4xl text-black font-bold">
            PIKU
          </Link>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-2xl text-black font-semibold mb-2">Login</h3>
          <p className="text-sm mb-2 text-black">Masukkan identitas anda</p>
        </div>

        <div className="w-full flex flex-col">
          <form aria-label="form-login" onSubmit={handleSubmit(handleLogin)}>
            <Input
              className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none "
              id="input-username"
              type="text"
              label="Username"
              name="username"
              placeholder="Username"
              register={register}
              error={errors.username?.message}
            />
            <Input
              className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none "
              id="input-password"
              type="password"
              label="Password"
              name="password"
              placeholder="Password"
              register={register}
              error={errors.password?.message}
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
            <div className="w-full flex flex-col mt-2">
              <Button
                className="w-full text-white btn btn-accent font-semibold rounded-md p-4 text-center flex items-center justify-center"
                label="LOGIN"
                type="submit"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              />
            </div>
          </form>
          <Button
            onClick={() => navigate("/register")}
            className="w-full text-black btn btn-ghost font-semibold rounded-md p-4  mt-3 text-center flex items-center justify-center"
            label="Sign Up"
          />
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
