import Axios from 'config/axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const getUser = createAsyncThunk(
	'auth/profile',
	async (user, { rejectWithValue }) => {
		try {
			const response = await Axios.get('auth/profile');
			return response.data;
		} catch (error) {
			console.log('>>> Error: ', error);
			if (!error.response) {
				throw error;
			}
			if (error.response.data) {
				toast.error(error.response.data.message);
			}
			return rejectWithValue(error.response.data);
		}
	},
);

export const getAdminStats = createAsyncThunk(
	'stats',
	async (user, { rejectWithValue }) => {
		try {
			const response = await Axios.get('stats');
			return response.data;
		} catch (error) {
			console.log('>>> Error: ', error);
			if (!error.response) {
				throw error;
			}
			if (error.response.data) {
				toast.error(error.response.data.message);
			}
			return rejectWithValue(error.response.data);
		}
	},
);

export const getUsers = createAsyncThunk(
	'users',
	async (user, { rejectWithValue }) => {
		try {
			const response = await Axios.get('users');
			return response.data;
		} catch (error) {
			console.log('>>> Error: ', error);
			if (!error.response) {
				throw error;
			}
			if (error.response.data) {
				toast.error(error.response.data.message);
			}
			return rejectWithValue(error.response.data);
		}
	},
);

export const deleteUsers = createAsyncThunk(
	'users/delete',
	async (user, { rejectWithValue }) => {
		try {
			const response = await Axios.delete(`users/${user}`);
			return response.data;
		} catch (error) {
			console.log('>>> Error: ', error);
			if (!error.response) {
				throw error;
			}
			if (error.response.data) {
				toast.error(error.response.data.message);
			}
			return rejectWithValue(error.response.data);
		}
	},
);

export const updatePassword = createAsyncThunk(
	'auth/profile/password',
	async (user, { rejectWithValue }) => {
		try {
			const response = await Axios.put('auth/profile/password', user);
			return response.data;
		} catch (error) {
			console.log('>>> Error: ', error);
			if (!error.response) {
				throw error;
			}
			if (error.response.data) {
				toast.error(error.response.data.message);
			}
			return rejectWithValue(error.response.data);
		}
	},
);

export const updateSubscriptionId = createAsyncThunk(
	'auth/updateSubscriptionId',
	async (user, { rejectWithValue }) => {
		try {
			const response = await Axios.put('auth/updateSubscriptionId', user);
			if(response.status === 200) return user;
		} catch (error) {
			console.log('>>> Error: ', error);
			if (!error.response) {
				throw error;
			}
			if (error.response.data) {
				toast.error(error.response.data.message);
			}
			return rejectWithValue(error.response.data);
		}
	},
);

export const createSubscription = createAsyncThunk(
	'stripe/subscription',
	async (data, { rejectWithValue }) => {
		try {
			const response = await Axios.post('subscription/', data);

			toast.success(response.data.message);

			console.log(response.data);

			console.log('updating referrer');

			console.log(response);
if(response){
let data = response.data.data;
if(data.status=="succeeded"){
	//pop up 5 to referrer balance
	console.log("update balance");

	console.log('update progress');

	const response = await Axios.get('users/updatereferral');

	console.log(response.data);
	//updatereferraluser();


}
}

			return response.data;
		} catch (error) {
			if (!error.response) {
				throw error;
			}
			if (error.response.data) {
				toast.error(error.response.data.message.raw.message);
			}
			return rejectWithValue(error.response.data);
		}
	},
);

const initialState = {
	loading: false,
	user: null,
	errors: null,
	isUpdatePassword: false,
	isUpdateSubscription: false,
	stats: null,
	users: [],
	isDeleteUser: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		// getUser
		builder.addCase(getUser.pending, (state) => {
			state.loading = true;
			state.errors = null;
		});
		builder.addCase(getUser.fulfilled, (state, action) => {
			state.loading = false;
			state.user = action.payload;
		});
		builder.addCase(getUser.rejected, (state, action) => {
			state.loading = false;
			state.errors = {
				login: action.payload,
			};
		});
		// getAdminStats
		builder.addCase(getAdminStats.pending, (state) => {
			state.loading = true;
			state.errors = null;
		});
		builder.addCase(getAdminStats.fulfilled, (state, action) => {
			state.loading = false;
			state.stats = action.payload;
		});
		builder.addCase(getAdminStats.rejected, (state, action) => {
			state.loading = false;
			state.errors = {
				stats: action.payload,
			};
		});
		// update password
		builder.addCase(updatePassword.pending, (state) => {
			state.loading = true;
			state.errors = null;
			state.isUpdatePassword = false;
		});
		builder.addCase(updatePassword.fulfilled, (state, action) => {
			state.loading = false;
			state.isUpdatePassword = true;
		});
		builder.addCase(updatePassword.rejected, (state, action) => {
			state.loading = false;
			state.isUpdatePassword = false;
			state.errors = {
				updatePassword: action.payload,
			};
		});
		// getUsers
		builder.addCase(getUsers.pending, (state) => {
			state.loading = true;
			state.errors = null;
			state.users = [];
			state.isDeleteUser = false;
		});
		builder.addCase(getUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.errors = null;
			state.users = action.payload;
		});
		builder.addCase(getUsers.rejected, (state, action) => {
			state.loading = false;
			state.users = [];
			state.errors = {
				users: action.payload,
			};
		});
		// deleteUsers
		builder.addCase(deleteUsers.pending, (state) => {
			state.loading = true;
			state.errors = null;
			state.isDeleteUser = false;
		});
		builder.addCase(deleteUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.errors = null;
			state.isDeleteUser = true;
		});
		builder.addCase(deleteUsers.rejected, (state, action) => {
			state.loading = false;
			state.isDeleteUser = false;
			state.errors = {
				users: action.payload,
			};
		});
		builder.addCase(createSubscription.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(createSubscription.fulfilled, (state, action) => {
			state.loading = false;
			state.user.subscriptionId = action.payload.data.id;
		});
		// update subscription
		builder.addCase(updateSubscriptionId.pending, (state) => {
			state.loading = true;
			state.errors = null;
			state.isUpdateSubscription = false;
		});
		builder.addCase(updateSubscriptionId.fulfilled, (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.isUpdateSubscription = true;
		});
		builder.addCase(updateSubscriptionId.rejected, (state, action) => {
			state.loading = false;
			state.isUpdateSubscription = false;
			// state.errors = {
			// 	updatePassword: action.payload,
			// };
		});
	},
});

export default userSlice.reducer;