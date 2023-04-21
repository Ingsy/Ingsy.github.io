export function setLogOut() {
    const logout = document.querySelector("#logout")
    if (logout) {
        logout.addEventListener("click", (event) => {
            localStorage.clear();
        });
    }
}