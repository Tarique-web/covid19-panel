
const form = document.querySelector("form");
const userEmail = document.querySelector('#userEmail')
const userPass = document.getElementById('userPass');
const userConfirmPass = document.getElementById('userConfirmPass');
const userFirstName = document.getElementById('userFirstName');
const userLastName = document.getElementById('userLastName');
const userBirthDate = document.getElementById('userBirthDate')
const mobileNumber = document.getElementById('mobileNumber');
const address = document.getElementById('address');

// first Name Validator
userFirstName.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,20}$/;
    let firstname = userFirstName.value;
    console.log(firstname);
    return (regex.test(firstname) ? userFirstName.classList.add('is-valid')
        : userFirstName.classList.add('is-invalid'));
    
});
//  Last Name Validator 
userLastName.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,20}$/;
    let lastname = userLastName.value;
    return (regex.test(lastname) ? userLastName.classList.add('is-valid')
        : userLastName.classList.add('is-invalid'));

});
mobileNumber.addEventListener('blur', () =>{
    let regex = /^\d{10}$/;
    let lastname = mobileNumber.value;
    return (regex.test(lastname) ? mobileNumber.classList.add('is-valid')
        : mobileNumber.classList.add('is-invalid'));

})

//  Email ID Validator 
userEmail.addEventListener('blur', () => {
    let regex = /^[A-Za-z]{1}[A-Za-z._0-9]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let emailId = userEmail.value;
    return (regex.test(emailId) ? userEmail.classList.add('is-valid')
        : userEmail.classList.add('is-invalid'));

});
//  Date of Birth Validator 
userBirthDate.addEventListener('blur', () => {

    var ageDifMs = Date.now() - Date.parse(userBirthDate.value);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var currentAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    return ((currentAge>=18) ? userBirthDate.classList.add('is-valid')
        : userBirthDate.classList.add('is-invalid'));

});

//  password Validator 
userPass.addEventListener('blur', () => {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let password = userPass.value;
    return (regex.test(password) ? userPass.classList.add('is-valid')
        : userPass.classList.add('is-invalid'));
});

//  Confirm Validator 
userConfirmPass.addEventListener('blur', () => {
    console.log("work");
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
    let confirmPassword = userConfirmPass.value;
    return (regex.test(confirmPassword) ? userConfirmPass.classList.add('is-valid')
        : userConfirmPass.classList.add('is-invalid'));

});


// Save the SigneUp Details In Local Storage;

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const userRegisterData = {
        firstName: userFirstName.value.trim(),
        lastName: userLastName.value.trim(),
        birthDate: userBirthDate.value.trim(),
        email: userEmail.value.trim(),
        password:  userPass.value.trim(),
    }
    localStorage.setItem('user', JSON.stringify(userRegisterData));
    window.location.href = "index.html";
    console.log(userRegisterData);

});
