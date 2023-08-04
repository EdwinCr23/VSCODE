const users ={
    "ecardenas" : "Lm54321@*",
    "rduran" : "Lm54321@*",
    "bramirez" : "Lm54321@*"
};

function loginPage(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users.hasOwnProperty(username) && users[username] === password) {
        alert("Inicio de sesión exitoso.");
      
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }
}
loginPage();

document.getElementById('login').addEventListener('submit', loginPage);