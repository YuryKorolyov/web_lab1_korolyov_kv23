const Model = {
    saveUser(user) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(user));
    },
    getUser() {
        return JSON.parse(localStorage.getItem("currentUser"));
    },
    clearUser() {
        localStorage.removeItem("currentUser");
    },
    validateLogin(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            return true;
        }
        return false;
    }
};
