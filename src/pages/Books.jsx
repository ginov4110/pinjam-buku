import Button from "@/components/Button";
import { Select } from "@/components/Input";
import Layout from "@/components/Layout";
import { NavbarIn } from "@/components/Navbar";
import { TableRent } from "@/components/Table";

import { getBooks } from "@/utils/api/books/api";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://651a7caa340309952f0d6022.mockapi.io/books")
      .then((Response) => {
        setBooks(Response.data);
        console.log(books);
      });
  }, []);

  // async function fetchData() {
  //   try {
  //     const result = await getBooks();
  //     console.log(result);
  //     setBooks(result);
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // }

  return (
    <>
      <NavbarIn />
      <Layout>
        <div className="mb-5">
          <h2 className="font-semibold text-3xl mb-10">Daftar Buku</h2>
          <div className="flex flex-row items-center">
            <Select
              label="Cari Kategori"
              placeholder="-- Pilih Kategori --"
              options={[
                "Classic",
                "Science Fiction",
                "Mystery",
                "Fantasy",
                "Biography",
                "Non-Fiction",
                "Dystopian",
                "Inspirational",
                "Historical Fiction",
                "Fiction",
              ]}
            />
            <Button
              className=" ml-5 btn btn-sm btn-accent text-white"
              label="Tambah Buku"
            />
          </div>
        </div>
        <TableRent
          headers={[
            "No",
            "ISBN",
            "Judul Buku",
            "Halaman",
            "Nama Author",
            "Kategori Buku",
            "Tanggal Publikasi",
            "Aksi",
          ]}
          datas={books}
        />
      </Layout>
    </>
  );
}

export default Books;
