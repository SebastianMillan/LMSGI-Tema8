let saludo = "Hola Mundo!";
let palabra = "Has entrado en el if";
let num1=2.5, num2=233, num3=12.43;
let miArray = new Array();
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

miArray[1]=3.5;
miArray[2]=5.2;

alert(saludo);
for(let letra of saludo){
    alert (letra);
}

alert(num1+num2+num3);
alert(miArray[1]*miArray[2]);

if(num1==2.5 && num2==233){
    alert(palabra);
}

/*
for (let i = 0; i < dias.length; i++) {
    alert(dias[i]); 
}

for (let a of dias) {
    alert(a);
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

let pass1=1234, pass2=1223;

alert(pass1==pass2?"Contraseña correcta":"Contraseña incorrecta")

let opcion=1;
switch (opcion) {
    case 1:
        alert("Opción "+opcion);
        break;
    case 2:
        alert("Opción "+opcion);
        break;
    default:
        alert(Error);
        break;
}
let nombre = prompt("Escriba un nombre");
let apellido = prompt("Escriba un apellido");

function combinarNombreApellido(nombre, apellido) {
    return nombre+" "+apellido;
}
alert(combinarNombreApellido(nombre, apellido));

function multiplicar(num1, num2){
    return num1*num2;
}
alert("El resultado de la multiplicación es "+multiplicar(35,22));

let listaNum= new Array();
for (let index = 0; index <= 10; index++) {
    listaNum[index]=index*2;
}
for (let index = 0; index <= 10; index++) {
    alert(listaNum[index]);    
}

let palabrasss = new Array();
let salir = false;
let palab;

do {
    palab=prompt("Diga una palabra");
    if(palab!=='0'){
        palabrasss.push(palab);
    }else{
        salir=true;
    }
} while (!salir);
alert(palabrasss.join(' '));

let palabrasss2 = ["Esta", "clase", 'es', "guay"];
let salir2 = false;
let palab2;

do {
    palab2=prompt("Diga una palabra");
    if(palab2!=='0'){
        palabrasss.pop();
        palabrasss2.push(palab2);
        alert(palabrasss2.join(' '));
    }else{
        salir2=true;
    }
} while (!salir2);
