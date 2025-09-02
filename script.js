let password = document.getElementById("password");
let panjangPassword = document.getElementById("panjangPassword");
let togglePassword = document.getElementById("togglePassword");
let eyeIcon = document.getElementById("eyeIcon");

function generatePassword() {
  const length = parseInt(panjangPassword.value);
  if (isNaN(length) || length <= 0) {
    alert("Please enter a valid password length.");
    return;
  }

  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    generatedPassword += charset[randomIndex];
  }
  password.value = generatedPassword;
}

function savePassword() {
  const passwordValue = password.value;
  if (!passwordValue) {
    alert("Please generate a password first.");
    return;
  }

  // Simpan ke clipboard
  navigator.clipboard
    .writeText(passwordValue)
    .then(function () {
      alert("Password berhasil disalin ke clipboard!");
    })
    .catch(function () {
      alert("Gagal menyalin password ke clipboard.");
    });
}

// Event listener untuk toggle show/hide password
document.addEventListener("DOMContentLoaded", function () {
  togglePassword.addEventListener("click", function () {
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // Ganti icon mata
    if (type === "text") {
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  });
});
