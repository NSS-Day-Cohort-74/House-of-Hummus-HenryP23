const transientState = {
    entreeId: "",
    vegetableId: "",
    sideId: ""
}

console.log(transientState)
export const setEntreeChoice = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}
export const setVegetableChoice = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}
export const setSideChoice = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}

export const placeOrder = async () => {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/purchases", postOptions)
    
    const customEvent = new CustomEvent("nameYouChose")
    document.dispatchEvent(customEvent)
}
