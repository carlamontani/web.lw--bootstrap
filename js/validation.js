let name = document.querySelector("#name");

let email = document.querySelector("#email");

let submit = document.querySelector("#submit");

const checkInput = () => {
    if (name.value !== "" && email.value !== "") {
        submit.disabled = ""
    } else {
        submit.disabled = "disabled"
    }
}

name.addEventListener("change", checkInput);
email.addEventListener("change", checkInput)

