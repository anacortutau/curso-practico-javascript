
// Codigo del cuadrado

console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
} 

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function  areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");

//const ladoTriangulo1 = 6;

//const ladoTriangulo2 = 6;

//const baseTriangulo = 4;

//console.log(
//"Los lados del triangulo miden: " 
//+ ladoTriangulo1 
//+ "cm, " 
//+ ladoTriangulo2 
//+ "cm, "
//+ baseTriangulo
//+ "cm");
//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;

} 
//console.log("El area del triangulo es de: " + areaTriangulo + "cm cuadrados");

console.groupEnd();

// Codigo del circulo

console.group("Circulos");

// Radio

//const radioCirculo = 4;
//console.log ("El radio del circulo es: " + radioCirculo + "cm");


//Diametro
 function  diametroCirculo (radio){
     return radio * 2;
 }

// PI
const PI = Math.PI;
console.log ("PI es: " + PI + "cm");

//Circunferencia
function  perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area


function areaCirculo(radio){
    return (radio * radio) * PI;
}


console.groupEnd();

//Aqui interactuamos con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);

}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);

  alert(area);

}

function alturaTrianguloIsosceles (trianguloGrandeladoA, trianguloGrandeladoB, trianguloGrandeBase){
    if(trianguloGrandeladoA != trianguloGrandeladoB){
        console.log("Los lados a y b no son iguales");

        }else{
            
            const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
            const trianguloPequenoLadoBase = trianguloGrandeLadoA;

            const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
            const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

            const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado)

            const trianguloGrandeAltura = trianguloPequenoLadoA;
            return trianguloGrandeAltura;
        }
    }
   
    

   