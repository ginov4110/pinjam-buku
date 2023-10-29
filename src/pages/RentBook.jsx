import Layout from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { TableRent } from "@/components/Table";
import React, { useEffect, useState } from "react";

function RentBook() {
  const [rentBooks, setRentBooks] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("rentBooks");
    const result = JSON.parse(localData);
    setRentBooks(result);
  }, []);

  return (
    <>
      <Navbar />
      <Layout>
        <div className="mb-8">
          <h2 className="font-semibold text-3xl mt-5">
            Daftar Paminjaman Buku
          </h2>
        </div>
        <TableRent
          isReady={true}
          headers={[
            "No",
            "Judul Buku",
            "Kategori Buku",
            "Tanggal Peminjaman",
            "Aksi",
          ]}
          datas={rentBooks}
        />
      </Layout>
    </>
  );
}

export default RentBook;
