const renderPlanets = (planetsArray) => {
  const planetsList = document.querySelector(".planets-list");
  planetsList.innerHTML = ""; // Tøm listen før nye resultater

  const createListItem = (title, textContent) => {
    const item = document.createElement("li");
    const itemTitle = document.createElement("strong");
    const itemContent = document.createElement("p");

    itemTitle.textContent = title;
    itemContent.textContent = textContent;

    item.append(itemTitle, itemContent);
    item.classList.add("planets-list-item");
    itemTitle.classList.add("planets-list-item-title");

    return item;
  };

  planetsArray.forEach((planet) => {
    const planetCard = document.createElement("ul");
    planetCard.classList.add("planet-card");

    const planetName = createListItem("Name", planet.name);
    const planetDiameter = createListItem("Diameter", planet.diameter);
    const planetClimate = createListItem("Climate", planet.climate);
    const planetTerrain = createListItem("Terrain", planet.terrain);
    const planetPopulation = createListItem("Population", planet.population);
    const planetSurfaceWater = createListItem(
      "Surface Water",
      planet.surface_water
    );

    planetCard.append(
      planetName,
      planetDiameter,
      planetClimate,
      planetTerrain,
      planetPopulation
    );
    planetsList.appendChild(planetCard);
  });
};

export default renderPlanets;
