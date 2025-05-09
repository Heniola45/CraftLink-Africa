let form = document.querySelector("#form1-container");
let artesianForm = document.querySelector("#artesian-form");
let userForm = document.querySelector("#user-form");
let artesianButton = document.querySelector("#artesian-button");
let userButton = document.querySelector("#user-button");
let h1 = document.querySelector("h1");
let backButton = document.querySelector("#back-button");
let userBackButton = document.querySelector(".user-back-button");
let footer = document.querySelector("footer");
let submitButton = document.querySelector("#submit-button");
let password = document.querySelector("#password");
let password2 = document.querySelector(".password");
let passwordConfirm = document.querySelector("#confirmPassword");
let passwordError = document.querySelector("#confirmPasswordMessage");
let passwordConfirm2 = document.querySelector(".confirmPassword");
let passwordError2 = document.querySelector("#confirmPasswordMessage2");
let messageContainer = document.querySelector("#message-container");

let formContainer = document.querySelector("#formContainer");

artesianButton.addEventListener("click", function () {
  form.classList.add("hidden");

  artesianForm.classList.remove("hidden");
  userForm.classList.add("hidden");
  h1.innerHTML = "Artesian Sign Up";
  footer.style.display = "flex";
});

userButton.addEventListener("click", function () {
  form.classList.add("hidden");
  userForm.classList.remove("hidden");
  artesianForm.classList.add("hidden");
  h1.innerHTML = "User Sign Up";
  footer.style.display = "flex";
});

function toggleForm() {
  form.classList.remove("hidden");
  artesianForm.classList.add("hidden");
  userForm.classList.add("hidden");
  h1.innerHTML = "Welcome to the Sign Up Page";
  footer.style.display = "none";
}

backButton.addEventListener("click", toggleForm);
userBackButton.addEventListener("click", toggleForm);

passwordConfirm.addEventListener("input", function () {
  if (password.value !== passwordConfirm.value) {
    passwordError.innerHTML = "Password do not match";
    passwordError.style.color = "red";
  } else {
    passwordError.textContent = "";
  }
});

passwordConfirm2.addEventListener("input", function () {
  if (password2.value !== passwordConfirm2.value) {
    passwordError2.innerHTML = "Password do not match";
    passwordError2.style.color = "red";
  } else {
    passwordError2.textContent = "";
  }
});

artesianForm.addEventListener("submit", function (event) {
  event.preventDefault();
  messageContainer.classList.remove("hidden");
  artesianForm.classList.add("hidden");
  userForm.classList.add("hidden");
  form.classList.add("hidden");
  footer.style.display = "none";
});

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  messageContainer.classList.remove("hidden");
  artesianForm.classList.add("hidden");
  userForm.classList.add("hidden");
  form.classList.add("hidden");
  footer.style.display = "none";
});
