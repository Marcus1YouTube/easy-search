class searchMaker {
  setEngine(engine) {
    searchEngine = engine;
  }

  makeSearch() {
    if (searchEngine.target.value == "YouTube") {
      window.open(
        `https://www.youtube.com/search?q=${searchQuery.value}`
      );
    }
    if (searchEngine.target.value == "Wikipédia") {
      window.open(
        `https://hu.wikipedia.org/w/index.php?search=${searchQuery.value}`
      );
    }
    if (searchEngine.target.value == "Google") {
      window.open(`https://www.google.com/search?q=${searchQuery.value}`);
    } else {
      return;
    }
  }
}

const searchEngineSelector = document.querySelector("#search-select");
const searchEngineDisplayer = document.querySelector(".search-engine");
const searchQuery = document.querySelector(".search-q");
const searchSubmit = document.querySelector(".submit");
const search = new searchMaker();
var searchEngine;

searchEngineSelector.addEventListener("change", (selectedEngine) => {
  if (
    selectedEngine.target.value ==
    "--- Válaszd ki az oldalat, amin szeretnél keresni! ---"
  ) {
    searchEngineDisplayer.innerText = "Jelenleg semmi nem lett kiválasztva.";
    return;
  }
  searchEngineDisplayer.innerText = `A kiválasztott keresési oldal: ${selectedEngine.target.value}`;
  search.setEngine(selectedEngine);
});

searchSubmit.addEventListener("click", () => {
  search.makeSearch();
});
