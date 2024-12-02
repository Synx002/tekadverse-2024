/* GSAP */
function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue === 100) {
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 100) + 20;  // Lebih cepat
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

startLoader();

document.addEventListener('DOMContentLoaded', function () {
    const counter = document.querySelector('.counter');

    gsap.to(counter, {
        delay: 1.5,  // Lebih cepat
        duration: 0.2,  // Durasi lebih pendek
        opacity: 0,
        onComplete: function () {
            counter.style.visibility = 'hidden';
        }
    });
});

gsap.to(".bar", 1, {  // Durasi lebih cepat
    delay: 2,
    height: 0,
    stagger: {
        amount: 0.3,  // Lebih cepat
    },
    ease: "power4.inOut",
});

gsap.from(".logo-container", 1, {  // Durasi lebih cepat
    delay: 2,
    x: -400,
    stagger: {
        amount: 0.3,  // Lebih cepat
    },
    ease: "power4.inOut",
});

gsap.from(".hero-title", 1, {  // Durasi lebih cepat
    delay: 2.5,
    x: -400,
    ease: "power4.inOut",
});

gsap.from("nav", 1, {  // Durasi lebih cepat
    delay: 3,
    x: -400,
    ease: "power4.inOut",
});

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.overlay');

    gsap.to(overlay, {
        delay: 5,  // Lebih cepat
        duration: 0.2,  // Durasi lebih pendek
        opacity: 0,
        onComplete: function () {
            overlay.style.visibility = 'hidden';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
    window.scrollTo(0, 0);
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
