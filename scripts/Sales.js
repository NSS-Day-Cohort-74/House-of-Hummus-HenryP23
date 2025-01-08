export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=side&_expand=vegetable")
    const sales = await response.json()
    let purchaseTotal = 0
    const salesDivs = sales.map((sale) => {
        purchaseTotal = sale.entree.price + sale.vegetable.price + sale.side.price
        return `<div>
        Receipt #${sale.id} = $${purchaseTotal.toFixed(2)}
        </div>`
    })

    let salesHTML = salesDivs.join("")
    return salesHTML
}

// console.log(` Entree: ${sale.entree.price } Veggie: ${sale.vegetable.price} Side: ${sale.side.price}`)
//console.log(sale.entree.price + sale.vegetable.price + sale.entree.price)