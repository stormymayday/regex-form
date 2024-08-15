import getElement from "./utils/getElement.js";
import { patterns } from "./utils/patterns.js";
import validate from "./utils/validate.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});
