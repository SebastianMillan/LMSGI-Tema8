let saludo = "Hola Mundo!";
let palabra = "Has entrado en el if";
let num1=2.5, num2=233, num3=12.43;
let miArray = new Array();
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

miArray[1]=3.5;
miArray[2]=5.2;

alert(saludo);

alert(num1+num2+num3);
alert(miArray[1]*miArray[2]);

if(num1==2.5 && num2==233){
    alert(palabra);
}
/*
for (let i = 0; i < dias.length; i++) {
    alert(dias[i]); 
}
*/
let resultado = 12 + "Hola";
alert(resultado);
resultado = 12 + true;
alert(resultado);
resultado = "La operación es "+ false;
alert(resultado);
resultado = 4 + 7 + "Hola" + 2 * 15;
alert(resultado);