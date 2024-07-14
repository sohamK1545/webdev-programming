var myPasswords = {
    "passwords": []
};

function loadPasswords() {
    var table = document.getElementById("tbody");
    table.innerHTML = "";
    for (let i = 0; i < myPasswords.passwords.length; i++) {
        table.innerHTML += `<tr>
            <td>${myPasswords.passwords[i].website}</td>
            <td>${myPasswords.passwords[i].username}</td>
            <td>${myPasswords.passwords[i].password}</td>
            <td><button onclick="deletePass(${i})">Delete</button></td>
        </tr>`;
    }
}

function addPass() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let website = document.getElementById("website");

    if (username.value === "" || password.value === "" || website.value === "") {
        alert("Please enter the details completely!");
        return;
    }

    myPasswords.passwords.push({
        "username": username.value,
        "password": password.value,
        "website": website.value
    });

    saveToLocalStorage();
    loadPasswords();
}

function saveToLocalStorage() {
    localStorage.setItem('myPasswords', JSON.stringify(myPasswords));
}

function loadFromLocalStorage() {
    let storedPasswords = localStorage.getItem('myPasswords');
    if (storedPasswords) {
        myPasswords = JSON.parse(storedPasswords);
    }
    loadPasswords();
}

window.onload = loadFromLocalStorage;

function deletePass(index) {
    myPasswords.passwords.splice(index, 1);
    saveToLocalStorage();
    loadPasswords();
}

const passwordBox = document.getElementById("random");
const length = 15;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}|:\"<>?-";
const allChars = uppercase + lowercase + numbers + symbols;

function createPassword() {
    let ranPass = "";
    ranPass += uppercase[Math.floor(Math.random() * uppercase.length)];
    ranPass += lowercase[Math.floor(Math.random() * lowercase.length)];
    ranPass += numbers[Math.floor(Math.random() * numbers.length)];
    ranPass += symbols[Math.floor(Math.random() * symbols.length)];

    while (ranPass.length < length) {
        ranPass += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = ranPass;
}
