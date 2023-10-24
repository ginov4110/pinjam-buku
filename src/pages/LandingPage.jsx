import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";
import landingImg from "../assets/images/forLanding.png";
import landingImg2 from "../assets/images/forLanding2.png";
import {
  FaBookOpen,
  FaUsers,
  FaSwatchbook,
  FaCheckCircle,
  FaBookReader,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";
import Button from "../components/Button";
import React from "react";
import Swal from "sweetalert2";

function LandingPage() {
  const status = [
    {
      icon: (
        <FaBookOpen
          style={{ width: "30px", height: "30px", color: "#F9B572" }}
        />
      ),
      label: "Buku",
      total: "20+",
    },
    {
      icon: (
        <FaUsers style={{ width: "30px", height: "30px", color: "#F9B572" }} />
      ),
      label: "Anggota",
      total: "30+",
    },
    {
      icon: (
        <FaSwatchbook
          style={{ width: "30px", height: "30px", color: "#F9B572" }}
        />
      ),
      label: "Jenis Buku",
      total: "10+",
    },
  ];

  const features = [
    "Melihat buku lebih detail",
    "Kamu dapat meminjam > 3 buku",
    "Kamu dapat melakukan extend peminjaman buku",
  ];

  return (
    <>
      <Navbar />
      <main className=" w-full bg-[#FAF8ED] mx-auto">
        <div className="grid grid-cols-2 justify-center px-20">
          <div className="pt-24 pl-20 pr-20">
            <h1 className="font-bold text-3xl pb-5">
              Baca Buku Yang Kamu Cari dan
              <br />
              Temukan Inspirasi Di PIKU
            </h1>
            <div className="font-normal text-base pb-12">
              <p>Baca buku yang kamu cari dan temukan inspirasi</p>
            </div>
            <Button
              className="btn py-4 px-16 bg-[#F9B572] rounded-md"
              label="Coba sekarang"
            />
          </div>
          <div className="flex flex-row justify-center ml-12">
            <img src={landingImg} alt="landingPageImage" />
          </div>
        </div>
        <div className="conatiner flex flex-col shadow-2xl rounded-md px-10">
          {/* 10+ Buku 30+ Member 30+ Jenis Buku */}
          <div className="grid grid-cols-3 py-4">
            {status.map((stat, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-row py-3 px-32 ${
                    index + 1 !== status.length && "border-r border-gray-200"
                  }`}>
                  <div className="mt-2 mr-3">{stat.icon}</div>
                  <div>
                    <div>{stat.total}</div>
                    <div>{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 p-24 mx-10 items-center">
          <img src={landingImg2} />
          <div className="space-y-8">
            <h2 className="font-medium text-3xl">
              Dengan Kamu Bergabung Menjadi
              <br />
              Anggota PIKU Kamu Mendapat Keuntungan
            </h2>
            <div>
              <p className="text-xl">
                Kamu bisa mengakses dan menggunakan fitur-fitur didalamnya
              </p>
            </div>
            {/* Melihat buku lebih detail, dapat meminjam > 3 buku, Kamu dapat extend peminjaman buku */}
            {features.map((feature, index) => {
              return (
                <div className="flex space-x-3 items-center" key={index}>
                  <FaCheckCircle
                    style={{ width: "20px", height: "20px", color: "#20a30f" }}
                  />
                  <div>
                    <p className="text-sm">{feature}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="bg-[#e9e7dd] py-28">
        <div className="container mx-auto max-w-5xl flex flex-row space-x-10 justify-between">
          <div className="flex-2 space-y-5 flex-row w-96">
            <h3 className="flex flex-row items-center text-xl font-bold">
              <FaBookReader className="w-8 h-8 mb-2 mr-3" /> PIKU
            </h3>
            <div>
              <h3>
                PIKU Web Aplikasi yang menyediakan layanan tracking peminjaman
                buku di perpustakaan. Buat pengalaman pinjam bukumu lebih mudah
              </h3>
            </div>
            <div className="flex flex-row">
              <FaFacebook className="w-8 h-8 mx-2" />
              <FaInstagram className="w-8 h-8 mx-2" />
              <FaLinkedin className="w-8 h-8 mx-2" />
            </div>
          </div>
          <div>
            <h3 className="space-y-6 font-semibold mb-4">Product</h3>
            <ul className="space-y-6 text-sm">
              <li>Buku Dongeng</li>
              <li>Buku Komik</li>
              <li>Buku Modul</li>
              <li>Novel</li>
            </ul>
          </div>
          <div>
            <h3 className="space-y-6 font-semibold mb-4">Contact</h3>
            <ul className="space-y-6 text-sm">
              <li>Customer Service</li>
              <li>Send Email</li>
              <li>Report</li>
            </ul>
          </div>
          <div>
            <h3 className="space-y-6 font-semibold mb-4">About Us</h3>
            <ul className="space-y-6 text-sm">
              <li>FAQ</li>
              <li>Become Partner</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
