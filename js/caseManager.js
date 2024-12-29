// Case management module
const CaseManager = {
    displayCases(inspectorId) {
        const cases = inspectorId ? 
            mockData.cases.filter(c => c.inspectorId === inspectorId) : 
            mockData.cases;

        if (inspectorId) {
            const inspector = mockData.inspectors.find(i => i.id === inspectorId);
            if (inspector) {
                const acp = mockData.acps.find(a => a.id === inspector.acpId);
                UI.updateBreadcrumb(['DCP Dashboard', acp.name, inspector.name]);
            }
        }

        this.renderCaseTable(cases);
    },

    renderCaseTable(cases) {
        $('#caseList').html(`
            <div class="card">
                <div class="card-body">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Case ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Date Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="casesTableBody"></tbody>
                    </table>
                </div>
            </div>
        `);

        cases.forEach(this.renderCaseRow);
    },

    renderCaseRow(case_) {
        $('#casesTableBody').append(`
            <tr>
                <td>${case_.id}</td>
                <td>${case_.title}</td>
                <td>${case_.description}</td>
                <td><span class="status-badge status-${case_.status.toLowerCase()}">${case_.status}</span></td>
                <td>${new Date(case_.dateCreated).toLocaleDateString()}</td>
                <td>
                    <div class="btn-group" role="group">
                        <button class="btn btn-sm btn-info case-view-btn" data-id="${case_.id}">
                            <i class="bi bi-eye"></i> View
                        </button>
                        <button class="btn btn-sm btn-warning" onclick="CaseManager.editCase(${case_.id})">
                            <i class="bi bi-pencil"></i> Edit
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="CaseManager.deleteCase(${case_.id})">
                            <i class="bi bi-trash"></i> Delete
                        </button>
                    </div>
                </td>
            </tr>
        `);
    },

    viewCase(id) {
        alert(`Viewing case ${id}`);
    },

    editCase(id) {
        alert(`Editing case ${id}`);
    },

    deleteCase(id) {
        if (confirm('Are you sure you want to delete this case?')) {
            alert(`Deleting case ${id}`);
        }
    }
};