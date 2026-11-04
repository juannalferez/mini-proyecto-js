# Conversor de unidades

Mini-proyecto del Módulo I (Fundamentos de JavaScript). Convierte valores de temperatura y longitud mediante un menú interactivo.

## Cómo ejecutarlo

1. Abre la carpeta `mini-proyecto` en Visual Studio Code.
2. Haz clic derecho en `index.html` y elige **Open with Live Server** (o presiona **Go Live**).
3. Aparecerá el menú en una ventana emergente. Escribe el número de la opción.

Para ver el historial de resultados, abre la consola del navegador con `F12`.

## Menú

| Opción | Conversión |
|--------|------------|
| 1 | Celsius a Fahrenheit |
| 2 | Fahrenheit a Celsius |
| 3 | Metros a kilómetros |
| 4 | Kilómetros a metros |
| 5 | Salir |

## Validaciones

- Se rechazan entradas vacías.
- Se rechaza texto que no sea número.
- Se rechazan valores no finitos (`Infinity`, `NaN`).
- Se permiten temperaturas negativas.
- Se rechazan longitudes negativas.
- Una opción de menú inexistente muestra "Opción inválida" y vuelve a mostrar el menú.

## Fórmulas

- F = (C × 9 / 5) + 32
- C = (F − 32) × 5 / 9
- km = m / 1000
- m = km × 1000

## Registro de pruebas

| Entrada | Esperado | Obtenido | Estado |
|---------|----------|----------|--------|
| 0 °C a °F | 32 °F | | |
| 100 °C a °F | 212 °F | | |
| 32 °F a °C | 0 °C | | |
| 1500 m a km | 1,5 km | | |
| 2,5 km a m | 2500 m | | |
| -10 °C a °F | 14 °F | | |
| -5 m a km | Error: longitud inválida | | |
| abc | Error: valor no numérico | | |
| (vacío) | Solicitar valor válido | | |
| Opción 9 | Opción inválida, mostrar menú | | |
| Opción 5 | Salir del programa | | |