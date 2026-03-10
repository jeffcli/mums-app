export interface Order {
  id?: number;
  customerName: string;
  phone: string;
  addressLine1: string;
  city: string;
  state: string;
  zip: string;
  mumColor: string;
  quantity: number;
  totalPrice?: number;
  status?: string;
}
