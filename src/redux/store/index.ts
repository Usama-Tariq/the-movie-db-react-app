// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import reducer from "../reducers/index";

export const store = configureStore({
  reducer,
  applyMiddleware: [thunk],
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;

// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
