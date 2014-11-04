function iniciar(){ 
  var fechaini = document.getElementById(fechaini).value;
var fechafin = document.getElementById(fechafin).value;
var nomlinea = document.getElementById(nomlinea).value;
 var boton = document.getElementById("crear"); 
 if(boton.addEventListener){ 
 boton.addEventListener("click", crear, false); 
 } 
 else if(boton.attachEvent){ 
 boton.attachEvent("onclick", crear); 
 } 
} 

  function crear(){
    location.href = "../cuentas/verlinea.html";
         var nuevalinea = document.createElement("div");
         nuevalinea.className ="nuevalinea";
         var linea = document.createElement('img');
  linea.src = "../img/linea.png";
  linea.title = "Linea"
  nuevalinea.appendChild(linea);
         document.getElementById("lineas").appendChild(nuevalinea);
}
