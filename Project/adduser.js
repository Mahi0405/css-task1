//POST method

let form = document.getElementById('form');

form.addEventListener("submit", (event) =>  
{
   event.preventDefault();
   


let name = document.getElementById('name').value;
let gender = document.getElementById('gender').value;
let email = document.getElementById('email').value;
 let status = document.getElementById('status').value;
// console.log(name);
// console.log(gender);
// console.log(email);
// console.log(status); 
let variable = {
  "email": email,
  "name": name,
  "gender": gender,
  "status": status};

//console.log(variable);    
fetch('https://gorest.co.in/public/v2/users?access-token=b4cb886a0c588b69fad808a965f8b37ae20345b3d34157d959d970d12ac74a55', 
    {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
        'Authorization': 'Bearer'
        
      },
    
    body :JSON.stringify(variable)
  })
.then(res => res.json())
.then(data => {console.log(data)
  window.location.href="userlist.html";  
})

});







