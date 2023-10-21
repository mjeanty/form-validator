const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password  = document.getElementById('password')
const password2 = document.getElementById('password2')

//show the input erro message
function showError(input, message) {
   const formControl = input.parentElement;
   formControl.className= 'form-control error'
   const small= formControl.querySelector('small')
   small.innerText = message;

}
//succesful input
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className='form-control success'
}

//listening to events
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === ""){
        showError(username,'Usernmae is required')
    }else{
        showSuccess(username)
    }
    if(email.value === ""){
        showError(email,'email is required')
    }else{
        showSuccess(email)
    }
    if(password.value === ""){
        showError(password,'password is required')
    }else{
        showSuccess(password)
    }
    if(password2.value === ""){
        showError(password2,'password2 is required')
    }else{
        showSuccess(password2)
    }
})