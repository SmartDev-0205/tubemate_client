import { configureStore } from '@reduxjs/toolkit';

import authStore from './reducers/auth';
import userStore from './reducers/user';
import transactionStore from './reducers/transaction';

export const store = configureStore({
  reducer: {
    authStore,
    userStore,
    transactionStore,
  }
});
