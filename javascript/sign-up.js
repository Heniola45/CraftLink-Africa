let form = document.querySelector("#form1-container");
let artesianForm = document.querySelector("#artesian-form");
let userForm = document.querySelector("#user-form");
let artesianButton = document.querySelector("#artesian-button");
let userButton = document.querySelector("#user-button");
let h1 = document.querySelector("h1");

artesianButton.addEventListener("click", function () {
  form.classList.add("hidden");

  artesianForm.classList.remove("hidden");
  userForm.classList.add("hidden");
  h1.innerHTML = "Artesian Sign Up";
});

userButton.addEventListener("click", function () {
  form.classList.add("hidden");
  userForm.classList.remove("hidden");
  artesianForm.classList.add("hidden");
  h1.innerHTML = "User Sign Up";
});
