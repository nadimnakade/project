// Dashboard management module
const Dashboard = {
    initialize(role) {
        switch(role) {
            case CONFIG.ROLES.DCP:
                this.showACPs();
                break;
            case CONFIG.ROLES.ACP:
                this.showInspectors();
                break;
            case CONFIG.ROLES.INSPECTOR:
                this.showCases();
                break;
        }
    },

    showACPs() {
        $('#acpList').show().empty();
        UI.updateBreadcrumb(['DCP Dashboard']);
        
        mockData.acps.forEach(acp => {
            $('#acpList').append(`
                <div class="col-md-4">
                    <div class="card h-100" onclick="Dashboard.handleACPClick(${acp.id})">
                        <div class="card-body">
                            <h5 class="card-title">${acp.name}</h5>
                            <p class="card-text">Location: ${acp.location}</p>
                            <p class="card-text">Total Cases: ${acp.totalCases}</p>
                        </div>
                    </div>
                </div>
            `);
        });
    },

    showInspectors(acpId) {
        $('#acpList, #caseList').hide();
        $('#inspectorList').show().empty();
        
        const inspectors = acpId ? 
            mockData.inspectors.filter(i => i.acpId === acpId) : 
            mockData.inspectors;

        const acp = mockData.acps.find(a => a.id === acpId);
        if (acp) {
            UI.updateBreadcrumb(['DCP Dashboard', acp.name]);
        }

        inspectors.forEach(inspector => {
            $('#inspectorList').append(`
                <div class="col-md-4">
                    <div class="card h-100" onclick="Dashboard.handleInspectorClick(${inspector.id})">
                        <div class="card-body">
                            <h5 class="card-title">${inspector.name}</h5>
                            <p class="card-text">Badge: ${inspector.badge}</p>
                            <p class="card-text">Total Cases: ${inspector.totalCases}</p>
                        </div>
                    </div>
                </div>
            `);
        });
    },

    showCases(inspectorId) {
        $('#acpList, #inspectorList').hide();
        $('#caseList').show();

        CaseManager.displayCases(inspectorId);
    },

    handleACPClick(acpId) {
        this.showInspectors(acpId);
    },

    handleInspectorClick(inspectorId) {
        this.showCases(inspectorId);
    },

    handleBreadcrumbClick(index, items) {
        if (index === 0) this.showACPs();
        else if (index === 1) {
            const acp = mockData.acps.find(a => a.name === items[1]);
            if (acp) this.showInspectors(acp.id);
        }
    }
};