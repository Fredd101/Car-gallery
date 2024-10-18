
// To Store all cars globally for filtering
//Promise allow you to handle asynchronous operations in a more mangeable way providing a cleaner alternatives to callbacks.

let allCars = []

// define an asynchronus function to fetch car from a Json file
const fetchCarData = async () => {
    try{

         //fetch the json file containing car data
    const response = await fetch("cars.json")
      
    //parse the JSON response into a javaScript objects.
    const data = await response.json()

    // store the array of cars in the global variable 'allCars' for future filtering
    allCars = data.cars

    //initially display all the cars when the page loads
      displayCars(allCars)
      generateFilterButtons(allCars)
      
    //handle any error that occur during the fetch process
    }catch(error){

        //log the error message to the console
        console.error('Error fetch car data:', error)

    }
}

//Define a function to display the car cards on the webpage.
const displayCars = (cars) => {
     const carContainer = document.getElementById('carContainer')

//clear any existing content inside the car container
    carContainer.innerHTML = '';

    if(cars.length === 0){
        carContainer.innerHTML = "<p>No data found </p>"
        return;
    }

    //loop through each car object in the `cars` array.
    cars.forEach((car) => {


    //create a new <div> element for each car card
    const carCard = document.createElement('div')



    //add Css class 'card' to the 'div'
    carCard.classList.add('card')

    //Add HTML content to the car card, including
    //an image, name, and model of the car.
    carCard.innerHTML =`
    <img src="${car.image}" alt="${car.name} ${car.model}" width="300">
    <h2>${car.name}</h2>
    <p>Model: ${car.model}</p>
    `
    //Append the car card to the car container on the webpage.
    carContainer.appendChild(carCard)


         })
}  
// define a function to dynamically create filter button 
const generateFilterButtons = (cars) => {
    // get the HTML Element where the filter buttons will be placed 
    const filterButtonsContainer = document.getElementById('filterButtons')

    //use map() to create an array of all car names
    const uniqueNames = [...new Set(cars.map((car) => car.name))];
    // USE 'SET' to remove duplicates and filter buttons will be placed
    uniqueNames.forEach((name) => {
        const button = document.createElement('button')
        button.textContent = name

        // set the text of the button to the car name
        button.addEventListener('click', () => filterCarsByName(name))

        filterButtonsContainer.appendChild(button)
    })
}
 const filterCarsByName = (name) => {
    const filteredCar = allCars.filter((car) => car.name === name)
    displayCars(filteredCar)

 }
 const searchCars = (query) => {
    const searchedCars = allCars.filter((car) => 
        car.name.toLowerCase().includes(query.toLowerCase())||
        car.model.toLowerCase().includes(query.toLowerCase())
    )
    displayCars(searchedCars)
 }
      document.getElementById('searchInput').addEventListener('input', (event) => {
        searchCars(event.target.value) //filter cars on input change
 })
 


//fetch and display car data when the page loads
window.onload = fetchCarData

