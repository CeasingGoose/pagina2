var nombre = prompt('Hola, cual es tu nombre?',"")
alert("Es un gusto tenerte aqui "+nombre+"!")
var pregunta = confirm("Deseas visitar mi pagina?")
if(pregunta){
	alert("Deseas ir al siito mas rapido?")
	window.location = "index.html";
}else{
	alert("Quizas en otro momento")
}