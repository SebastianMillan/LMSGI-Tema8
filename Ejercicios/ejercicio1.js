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

//Ejercicio 6
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 
let numDNI, letraDNI, indexLetraDNIObt;

numDNI = prompt("Indique el número de DNI");
letraDNI = prompt("Indique la letra de DNI");

if (numDNI < 0 || numDNI > 99999999) {
    alert("El número de DNI introducido no es válido");
} else {
    indexLetraDNIObt = numDNI % 23;
    if (letraDNI.toUpperCase === letras[indexLetraDNIObt]) {
        alert("DNI correcto: "+numDNI+letraDNI)
    } else {
        alert("La letra que ha indicado es incorrecta");
    }
}

//Ejercicio 7
let num=0, resultado=1;

num = prompt("Indique el número entero para realizar su factorial");
if(isFinite(num)){
    for (let i = 0; i < num; i++) {
        resultado *= num - i;
    }
    alert("El resultado de !" + num + " es: " + resultado);
}else{
    alert("Pon un número por favor");
}

//Ejercicio 8
let num1 = prompt("Indique un número");

function comprobarParImpar(num) {
    if (num % 2 == '0') {
        alert(num + " es par");
    } else {
        alert(num + " es impar");
    }
}

comprobarParImpar(num1);

//Ejercicio 9
let texto = prompt("Indique un texto");

function comprobarMayusc(texto) {
    if (texto == texto.toUpperCase()) {
        alert("El texto está todo en mayúsculas");
    } else if (texto == texto.toLowerCase()) {
        alert("El texto está todo en minúsculas");
    } else {
        alert("El texto está tanto en mayúsculas como en minúsculas");
    }  
}

comprobarMayusc(texto);

//Ejercicio 10
/*
let textoPolind = prompt("Indique un texto");
function comprobarPalindromo(textoPolind) {
    let textoArrayTrans = textoPolind.split(" ").join("").split("");
    for (let i = 0; i<textoArrayTrans.length ; i++) {
        if (textoArrayTrans.pop === textoArrayTrans.shift) {
            alert("Este texto es un palíndromo");
        } else {
            alert("Este texto no es un palíndromo");
        }
    }
}
comprobarPalindromo(textoPolind);
*/
function esPalindromo(texto){
    let delVesre = texto.split('').reverse().join('');
    if(texto.toUpperCase==delVesre.toUpperCase){
        alert("Es palindromo")
    }else{
        alert("No es palíndromo")
    }
}
esPalindromo(prompt("Indique una palabra para comprobar si es palindromo"));

//Ejercicio 11
let tamArray = prompt("Indique el tamaño del array");
let miArray= new Array();
let sumaTotal=0;
let nuevoNum=0;
for (let i = 0; i < tamArray; i++) {
    miArray[i]=prompt("Indique un número para introducir");
}
do {
    for (let i = 0; i < miArray.length; i++) {
        alert(miArray[i]);
    }
    for (let i = 0; i < miArray.length; i++) {
        sumaTotal+=parseInt(miArray[i]);
    }
    alert("Suma total: "+sumaTotal);
    nuevoNum=prompt("Indique un nuevo número a introducir (Pulse un número negativo para salir)")
    miArray.shift();
    miArray.push(nuevoNum);
}while(nuevoNum>=0);

//Ejercicio 12
let miArrayNum=[102,5,33,82,2,66,13];
alert("Array sin ordenar")
miArrayNum.forEach(num => alert(num));
miArrayNum.sort((num1, num2) => num1>num2?1:(num1<num2?-1:0));
alert("Array ordenado")
miArrayNum.forEach(num => alert(num));

