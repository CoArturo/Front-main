const btnSubmit = document.getElementById("btn-submit"); 
const cajaUsuario = document.querySelector("#usuario")
const cajaClave = document.querySelector("#clave")



btnSubmit.addEventListener("click", () => {
    let Usuario = cajaUsuario.value
    let Clave = cajaClave.value
    
    const usuario = {
      NombreUsuario: Usuario,
      Contraseña: Clave
    };
    fetch("https://localhost:7031/Usuario/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(usuario)
    })
    .then(response => {
        if (!response.ok) {
        throw new Error("No se pudo autenticar");
        }
        return response.text(); 
    })
    .then(data => {
        location.replace('../pages/mainmenu.html');

    })
    .catch(error => {
        alert("Usuario o contraseña equivocado")
    });
});