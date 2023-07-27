function ampliarImagen(id) {
    var imagen = document.getElementById(id);
    imagen.style.width = "600px";
    imagen.style.height = "400px";

    setTimeout(function() {
        imagen.style.width = "300px";
        imagen.style.height = "200px";
    }, 5000);
}
