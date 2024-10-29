// Get the selected car from local storage
const selectedCar = JSON.parse(localStorage.getItem('selectedCar'))

const CarDetailsContainer = document .getElementById('carDetails')

    CarDetailsContainer.innerHTML = `
    <img src="${selectedCar.image}" alt="${selectedCar.name}" class="car-image" >
    <div class="car-info">
    <h1>${selectedCar.name}</h1>
    <h3>${selectedCar.model}</h3>
    </div>
    `