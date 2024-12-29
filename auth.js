// Authentication module
const Auth = {
    credentials: {
        dcp: { username: 'dcp', password: 'dcp123' },
        acp: { username: 'acp', password: 'acp123' },
        inspector: { username: 'inspector', password: 'inspector123' }
    },

    init() {
        $('#loginForm').on('submit', this.handleLogin.bind(this));
        $('#logoutBtn').click(this.handleLogout.bind(this));
        this.checkAuthStatus();
    },

    handleLogin(e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        const role = $('#role').val();

        if (this.validateCredentials(username, password, role)) {
            this.setAuthSession(role);
            UI.showDashboard(role);
        } else {
            alert('Invalid credentials!');
        }
    },

    handleLogout() {
        sessionStorage.clear();
        location.reload();
    },

    validateCredentials(username, password, role) {
        return this.credentials[role].username === username && 
               this.credentials[role].password === password;
    },

    setAuthSession(role) {
        sessionStorage.setItem('userRole', role);
        sessionStorage.setItem('isAuthenticated', 'true');
    },

    checkAuthStatus() {
        if (sessionStorage.getItem('isAuthenticated')) {
            const role = sessionStorage.getItem('userRole');
            UI.showDashboard(role);
        }
    }
};