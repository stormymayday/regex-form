import getElement from "./utils/getElement.js";

const patterns = {
    telephoneUK: /^\d{11}$/,
    telephoneUS: /^[0-9]{10}$/,
};

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        console.log(e.target.attributes.name.value);
    });
});
