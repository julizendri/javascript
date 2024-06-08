// General
const cuerpo = document.body;
cuerpo.style.backgroundColor = '#e9eeff';

// HEADER
// declaracion de variables para el header

const header = document.querySelector("header");
const navegador = document.createElement('div');
const nav = document.createElement('nav');
const ulPages = document.createElement('ul');
const ancla = document.createElement('a');
const links = ["Index", "Visas", "Novedades", "Nosotros"];
const ulLogo = document.createElement('ul');
const liLogo = document.createElement('li');
const imgLogo = document.createElement('img');

// agrego a los nodos hijos

header.appendChild(navegador);
navegador.appendChild(nav);
nav.appendChild(ulLogo);
nav.appendChild(ulPages);
liLogo.appendChild(ancla);
ulLogo.appendChild(liLogo);

//agrego la imagen logo y la posiciono

ancla.href = '/';
ancla.appendChild(imgLogo);
imgLogo.src = 'img/logoBlanco.png';
imgLogo.alt = 'Hago tu visa';

// utilizo metodo for each para los links

links.forEach(link => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html">${link}</a>`;
    ulPages.appendChild(li);
})

// estilos header

imgLogo.style.width = '7.5rem';
header.style.width = '100%';
header.style.backgroundColor = '#041562';
header.style.display = 'flex';
header.style.justifyContent = 'center';
navegador.style.width = '100%';
navegador.style.padding = '0 3%';
navegador.style.maxWidth = '70rem';
nav.style.display = 'grid';
nav.style.gridTemplateColumns = '2fr 4fr';
nav.style.alignItems = 'center';
nav.style.justifyContent = 'center';
ulPages.style.display = 'flex';
ulPages.style.justifyContent = 'space-evenly';
ulPages.style.alignItems = 'center';
ulPages.style.listStyle = 'none';
ulLogo.style.padding = '1rem';
ulLogo.style.display = 'flex';
ulLogo.style.justifyContent = 'center';


const anclas = document.querySelectorAll('a');
anclas.forEach(a => {
    a.style.textDecoration = 'none';
    a.style.color = 'white';
});

// declaracion de variables para el main y trabajo cada main en los diferentes archivos.js

const main = document.querySelector("main");

// FOOTER
// declaracion de variables para el footer

const footer = document.querySelector("footer");
const parrafoFooter = document.createElement('p');
const anio = new Date().getFullYear();
const divFooter = document.createElement('div');
const ulSocials = document.createElement('ul');
const linksSocials = [
    { nombre: 'IG', url: 'https://www.instagram.com/hagotuvisa/' },
    { nombre: 'Email', url: 'mailto:sosa.paula8@gmail.com' },
];

// agrego a los nodos hijos

footer.appendChild(divFooter);
divFooter.appendChild(ulSocials);
divFooter.appendChild(parrafoFooter);
parrafoFooter.innerText = `Hago tu visa - ${anio} - Todos los derechos reservados.`;

// for eahc para los socials

linksSocials.forEach(link => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.url}"><img src="img/logo${link.nombre}Blanco.png" alt="Logo ${link.nombre}"></a>`;
    ulSocials.appendChild(li);
    const img = li.querySelector('img');
    img.style.width = '30px';
    img.style.margin = '.5rem'
})

// estilos footer

footer.style.width = '100%';
footer.style.backgroundColor = '#041562';
divFooter.style.display = 'flex';
divFooter.style.flexDirection = 'column';
divFooter.style.alignContent = 'center';
ulSocials.style.display = 'flex';
ulSocials.style.alignSelf = 'center';
ulSocials.style.gap = '0.5rem';
parrafoFooter.style.textAlign = 'center';
parrafoFooter.style.padding = '1rem';
parrafoFooter.style.color = 'white';