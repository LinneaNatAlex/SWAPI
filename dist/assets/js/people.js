import renderPeople from "./renderPeople.js";

// Selecting the element
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const errorMessage = document.querySelector(".error-message");

const fetchPeople = async (e) => {
  e.preventDefault(); //this prevents the page to relode
  const searchValue = searchInput.value.trim();
  if (!searchValue) {
    errorMessage.textContent = "Please enter a search term.";
    return;
  }
  try {
    // sends a request to the API
    const response = await fetch(
      `https://swapi.py4e.com/api/people/?search=${encodeURIComponent(
        searchValue
      )}`
    );

    const data = await response.json();
    console.log(data);

    renderPeople(data.results);
    searchInput.value = ""; // Clear the input field
    errorMessage.textContent = "";
  } catch (error) {
    console.log(error);
    errorMessage.textContent = "An error occurred while fetching data.";
  }
};

searchForm.addEventListener("submit", fetchPeople);
