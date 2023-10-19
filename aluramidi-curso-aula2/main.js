function tocaSomPom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listasDeTeclas= document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listasDeTeclas.length) {

    listaDeTeclas[contador].onclick = function();
tocaSomPom('#som_tecla_pom');

    contador = contador + 1;

    console.log(contador);
}