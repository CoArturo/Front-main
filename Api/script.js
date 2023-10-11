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
})
















// const apiUrl = "https://localhost:7031/controlador";

// const btnSubmit = document.querySelector("#btn-submit")

//   const cajaNombre = document.querySelector("#nombre")
//   const cajaApellido = document.querySelector("#apellido")
//   const cajaEdad = document.querySelector("#edad")
//   const cajaUsuario = document.querySelector("#usuario")
//   const cajaClave = document.querySelector("#clave")

// let Nombre;
// let Apellido;
// let Edad;
// let Usuario;
// let Clave;

// // Función para enviar una solicitud GET al endpoint GetUser
// // function getUser() {
// //   // Parámetros del usuario
// //   const id = `${create_UUID()}`;
// //   const nombre = `${Nombre}`;
// //   const apellido = `${Apellido}`;
// //   const edad = `${Edad}`;
// //   const nombreusuario = `${Usuario}`;
// //   const contraseña = `${Clave}`;

// //   // Construir la URL con parámetros
// //   const url = `${apiUrl}/GetUser?id=${id}&nombre=${nombre}&apellido=${apellido}&edad=${edad}&nombreusuario=${nombreusuario}&contraseña=${contraseña}`;

// //   fetch(url, {
// //     method: "GET",
// //   })
// //     .then((response) => response.json())
// // }

// function postUser() {
//   // Datos del usuario a enviar
//   const usuario = {
//     id: `${create_UUID()}`,
//     nombre: `${Nombre}`,
//     apellido: `${Apellido}`,
//     edad: `${Edad}`,
//     nombreusuario: `${Usuario}`,
//     contraseña: `${Clave}`,
//   };

//   fetch(`${apiUrl}/PostUser`, {
//     method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*'
//         },
//     body: JSON.stringify(usuario),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Respuesta del servidor:", data);
//       // Puedes hacer algo con la respuesta del servidor aquí
//     })
//     .catch((error) => {
//       console.error("Error al enviar el usuario:", error);
//     });
// }









// function create_UUID(){
//   var dt = new Date().getTime();
//   var uuid = `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxz`.replace(/[xy]/g, function(c) {
//       var r = (dt + Math.random()*16)%16 | 0;
//       dt = Math.floor(dt/16);
//       return (c=='x' ? r :(r&0x3|0x8)).toString(16);
//   });
//   return uuid;
// }

// btnSubmit.addEventListener("click", function(){
//   Nombre = cajaNombre.value
//   Apellido = cajaApellido.value
//   Edad = cajaEdad.value
//   Usuario = cajaUsuario.value
//   Clave = cajaClave.value

//   postUser()

//   cajaNombre.value = "" 
//   cajaApellido.value = "" 
//   cajaEdad.value = "" 
//   cajaUsuario.value = "" 
//   cajaClave.value = "" 
// })

 


