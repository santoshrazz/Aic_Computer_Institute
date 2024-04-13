import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loginState: false,
  isLoading: true,
};

export const getUser = createAsyncThunk("getUser", async () => {
  try {
    const cookie = document.cookie;
    if (!cookie) {
      return false;
    }
    const myCookie = cookie.split("=")[1];
    if (myCookie === "loggedIn") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLoading = false;
      state.loginState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
        state.loginState = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginState = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.loginState = false;
      });
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
