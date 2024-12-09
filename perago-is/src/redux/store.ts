import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import treeStateReducer from "./features/treeSlice";
import roleEditSlice from "./features/roleEditSlice";
import apiSlice from "./services/rootApi";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    treeState: treeStateReducer,
    roleEditState: roleEditSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
