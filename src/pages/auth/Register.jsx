import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { userRegister, registerSchema } from "@/utils/api/auth";

import CoverImage from "../../assets/images/forLogin.png";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { Toast } from "@/utils/toasts/toastNotif";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registerSchema) });

  async function handleRegister(data) {
    try {
      const result = await userRegister(data);
      toast.success(result.message);
      navigate("/login");
      Toast.fire({
        icon: "success",
        title: "Register complete",
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error,
      });
    }
  }

  return (
    <div className="w-full h-full flex bg-[#FFCF96] items-start overflow-auto">
      <div className="relative w-1/2 h-screen flex flex-col justify-center left-[5%] top-[10%]">
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
      <div className="w-1/2 h-screen bg-[#FAF8ED] flex flex-col p-10 rounded-md justify-between">
        <div className="flex flex-row">
          <FaBookReader className="w-8 h-8 items-center mr-3" />
          <Link to="/" className="text-4xl text-black font-bold">
            PIKU
          </Link>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-2xl font-semibold mb-2 text-black">Register</h3>
          <p className="text-sm text-black">Masukkan identitas baru anda</p>
        </div>

        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="w-full flex flex-col">
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
            <Input
              className="w-full bg-transparent border-b py-4 my-2 border-black outline-none focus:outline-none "
              id="input-repassword"
              type="password"
              label="Repassword"
              name="repassword"
              placeholder="Confirm Password"
              register={register}
              error={errors.repassword?.message}
            />
          </div>

          <div className="w-full flex flex-col">
            <Button
              className="w-full text-white btn btn-accent font-semibold rounded-md p-4 text-center flex items-center justify-center"
              label="Register"
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
          </div>
        </form>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black">
            Already have account?
            <span
              onClick={() => navigate("/login")}
              className="font-semibold underline underline-offset-1 cursor-pointer text-black">
              Sign In Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
