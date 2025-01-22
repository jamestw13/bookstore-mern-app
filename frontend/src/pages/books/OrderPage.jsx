import React from 'react';
import { useFetchOrderByUserQuery } from '../../redux/features/orders/order.Api';
import { useAuth } from '../../context/AuthContext';

const OrderPage = () => {
  const { currentUser, loading } = useAuth();
  const { data: orders = [], isLoading, isError } = useFetchOrderByUserQuery(currentUser.email);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while loading orders</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="bg-white rounded shadow-lg p-4">
          {orders.map((order, i) => (
            <div key={i} className="border-b mb-4 pb-4">
              <p className="bg-secondary p-1 text-white w-10 rounded mb-1"># {i + 1}</p>
              <h2 className="font-bold">Order ID: {order?._id}</h2>
              <p className="text-gray-600">Name: {order?.name}</p>
              <p className="text-gray-600">Email: {order?.email}</p>
              <p className="text-gray-600">Phone: {order?.phone}</p>
              <p className="text-gray-600">Total Price: {order?.totalPrice}</p>
              <h3 className="font-semibold mt-2">Address:</h3>
              <p> {`${order?.address}, ${order?.city}, ${order?.state}, ${order?.country},${order?.zipcode}`}</p>
              <h3 className="font-semibold mt-2">Products Id:</h3>
              <ul>
                {order?.productIds.map((productId, i) => (
                  <li key={i}>{productId}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
