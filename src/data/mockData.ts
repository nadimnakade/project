import { ACP, Inspector, Case } from '../types';

export const acps: ACP[] = [
  { id: '1', name: 'ACP North Zone', location: 'North Delhi', totalCases: 45 },
  { id: '2', name: 'ACP South Zone', location: 'South Delhi', totalCases: 38 },
  { id: '3', name: 'ACP East Zone', location: 'East Delhi', totalCases: 52 },
];

export const inspectors: Inspector[] = [
  { id: '1', name: 'Inspector Sharma', badge: 'IN001', totalCases: 15, acpId: '1' },
  { id: '2', name: 'Inspector Kumar', badge: 'IN002', totalCases: 12, acpId: '1' },
  { id: '3', name: 'Inspector Singh', badge: 'IN003', totalCases: 18, acpId: '2' },
  { id: '4', name: 'Inspector Verma', badge: 'IN004', totalCases: 20, acpId: '2' },
  { id: '5', name: 'Inspector Gupta', badge: 'IN005', totalCases: 25, acpId: '3' },
];

export const cases: Case[] = [
  {
    id: '1',
    title: 'Theft Investigation #2347',
    status: 'open',
    dateCreated: '2024-03-15',
    inspectorId: '1',
    description: 'Investigation of reported theft at local market'
  },
  {
    id: '2',
    title: 'Traffic Violation #8901',
    status: 'closed',
    dateCreated: '2024-03-14',
    inspectorId: '1',
    description: 'Multiple traffic violations reported'
  },
  {
    id: '3',
    title: 'Public Disturbance #4521',
    status: 'pending',
    dateCreated: '2024-03-13',
    inspectorId: '2',
    description: 'Complaint about noise pollution'
  },
];