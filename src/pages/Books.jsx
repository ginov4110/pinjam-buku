import Button from "@/components/Button";
import { Input, Select } from "@/components/Input";
import Layout from "@/components/Layout";
import { NavbarIn } from "@/components/Navbar";
import { TableRent } from "@/components/Table";

import { getBooks } from "@/utils/api/books/api";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("");

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

  const openForm = (e) => {
    if (isOpen) {
      setMode("");
      setIsOpen(false);
    } else {
      setMode("none");
      setIsOpen(true);
    }
    console.log(isOpen);
    console.log(mode);
  };

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
              onClick={(e) => openForm(e)}
            />
          </div>
          {/* Open Form, trigger by button */}
          <div className="container mt-3 text-center" style={{ display: mode }}>
            <h2 className="font-semibold text-2xl">Form Tambah Buku</h2>
            <form>
              <div className="flex flex-row mt-5">
                <div className="w-1/2 flex flex-col items-center justify-center">
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    name="isbn"
                    type="text"
                    placeholder="ISBN"
                  />
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    name="bookName"
                    type="text"
                    placeholder="Judul Buku"
                  />
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    name="pages"
                    type="text"
                    placeholder="Halaman"
                  />
                </div>
                <div className="w-1/2 flex flex-col items-center">
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    name="authorName"
                    type="text"
                    placeholder="Nama Author"
                  />
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    name="bookCategory"
                    type="text"
                    placeholder="Kategori Buku"
                  />
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    name="releaseDate"
                    type="text"
                    placeholder="Tanggal Publikasi"
                  />
                </div>
              </div>
              <Button
                className="btn btn-success text-white w-40 my-10"
                label="Tambah"
                type="submit"
              />
            </form>
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
          ]}
          datas={books}
        />
      </Layout>
    </>
  );
}

export default Books;
