import axiosWithConfig from "../axiosWithConfig";

export const getBooks = async () => {
  try {
    const response = await axiosWithConfig.get("/books");
    return response.data;
  } catch (error) {
    throw Error("Failed to get Books");
  }
};

export const postBook = async (data) => {
  try {
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.post("/books", newData);
    return response.data;
  } catch (error) {}
};

export const updateBook = async (data) => {
  const { id } = data;
  try {
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.put(`/books/${id}`, newData);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

export const deleteBook = async (bookId) => {
  try {
    const response = await axiosWithConfig.delete(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
};
