import { setEntreeChoice } from "./TransientState.js"

const handleEntreeChoice = (event) => {
    if (event.target.name === "entrees") {
        setEntreeChoice(parseInt(event.target.value))
    }
}



export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()
    document.addEventListener("change", handleEntreeChoice)
    let entreeHtml = `<h3>Entrees: </h3>`
    
    const entreeArray = entrees.map((entree) => {
        return `
        <input type="radio" value="${entree.id}" name="entrees"> ${entree.name}
        `
    })

    entreeHtml += entreeArray.join(" ")

    return entreeHtml
}
