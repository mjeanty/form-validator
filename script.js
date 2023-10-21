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


//check valid email
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// checking required field
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if (input.value.trim() ==="") {
            showError(input, `${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    });
}




function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1)
}



//listening to events
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email, password,password2])
  
})