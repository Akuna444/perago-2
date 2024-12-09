import apiSlice from "./rootApi";

const RolesApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getRoleHierarchy: build.query({
      query: () => "/role/hierarchy",
      providesTags: ["Roles"],
    }),
    getAllRoles: build.query({
      query: () => "/role",
      providesTags: ["Roles"],
    }),
    addRoles: build.mutation({
      query: (data) => ({
        url: "/role",
        method: "POST",
        body: data, // Pass UserData as the body for the POST request
      }),
      invalidatesTags: ["Roles"],
    }),
  }),
});

export const {
  useGetRoleHierarchyQuery,
  useAddRolesMutation,
  useGetAllRolesQuery,
} = RolesApi;
