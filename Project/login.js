const signinButton = document.getElementById("form");
signinButton.addEventListener('click', validationForm);
function validationForm() {
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
   
    if(email != "" || password != "")
    {
        window.location.href="userlist.html";
        
    }
    else{ 
        console.log("step2")
    
    alert("please check email or password");
    }
   
 }

// function validationForm() {
//     var emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     //Validate TextBox value against the Regex.
//     var validation = emailValidation.test(document.getElementById("email").value);
//     if (!validation) {
//     alert("Not an email address");
//     } else {
//     alert("Valid email address!");
    
//     }
//     window.location.href="userlist.html";
//     return validation;
    
//     }    


