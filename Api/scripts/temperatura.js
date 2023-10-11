const apiUrl = 'https://localhost:7031/Temperatura/fahrenheit-a-celsius';

const btnSubmit = document.getElementById("btn-submit"); 
const cajaTemperatura = document.querySelector("#temperatura")
const cajaResultado = document.querySelector("#resultado")


btnSubmit.addEventListener("click", ()=>{
    
    let temperaturaFahrenheit = cajaTemperatura.value;
    temperaturaFahrenheit = parseInt(temperaturaFahrenheit); 
    
    fetch(`${apiUrl}?fahrenheit=${temperaturaFahrenheit}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.');
        }
        return response.json();
      })
      .then(data => {
        const temperaturaCelsius = data.celsius;
        console.log(`La temperatura en Celsius es: ${temperaturaCelsius}`);
        cajaResultado.value = temperaturaCelsius;
      })
      .catch(error => {
        console.error('Error:', error);
      });
})
