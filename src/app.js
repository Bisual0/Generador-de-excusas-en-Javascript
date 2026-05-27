
let quien = ["El Agustin", "Mi abuela", "Mi perro", "Mi hermano", "Mi Papa"];
let accion = ["mordio", "me aplasto", "se comio", "me quemo", "me robo"];
let queCosa = ["la tarea", "mi celular", "mi auto", "mis zapatos", "mi cuaderno"];
let cuando = ["en la mañana" , "mientras caminaba", "mientras dormia", "hace 2 meses", "anoche"] ;



function GeneradorExcusas(){

    let resQuien = quien[Math.floor(Math.random() * quien.length)];
    let resAccion = accion[Math.floor(Math.random() * accion.length)];
    let resQueCosa = queCosa[Math.floor(Math.random() * queCosa.length)];
    let resCuando = cuando[Math.floor(Math.random() * cuando.length)];

    let excusa = resQuien + " " + resAccion + " " + resQueCosa + " " + resCuando;

    document.getElementById("excusa").innerHTML = excusa;

}



GeneradorExcusas();

setInterval(GeneradorExcusas, 2000)
