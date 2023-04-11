function buscarEnlaces(){
    let enlace= document.getElementById("enlace");
    alert(enlace.innerHTML);
}
function buscarEnlacesPorSelector(){
    let elementos= document.querySelectorAll("body a");
    let parrafos= document.querySelectorAll("a+p")
    for (const e of elementos) {
        alert(e);
    }
    for (const p of parrafos) {
        alert(p.innerHTML);
    }
}

buscarEnlaces();
buscarEnlacesPorSelector();

