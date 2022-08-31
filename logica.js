
// Declaracion de los Botones
var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var copiar = document.querySelector("#copiar");

// Declaracion de Funciones
function enviarEncriptar(){
    var usermjs = document.getElementById('usermjs').value;
    var showText = document.getElementById('showText');
    var mjsEncriptado = encriptarMjs(usermjs);
    if(usermjs != ""){
        document.getElementById("salida").style.display = "block";
        document.getElementById("nonfound").style.display = "none";
    }
    else{
        document.getElementById("salida").style.display = "none";
        document.getElementById("nonfound").style.display = "block";
    }
    showText.value = mjsEncriptado;
}

function enviardesencriptar(){
    var usermjs = document.getElementById('usermjs').value;
    var showText = document.getElementById('showText');
    var mjsEncriptado = desencriptarMjs(usermjs);
    if(usermjs != ""){
        document.getElementById("salida").style.display = "block";
        document.getElementById("nonfound").style.display = "none";
    }
    else{
        document.getElementById("salida").style.display = "none";
        document.getElementById("nonfound").style.display = "block";
    }
    showText.value = mjsEncriptado;
}

function encriptarMjs(usermjs){
    var mjsEncriptado = usermjs.replace("e", "entre");
    mjsEncriptado = mjsEncriptado.replace("i", "imes");
    mjsEncriptado = mjsEncriptado.replace("a", "ai");
    mjsEncriptado = mjsEncriptado.replace("o", "ober");
    mjsEncriptado = mjsEncriptado.replace("u", "ufat");
    return(mjsEncriptado);
}

function desencriptarMjs(usermjs){
    var mjsEncriptado = usermjs.replace("entre", "e");
    mjsEncriptado = mjsEncriptado.replace("imes", "i");
    mjsEncriptado = mjsEncriptado.replace("ai", "a");
    mjsEncriptado = mjsEncriptado.replace("ober", "o");
    mjsEncriptado = mjsEncriptado.replace("ufat", "u");
    return(mjsEncriptado);
}

function copiarmjs(){
    var content = document.getElementById('showText');
    content.select();
    document.execCommand('copy');
}
    
encriptar.onclick = enviarEncriptar;
desencriptar.onclick = enviardesencriptar;
copiar.onclick = copiarmjs;

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
