import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import userSlice from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import customerSlice from "./slices/customerSlice";

const userPersistConfig = {
  key: "user",
  storage,
};

const customerPersistConfig = {
  key: "customer",
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userSlice),
  customer: persistReducer(customerPersistConfig, customerSlice),
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "customer"],
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
