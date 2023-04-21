import * as listeners from "./js/handlers/register.mjs";
import * as LOGIN from "./js/handlers/login.mjs";
import * as storage from "./js/storage/index.mjs";


const path = location.pathname;

function checkRouting() {
    if (path === "/profile/login/login.html") {
        LOGIN.setLoginFormListener();
        return;
    } else if (path === "/profile/register/register.html") {
        listeners.setRegisterFormListener();
        return;
    }

    if (!storage.isLoggedIn()) {
        window.location.href = "/profile/login/login.html"

    }
}

window.onpaint = checkRouting();
