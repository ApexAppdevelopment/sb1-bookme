import React from 'react';
import { ROOM_RATES } from '../types/room';

interface RoomSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const RoomSelector: React.FC<RoomSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Room Type
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        {ROOM_RATES.map((room) => (
          <option key={room.type} value={room.type}>
            {room.description} (₱{room.dailyRate.toFixed(2)}/Day)
          </option>
        ))}
      </select>
    </div>
  );
};