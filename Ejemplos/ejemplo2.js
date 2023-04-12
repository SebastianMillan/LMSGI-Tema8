function buscarEnlaces(){
    let enlace= document.getElementById("enlace");
    alert(enlace.innerHTML);
}
function buscarEnlacesPorSelector(){
    let elementos= document.querySelectorAll("body a");
    let parrafos= document.querySelectorAll("a+p")
    for (const e of elementos) {
        e.nextElementSibling.innerHTML= "Párrafo modificado por JavaScript"
    }
    for (const p of parrafos) {
        alert(p.innerHTML);
    }
}

buscarEnlaces();
buscarEnlacesPorSelector();

function crearParrafo(contenido){
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerHTML = contenido;

    let elBody = document.querySelector("body");
    elBody.append(parrafoNuevo);
}

crearParrafo(prompt("Indica el texto del párrafo nuevo"));

