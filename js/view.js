const View = {
    showProfile(user) {
        const table = document.querySelector(".profile-table");
        table.innerHTML = `
            <tr><th>Ім'я користувача:</th><td>${user.name}</td></tr>
            <tr><th>Email користувача:</th><td>${user.email}</td></tr>
            <tr><th>Дата реєстрації:</th><td>${user.date}</td></tr>
        `;
    },
    showError(msg) {
        alert(msg);
    }
};
