/* Send Email */
function sendEmail() {
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var message = document.getElementById('message').value;
    var role = document.querySelector('input[name="role"]:checked') ? document.querySelector('input[name="role"]:checked').value : '';
  
    var emailBody = 'Nama: ' + name + '%0A' + 'Story Title: ' + title  + '%0a' + 'Comic Format: ' + role + '%0A' + message;
    
    var mailtoLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=tekadverse@gmail.com&su=Form Submission&body=' + emailBody;
  
    window.open(mailtoLink, '_blank');
} 
/* Hover */
const buttons = document.querySelectorAll('.cta');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#ebcf93e2'; // Color when hovered
});

button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#b8b8b8e2'; // Intermediate color
        setTimeout(() => {
            button.style.backgroundColor = 'transparent'; // Original color
        }, 100); // Change back to original color after 300ms
    });
});

/* GSAP */

function startLoader(){
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter(){
        if(currentValue === 100) {
            return;
        }


        currentValue += Math.floor(Math.random() * 10) + 1;

        if(currentValue > 100){
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

startLoader();

document.addEventListener('DOMContentLoaded', function () {
    const counter = document.querySelector('.counter');

    gsap.to(counter, {
        delay: 3.5,
        duration: 0.25,
        opacity: 0,
        onComplete: function() {
            counter.style.visibility = 'hidden';
        }
    });
});


gsap.to(".bar", 1.5,{
    delay: 3.5,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.from(".logo-container", 1.5,{
    delay: 4,
    x: -400,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.from(".hero-title", 2,{
    delay: 4.5,
    x: -400,
    ease: "power4.inOut",
});

gsap.from("nav", 2,{
    delay: 5,
    x: -400,
    ease: "power4.inOut",
});

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.overlay');

    gsap.to(overlay, {
        delay: 6,
        duration: 0.25,
        opacity: 0,
        onComplete: function() {
            overlay.style.visibility = 'hidden';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
window.scrollTo(0, 0);
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

/* img list */

document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll('.list-con ul li');
    var singleLineHeight = 57; // Sesuaikan nilai ini dengan tinggi satu baris teks pada elemen list Anda

    listItems.forEach(function(item) {
        var itemHeight = item.offsetHeight;

        // Debugging log
        console.log('Item text:', item.textContent);
        console.log('Item height:', itemHeight);

        // Membandingkan tinggi elemen list dengan nilai singleLineHeight
        if (itemHeight <= singleLineHeight) {
            item.classList.add('single-line');
            console.log('Multi-line detected');
        } else {
            item.classList.add('multi-line');
            console.log('Single-line detected');
        }
    });
});
