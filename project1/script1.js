console.log("soham");
function login() {

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    console.log(username.value);
    console.log(password.value);
    if (username.value == "admin" && password.value == "123") {
        alert("logged in");
        document.location.replace("./passwords.html", "_blank")
    } else {
        alert("failed");
    }
}