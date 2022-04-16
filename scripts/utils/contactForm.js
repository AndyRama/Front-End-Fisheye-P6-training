// Global Variables
const form = document.querySelector(".form");

const fist = document.getElementById("firstName");
const last = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");

const errorFist = document.getElementById("firstError");
const errorLast = document.getElementById("lastError");
const mail = document.getElementById("email");
const errorMessage = document.getElementById("messageError");

const emailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
const emailError = document.getElementById("emailError");

// Open modal Contact
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

// Close modal Contact
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// reset form error
const cleanInput = () => {
  form.reset();

  // remove error form border
  const resetErrorBorder = document.querySelectorAll("input");
  resetErrorBorder.forEach((element) => {
      element.classList.remove("errorForm");
  });

  // remove error message
  const resetErrorMessage = document.querySelectorAll(".result");
  resetErrorMessage.forEach((message) => {
      message.innerHTML = "";
  });
};

// validation for input firstName
function validationFirst() {
  if(fistName.value.trim().length == 0 ) {
    errorFist.innerHTML ="XXXX";
    errorFist.classList.add("errorStyle");
    fistName.classList.add("errorForm");
    return false ;
  } else if (fistName.value.trim().length < 2 )  {
    errorFist.innerHTML ="XXXX";
    errorFist.classList.add("errorStyle");
    fistName.classList.add("errorForm");
    return false ;
  } else {
    errorFist.innerHTML ="";
    return true;
  }
}

// validation for input lastName
// validation for input email
// validation for input message
// submit form
// print value in console


