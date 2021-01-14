const ulicaInput = document.getElementById("ulica");
const errorUlica = document.getElementById("errorUlica");
const numer_lokaluInput = document.getElementById("numer_lokalu");
const errorNumer_Lokalu = document.getElementById("errorNumer_Lokalu");
const kod_pocztowyInput = document.getElementById("kod_pocztowy");
const errorKod_Pocztowy = document.getElementById("errorKod_Pocztowy");
const miastolInput = document.getElementById("miasto");
const errorMaiasto = document.getElementById("errorMiasto");

const errorsSummary = document.getElementById("errorsSummary");

function validateForm() {

    resetErrors([ulicaInput,numer_lokaluInput,kod_pocztowyInput,miastolInput],[errorUlica,errorNumer_Lokalu,errorKod_Pocztowy,errorMaiasto], errorsSummary);
    let valid = true;
    if (!checkRequired(ulicaInput.value)) {
      valid = false;
      ulicaInput.classList.add("error-input");
      errorUlica.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(ulicaInput.value, 2, 35)) {
      valid = false;
      ulicaInput.classList.add("error-input");
      errorUlica.innerText = "Pole powinno zawierać od 2 do 35 znaków";
	}
	if (!checkRequired(numer_lokaluInput.value)) {
		valid = false;
		numer_lokaluInput.classList.add("error-input");
		errorNumer_Lokalu.innerText = "Pole jest wymagane";
	  } else if (!checkTextLengthRange(numer_lokaluInput.value, 1, 6)) {
		valid = false;
		numer_lokaluInput.classList.add("error-input");
		errorNumer_Lokalu.innerText = "Pole powinno zawierać od 1 do 6 znaków";
      }
      if (!checkRequired(kod_pocztowyInput.value)) {
		valid = false;
		kod_pocztowyInput.classList.add("error-input");
		errorKod_Pocztowy.innerText = "Pole jest wymagane";
	  } else if (!checkTextLengthRange(kod_pocztowyInput.value, 2, 8)) {
		valid = false;
		kod_pocztowyInput.classList.add("error-input");
		errorKod_Pocztowy.innerText = "Pole powinno zawierać od 2 do 8 znaków";
      }
      if (!checkRequired(miastolInput.value)) {
		valid = false;
		miastolInput.classList.add("error-input");
		errorMaiasto.innerText = "Pole jest wymagane";
	  } else if (!checkTextLengthRange(miastolInput.value, 2, 35)) {
		valid = false;
		miastolInput.classList.add("error-input");
		errorMaiasto.innerText = "Pole powinno zawierać od 2 do 35 znaków";
      }
      
    if (!valid) {
      errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
  }
