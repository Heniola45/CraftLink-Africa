document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("serviceRequestForm");
  const successMessage = document.getElementById("successMessage");

  if (form && successMessage) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form action

      // Show success message
      successMessage.style.display = "block";

      // Reset form fields
      form.reset();
    });
  } else {
    console.warn("Form or success message not found in the document.");
  }
});
