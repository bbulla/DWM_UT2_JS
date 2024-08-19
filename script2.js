const botonSumaRango = document.getElementById("botonSumaRango");
const resultadoSumaRango = document.getElementById("resultadoSumaRango");


botonSumaRango.addEventListener("click", function(){
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
    sumAll(number1, number2);
});

function sumAll(number1, number2){
    let ayudaSuma = 0
    for(let i=number1; i<=number2; i++){
        ayudaSuma += i;
    }
    const sumaTotal = document.createElement("p");
    sumaTotal.textContent = "Suma total: " + ayudaSuma;
    resultadoSumaRango.appendChild(sumaTotal);
}



const botonConvertirFahrenheit = document.getElementById("convertToFahrenheit");
const resultadoFahrenheit = document.getElementById("resultadoFahrenheit");

botonConvertirFahrenheit.addEventListener("click", convertToFahrenheit);

function convertToFahrenheit() {
    const celsiusInput = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsiusInput)) {
        let fahrenheit = (celsiusInput * 9 / 5) + 32;
        fahrenheit = Math.round(fahrenheit * 10) / 10;  
        resultadoFahrenheit.textContent = `Resultado: ${fahrenheit} °F`;
    }
}

const botonConvertirCelsius = document.getElementById("convertToCelsius");
const resultadoCelsius = document.getElementById("resultadoCelsius");

botonConvertirCelsius.addEventListener("click", convertToCelsius);

function convertToCelsius() {
    const fahrenheitInput = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheitInput)) {
        let celsius = (fahrenheitInput - 32) * 5 / 9;
        celsius = Math.round(celsius * 10) / 10;  
        resultadoCelsius.textContent = `Resultado: ${celsius} °C`;
    }
}


const botonVerificar = document.getElementById("botonVerificar");
const resultadoBisiesto = document.getElementById("resultadoBisiesto");

botonVerificar.addEventListener("click", leapYears);

function leapYears() {
    const año = parseInt(document.getElementById("ano").value);
    
    if (!isNaN(año)) {
        const esBisiesto = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
        resultadoBisiesto.textContent = esBisiesto ? 'true' : 'false';
    }
}

const botonCalcularSuma = document.getElementById("calcularSuma");
const resultadoSuma = document.getElementById("resultadoSuma");

botonCalcularSuma.addEventListener("click", getSum);

function getSum() {
    const input = document.getElementById("arregloInput").value;
    let sumaTotal=0;
    for (let i = 0; i<input.length; i++){
        if(input[i]!== " " && input[i]!==","){
            sumaTotal += parseInt(input[i]);
        }
    }
    resultadoSuma.textContent = `La suma total es: ${sumaTotal}`;
}

