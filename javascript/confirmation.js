const searchInput = document.getElementById("searchInput");
const suggestionList = document.getElementById("suggestionList");

// Sample data
const suggestions = [
  "Clothes",
  "Accessories",
  "Automobile Repairs",
  "Private Drivers",
  "Home Services",
  "Tech & Repairs",
  "Makeup & Beauty",
  "Photography",
  "Food & Catering",
  "Tutoring & Education",
  "Fashion by Amaka",
  "Urban Stitch",
  "Native Wears Hub",
  "Jewelry Co.",
  "QuickFix Auto",
  "Elite Chauffeurs",
  "CleanPro Maids",
  "Tech Doctor",
  "Snap Studio",
  "Chef Zee",
];

searchInput.addEventListener("focus", () => {
  updateSuggestions("");
  suggestionList.style.display = "block";
});

searchInput.addEventListener("input", (e) => {
  const input = e.target.value.toLowerCase();
  updateSuggestions(input);
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    suggestionList.style.display = "none";
  }
});

function updateSuggestions(query) {
  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query)
  );

  suggestionList.innerHTML = "";
  if (filtered.length > 0) {
    filtered.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      li.addEventListener("click", () => {
        searchInput.value = item;
        suggestionList.style.display = "none";
        // Optional: redirect or display results
      });
      suggestionList.appendChild(li);
    });
    suggestionList.style.display = "block";
  } else {
    suggestionList.style.display = "none";
  }
}
