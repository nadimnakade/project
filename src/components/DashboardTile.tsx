import React from 'react';
import { ChevronRight } from 'lucide-react';

interface DashboardTileProps {
  title: string;
  subtitle?: string;
  count: number;
  onClick: () => void;
}

export const DashboardTile: React.FC<DashboardTileProps> = ({
  title,
  subtitle,
  count,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
          <p className="text-sm text-gray-600 mt-2">
            Total Cases: <span className="font-semibold">{count}</span>
          </p>
        </div>
        <ChevronRight className="text-gray-400" />
      </div>
    </div>
  );
};