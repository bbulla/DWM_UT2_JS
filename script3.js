const botonGenerarContraseña = document.getElementById("generarContraseña");
const resultadoContraseña = document.getElementById("resultadoContraseña");

botonGenerarContraseña.addEventListener("click", generatePassword);

function generatePassword() {
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+[]{}|;:',.<>?";

    const longitud = 8;
    let contraseña = "";

    contraseña += mayusculas.charAt(Math.floor(Math.random() * mayusculas.length));
    contraseña += minusculas.charAt(Math.floor(Math.random() * minusculas.length));
    contraseña += numeros.charAt(Math.floor(Math.random() * numeros.length));
    contraseña += simbolos.charAt(Math.floor(Math.random() * simbolos.length));

    const todosCaracteres = mayusculas + minusculas + numeros + simbolos;
    for (let i = contraseña.length; i < longitud; i++) {
        contraseña += todosCaracteres.charAt(Math.floor(Math.random() * todosCaracteres.length));
    }

    contraseña = contraseña.split('').sort(() => Math.random() - 0.5).join('');

    resultadoContraseña.textContent = `Contraseña generada: ${contraseña}`;
}



const findOldestButton = document.getElementById("findOldestButton");
const result = document.getElementById("result");

const people = [
    { name: "Persona1", age: 45 },
    { name: "Persona2", age: 60 },
    { name: "Persona3", age: 50 }
];

findOldestButton.addEventListener("click", function() {
    const oldestPerson = findTheOldest(people);
    result.textContent = `La persona más vieja es ${oldestPerson.name}, con ${oldestPerson.age} años.`;
});

function findTheOldest(people) {
    let oldest = people[0];
    for (let i = 1; i < people.length; i++) {
        if (people[i].age > oldest.age) {
            oldest = people[i];
        }
    }

    return oldest;
}
