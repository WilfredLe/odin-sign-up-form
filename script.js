// Variables
const mainPw = document.querySelector("#password");
const confirmPw = document.querySelector("#pass-confrim");
const inputs = document.querySelectorAll('input');
const nameInput = document.querySelector('#first-name');
const crewInput = document.querySelector('#crew-name')
const roleInput = document.querySelector('select')
const cardName = document.querySelector('.name-card');
const crewName = document.querySelector('.crew-card');
const roleName = document.querySelector('.role-card');
const imgCard = document.querySelector('.profile');
let pwContainer = 0;

//Card Info Filling Functionality
nameInput.addEventListener('change', 
(e) => {
        cardName.textContent = e.target.value.toUpperCase()
    }
);
crewInput.addEventListener('change', 
(e) => {
        crewName.textContent = e.target.value.toUpperCase()
    }
);
roleInput.addEventListener('change', 
(e) => {
        roleName.textContent = e.target.value.toUpperCase();
        if(e.target.value === "Captain") {imgCard.setAttribute('src','HeadShot1.jpg')}
    }
)

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