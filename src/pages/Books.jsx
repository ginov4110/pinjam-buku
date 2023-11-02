import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  bookSchema,
  getBooks,
  postBook,
  deleteBook,
  updateBook,
} from "@/utils/api/books";
import { FaPencilAlt, FaEraser, FaPlusSquare } from "react-icons/fa";
import Table from "@/components/table/tables";

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
  const [rentBooks, setRentBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [mode, setMode] = useState("none");
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date().toString().slice(0, 10));
  const [selectedId, setSelectedId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(bookSchema) });

  const columns = useMemo(() => [
    {
      header: "No",
      accessorKey: "id",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    },
    {
      header: "ISBN",
      accessorKey: "ISBN",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    },
    {
      header: "Judul Buku",
      accessorKey: "bookName",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    },
    {
      header: "Halaman",
      accessorKey: "pages",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    },
    {
      header: "Nama Author",
      accessorKey: "authorName",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    },
    {
      header: "Kategori Buku",
      accessorKey: "bookCategory",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    },
    {
      header: "Tanggal Publikasi",
      accessorKey: "releaseDate",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    },
    {
      header: "",
      accessorKey: "actionAddRent",
      cell: (info) => (
        <FaPlusSquare
          aria-label="action-edit"
          onClick={() => onAddRent(info.row.original)}
        />
      ),
      footer: (props) => props.column.id,
    },
    {
      header: "",
      accessorKey: "actionEdit",
      cell: (info) => (
        <FaPencilAlt
          aria-label="action-edit"
          onClick={() => onClickEdit(info.row.original)}
        />
      ),
      footer: (props) => props.column.id,
    },
    {
      header: "",
      accessorKey: "actionDelete",
      cell: (info) => (
        <FaEraser
          aria-label="action-delete"
          onClick={() => onClickDelete(info.row.original.id)}
        />
      ),
      footer: (props) => props.column.id,
    },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory !== "All") {
      filterCategory();
    } else {
      fetchData();
    }
  }, [selectedCategory]);

  async function fetchData() {
    try {
      const result = await getBooks();
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

  async function onSubmit(data) {
    const newData = { id: books.length + 1, ...data };
    const dupeArr = [...books, newData];
    try {
      await postBook(data);
      console.log(data);
      reset();
      fetchData();
      Toast.fire({
        icon: "success",
        title: "Buku berhasil ditambahkan",
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error,
      });
    }
  }

  function onAddRent(data) {
    const newRent = {
      id: data.id,
      bookName: data.bookName,
      bookCategory: data.bookCategory,
      rentDate: new Date(),
    };
    const dupeArr = [...rentBooks, newRent];
    setRentBooks(dupeArr);
    localStorage.setItem("rentBooks", JSON.stringify(dupeArr));
    Toast.fire({
      icon: "success",
      title: "Kamu berhasil pinjam, jangan lupa kembalikan ya!",
    });
  }

  async function onSubmitEdit(data) {
    try {
      await updateBook({ ...data, id: selectedId });
      Toast.fire({
        icon: "success",
        title: "Buku berhasil diupdate",
      });
      reset();
      fetchData();
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error,
      });
    }
  }

  function onClickEdit(data) {
    setSelectedId(data.id);
    setValue("ISBN", data.ISBN);
    setValue("bookName", data.bookName);
    setValue("pages", data.pages);
    setValue("authorName", data.authorName);
    setValue("bookCategory", data.bookCategory);
    setValue("releaseDate", data.releaseDate);
  }

  async function onClickDelete(bookId) {
    try {
      await deleteBook(bookId);
      Toast.fire({
        icon: "success",
        title: "Buku berhasil dihapus",
      });
      fetchData();
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error,
      });
    }
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
        <div className="mb-5 p-4">
          <h2 className="font-semibold text-3xl mb-3">Daftar Buku</h2>
          <div className="w-2/3">
            <h4 className="mb-4 -ml-3 font-medium">
              Selamat Datang di Perpustakaan Online PIKU, kami memiliki banyak
              koleksi buku dengan kategori yang bermacam-macam, silahkan baca
              dan pinjam. Terima kasih sudah berkunjung
            </h4>
          </div>
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
              className="mt-12 ml-5 btn btn-sm btn-accent text-white"
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
              )}
              aria-label="book-form">
              <div className="flex flex-row mt-5">
                <div className="w-1/2 flex flex-col items-center justify-center">
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    id="input-isbn"
                    label="ISBN"
                    name="ISBN"
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
                    error={errors.bookCategory?.message}
                  />
                  <Input
                    className="w-80 border rounded-md p-3 my-2 input-sm"
                    id="input-release-date"
                    label="Tanggal Publikasi"
                    type="date"
                    name="releaseDate"
                    max={date}
                    placeholder="mm-dd-yyyy"
                    register={register}
                    error={errors.releaseDate?.message}
                  />
                </div>
              </div>
              <Button
                className="btn btn-success text-white w-40 my-10"
                label="Tambah"
                type="submit"
              />
              <Button
                label="Reset"
                className="btn btn-neutral ml-3 text-white w-40 my-10"
                onClick={() => reset()}
              />
            </form>
          </div>
          <Table datas={books} columns={columns} isLoading={isLoading} />
        </div>
      </Layout>
    </>
  );
}

export default Books;
