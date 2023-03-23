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
alert("El módulo es "+valores[1]%valores[5]);

//Ejercicio 5
let numero1=5, numero2=8;
if(numero1<numero2){
    alert("numero1 no es mayor a numero2");
}
if(numero2>=0){
    alert("numero2 es positivo");
}
if(numero1<0 || numero1!=0){
    alert("numer1 es negativo o distinto de cero");
}
if(numero1+1<numero2){
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual a numero2")
}