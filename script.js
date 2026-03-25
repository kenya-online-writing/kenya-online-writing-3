function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {
        document.getElementById("message").innerHTML = "Login Successful";
    } else {
        document.getElementById("message").innerHTML = "Wrong Username or Password";
    }

}

function openService(service) {

    alert("You selected " + service + ". To continue, pay registration fee via Mpesa number 0112875254");

}
