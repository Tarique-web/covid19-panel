
'use strict';
//declearing html elements

const login_form = document.querySelector("form");
const userEmail = document.getElementById('userEmail');
const userPass = document.querySelector('#userPass');
const login_msg = document.getElementById('login_msg')




// ----login validation
const userAuthenticate_msg = (user_msg) => {

    document.getElementById('login_msg').innerText = user_msg;
    

}

login_form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (localStorage.getItem('user')) {
        const loginDetails = JSON.parse(localStorage.getItem('user'))
        if ((userEmail.value === loginDetails.email) && (userPass.value === loginDetails.password)) {
            userAuthenticate_msg("Login-Success...")
                window.location.href = "corona_portal.html";


        } else {
            userAuthenticate_msg("Password or Email is wrong !")
        }
    } else {
        userAuthenticate_msg('Not a registered user')
    }

});



