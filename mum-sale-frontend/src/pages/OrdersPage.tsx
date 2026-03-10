import { useEffect, useState } from "react";
import api from "../services/api";
import type { Order } from "../types/order";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get<Order[]>("/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>All Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              {order.customerName} — {order.mumColor} — Qty: {order.quantity} —
              ${order.totalPrice} — {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
