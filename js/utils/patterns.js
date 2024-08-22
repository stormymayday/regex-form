export const patterns = {
    telephoneUK: /^\d{11}$/,
    telephoneUS: /^[0-9]{10}$/,
    username: /^[a-z\d]{5,12}$/i,
    slug: /^[a-z0-9-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};
