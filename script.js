document.getElementById("login").addEventListener('submit', function(evt){
    evt.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "ryad") {
        if (password === "simplon") {
            document.location.href = "/dashboard.html";
        } else {
            console.log("incorrect password");
        }
    } else {
        console.log("incorrect pseudo");
    }
})