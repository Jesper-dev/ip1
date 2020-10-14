const clg = object => {
    console.log(object);
}

//? Functions up here
function showErrorName() {
    nameErr.classList.remove("success")
    nameErr.classList.add("error")
    name.classList.remove("valid")
    name.classList.add("not-valid")
    nameErr.textContent = "Not Valid"
}
function showSuccessName() {
    nameErr.classList.remove("error");
    nameErr.classList.add("success");
    name.classList.remove("not-valid");
    name.classList.add("valid");
    nameErr.textContent = "Valid";
}
function showResultError() {
    result.classList.add("error2");
    result.textContent = "Something is wrong, cannot send...";
}
function showResultSuccess() {
    result.classList.add("success2");
    result.textContent = "Success, message sent";
}

function showErrorEmail() {
    emailErr.classList.remove("success")
    emailErr.classList.add("error")
    email.classList.remove("valid")
    email.classList.add("not-valid")
    emailErr.textContent = "Not Valid"
}
function showSuccessEmail() {
    emailErr.classList.remove("error");
    emailErr.classList.add("success");
    email.classList.remove("not-valid");
    email.classList.add("valid");
    emailErr.textContent = "Valid";
}
function showResultError() {
    result.classList.remove("success2");
    result.classList.remove("hide");
    result.classList.add("error2");
    result.textContent = "Something is wrong, cannot send...";
    //*Result will dissapear after 3 second
    setTimeout(() => {
        result.classList.add("hide");
    }, 3000);
}
function showResultSuccess() {
    result.classList.remove("error2");
    result.classList.remove("hide");
    result.classList.add("success2");
    result.textContent = "Success, message sent";
    //*Result will dissapear after 3 second
    setTimeout(() => {
        result.classList.add("hide");
    }, 3000);
}

//*This function reset everthing so the form is the same way it where before
function resetData() {
    emailErr.classList.remove("success")
    nameErr.classList.remove("success")
    email.classList.remove("valid")
    name.classList.remove("valid")
    emailErr.textContent = "";
    nameErr.textContent = "";
}



//*************************
//****FORM VALIDATION *****
//*************************
const form = document.querySelector(".contact-form");

//* Grab name and email and the inputs fields
const name = document.querySelector("#name");
const email = document.querySelector("#email");

//* Grab the error/success spans
const nameErr = document.querySelector(".nameErr");
const emailErr = document.querySelector(".emailErr")
const result = document.querySelector(".result");

//* Each time we type this eventlistener will fire
form.addEventListener("keyup", () => {
    //!Regex pattern
    //TODO: I use regex to see if name contains anything that a name cant contain, like ?, * or any number.
    const patternName = /[0-9]|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/|#]/;
    //*Here i check if the name contains anything from the regex above and if it does resultName will return true
    let resultName = patternName.test(name.value);

    //*If name is empty you get an error and it contains anything from the regex above we show the error
    //*If resultName is true we know that name contain something from the regex and that makes it not a valid name
    //*If not we show success message
    if (name.value == "" || resultName == true) {
        showErrorName();
    } else {
        showSuccessName();
    }

    //*If email is empty and the validity of the email are false/not valid we show the error
    //*If not we show success message
    if (email.value == "" || !email.validity.valid) {
        showErrorEmail();
    } else {
        showSuccessEmail();
    }
})


//*Using arrow function
form.addEventListener("submit", e => {
    e.preventDefault();

    //*We check if both name and email contains the class valid, becuase if it does it means it is exactly how we want it to be
    //*and thats means it valid therefor we can send the form and reset everthing
    if (name.classList.contains("valid") && email.classList.contains("valid")) {
        showResultSuccess();
        form.reset();
        resetData();
        //*If the above if statement is not true we do not send the form, with other words if either name or email contains the class "not-valid"
        //*It means one of them or both are not valid, so we do not send the form nor reset anything
    } else {
        showResultError();
    }

});



