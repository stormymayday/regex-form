const validate = (field, regex) => {
    if (regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
};

export default validate;
