const emailInput = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");
const passwordInput = document.getElementById("password");
const errorPassword = document.getElementById("errorPassword");
const password2Input = document.getElementById("password2");
const errorPassword2 = document.getElementById("errorPassword2");


const errorsSummary = document.getElementById("errorsSummary");

function validateForm() {

    resetErrors([emailInput, passwordInput,password2Input],[errorEmail,errorPassword,errorPassword2], errorsSummary);
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
} else if (!checkTextLengthRange(passwordInput.value, 6, 12)) {
  valid = false;
  passwordInput.classList.add("error-input");
  errorPassword.innerText = "Pole powinno zawierać od 6 do 12 znaków";
}
  if (!checkRequired(password2Input.value)) {
    valid = false;
    password2Input.classList.add("error-input");
    errorPassword2.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(password2Input.value, 6, 12)) {
    valid = false;
    password2Input.classList.add("error-input");
    errorPassword2.innerText = "Pole powinno zawierać od 6 do 12 znaków";
}
    if (!valid) {
      errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
  }
