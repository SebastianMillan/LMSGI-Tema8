function cambiarOrden(unArray) {
    let num1, num2;
    do {
        num1 = Math.floor(Math.random * unArray.lenght);
        num2 = Math.floor(Math.random * unArray.lenght);
    } while (num1 == num2);

    let primerElem = unArray[num1];
    let segundElem = unArray[num2];

    unArray[num1] = segundElem;
    unArray[num2] = primerElem;
    return unArray;
}

function trocearURL(url) {
    let arrayTroceado1 = url.split("://");
    let arrayTroceado2 = arrayTroceado1.join('').split('/');
    let arrayTroceado3 = arrayTroceado2.join('').split('.');
    return arrayTroceado3;
}

function principal() {
    let urlPedida = prompt("Indique la url");
    cambiarOrden(trocearURL(urlPedida)).forEach(a => alert(a))
}

principal();