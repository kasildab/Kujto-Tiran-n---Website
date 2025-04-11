const searchInput = document.querySelector("#search-box"); // Correct input selector
const cardTitles = document.querySelectorAll(".card-title");
const searchBtn = document.getElementById("search-btn");
const closeSearch = document.getElementById("close-search");
const searchForm = document.querySelector(".search-form");

// Show search box when clicking search icon
searchBtn.addEventListener("click", function () {
    searchForm.classList.add("active");
});

// Hide search box when clicking close icon
closeSearch.addEventListener("click", function () {
    searchForm.classList.remove("active");
});

// Local search (filters cards on the page)
searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    let matchFound = false;

    cardTitles.forEach((title) => {
        const card = title.closest(".card"); // Safe way to find the parent card
        if (title.textContent.toLowerCase().includes(searchTerm)) {
            card.style.display = "block";
            matchFound = true;
        } else {
            card.style.display = "none";
        }
    });
});

// Google site search function
function googleSiteSearch() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm.length > 2) {
        window.location.href = `https://www.google.com/search?q=site:kujtotiranen.al+${encodeURIComponent(searchTerm)}`;
    }
}

// Trigger Google search when Enter is pressed
searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        googleSiteSearch();
    }
});
