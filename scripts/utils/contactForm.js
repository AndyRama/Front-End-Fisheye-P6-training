// Global Variables
const form = document.querySelector(".form");

const first = document.getElementById("firstName");
const errorFirst = document.getElementById("firstError");
const last = document.getElementById("lastName");
const errorLast = document.getElementById("lastError");
const message = document.getElementById("message");
const errorMessage = document.getElementById("messageError");

const formField = document.getElementById("form-field");

const mail = document.getElementById("email");
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
  //reset error first
  errorFirst.innerHTML="";
  errorFirst.classList.remove("errorStyle");
  first.classList.remove("errorForm");

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
  // reset error last
  errorLast.innerHTML="";
  errorLast.classList.remove("errorStyle");
  last.classList.remove("errorForm");

  if(last.value.trim().length == 0) {
    errorLast.innerHTML ="XXXX";
    errorLast.classList.add("errorStyle");
    last.classList.add("errorForm");
    return false ; 
  } else if (last.value.trim().length <2 ) {
    errorLast.innerHTML ="XXXX";
    errorLast.classList.add("errorStyle");
    last.classList.add("errorForm");
    return false ; 
  } else {
    last.innerHTML = "";
    return true;
  }
}

// validation for input email
function validationEmail() {
  // reset error email
  mail.innerHTML="";
  emailError.classList.remove("errorStyle");
  emailError.classList.remove("errorForm");

  if(mail.value == "") {
    emailError.innerHTML ='email Blank';
    emailError.classList.add("errorStyle");
    mail.classList.add("errorForm");
    return false ;
  } else if (!mail.match(emailRegex )) {
    emailError.innerHTML ='email not valide';
    emailError.classList.add("errorStyle");
    mail.classList.add("errorForm");
    return false ;
  } else {
    emailError.innerHTML ="";
    return true;
  }
}

// validation for input message
function validationMessage() {
  // reset error message
  message.innerHTML="";
  errorMessage.classList.remove("errorStyle");
  errorMessage.classList.remove("errorForm");
  
  if(message.value = "") {
    message.innerHTML="Message Blank";
    errorMessage.classList.add("errorStyle");
    errorMessage.classList.add("errorForm");
    return false;
  } else {
    errorMessage.innerHTML = "";
    return true;
  }
}

//listen event on each for input
first.addEventListener("input", validationFirst);
last.addEventListener("input", validationLast);
mail.addEventListener("input",validationEmail);
message.addEventListener("input",validationMessage);

//sending the forms
formField.addEventListener("submit", (event) => {
  event.preventDefault();
  validationFirst();
  validationLast();
  validationEmail();
  validationMessage();
  //Check value ok and submit form
  if(
    validationFirst() == true &
    validationLast() == true &
    validationEmail( ) == true &
    validationMessage( ) == true
  ) {
    // print value in console
    console.log(first.value);
    console.log(last.value);
    console.log(mail.value);
    console.log(message.value);
  
    modal.style.display="none";
    //Reset form 
    cleanInput()
    } else {
    return false ;
  }
})



