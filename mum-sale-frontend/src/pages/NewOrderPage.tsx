import { type ChangeEvent, type FormEvent, useState } from "react";
import api from "../services/api";
import type { Order } from "../types/order";

const initialFormData: Order = {
  customerName: "",
  phone: "",
  addressLine1: "",
  city: "",
  state: "",
  zip: "",
  mumColor: "",
  quantity: 1,
};

export default function NewOrderPage() {
  const [formData, setFormData] = useState<Order>(initialFormData);
  const [message, setMessage] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await api.post<Order>("/orders", formData);
      setMessage(`Order created! Total price: $${response.data.totalPrice}`);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Failed to create order:", error);
      setMessage("Failed to create order.");
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>New Mum Order</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}
      >
        <input
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          name="addressLine1"
          placeholder="Address"
          value={formData.addressLine1}
          onChange={handleChange}
        />
        <input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        <input
          name="zip"
          placeholder="ZIP"
          value={formData.zip}
          onChange={handleChange}
        />
        <input
          name="mumColor"
          placeholder="Mum Color"
          value={formData.mumColor}
          onChange={handleChange}
        />
        <input
          name="quantity"
          type="number"
          min="1"
          value={formData.quantity}
          onChange={handleChange}
        />

        <button type="submit">Submit Order</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
