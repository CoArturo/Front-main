const apiUrl = 'https://localhost:7031/Suma/Sumadora';

const btnSubmit = document.getElementById("btn-submit"); 
const cajaNumero1 = document.querySelector("#numero1")
const cajaNumero2 = document.querySelector("#numero2")
const cajaResultado = document.querySelector("#resultado")


btnSubmit.addEventListener("click", ()=>{

  let num1 = cajaNumero1.value;
  let num2 = cajaNumero2.value;
  num1 = parseInt(num1); 
  num2 = parseInt(num2); 

const numerosParaSumar = {
    Numero1: num1,
    Numero2: num2
};

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(numerosParaSumar)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Error en la solicitud.');
    }
    return response.json();
})
.then(data => {
    console.log('Resultado de la suma:', data);
    cajaResultado.value = data
})
.catch(error => {
    console.error('Error:', error);
});

})
