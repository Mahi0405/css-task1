//POST method

let form = document.getElementById('form');

form.addEventListener("click", (e) =>  
{
   e.preventDefault();
})   


let name = document.getElementById('name').value;
let gender = document.getElementById('gender').value;
let email = document.getElementById('email').value;
let status = document.getElementById('status').value;



fetch("https://gorest.co.in/public/v2/users?access-token=f1d5436e35786cc7cc85d10fb02bc1ba7f8f12f1d1e291eab7690de75ae60bb5", {
    method: "POST",
    body : JSON.stringify ({
        name : "name",
        gender : "gender",
        email : "email",
        status: "status"
    }),
    headers : {
        "Content_type" : "application/json; charset=UTF-8",
        "Authorization" : "Bearer"
    }
})
.then(res => res.json())
.then(data => console.log(data));



// let form = document.getElementById('form');

// form.addEventListener("click", (e) =>  
// {
//    e.preventDefault();
// })   


// let name = document.getElementById('name').value;
// let gender = document.getElementById('gender').value;
// let email = document.getElementById('email').value;
// let status = document.getElementById('status').value;



// fetch("https://gorest.co.in/public/v2/users?access-token=f1d5436e35786cc7cc85d10fb02bc1ba7f8f12f1d1e291eab7690de75ae60bb5", {
//     method: "POST",
//     body : JSON.stringify ({
//         name : "name",
//         gender : "gender",
//         email : "email",
//         status: "status"
//     }),
//     headers : {
//         "Content_type" : "application/json; charset=UTF-8",
//         "Authorization" : "Bearer"
//     }
// })












