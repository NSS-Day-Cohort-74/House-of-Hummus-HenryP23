import { placeOrder } from "./TransientState.js"

const handleOrderSubmissionClick= (clickEvent) => {
    if( clickEvent.target.id === "saveSubmission"){
        placeOrder()
    }
}


export const saveSubmission = () =>{
    document.addEventListener("click", handleOrderSubmissionClick)
    return "<button id='saveSubmission'> Save Submission</button>"
}