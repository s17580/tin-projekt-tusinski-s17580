const usernameInput = document.getElementById("username");
const errorUsername = document.getElementById("errorUsername");
const passwordInput = document.getElementById("password");
const errorPassword = document.getElementById("errorPassword");
const password      =document.getElementById('password');
const eye           =document.getElementById('eye');
const crossedEye    =document.getElementById('crossedEye');

const errorsSummary = document.getElementById("errorsSummary");

function validateForm() {

    resetErrors([usernameInput, passwordInput],[errorUsername, errorPassword], errorsSummary);
    let valid = true;
    if (!checkRequired(usernameInput.value)) {
      valid = false;
      usernameInput.classList.add("error-input");
      errorUsername.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(usernameInput.value, 2, 15)) {
      valid = false;
      usernameInput.classList.add("error-input");
      errorUsername.innerText = "Pole powinno zawierać od 2 do 15 znaków";
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
