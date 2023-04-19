function cambiarOrden(unArray){
	let num1 = Math.floor(Math.random() * unArray.length);
	let num2;
	do{
		num2 = Math.floor(Math.random() * unArray.length);
	}while(num2===num1); //para asegurarme que no son el mismo nÃºmero

	let elem1 = unArray[num1];
	let elem2 = unArray[num2]
	unArray.splice(num1,1,elem2); //el primer parÃ¡metro es a partir de quÃ© posiciÃ³n voy a borrar, el segundo cuÃ¡ntos elementos voy a borrar, el tercero es lo que se inserta en su lugar
	unArray.splice(num2,1,elem1); 

	return unArray;
}

function trocearURL(url){
	let resultado = url.split('://'); //divido por el separador de protocolo, por lo que resultado es ['https','triana.salesianos.edu/colegio/fp/dam.html']
	let todoMenosProtocolo = resultado.pop(); //quito el segundo elemento del array y lo guardo en otra variable
	let partes = todoMenosProtocolo.split('/') //divido por la barra, por lo que partes es ['triana.salesianos.edu','colegio','fp','dam.html']
	for(let parte of partes){ //recorro las partes 
		let subpartes = parte.split('.'); //cada parte la troceo por el punto
		for(let subparte of subpartes){
			resultado.push(subparte); //cada subparte la voy aÃ±adiendo al resultado
		}
	}

	return resultado;

}

function principal(){
	let url = prompt("Indique una URL");
	let array = trocearURL(url);

	for(let i=0;i<4;i++){
		array = cambiarOrden(array);
		alert(array);
	}
}

principal();