var form = document.getElementById("form");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var formError = document.getElementsByClassName("form_error");
var input = document.getElementsByTagName("input");

function formValidation(e) {
  for (i = 0; i < 4; i++) {
    formError[i].style.display = "none";

    /*email validation*/
    if (!email.validity.valid) {
      formError[2].style.display = "block";
      email.classList.add("error");
      event.preventDefault();
    }

    /*validation of other fields*/
    if (
      (input.type != "email" || input.type != "submit") &&
      input[i].value == ""
    ) {
      formError[i].style.display = "block";
      input[i].classList.add("error");
      event.preventDefault();
    }
  }
}

form.addEventListener("submit", formValidation, false);
