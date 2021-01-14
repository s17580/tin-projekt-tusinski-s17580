const samochodInput = document.getElementById("samochod");
const errorSamochod = document.getElementById("errorSamochod");
const numer_rejInput = document.getElementById("numer_rej");
const errorNumer_Rej = document.getElementById("errorNumer_Rej");
const rok_prodInput = document.getElementById("rok_prod");
const errorRok_Prod = document.getElementById("errorRok_Prod");
const rodzaj_naprawyInput = document.getElementById("rodzaj_naprawy");
const errorRodzaj_Naprawy = document.getElementById("errorRodzaj_Naprawy");
const data_odInput = document.getElementById("data_od");
const errorData_Od = document.getElementById("errorData_Od");
const data_doInput = document.getElementById("data_do");
const errorData_Do = document.getElementById("errorData_Do");
const koszt_naprawyInput = document.getElementById("koszt_naprawy");
const errorKoszt_Naprawy = document.getElementById("errorKoszt_Naprawy");
const nazwa_warsztatuInput = document.getElementById("nazwa_warsztatu");
const errorNazwa_Warsztatu = document.getElementById("errorNazwa_Warsztatu");
const adresInput = document.getElementById("adres");
const errorAdres = document.getElementById("errorAdres");

const errorsSummary = document.getElementById("errorsSummary");

function validateForm() {

    resetErrors([samochodInput, numer_rejInput,rok_prodInput,rodzaj_naprawyInput,data_odInput,data_doInput,koszt_naprawyInput,nazwa_warsztatuInput,adresInput],[errorSamochod,errorNumer_Rej,errorRok_Prod,errorRodzaj_Naprawy,errorData_Od,errorData_Do,errorKoszt_Naprawy,errorNazwa_Warsztatu,errorAdres], errorsSummary);
    let valid = true;
    if (!checkRequired(samochodInput.value)) {
      valid = false;
      samochodInput.classList.add("error-input");
      errorSamochod.innerText = "Pole jest wymagane";
	} 
	if (!checkRequired(numer_rejInput.value)) {
		valid = false;
		numer_rejInput.classList.add("error-input");
		errorNumer_Rej.innerText = "Pole jest wymagane";
	  }
	  if (!checkRequired(rok_prodInput.value)) {
		valid = false;
		rok_prodInput.classList.add("error-input");
		errorRok_Prod.innerText = "Pole jest wymagane";
	  }
	  if (!checkRequired(rodzaj_naprawyInput.value)) {
		valid = false;
		rodzaj_naprawyInput.classList.add("error-input");
		errorRodzaj_Naprawy.innerText = "Pole jest wymagane";
	  } 
	  let nowDate = new Date(),
    month = '' + (nowDate.getMonth() + 1),
    day = '' + nowDate.getDate(),
    year = nowDate.getFullYear();
	if (month.length < 2)
    month = '0' + month;
if (day.length < 2)
    day = '0' + day;
const nowString = [year, month, day].join('-');

if (!checkRequired(data_odInput.value)) {
    valid = false;
    data_odInput.classList.add("error-input");
    errorData_Od.innerText = "Pole jest wymagane";
} else if (checkDateIfAfter(data_odInput.value, nowString)) {
    valid = false;
    data_odInput.classList.add("error-input");
    errorData_Od.innerText = "Data nie może być z przyszłości";
} else if (checkRequired(data_doInput.value) && checkDate(data_doInput.value)
    && !checkDateIfAfter(data_doInput.value, data_odInput.value)) {
    //jeśli data od oraz data do jest poprawna, sprawdzamy kolejność dat
    valid = false;
    data_doInput.classList.add("error-input");
    errorData_Do.innerText = "Data do powinna być późniejsza niż data od";
}
if (!checkRequired(koszt_naprawyInput.value)) {
    valid = false;
    koszt_naprawyInput.classList.add("error-input");
    errorKoszt_Naprawy.innerText = "Pole jest wymagane";
} else if (!checkNumber(koszt_naprawyInput.value)) {
    valid = false;
    koszt_naprawyInput.classList.add("error-input");
    errorKoszt_Naprawy.innerText = "Pole powinno być liczbą";
} else if (!checkNumberRange(koszt_naprawyInput.value, 1.00, 1_000_000.99)) {
    valid = false;
    koszt_naprawyInput.classList.add("error-input");
    errorKoszt_Naprawy.innerText = "Pole powinno być liczbą w zakresie od 1.00 do 1000000.99";
}
if (!checkRequired(nazwa_warsztatuInput.value)) {
	valid = false;
	nazwa_warsztatuInput.classList.add("error-input");
	errorNazwa_Warsztatu.innerText = "Pole jest wymagane";
  } 
  if (!checkRequired(adresInput.value)) {
	valid = false;
	adresInput.classList.add("error-input");
	errorAdres.innerText = "Pole jest wymagane";
  } 

    // else if (!checkTextLengthRange(samochodInput.value, 2, 20)) {
    //   valid = false;
    //   samochodInput.classList.add("error-input");
    //   errorSamochod.innerText = "Pole powinno zawierać od 2 do 15 znaków";
	// }
	// if (!checkRequired(typInput.value)) {
	// 	valid = false;
	// 	typInput.classList.add("error-input");
	// 	errorTyp.innerText = "Pole jest wymagane";
	//   } else if (!checkTextLengthRange(typInput.value, 2, 15)) {
	// 	valid = false;
	// 	typInput.classList.add("error-input");
	// 	errorTyp.innerText = "Pole powinno zawierać od 2 do 15 znaków";
	//   }
	//   if (!checkRequired(numerRejestracyjnyInput.value)) {
	// 	valid = false;
	// 	numerRejestracyjnyInput.classList.add("error-input");
	// 	errorNumerRejestracyjny.innerText = "Pole jest wymagane";
	//   } else if (!checkTextLengthRange(numerRejestracyjnyInput.value, 2, 15)) {
	// 	valid = false;
	// 	numerRejestracyjnyInput.classList.add("error-input");
	// 	errorNumerRejestracyjny.innerText = "Pole powinno zawierać od 2 do 15 znaków";
	//   }
	//   if (!checkRequired(rokProdukcjiInput.value)) {
	// 	valid = false;
	// 	rokProdukcjiInput.classList.add("error-input");
	// 	errorRokProdukcji.innerText = "Pole jest wymagane";
	//   } else if (!checkTextLengthRange(rokProdukcjiInput.value, 4, 4)) {
	// 	valid = false;
	// 	rokProdukcjiInput.classList.add("error-input");
	// 	errorRokProdukcji.innerText = "Pole musi zawierać liczbę 4 cyfrową z przedziału 1900-2080";
	//   }
	//   if (!checkRequired(pojemnoscInput.value)) {
	// 	valid = false;
	// 	pojemnoscInput.classList.add("error-input");
	// 	errorPojemnosc.innerText = "Pole jest wymagane";
	//   } else if (!checkTextLengthRange(pojemnoscInput.value, 2, 4)) {
	// 	valid = false;
	// 	pojemnoscInput.classList.add("error-input");
	// 	errorPojemnosc.innerText = "Pole musi zawierać liczbę od 2 do 4 cyfr z przedziału 50-7000";
	//   }

    if (!valid) {
      errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
  }
