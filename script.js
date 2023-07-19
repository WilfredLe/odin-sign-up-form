// Variables
const mainPw = document.querySelector("#password");
const confirmPw = document.querySelector("#pass-confrim");
const inputs = document.querySelectorAll('input');
let pwContainer = 0;

//Main Password Functionality
mainPw.addEventListener('focusout',
    () => {
        pwContainer = mainPw.value;
        confirmPw.setAttribute('pattern', `^${pwContainer}$`)
    }
)

//Floating Label Static w/ "invalid" Value 
inputs.forEach((input) => {
    input.addEventListener('focusout',(e) => {
        if(e.target.value) {input.classList.add("is-valid")}
        else {input.classList.remove("is-valid")}
    })
})