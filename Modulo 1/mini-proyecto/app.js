// ============================================================
// CONVERSOR DE UNIDADES (temperatura y longitud)
// Se ejecuta en el navegador usando prompt() y alert()
// ============================================================

// ---------- 1. FUNCIONES DE CONVERSIÓN (RF-06) ----------
// Cada función recibe un número y RETORNA el resultado.
// No piden datos ni muestran nada: solo calculan.

function celsiusAFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function fahrenheitACelsius(f) {
    return (f - 32) * 5 / 9;
}

function metrosAKilometros(m) {
    return m / 1000;
}

function kilometrosAMetros(km) {
    return km * 1000;
}

// ---------- 2. FUNCIONES AUXILIARES ----------

// Redondea solo para MOSTRAR (los cálculos internos no se redondean).
// Number(...) quita ceros sobrantes: 1.50 -> 1.5
function formatear(valor, decimales) {
    return Number(valor.toFixed(decimales));
}

// Pide un número y lo valida (RF-07).
// permitirNegativos: true para temperaturas, false para longitudes.
// Devuelve el número válido, o null si el usuario cancela.
function leerNumero(mensaje, permitirNegativos) {
    let valido = false;
    let numero = null;

    while (!valido) {
        const entrada = prompt(mensaje);

        // Si el usuario presiona "Cancelar", prompt devuelve null
        if (entrada === null) {
            return null;
        }

        // trim() quita espacios; replace permite escribir 2,5 con coma
        const texto = entrada.trim().replace(",", ".");

        if (texto === "") {
            alert("Error: debes ingresar un valor.");
        } else {
            numero = Number(texto); // string -> number

            if (!Number.isFinite(numero)) {
                alert("Error: valor no numérico.");
            } else if (!permitirNegativos && numero < 0) {
                alert("Error: longitud inválida (no puede ser negativa).");
            } else {
                valido = true; // pasó todas las validaciones: sale del ciclo
            }
        }
    }

    return numero;
}

// Muestra el resultado en pantalla y en la consola (RF-09)
function mostrarResultado(texto) {
    console.log(texto);
    alert(texto);
}

// ---------- 3. PROGRAMA PRINCIPAL ----------

const MENU =
    "=== CONVERSOR DE UNIDADES ===\n" +
    "1. Celsius a Fahrenheit\n" +
    "2. Fahrenheit a Celsius\n" +
    "3. Metros a kilómetros\n" +
    "4. Kilómetros a metros\n" +
    "5. Salir\n\n" +
    "Elige una opción:";

let opcion;

// do...while: el menú se muestra al menos una vez (RF-08).
// El ciclo termina cuando opcion es "5", así que no es infinito.
do {
    opcion = prompt(MENU);

    // Si cancela el menú, lo tratamos como salir
    if (opcion === null) {
        opcion = "5";
    }
    opcion = opcion.trim();

    // switch para ejecutar la conversión elegida (RF-05)
    switch (opcion) {
        case "1": {
            const c = leerNumero("Ingresa los grados Celsius (°C):", true);
            if (c !== null) {
                mostrarResultado(`${c} °C = ${formatear(celsiusAFahrenheit(c), 2)} °F`);
            }
            break;
        }
        case "2": {
            const f = leerNumero("Ingresa los grados Fahrenheit (°F):", true);
            if (f !== null) {
                mostrarResultado(`${f} °F = ${formatear(fahrenheitACelsius(f), 2)} °C`);
            }
            break;
        }
        case "3": {
            const m = leerNumero("Ingresa los metros (m):", false);
            if (m !== null) {
                mostrarResultado(`${m} m = ${formatear(metrosAKilometros(m), 3)} km`);
            }
            break;
        }
        case "4": {
            const km = leerNumero("Ingresa los kilómetros (km):", false);
            if (km !== null) {
                mostrarResultado(`${km} km = ${formatear(kilometrosAMetros(km), 2)} m`);
            }
            break;
        }
        case "5":
            alert("Programa finalizado. ¡Hasta luego!");
            break;
        default:
            alert("Opción inválida. Intenta de nuevo.");
    }
} while (opcion !== "5");