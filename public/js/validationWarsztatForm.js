const nazwa_warsztatInput = document.getElementById("nazwa_warsztat");
const errorNazwa_Warsztat = document.getElementById("errorNazwa_Warsztat");
const telefonInput = document.getElementById("telefon");
const errorTelefon = document.getElementById("errorTelefon");
const emailInput = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");

const errorsSummary = document.getElementById("errorsSummary");

function validateForm() {

    resetErrors([nazwa_warsztatInput,telefonInput,emailInput],[errorNazwa_Warsztat,errorTelefon,errorEmail], errorsSummary);
    let valid = true;
    if (!checkRequired(nazwa_warsztatInput.value)) {
      valid = false;
      nazwa_warsztatInput.classList.add("error-input");
      errorNazwa_Warsztat.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nazwa_warsztatInput.value, 2, 30)) {
      valid = false;
      nazwa_warsztatInput.classList.add("error-input");
      errorNazwa_Warsztat.innerText = "Pole powinno zawierać od 2 do 30 znaków";
	}
	if (!checkRequired(telefonInput.value)) {
		valid = false;
		telefonInput.classList.add("error-input");
		errorTelefon.innerText = "Pole jest wymagane";
	  } else if (!checkTextLengthRange(telefonInput.value, 3, 25)) {
		valid = false;
		telefonInput.classList.add("error-input");
		errorTelefon.innerText = "Pole powinno zawierać od 3 do 25 znaków";
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
    
	
    if (!valid) {
      errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
  }
