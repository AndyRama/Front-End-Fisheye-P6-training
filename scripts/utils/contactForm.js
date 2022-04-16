// Global Variables
const form = document.querySelector(".form");

const first = document.getElementById("firstName");
const last = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");

const errorFirst = document.getElementById("firstError");
const errorLast = document.getElementById("lastError");
const mail = document.getElementById("email");
const errorMessage = document.getElementById("messageError");

const formField = document.getElementById("form-field");

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
  if(first.value.trim().length == 0 ) {
    errorFirst.innerHTML ="XXXX";
    errorFirst.classList.add("errorStyle");
    first.classList.add("errorForm");
    return false ;
  } else if (first.value.trim().length < 2 )  {
    errorFirst.innerHTML ="XXXX";
    errorFirst.classList.add("errorStyle");
    first.classList.add("errorForm");
    return false ;
  } else {
    errorFirst.innerHTML ="";
    return true;
  }
}

// validation for input lastName
function validationLast() {
  if(last.value.trim().length == 0) {
    errorLast.innerHTML ="XXXX";
    errorLast.classList.add("errorStyle");
    last.classList.add("errorForm");
    return false ; 
  } else if (last.value.trim().length <2 ) {
    errorLast.innerHTML ="XXXX";
    errorLast.classList.add("errorStyle");
    errorLast.classList.add("errorForm");
    return false ; 
  } else {
    last.innerHTML = "";
    return true;
  }
}
// validation for input email
// validation for input message

//listen event on each for input
first.addEventListener("input", validationFirst);
last.addEventListener("input", validationLast);
//sending the forms
formField.addEventListener("submit", (event) => {
  event.preventDefault();
  validationFirst();
  validationLast();
  //Check value ok and submit form
  if(
    validationFirst() == true &
    validationLast() == true
  ) {
    // print value in console
    console.log(firstName.value);
    console.log(lastName.value);
  }
  //Reset form 
})



