import Layout from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { TableRent } from "@/components/Table";
import React from "react";

function RentBook() {
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
          headers={[
            "No",
            "Judul Buku",
            "Kategori Buku",
            "Username",
            "Tanggal Peminjaman",
            "Aksi",
          ]}
        />
      </Layout>
    </>
  );
}

export default RentBook;
