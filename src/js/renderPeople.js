const renderPeople = (peopleArray) => {
  const peopleList = document.querySelector(".people-list");
  peopleList.innerHTML = ""; // Tøm listen før nye resultater

  const createListItem = (title, textContent) => {
    const item = document.createElement("li");
    const itemTitle = document.createElement("strong");
    const itemContent = document.createElement("p");

    itemTitle.textContent = title;
    itemContent.textContent = textContent;

    item.append(itemTitle, itemContent);
    item.classList.add("people-list-item");
    itemTitle.classList.add("people-list-item-title");

    return item;
  };

  peopleArray.forEach((person) => {
    const personCard = document.createElement("ul");
    personCard.classList.add("person-card");

    const peopleName = createListItem("Name", person.name);
    const peopleHeight = createListItem("Height", person.height);
    const peopleMass = createListItem("Mass", person.mass);
    const peopleHairColor = createListItem("Hair Color", person.hair_color);
    const eyeColor = createListItem("Eye Color", person.eye_color);
    const birthYear = createListItem("Birth Year", person.birth_year);

    console.log();

    personCard.append(
      peopleName,
      peopleHeight,
      peopleMass,
      peopleHairColor,
      eyeColor,
      birthYear
    );
    peopleList.appendChild(personCard);
  });
};

export default renderPeople;
