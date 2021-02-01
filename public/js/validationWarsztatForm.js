const nazwaInput = document.getElementById("nazwa");
const errorNazwa = document.getElementById("errorNazwa");
const telefonInput = document.getElementById("telefon");
const errorTelefon = document.getElementById("errorTelefon");
const emailInput = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");
const adresSelect = document.getElementById("adres");
const errorAdres = document.getElementById("errorAdres");

const errorsSummary = document.getElementById("errorsSummary");

function validateForm() {
  resetErrors(
    [nazwaInput, telefonInput, emailInput, adresSelect],
    [errorNazwa, errorTelefon, errorEmail, errorAdres],
    errorsSummary
  );
  let valid = true;
  if (!checkRequired(nazwaInput.value)) {
    valid = false;
    nazwaInput.classList.add("error-input");
    errorNazwa.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(nazwaInput.value, 2, 30)) {
    valid = false;
    nazwaInput.classList.add("error-input");
    errorNazwa.innerText = "Pole powinno zawierać od 2 do 30 znaków";
  }
  if (!checkRequired(telefonInput.value)) {
    valid = false;
    telefonInput.classList.add("error-input");
    errorTelefon.innerText = "Pole jest wymagane";
  } else if (!checkPhone(telefonInput.value)) {
    valid = false;
    telefonInput.classList.add("error-input");
    errorTelefon.innerText = "Pole powinno zawierać 9 cyfrowy numer telefonu";
  }
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

  if (!checkRequired(adresSelect.value)) {
    valid = false;
    adresSelect.classList.add("error-input");
    errorAdres.innerText = "Pole jest wymagane";
  }

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
    errorsSummary.style.display = "block";
  }

  return valid;
}
