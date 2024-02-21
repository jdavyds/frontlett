import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import userSlice from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import customerSlice from "./slices/customerSlice";
import onboardSlice  from './slices/onboardSlice';

const userPersistConfig = {
  key: "user",
  storage,
};

const onboardPersistConfig = {
  key: "onboard",
  storage,
};

const customerPersistConfig = {
  key: "customer",
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userSlice),
  customer: persistReducer(customerPersistConfig, customerSlice),
  onboard: persistReducer(onboardPersistConfig, onboardSlice),
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "customer", "onboard"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          // base,
        },
      },
      serializableCheck: false,
    }),
});
