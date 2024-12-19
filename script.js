const cars = [
    { name: "Obey 9F", price: 120000, class: "S", type: "Super" },
    { name: "BF Injection", price: 45000, class: "B", type: "Off-road" },
    { name: "Dubsta 6x6", price: 180000, class: "A", type: "Off-road" },
    { name: "Entity MT", price: 1000000, class: "S", type: "Super" },
    { name: "10F", price: 1800000, class: "S", type: "Super" },
    { name: "Poszerzony 10F", price: 2000000, class: "S", type: "Super" },
    { name: "z190", price: 50000, class: "C", type: "Sport" },
    { name: "Surge", price: 35000, class: "EL", type: "Electric" },
    { name: "Bati", price: 100000, class: "M", type: "Motocykle" },
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
                <div class="car-price">${car.price.toLocaleString()} $</div>
                <div class="car-class">Klasa: ${car.class}</div>
                <div class="car-type">Typ: ${car.type}</div>
            </div>
        `;
        carList.appendChild(carItem);
    });
}

function filterCars() {
    let filteredCars = cars;

    // Filtrowanie według klasy
    const selectedClass = classFilter.value;
    if (selectedClass !== "all") {
        filteredCars = filteredCars.filter(car => car.class === selectedClass);
    }

    // Filtrowanie według typu pojazdu
    const selectedType = typeFilter.value;
    if (selectedType !== "all") {
        filteredCars = filteredCars.filter(car => car.type === selectedType);
    }

    // Wyszukiwanie po nazwie
    const searchQuery = searchBar.value.toLowerCase();
    if (searchQuery) {
        filteredCars = filteredCars.filter(car => car.name.toLowerCase().includes(searchQuery));
    }

    // Sortowanie
    if (sortOrder.value === "asc") {
        filteredCars.sort((a, b) => a.price - b.price);
    } else {
        filteredCars.sort((a, b) => b.price - a.price);
    }

    displayCars(filteredCars);
}

// Dodanie obsługi nowych filtrów
classFilter.addEventListener("change", filterCars);
typeFilter.addEventListener("change", filterCars);
searchBar.addEventListener("input", filterCars);
sortOrder.addEventListener("change", filterCars);

// Wyświetlenie samochodów przy załadowaniu
displayCars(cars);
