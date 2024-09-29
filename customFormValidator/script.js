let formValidation = document.getElementById("formValidation")
let usernameField = document.getElementById("username")
let emailField = document.getElementById("email")
let passwordField = document.getElementById("password")
let passwordAgainField = document.getElementById("confirmPassword")
let SubmitBtn = document.getElementById("submit-button")

SubmitBtn.addEventListener("click",(event)=>{

    event.preventDefault()

    let usernameValue = usernameField.value.trim();

    if(usernameValue.length < 4 && usernameValue.length > 0){
        alert("username must be greater than 3 characters")
    }

})

