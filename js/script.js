
  // JavaScript for toggle menu
  const menuButton = document.getElementById('menuButton');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuText = document.getElementById('menuText');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeButton = document.getElementById('closeButton');

  function toggleMenu() {
    menuOverlay.classList.toggle('hidden');
    menuText.textContent = menuOverlay.classList.contains('hidden') ? 'Menu' : 'Close';
    hamburgerIcon.classList.toggle('fa-bars');
    hamburgerIcon.classList.toggle('fa-times');
  }

  menuButton.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', toggleMenu);

  document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.custom-dropdown');
  
    dropdown.addEventListener('change', () => {
            dropdown.classList.add('selected'); // Tambahkan class 'selected' ketika ada pilihan
        });
    });
  
    document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.querySelector('.custom-date');
  
    dateInput.addEventListener('change', () => {
            dateInput.classList.add('selected'); // Tambahkan class 'selected' saat tanggal dipilih
        });
    });


  // Select the cursor wrapper eleme
// Select the cursor wrapper
const cursorWrapper = document.querySelector('.cursor-wrapper');

// Track mouse movement and update cursor position
document.addEventListener('mousemove', (e) => {
    cursorWrapper.style.left = `${e.clientX}px`;
    cursorWrapper.style.top = `${e.clientY}px`;
});


const heroSection = document.querySelector('.hero-section');
const shadow = document.querySelector('.shadow');

heroSection.addEventListener('mousemove', (e) => {
    // Dapatkan posisi pusat elemen image-container
    const rect = heroSection.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Hitung jarak kursor dari pusat hero-section
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    // Terapkan transformasi pada bayangan
    shadow.style.transform = `translate3d(${-offsetX / 15}px, ${-offsetY / 15}px, 0)`;
});

heroSection.addEventListener('mouseleave', () => {
    // Reset transformasi saat kursor keluar dari hero-section
    shadow.style.transform = 'translate3d(0, 0, 0)';
});

function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;

  // Gandakan konten marquee
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  setInterval(function () {
    // Pindahkan elemen ke kiri
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 16); // Waktu 16ms untuk performa smooth (60 FPS)
}

// Jalankan marquee setelah semua konten dimuat
window.addEventListener('load', () => Marquee('.marquee', 1));


gsap.registerPlugin(ScrollTrigger);

const artworks = document.querySelectorAll(".artwork");

// GSAP ScrollTrigger untuk membuat section tetap stay
ScrollTrigger.create({
  trigger: ".artwork-section", // Elemen yang diamati
  start: "top top", // Mulai saat section mencapai atas viewport
  end: "+=300%", // Section tetap stay selama 300% tinggi viewport
  pin: true, // Section tetap stay
  scrub: true, // Animasi smooth saat scroll
});

// GSAP untuk mengganti artwork berdasarkan scroll
gsap.to({}, {
  scrollTrigger: {
    trigger: ".artwork-section",
    start: "top top",
    end: "+=300%", // Selama scroll section ini
    scrub: true,
    onUpdate: (self) => {
      const index = Math.floor(self.progress * artworks.length); // Hitung index berdasarkan progress
      updateActiveArtwork(index);
    },
  },
});

function updateActiveArtwork(index) {
  // Reset semua artwork
  artworks.forEach((art, i) => {
    art.classList.remove("active");
  });

  // Aktifkan artwork berdasarkan index
  artworks[index].classList.add("active");
}

// Inisialisasi: Aktifkan artwork pertama
updateActiveArtwork(0);

// Select all parallax-text elements
const texts = document.querySelectorAll('.parallax-text');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  texts.forEach((text) => {
    const section = text.parentElement.parentElement; // Parent section
    const sectionTop = section.offsetTop; // Top of the section
    const sectionHeight = section.offsetHeight;
    const scrollOffset = window.pageYOffset - sectionTop; // Scroll offset relative to the section

    // Calculate movement based on scroll direction
    if (scrollOffset >= 0 && scrollOffset <= sectionHeight) {
      const pullStrength = scrollOffset * 0.1; // Adjust pull strength
      gsap.to(text, {
        y: scrollOffset > 0 ? pullStrength : -pullStrength, // Move up or down
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  });
});



