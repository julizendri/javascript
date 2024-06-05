class Persona {
    constructor(primerNombre, primerApellido, telefono, email, fechaDeNacimiento) {
        this.primerNombre = primerNombre;
        this.primerApellido = primerApellido;
        this.telefono = telefono;
        this.email = email;
        this.fechaDeNacimiento = fechaDeNacimiento;
    }

    calcularEdad() {
        const fechaActual = new Date();
        let edad = fechaActual.getFullYear() - this.fechaDeNacimiento.getFullYear();
        let diferenciaMeses = fechaActual.getMonth() - this.fechaDeNacimiento.getMonth();
        let diferenciaDias = fechaActual.getDate() - this.fechaDeNacimiento.getDate();

        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
            edad--;
        }

        return edad;
    }

    verificarEdad(i) {
        let edad = this.calcularEdad();

        if (edad >= 18) {
            alert(`La persona ${i} es mayor de edad. Por favor, siga proporcionando los datos requeridos.`);
        } else {
            let opcionEdad = prompt(`La persona ${i}, ¿cuenta con un adulto responsable para continuar con el trámite? (si/no).`).toLowerCase();
            if (["si", "s", "i"].includes(opcionEdad)) {
                alert("Por favor, siga proporcionando los datos requeridos.");
            } else {
                alert(`Por favor, solicite la ayuda de un adulto responsable de la persona ${i} para proporcionar los datos requeridos.`);
            }
        }
    }

    elegirPais(i) {
        let pais = prompt(`¿A qué país desea viajar la persona ${i}? (si desea seleccionar otro país ingrese otro).`).toLowerCase();
        if (["estados unidos", "estado unidos", "estado unido", "estados unido", "eeuu", "eu"].includes(pais)) {
            alert(`La persona ${i} quiere viajar a Estados Unidos.`);
        } else if (["australia", "australi", "au"].includes(pais)) {
            alert(`La persona ${i} quiere viajar a Australia.`);
        } else if (["canada", "canadá", "ca"].includes(pais)) {
            alert(`La persona ${i} quiere viajar a Canadá.`);
        } else if (["otro", "otr"].includes(pais)) {
            alert(`Usted ha ingresado otro.`);
        } else {
            alert(`La opción ingresada no está en nuestra base de datos, por favor ingrese Estados Unidos, Australia, Canadá u otro.`);
            let nuevaOpcion = prompt("Desea ingresar una nueva opción? (si o no)").toLowerCase();
            if (["si", "s", "i"].includes(nuevaOpcion)) {
                this.elegirPais(i);
            } else {
                despedida();
            }
        }

    }

    mostrarDatos(i) {
        console.log(`Datos de la persona ${i}:\nNombre: ${this.primerNombre}\nApellido: ${this.primerApellido}\nTeléfono: ${this.telefono}\nEmail: ${this.email}\nFecha de nacimiento: ${this.fechaDeNacimiento.toDateString()}`);
    }
}

function despedida() {
    alert("Hasta luego!");
}

let nombre1 = prompt("Por favor ingrese su nombre.");
alert(`¡Bienvenida/o ${nombre1}! Por favor siga las instrucciones.`);

alert("Nuestro trabajo es ayudarle a facilitar el proceso para aplicar a las visas, permisos y autorizaciones de viaje para que usted pueda focalizarse en lo que de verdad importa. Por el momento contamos con servicios para permisos de viaje de los siguientes países: Estados Unidos, Australia, Canadá.");

let cantidadDeTramites = parseInt(prompt("¿Cuántas personas quieren realizar el trámite? (Ingrese la cantidad en números)."));

while (isNaN(cantidadDeTramites) || cantidadDeTramites < 0) {
    cantidadDeTramites = parseInt(prompt("Respuesta inválida: ¿Cuántas personas quieren realizar el trámite? (Ingrese la cantidad en números)."));
}

const personas = [];

for (let i = 1; i <= cantidadDeTramites; i++) {
    let primerNombre = prompt(`Ingrese el primer nombre de la persona ${i}.`);
    let primerApellido = prompt(`Ingrese el primer apellido de la persona ${i}.`);
    let telefono = prompt(`Ingrese el teléfono de la persona ${i}.`);
    let email = prompt(`Ingrese el correo electrónico de la persona ${i}.`);

    let anioDeNacimiento = parseInt(prompt(`Ingrese el año de nacimiento de la persona ${i}.`));
    let mesDeNacimiento = parseInt(prompt(`Ingrese el mes de nacimiento de la persona ${i}.`)) - 1;
    let diaDeNacimiento = parseInt(prompt(`Ingrese el día de nacimiento de la persona ${i}.`));
    let fechaDeNacimiento = new Date(añoDeNacimiento, mesDeNacimiento, diaDeNacimiento);

    while (isNaN(fechaDeNacimiento.getTime())) {
        anioDeNacimiento = parseInt(prompt(`Respuesta inválida: Ingrese el año de nacimiento de la persona ${i}.`));
        mesDeNacimiento = parseInt(prompt(`Ingrese el mes de nacimiento de la persona ${i}.`)) - 1;
        diaDeNacimiento = parseInt(prompt(`Ingrese el día de nacimiento de la persona ${i}.`));
        fechaDeNacimiento = new Date(anioDeNacimiento, mesDeNacimiento, diaDeNacimiento);
    }

    let persona = new Persona(primerNombre, primerApellido, telefono, email, fechaDeNacimiento);
    personas.push(persona);
    persona.verificarEdad(i);
    persona.elegirPais(i);
    persona.mostrarDatos(i);
}

const navegador = document.getElementById('nav');
navegador.style.backgroundColor = 'lightblue';
navegador.className = 'navbar';

const paginas = document.getElementById('paginas');
paginas.className = 'paginas'; 

const divIndex = document.getElementById('divIndex');
divIndex.innerHTML = `<h3>Personas:</h3><div id="contenedorPersonas"></div><p>Gracias, pronto nos comunicaremos con usted para realizar su trámite.</p>`;
const divPersonas = document.getElementById('contenedorPersonas');

for (const persona of personas) {
    let personaLiteral = `Nombre: ${persona.primerNombre}<br>Apellido: ${persona.primerApellido}<br>Teléfono: ${persona.telefono}<br>Email: ${persona.email}<br>Fecha de nacimiento: ${persona.fechaDeNacimiento.toDateString()}`;
    const contenedorPersona = document.createElement('div');
    contenedorPersona.innerHTML = personaLiteral;
    divPersonas.appendChild(contenedorPersona);
    contenedorPersona.className = 'personas';
}