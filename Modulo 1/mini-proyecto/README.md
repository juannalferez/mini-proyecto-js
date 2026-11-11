# Conversor de unidades

Mini-proyecto evaluable del Módulo I (Fundamentos de JavaScript). Convierte valores de temperatura y longitud mediante un menú interactivo que se ejecuta en el navegador.

**Autor:** Juan Manuel Alferez Amado
**Ficha:** 3410706

## Estructura del proyecto

```text
mini-proyecto-js/
├── index.html
├── app.js
└── README.md
```

## Cómo ejecutarlo

1. Abre la carpeta `mini-proyecto-js` en Visual Studio Code.
2. Haz clic derecho en `index.html` y elige **Open with Live Server** (o presiona **Go Live**). También puedes abrir `index.html` con doble clic en el navegador.
3. Aparecerá el menú en una ventana emergente. Escribe el número de la opción y presiona Aceptar.
4. Para ver el historial de resultados, abre la consola del navegador con `F12`.

## Menú

| Opción | Conversión |
|--------|------------|
| 1 | Celsius a Fahrenheit |
| 2 | Fahrenheit a Celsius |
| 3 | Metros a kilómetros |
| 4 | Kilómetros a metros |
| 5 | Salir |

El menú se repite después de cada conversión hasta que se elige la opción 5.

## Fórmulas

| Conversión | Fórmula |
|------------|---------|
| Celsius a Fahrenheit | F = (C × 9 / 5) + 32 |
| Fahrenheit a Celsius | C = (F − 32) × 5 / 9 |
| Metros a kilómetros | km = m / 1000 |
| Kilómetros a metros | m = km × 1000 |

## Validaciones

- Se rechazan entradas