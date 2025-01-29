// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let listaHTML= [];
let numeroAmigos=0;
// Capturar el valor del campo de entrada
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto.replace(/,/g," ");
}

function agregarAmigo(){

    let amigo = document.getElementById('amigo').value;
    console.log(amigo);
    console.log(listaAmigos);
    console.log(numeroAmigos);

    //  Se valida la entrada para valores vacíos y espacios en blanco y que no exista 
    // el nombre del amigo ya en la lista.
     
    if (amigo.trim().length==0|| !amigo||listaAmigos.includes(amigo)) {
        alert("Por favor, inserte un nombre.");
        limpiarCaja();
 
        }
    else {
        
        listaAmigos.push(amigo);
        recorrerLista(listaAmigos);
        console.log(listaHTML);
        asignarTextoElemento('#listaAmigos',`${listaHTML}`);
        limpiarCaja();
        listaHTML= [];
        numeroAmigos++;
       
        }

        return;

}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
} 

function recorrerLista(lista) {
    console.log(`valor cero ${lista[0]}`); 

    for ( valor = 0; valor < lista.length; valor++) {
        listaHTML.push(`<li> ${lista[valor]} </li>`);

      }
    console.log(listaHTML);
    
    return;
   
}

function sortearAmigo() {
    let numeroSorteado =  Math.floor(Math.random()*numeroAmigos)+1;

    console.log(numeroSorteado);
    //Que por lo menos exista un amigo en la lista
    if ( numeroAmigos>0 ) {
        limpiarCaja();
        document.querySelector('#listaAmigos').remove();
        document.querySelector('#resultado').innerHTML= `<li> El amigo secreto sorteado es: ${listaAmigos[numeroSorteado-1]} </li>`;
    //    console.log( `<li> El amigo secreto sorteado es: ${listaAmigos[numeroSorteado-1]} </li>`);

    } else {
        //Si el numeroAmigos es 0, o no hay amigos para sortear 
        alert("No hay amigos para sortear,Por favor, inserte un nombre.");
    }
}
