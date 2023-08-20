import { apiSlice } from '../slices/apiSlice';
const USER_URL = `/user`;
const DASH_URL = `/dashboard`;

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}`,
        method: 'POST',
        body: data
      }) 
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}`,
        method: 'POST',
        body: data
      })
    }),
    getData: builder.mutation({
      query: () => ({
        url: `${DASH_URL}`,
        method: 'GET',
      })
    }),
  })
})

export const { useLoginMutation, useRegisterMutation, useGetDataMutation } = userApiSlice;