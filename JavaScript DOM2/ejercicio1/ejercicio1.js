/*Definir un array con frases frikis o graciosas sobre informática
• Función para cambiar el texto de forma aleatoria
• Obtener un índice aleatorio del array de frases
• Obtener el elemento de texto
• Cambiar el contenido del elemento con una frase aleatoria
• Asignar evento al botón*/

    


    const frasesAleatorias = [

        "¿Eres un while? porque no quiero salir de tu bucle",
        "¿Cuantos bugs podrá tener mi vida?",
        "Este examen es tan dificil como el lenguaje ensamblador",
        "Porfin cambié mi fondo de pantalla en linux, solo tardé 2 horas y 27 comandos distintos"


    ];
    
    function textoAleatorio(){

        let indice  = Math.floor(Math.random() * frasesAleatorias.length);

        let elemento = document.getElementById("texto-informatica").innerHTML = frasesAleatorias[indice];


    }

    //boton

    document.getElementById("ver-mas-boton").addEventListener("click",textoAleatorio);





