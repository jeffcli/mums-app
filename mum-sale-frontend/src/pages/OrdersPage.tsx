import { useEffect, useState } from "react";
import api from "../services/api";
import type { Order } from "../types/order";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get<Order[]>("/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            All Orders
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            View submitted mum sale orders.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-6 text-sm text-slate-600">Loading orders...</div>
          ) : orders.length === 0 ? (
            <div className="p-6 text-sm text-slate-600">No orders yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Color
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Qty
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Total
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50">
                      <td className="px-4 py-4 text-sm text-slate-900">
                        <div className="font-medium">{order.customerName}</div>
                        <div className="text-slate-500">{order.phone}</div>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {order.mumColor}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {order.quantity}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        ${order.totalPrice}
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {order.addressLine1}, {order.city}, {order.state}{" "}
                        {order.zip}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
