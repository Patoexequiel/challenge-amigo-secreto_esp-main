// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// La pandilla de nombres, aquí van los panas
let listaDeAmigos = [];

// Agregar un amigo a la lista (¡sin repetir y sin soplar!)
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo"); // El cajoncito donde escribes los nombres
    const listaHTML = document.getElementById("listaAmigos"); // Donde se ven los nombres bonitos
    const nombreAmigo = inputAmigo.value.trim(); // Le quitamos la mugre (espacios de sobra)

    // ¿Te olvidaste de poner algo? No te hagas el vivo
    if (nombreAmigo === "") {
        alert("¿Vas a agregar aire? Escribe algo de verdad.");
        return;
    }

    // Aquí no queremos nombres con números, ¿acaso somos robots?
    if (/\d/.test(nombreAmigo)) {
        alert("Los nombres no llevan números. Esto no es una matrícula.");
        return;
    }

    // Dejamos los nombres bien chetos (primera letra mayúscula, como debe ser)
    const nombreFormateado = nombreAmigo
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (letra) => letra.toUpperCase());

    // Nada de nombres repetidos, esto no es un eco
    if (listaDeAmigos.includes(nombreFormateado)) {
        alert("Ese nombre ya está, buscá otro compa.");
        return;
    }

    // Todo bien, lo agregamos a la lista y lo mostramos
    listaDeAmigos.push(nombreFormateado);
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombreFormateado;
    listaHTML.appendChild(nuevoElemento);

    // Dejamos el input limpito para que sigas con el próximo
    inputAmigo.value = "";
}

// Sorteo de amigos secretos (aquí ocurre la magia)
function sortearAmigo() {
    const resultadoHTML = document.getElementById("resultado"); // Donde salen los resultados finales

    // No me vengas con dos gatos locos, necesitamos al menos 3
    if (listaDeAmigos.length < 3) {
        alert("¿Qué sorteo querés hacer con menos de 3 personas? ¡Traé más gente!");
        return;
    }

    // Limpiamos los resultados anteriores (por si te gusta intentar varias veces)
    resultadoHTML.innerHTML = "";

    // Mezclamos los nombres como barajando cartas
    mezclarLista(listaDeAmigos);

    // Emparejamos a los compas para el sorteo
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const amigoActual = listaDeAmigos[i];
        const amigoSiguiente = listaDeAmigos[(i + 1) % listaDeAmigos.length]; // Último con el primero, claro
        const resultado = document.createElement("li");
        resultado.textContent = `${amigoActual} --> ${amigoSiguiente}`;
        resultadoHTML.appendChild(resultado);
    }
}

// Algoritmo de mezcla nivel ninja (Fisher-Yates)
function mezclarLista(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * (i + 1));
        // Cambiamos posiciones cual truco de magia
        [lista[i], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i]];
    }
}
