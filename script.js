//variables:
var arr1 = ["Sherlyn","Sarita","Hortense","Velma","Soraya","Jama","Evelina","Summer","Venus","Lana","Nohemi","Christel","Rodrick","Brenda","Jimmy","Irving","Marlena","Patti","Iola","Hattie","Willetta","Lindy","Eryn","Wilhelmina"];
var arr2 = ["Sherlyn","Sarita","Hortense","Venus","Lana","Nohemi","Christel","Rodrick","Brenda","Jimmy","Irving","Marlena","Patti","Iola","Hattie","Willetta","Lindy","Eryn","Wilhelmina","Kandy","Krystyna","Ana","Lien","Rosa","Tammera"];
var nuevoArreglo = [];

//funcion que genera un nuevo arreglo con los nombres que no se repiten:
function generarArreglo (arreglo1,arreglo2) {
	
	var arreglos = arreglo1.concat(arreglo2);  //  concatena ambos arreglos
	arreglos = arreglos.sort();    // ordena el arreglo alfabeticamente

	var i = 0;
	while (i < arreglos.length) {
		if (arreglos[i] != arreglos[i+1]) {       
			nuevoArreglo.push(arreglos[i]);     // si la posicion i es diferente a la siguiente (i+1), agregar ese nombre a nuevoArreglo.
		} else {
			i++;   
		}
		i++   
	}

	nuevoArreglo = nuevoArreglo.join(", ");
	document.getElementById("nombres").innerHTML = nuevoArreglo;

	if (nuevoArreglo.length == 0) {
		console.log("Todos los nombres coinciden en ambas listas")
	}

	if (arreglo1.length < 3 || arreglo1 > 20) {
		console.log("Arreglo con menos de 3 o más de 20 posiciones")
	}

	if (arreglo2.length < 3 || arreglo1 > 20) {
		console.log("Arreglo con menos de 3 o más de 20 posiciones")
	}
}



