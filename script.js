const searchEngineSelector = document.querySelector("#search-select");
const searchEngineDisplayer = document.querySelector(".search-engine");
const searchQuery = document.querySelector(".search-q");
const searchSubmit = document.querySelector(".submit");

searchEngineSelector.addEventListener("change", (selectedEngine) => {
  if (
    selectedEngine.target.value ==
    "--- Válaszd ki az oldalat, amin szeretnél keresni! ---"
  ) {
    searchEngineDisplayer.innerText = "Jelenleg semmi nem lett kiválasztva.";
    return;
  }
  searchEngineDisplayer.innerText = `A kiválasztott keresési oldal: ${selectedEngine.target.value}`;
  
  function makeSearch() {
    console.log(searchQuery.value);
    console.log(selectedEngine.target.value);
    if (searchEngineSelector.target.value == "YouTube") {
      window.open(`youtube.com/search?q=${searchQuery.value}`);
    }
    if (searchEngineSelector.target.value == "Wikipédia") {
      window.open(
        `https://hu.wikipedia.org/w/index.php?search=${searchQuery.value}`
      );
    }
    if (searchEngineSelector.target.value == "Google") {
      window.open(`https://www.google.com/search?q=${searchQuery.value}`);
    } else {
      alert("Válassz egy keresési oldalat!");
    }
  }
});
