import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl } from '../../../utils/getBaseUrl';

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/books`,
  credentials: 'include',
  prepareHeaders: headers => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const booksApi = createApi({
  reducerPath: 'bookApi',
  baseQuery,
  tagTypes: ['Books'],
  endpoints: builder => ({
    fetchAllBooks: builder.query({
      query: () => '/',
      providesTags: ['Books'],
    }),
  }),
});

export const { useFetchAllBooksQuery } = booksApi;
export default booksApi;
