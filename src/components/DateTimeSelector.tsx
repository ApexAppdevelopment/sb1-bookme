import React from 'react';

interface DateTimeSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  min?: string;
}

export const DateTimeSelector: React.FC<DateTimeSelectorProps> = ({
  label,
  value,
  onChange,
  min
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="datetime-local"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  );
};