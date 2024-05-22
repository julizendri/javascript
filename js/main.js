let nombre1 = prompt("Por favor ingrese su nombre.");
const VACIO = " ";
const PUNTO = ".";
alert("¡Bienvenida/o " + nombre1 + "! Por favor siga las instrucciones.");

alert("Nuestro trabajo es ayudarle a facilitar el proceso para aplicar a las visas, permisos y autorizaciones de viaje para que usted pueda focalizarse en lo que de verdad importa. Por el momento contamos con servicios para permisos de viaje de los siguientes países: Estados Unidos, Australia, Canadá.");

let cantidadDeTramites = parseInt(prompt("¿Cuántas personas quieren realizar el trámite? (Ingrese la cantidad en números)."));

while (isNaN(cantidadDeTramites)) {
    cantidadDeTramites = parseInt(prompt("Respuesta inválida: ¿Cuántas personas quieren realizar el trámite? (Ingrese la cantidad en números)."))
}

function despedida() {
    alert("Hasta luego!");
}

for (let i = 1; i <= cantidadDeTramites; i++) {
    if (i === 0){
        despedida();
        break;
    }
    class Persona {
        constructor(primerNombre, primerApellido, telefono, email) {
            this.primerNombre = primerNombre;
            this.primerApellido = primerApellido;
            this.telefono = telefono;
            this.email = email;
        }
        recolectaDatos() {
            console.log("Persona " + i + ":" + this.primerNombre + VACIO + this.primerApellido + VACIO + this.telefono + VACIO + this.email);
        }
    }
    const datos = new Persona(prompt("Ingrese el primer nombre de la persona " + i + PUNTO), prompt("Ingrese el primer apellido de la persona " + i + PUNTO), prompt("Ingrese el número de teléfono de la persona " + i + PUNTO), prompt("Ingrese su dirección de correo electrónico de la persona " + i + PUNTO));
    datos.recolectaDatos();

    function edad() {
        let edad = parseInt(prompt("Ingrese la edad de la persona " + i + " en números."));
        while (isNaN(edad)) {
            edad = parseInt(prompt("Respuesta inválida: Ingrese la edad de la persona " + i + " en números."))
        }
        if (edad >= 18) {
            alert("La persona " + i + "es mayor de edad. Por favor, siga proporcionando los datos requeridos.");
        } else if (edad > 0 && edad < 18) {
            let opcionEdad = prompt("La persona " + i + ", cuenta con un adulto responsable para continuar con el trámite? (si/no).").toLowerCase();
            if ((opcionEdad === "si") || (opcionEdad === "s") || (opcionEdad === "i")) {
                alert("Por favor, siga proporcionando los datos requeridos.");
            } else {
                alert("Por favor, solicite la ayuda de un adulto responsable de la persona " + i + " para proporcionar los datos requeridos.");
            }
        }
    }

    edad()



    function elegirPais() {
        let pais = prompt("¿A qué país desea viajar la persona " + i + "? (si desea seleccionar otro país ingrese otro).").toLowerCase();
        if ((pais === "estados unidos") || (pais === "estado unidos") || (pais === "estado unido") || (pais === "estados unido") || (pais === "eeuu") || (pais === "eu")) {
            alert("La persona " + i + " quiere viajar a Estados Unidos.");
        } else if ((pais === "australia") || (pais === "australi") || (pais === "au")) {
            alert("La persona " + i + "  quiere viajar a Australia.");
        } else if ((pais === "canada") || (pais === "canadá") | (pais === "ca")) {
            alert("La persona " + i + "  quiere viajar a Canadá.")
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
}