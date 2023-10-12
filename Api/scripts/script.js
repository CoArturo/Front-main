const btnSubmit = document.querySelector("#btn-submit")

const cajaNombre = document.querySelector("#nombre")
const cajaApellido = document.querySelector("#apellido")
const cajaEdad = document.querySelector("#edad")
const cajaUsuario = document.querySelector("#usuario")
const cajaClave = document.querySelector("#clave")

function create_UUID(){
var dt = new Date().getTime();
var uuid = `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxz`.replace(/[xy]/g, function(c) {
    var r = (dt + Math.random()*16)%16 | 0;
    dt = Math.floor(dt/16);
    return (c=='x' ? r :(r&0x3|0x8)).toString(16);
});
return uuid;
}

btnSubmit.addEventListener("click", function(){

  let Nombre = cajaNombre.value
  let Apellido = cajaApellido.value
  let Edad = cajaEdad.value
  let Usuario = cajaUsuario.value
  let Clave = cajaClave.value

  let data = {
    id: `${create_UUID()}`,
    nombre: Nombre,
    apellido: Apellido,
    edad: Edad,
    nombreusuario: Usuario,
    contraseña: Clave,
  };

  fetch('https://localhost:7031/Usuario/PostUser', {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  })
  .then(data => {
    location.replace('../pages/iniciarsesion.html');
  })
})