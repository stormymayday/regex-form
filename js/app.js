import getElement from "./utils/getElement.js";
import { patterns } from "./utils/patterns.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});

const validate = (field, regex) => {
    if (regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
};
