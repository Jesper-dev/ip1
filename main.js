//Form validation
const form = document.querySelector("form"); //To access form

//Grab email and error
const email = document.querySelector("#email");
const emailError = document.querySelector(".error");

const result  = document.querySelector(".result");

//Event listener
email.addEventListener("input", () =>{
    //Each time the user types we check if the form are valid, thanks to "input" in the event listener
   if(email.validity.valid){
       //If email is valid we remove the error class and add the success class
    
       emailError.classList.remove("error");
       emailError.classList.add("success");
       emailError.textContent = "This email is valid!";

       //If the email is not valid we do the showError function
   }else{
       showError();
   }
});

//On submit, if the email is not valid we do not send the form and we show error
form.addEventListener("submit", (e) => {
    if(!email.validity.valid){
        e.preventDefault();
        showError();
        
    }else{
        e.preventDefault();
        result.classList.add("success2");
        result.textContent = "Success! We will read your message as fast we can.";
    }
});

//Shows the differecnt types of errors
function showError(){
    if(email.validity.valueMissing){
        emailError.textContent = "You need to enter an email address."
    }else if(email.validity.typeMismatch){
        emailError.textContent = "This is not valid"
    }else if(email.validity.tooShort){
        emailError.textContent = `Email should be atleast ${email.minLength} characters long.`
    }

    emailError.className = "error active"
}
