import React, { useState } from 'react';
import { RoomSelector } from './RoomSelector';
import { DateTimeSelector } from './DateTimeSelector';
import { calculateDuration, calculateTotal } from '../utils/helpers';
import { PaymentMethod } from '../types/invoice';

interface InvoiceFormProps {
  onSubmit: (data: any) => void;
  settings: any;
}

export const InvoiceForm: React.FC<InvoiceFormProps> = ({ onSubmit, settings }) => {
  const [roomType, setRoomType] = useState('fan');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const { days, remainingHours } = calculateDuration(checkInDate, checkOutDate);
    const total = calculateTotal(roomType, days, remainingHours);

    const invoiceData = {
      id: `INV-${Date.now()}`,
      timestamp: Date.now(),
      customerName,
      email,
      phone,
      roomType,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      days,
      remainingHours,
      total,
      paymentMethod
    };

    onSubmit(invoiceData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RoomSelector value={roomType} onChange={setRoomType} />
        
        <div className="space-y-4">
          <DateTimeSelector
            label="Check-In Date & Time"
            value={checkIn}
            onChange={setCheckIn}
            min={new Date().toISOString().slice(0, 16)}
          />
          <DateTimeSelector
            label="Check-Out Date & Time"
            value={checkOut}
            onChange={setCheckOut}
            min={checkIn}
          />
        </div>

        <div className="space-y-4 md:col-span-2">
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full px-3 py-2 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-md"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 rounded-md"
            required
          />
          
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
            className="w-full px-3 py-2 rounded-md"
          >
            <option value="cash">Cash</option>
            <option value="gcash">GCash</option>
            <option value="maya">Maya</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Generate Invoice
      </button>
    </form>
  );
};