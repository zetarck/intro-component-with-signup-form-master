
//BUTTON
const btn = document.getElementById('button-1');
//ERRORS
const error1 = document.getElementById('error-1');
const error2 = document.getElementById('error-2');
const error3 = document.getElementById('error-3');
const error4 = document.getElementById('error-4');

//INPUTS
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

//ICONS
const icon1 = document.getElementById('icon-1');
const icon2 = document.getElementById('icon-2');
const icon3 = document.getElementById('icon-3');
const icon4 = document.getElementById('icon-4');

//EVENT LISTENERS
eventListeners();


function eventListeners() {

    email.addEventListener('blur', validarCampo);
    btn.addEventListener('click', validateInput);

}


function validarCampo() {
    if (this.type === 'email') {
        validarEmail(this);
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        error3.innerHTML = '';
    } else {
        error3.innerHTML = 'Looks like this is not an email';
    }
}



function validateInput() {
    if (fname.value.length == 0) {
        error1.innerHTML = 'First name cannot be empty';
        fname.style.border = '2px solid hsl(0, 100%, 74%)';
        icon1.style.visibility = 'visible';
    } else {
        error1.innerHTML = '';
        fname.style.border = '';
        icon1.style.visibility = 'hidden';
    }
    if (lname.value.length == 0) {
        error2.innerHTML = 'Last name cannot be empty';
        lname.style.border = '2px solid hsl(0, 100%, 74%)';
        icon2.style.visibility = 'visible';
    } else {
        error2.innerHTML = '';
        lname.style.border = '';
        icon2.style.visibility = 'hidden';
    }
    if (email.value.length == 0) {
        error3.innerHTML = 'Email cannot be empty';
        email.style.border = '2px solid hsl(0, 100%, 74%)';
        icon3.style.visibility = 'visible';
    } else {
        error3.innerHTML = '';
        email.style.border = '';
        icon3.style.visibility = 'hidden';
    }
    if (password.value.length == 0) {
        error4.innerHTML = 'Password  cannot be empty';
        password.style.border = '2px solid hsl(0, 100%, 74%)';
        icon4.style.visibility = 'visible';
    } else {
        error4.innerHTML = '';
        password.style.border = '';
        icon4.style.visibility = 'hidden';
    } 
}
