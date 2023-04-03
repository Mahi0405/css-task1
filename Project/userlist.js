
fetch('https://gorest.co.in/public/v2/users?access-token=b4cb886a0c588b69fad808a965f8b37ae20345b3d34157d959d970d12ac74a55', {
  headers: {
      'Authorization': 'Bearer token',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    enderUsers(data);
    // updatePaginationButtons(data);
  })
  .catch(error => console.log(error));
  document.getElementById("add_user").addEventListener("click", ()=> {
    window.location.href="adduser.html";
    

});



function enderUsers(users) {
  const tableBody = document.getElementById('table_body');
  tableBody.innerHTML = '';
  users.forEach(user => {
    const row = `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        <td>${user.status}</td>
        <td>
          <a href="view" class="fa-solid fa-eye" style="margin: 5px;"></a>
          <a href="edit" class="fa-solid fa-pen id="edit-icon" style="margin: 5px;"></a>
          <a href="trash" class="fa-solid fa-trash" id="delete-icon" style="margin: 5px; color:red"></a>
       </td>
      </tr>
    `;
    tableBody.insertAdjacentHTML('beforeend', row);
  });
}



//PUT method

const editId =document.getElementById("edit-icon");
deleteId.addEventListener('click', (e)=>
{
e.preventDefault();


const userId = document.getElementById("id"); 
const url1 = `https://gorest.co.in/public/v2/users/${userId}`;

let name = document.getElementById('name').value;
let gender = document.getElementById('gender').value;
let email = document.getElementById('email').value;
let status = document.getElementById('status').value;
const putData = {
  name: name,
  email: email,
  gender: gender,
  status: status
};

fetch(url1, {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer b4cb886a0c588b69fad808a965f8b37ae20345b3d34157d959d970d12ac74a55',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(putData)
})
.then(response => response.json())
.then(data => {
  console.log(data); // do something with the response data
})
.catch(error => console.error(error));
});





//delete method

const deleteId =document.getElementById("delete-icon");
deleteId.addEventListener('click', (e)=>
{
e.preventDefault();

const deleteData = (id) => {
fetch(`https://gorest.co.in/public/v2/users/${id}`, {
method: 'DELETE'
})
.then(response => {
if (response.ok) {
  console.log('Data deleted successfully!');
  // Remove the deleted data from your app's state or UI
  // ...
} else {
  throw new Error('Failed to delete data');
}
})
.catch(error => {
console.error('Error deleting data:', error);
});
};

const deleteIcon = document.querySelector('#delete-icon');

deleteIcon.addEventListener('click', () => {

deleteData(dataId);
});
})