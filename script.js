document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message-box").value.trim();

  if (name && email && message) {
    document.getElementById("confirmation").textContent = "✅ Message envoyé (pas vraiment, c'est une démo)";
  } else {
    document.getElementById("confirmation").textContent = "⚠️ Merci de remplir tous les champs.";
  }
});
