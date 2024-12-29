import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { DashboardTile } from './components/DashboardTile';
import { CaseList } from './components/CaseList';
import { acps, inspectors, cases } from './data/mockData';
import { ACP, Inspector, Case } from './types';

function App() {
  const [selectedAcp, setSelectedAcp] = useState<ACP | null>(null);
  const [selectedInspector, setSelectedInspector] = useState<Inspector | null>(null);

  const handleBack = () => {
    if (selectedInspector) {
      setSelectedInspector(null);
    } else if (selectedAcp) {
      setSelectedAcp(null);
    }
  };

  const renderContent = () => {
    if (selectedInspector) {
      const inspectorCases = cases.filter(
        (case_) => case_.inspectorId === selectedInspector.id
      );
      return (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Cases by {selectedInspector.name}
          </h2>
          <CaseList cases={inspectorCases} />
        </div>
      );
    }

    if (selectedAcp) {
      const acpInspectors = inspectors.filter(
        (inspector) => inspector.acpId === selectedAcp.id
      );
      return (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Inspectors under {selectedAcp.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {acpInspectors.map((inspector) => (
              <DashboardTile
                key={inspector.id}
                title={inspector.name}
                subtitle={`Badge: ${inspector.badge}`}
                count={inspector.totalCases}
                onClick={() => setSelectedInspector(inspector)}
              />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">DCP Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {acps.map((acp) => (
            <DashboardTile
              key={acp.id}
              title={acp.name}
              subtitle={acp.location}
              count={acp.totalCases}
              onClick={() => setSelectedAcp(acp)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {(selectedAcp || selectedInspector) && (
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
        )}
        {renderContent()}
      </div>
    </div>
  );
}

export default App;