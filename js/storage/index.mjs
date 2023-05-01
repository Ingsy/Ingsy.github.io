export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function saveString(key, value) {
    localStorage.setItem(key, value);
}


//export function saveCredit(key, value) {
//    localStorage.setItem(key, JSON.stringify(value));
//    value = JSON.parce(localStorage.getItem("value"))
//}



export function isLoggedIn() {
    return load("token") !== null;
}

//parseInt()

//function saveCredit(key, value) {
//const parsed = parseInt(key, value); 
//localStorage.setItem(key, JSON.stringify(value));
//if (isNaN(parsed)) { return 0; }
//   return parsed * 100; 
//}

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