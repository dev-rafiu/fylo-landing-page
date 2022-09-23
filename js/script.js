const EMAIL_VALIDATOR = /^([a-zA-Z0-9\.]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
const submitBtn = document.querySelectorAll(".submit");

const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const parent = e.currentTarget.parentElement.parentElement;
    const inputField = parent.querySelector("input");
    const errorMessage = parent.querySelector(".error");

    validateEmail(inputField, inputField.value, errorMessage);
    inputField.value = "";
  });
});

function validateEmail(input, email, message) {
  if (EMAIL_VALIDATOR.test(email)) {
    input.classList.add("valid-email");
  } else {
    input.classList.add("invalid-email");
    message.innerText = "please check your email";
  }

  setTimeout(() => {
    input.classList.remove("valid-email");
    input.classList.remove("invalid-email");
    message.innerText = "";
  }, 1000);
}
