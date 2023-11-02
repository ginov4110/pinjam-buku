import * as z from "zod";

export const bookSchema = z.object({
  id: z.number().optional(),
  ISBN: z.string().min(10, { message: "Mohon lengkapi data ISBN" }),
  bookName: z.string().min(5, { message: "Judul Buku minimal 5 karakter" }),
  pages: z.string().min(1, { message: "Jumlah halaman harus di isi" }),
  authorName: z.string().min(4, { message: "Minimal 4 karakter" }),
  bookCategory: z.string().min(1, { message: "Pilih kategori buku" }),
  releaseDate: z.date().max(new Date()),
});
