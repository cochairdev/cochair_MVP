import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      queryFn(){
        return {data : 'ok'}
      }
    }),
  }),
})

//Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useFetchUsersQuery } = usersApi;