document.getElementById("username").innerText = "Savina";

const form = document.getElementById("messageForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("messageText").value;

  if (!name || !email || !phone || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  result.innerHTML = `
    <strong>Nama:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Phone:</strong> ${phone}<br>
    <strong>Pesan:</strong> ${message}
  `;

  form.reset();
});
