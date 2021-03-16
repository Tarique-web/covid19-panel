const login__form = document.getElementsByTagName("form");
const userEmail = document.querySelector('#userEmail')
const userPass = document.getElementById('userPass');

//add Event
// document.addEventListener("submit",(e) =>{
//     e.preventDefault();
//     let form_data_arr = [...new FormData(this)];
//     console.log(form_data_arr);
//     let form_details = Object.fromEntries(form_data_arr);
//     if(emailIDexists(form_details.loginMail)){
//         let user_valid = pass_n_Email_Match(form_details.loginMail,form_details.loginPassword);
//         if(user_valid){
//             accLogin(form_details); // To Login and Save Details
//             if(!form_details.remember) {
//                 removeRememberAccount(form_details);
//                 return;} // If user checked Remember Me
//             rememberAccount(form_details); // To Remember The User
//         }else{
//             error_render(login_error_box,'Try to Enter Right Password');
//         };

//     }else{
//         error_render(login_error_box,"Email Isn't Registered Yet");
//     };

// })

//define the validate function...

// const validate = () => {
//     const userEmail1 = userEmail.value.trim();
//     const userPass1 = userPass.value.trim();
//     console.log(userEmail1);
// }

