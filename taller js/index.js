// 1. Función que determine si un año es bisiesto
function esBisiesto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0); // esta formula para los años bisiestos la encontre en internet :D
  }
  console.log("¿2024 es bisiesto?", esBisiesto(2024)); // true
  console.log("¿1900 es bisiesto?", esBisiesto(1900)); // false
  console.log("¿2000 es bisiesto?", esBisiesto(2000)); // true
  
  // 2. Función que convierta grados Celsius a Fahrenheit
  function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  console.log("0°C a Fahrenheit:", celsiusAFahrenheit(0));    // 32
  console.log("25°C a Fahrenheit:", celsiusAFahrenheit(25));  // 77
  
  // 3. Función que devuelva el mayor de dos números
  function mayorDeDos(n1, n2) {
    return n1 > n2 ? n1 : n2;
  }
  console.log("Mayor entre 10 y 20:", mayorDeDos(10, 20)); // 20
  console.log("Mayor entre 30 y 15:", mayorDeDos(30, 15)); // 30
  
  // 4. Función "X horas y Y minutos"
  function convertirMinutos(minutos) {
    let horas = Math.floor(minutos / 60);
    let mins = minutos % 60;
    return `${horas} horas y ${mins} minutos`;
  }
  console.log("130 minutos:", convertirMinutos(130)); // 2 horas y 10 minutos
  console.log("45 minutos:", convertirMinutos(45));   // 0 horas y 45 minutos
  
  // 5. Función que determine si un número está dentro de un rango (inclusive)
  function estaEnRango(numero, inicio, fin) {
    return numero >= inicio && numero <= fin;
  }
  console.log("¿5 está entre 1 y 10?", estaEnRango(5, 1, 10));  // true
  console.log("¿0 está entre 1 y 10?", estaEnRango(0, 1, 10));  // false
  
  // 6. Función que calcule el precio final después del descuento
  function calcularPrecioFinal(precioInicial, descuento) {
    let descuentoAplicado = precioInicial * (descuento / 100);
    return precioInicial - descuentoAplicado;
  }
  console.log("Precio final con 15% de descuento sobre $100:", calcularPrecioFinal(100, 15)); // 85
  console.log("Precio final con 50% de descuento sobre $200:", calcularPrecioFinal(200, 50)); // 100
  
  // 7. Función que determine si una persona puede votar (18+)
  function puedeVotar(edad) {
    return edad >= 18;
  }
  console.log("¿Puede votar con 17 años?", puedeVotar(17)); // false
  console.log("¿Puede votar con 19 años?", puedeVotar(19)); // true
  
  // 8. Función que calcule el área de un triángulo
  function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  console.log("Área de triángulo (base 10, altura 5):", calcularAreaTriangulo(10, 5)); // 25
  console.log("Área de triángulo (base 8, altura 12):", calcularAreaTriangulo(8, 12)); // 48
