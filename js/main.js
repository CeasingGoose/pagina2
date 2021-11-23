const btnToggle = document.querySelector('icono');

btnToggle.addEvent.listener('click', function (){
	console.log('click')
	document.getElementById('menulateral').classList.toggle(activacion);
	console.log(document.getElementById('menulateral'));
} );

function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("contenido").style.marginLeft = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}