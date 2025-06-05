const Controller = {
    register(form) {
        const name = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const date = new Date().toLocaleDateString();

        if (!name || !email || !password) {
            View.showError("Будь ласка, заповніть усі поля.");
            return;
        }

        Model.saveUser({ name, email, password, date });
        window.location.href = "login.html";
    },
    login(form) {
        const email = form.email.value.trim();
        const password = form.userpass.value;

        if (Model.validateLogin(email, password)) {
            window.location.href = "prof.html";
        } else {
            View.showError("Невірний email або пароль.");
        }
    },
    loadProfile() {
        const user = Model.getUser();
        if (!user) {
            View.showError("Користувач не знайдений.");
            return;
        }
        View.showProfile(user);

        const logoutBtn = document.getElementById("logout");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", () => {
                Model.clearUser();
                window.location.href = "login.html";
            });
        }
    }
};
