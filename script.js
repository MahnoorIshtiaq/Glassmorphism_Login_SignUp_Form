var loginForm = document.getElementById('login');
var registerForm = document.getElementById('register'); 
var button = document.getElementById('btn');

function Register() {
    loginForm.style.left = "-400px";
    registerForm.style.left = "0px";
    button.style.left = "110px";
}

function login() {
    loginForm.style.left = "0px";
    registerForm.style.left = "400px";
    button.style.left = "0px";
}

function togglePassword(fieldId){
    var field = document.getElementById(fieldId);
    if(field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loginForm.classList.add('active');
});
