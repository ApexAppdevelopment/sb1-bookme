import React from 'react';
import { Settings, RoomSettings, PromotionSettings } from '../../types/settings';
import { PencilIcon, Trash2Icon, PlusCircleIcon } from 'lucide-react';

interface AdminPanelProps {
  settings: Settings;
  onUpdateSettings: (settings: Settings) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ settings, onUpdateSettings }) => {
  const handleRoomUpdate = (index: number, updates: Partial<RoomSettings>) => {
    const newRooms = [...settings.rooms];
    newRooms[index] = { ...newRooms[index], ...updates };
    onUpdateSettings({ ...settings, rooms: newRooms });
  };

  const handlePromotionUpdate = (index: number, updates: Partial<PromotionSettings>) => {
    const newPromotions = [...settings.promotions];
    newPromotions[index] = { ...newPromotions[index], ...updates };
    onUpdateSettings({ ...settings, promotions: newPromotions });
  };

  return (
    <div className="space-y-8 text-white">
      <div>
        <h2 className="text-2xl font-bold mb-4">Room Settings</h2>
        <div className="grid gap-4">
          {settings.rooms.map((room, index) => (
            <div key={room.type} className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <input
                  type="text"
                  value={room.name}
                  onChange={(e) => handleRoomUpdate(index, { name: e.target.value })}
                  className="bg-transparent border-b border-white/20 px-2 py-1 focus:outline-none focus:border-white"
                />
                <div className="flex gap-2">
                  <button className="p-1 hover:text-blue-300">
                    <PencilIcon size={16} />
                  </button>
                  <button className="p-1 hover:text-red-300">
                    <Trash2Icon size={16} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm opacity-70">Daily Rate (₱)</label>
                  <input
                    type="number"
                    value={room.dailyRate}
                    onChange={(e) => handleRoomUpdate(index, { dailyRate: Number(e.target.value) })}
                    className="w-full bg-white/10 rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="text-sm opacity-70">Overtime Rate (₱/hr)</label>
                  <input
                    type="number"
                    value={room.overtimeRate}
                    onChange={(e) => handleRoomUpdate(index, { overtimeRate: Number(e.target.value) })}
                    className="w-full bg-white/10 rounded px-2 py-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 flex items-center gap-2 text-sm hover:text-blue-300">
          <PlusCircleIcon size={16} />
          Add New Room Type
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Promotions</h2>
        <div className="grid gap-4">
          {settings.promotions.map((promo, index) => (
            <div key={promo.id} className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <input
                  type="text"
                  value={promo.name}
                  onChange={(e) => handlePromotionUpdate(index, { name: e.target.value })}
                  className="bg-transparent border-b border-white/20 px-2 py-1 focus:outline-none focus:border-white"
                />
                <div className="flex gap-2">
                  <button className="p-1 hover:text-blue-300">
                    <PencilIcon size={16} />
                  </button>
                  <button className="p-1 hover:text-red-300">
                    <Trash2Icon size={16} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm opacity-70">Discount (%)</label>
                  <input
                    type="number"
                    value={promo.discountPercentage}
                    onChange={(e) => handlePromotionUpdate(index, { discountPercentage: Number(e.target.value) })}
                    className="w-full bg-white/10 rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="text-sm opacity-70">Min Days</label>
                  <input
                    type="number"
                    value={promo.minDays}
                    onChange={(e) => handlePromotionUpdate(index, { minDays: Number(e.target.value) })}
                    className="w-full bg-white/10 rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="text-sm opacity-70">Max Days</label>
                  <input
                    type="number"
                    value={promo.maxDays}
                    onChange={(e) => handlePromotionUpdate(index, { maxDays: Number(e.target.value) })}
                    className="w-full bg-white/10 rounded px-2 py-1"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={promo.active}
                    onChange={(e) => handlePromotionUpdate(index, { active: e.target.checked })}
                    className="rounded"
                  />
                  <span className="text-sm">Active</span>
                </label>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 flex items-center gap-2 text-sm hover:text-blue-300">
          <PlusCircleIcon size={16} />
          Add New Promotion
        </button>
      </div>
    </div>
  );
}