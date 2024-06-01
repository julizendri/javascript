let nombre1 = prompt("Por favor ingrese su nombre.");
alert(`¡Bienvenida/o ${nombre1}! Por favor siga las instrucciones.`);

alert("Nuestro trabajo es ayudarle a facilitar el proceso para aplicar a las visas, permisos y autorizaciones de viaje para que usted pueda focalizarse en lo que de verdad importa. Por el momento contamos con servicios para permisos de viaje de los siguientes países: Estados Unidos, Australia, Canadá.");

let cantidadDeTramites = parseInt(prompt("¿Cuántas personas quieren realizar el trámite? (Ingrese la cantidad en números)."));

while (isNaN(cantidadDeTramites) || cantidadDeTramites < 0) {
    cantidadDeTramites = parseInt(prompt("Respuesta inválida: ¿Cuántas personas quieren realizar el trámite? (Ingrese la cantidad en números)."));
}

function despedida() {
    alert("Hasta luego!");
}

const personas = [];

for (let i = 1; i <= cantidadDeTramites; i++) {
    let persona = crearPersona(i);
    personas.push(persona);
    edad(i);
    elegirPais(i);
    console.log(personas)
}

function crearPersona(i) {
    const primerNombre = prompt(`Ingrese el primer nombre de la persona ${i}.`);
    const primerApellido = prompt(`Ingrese el primer apellido de la persona ${i}.`);
    const telefono = prompt(`Ingrese el teléfono de la persona ${i}.`);
    const email = prompt(`Ingrese el correo electrónico de la persona ${i}.`);
    return { primerNombre, primerApellido, telefono, email };
}

function edad(i) {
    let edad = parseInt(prompt(`Ingrese la edad de la persona ${i} en números.`));
    while (isNaN(edad)) {
        edad = parseInt(prompt(`Respuesta inválida: Ingrese la edad de la persona ${i} en números.`));
    }
    if (edad >= 18) {
        alert(`La persona ${i} es mayor de edad. Por favor, siga proporcionando los datos requeridos.`);
    } else if (edad > 0 && edad < 18) {
        let opcionEdad = prompt(`La persona ${i}, ¿cuenta con un adulto responsable para continuar con el trámite? (si/no).`).toLowerCase();
        if (["si", "s", "i"].includes(opcionEdad)) {
            alert("Por favor, siga proporcionando los datos requeridos.");
        } else {
            alert(`Por favor, solicite la ayuda de un adulto responsable de la persona ${i} para proporcionar los datos requeridos.`);
        }
    }
}


function elegirPais(i) {
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
        if (nuevaOpcion === "si" || nuevaOpcion === "s" || nuevaOpcion === "i") {
            elegirPais(i);
        } else {
            despedida();
        }
    }
}

const navegador = document.getElementById('nav');

navegador.style.backgroundColor = 'lightblue';
navegador.className = 'navbar';

const paginas = document.getElementById('paginas');
paginas.className = 'paginas';