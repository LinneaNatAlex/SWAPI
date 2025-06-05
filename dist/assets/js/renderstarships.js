const renderstarships = (starshipsArray) => {
  const starshipsList = document.querySelector(".starships-list");
  starshipsList.innerHTML = ""; // Tøm listen før nye resultater

  const createListItem = (title, textContent) => {
    const item = document.createElement("li");
    const itemTitle = document.createElement("strong");
    const itemContent = document.createElement("p");

    itemTitle.textContent = title;
    itemContent.textContent = textContent;

    item.append(itemTitle, itemContent);
    item.classList.add("starships-list-item");
    itemTitle.classList.add("starships-list-item-title");

    return item;
  };

  starshipsArray.forEach((starship) => {
    const starshipCard = document.createElement("ul");
    starshipCard.classList.add("starship-card");

    const starshipName = createListItem("Name", starship.name);
    const starshipModel = createListItem("Model", starship.model);
    const starshipManufacturer = createListItem(
      "Manufacturer",
      starship.manufacturer
    );
    const starshipCost = createListItem("Cost", starship.cost);
    const crew = createListItem("Crew", starship.crew);
    const starshipMGLT = createListItem("MGLT", starship.MGLT);
    const starshipPassengers = createListItem(
      "Passengers",
      starship.passengers
    );

    starshipCard.append(
      starshipName,
      starshipModel,
      starshipManufacturer,
      starshipCost,
      starshipPassengers,
      crew,
      starshipMGLT
    );
    starshipsList.appendChild(starshipCard);
  });
};

export default renderstarships;
