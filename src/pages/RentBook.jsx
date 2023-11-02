import Layout from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { Table } from "@/components/Table";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function RentBook() {
  const [rentBooks, setRentBooks] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("rentBooks");
    const result = JSON.parse(localData);
    setRentBooks(result);
  }, []);

  function onDeleteClick(data) {
    Swal.fire({
      title: "Kamu sudah kembalikan?",
      text: "Penjaga akan melakukan cross check setelahnya!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, sudah",
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = rentBooks.filter((rentBook) => rentBook.id !== data.id);
        setRentBooks(newData);
        Swal.fire(
          "Sudah di Konfirmasi",
          "Terima kasih mengembalikan tepat waktu, silahkan pinjam lagi!",
          "success"
        );
      }
    });
  }

  return (
    <>
      <Navbar />
      <Layout>
        <div className="mb-6">
          <h2 className="font-semibold text-3xl mt-5">
            Daftar Paminjaman Buku
          </h2>
          <h4 className="font-medium mt-2 ml-3 w2/3">
            Terima kasih sudah pinjam disini, kami melakukan cross check setiap
            minggunya jadi jangan lupa kembalikan tepat waktu ya readers!
          </h4>
        </div>
        <Table
          isReady={rentBooks != [] ? true : false}
          headers={[
            "No",
            "Judul Buku",
            "Kategori Buku",
            "Tanggal Peminjaman",
            "Aksi",
          ]}
          datas={rentBooks}
          onDeleteClick={(data) => onDeleteClick(data)}
        />
      </Layout>
    </>
  );
}

export default RentBook;
