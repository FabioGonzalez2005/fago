document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-link").addEventListener("click", function() {
        document.getElementById("login-content").classList.add("active");
        document.getElementById("login-content").classList.remove("hide");
        document.getElementById("login-link").classList.add("active");

        document.getElementById("signup-content").classList.remove("active");
        document.getElementById("signup-content").classList.add("hide");
        document.getElementById("signup-link").classList.remove("active");
    });

    document.getElementById("signup-link").addEventListener("click", function() {
        document.getElementById("signup-content").classList.add("active");
        document.getElementById("signup-content").classList.remove("hide");
        document.getElementById("signup-link").classList.add("active");

        document.getElementById("login-content").classList.remove("active");
        document.getElementById("login-content").classList.add("hide");
        document.getElementById("login-link").classList.remove("active");
    });
});