import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { saveSubmission } from "./saveOrder.js"
export const FoodTruck = async () => {
    const salesHtml = await Sales()
    const entreesHtml = await Entrees()
    const sidesHtml = await Sides()
    const veggieHtml = await Veggies()

    //document.addEventListener("click", handleOrderSubmissionClick())
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article>
        ${entreesHtml}
        </article>
        <article>
        ${sidesHtml}
        </article>
         <article>
        ${veggieHtml}
        </article>

        <article>
            ${saveSubmission()}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHtml}
        </article>

    `
}
