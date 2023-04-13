let boton2 = document.getElementById("boton2");
boton2.addEventListener("click",crearParrafo);

let boton1 = document.getElementById("boton1");
boton1.addEventListener("click",crearAlumno);

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

function crearParrafo(){
    let parrafoNuevo = document.createElement("p");
    let contenido = prompt("Indica el texto del párrafo nuevo");
    parrafoNuevo.innerHTML = contenido;

    let elBody = document.querySelector("body");
    elBody.append(parrafoNuevo);
}

let indice = 1;

function crearAlumno(){
    let ultimaFila = document.querySelector("tr:last-child");
    let nuevaFila = ultimaFila.cloneNode(true);
    nuevaFila.firstElementChild.innerHTML = prompt("Indique el nombre del Alumno");
    nuevaFila.lastElementChild.innerHTML = ++indice;
    document.querySelector("table").append(nuevaFila);
}



