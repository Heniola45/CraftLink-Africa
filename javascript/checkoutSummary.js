document.addEventListener("DOMContentLoaded", function () {
  const proceedButton = document.getElementById("proceed-button");
  const backButton = document.getElementById("back-button");

  // Proceed to confirmation page
  proceedButton.addEventListener("click", function () {
    window.location.href = "successfulpage.html"; // Replace with actual confirmation page path
  });

  // Navigate back to billing page
  backButton.addEventListener("click", function () {
    window.location.href = "checkout.html"; // Replace with actual billing page path
  });
});
