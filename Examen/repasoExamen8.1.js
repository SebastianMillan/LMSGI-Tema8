function pedirNombres() {
    let nombres = [];
    let salir = false;
    do {
        let palabraIntroducir = prompt("Introduce una propiedad CSS");
        if (!isNaN(palabraIntroducir)) {
            salir = true;
        } else {
            nombres.push(palabraIntroducir);
        }
    } while(!salir);
    return nombres;
}

function camelize(str) {
    let arrayPalabras = [];
    arrayPalabras=str.split("-");
    for (let i = 1; i < arrayPalabras.length; i++){
        arrayPalabras[i]=arrayPalabras[i].charAt(0).toUpperCase()+arrayPalabras[i].slice(1);
    }
    return arrayPalabras.join("");
}

function sortear(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function principal() {
    
    let arrayNombres = pedirNombres();
    for (let i = 0; i < arrayNombres.length; i++) {
        arrayNombres[i]=camelize(arrayNombres[i]);
    }
    return sortear(arrayNombres);
}
alert(principal());