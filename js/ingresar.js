function iniciar(){ 
 var boton = document.getElementById("validacion"); 
 if(boton.addEventListener){ 
 boton.addEventListener("click", validacion, false); 
 } 
 else if(boton.attachEvent){ 
 boton.attachEvent("onclick", validacion); 
 } 
} 

function validacion() {
valor = document.getElementById("nombre").value;
  if (/^([a-z ñáéíóú]{2,60})$/i) {
    // Si no se cumple la condicion...
    alert("Solo debe ingresar letras"); 
    return false;
  }
  valor = document.getElementById("apellido").value;
  if (/^([a-z ñáéíóú]{2,60})$/i) {
    // Si no se cumple la condicion...
    alert("Solo debe ingresar letras"); 
    return false;
  }
  
}
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else{
window.attachEvent("onload", iniciar);
}