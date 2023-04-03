//POST method

let form = document.getElementById('form');

form.addEventListener("submit", async(e) =>  
{
   e.preventDefault();
   


let name = document.getElementById('name').value;
let gender = document.getElementById('gender').value;
let email = document.getElementById('email').value;
 let status = document.getElementById('status').value;
// console.log(name);
// console.log(gender);
// console.log(email);
// console.log(status); 
const variable = {name: name,
  gender: gender,
  email: email,
  status: status};

console.log(variable);    
await fetch('https://gorest.co.in/public/v2/users?access-token=b4cb886a0c588b69fad808a965f8b37ae20345b3d34157d959d970d12ac74a55', 
    {
    method: "POST",
    
    headers : {
        "Content_type" : "application/json; charset=UTF-8",
        "Authorization" : "Bearer token"
    },
    body :JSON.stringify(variable),
  })
.then(res => res.json())
.then(data =>console.log(data))
  //  window.location.href="userlist.html";  

});



