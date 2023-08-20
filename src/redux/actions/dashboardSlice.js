import { apiSlice } from '../slices/apiSlice';
const DASH_URL = `/dashboard`;

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.mutation({
      query: () => ({
        url: `${DASH_URL}`,
        method: 'GET',
      })
    }),
  })
})

export const { useGetDataMutation } = userApiSlice;