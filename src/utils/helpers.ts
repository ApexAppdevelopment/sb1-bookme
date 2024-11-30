export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP'
  }).format(amount);
};

export const calculateDuration = (checkIn: Date, checkOut: Date) => {
  const diff = checkOut.getTime() - checkIn.getTime();
  const hours = diff / (1000 * 60 * 60);
  const days = Math.floor(hours / 24);
  const remainingHours = Math.ceil(hours % 24);
  return { days, remainingHours };
};

export const calculateTotal = (roomType: string, days: number, hours: number): number => {
  const baseRate = roomType === 'aircon' ? 350 : 250;
  return (days * baseRate) + (hours * (baseRate / 24));
};