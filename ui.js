// UI handling module
const UI = {
    init() {
        this.bindEventListeners();
    },

    bindEventListeners() {
        $(document).on('click', '.case-view-btn', (e) => {
            const caseId = $(e.currentTarget).data('id');
            CaseManager.viewCase(caseId);
        });
    },

    showDashboard(role) {
        $('#loginSection').hide();
        $('#dashboardSection').show();
        $('#userRole').text(`${role.toUpperCase()} Dashboard`);
        Dashboard.initialize(role);
    },

    updateBreadcrumb(items) {
        const $breadcrumb = $('<nav aria-label="breadcrumb"><ol class="breadcrumb"></ol></nav>');
        
        items.forEach((item, index) => {
            const $item = $(`<li class="breadcrumb-item">${item}</li>`);
            if (index === items.length - 1) {
                $item.addClass('active');
            } else {
                $item.click(() => Dashboard.handleBreadcrumbClick(index, items));
            }
            $breadcrumb.find('ol').append($item);
        });

        $('#breadcrumb').html($breadcrumb);
    }
};