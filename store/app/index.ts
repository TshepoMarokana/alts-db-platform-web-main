import { configureStore } from "@reduxjs/toolkit";
import { offeringsData } from "../features/offeringsSlice";
// import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    offerings: offeringsData.reducer,
  },
});

// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
