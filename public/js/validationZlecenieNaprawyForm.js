const carSelect = document.getElementById("car");
const errorCar = document.getElementById("errorCar");
const workshopSelect = document.getElementById("workshop");
const errorWorkshop = document.getElementById("errorWorkshop");
const repairTypeSelect = document.getElementById("repairType");
const errorRepairType = document.getElementById("errorRepairType");
const errorsSummary = document.getElementById("errorsSummary");

function validateForm() {
  resetErrors(
    [carSelect, workshopSelect, repairTypeSelect],
    [errorCar, errorWorkshop, errorRepairType],
    errorsSummary
  );
  let valid = true;

  if (!checkRequired(carSelect.value)) {
    valid = false;
    carSelect.classList.add("error-input");
    errorCar.innerText = "Pole jest wymagane";
  }

  if (!checkRequired(workshopSelect.value)) {
    valid = false;
    workshopSelect.classList.add("error-input");
    errorWorkshop.innerText = "Pole jest wymagane";
  }

  if (!checkRequired(repairTypeSelect.value)) {
    valid = false;
    repairTypeSelect.classList.add("error-input");
    errorRepairType.innerText = "Pole jest wymagane";
  }

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
    errorsSummary.style.display = "none";
  }

  return valid;
}
