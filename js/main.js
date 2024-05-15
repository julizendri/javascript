let nombre = prompt("Por favor ingrese su nombre.");
let apellido = prompt("Por favor ingrese su apellido.");
const VACIO = " ";
alert("¡Bienvenida/o " + nombre + VACIO + apellido + "! ¿Está listo para su próxima aventura?");

alert("Nuestro trabajo es ayudarle a facilitar el proceso para aplicar a las visas, permisos y autorizaciones de viaje para que usted pueda focalizarse en lo que de verdad importa. Por el momento contamos con servicios para permisos de viaje de los siguientes países: Estados Unidos, Australia, Canadá.");


function despedida(){
    alert ("No podemos ayudarle, hasta luego!")
}

function elegirPais() {
    let pais = prompt("¿A qué país desea viajar? (si desea seleccionar otro país ingrese otro).");
    if ((pais = "Estados Unidos") || (pais = "estados unidos") || (pais = "Estado Unidos") || (pais = "Estado Unido") || (pais = "Estados Unido") || (pais = "estado unidos") || (pais = "estados unido") || (pais = "EEUU") || (pais = "eeuu") || (pais = "eu")) {
        alert("Usted quiere viajar a Estados Unidos.");
    } else if ((pais = "Australia") || (pais = "australia") || (pais = "australi") || (pais = "Australi") || (pais = "Au") || (pais = "au") || (pais = "AU")) {
        alert("Usted quiere viajar a Australia.");
    } else if ((pais = "Canada") || (pais = "canada") || (pais = "Canadá") || (pais = "canadá") || (pais = "Ca") || (pais = "CA") || (pais = "ca")) {
        alert("Usted quiere viajar a Australia.")
    } else if ((pais = "otro") || (pais = "OTRO") || (pais = "Otro") || (pais = "otr")) {
        alert("Usted ha ingresado otro.");
    } else {
        alert("La opción ingresada no está en nuestra base de datos, por favor ingrese Estados Unidos, Australia, Canadá u otro.");
        let nuevaOpcion = prompt("Desea ingresar una nueva opción? (si o no)");
        if ((nuevaOpcion = si) || (nuevaOpcion = Si) || (nuevaOpcion = SI) || (nuevaOpcion = s) || (nuevaOpcion = S) || (nuevaOpcion = i) || (nuevaOpcion = I)) {
            elegirPais();
        } else {
            despedida();
        }
    }
}

elegirPais()

let edad = prompt("Ingrese su edad.")
if (edad >=18){
    alert ("Usted es mayor de edad. Pronto le enviaremos un email, gracias");
}else if ((edad >0) || (edad <18)) {
    let opcionEdad = prompt ("Usted es emnor de edad, cuenta con un adulto rezponsable para continuar con el trámite?");
    if ((opcionEdad = si) || (opcionEdad = Si) || (opcionEdad = SI) || (opcionEdad = s) || (opcionEdad = S) || (opcionEdad = i) || (opcionEdad = I)) {
        alert ("Pronto le enviaremos un email, gracias.");
    } else {
        despedida();
    }
}
