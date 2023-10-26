import axios from "axios";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { bookSchema, getBooks } from "@/utils/api/books";
import { v4 as uuidv4 } from "uuid";

import Button from "@/components/Button";
import { Input, Select } from "@/components/Input";
import Layout from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { TableRent } from "@/components/Table";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function Books() {
  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [mode, setMode] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(bookSchema) });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory !== "") {
      filterCategory();
    } else if (selectedCategory === "All") {
      fetchData();
    }
  }, [filterCategory]);

  async function fetchData() {
    try {
      const result = await getBooks();
      console.log(result);
      setBooks(result);
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error.toString(),
      });
    }
  }

  async function filterCategory() {
    const url = new URL("https://651a7caa340309952f0d6022.mockapi.io/books");
    url.searchParams.append("bookCategory", selectedCategory);
    try {
      const resullt = await axios.get(url).then((response) => {
        setBooks(response.data);
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error.toString(),
      });
    }
  }

  function onSubmit(data) {
    const newData = { id: uuidv4(), ...data };
    const dupeArr = [...books, newData];
    setBooks(dupeArr);
    Toast.fire({
      icon: "success",
      title: "Buku berhasil ditambahkan",
    });
    reset();
  }

  function onSubmitEdit(data) {
    const newData = books.map((book) => {
      if (book.id === selectedId) {
        return { id: selectedId, ...data };
      }
      return book;
    });
    setBooks(newData);
    Toast.fire({
      icon: "success",
      title: "Buku berhasil diupdate",
    });
    reset();
  }

  function onClickEdit(data) {
    setSelectedId(data.id);
    setValue("isbn", data.isbn);
    setValue("bookName", data.bookName);
    setValue("pages", data.pages);
    setValue("authorName", data.authorName);
    setValue("bookCategory", data.bookCategory);
    setValue("releaseDate", data.releaseDate);
  }

  function onClickDelete(data) {
    const newData = books.filter((book) => book.id !== data.id);
    setBooks(newData);
    Toast.fire({
      icon: "success",
      title: "Buku berhasil dihapus",
    });
  }

  const openForm = (e) => {
    if (isOpen) {
      setMode("");
      setIsOpen(false);
    } else {
      setMode("none");
      setIsOpen(true);
    }
  };

  return (
    <>
      <Navbar />
      <Layout>
        <div className="mb-5">
          <h2 className="font-semibold text-3xl mb-10">Daftar Buku</h2>
          <div className="flex flex-row items-center">
            <Select
              id="input-book-category"
              aria-label="input-book-category"
              label="Cari Kategori"
              name="bookCategory"
              placeholder="-- Pilih Kategori --"
              value={selectedCategory}
              options={[
                "All",
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
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            <Button
              className="mt-9 ml-5 btn btn-sm btn-accent text-white"
              label="Tambah Buku"
              onClick={(e) => openForm(e)}
            />
          </div>
          {/* Open Form, trigger by button */}
          <div className="container mt-3 text-center" style={{ display: mode }}>
            <h2 className="font-semibold text-2xl">Form Tambah Buku</h2>
            <form
              onSubmit={handleSubmit(
                selectedId == "" ? onSubmit : onSubmitEdit
              )}>
              <div className="flex flex-row mt-5">
                <div className="w-1/2 flex flex-col items-center justify-center">
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    id="input-isbn"
                    label="ISBN"
                    name="isbn"
                    placeholder="ISBN"
                    register={register}
                    error={errors.isbn?.message}
                  />
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    id="input-book-name"
                    label="Nama Buku"
                    name="bookName"
                    placeholder="Nama Buku"
                    register={register}
                    error={errors.bookName?.message}
                  />
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    id="input-pages"
                    label="Halaman"
                    name="pages"
                    placeholder="Halaman"
                    register={register}
                    error={errors.pages?.message}
                  />
                </div>
                <div className="w-1/2 flex flex-col items-center">
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    id="input-author-name"
                    label="Nama Author"
                    name="authorName"
                    placeholder="Nama Author"
                    register={register}
                    error={errors.authorName?.message}
                  />
                  <Select
                    id="input-book-category"
                    aria-label="input-book-category"
                    label="Kategori Buku"
                    name="bookCategory"
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
                    placeholder="-- Pilih Kategori --"
                    register={register}
                    error={errors.productName?.message}
                  />
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    id="input-release-date"
                    label="Tanggal Publikasi"
                    name="releaseDate"
                    placeholder="yyyy-mm-dd"
                    register={register}
                    error={errors.authorName?.message}
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
          <TableRent
            isReady={true}
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
            onEditClick={(data) => onClickEdit(data)}
            onDeleteClick={(data) => onClickDelete(data)}
          />
        </div>
      </Layout>
    </>
  );
}

export default Books;
