/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contadorHombre = 0;
	let contadorMujer = 0;
	let promedioEdad;
	let acumuladorEdad = 0;
	let mayorTemperatura;
	let nombreMayorTemperatura;
	let = flag = 0;

	for (let i = 0; i < 5; i++){

		alert("Hola, bienvenido...")

		nombre = prompt("por favor ingrese el nombre de la persona: ");
		while (!(isNaN(nombre))){

			nombre = prompt("Error. Está ingresando un nombre no válido. Vuelva a escribir el nombre");
		}

		temperatura = parseInt(prompt("por favor ingrese la temperatura: "));
		while(isNaN(temperatura)){

			temperatura = (prompt("Error al ingresar temperatura. Vuelva a ingresar una temperatura"));
		}

		sexo = prompt(`por favor ingrese el sexo de la persona ("m" para masculino - "f" para femenino): `);
		while(sexo != "m" && sexo != "f"){

			sexo = prompt("Error al ingresar el sexo. Por favor reingrese nuevamente: ")
		}

		edad = parseInt(prompt("por favor ingrese edad: "));
		while(edad < 0 || edad > 120 || isNaN(edad)){

			edad = parseInt(prompt("Error al ingresar edad. Reingrese edad"));
		}

		// para el punto A y B
		if(sexo == "f"){

			contadorMujer++;
			if( flag == 0 || temperatura < mayorTemperatura){
				mayorTemperatura = temperatura;
				nombreMayorTemperatura = nombre ;
				}
			flag = 1;
		}
		else{

			contadorHombre++;
		}

		//para el punto B
		acumuladorEdad += edad;
		
	}

	promedioEdad = acumuladorEdad / 5;

	document.write(`ingresaron ${contadorMujer} mujeres al hospital y ${contadorHombre} hombres </br>`);
	document.write(`la edad promedio en total es de ${promedioEdad} </br>`);
	document.write(`la mujer con mayor temperatura es ${nombreMayorTemperatura} con una temperatura de ${mayorTemperatura}`);

}
