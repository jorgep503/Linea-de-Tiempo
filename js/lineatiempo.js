var url = "../cuentas/ayuda.html"; 
var height = "400"; 
var width = "600";
var top = "200"; 
var left = "300";
 var scrollbars = "1"; /* scrollbar */ 
 var toolbar = "1"; /* toolbar */ 
 var menubar = "1"; /* menu bar */ 
 var statusbar = "0"; 
 var resizeable = "1" /* allow user to resize window */
 var boton = document.getElementById("Button1") 

 function popUpGenerator() { 
 	var popUpString = ''; 
 	popUpString += 'height=' + height; 
 	popUpString += ',width=' + width; 
 	popUpString += ',top=' + top; 
 	popUpString += ',left=' + left; 
 	popUpString += ',scrollbars=' + scrollbars; 
 	popUpString += ',toolbar=' + toolbar; 
 	popUpString += ',menubar=' + menubar; 
 	popUpString += ',status=' + statusbar; 
 	popUpString += ',resizable=' + resizeable; 
 	window.open(url, 'newPopup', popUpString); 
 }

if(boton.addEventListener){ 
 boton.addEventListener("click", popUpGenerator, false); 
} 
else if(boton.attachEvent){ 
 boton.attachEvent("onclick", popUpGenerator); 
} 

function abrir_dialog() {
$("#dialog").dialog()
};