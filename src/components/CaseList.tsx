import React from 'react';
import { Case } from '../types';

interface CaseListProps {
  cases: Case[];
}

export const CaseList: React.FC<CaseListProps> = ({ cases }) => {
  const getStatusColor = (status: Case['status']) => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="space-y-4">
      {cases.map((case_) => (
        <div
          key={case_.id}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-800">{case_.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{case_.description}</p>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                case_.status
              )}`}
            >
              {case_.status.charAt(0).toUpperCase() + case_.status.slice(1)}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Created: {new Date(case_.dateCreated).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};