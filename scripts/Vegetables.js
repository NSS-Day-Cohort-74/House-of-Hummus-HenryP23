import { setVegetableChoice } from "./TransientState.js"

const handleVegetableChoice = (event) => {
    if (event.target.name === "vegetables") {
        setVegetableChoice(parseInt(event.target.value))
    }
}


export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    document.addEventListener("change",handleVegetableChoice )

    let veggieHtml = `<h3>Vegetables: </h3>`
    
    const veggieArray = vegetables.map((vegetable) => {
        return `
        <input type="radio" value="${vegetable.id}" name="vegetables"> ${vegetable.type}
        `
    })

    veggieHtml += veggieArray.join(" ")

    return veggieHtml
}
