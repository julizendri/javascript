// declaracion de variables para la pagina inicio

const headInicio = document.getElementById("headInicio")
const divImagen = document.createElement('div');
divImagen.innerHTML = `
    <div id="dentroImagen">
        <h1>Gestión de visas</h1>
        <p id="textoImagen">Te ayudamos a gestionar tu visa y realizamos todo el acompañamiento del trámite.</p>
        <button type="button" id="empezar">Empezar!</button>
    </div>
`;
const divInicio = document.createElement('div');
divInicio.innerHTML = `
    <div id="paises"></div>
    <div id="opiniones"></div>
`;

// agrego nodos hijos

main.appendChild(divImagen);
main.appendChild(divInicio);

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
divImagen.style.height = '100vh';

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

textoImagen.style.width = '30rem';

botonEmpezar.style.width = 'fit-content';
botonEmpezar.style.backgroundColor = '#970017';
botonEmpezar.style.padding = '0.5rem';
botonEmpezar.style.border = 'none';
botonEmpezar.style.borderRadius = '3px';
botonEmpezar.style.color = 'white';
botonEmpezar.style.fontSize = '.8rem';

// BOTON EMPEZAR

const divEmpezar = document.createElement('form');
divEmpezar.innerHTML = `
    <label for="destino">¿A que destino desea viajar?</label>
    <label for="cantidadDeTramites">¿Cuántos trámites desea realizar?</label>
    <input type="text" id="inputLlenar">
    <input type="number" id="inputLlenar">
    <input type="submit" value="Siguiente" id="botonSiguiente">
`;

botonEmpezar.onclick = () => {
    dentroImagen.contains(divEmpezar) ? dentroImagen.removeChild(divEmpezar) : dentroImagen.appendChild(divEmpezar);
    const inputs = document.querySelectorAll('#inputLlenar');
    inputs.forEach(input => {
        input.style.width = '70%';
        input.style.padding = '.3rem';
        input.style.border = 'none';
        input.style.borderRadius = '3px';
    });
    const etiquetas = document.querySelectorAll('label');
    etiquetas.forEach(etiqueta => {etiqueta.style.color = '#0e3f79'});
}

botonEmpezar.onmouseover = () => {
    botonEmpezar.style.transform = 'scale(1.1)';
    botonEmpezar.style.backgroundColor = '#d20f29';
}
botonEmpezar.onmouseout = () => {
    botonEmpezar.style.transform = 'scale(1)';
    botonEmpezar.style.backgroundColor = '#970017';
}

divEmpezar.addEventListener('submit', (e) => {
    e.preventDefault();
})

const botonSiguiente = divEmpezar.querySelector('#botonSiguiente');

botonSiguiente.onclick = () => {
    window.location.href = 'contacto.html';
}

// estilos

divEmpezar.style.position = 'absolute';
divEmpezar.style.display = 'grid';
divEmpezar.style.gridTemplateColumns = '1fr 1fr';
divEmpezar.style.top = '115%';
divEmpezar.style.width = '94%';
divEmpezar.style.padding = '1rem';
divEmpezar.style.maxWidth = '70rem';
divEmpezar.style.justifyItems = 'center';
divEmpezar.style.backgroundColor = '#99bcd8';
divEmpezar.style.opacity = '80%';
divEmpezar.style.borderRadius = '5px';

botonSiguiente.style.gridColumn = '1 / span 2';
botonSiguiente.style.justifySelf = 'center';
botonSiguiente.style.width = 'fit-content';
botonSiguiente.style.backgroundColor = '#f0f0f2';
botonSiguiente.style.padding = '0.5rem';
botonSiguiente.style.border = 'none';
botonSiguiente.style.borderRadius = '3px';
botonSiguiente.style.color = '#0e3f79';
botonSiguiente.style.fontSize = '.8rem';
botonSiguiente.style.marginTop = '.5rem';

// declaracion de variables para la galeria

const divPaises = document.getElementById('paises');

// for each para los divs de paises

paises.forEach(pais => {
    const div = document.createElement('div');
    div.innerHTML = `
        <img src="./img/${pais.url}" alt="${pais.nombre}" class="imgGaleria">
        <h4>${pais.nombre}</h4>
        <p>${pais.descripcion}</p>
    `;
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.gap = '.5rem';
    div.style.textAlign = 'center';
    divPaises.appendChild(div);
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