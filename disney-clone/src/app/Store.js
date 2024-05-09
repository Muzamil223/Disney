import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/user/UserSlice";
import movieReducer from "../features/Movie/MovieSlice";

export default configureStore({
  reducer: {
    user: UserSlice,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializablecheck: false,
    }),
});
