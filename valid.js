const clg = object =>{
    console.log(object);
}

//*Form validation
const form = document.querySelector(".contact-form");

//* Grab name and email, also grab the inputs fields
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const inputs = document.querySelectorAll(".style");

//* Grab the error span
const error = document.querySelectorAll(".error");

form.addEventListener("submit", e =>{
    e.preventDefault();
    if(name.value == ""){
        
    }
});