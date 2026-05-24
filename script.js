//Particulas
particlesJS({
    "particles": {
        "number": {
            "value": 80,
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": ["#9fc5ff", "#b57bff", "#4dfff3"] },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.6,
                "opacity_min": 0.2
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.5
            }
        },
        "move": {
            "enable": true,
            "speed": 1.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": false }
        },
        "modes": {
            "grab": {
                "distance": 120,
                "line_linked": { "opacity": 0.3 }
            }
        }
    },
    "retina_detect": true
});
// FAQ
const faqHeaders = document.querySelectorAll(".faq-header");

faqHeaders.forEach(header => {
    header.addEventListener("click", () => {
        header.classList.toggle("active");

        const body = header.nextElementSibling;

        if (header.classList.contains("active")) {
            body.style.maxHeight = body.scrollHeight + "px";
            body.style.padding = "12px 18px";
        } else {
            body.style.maxHeight = 0;
            body.style.padding = "0 18px";
        }
    });
});
