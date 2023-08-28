"use strict";
const form = document.querySelector("form");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const textarea = document.querySelector("#textarea");
const password = document.querySelector("#password");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        username: userName.value,
        email: email.value,
        password: password.value,
        country: country.value,
        textarea: textarea.value
    };
    console.log(data);
});
