var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("Submit-error");

function validateName(){
   var name = document.getElementById("contact-name").value;

   if(name.length == 0){
      nameError.innerHTML = "name is required";
      return false;
   }
   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      nameError.innerHTML = "Enter full name";
      return false;
   }
   nameError.innerHTML = "valid";
   return true;
      
}

function validatePhone(){

   var phone = document.getElementById("contact-phone").value; 

   if(phone.length == 0){
      phoneError.innerHTML = "phone is required";
      return false;
   }
   if(!phone.match( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
      phoneError.innerHTML = "Enter full number";
      return false;
   }
   phoneError.innerHTML = "valid";
   return true;
}

function validateEmail(){
   var email = document.getElementById("contact-email").value;

   if(email.length == 0){
      emailError.innerHTML = "Enter your email";
      return false;
   }
   if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      emailError.innerHTML = "Enter full name";
      return false;
   }
   emailError.innerHTML = 'valid';
   return true;
}
function validateMessage(){
   var message = document.getElementById("contact-message").value;
   var required = 30;
   var left = required - message.length;

   if(left > 0){
      messageError.innerHTML = left + "more characters required";
   return false;
}
messageError.innerHTML = "valid";
return true;
}

function validateForm() {
 
   
   if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
      submitError.style.display = "block";
      submitError.innerHTML = 'Please fix the errors to submit';
      setTimeout(function(){ submitError.style.display = "none"; }, 3000);
      return false;
   }
   
   // Form is valid
   return true;
}
