document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
});

function toggleDescription(button) {
    var card = button.parentNode;
    var description = card.querySelector(".skill__description");
    var allCards = document.querySelectorAll(".skill__card");

    // Cerrar todas las tarjetas excepto la actual
    allCards.forEach(function (currentCard) {
        var currentDescription = currentCard.querySelector(".skill__description");
        var currentButton = currentCard.querySelector(".skill__button");

        if (currentCard !== card) {
            currentCard.classList.remove("active");
            currentDescription.style.display = "none";
            currentButton.innerText = "Ver información";
        }
    });

    // Abrir o cerrar la tarjeta actual
    if (card.classList.contains("active")) {
        card.classList.remove("active");
        description.style.display = "none";
        button.innerText = "Ver información";
    } else {
        card.classList.add("active");
        description.style.display = "block";
        button.innerText = "Ocultar información";
    }
}


var profile = document.querySelector('.profile__image');
var profilePopup = document.getElementById('profile-popup');
var closeBtn = document.querySelector('.profile-popup .close');

profile.addEventListener('click', function () {
    profilePopup.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    profilePopup.style.display = 'none';
});

// Agregar evento de clic en el documento para cerrar la vista ampliada al hacer clic en cualquier parte de la pantalla
document.addEventListener('click', function (event) {
    // Verificar si se hizo clic fuera de la vista ampliada de la foto de perfil
    if (event.target !== profile && event.target !== profilePopup) {
        profilePopup.style.display = 'none';
    }
});

// Agregar interactividad a la navegación
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const sectionId = link.getAttribute('href').slice(1);
        const section = document.getElementById(sectionId);

        section.scrollIntoView({ behavior: "smooth" });
    });
});

const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const close = document.getElementsByClassName('close')[0];

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    });

    if (response.ok) {
        form.reset();
        popup.style.display = 'block';
    }
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 1800) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

