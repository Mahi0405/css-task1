$(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault(); // prevent default form submission
  
      var email = $("#email").val(); // get the email value
      var password = $("#password").val(); // get the password value
  
      if (validateEmail(email) && validatePassword(password)) {
        window.location.href = "userlist.html"; // redirect to the next page
      } else {
        alert("Invalid email or password"); // display error message
      }
    });
  });
  
  function validateEmail(email) {
    var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return re.test(email);
  }
  
  function validatePassword(password) {
    return password.length >= 8;
  }
  





