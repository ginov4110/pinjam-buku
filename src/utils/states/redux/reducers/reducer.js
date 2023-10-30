import { createSlice } from "@reduxjs/toolkit";

function getItems() {
  const getItem = localStorage.getItem("books");

  if (getItem) {
    const parseBooks = JSON.stringify(getItem);
    return parseBooks;
  }
  return [];
}

const initialState = {
  isLoggedIn: false,
  token: "",
  books: [
    {
      no: "",
      ISBN: "",
      bookName: "",
      pages: 0,
      authorName: "",
      bookCategory: "",
      releaseDate: "",
    },
  ],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
      localStorage.setItem("books", JSON.stringify(action.payload));
    },
    editBooks: (state, action) => {
      // function
    },
    deleteBooks: (state, action) => {
      // function
    },
    handleAuth: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setBooks, editBooks, deleteBooks, handleAuth } =
  sliceState.actions;
export default reducer;
