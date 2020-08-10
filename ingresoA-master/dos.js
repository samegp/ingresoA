/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let i;
  let marca;
  let precio;
  let pesoKilo;
  let tipo;
  let pesoTotal = 0;
  let marcaLiquidoCaro;
  let liquidoCaro = 0;
  let marcaLiviana;
  let pesoLiviano = 0;
  let flagLiquido = 0;
  let flagSolido = 0;

  do{

    marca = prompt("por favor ingrese la marca del producto: ");
    while (!(isNaN(marca))){

      marca = prompt("Error. por favor ingrese la marca del producto nuevamente: ")
    }
    precio = parseFloat(prompt("por favor ingrese el precio del producto: "));
    while(isNaN(precio) || precio < 0){

      precio = parseFloat(prompt("Error. por favor ingrese un precio válido: "));
    }
    pesoKilo = parseFloat(prompt("por favor ingrese el peso del producto (recuerde que debe ser en Kg): "));
    while(isNaN(pesoKilo) || pesoKilo < 0){

      pesoKilo = parseFloat(prompt("Error. por favor ingrese un peso válido: "));
    }
    tipo = prompt("por favor indique el tipo del producto: (s) para sólido o (l) para líquido): ");
    while(tipo != "s" && tipo != "l" ){

      tipo = prompt("Error. por favor indique el tipo del producto: (s) para sólido o (l) para líquido): ");
    }

    switch(tipo){
      case "l":
        if( flagLiquido == 0 || precio > liquidoCaro){
          liquidoCaro = precio;
          marcaLiquidoCaro = marca ;
        }
        else {
          liquidoCaro = 0;
          marcaLiquidoCaro = "no se ingresó ningun artículo líquido";
        }
        flag = 1;
        break;

      case "s":
        if( flagSolido == 0 || pesoKilo < pesoLiviano){
          pesoLiviano = pesoKilo;
          marcaLiviana = marca;
        }
        else{
          pesoLiviano = 0;
          marcaLiviana = "no se ingresó ningun artículo solido";
        }
        flag = 1;
        break;

    }

    pesoTotal += pesoKilo;

    i = prompt("desea ingresar otro articulo? (s/n): ");
  }
  while(i == "s"){

  }
  alert(`el peso total de la compra fue de ${pesoTotal} kilos`);
  alert(`la marca del producto liquido mas caro es ${marcaLiquidoCaro}`);
  alert(`la marca del solido mas liviano es de ${marcaLiviana}`);
}
