export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function saveString(key, value) {
    localStorage.setItem(key, value);
}


export function isLoggedIn(key, value) {
    return load("token") !== null;
}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export function load(key) {
    try {
        const value = localStorage.getItem(key);
        if (isJsonString(value)) {
            return JSON.parse(value);
        }
        return value;
    } catch (err) {
        console.log(err);
        return null
    }
}

export function remove(key) {
    localStorage.removeItem(key);
}