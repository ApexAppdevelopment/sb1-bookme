import React from 'react';
import { formatCurrency } from '../utils/helpers';
import { ROOM_RATES } from '../types/room';

interface InvoiceProps {
  data: any;
}

export const Invoice: React.FC<InvoiceProps> = ({ data }) => {
  const roomRate = ROOM_RATES.find(rate => rate.type === data.roomType);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-2xl font-bold">Invoice #{data.id}</h2>
        <p className="text-gray-600">
          Generated on: {new Date(data.timestamp).toLocaleString()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold mb-2">Customer Details</h3>
          <p>{data.customerName}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Booking Details</h3>
          <p>Room Type: {roomRate?.description}</p>
          <p>Check-in: {new Date(data.checkIn).toLocaleString()}</p>
          <p>Check-out: {new Date(data.checkOut).toLocaleString()}</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>Duration:</span>
          <span>{data.days} days, {data.remainingHours} hours</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Rate:</span>
          <span>{formatCurrency(roomRate?.dailyRate || 0)}/day</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total Amount:</span>
          <span>{formatCurrency(data.total)}</span>
        </div>
        <div className="mt-4 text-gray-600">
          Payment Method: {data.paymentMethod.toUpperCase()}
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Thank you for choosing JUN n RIE Transient Home!</p>
        <p>For inquiries, please contact: 0963 698 0739</p>
        <p>Email: junaletada489@gmail.com</p>
      </div>
    </div>
  );
};