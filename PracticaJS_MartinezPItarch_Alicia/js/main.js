//Declaramos las variables 
var num_dni = document.getElementById('num_dni');
var letra_dni = document.getElementById('letra_dni');
var submit_dni = document.getElementById("submit_dni");
var reintentar = document.getElementById('reintentar');

var letraNum = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']

//Cuando apretemos el botón se comprobarán los datos
submit_dni.onclick = function() {
    comprobarDatos();
};


//Evento: cuando pulsamos enter se envían los datos
letra_dni.addEventListener('keypress', function(e){
    if (e.keyCode == 13){
        comprobarDatos();
    }                                               
});


num_dni.addEventListener('keypress', function(e){
    if (e.keyCode == 13){
        comprobarDatos();
    }                                               
});

// Función: borrar los datos de entrada del usuario
function borrarEntrada(){
    num_dni.value = "";
    letra_dni.value = "";
}


//Función: comprobar los datos introducidos
function comprobarDatos() {
    
    var error_rellenarNum = "";
    var error_rellenarLetra = "";
    var error_caracteresNumero = "";
    var error_caracteresLetra = "";
    var error_numeroLetra = "";
    var error_letraNum = "";

    var numeros = /[0-9]/;
    var letras = /[A-Za-z]/;

    if (num_dni.value == "") {
        error_rellenarNum = " Debes rellenar el campo del número del DNI.";
        num_dni.value = "";
    } else { 
        if (num_dni.value.length != 8 ) { 
            error_caracteresNumero = " El número del DNI debe tener 8 caracteres.";
            num_dni.value = "";
        }
        else if (num_dni.value.match(letras)) { 
            error_numeroLetra = " El número del DNI no puede contener letras.";
            num_dni.value = "";
        }
    }
    
    if (letra_dni.value.length != 1) { 
        error_caracteresLetra = " La letra del DNI debe tener 1 caracter.";
        letra_dni.value = "";
    } else if (letra_dni.value.match(numeros)) {
        error_letraNum = " La letra del DNI no puede contener números.";
        letra_dni.value = "";
    }

   
    if(error_rellenarNum != "" || error_rellenarLetra != "" || error_caracteresNumero != "" || error_caracteresLetra != "" || error_numeroLetra != ""  || error_letraNum != "" ) {
        alert("¡Cuidado!" + error_rellenarNum + error_letraNum + error_caracteresNumero + error_rellenarLetra + error_caracteresLetra + error_numeroLetra);
    } else { 
        calcularLetra();
    }
}



function calcularLetra() {

    
    var resultado_obtenido = num_dni.value%23;
    var letra_obtenida = letra_dni.value;
    var H1_resultado = document.getElementById("resultado");
    var p_resultado = document.getElementById("coincide");

    for(var i = 0; i < letraNum.length; i++){
        if(i==resultado_obtenido){ 
            if (letraNum[i]==letra_obtenida.toUpperCase()) {
                H1_resultado.innerHTML = "La letra que encaja con tu número es " + letraNum[i];
                p_resultado.innerHTML = "¡Coincide con la obtenida!";
                p_resultado.style.color = "green";
                
            } else {
                H1_resultado.innerHTML = "La letra que encaja con tu número es " + letraNum[i];
                p_resultado.innerHTML = "No coincide con la obtenida.";
                p_resultado.style.color = "red";
               
            }
        }
    }
}

