const h1 = document.querySelector('h1');
//Convertir un texto en un array que se pueda recorrer
const letter = h1.innerText.split('')
h1.innerText = null //borrar el contenido de un elemento

function createNode(letter, index){
    const span = document.createElement('span');
    span.innerText = letter;
    span.classList.add('jump');
    span.style = "--i:" + index;
    h1.appendChild(span);
}

letter.forEach(createNode)