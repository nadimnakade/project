const mockData = {
    acps: [
        { id: 1, name: 'ACP North Zone', location: 'North Delhi', totalCases: 145 },
        { id: 2, name: 'ACP South Zone', location: 'South Delhi', totalCases: 138 },
        { id: 3, name: 'ACP East Zone', location: 'East Delhi', totalCases: 152 },
        { id: 4, name: 'ACP West Zone', location: 'West Delhi', totalCases: 167 },
        { id: 5, name: 'ACP Central Zone', location: 'Central Delhi', totalCases: 173 }
    ],
    inspectors: [
        { id: 1, name: 'Inspector Sharma', badge: 'IN001', totalCases: 35, acpId: 1 },
        { id: 2, name: 'Inspector Kumar', badge: 'IN002', totalCases: 42, acpId: 1 },
        { id: 3, name: 'Inspector Singh', badge: 'IN003', totalCases: 38, acpId: 2 },
        { id: 4, name: 'Inspector Verma', badge: 'IN004', totalCases: 40, acpId: 2 },
        { id: 5, name: 'Inspector Gupta', badge: 'IN005', totalCases: 45, acpId: 3 },
        { id: 6, name: 'Inspector Yadav', badge: 'IN006', totalCases: 37, acpId: 3 },
        { id: 7, name: 'Inspector Chauhan', badge: 'IN007', totalCases: 41, acpId: 4 },
        { id: 8, name: 'Inspector Malik', badge: 'IN008', totalCases: 39, acpId: 4 },
        { id: 9, name: 'Inspector Kapoor', badge: 'IN009', totalCases: 43, acpId: 5 },
        { id: 10, name: 'Inspector Mehra', badge: 'IN010', totalCases: 36, acpId: 5 }
    ],
    cases: [
        // Inspector 1 Cases
        { id: 1, title: 'Theft Investigation #2347', status: 'open', dateCreated: '2024-03-15', inspectorId: 1, description: 'Investigation of reported theft at local market' },
        { id: 2, title: 'Traffic Violation #8901', status: 'closed', dateCreated: '2024-03-14', inspectorId: 1, description: 'Multiple traffic violations reported' },
        { id: 3, title: 'Assault Case #4521', status: 'pending', dateCreated: '2024-03-13', inspectorId: 1, description: 'Physical assault complaint investigation' },
        { id: 4, title: 'Cybercrime #7890', status: 'open', dateCreated: '2024-03-12', inspectorId: 1, description: 'Online fraud investigation' },
        { id: 5, title: 'Missing Person #3456', status: 'closed', dateCreated: '2024-03-11', inspectorId: 1, description: 'Missing person case investigation' },
        { id: 6, title: 'Property Dispute #6789', status: 'pending', dateCreated: '2024-03-10', inspectorId: 1, description: 'Property ownership dispute' },
        { id: 7, title: 'Drug Case #1234', status: 'open', dateCreated: '2024-03-09', inspectorId: 1, description: 'Illegal substance possession case' },
        { id: 8, title: 'Domestic Violence #5678', status: 'closed', dateCreated: '2024-03-08', inspectorId: 1, description: 'Domestic violence complaint' },
        { id: 9, title: 'Fraud Case #9012', status: 'pending', dateCreated: '2024-03-07', inspectorId: 1, description: 'Financial fraud investigation' },
        { id: 10, title: 'Vandalism #3457', status: 'open', dateCreated: '2024-03-06', inspectorId: 1, description: 'Public property damage case' },

        // Inspector 2 Cases
        { id: 11, title: 'Robbery #5432', status: 'open', dateCreated: '2024-03-15', inspectorId: 2, description: 'Armed robbery investigation' },
        { id: 12, title: 'Hit and Run #7654', status: 'closed', dateCreated: '2024-03-14', inspectorId: 2, description: 'Vehicle accident investigation' },
        { id: 13, title: 'Burglary #8765', status: 'pending', dateCreated: '2024-03-13', inspectorId: 2, description: 'Home break-in investigation' },
        { id: 14, title: 'Stalking Case #9876', status: 'open', dateCreated: '2024-03-12', inspectorId: 2, description: 'Harassment investigation' },
        { id: 15, title: 'Drug Trafficking #1098', status: 'closed', dateCreated: '2024-03-11', inspectorId: 2, description: 'Narcotics distribution case' },
        { id: 16, title: 'Identity Theft #2109', status: 'pending', dateCreated: '2024-03-10', inspectorId: 2, description: 'Identity fraud investigation' },
        { id: 17, title: 'Extortion #3210', status: 'open', dateCreated: '2024-03-09', inspectorId: 2, description: 'Blackmail investigation' },
        { id: 18, title: 'Missing Vehicle #4321', status: 'closed', dateCreated: '2024-03-08', inspectorId: 2, description: 'Vehicle theft investigation' },
        { id: 19, title: 'Forgery #5432', status: 'pending', dateCreated: '2024-03-07', inspectorId: 2, description: 'Document forgery case' },
        { id: 20, title: 'Assault #6543', status: 'open', dateCreated: '2024-03-06', inspectorId: 2, description: 'Physical assault investigation' }

        // Note: Similar cases would be added for inspectors 3-10, following the same pattern
        // Total cases would be 100 (10 cases per inspector)
    ]
};