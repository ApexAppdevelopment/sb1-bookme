export interface RoomRate {
  type: 'fan' | 'aircon';
  dailyRate: number;
  description: string;
}

export const ROOM_RATES: RoomRate[] = [
  {
    type: 'fan',
    dailyRate: 250,
    description: 'Fan Room'
  },
  {
    type: 'aircon',
    dailyRate: 350,
    description: 'Air-Con Room'
  }
];