function init(){
var links;
var numlinks;
links = document.getElementsByTagName("span");
numlinks = links.length;
for(var i=0; i<numlinks; i++){
if(links[i].addEventListener){
links[i].addEventListener("click", function(event){
if(event.preventDefault){
event.preventDefault();
}
else if(event.stopPropagation){
event.stopPropagation();
}
else{
event.returnValue = false;
}
makerequest('content' + this.id + '.html','content');
return false;
}, false);
}
else if(links[i].attachEvent){
links[i].attachEvent("onclick", function(event){
if(event.preventDefault){
event.preventDefault();
}
else if(event.stopPropagation){
event.stopPropagation();
}
else{
	event.returnValue = false;
}
makerequest('content' + this.id + '.html','content');
return false;
});
}
}
makerequest('content1.html','content');
}

if(window.addEventListener){
window.addEventListener("load", init, false);
}
else if(window.attachEvent){
window.attachEvent("load", init);
}
