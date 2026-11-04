// Estructuras de control de fluido

// Switch
const div= 3;
switch (div) {
    case 1:
        console.log("LUNES");
        break;
    case 2:
        console.log("MARTES");
        break;
    case 3:
        console.log("MIERCOLES");
        break;
    default:
        console.log("DIA NO VALIDO ");
}

// CICLO FOR

for (let i = 1; i <= 5; i++) {
    console.log(`numero: ${i}`);
}

// CICLO WHILE
let j = 1;
while (j <= 5) {
    console.log(`numero: ${j}`);
    j++;
}

// CICLO DO WHILE
let k = 1;
do {
    console.log(`numero: ${k}`);
    k++;
}while (k <= 5);

//imprimir la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

//calcular la suma de los numero del 1 al 100
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(`La suma de los números del 1 al 100 es: ${suma}`);

//simular un ahorro mensual durante 12meses y mostrar el acumulado de cada mes
let ahorroMensual = 100;
let acumulado = 0;

for (let i = 1; i <= 12; i++) {
    acumulado += ahorroMensual;
    console.log(`Mes ${i}: Acumulado = ${acumulado}`);
}

// funciones y reutilizacion de codigo
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

function calcularTotalIva(precio, cantidad) {
    const total = calcularTotal(precio, cantidad);
    return calcularIva(total);
}

console.log(`El total con IVA es: $${calcularTotalIva(100, 5)}`); // Llamada a la función calcularTotalIva
console.log(`El total de la compra es: $${calcularTotal(100, 5)}`); // Llamada a la función calcularTotal
console.log(`El total de la compra con IVA es: $${calcularTotalIva(100, 5)}`); // Llamada a la función calcularTotalIva

// ARROW FUNCTIONS

const calcularIva = (precio) => precio * 0.16;
console.log(`El IVA de $100 es: $${calcularIva(100000)}`); // Llamada a la función calcularIva

// alcance de variables

let variableGlobal = "Soy una variable global";

function mostrarVariableGlobal() {
    console.log(variableGlobal); // Accede a la variable global
}

mostrarVariableGlobal(); // Llamada a la función mostrarVariableGlobal

let variableLocal = "Soy una variable local";

function mostrarVariableLocal() {
    let variableLocal = "Soy una variable local dentro de la función";
    console.log(variableLocal); // Accede a la variable local dentro de la función
}

mostrarVariableLocal(); // Llamada a la función mostrarVariableLocal

function mostrarVariableBloque() {
    if (true) {
        let variableBloque = "Soy una variable de bloque";
        console.log(variableBloque); // Accede a la variable de bloque dentro del if
    }
}
mostrarVariableBloque(); // Llamada a la función mostrarVariableBloque

function validarMonto(monto) {

    return typeof monto === "number" && monto >= 0;
}

console.log(validarMonto(100)); // true
console.log(validarMonto(-50)); // false


