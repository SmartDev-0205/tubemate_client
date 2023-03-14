import Axios from "config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getMyTransactions = createAsyncThunk(
  "transactions/me",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.get("transactions/me");
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

export const getTransactions = createAsyncThunk(
  "transactions",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.get("transactions");
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

export const updateTransactions = createAsyncThunk(
  "transactions/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await Axios.put(`transactions/${id}`, data);
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

export const deleteTransactions = createAsyncThunk(
  "transactions/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await Axios.delete(`transactions/${id}`);
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

export const transactionWithdraw = createAsyncThunk(
  "transactions/withdraw",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post("transactions/withdraw", data);
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
  errors: null,
  isTransactionWithdraw: false,
  isUpdateTransactions: false,
  isDeleteTransactions: false,
  transactions: [],
  myTransactions: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get transactions
    builder.addCase(getTransactions.pending, (state) => {
      state.loading = true;
      state.errors = null;
      state.transactions = [];
      state.isUpdateTransactions = false;
      state.isDeleteTransactions = false;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.loading = false;
      state.transactions = action.payload;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.loading = false;
      state.transactions = [];
      state.errors = {
        transactions: action.payload,
      };
    });
    // get my transactions
    builder.addCase(getMyTransactions.pending, (state) => {
      state.loading = true;
      state.errors = null;
      state.myTransactions = [];
      state.isUpdateTransactions = false;
      state.isDeleteTransactions = false;
    });
    builder.addCase(getMyTransactions.fulfilled, (state, action) => {
      state.loading = false;
      state.myTransactions = action.payload;
    });
    builder.addCase(getMyTransactions.rejected, (state, action) => {
      state.loading = false;
      state.myTransactions = [];
      state.errors = {
        transactions: action.payload,
      };
    });
    // updateTransactions
    builder.addCase(updateTransactions.pending, (state) => {
      state.loading = true;
      state.errors = null;
      state.isUpdateTransactions = false;
    });
    builder.addCase(updateTransactions.fulfilled, (state, action) => {
      state.loading = false;
      state.isUpdateTransactions = true;
    });
    builder.addCase(updateTransactions.rejected, (state, action) => {
      state.loading = false;
      state.isUpdateTransactions = false;
      state.errors = {
        updateTransactions: action.payload,
      };
    });
    // deleteTransactions
    builder.addCase(deleteTransactions.pending, (state) => {
      state.loading = true;
      state.errors = null;
      state.isDeleteTransactions = false;
    });
    builder.addCase(deleteTransactions.fulfilled, (state, action) => {
      state.loading = false;
      state.isDeleteTransactions = true;
    });
    builder.addCase(deleteTransactions.rejected, (state, action) => {
      state.loading = false;
      state.isDeleteTransactions = false;
      state.errors = {
        deleteTransactions: action.payload,
      };
    });
    // transactionWithdraw
    builder.addCase(transactionWithdraw.pending, (state) => {
      state.loading = true;
      state.errors = null;
      state.isTransactionWithdraw = false;
    });
    builder.addCase(transactionWithdraw.fulfilled, (state, action) => {
      state.loading = false;
      state.isTransactionWithdraw = true;
    });
    builder.addCase(transactionWithdraw.rejected, (state, action) => {
      state.loading = false;
      state.isTransactionWithdraw = false;
      state.errors = {
        withdraw: action.payload,
      };
    });
  },
});

export default userSlice.reducer;
