let nombre1 = prompt("Por favor ingrese su nombre.");
const VACIO = " ";
const PUNTO = ".";
alert("¡Bienvenida/o " + nombre1 + "! Por favor siga las instrucciones.");

alert("Nuestro trabajo es ayudarle a facilitar el proceso para aplicar a las visas, permisos y autorizaciones de viaje para que usted pueda focalizarse en lo que de verdad importa. Por el momento contamos con servicios para permisos de viaje de los siguientes países: Estados Unidos, Australia, Canadá.");

let cantidadDeTramites = parseInt(prompt("¿Cuántas personas quieren realizar el trámite? (Ingrese la cantidad en números)."))

for (let i = 1; i <= cantidadDeTramites; i++) {
    let primerNombre = prompt("Ingrese el primer nombre de la persona " + i + PUNTO);
    let primerApellido = prompt("Ingrese el primer apellido de la persona " + i + PUNTO);
    let telefono = prompt("Ingrese el número de teléfono de la persona " + i + PUNTO);
    let email = prompt("Ingrese la dirección de correo electrónico de la persona " + i + PUNTO);
    console.log("Persona " + i + ":" + primerNombre + VACIO + primerApellido + VACIO + telefono + VACIO + email);
}

function despedida() {
    alert("No podemos ayudarle, hasta luego!");
}

function elegirPais() {
    let pais = prompt("¿A qué país desea viajar? (si desea seleccionar otro país ingrese otro).").toLowerCase();
    if ((pais === "estados unidos") || (pais === "estado unidos") || (pais === "estado unido") || (pais === "estados unido") || (pais === "eeuu") || (pais === "eu")) {
        alert("Usted quiere viajar a Estados Unidos.");
    } else if ((pais === "australia") || (pais === "australi") || (pais === "au")) {
        alert("Usted quiere viajar a Australia.");
    } else if ((pais === "canada") || (pais === "canadá") | (pais === "ca")) {
        alert("Usted quiere viajar a Canadá.")
    } else if ((pais === "otro") || (pais === "otr")) {
        alert("Usted ha ingresado otro.");
    } else {
        alert("La opción ingresada no está en nuestra base de datos, por favor ingrese Estados Unidos, Australia, Canadá u otro.");
        let nuevaOpcion = prompt("Desea ingresar una nueva opción? (si o no)").toLowerCase();
        if ((nuevaOpcion === "si") || (nuevaOpcion === "s") || (nuevaOpcion === "i")) {
            elegirPais();
        } else {
            despedida();
        }
    }
}

elegirPais()

function edad() {
    let edad = parseInt(prompt("Ingrese su edad."));
    if (edad >= 18) {
        alert("Usted es mayor de edad. Pronto le enviaremos un email, gracias");
    } else if (edad > 0 && edad < 18) {
        let opcionEdad = prompt("Usted es menor de edad, cuenta con un adulto responsable para continuar con el trámite?").toLowerCase();
        if ((opcionEdad === "si") || (opcionEdad === "s") || (opcionEdad === "i")) {
            alert("Pronto le enviaremos un email, gracias.");
        } else {
            despedida();
        }
    } else {
        alert("El número ingresado no es válido.");
        let nuevaOpcion = prompt("Desea ingresar una nueva opción? (si o no)").toLowerCase();
        if ((nuevaOpcion === "si") || (nuevaOpcion === "s") || (nuevaOpcion === "i")) {
            edad();
        } else {
            despedida();
        }

    }
}

edad()