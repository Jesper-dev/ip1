const clg = object =>{
    console.log(object);
}

//? Functions up here
function showErrorName(){
    nameErr.classList.add("error")
    nameErr.textContent = "Not valid"
}
function showSuccessName(){
    nameErr.classList.add("success")
    nameErr.textContent = "Valid"
}

//*Form validation
const form = document.querySelector(".contact-form");

//* Grab name and email, also grab the inputs fields
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const inputs = document.querySelectorAll(".style");

//* Grab the error spans
const nameErr = document.querySelector(".nameErr");
const emailErr = document.querySelector(".emailErr")

//* Each time we type this eventlistener will fire
form.addEventListener("keyup", e =>{
    
})


//*Using arrow function
form.addEventListener("submit", e =>{
    e.preventDefault();

    //*If name is empty you get an error
    if(name.value == "" || name.value.includes()){
        showErrorName();
    }else{
        showSuccessName();
    }
});



