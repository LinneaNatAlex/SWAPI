const renderVehicles = (vehiclesArray) => {
  const vehiclesList = document.querySelector(".vehicles-list");
  vehiclesList.innerHTML = ""; // Tøm listen før nye resultater

  const createListItem = (title, textContent) => {
    const item = document.createElement("li");
    const itemTitle = document.createElement("strong");
    const itemContent = document.createElement("p");

    itemTitle.textContent = title;
    itemContent.textContent = textContent;

    item.append(itemTitle, itemContent);
    item.classList.add("vehicles-list-item");
    itemTitle.classList.add("vehicles-list-item-title");

    return item;
  };

  vehiclesArray.forEach((vehicle) => {
    const vehicleCard = document.createElement("ul");
    vehicleCard.classList.add("vehicle-card");

    const vehicleName = createListItem("Name", vehicle.name);
    const vehicleModel = createListItem("Model", vehicle.model);
    const vehicleManufacturer = createListItem(
      "Manufacturer",
      vehicle.manufacturer
    );
    const vehicleCost = createListItem("Cost", vehicle.cost);
    const vehiclePassengers = createListItem("Passengers", vehicle.passengers);
    const vehicleCargoCapacity = createListItem(
      "Cargo Capacity",
      vehicle.cargo_capacity
    );
    console.log();

    vehicleCard.append(
      vehicleName,
      vehicleModel,
      vehicleManufacturer,
      vehicleCost,
      vehiclePassengers,
      vehicleCargoCapacity
    );
    vehiclesList.appendChild(vehicleCard);
  });
};

export default renderVehicles;
