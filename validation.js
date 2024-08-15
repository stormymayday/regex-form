import getElement from "./utils/getElement.js";
import { patterns } from "./utils/patterns.js";

console.log(patterns);

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        console.log(e.target.attributes.name.value);
    });
});
