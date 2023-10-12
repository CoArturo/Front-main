const apiUrl = 'https://localhost:7031/Divisa/dolar-a-peso-dominicano';

const btnSubmit = document.getElementById("btn-submit"); 
const cajaDivisa = document.querySelector("#divisa")
const cajaResultado = document.querySelector("#resultado")


btnSubmit.addEventListener("click", ()=>{

  let cantidadDolares = cajaDivisa.value;
  cantidadDolares = parseInt(cantidadDolares); 

  fetch(`${apiUrl}?dolar=${cantidadDolares}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud.');
      }
      return response.json();
    })
    .then(data => {
      const cantidadPesosDominicanos = data.pesoDominicano;
      cajaResultado.value = data.pesoDominicano; 
    })
    .catch(error => {
      console.error('Error:', error);
    });

})
