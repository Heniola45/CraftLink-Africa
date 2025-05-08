document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("serviceRequestForm");
  const successMessage = document.getElementById("successMessage");

  if (form && successMessage) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form action

      // Show success message
      successMessage.style.display = "block";

      // Hide message after 4 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 4000);

      // Reset form fields
      form.reset();
    });
  } else {
    console.warn("Form or success message not found in the document.");
  }
});
