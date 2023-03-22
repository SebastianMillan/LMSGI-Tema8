//Ejercicio 1
alert("Primer mensaje para el ejercicio 1");

//Ejercicio 2
let mensaje= "Mensaje modificado ejercicio 2";
alert(mensaje);

//Ejercicio 3
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
for (let mes of meses) {
    alert(mes);
}

//Ejercicio 4
let valores = [true, 5, false, "hola", "adios", 2];
alert(valores[3].length>valores[4].length?valores[3]+" es mayor a "+valores[4]:valores[3]+" es menor a "+valores[4]);
alert(valores[0]?"Es verdadero":"Es falso");
alert(valores[2]?"Es verdadero":"Es falso");
alert("La suma es "+valores[1]+valores[5]);
alert("La resta es "+valores[1]-valores[5]);
alert("La multiplicación es "+valores[1]*valores[5]);
alert("La división es "+valores[1]/valores[5]);
