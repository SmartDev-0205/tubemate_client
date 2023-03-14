import Axios from "config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
  "/auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await Axios.post("/auth/login", user);
      return response.data;
    } catch (error) {
      console.log(">>> Error: ", error);
      if (!error.response) {
        throw error;
      }
      if (error.response.data) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "/auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const response = await Axios.post("/auth/register", user);
      return response.data;
    } catch (error) {
      console.log(">>> Error: ", error);
      if (!error.response) {
        throw error;
      }
      if (error.response.data) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/password/send-mail",
  async (user, { rejectWithValue }) => {
    try {
      const response = await Axios.post("auth/password/send-mail", user);
      return response.data;
    } catch (error) {
      console.log(">>> Error: ", error);
      if (!error.response) {
        throw error;
      }
      if (error.response.data) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/password/reset",
  async (user, { rejectWithValue }) => {
    try {
      const response = await Axios.post("auth/password/reset", user);
      return response.data;
    } catch (error) {
      console.log(">>> Error: ", error);
      if (!error.response) {
        throw error;
      }
      if (error.response.data) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createAi = createAsyncThunk(
  "auth/create-ai",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post("create-ai", data);
      return response.data;
    } catch (error) {
      console.log(">>> Error: ", error);
      if (!error.response) {
        throw error;
      }
      if (error.response.data) {
        toast.error(error.response.data.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  loading: false,
  user: null,
  isLogin: false,
  isCreatedAi: false,
  isForgotPassword: false,
  isResetPassword: false,
  token: null,
  errors: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetAuth: (state) => {
      state.errors = null;
      state.isLogin = false;
      state.isCreatedAi = false;
      localStorage.removeItem("tubemate_token");

      document.cookie = 'seterror=; Max-Age=-99999999;';  

    },
    resetForgotPassword: (state) => {
      state.isForgotPassword = false;
    },
    resetResetPassword: (state) => {
      state.isResetPassword = false;
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isLogin = !!action.payload.token;
      state.token = action.payload.token;
      localStorage.setItem("tubemate_token", state.token);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.errors = {
        login: action.payload,
      };
    });
    // register
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.isRegister = false;
      state.errors = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      // state.user = action.payload;
      state.isRegister = action.payload ? true : false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.errors = {
        register: action.payload,
      };
    });
    // forgotPassword
    builder.addCase(forgotPassword.pending, (state) => {
      state.loading = true;
      state.isForgotPassword = false;
      state.errors = null;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.isForgotPassword = true;
      state.errors = null;
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.isForgotPassword = false;
      state.errors = {
        forgotPassword: action.payload,
      };
    });
    // resetPassword
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.isResetPassword = false;
      state.errors = null;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.isResetPassword = true;
      state.errors = null;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.isResetPassword = false;
      state.errors = {
        resetPassword: action.payload,
      };
    });
    // create ai
    builder.addCase(createAi.pending, (state) => {
      state.loading = true;
      state.isCreatedAi = false;
    });
    builder.addCase(createAi.fulfilled, (state, action) => {
      state.loading = false;
      state.isCreatedAi = action.payload ? true : false;
    });
    builder.addCase(createAi.rejected, (state, action) => {
      state.loading = false;
      state.errors = {
        createAi: action.payload,
      };
    });
  },
});

export const { 
  resetAuth, 
  resetForgotPassword, 
  resetResetPassword,
} = authSlice.actions;

export default authSlice.reducer;
