gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

document.querySelectorAll('.parallax-wrap').forEach((wrap) => {
  const img = wrap.querySelector('.parallax-img');
  if (!img) return;

  gsap.fromTo(
    img,
    { yPercent: -12 },
    {
      yPercent: 12,
      ease: 'none',
      force3D: true,
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
});

// Hitung ulang posisi setelah gambar & font selesai dimuat
window.addEventListener('load', () => ScrollTrigger.refresh());

// Fallback untuk elemen .parallax (jika ada)
document.querySelectorAll('.parallax').forEach((section) => {
  gsap.to(section, {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});

// Select the cursor wrapper (jika ada)
const cursorWrapper = document.querySelector('.cursor-wrapper');

// Track mouse movement and update cursor position
if (cursorWrapper) {
  document.addEventListener('mousemove', (e) => {
    cursorWrapper.style.left = `${e.clientX}px`;
    cursorWrapper.style.top = `${e.clientY}px`;
  });
}

const heroSection = document.querySelector('.hero-section');
const shadow = document.querySelector('.shadow');

if (heroSection && shadow) {
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
}

// heroSection.addEventListener('mouseleave', () => {
//     // Reset transformasi saat kursor keluar dari hero-section
//     shadow.style.transform = 'translate3d(0, 0, 0)';
// });

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


// Elemen HTML yang digunakan
const menuButton = document.getElementById('menuButton');
const menuOverlay = document.getElementById('menuOverlay');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const closeButton = document.getElementById('closeButton');
const menuText = document.getElementById('menuText');
const header = document.querySelector('header'); // Mengambil elemen header
const menuLinks = document.querySelectorAll(".menu-link"); // Semua tautan dalam overlay

// Fungsi untuk toggle menu
function toggleMenu() {
  // Toggle visibility of the overlay menu
  menuOverlay.classList.toggle('hidden');
  menuOverlay.classList.toggle('show'); // Show the overlay when active

  // Toggle the menu text between "Menu" and "Close"
  menuText.textContent = menuOverlay.classList.contains('show') ? 'Close' : 'Menu';

  // Toggle active class for the hamburger icon (to trigger animation)
  menuButton.classList.toggle('active');

  // Adjust z-index of the hamburger icon based on the menu overlay visibility
  if (menuOverlay.classList.contains('show')) {
    menuButton.style.zIndex = '30'; // Hamburger icon above the overlay
    header.classList.add('sticky'); // Make header sticky when overlay is active
  } else {
    menuButton.style.zIndex = 'auto'; // Reset z-index when overlay is hidden
    header.classList.remove('sticky'); // Remove sticky class when overlay is hidden
  }
}

// Tambahkan event listener untuk tombol menu dan tombol close
menuButton.addEventListener('click', toggleMenu);
if (closeButton) closeButton.addEventListener('click', toggleMenu);

// Fungsi untuk menutup menu saat tautan diklik
function closeMenuOnClick() {
  menuOverlay.classList.add('hidden'); // Sembunyikan overlay
  menuOverlay.classList.remove('show'); // Hapus kelas show
  menuButton.classList.remove('active'); // Reset tombol menu
  menuText.textContent = 'Menu'; // Ubah teks kembali ke "Menu"
  header.classList.remove('sticky'); // Hapus sticky header
  menuButton.style.zIndex = 'auto'; // Reset z-index tombol menu
}

// Tambahkan event listener ke setiap tautan dalam menu overlay
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenuOnClick);
});

// Animasi flipping menggunakan jQuery
$('#flipto').on("click", function (event) {
  event.preventDefault();

  var face = $(this).data("face");

  if (face == "bottom") {
    $(".cube").removeClass("flip-to-top").addClass("flip-to-bottom");
    $(this).data("face", "top").text("Flip: to top");
  } else {
    $(".cube").removeClass("flip-to-bottom").addClass("flip-to-top");
    $(this).data("face", "bottom").text("Flip: to bottom");
  }
});

document.fonts.ready.then(() => {
  document.querySelectorAll(".particle-text").forEach((element) => {
    const text = element.dataset.text;
    const fontSize = 16;
    const fontFamily = '"Bricolage Grotesque", sans-serif';

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    ctx.font = `${fontSize}px ${fontFamily} `;

    const textWidth = Math.ceil(ctx.measureText(text).width);
    const textHeight = Math.ceil(fontSize * 1.8);
    const dpr = window.devicePixelRatio || 1;

    canvas.width = textWidth * dpr;
    canvas.height = textHeight * dpr;
    canvas.style.width = `${textWidth} px`;
    canvas.style.height = `${textHeight} px`;

    ctx.scale(dpr, dpr);
    ctx.font = `${fontSize}px ${fontFamily} `;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(text, 0, textHeight / 2);

    const image = ctx.getImageData(
      0, 0, canvas.width, canvas.height
    );

    // Simpan posisi piksel teks
    const points = [];

    for (let y = 0; y < canvas.height; y += 2) {
      for (let x = 0; x < canvas.width; x += 2) {
        const index = (y * canvas.width + x) * 4;

        if (image.data[index + 3] > 100) {
          points.push({
            x: x / dpr,
            y: y / dpr
          });
        }
      }
    }

    // Bersihkan teks asli
    ctx.clearRect(0, 0, textWidth, textHeight);

    // Sebarkan piksel menjadi partikel
    points.forEach((point) => {
      const spreadX = (Math.random() - 0.5) * 5;
      const spreadY = (Math.random() - 0.5) * 5;
      const radius = Math.random() * 0.9 + 0.3;
      const opacity = Math.random() * 0.65 + 0.35;

      ctx.beginPath();
      ctx.arc(
        point.x + spreadX,
        point.y + spreadY,
        radius,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
    });

    element.replaceChildren(canvas);
  });
});

