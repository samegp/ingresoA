/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombre;
	let lugar;
	let temporada;
	let cantidad;
	let eleccionMayor;
	let cantidadMayor;
	let promedioInvierno = 0;
	let contadorInvierno = 0;
	let contadorCantidad = 0;
	let flag = 0;

	do{
		nombre = prompt("por favor ingrese el nombre del titular");
		while (!(isNaN(nombre))){

			nombre = prompt("Error. por favor ingrese un nombre de titular valido");
		}
		lugar = prompt("por favor indique el lugar donde desea vacacionar: bariloche, cataratas o salta");
		while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")){

			lugar = prompt("ha ingresado un lugar invalido. por favor ingrese el lugar donde desea vacacionar nuevamente");
		}
		temporada = prompt("por favor indique la temporada en la cual desea vacacionar: otoño, invierno, verano o primavera");
		while (!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera")){

			temporada = prompt("ha ingresado una temporada invalida. por favor ingrese nuevamente la temporada en la cual desea vacacionar");
		}
		cantidad = parseInt(prompt("por favor ingrese la cantidad de personas que viajan: "));

		switch (lugar){
			case "bariloche":
				contadorBariloche++;
			case "cataratas":
				contadorCataratas++;
			case "salta":
				contadorSalta++;
		}

		if (temporada == "invierno"){
			contadorInvierno++;
			contadorCantidad += cantidad;
			promedioInvierno = contadorCantidad / contadorInvierno;
		}

		if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
			eleccionMayor = "bariloche";
		}
		else if(contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta){
			eleccionMayor = "cataratas"
		}
		else{
			tipoMayorCantidad = "salta";
		}
	}
	while(i = "s"){

	}
}
