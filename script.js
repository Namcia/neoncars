const cars = [
    { name: "Obey 9F", salePrice: 1400000, listPrice: 1750000, class: "S", type: "Super" },
    { name: "BF Injection", salePrice: 45000, listPrice: 60000, class: "O", type: "Off-road" },
    { name: "Dubsta 6x6", salePrice: 500000, listPrice: 625000, class: "O", type: "Off-road" },
    { name: "Entity MT", salePrice: 1990000, listPrice: 2117500, class: "S", type: "Super" },
    { name: "10F", salePrice: 1600000, listPrice: 1800000, class: "S", type: "Super" },
    { name: "Poszerzony 10F", salePrice: 2000000, listPrice: 2220000, class: "S", type: "Super" },
    { name: "z190", salePrice: 400000, listPrice: 280000, class: "C", type: "Sport" },
    { name: "Surge", salePrice: 155000, listPrice: 175000, class: "EL", type: "Electric" },
    { name: "Bati 801", salePrice: 625000, listPrice: 715000, class: "M", type: "Motocykle" },
];

const carList = document.getElementById("carList");
const classFilter = document.getElementById("classFilter");
const typeFilter = document.getElementById("typeFilter");
const searchBar = document.getElementById("searchBar");
const sortOrder = document.getElementById("sortOrder");

function displayCars(carsToDisplay) {
    carList.innerHTML = "";
    carsToDisplay.forEach((car) => {
        const carItem = document.createElement("div");
        carItem.classList.add("car-item");
        carItem.innerHTML = `
            <img src="images/${car.name.toLowerCase().replace(/ /g, "")}.png" alt="${car.name}">
            <div class="car-details">
                <div class="car-name">${car.name}</div>
                <div class="car-sale-price">Cena sprzedaży: ${car.salePrice.toLocaleString()} $</div>
                <div class="car-list-price">Cena katalogowa: ${car.listPrice.toLocaleString()} $</div>
                <div class="car-class">Klasa: ${car.class}</div>
                <div class="car-type">Typ: ${car.type}</div>
            </div>
        `;
        carList.appendChild(carItem);
    });
}

function filterCars() {
    let filteredCars = cars;

    const selectedClass = classFilter.value;
    if (selectedClass !== "all") {
        filteredCars = filteredCars.filter(car => car.class === selectedClass);
    }

    const selectedType = typeFilter.value;
    if (selectedType !== "all") {
        filteredCars = filteredCars.filter(car => car.type === selectedType);
    }

    const searchQuery = searchBar.value.toLowerCase();
    if (searchQuery) {
        filteredCars = filteredCars.filter(car => car.name.toLowerCase().includes(searchQuery));
    }

    if (sortOrder.value === "asc") {
        filteredCars.sort((a, b) => a.salePrice - b.salePrice);
    } else {
        filteredCars.sort((a, b) => b.salePrice - a.salePrice);
    }

    displayCars(filteredCars);
}

classFilter.addEventListener("change", filterCars);
typeFilter.addEventListener("change", filterCars);
searchBar.addEventListener("input", filterCars);
sortOrder.addEventListener("change", filterCars);

displayCars(cars);
