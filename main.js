//Form validation
const form = document.querySelector("form"); //To access form

//Grab email and error
const email = document.querySelector("#email");
const emailError = document.querySelector(".error");

//Event listener
email.addEventListener("input", () =>{
    //Each time the user types we check if the form are valud, thanks to "input" in the event listener
   if(email.validity.valid){
       //If email is valid we remove the error message
    //    emailError.innerHTML = "";
       emailError.setAttribute = "class", ".success";
    //    emailError. className = "error active"

       emailError.textContent = "Valid";
   }else{
       showError();
   }
});

form.addEventListener("submit", (e) => {
    if(!email.validity.valid){
        showError();
        e.preventDefault();
    }
});

function showError(){
    if(email.validity.valueMissing){
        emailError.textContent = "You need to enter an email address."
    }else if(email.validity.typeMismatch){
        emailError.textContent = "Entered value needs to be an email adress"
    }else if(email.validity.tooShort){
        emailError.textContent = `Email should be atleast ${email.minLength}.`
    }

    emailError.className = "error active"
}

console.log(emailError);