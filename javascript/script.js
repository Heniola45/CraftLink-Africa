document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("serviceRequestForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form action

    // Show success message
    successMessage.style.display = "block";

    // Hide message after 4 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 4000);

    form.reset();
  });
});
