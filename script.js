window.addEventListener('load', empezar);
function empezar(){
    let intentos = 6;
    let diccionario = ['AMIGO', 'TURNO', 'TARDE', 'LUNES', 'SALSA', 'PECHO']

    const PALABRA = diccionario[Math.floor(Math.random() * diccionario.length)];
    console.log(PALABRA);

    const BUTTON = document.getElementById("guess-button");
    const INPUT = document.getElementById("guess-input");
    BUTTON.addEventListener("click", intentar);


    function intentar(){
        const INTENTO = leerIntento();
        if (INTENTO === PALABRA ) {
            terminar("<h1>GANASTE!😀</h1>")
        return
    }
        for (let i in PALABRA){
            if (INTENTO[i]===PALABRA[i]){
                console.log(INTENTO[i], "VERDE")
            } else if( PALABRA.includes(INTENTO[i]) ) {
                console.log(INTENTO[i], "AMARILLO")
            } else {
                console.log(INTENTO[i], "GRIS")
            }
        }
            intentos--
            if (intentos==0){
                terminar("<h1>PERDISTE!😖</h1>")
            }
            const GRID = document.getElementById("grid");
            const ROW = document.createElement('div');
            ROW.className = 'row';
            for (let i in PALABRA){
                const SPAN = document.createElement('span');
                SPAN.className = 'letter';
                if (INTENTO[i]===PALABRA[i]){ 
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = 'green';
                } else if( PALABRA.includes(INTENTO[i]) ) { 
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = 'yellow';
                } else {     
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = 'grey';
                }
                ROW.appendChild(SPAN)
            }
            GRID.appendChild(ROW)
            INPUT.value = "";
    }
    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        BUTTON.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
    }
    function leerIntento(){
        let intento = document.getElementById("guess-input");
        intento = intento.value;
        intento = intento.toUpperCase();
        return intento;
    }

}