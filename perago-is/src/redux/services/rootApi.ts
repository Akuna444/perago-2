import { backendUrl } from "@/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  tagTypes: ["Roles"],
  baseQuery: fetchBaseQuery({
    baseUrl: backendUrl,
  }),
  endpoints: (builder) => ({}),
  refetchOnFocus: false,
});

export default apiSlice;
