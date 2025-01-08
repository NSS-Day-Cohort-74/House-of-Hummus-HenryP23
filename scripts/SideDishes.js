import { setSideChoice } from "./TransientState.js"

const handleSideChoice = (event) => {
    if (event.target.name === "sides") {
        setSideChoice(parseInt(event.target.value))
    }
}


export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()
    document.addEventListener("change",handleSideChoice )
    let sideHtml = `<h3>Side Dishes: </h3>`
    const sideHtmlArray = sides.map((side) => {
        return `
        <input type="radio" value="${side.id}" name="sides"> ${side.title}
        `
    })

     sideHtml += sideHtmlArray.join(" ")
    return sideHtml
}
