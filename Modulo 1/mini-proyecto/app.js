// ============================================================
// CONVERSOR DE UNIDADES (temperatura y longitud)
// ============================================================

// ---------- FUNCIONES DE CONVERSIÓN ----------
// Cada función recibe un número y RETORNA el resultado.

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