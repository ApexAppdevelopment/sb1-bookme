export interface RoomSettings {
  type: string;
  name: string;
  dailyRate: number;
  overtimeRate: number;
}

export interface PromotionSettings {
  id: string;
  name: string;
  discountPercentage: number;
  minDays: number;
  maxDays: number;
  active: boolean;
}

export interface Settings {
  rooms: RoomSettings[];
  promotions: PromotionSettings[];
  overtimeThreshold: number; // hours after which overtime rate applies
}