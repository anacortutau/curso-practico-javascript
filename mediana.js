

    function calcularMediaArimetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;

        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

const lista1 = [
    600,
    50,
    200,
    100,
    500,
    4000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function ordenarLista(lista1) {
    lista1.sort(function (elemento1, elemento2) {
        return elemento1 - elemento2;
    });       
   
} 
ordenarLista(lista1);


function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else {
        return false;
    }

}
let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaArimetica ([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;





}else {
    mediana = lista1[mitadLista1];

}

