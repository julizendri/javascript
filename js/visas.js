// declaracion de variables para la pagina visas

const cajaVisas = document.createElement('div');
const titulo = document.createElement('h1');
const cajaPaises = document.createElement('div');

// agrego a los nodos hijos

main.appendChild(cajaVisas);
cajaVisas.appendChild(titulo);
titulo.innerText = 'Visas';


// for each para paises

paises.forEach(pais=>{
    const divPaises = document.createElement('div');
    divPaises.innerHTML = `<h3>${pais.nombre}</h3>`;
    cajaVisas.appendChild(divPaises);
    const h3 = divPaises.querySelector('h3');
    h3.style.color = '#00274D';
})

// estilos

cajaVisas.style.width = '100%';
cajaVisas.style.padding = '0 3%';
cajaVisas.style.maxWidth = '70rem';
cajaVisas.style.display = 'flex';
cajaVisas.style.flexDirection = 'column';
titulo.style.color = '#00274D';