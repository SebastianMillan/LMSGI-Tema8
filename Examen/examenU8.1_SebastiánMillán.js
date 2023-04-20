function pedirNombres(){
    let miArray = new Array();
    do{
        miArray = prompt("Indique una propiedad CSS / Para salir introduzca un número") 
    }while(isNaN(miArray));
    return miArray;
}
function camelize(str) {
    let letras = str.split('-');
    let camelCaseStr = letras[0];
    for (let i = 1; i < letras.length; i++) {
      camelCaseStr = letras[i].charAt(0).toUpperCase() + letras[i].slice(1);
    }
    return camelCaseStr;
}

function sortear(arr){
    return arr[Math.random()];
}

function principal(miArray){
    let arrayResult= new Array();
    for (let i = 0; i < miArray.length; i++) {
    arrayResult[i]=camelize(miArray[i])       
    }
    return sortear(arrayResult);
}
let array=pedirNombres()
alert(principal(array)) 