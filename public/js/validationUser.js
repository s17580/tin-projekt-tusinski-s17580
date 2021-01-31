const emailInput = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");
const passwordInput = document.getElementById("password");
const errorPassword = document.getElementById("errorPassword");
const roleSelect = document.getElementById("role");
const errorRole = document.getElementById("errorRole");

const errorsSummary = document.getElementById("errorsSummary");

function validateForm() {
  resetErrors(
    [emailInput, passwordInput, roleSelect],
    [errorEmail, errorPassword, errorRole],
    errorsSummary
  );
  let valid = true;
  if (!checkRequired(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "Pole jest wymagane";
  }
  if (!checkEmail(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
  }

  if (!checkRequired(roleSelect.value)) {
    valid = false;
    roleSelect.classList.add("error-input");
    errorRole.innerText = "Pole jest wymagane";
  }

  if (passwordInput.value !== "" && !checkTextLengthRange(passwordInput.value, 6, 12)) {
    valid = false;
    passwordInput.classList.add("error-input");
    errorPassword.innerText = "Hasło powinno zawierać od 6 do 12 znaków";
  }

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
    errorsSummary.style.display = "block";
  } else {
    errorsSummary.style.display = "none";
  }

  return valid;
}
