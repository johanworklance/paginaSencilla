$(document).on("ready", configurarApp);

function configurarApp() {
    var canvas = document.getElementById("micanvas");
    var contexto = canvas.getContext("2d");
    canvas.width = screen.availWidth;
    dibujarFooter(canvas,contexto)
}

function dibujarFooter(canvas,contexto) {
    contexto.fillStyle = "rgba(0,0,0,0.8)";
    contexto.moveTo(0,0);
    contexto.quadraticCurveTo(0,-100,canvas.width, canvas.height);
    contexto.fill();
    
}