document.title = "Show Password"

const passwordInput = document.getElementById("password");
const hide = document.getElementById("toggle")

const togglePassword = () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        hide.textContent = "Hide"
    }else {
        passwordInput.type = "password"
        hide.textContent = "Show"
    }
}