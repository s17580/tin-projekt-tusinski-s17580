const emailInput = document.getElementById("email");
const errorUsername = document.getElementById("errorEmail");
const passwordInput = document.getElementById("password");
const errorPassword = document.getElementById("errorPassword");



const errorsSummary = document.getElementById("errorsSummary");

function validateForm() {

    resetErrors([emailInput, passwordInput],[errorEmail, errorPassword], errorsSummary);
    let valid = true;
    if (!checkRequired(emailInput.value)) {
      valid = false;
      emailInput.classList.add("error-input");
      errorEmail.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(emailInput.value, 5, 40)) {
      valid = false;
      emailInput.classList.add("error-input");
      errorEmail.innerText = "Pole powinno zawierać od 5 do 40 znaków";
  } else if (!checkEmail(emailInput.value)) {
      valid = false;
      emailInput.classList.add("error-input");
      errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
  }
  if (!checkRequired(passwordInput.value)) {
    valid = false;
    passwordInput.classList.add("error-input");
    errorPassword.innerText = "Pole jest wymagane";
  }else if (!checkTextLengthRange(passwordInput.value, 6, 12)) {
    valid = false;
    passwordInput.classList.add("error-input");
    errorPassword.innerText = "Hasło powinno zawierać min 6 znaków do max 12";
  } 
    if (!valid) {
      errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
  }
