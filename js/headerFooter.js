// General
const cuerpo = document.body;
const paises = [
    { nombre: 'Estados Unidos', descripcion: 'EEUU', url: 'usa.jpg' },
    { nombre: 'Australia', descripcion: 'AUS', url: 'aus.jpg' },
    { nombre: 'Canadá', descripcion: 'CAN', url: 'can.jpg' },
];
cuerpo.style.backgroundColor = '#f0f0f2';

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
`;
document.head.appendChild(style);

// HEADER
// declaracion de variables para el header

const header = document.querySelector("header");
const navegador = document.createElement('div');
const nav = document.createElement('nav');
const ulPages = document.createElement('ul');
const ancla = document.createElement('a');
const links = ["Inicio", "Visas", "Contacto"];
const ulLogo = document.createElement('ul');
const liLogo = document.createElement('li');
const imgLogo = document.createElement('img');

//agrego la imagen logo

ancla.href = 'inicio.html';
ancla.appendChild(imgLogo);
imgLogo.src = 'img/logoBlanco.png';
imgLogo.alt = 'Hago tu visa';

// utilizo metodo for each para los links

links.forEach(link => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html">${link}</a>`;
    ulPages.appendChild(li);

    li.style.padding = '.3rem';
    li.style.borderRadius = '3px';

    // evento hover

    li.onmouseover = () => {
        li.style.transform = 'scale(1.1)';
        li.style.backgroundColor = '#99bdc8';
    }
    li.onmouseout = () => {
        li.style.transform = 'scale(1)';
        li.style.backgroundColor = 'initial';
    }
})

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
header.style.backgroundColor = '#0e3f79';
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

// eventos header

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
    { nombre: 'Email', url: 'mailto:sosa.paula8@gmail.com' },
];

const anclaFooter = document.createElement('a');
anclaFooter.href = 'inicio.html';
const imgLogoFooter = document.createElement('img');
imgLogoFooter.src = 'img/logoBlanco.png';
imgLogoFooter.alt = 'Hago tu visa';

const parrafoFooter = document.createElement('p');
const anio = new Date().getFullYear();
parrafoFooter.innerText = `Hago tu visa - ${anio} - Todos los derechos reservados.`;

const inicioLinks = ['Empezar', 'Paises', 'Opiniones'];
const visasLinks = ['Estados Unidos', 'Australia', 'Canadá'];
const contactoLinks = ['Nosotros', 'Contacto'];

// for each para los socials

linksSocials.forEach(link => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.url}"><img src="img/logo${link.nombre}Blanco.png" alt="Logo ${link.nombre}"></a>`;
    divSocials.appendChild(li);
    const img = li.querySelector('img');
    img.style.width = '20px';
})

// duncion para que anden los links

function toCamelCase(str) {
    return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    }).replace(/\s+/g, '');
}

// nav del footer
function crearFooter(links, inicioLinks, visasLinks, contactoLinks) {
    links.forEach((pagina, index) => {
        const divPagina = document.createElement('div');
        divPagina.className = 'divPagina';

        divPagina.style.gridColumn = `${index +2}`;
        divPagina.style.gridRow = '1 / span 3';
        divPagina.style.display = 'flex';
        divPagina.style.flexDirection = 'column';
        divPagina.style.gap = '1.5rem';

        const paginaLink = document.createElement('a');
        paginaLink.href = `${pagina.toLowerCase()}.html`;
        paginaLink.innerText = pagina;
        divPagina.appendChild(paginaLink);

        paginaLink.style.fontSize = '.9rem';

        const subMenu = document.createElement('ul');
        let enlaces;
        if (index === 0) enlaces = inicioLinks;
        else if (index === 1) enlaces = visasLinks;
        else if (index === 2) enlaces = contactoLinks;

        enlaces.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `${pagina.toLowerCase()}.html#${toCamelCase(link)}`;
            a.innerText = link;
            a.className = 'linkFooter';
            li.appendChild(a);
            subMenu.appendChild(li);

            a.style.fontSize = '0.7rem';
        });

        subMenu.style.display = 'flex';
        subMenu.style.flexDirection = 'column';
        subMenu.style.gap = '1.5rem';

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

crearFooter(links, inicioLinks, visasLinks, contactoLinks);

// estilos footer

footer.style.width = '100%';
footer.style.backgroundColor = '#0e3f79';
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
linksSubMenu.forEach(a=>{
    a.style.color= '#99bdc8';
})