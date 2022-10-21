import './style.css';


//click event delegation, main logic
const button = document.getElementById('button');
button.addEventListener('click',function(e){
    if (!validateEmail() ||
        !validatePassword() ||
        !validateZipcode()){
        return;    
        }
 
    const modal=document.getElementById('modal');
    
    modal.style.display = "block";
    //reset
    const form =document.getElementById('form');
    
    
});
//input event

document.addEventListener("input", (e) => {
    switch (e.target.id) {
        case 'email':
            validateEmail();
            break;
        case 'password':
            validatePassword();
            break;
        
        case 'zipcode':
            validateZipcode();
            break;
    }
});
const validateEmail = ()=>{
    const email=document.getElementById('email');
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please provide correct email format.");
        email.reportValidity();
        return false;
      } else {
        email.setCustomValidity("");
        return true;
      }
};
const validatePassword=()=>{
    const password=document.getElementById('password');
    if (password.value) {
        password.setCustomValidity("");
        return true;   
      } else {
        password.setCustomValidity("Please provide password.");
        password.reportValidity();
        return false;
      }

};

const validateZipcode=()=>{
    const zipcode=document.getElementById('zipcode');
    if (!zipcode.value) {
        zipcode.setCustomValidity("Please provide zipcode.");
        zipcode.reportValidity();
        return false;
      } else {
        zipcode.setCustomValidity("");
        return true;
      }

};