function tocaSomPom (selectorAudio) {
   const elemento = document.querySelector(selectorAudio). play();}

   if (elemento && elemento. localnane)=== 'audio'{
    elemento.play();
   }
else{
//alert('elemento nao encontrado');
console.log('elemento nao encontrado ou selector invalido')
}


const listasDeTeclas= document.querySelectorAll('.tecla');

//para
for(let contador= 0;contador<listasDeTeclas.length; contador++);

const tecla=listaDeTeclas[contador];
const instrumento=tecla.classList[1];
const idAudio= '#som_${instrumento}';//template string

tecla.onclick= function(){
    tocaSomPom(idAudio);
}

tecla.onkeydown = function (evento) { 

    if(evento.code==='space' || evento.code==='enter') {
        tecla.classList.add ('ativa');
    }

}

tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
    
}