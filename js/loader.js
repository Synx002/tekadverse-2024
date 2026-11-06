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

// Cegah browser memulihkan posisi scroll lama, dan hapus window.onbeforeunload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function () {
    const counter = document.querySelector('.counter');
    const overlay = document.querySelector('.overlay');

    // 'instant' wajib karena html memakai scroll-smooth
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Kunci scroll selama loader berjalan
    document.documentElement.style.overflow = 'hidden';

    gsap.to(counter, {
        delay: 1.5,
        duration: 0.2,
        opacity: 0,
        onComplete: () => { counter.style.display = 'none'; }
    });

    gsap.to(overlay, {
        delay: 3,
        duration: 0.2,
        opacity: 0,
        onComplete: () => {
            overlay.style.display = 'none';
            document.documentElement.style.overflow = ''; // buka kunci scroll
            ScrollTrigger.refresh();                      // hitung ulang sekali saja
        }
    });

    if (window.AOS) AOS.init(); // aman kalau AOS tidak dimuat
});
