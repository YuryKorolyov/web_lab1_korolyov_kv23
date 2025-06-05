document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        Controller.login(form);
    });
});
