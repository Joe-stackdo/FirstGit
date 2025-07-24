const cars = [
  {
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    price: "$25,000",
    image: "lambo.jpg"
  },
  {
    brand: "Honda",
    model: "Civic",
    year: 2020,
    price: "$22,000",
    image: "honda.jpg"
  },
  {
    brand: "BMW",
    model: "X5",
    year: 2022,
    price: "$55,000",
    image: "bmw.jpg"
  },
  {
    brand: "Ford",
    model: "Mustang",
    year: 2019,
    price: "$30,000",
    image: "supra.jpg"
  },
  {
    brand: "Ford",
    model: "Braubus",
    year: 2020,
    price: "$50,000",
    image: "braubus.jpg"
  },
    {
    brand: "Mercedes-Benz",
    model: "CL20",
    year: 2020,
    price: "$70,000",
    image: "braubus.jpg"
  },
    {
    brand: "Ferrari",
    model: "Spider",
    year: 2020,
    price: "$1,000,000",
    image: "ferrari.jpg"
  },
    {
    brand: "Ford",
    model: "Braubus",
    year: 2020,
    price: "$50,000",
    image: "braubus.jpg"
  }
];

function displayCars(carArray) {
  const container = document.getElementById("car-list");
  container.innerHTML = "";
  carArray.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <img src="${car.image}" alt="${car.brand} ${car.model}">
      <h3>${car.brand} ${car.model}</h3>
      <p>Year: ${car.year}</p>
      <p>Price: ${car.price}</p>
    `;
    container.appendChild(card);
  });
}

function filterCars() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = cars.filter(car =>
    car.brand.toLowerCase().includes(query) || car.model.toLowerCase().includes(query)
  );
  displayCars(filtered);
}

function logins() {
  getElementByclass("")
}

// Load all cars on page load
window.onload = () => displayCars(cars);