// declaracion de variables para la pagina visas

const cajaVisas = document.createElement('div');
const titulo = document.createElement('h1');
titulo.innerText = 'Visas';
const cajaPaises = document.createElement('div');
cajaVisas.appendChild(titulo);

// agrego a los nodos hijos

main.appendChild(cajaVisas);

// for each para paises

paises.forEach(pais => {
    const divPaises = document.createElement('div');
    divPaises.id = `${toCamelCase(pais.nombre)}`;
    const h2 = document.createElement('h2');
    h2.innerText = `${pais.nombre}`;
    const divInfo = document.createElement('div');
    divInfo.id = `${toCamelCase(pais.nombre)}Parrafo`;
    const botonComenzar = document.createElement('button');
    botonComenzar.textContent = 'Comenzar';
    botonComenzar.type = 'button';
    botonComenzar.id = 'botonComenzar';
    
    // estilos

    botonComenzar.style.width = 'fit-content';
    botonComenzar.style.backgroundColor = '#d20f29';
    botonComenzar.style.borderRadius = '3px';
    botonComenzar.style.color = 'white';
    botonComenzar.style.fontSize = '.8rem';
    botonComenzar.style.boxShadow = '0 0 3px #4b5567';
    botonComenzar.style.border = 'none';
    botonComenzar.style.padding = '0 1rem';
    botonComenzar.style.height = '2.3rem';

    h2.style.color = '#00274D';

    divPaises.style.width = '100%';
    divPaises.style.padding = '1.5rem 3%';
    divPaises.style.maxWidth = '70rem';
    divPaises.style.alignSelf = 'center';
    divPaises.style.border = 'none';
    divPaises.style.boxShadow = '0 0 5px #d8d8dd';
    divPaises.style.borderRadius = '10px';
    divPaises.style.display = 'grid';
    divPaises.style.gap = '1rem';

    divInfo.style.color = '#494f5d';

    // eventos boton empezar

    botonComenzar.onclick = () => {
        window.location.href = `nosotros.html#contacto`;

        // storage
        guardarLocal('destinoSeleccionado', pais.nombre);
    };

    botonComenzar.onmouseover = () => {
        botonComenzar.style.transform = 'scale(1.1)';
        botonComenzar.style.backgroundColor = '#970017';
        botonComenzar.style.cursor = 'pointer';
    }
    botonComenzar.onmouseout = () => {
        botonComenzar.style.transform = 'scale(1)';
        botonComenzar.style.backgroundColor = '#d20f29';
    }


    // agrego nodos hijos

    divPaises.appendChild(h2);
    divPaises.appendChild(divInfo);
    divPaises.appendChild(botonComenzar);
    main.appendChild(divPaises);
})

// estilos

main.style.padding = '2rem 3%';
main.style.gap = '2rem'

cajaVisas.style.width = '100%';
cajaVisas.style.padding = '1.5rem 3%';
cajaVisas.style.maxWidth = '70rem';
cajaVisas.style.alignSelf = 'center';
cajaVisas.style.border = 'none';
cajaVisas.style.boxShadow = '0 0 5px #d8d8dd';
cajaVisas.style.borderRadius = '10px';

titulo.style.color = '#00274D';

//
const pEstadosUnidos = document.querySelector('#estadosUnidosParrafo');
pEstadosUnidos.innerText = 'muchas cosas de eeuu';
const pAustralia = document.querySelector('#australiaParrafo');
pAustralia.innerText = 'muchas cosas de australia';
const pCanada = document.querySelector('#canadaParrafo');
pCanada.innerText = 'muchas cosas de canada';