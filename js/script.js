
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


    // Select the cursor wrapper element
const cursorWrapper = document.querySelector('.cursor-wrapper');

// Move the cursor wrapper with the mouse
document.addEventListener('mousemove', (e) => {
  cursorWrapper.style.left = `${e.pageX}px`;
  cursorWrapper.style.top = `${e.pageY}px`;
});

// Generate circular text effect
const text = document.getElementById('text-cursor');
text.innerHTML = text.textContent.replace(/\S/g, "<span class='cursor-span'>$&</span>");

const elements = document.querySelectorAll('.cursor-span');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.transform = `rotate(${i * (360 / elements.length)}deg)`; // Dynamically distribute rotation
}
