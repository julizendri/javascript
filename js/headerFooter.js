// General
const cuerpo = document.body;
const paises = [
    {
        nombre: 'Estados Unidos',
        descripcion: 'Famoso por su diversidad cultural y poder económico, alberga ciudades icónicas como Nueva York y maravillas naturales como el Gran Cañón.',
        url: 'usa.jpg'
    },
    {
        nombre: 'Australia',
        descripcion: 'Conocido por su biodiversidad única y playas impresionantes, ofrece ciudades vibrantes como Sídney y Melbourne, además de aventuras al aire libre.',
        url: 'aus.jpg'
    },
    {
        nombre: 'Canadá',
        descripcion: 'Situado en el norte de América, se distingue por sus paisajes naturales, ciudades cosmopolitas como Toronto y Vancouver, y su bilingüismo.',
        url: 'can.jpg'
    },
];
cuerpo.style.backgroundColor = '#f0f0f2';

// funcion para convertir links en camelCase

function toCamelCase(string) {
    string = string.replace(/[á]/g, 'a');

    return string.toLowerCase().replace(/(?:\b\w|\s+)/g, function (match, index) {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    }).replace(/\s+/g, '');
}

// funcion guardar y sacar de local storage

function guardarLocal(clave, valor) {
    localStorage.setItem(clave, valor);
}

function sacarLocal(clave) {
    const objeto = localStorage.getItem(clave);
    return objeto;
}

// funcion para crear selects

function crearDropdown(array, contenedor, getText) {
    array.forEach(item => {
        const option = document.createElement('option');
        option.innerText = getText(item);
        contenedor.appendChild(option);
    });
}

// reset y letra

const style = document.createElement('style');
style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        font-family: 'Trebuchet MS';
        text-decoration: none;
        box-sizing: border-box;
        list-style: none;
    }
    .hidden {
        display: none;
    }
    select {
        padding: 1rem;
        color: #494f5d;
        width: 100%;
        font-size: 2rem;
    }
    input {
        padding: .5rem;
        border: none;
        box-shadow: 0 0 3px #d8d8dd;
        border-radius: 5px;
        width: 100%;
    }
    null {
        display: none;
    }
`;
document.head.appendChild(style);

// HEADER
// declaracion de variables para el header

const header = document.querySelector("header");
const navegador = document.createElement('div');
const nav = document.createElement('nav');
const ulPages = document.createElement('ul');
const ancla = document.createElement('a');
const links = ["Index", "Visas", "Nosotros"];
const ulLogo = document.createElement('ul');
const liLogo = document.createElement('li');
const imgLogo = document.createElement('img');

//agrego la imagen logo

ancla.href = 'index.html';
ancla.appendChild(imgLogo);
imgLogo.src = 'img/logoBlanco.png';
imgLogo.alt = 'Hago tu visa';

// utilizo metodo for each para las pages

links.forEach(link => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html">${link}</a>`;
    li.id = `${toCamelCase(link)}`;
    ulPages.appendChild(li);

    li.style.padding = '.2rem';
    li.style.borderRadius = '3px';
    li.style.textShadow = '0 0 3px black';

    // evento hover

    li.onmouseover = () => {
        li.style.textShadow = '0 0 3px #7692bf';
    };
    li.onmouseout = () => {
        li.style.textShadow = 'initial';
    };
});

// agrego a los nodos hijos

header.appendChild(navegador);
navegador.appendChild(nav);
nav.appendChild(ulLogo);
nav.appendChild(ulPages);
liLogo.appendChild(ancla);
ulLogo.appendChild(liLogo);

// estilos header

imgLogo.style.width = '7.5rem';

header.style.width = '100%';
header.style.backgroundColor = '#01194f';
header.style.display = 'flex';
header.style.justifyContent = 'center';

navegador.style.width = '100%';
navegador.style.padding = '0 3%';
navegador.style.maxWidth = '70rem';

nav.style.display = 'grid';
nav.style.gridTemplateColumns = `2fr ${links.length}fr`;
nav.style.alignItems = 'center';
nav.style.justifyContent = 'center';

ulPages.style.display = 'flex';
ulPages.style.justifyContent = 'right';
ulPages.style.gap = '1rem';
ulPages.style.alignItems = 'center';

ulLogo.style.padding = '1rem 0';
ulLogo.style.display = 'flex';

// dropdown paises

const linkVisas = document.querySelector('#visas');
const dropdown = document.createElement('ul');

// estilos

linkVisas.style.position = 'relative';

dropdown.style.display = 'none';
dropdown.style.position = 'absolute';
dropdown.style.top = '100%';
dropdown.style.left = '-150%';
dropdown.style.padding = '.5rem';
dropdown.style.width = '450%';
dropdown.style.borderRadius = '3px';
dropdown.style.backgroundColor = '#7692bf';

// foer each para los paises

paises.forEach(pais=>{
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `visas.html#${toCamelCase(pais.nombre)}`;
    a.innerText = `${pais.nombre}`;

    // estilos

    li.style.margin = '.5rem';

    a.style.padding = '.5rem';
    a.style.textShadow = '0 0 3px #01194f';

    // eventos

    a.onmouseover = () => {
        a.style.textShadow = '0 0 3px red';
    };
    a.onmouseout = () => {
        a.style.textShadow = 'initial';
    };

    // agrego nodos hijos

    li.appendChild(a);
    dropdown.appendChild(li);
})

linkVisas.appendChild(dropdown);

// eventos

linkVisas.onmouseover = () => {
    dropdown.style.display = 'block';
    linkVisas.style.textShadow = '0 0 3px #7692bf';
}
linkVisas.onmouseout = () => {
    dropdown.style.display = 'none';
    linkVisas.style.textShadow = 'initial';
}

// MAIN
// declaracion de variables para el main y trabajo cada main en los diferentes archivos.js

const main = document.querySelector("main");

// estilos basicos del main

main.style.width = '100%';
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.justifyContent = 'center';

// FOOTER
// declaracion de variables para el footer

const footer = document.querySelector("footer");
const divFooter = document.createElement('div');
divFooter.id = 'divFooter';

const divSocials = document.createElement('div');
divSocials.id = 'divSocials';
const linksSocials = [
    { nombre: 'IG', url: 'https://www.instagram.com/hagotuvisa/' },
    { nombre: 'Email', url: 'mailto:hagotuvisa@gmail.com' },
];

const anclaFooter = document.createElement('a');
anclaFooter.href = 'index.html';
const imgLogoFooter = document.createElement('img');
imgLogoFooter.src = 'img/logoBlanco.png';
imgLogoFooter.alt = 'Hago tu visa';

const parrafoFooter = document.createElement('p');
const anio = new Date().getFullYear();
parrafoFooter.innerText = `Hago tu visa - ${anio} - Todos los derechos reservados.`;

const indexLinks = ['Empezar', 'Paises'];
const visasLinks = ['Estados Unidos', 'Australia', 'Canadá'];
const contactoLinks = ['Sobre Nosotros', 'Contacto'];

// for each para los socials

linksSocials.forEach(link => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.url}"><img src="img/logo${link.nombre}Blanco.png" alt="Logo ${link.nombre}"></a>`;
    divSocials.appendChild(li);
    const img = li.querySelector('img');
    img.style.width = '20px';
})

// nav del footer
function crearFooter(links, indexLinks, visasLinks, contactoLinks) {
    links.forEach((pagina, index) => {
        const divPagina = document.createElement('div');
        divPagina.className = 'divPagina';

        divPagina.style.gridColumn = `${index + 2}`;
        divPagina.style.gridRow = '1 / span 3';
        divPagina.style.display = 'flex';
        divPagina.style.flexDirection = 'column';
        divPagina.style.gap = '1rem';

        const paginaLink = document.createElement('a');
        paginaLink.href = `${pagina.toLowerCase()}.html`;
        paginaLink.innerText = pagina;
        divPagina.appendChild(paginaLink);

        paginaLink.style.fontSize = '.9rem';

        const subMenu = document.createElement('ul');
        const enlaces = index === 0 ? indexLinks : index === 1 ? visasLinks : contactoLinks;

        enlaces.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `${pagina.toLowerCase()}.html#${toCamelCase(link)}`;
            a.innerText = link;
            a.className = 'linkFooter';
            a.id = `${toCamelCase(link)}Footer`;
            li.appendChild(a);
            subMenu.appendChild(li);

            a.style.fontSize = '0.7rem';
        });

        subMenu.style.display = 'flex';
        subMenu.style.flexDirection = 'column';
        subMenu.style.gap = '.5rem';

        divPagina.appendChild(subMenu);
        divFooter.appendChild(divPagina);
    })
}

// agrego a los nodos hijos

footer.appendChild(divFooter);
divFooter.appendChild(divSocials);
anclaFooter.appendChild(imgLogoFooter);
divFooter.appendChild(anclaFooter);
divFooter.appendChild(parrafoFooter);

crearFooter(links, indexLinks, visasLinks, contactoLinks);

// estilos footer

footer.style.width = '100%';
footer.style.backgroundColor = '#01194f';
footer.style.display = 'flex';
footer.style.alignItems = 'center';
footer.style.justifyContent = 'center';

divFooter.style.width = '100%';
divFooter.style.padding = '2rem 3%';
divFooter.style.maxWidth = '70rem';
divFooter.style.display = 'grid';
divFooter.style.gap = '1.5rem';
divFooter.style.gridTemplateColumns = '4fr 1fr 1fr 1fr';
divFooter.style.gridTemplateRow = '1fr 1fr 1fr';

divSocials.style.display = 'flex';
divSocials.style.gap = '0.5rem';

imgLogoFooter.style.width = '6rem';
anclaFooter.style.gridColumn = '1';

parrafoFooter.style.color = 'white';
parrafoFooter.style.gridColumn = '1';
parrafoFooter.style.fontSize = '.8rem';

const anclas = document.querySelectorAll('a');
anclas.forEach(a => {
    a.style.textDecoration = 'none';
    a.style.color = 'white';
});

const linksSubMenu = document.querySelectorAll('.linkFooter');
linksSubMenu.forEach(a => {
    a.style.color = '#7692bf';
})