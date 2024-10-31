var colores = [
    "#ff0000", // Rojo
    "#00ff00", // Verde
    "#0000ff", // Azul
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#ff8000", // Naranja
    "#8000ff", // Morado
    "#00ff80", // Verde claro
    "#ff0080", // Rosa
    "#80ff00", // Verde lima
    "#0080ff", // Azul claro
    "#ffbf00", // Amarillo oscuro
    "#bf00ff", // Violeta oscuro
    "#00ffbf", // Turquesa
    "#bf00ff", // Púrpura
    "#00bfff", // Azul claro
    "#ff00bf", // Magenta oscuro
    "#80ff80", // Verde claro pastel
    "#ff80ff", // Rosa pastel
    "#80ffff" // Cian claro
    ];

  

const frasesAleatorias = [

    "¿Eres un while? porque no quiero salir de tu bucle",
    "¿Cuantos bugs podrá tener mi vida?",
    "Este examen es tan dificil como el lenguaje ensamblador",
    "Porfin cambié mi fondo de pantalla en linux, solo tardé 2 horas y 27 comandos distintos"


];

function textoAleatorio(){

    let indice  = Math.floor(Math.random() * frasesAleatorias.length);
    let colores  = Math.floor(Math.random() * colores.length);

    let elemento = document.getElementById("texto-informatica").innerHTML = frasesAleatorias[indice];


}

//boton

document.getElementById("ver-mas-boton").addEventListener("click",textoAleatorio);





