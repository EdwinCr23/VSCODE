/*const users ={
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

document.getElementById('login').addEventListener('submit', loginPage);*/

/*function Login(){
    var done = 0;
    var usuario = document.login.usuario.value;
    var password = document.login.password.value;
    if(usuario === 'ecardenas' || 'bramirez' && password === 'Lm54321@'){
        window.location="Index.html";
    }else{
        alert('Usuario o Clave Incorrectos');
        
    }
    /**if(usuario == 'bramirez' && password == 'Lm54321@*'){
        window.location="Index.html"
    }else{
        alert('Usuario o Clave Incorrectos')
    }

    if(usuario == "" && password == ""){
        alert('Todos los campos son obligatorios')
    }**/

    function Login(){
        var done = 0;
        var usuario = document.login.usuario.value;
        var password = document.login.password.value;
       if(usuario == 'ecardenas'){
        if(password == 'Lm54321@*'){
            window.location = "Index.html" 
        }else{
            alert('Usuario o clave incorrecta')
        }
       }else{
        if(usuario == "" && password == ""){
            alert('Todos los campos son obligatorios')
        }
       }
    }
document.oncontextmenu = function(){return false}