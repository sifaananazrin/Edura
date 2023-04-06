import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
} from '@material-ui/core';

const OrderViewPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Fetch the order data using the order ID from the API or from your database
    const fetchOrder = async () => {
      const response = await fetch(`https://your-api.com/orders/${orderId}`);
      const data = await response.json();
      setOrder(data);
    };
    fetchOrder();
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Order Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader title="Order Information" />
            <CardContent>
              <Typography variant="subtitle1">
                Order ID: {order.id}
              </Typography>
              <Typography variant="subtitle1">
                Customer Name: {order.customerName}
              </Typography>
              <Typography variant="subtitle1">
                Product: {order.product}
              </Typography>
              <Typography variant="subtitle1">
                Quantity: {order.quantity}
              </Typography>
              <Typography variant="subtitle1">
                Price: ${order.price}
              </Typography>
              <Typography variant="subtitle1">
                Total: ${order.quantity * order.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader title="Shipping Information" />
            <CardContent>
              <Typography variant="subtitle1">
                Name: {order.shippingName}
              </Typography>
              <Typography variant="subtitle1">
                Address: {order.shippingAddress}
              </Typography>
              <Typography variant="subtitle1">
                City: {order.shippingCity}
              </Typography>
              <Typography variant="subtitle1">
                State: {order.shippingState}
              </Typography>
              <Typography variant="subtitle1">
                Zip Code: {order.shippingZip}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderViewPage;
