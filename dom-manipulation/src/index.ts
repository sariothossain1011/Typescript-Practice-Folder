

const form = document.querySelector("form") as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLInputElement;
const email = document.querySelector("#email") as HTMLInputElement;
const country = document.querySelector("#country") as HTMLSelectElement;
const textarea = document.querySelector("#textarea") as HTMLTextAreaElement;

const password = document.querySelector("#password") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    const data = {
        username: userName.value,
        email: email.value,
        password: password.value,
        country: country.value,
        textarea : textarea.value
    }
    console.log(data)

})