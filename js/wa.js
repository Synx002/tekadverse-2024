document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah refresh halaman
    
    // Ambil nilai dari setiap input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const project = document.getElementById("project").value;
    const budget = document.getElementById("budget").value;
    const date = document.getElementById("date").value;
    const comment = document.getElementById("comment").value;

    // Susun pesan untuk WhatsApp
    const message = `Hello, I'd like to create a comic with you! %0A
    - Name: ${name} %0A
    - Email: ${email} %0A
    - Project Title: ${project} %0A
    - Budget: ${budget} %0A
    - Start Date: ${date} %0A
    - Comments: ${comment}`;

    // Format nomor telepon tujuan (tanpa tanda plus dan 0 di depan nomor)
    const phone = "6285155353365"; // Ganti dengan nomor Anda

    // Redirect ke URL WhatsApp
    const whatsappURL = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappURL, "_blank"); // Buka di tab baru
});

