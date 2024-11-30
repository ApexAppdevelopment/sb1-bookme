import React from 'react';
import { HomeIcon } from 'lucide-react';

interface HeaderProps {
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin, onToggleAdmin }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <HomeIcon className="h-6 w-6 text-blue-400" />
            <div>
              <h1 className="text-xl font-semibold text-white">JUN n RIE</h1>
              <p className="text-xs text-blue-400">Transient Home</p>
            </div>
          </div>
          <button
            onClick={onToggleAdmin}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all"
          >
            {isAdmin ? '← Back to Invoice' : 'Admin Panel'}
          </button>
        </div>
      </div>
    </div>
  );
};