import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl } from '../../../utils/getBaseUrl';

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/orders`,
  credentials: 'include',
  prepareHeaders: headers => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const ordersApi = createApi({
  reducerPath: 'orderApi',
  baseQuery,
  tagTypes: ['Orders'],
  endpoints: builder => ({
    fetchAllOrders: builder.query({
      query: () => '/',
      providesTags: ['Orders'],
    }),
    fetchOrderById: builder.query({
      query: id => `/${id}`,
      providesTags: (results, error, id) => [{ type: 'Orders', id }],
    }),
    addOrder: builder.mutation({
      query: newOrder => ({
        url: '/create-order',
        method: 'POST',
        body: newOrder,
      }),
      invalidatesTags: ['Orders'],
    }),
    updateOrder: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/edit/${id}`,
        method: 'PUT',
        body: rest,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Orders'],
    }),
    deleteOrder: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
});

export const {
  useFetchAllOrdersQuery,
  useFetchOrderByIdQuery,
  useAddOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = ordersApi;

export default ordersApi;
