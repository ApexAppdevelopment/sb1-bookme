import { Settings } from '../types/settings';

export const defaultSettings: Settings = {
  rooms: [
    {
      type: 'fan',
      name: 'Fan Room',
      dailyRate: 250,
      overtimeRate: 15, // per hour
    },
    {
      type: 'aircon',
      name: 'Air-Con Room',
      dailyRate: 350,
      overtimeRate: 20, // per hour
    },
  ],
  promotions: [
    {
      id: 'weekly',
      name: 'Weekly Stay Discount',
      discountPercentage: 10,
      minDays: 7,
      maxDays: 13,
      active: true,
    },
    {
      id: 'biweekly',
      name: 'Bi-Weekly Stay Discount',
      discountPercentage: 15,
      minDays: 14,
      maxDays: 20,
      active: true,
    },
    {
      id: 'monthly',
      name: 'Monthly Stay Discount',
      discountPercentage: 20,
      minDays: 21,
      maxDays: 31,
      active: true,
    },
  ],
  overtimeThreshold: 24,
}