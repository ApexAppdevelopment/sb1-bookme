export type PaymentMethod = 'cash' | 'gcash' | 'maya' | 'bank';

export interface InvoiceData {
  id: string;
  timestamp: number;
  customerName: string;
  email: string;
  phone: string;
  amount: number;
  paymentMethod: PaymentMethod;
  items: InvoiceItem[];
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}