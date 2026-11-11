//  funcion con parametros
    function saludarAprendiz(nombre) {
        return `Hola, ${nombre}! Bienvenido al curso de JavaScript.`;
    }

    console.log(saludarAprendiz("Maria")); // Llamada a la función saludarAprendiz con el parámetro "Maria"

    function saludarAprendiz2(nombre) {
        console.log(`Hola, ${nombre}! Bienvenido al curso de JavaScript.`);
    }

    saludarAprendiz2("Juan"); // Llamada a la función saludarAprendiz con el parámetro "Juan"

    function sumar (num1, num2) {
        return num1 + num2;
    }

    //console.log(`La suma de 5 y 3 es: ${sumar(5, 3)}`); // Llamada a la función sumar con los parámetros 5 y 3

    const resultadoSuma = sumar(5, 3); // Llamada a la función sumar con los parámetros 5 y 3
    console.log(`El resultado de la suma es: ${resultadoSuma}`); // Imprime el resultado de la suma

    //expresion de funcion

    const dividir = function(num1, num2) {
        if (num2 === 0) {
            return "Error: No se puede dividir entre cero.";
        }
        return num1 / num2;
    }

    console.log(`La división de 10 entre 2 es: ${dividir(10, 2)}`); // Llamada a la función dividir con los parámetros 10 y 2

    //arrow function

    const multiplicar = (num1, num2) => num1 * num2;
    console.log(`El resultado de la multiplicación de 4 y 6 es: ${multiplicar(4, 6)}`); // Llamada a la función multiplicar con los parámetros 4 y 6

    const impuesto = 0.19;

    function calcularPrecioConImpuesto(precio) {
        const valorImpuesto = precio * impuesto;
        return precio + valorImpuesto;
    }
    console.log(`El precio con impuesto es : ${calcularPrecioConImpuesto(100)}`); // Llamada a la función calcularPrecioConImpuesto con el parámetro 100

    //consal.log(valorImpuesto); // Esto generará un error porque valorImpuesto está definido dentro de la función y no es accesible desde fuera de ella.

    //-------------------Ejercicios-------------------//

    //calcular el area de un rectangulo (base, altura)
    function calcularAreaRectangulo(base, altura) {
        return base * altura;
    }  
    console.log(`El área del rectángulo es: ${calcularAreaRectangulo(5, 10)}`); // Llamada a la función calcularAreaRectangulo con los parámetros 5 y 10



    //es mayor de edad (edad)
    function esMayorDeEdad(edad) {
        if (edad >= 18) {
            return true;
        } else {
            return false;
        }
    }
    console.log(`¿Es mayor de edad? ${esMayorDeEdad(20)}`); // Llamada a la función esMayorDeEdad con el parámetro 20

    

    //convertir Celsius a Fahrenheit
    function convertirCelsiusAFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
    console.log(`25°C en Fahrenheit es: ${convertirCelsiusAFahrenheit(25)}`); // Llamada a la función con el parámetro 25



    //calcular el descuento (precio, descuento)
    function calcularDescuento(precio, descuento) {
        const valorDescuento = precio * (descuento / 100);
        return precio - valorDescuento;
    }
    console.log(`El precio con descuento es: ${calcularDescuento(100, 20)}`); // Llamada a la función con los parámetros 100 y 20



    //saber si un numero es par o impar)
    function esPar(numero) {
        return numero % 2 === 0;
    }
    console.log(`¿10 es par? ${esPar(10)}`); // Llamada a la función con el parámetro 10
    console.log(`¿15 es par? ${esPar(15)}`); // Llamada a la función con el parámetro 15    


    //---------------------------------------------------------------------------//

    // arrays

    const calificaciones = [85, 90, 78, 92, 88];

    console.log(`La primera calificación es: ${calificaciones[0]}`); // Accediendo al primer elemento del array
    //posicion 1
    console.log(`La segunda calificación es: ${calificaciones[1]}`); // Accediendo al segundo elemento del array
    //posicion 2
    console.log(`La tercera calificación es: ${calificaciones[2]}`); // Accediendo al tercer elemento del array
    //posicion 3
    console.log(`La cuarta calificación es: ${calificaciones[3]}`);
    //posicion 4
    console.log(`La quinta calificación es: ${calificaciones[4]}`);
    

    //recorrer arreglos

    const precios = [1000, 2000, 3000, 4000, 5000];

    for (let i = 0; i < precios.length; i++) {
        console.log(precios[i]);
    }

    for (const precio of precios) {
        console.log(precio);
    }

    const productos = ["Laptop", "Mouse", "Teclado", "Monitor"];
    
    productos.push("Impresora"); // Agrega un nuevo producto al final del array






    //objetos

    const aprendiz = {
        nombre: "Juan",
        edad: 25,
        curso: "JavaScript"
        matriculado: true
    }

    console.log(`El nombre del aprendiz es: ${aprendiz.nombre}`); // Accediendo a la propiedad nombre del objeto aprendiz
    console.log(`La edad del aprendiz es: ${aprendiz.edad}`);
    console.log(`El curso del aprendiz es: ${aprendiz.curso}`);
    console.log(`¿Está matriculado? ${aprendiz.matriculado}`);

    const productos2 = [
        { nombre: "Laptop", precio: 1000 },
        { nombre: "Mouse", precio: 50 },
        { nombre: "Teclado", precio: 80 },
        { nombre: "Monitor", precio: 200 }
    ];

    console.log(productos2[0].nombre); // Accediendo al nombre del primer producto
    console.log(productos2[1].precio); // Accediendo al precio del segundo producto
    

    //destructuracion de objetos

    const aprendiz2 = {
        nombre: "Juan",
        edad: 25,
        curso: "JavaScript",
        matriculado: true
    }

    const { nombre, edad, curso, matriculado } = aprendiz2; // Desestructuración del objeto aprendiz

    console.log(nombre);
    console.log(edad);
    console.log(curso);
    console.log(matriculado);


    
    const numeros = [1000, 500, 300, 200];

    const [primerNumero, segundoNumero, tercerNumero, cuartoNumero] = numeros; // Desestructuración del array numeros

    console.log(primerNumero);
    console.log(segundoNumero);
    Console.log(tercerNumero);
    Console.log(cuartoNumero);



    //spreas operator operador de propagacion

    const colores = ["Rojo", "Verde", "Azul"];

    const copiaColores = [...colores]; // Copia del array colores usando el spread operatorc

    copiaColores.push("Amarillo"); // Agrega un nuevo color al final del array copiaColores

    console.log(colores); // Muestra el array original colores
    console.log(copiaColores); // Muestra el array copiaColores con el nuevo color agregado


    const tarea = {
        titulo: "Aprender JavaScript",
        descripcion: "Completar el curso de JavaScript en 30 días",
        completado: false
    }

    const actualizarTarea = { ...tarea, completado: true }; // Crea un nuevo objeto actualizando la propiedad completado usando el spread operator


    console.log(tarea); // Muestra el objeto original tarea
    console.log(actualizarTarea); // Muestra el nuevo objeto actualizarTarea con la propiedad completado actualizada
    console.log(actualizarTarea.completado); // Muestra el valor de la propiedad completado del objeto actualizarTarea