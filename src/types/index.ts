export interface ACP {
  id: string;
  name: string;
  location: string;
  totalCases: number;
}

export interface Inspector {
  id: string;
  name: string;
  badge: string;
  totalCases: number;
  acpId: string;
}

export interface Case {
  id: string;
  title: string;
  status: 'open' | 'closed' | 'pending';
  dateCreated: string;
  inspectorId: string;
  description: string;
}