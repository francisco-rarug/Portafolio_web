function ampliarImagen(id) {
    var imagen = document.getElementById(id);
    
    if (imagen.getAttribute('data-ampliado') == 'no') {
        
        imagen.style.width = "600px";
        imagen.style.height = "400px";
        
        imagen.setAttribute('data-ampliado', 'si');
    } else {
        
        imagen.style.width = "300px";
        imagen.style.height = "200px";
        
        imagen.setAttribute('data-ampliado', 'no');
    }

    setTimeout(function() {
        imagen.style.width = "300px";
        imagen.style.height = "200px";
    }, 5000);
}


var showVideoBtn = document.getElementById('showVideoBtn');

showVideoBtn.addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    
    if (videoContainer.style.display === "none" || videoContainer.style.display === "") {
        videoContainer.style.display = "block";
        showVideoBtn.innerText = "Ocultar Video";  
    } else {
        videoContainer.style.display = "none";
        showVideoBtn.innerText = "Ver Video en youtube"; 
    }
});
