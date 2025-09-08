// Show Bootstrap Toast with countdown progress
function showToast(message, type = "danger", duration = 3000) {
  const toastEl = document.getElementById("liveToast");
  const toastMessage = document.getElementById("toastMessage");
  const toastIcon = document.getElementById("toastIcon");
  const toastProgress = document.getElementById("toastProgress");

  // Update pesan
  toastMessage.textContent = message;

  // Tentukan ikon sesuai tipe
  let iconClass = "fa-info-circle";
  switch (type) {
    case "success":
      iconClass = "fa-check-circle";
      break;
    case "danger":
      iconClass = "fa-times-circle";
      break;
    case "warning":
      iconClass = "fa-exclamation-triangle";
      break;
    case "info":
      iconClass = "fa-info-circle";
      break;
  }

  // Update ikon
  toastIcon.className = `fas ${iconClass}`;

  // Update background sesuai tipe
  toastEl.className = `toast align-items-center text-bg-${type} border-0`;

  // Reset progress bar
  toastProgress.style.transition = "none";
  toastProgress.style.width = "100%";
  void toastProgress.offsetWidth; // reflow hack

  // Animasi progress bar
  toastProgress.style.transition = `width ${duration}ms linear`;
  toastProgress.style.width = "0%";

  // Tampilkan toast
  const toast = new bootstrap.Toast(toastEl, { delay: duration });
  toast.show();
}

// Password Generator
function generatePassword() {
  const length = document.getElementById("panjangPassword").value || 12;

  // Validasi minimal panjang password
  if (length < 4) {
    showToast("Panjang password minimal 4 karakter!", "danger", 4000);
    return;
  }

  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  const passwordInput = document.getElementById("password");
  passwordInput.value = password;
  checkStrength(password);

  showToast("Password berhasil digenerate!", "success", 2500);
}

// Save (Copy to Clipboard)
function savePassword() {
  const passwordInput = document.getElementById("password");
  if (!passwordInput.value) {
    showToast("Generate password dulu sebelum disalin!", "warning", 3000);
    return;
  }

  passwordInput.select();
  document.execCommand("copy");
  showToast("Password berhasil disalin ke clipboard!", "info", 2500);
}

// Toggle Show/Hide Password
document.getElementById("togglePassword").addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
});

// Password Strength Meter
function checkStrength(password) {
  const strengthBar = document.getElementById("strengthBar");
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  switch (strength) {
    case 0:
    case 1:
      strengthBar.style.width = "25%";
      strengthBar.className = "progress-bar bg-danger";
      strengthBar.innerText = "Weak";
      break;
    case 2:
      strengthBar.style.width = "50%";
      strengthBar.className = "progress-bar bg-warning";
      strengthBar.innerText = "Medium";
      break;
    case 3:
      strengthBar.style.width = "75%";
      strengthBar.className = "progress-bar bg-info";
      strengthBar.innerText = "Strong";
      break;
    case 4:
      strengthBar.style.width = "100%";
      strengthBar.className = "progress-bar bg-success";
      strengthBar.innerText = "Very Strong";
      break;
  }
}

// Theme Toggle
const body = document.body;
const toggleBtn = document.getElementById("themeToggle");
const icon = toggleBtn.querySelector("i");

function setTheme(dark) {
  if (dark) {
    body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  setTheme(true);
}

toggleBtn.addEventListener("click", () => {
  setTheme(!body.classList.contains("dark-mode"));
});
