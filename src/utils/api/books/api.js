import axiosWithConfig from "../axiosWithConfig";

export const getBooks = async () => {
  try {
    const response = await axiosWithConfig.get("/books");
    return response.data;
  } catch (error) {
    throw Error("Failed to get Books");
  }
};
