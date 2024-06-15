//nosotros
// declaracion de variables

const divNosotros = document.createElement('div');
divNosotros.id = 'sobreNosotros';
const titulo = document.createElement('h1');
titulo.innerText = 'Nosotros';
const divParrafo = document.createElement('div');
divParrafo.innerHTML = `
    <p>¡Bienvenidos a HagoTuVisa! </p>
    <p>En 2018, nació HagoTuVisa como respuesta a la creciente necesidad de muchas personas por obtener visas de manera eficiente y sin complicaciones. Iniciamos nuestra actividad con el propósito de facilitar el proceso de obtención de visas para Estados Unidos. Con el tiempo, gracias a la confianza y las solicitudes de nuestros clientes, ampliamos nuestros servicios para abarcar también los trámites de visa para Canadá y Australia.</p>
    <p>En HagoTuVisa, comprendemos que el proceso de obtener una visa puede resultar abrumador y tedioso. Por ello, nos esforzamos por ofrecer un servicio integral y personalizado, adaptado a las necesidades individuales de cada cliente. </p>
    <p>Brindamos asesoramiento, acompañamiento constante y soluciones eficientes para hacer que el proceso de obtención de visas sea lo más fluido posible. Ya sea que estés planeando un viaje de negocios, unas vacaciones o la búsqueda de nuevas oportunidades en el extranjero, en HagoTuVisa estamos aquí para asistirte en cada paso del camino.</p>
    <p>¡Deja en nuestras manos los trámites para que puedas concentrarte en disfrutar tu viaje!</p>
`;

// estilos

main.style.padding = '0 3%';

divNosotros.style.width = '100%';
divNosotros.style.padding = '1.5rem 3%';
divNosotros.style.margin = '2rem';
divNosotros.style.maxWidth = '70rem';
divNosotros.style.display = 'flex';
divNosotros.style.flexDirection = 'column';
divNosotros.style.alignSelf = 'center';
divNosotros.style.border = 'none';
divNosotros.style.boxShadow = '0 0 5px #d8d8dd';
divNosotros.style.borderRadius = '10px';
divNosotros.style.color = 'white';
divNosotros.style.gap = '1rem';
divNosotros.style.backgroundColor = '#7692bf';


divParrafo.style.display = 'grid';
divParrafo.style.gap = '.7rem';

titulo.style.color = '#00274D';

// agrego nodos hijos

divNosotros.appendChild(titulo);
divNosotros.appendChild(divParrafo);
main.appendChild(divNosotros);

//CONTACTO
// declaracion de variables

const formContainer = document.createElement('div');
formContainer.id = 'contacto';

main.appendChild(formContainer);

// estilos

formContainer.style.width = '100%';
formContainer.style.padding = '2rem 3%';
formContainer.style.marginBottom = '2rem'
formContainer.style.maxWidth = '70rem';
formContainer.style.display = 'grid';
formContainer.style.alignSelf = 'center';
formContainer.style.boxShadow = '0 0 5px #d8d8dd';
formContainer.style.borderRadius = '10px';
formContainer.style.color = '#494f5d';
formContainer.style.gap = '2rem';

// eventos para recuperar info del dom y mantenerlos actualizados si hay un cambio

document.addEventListener('DOMContentLoaded', () => {

    const selectDestinosForm = document.getElementById('destinos');
    const selectNroTramitesForm = document.getElementById('nroTramites');

    selectDestinosForm.value = localStorage.getItem('destinoSeleccionado') || '';
    selectNroTramitesForm.value = localStorage.getItem('nroTramitesSeleccionado') || '';

    selectDestinosForm.addEventListener('change', () => {
        guardarLocal('destinoSeleccionado', selectDestinosForm.value);
    });

    selectNroTramitesForm.addEventListener('change', () => {
        guardarLocal('nroTramitesSeleccionado', selectNroTramitesForm.value);
        crearForm(formContainer, arrayInicio, arrayNombre, arrayNacimiento, arrayPais, arrayContacto);
    });
});

// funcion para crear divs de arrays

function crearCampos(arrayElementos) {
    const div = document.createElement('div');
    div.id = `${arrayElementos[0].name}`;


    div.style.display = 'grid';
    div.style.gridTemplateColumns = `repeat(${arrayElementos.length}, 1fr)`;
    div.style.gap = '.5rem 1rem';


    arrayElementos.forEach(elemento => {
        const label = document.createElement('label');
        label.textContent = elemento.label;
        label.id = `${elemento.name}Label`;

        label.style.gridRow = '1';

        const input = document.createElement(elemento.tipo);
        input.name = elemento.name;
        input.placeholder = elemento.placeholder;
        input.id = elemento.name;

        elemento.tipo === 'select' && elemento.options.forEach(opcion => {
            const option = document.createElement('option');
            option.value = opcion;
            option.textContent = opcion;
            input.appendChild(option);
        });

        div.appendChild(label);
        div.appendChild(input);
    });

    return div;
}

// funcion para crear divs si hay 2 personas o mas

function crearCamposRepetidos(arrayNombre, arrayNacimiento, arrayContacto) {
    const divCamposRepetidos = document.createElement('div');
    divCamposRepetidos.id = 'camposRepetidos';

    // estilo campos repetidos

    divCamposRepetidos.style.display = 'grid';
    divCamposRepetidos.style.gap = '2rem 0 1.5rem';

    // decidir si el div esta visible o no

    const nroTramites = parseInt(localStorage.getItem('nroTramitesSeleccionado'), 10) || 1;

    divCamposRepetidos.classList.toggle('hidden', nroTramites <= 1);

    for (let i = 2; i <= nroTramites; i++) {
        const divPersona = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerText = `Persona ${i}`;

        divPersona.style.padding = '1rem 0';
        divPersona.style.display = 'grid';
        divPersona.style.gap = '1rem';

        const divNombrePersona = crearCampos(arrayNombre);
        const divNacimientoPersona = crearCampos(arrayNacimiento);
        const divContactoPersona = crearCampos(arrayContacto);

        divPersona.appendChild(h3);
        divPersona.appendChild(divNombrePersona);
        divPersona.appendChild(divNacimientoPersona);
        divPersona.appendChild(divContactoPersona);

        divCamposRepetidos.appendChild(divPersona);
    }

    return divCamposRepetidos;
}

function crearForm(formContainer, arrayInicio, arrayNombre, arrayNacimiento, arrayPais, arrayContacto) {
    formContainer.innerHTML = '';

    const frase = document.createElement('h2');
    frase.innerText = '¡Comenzá tu trámite con nosotros!';

    frase.style.color = '#00274D';


    const divFormulario = document.createElement('div');
    divFormulario.id = 'formulario';

    // estilos del formulario

    divFormulario.style.display = 'grid';
    divFormulario.style.gap = '1rem';

    const divInicio = crearCampos(arrayInicio);
    divInicio.id = 'inicioDiv'

    const h3 = document.createElement('h3');
    h3.textContent = 'Datos';

    const divNombreForm = crearCampos(arrayNombre);
    divNombreForm.id = 'nombreDiv';
    const divNacimientoForm = crearCampos(arrayNacimiento);
    divNacimientoForm.id = 'nacimientoDiv';
    const divPaisForm = crearCampos(arrayPais);
    divPaisForm.id = 'paisDiv';
    const divContactoForm = crearCampos(arrayContacto);
    divContactoForm.id = 'contactoDiv';

    divFormulario.appendChild(divInicio);
    divFormulario.appendChild(h3);
    divFormulario.appendChild(divNombreForm);
    divFormulario.appendChild(divNacimientoForm);
    divFormulario.appendChild(divPaisForm);
    divFormulario.appendChild(divContactoForm);

    const divCamposRepetidos = crearCamposRepetidos(arrayNombre, arrayNacimiento, arrayContacto);
    divFormulario.appendChild(divCamposRepetidos);

    const botonEnviar = document.createElement('button');
    botonEnviar.innerText = 'Enviar';
    botonEnviar.type = 'submit';

    // estilos boton enviar

    botonEnviar.style.width = 'fit-content';
    botonEnviar.style.backgroundColor = '#d20f29';
    botonEnviar.style.borderRadius = '3px';
    botonEnviar.style.color = 'white';
    botonEnviar.style.fontSize = '.8rem';
    botonEnviar.style.boxShadow = '0 0 3px #4b5567';
    botonEnviar.style.border = '1px solid #d20f29';
    botonEnviar.style.padding = '0 1rem';
    botonEnviar.style.height = '2.3rem';

    // eventos del form

    botonEnviar.onmouseover = () => {
        botonEnviar.style.transform = 'scale(1.1)';
        botonEnviar.style.color = '#d20f29';
        botonEnviar.style.backgroundColor = 'white';
        botonEnviar.style.cursor = 'pointer';
    }
    botonEnviar.onmouseout = () => {
        botonEnviar.style.transform = 'scale(1)';
        botonEnviar.style.color = 'white';
        botonEnviar.style.backgroundColor = '#d20f29';
        botonEnviar.style.border = '1px solid #d20f29';
    }

    botonEnviar.onclick = () => {
        alert('¡Gracias por contactarnos!\nPronto nos estaremos comunicando.')
    }

    divFormulario.appendChild(botonEnviar);
    formContainer.appendChild(frase);
    formContainer.appendChild(divFormulario);

    // agrego eventos del dom aca tambien porque sino no actualiza

    const selectDestinosForm = document.getElementById('destinos');
    const selectNroTramitesForm = document.getElementById('nroTramites');

    selectDestinosForm.value = localStorage.getItem('destinoSeleccionado') || '';
    selectNroTramitesForm.value = localStorage.getItem('nroTramitesSeleccionado') || '';

    selectDestinosForm.addEventListener('change', () => {
        guardarLocal('destinoSeleccionado', selectDestinosForm.value);
    });

    selectNroTramitesForm.addEventListener('change', () => {
        guardarLocal('nroTramitesSeleccionado', selectNroTramitesForm.value);
        crearForm(formContainer, arrayInicio, arrayNombre, arrayNacimiento, arrayPais, arrayContacto);
    });
}

// Arrays

const arrayInicio = [
    {
        label: 'Destinos',
        tipo: 'select',
        name: 'destinos',
        options: paises.map(pais => pais.nombre),
    },
    {
        label: 'Número de trámites',
        tipo: 'select',
        name: 'nroTramites',
        options: Array.from({ length: 10 }, (_, i) => i + 1),
    },
];

const arrayNombre = [
    {
        label: 'Nombres Completos',
        tipo: 'input',
        name: 'nombre',
        placeholder: 'Nombres completos',
    },
    {
        label: 'Apellidos Completos',
        tipo: 'input',
        name: 'apellidos',
        placeholder: 'Apellidos completos',
    },
];

const arrayNacimiento = [
    {
        label: 'Fecha de nacimiento',
        name: 'nacimientoDiv'
    },
    {
        label: 'Día',
        tipo: 'select',
        name: 'dia',
        options: Array.from({ length: 31 }, (_, i) => i + 1),
    },
    {
        label: 'Mes',
        tipo: 'select',
        name: 'mes',
        options: Array.from({ length: 12 }, (_, i) => i + 1),
    },
    {
        label: 'Año',
        tipo: 'select',
        name: 'anio',
        options: Array.from({ length: 121 }, (_, i) => new Date().getFullYear() - i),
    },
];

const arrayPais = [
    {
        label: 'País',
        tipo: 'input',
        name: 'pais',
        placeholder: 'País',
    },
    {
        label: 'Provincia/Estado',
        tipo: 'input',
        name: 'provincia',
        placeholder: 'Provincia/Estado',
    },
    {
        label: 'Ciudad',
        tipo: 'input',
        name: 'ciudad',
        placeholder: 'Ciudad',
    },
    {
        label: 'Código Postal',
        tipo: 'input',
        name: 'codigoPostal',
        placeholder: 'Código Postal',
    },
];

const arrayContacto = [
    {
        label: 'Teléfono',
        tipo: 'input',
        name: 'telefono',
        placeholder: 'Teléfono',
    },
    {
        label: 'Email',
        tipo: 'input',
        name: 'email',
        placeholder: 'Email',
    },
];

// llamo a la funcion para crear el form

crearForm(formContainer, arrayInicio, arrayNombre, arrayNacimiento, arrayPais, arrayContacto);

// estilos especiales

const divNacimientoForm = document.querySelectorAll('#nacimientoDiv');
divNacimientoForm.forEach(div => {
    div.style.gridTemplateColumns = '1fr 1fr 1fr';
    div.style.gridTemplateRows = '1fr 1fr 1fr';
})

const diaLabel = document.querySelectorAll('#diaLabel');
diaLabel.forEach(label => {
    label.style.gridRow = '2';
    label.style.gridColumn = '1';
});

const diaSelect = document.querySelectorAll('#dia');
diaSelect.forEach(label => {
    label.gridRow = '3';
    label.style.gridColumn = '1';
});

const mesLabel = document.querySelectorAll('#mesLabel');
mesLabel.forEach(label => {
    label.style.gridRow = '2';
    label.style.gridColumn = '2';
});

const mesSelect = document.querySelectorAll('#mes');
mesSelect.forEach(label => {
    label.style.gridRow = '3';
    label.style.gridColumn = '2';
});

const anioLabel = document.querySelectorAll('#anioLabel');
anioLabel.forEach(label => {
    label.style.gridRow = '2';
    label.style.gridColumn = '3';
});

const anioSelect = document.querySelectorAll('#anio');
anioSelect.forEach(label => {
    label.style.gridRow = '3';
    label.style.gridColumn = '3';
});

const h3 = document.querySelectorAll('h3');
h3.forEach(titulo => {
    titulo.style.padding = '.5rem 0';
    titulo.style.color = '#00274D';
});