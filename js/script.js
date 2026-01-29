/* HI NAME */
document.getElementById("username").innerText = "Savina";

/* SCROLL ANIMATION */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* MESSAGE US FORM */
const form = document.getElementById("messageForm");
const resultBox = document.getElementById("result");
const resultText = document.getElementById("resultText");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("messageText").value;

    if (!name || !email || !phone || !message) {
        alert("Semua field wajib diisi!");
        return;
    }

    resultText.innerHTML = `
        Nama: ${name}<br>
        Email: ${email}<br>
        Phone: ${phone}<br>
        Pesan: ${message}
    `;

    resultBox.style.display = "block";
    form.reset();
});
