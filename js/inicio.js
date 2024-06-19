// declaracion de variables para la pagina inicio

const headInicio = document.getElementById("headInicio");
const mainInicio = document.getElementById("mainInicio");
const divImagen = document.createElement('div');
divImagen.innerHTML = `
    <div id="dentroImagen">
        <h1>Gestión de visas</h1>
        <p id="textoImagen">Gestionamos tu visa y realizamos todo el trámite.</p>
        <button type="button" id="empezar">¡Empezar!</button>
    </div>
`;
const divInicio = document.createElement('div');
divInicio.innerHTML = `
    <div id="paises"></div>
    <div id="opiniones"></div>
`;

// agrego nodos hijos

mainInicio.appendChild(divImagen);
mainInicio.appendChild(divInicio);

// declaro mas variables

const dentroImagen = document.getElementById("dentroImagen");

const divOpiniones = document.getElementById('opiniones');

const titulo1 = document.querySelector('h1');
const textoImagen = document.getElementById('textoImagen');
const botonEmpezar = document.getElementById('empezar');

// agrego estilos

headInicio.style.opacity = '85%';
headInicio.style.position = 'absolute';
headInicio.style.width = '100%';
headInicio.style.top = '0';
headInicio.style.zIndex = '1000';

divImagen.style.width = '100%';
divImagen.style.display = 'flex';
divImagen.style.justifyContent = 'center';
divImagen.style.alignItems = 'center';
divImagen.style.background = 'url(./img/fondo.jpeg) no-repeat';
divImagen.style.backgroundSize = 'cover';
divImagen.style.height = '65vh';

dentroImagen.style.width = '100%';
dentroImagen.style.padding = '0 3%';
dentroImagen.style.maxWidth = '70rem';
dentroImagen.style.display = 'flex';
dentroImagen.style.flexDirection = 'column';
dentroImagen.style.justifyContent = 'center';
dentroImagen.style.alignItems = 'center';
dentroImagen.style.textAlign = 'center';
dentroImagen.style.gap = '1rem';
dentroImagen.style.position = 'relative';
dentroImagen.style.color = 'white';
dentroImagen.style.textShadow = '0 0 3px black';
dentroImagen.style.marginTop = '75px';

textoImagen.style.width = '30rem';

botonEmpezar.style.width = 'fit-content';
botonEmpezar.style.backgroundColor = '#970017';
botonEmpezar.style.padding = '0.5rem';
botonEmpezar.style.border = 'none';
botonEmpezar.style.borderRadius = '3px';
botonEmpezar.style.color = 'white';
botonEmpezar.style.fontSize = '.8rem';
botonEmpezar.style.transition = 'all 150ms ease';

// BOTON EMPEZAR
// declaro variables

const divEmpezar = document.createElement('form');
divEmpezar.id = 'divEmpezar';

const labelDestinos = document.createElement('label');
labelDestinos.innerText = '¿A que destino desea viajar?';
const selectDestinos = document.createElement('select');
selectDestinos.innerHTML = '<option>Elija una opción</option>';
const labelNroTramites = document.createElement('label');
labelNroTramites.innerText = '¿Cuántos trámites desea realizar?';
const selectNroTramites = document.createElement('select');
selectNroTramites.innerHTML = '<option>Elija una opción</option>';
const botonSiguiente = document.createElement('button');
botonSiguiente.type = 'submit';
botonSiguiente.innerText = 'Siguiente';

crearDropdown(paises, selectDestinos, item => item.nombre);
crearDropdown([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], selectNroTramites, item => item);

// guardar en local storage

selectDestinos.addEventListener('change', () => {
    guardarLocal('destinoSeleccionado', selectDestinos.value);
});

selectNroTramites.addEventListener('change', () => {
    guardarLocal('nroTramitesSeleccionado', selectNroTramites.value);
});

// estilos 

botonSiguiente.style.gridColumn = '1 / span 2';
botonSiguiente.style.justifySelf = 'center';
botonSiguiente.style.width = 'fit-content';
botonSiguiente.style.backgroundColor = 'white';
botonSiguiente.style.padding = '0.5rem';
botonSiguiente.style.border = 'none';
botonSiguiente.style.borderRadius = '3px';
botonSiguiente.style.color = '#01194f';
botonSiguiente.style.fontSize = '.8rem';
botonSiguiente.style.marginTop = '1rem';
botonSiguiente.style.transition = 'all 150ms ease';

divEmpezar.style.position = 'absolute';
divEmpezar.style.display = 'grid';
divEmpezar.style.gridTemplateColumns = '1fr 1fr';
divEmpezar.style.gridTemplateRows = '1fr 1fr';
divEmpezar.style.top = '115%';
divEmpezar.style.width = '80%';
divEmpezar.style.padding = '1rem';
divEmpezar.style.maxWidth = '70rem';
divEmpezar.style.justifyItems = 'center';
divEmpezar.style.backgroundColor = '#7692bf';
divEmpezar.style.opacity = '80%';
divEmpezar.style.borderRadius = '5px';
divEmpezar.style.textShadow = 'none';
divEmpezar.style.boxShadow = '0 0 3px #4b5567';

// eventos

botonEmpezar.onclick = () => {
    const divEmpezarPresente = dentroImagen.contains(divEmpezar);

    divEmpezarPresente ? dentroImagen.removeChild(divEmpezar) : dentroImagen.appendChild(divEmpezar);

    divImagen.style.height = divEmpezarPresente ? '65vh' : '75vh';
    dentroImagen.style.marginTop = divEmpezarPresente ? '75px' : '2px';


    const selects = document.querySelectorAll('select');
    selects.forEach((select, index) => {
        select.style.gridColumn = `${index + 1}`;
        select.style.gridRow = '2';
        select.style.boxShadow = 'none';
        select.style.border = 'none';
        select.style.color = '#01194f';
        select.style.width = '80%';
        select.style.fontSize = '1rem';
    });

    const etiquetas = document.querySelectorAll('label');
    etiquetas.forEach((etiqueta, index) => {
        etiqueta.style.color = '#01194f';
        etiqueta.style.gridColumn = `${index + 1}`;
        etiqueta.style.gridRow = '1';
        etiqueta.style.fontSize = '1rem';
    });
}

botonSiguiente.onmouseover = () => {
    botonSiguiente.style.transform = 'scale(1.05)';
    botonSiguiente.style.color = 'white';
    botonSiguiente.style.backgroundColor = '#01194f';
    botonSiguiente.style.cursor = 'pointer';
}

botonSiguiente.onmouseout = () => {
    botonSiguiente.style.transform = 'initial';
    botonSiguiente.style.color = 'initial';
    botonSiguiente.style.backgroundColor= 'white';
}

botonSiguiente.onclick = () => {
    window.location.href = 'nosotros.html#contacto';
}

botonEmpezar.onmouseover = () => {
    botonEmpezar.style.transform = 'scale(1.1)';
    botonEmpezar.style.backgroundColor = '#d20f29';
    botonEmpezar.style.cursor = 'pointer';
}
botonEmpezar.onmouseout = () => {
    botonEmpezar.style.transform = 'scale(1)';
    botonEmpezar.style.backgroundColor = '#970017';
}

divEmpezar.addEventListener('submit', (e) => {
    e.preventDefault();
})

// agrego nodos hijos

divEmpezar.appendChild(labelDestinos);
divEmpezar.appendChild(selectDestinos);
divEmpezar.appendChild(labelNroTramites);
divEmpezar.appendChild(selectNroTramites);
divEmpezar.appendChild(botonSiguiente);

// Galeria
// declaracion de variables para la galeria

const divPaises = document.getElementById('paises');

// for each para los divs de paises

paises.forEach(pais => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `visas.html#${toCamelCase(pais.nombre)}`;
    const h4 = document.createElement('h4');
    h4.innerText = `${pais.nombre}`;
    const p = document.createElement('p');
    p.innerText = `${pais.descripcion}`;
    const boton = document.createElement('button');
    boton.textContent = 'Saber Más';
    boton.type = 'button';
    boton.id = 'botonSaberMas';

    boton.style.width = 'fit-content';
    boton.style.padding = '.5rem';
    boton.style.margin = ' 0 1rem 1rem 1rem';
    boton.style.backgroundColor = '#d20f29';
    boton.style.border = 'none';
    boton.style.borderRadius = '3px';
    boton.style.color = 'white';
    boton.style.fontSize = '.8rem';
    boton.style.justify = 'right';
    boton.style.transition = 'all 150ms ease';
    boton.style.boxShadow = '0 0 3px #d8d8dd';

    p.style.padding = '0 1rem';
    p.style.fontSize = '1rem';
    p.style.color = '#494f5d';

    a.style.display = 'flex';
    a.style.justifyContent = 'center';
    a.style.alignItems = 'center';
    a.style.padding = '6rem';
    a.style.background = `url(./img/${toCamelCase(pais.nombre)}.jpg) no-repeat center center`;
    a.style.backgroundSize = 'cover';
    a.style.width = '100%';
    a.style.maxHeight = '100px';

    h4.style.color = 'white';
    h4.style.textShadow = '0 0 5px black';
    h4.style.textAlign = 'center';

    li.style.display = 'flex';
    li.style.flexDirection = 'column';
    li.style.width = '100%';
    li.style.gap = '1rem';
    li.style.border = 'none';
    li.style.borderRadius = '5px';
    li.style.backgroundColor = '#f0f0f2';
    li.style.overflow = 'hidden';
    li.style.boxShadow = '0 0 5px #d8d8dd';
    li.style.transition = 'all 150ms ease';


    li.onmouseover = () => {
        li.style.transform = 'scale(1.05)';
        boton.onmouseover = () => {
            boton.style.transform = 'scale(1.1)';
            boton.style.backgroundColor = '#970017';
            boton.style.cursor = 'pointer';
        }
    }
    li.onmouseout = () => {
        boton.style.transform = 'scale(1)';
        boton.style.backgroundColor = '#d20f29';
        li.style.transform = 'initial';
    }

    boton.onclick = () => {
        window.location.href = `visas.html#${toCamelCase(pais.nombre)}`;
    }

    a.appendChild(h4);
    li.appendChild(a);
    li.appendChild(p);
    li.appendChild(boton);
    divPaises.appendChild(li);
})

// arreglo los tamaños de las imagenes

const imgGaleria = document.querySelectorAll('.imgGaleria');
imgGaleria.forEach(img => {
    img.style.width = '100%';
    img.style.height = '75%';
    img.style.borderRadius = '3px';
});

// estilos 
divInicio.style.alignSelf = 'center';
divInicio.style.width = '100%';
divInicio.style.display = 'flex';
divInicio.style.flexDirection = 'column';
divInicio.style.alignItems = 'center';

divPaises.style.width = '100%';
divPaises.style.display = 'grid';
divPaises.style.gridTemplateColumns = `repeat(3,1fr)`;
divPaises.style.justifyContent = 'center';
divPaises.style.padding = '1rem';
divPaises.style.gap = '0.8rem';
divPaises.style.padding = '2rem 3%';
divPaises.style.maxWidth = '70rem';
divPaises.style.alignContent = 'center';