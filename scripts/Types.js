import { getTypes, setType } from "./database.js";

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jewelryType"){
            setType(parseInt(event.target.value))
        }
    }
)

export const Types = () => {
    let html = ""
    for (const type of types){
        html += `<input type="radio" name="jewelryType" value="${type.id}">${type.name}`
    }
    return html
}