const botonRepetir = document.getElementById("botonRepetir");
const resultados = document.getElementById("resultados");


botonRepetir.addEventListener("click", function(){
    const texto = document.getElementById("texto").value;
    const repeticiones = parseInt(document.getElementById("repeticiones").value);
    repeatString(texto, repeticiones);
});

function repeatString(texto, repeticiones){
    for(let i=0; i<repeticiones; i++){
        const parrafo = document.createElement("p");
        parrafo.textContent = texto;
        resultados.appendChild(parrafo);
    }
}

const botonInvertir = document.getElementById("botonInvertir");
const resultadosInvertir = document.getElementById("resultadosInvertir");

botonInvertir.addEventListener("click", function(){
    const texto = document.getElementById("textoInvertir").value;
    reverseString(texto);
});

function reverseString(texto){
    const resultado = document.createElement("p");
    let textoInvertido = "";
    for(let i = texto.length -1; i>= 0; i--){
        textoInvertido += texto[i];
    }
    resultado.textContent = textoInvertido;
    resultadosInvertir.appendChild(resultado);
}

const botonEliminar = document.getElementById("botonEliminar");
const resultadoEliminar = document.getElementById("resultadoEliminar");

botonEliminar.addEventListener("click", function(){
    const arreglo = document.getElementById("arreglo").value;
    const elementoAEliminar = document.getElementById("elementoEliminar").value;
    removeFromArray(arreglo, elementoAEliminar);
});

function removeFromArray(arreglo, elementoAEliminar){
    const arregloNuevo = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] !== elementoAEliminar && arreglo[i] !== ",") {
            arregloNuevo.push(arreglo[i]);
        }
    }
    const resultado = document.createElement("p");
    resultado.textContent = `Arreglo resultante: [${arregloNuevo.join(", ")}]`;
    resultadoEliminar.appendChild(resultado);
}


const libros = [
    { title: "Libro 1", author: "Autor 1" },
    { title: "Libro 2", author: "Autor 2" },
    { title: "Libro 3", author: "Autor 3" }
];

const botonMostrarTitulos = document.getElementById("botonMostrarTitulos");
const resultadosTitulos = document.getElementById("resultadosTitulos");

botonMostrarTitulos.addEventListener("click", function(){
    getTheTitles(libros, resultadosTitulos);
});

function getTheTitles(books, container) {
    books.forEach(book => {
        const h1 = document.createElement("h1");
        h1.textContent = book.title;
        container.appendChild(h1);
    });
}


const botonArregloImpares = document.getElementById("botonArregloImpares");
const resultadoImpares = document.getElementById("resultadoImpares");

botonArregloImpares.addEventListener("click", function(){
    const arregloEnteros = document.getElementById("arregloEnteros").value.split(",");
    getOdds(arregloEnteros);
});

function getOdds(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        const numero = parseInt(arreglo[i].trim());
        if (numero % 2 !== 0) {
            const span = document.createElement("span");
            span.textContent = numero;
            span.style.color = "violet";
            span.style.fontSize = "16px";
            resultadoImpares.appendChild(span);
            resultadoImpares.appendChild(document.createTextNode(", "));
        }
    }
    if (resultadoImpares.lastChild) {
        resultadoImpares.removeChild(resultadoImpares.lastChild); 
    }
}


const botonDuplicados = document.getElementById("botonDuplicados");
const resultadoDuplicados = document.getElementById("resultadoDuplicados");

botonDuplicados.addEventListener("click", function(){
    const arregloConDuplicados = document.getElementById("arregloConDuplicados").value.split(",");
    duplicates(arregloConDuplicados);
});

function duplicates(arreglo) {
    const frecuencia = {};
    let duplicados = []; 

    arreglo.forEach(num => {
        const numero = parseInt(num.trim());
        if (frecuencia[numero]) {
            frecuencia[numero]++;
        } else {
            frecuencia[numero] = 1;
        }
    });

    for (let num in frecuencia) {
        if (frecuencia[num] > 1) {
            duplicados.push({ numero: num, cantidad: frecuencia[num] });
        }
    }

    duplicados.forEach(dup => {
        const h4 = document.createElement("h4");
        h4.textContent = `Número ${dup.numero}`;
        
        const p = document.createElement("p");
        p.textContent = `Cantidad de veces: ${dup.cantidad}`;
        
        resultadoDuplicados.appendChild(h4);
        resultadoDuplicados.appendChild(p);
    });
}
