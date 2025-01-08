import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async() => {
    const foodTruckHtml = await FoodTruck()
    mainContainer.innerHTML = foodTruckHtml

}

renderAllHTML()

