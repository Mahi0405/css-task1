fetch("https://gorest.co.in/public/v2/users?access-token=f1d5436e35786cc7cc85d10fb02bc1ba7f8f12f1d1e291eab7690de75ae60bb5")
.then(response => response.json())
  .then(commits => {
    let tableData ='';
    commits.map((values)=>{
        tableData+= `<tr>
            <td>${values.name}</td>
            <td>${values.gender}</td>
            <td>${values.email}</td>
            <td>${values.status}</td>
            <td style="justify-items:center">
                    <a href="view" class="fa-solid fa-eye" style="margin: 5px;"></a>
                    <a href="edit" class="fa-solid fa-pen" style="margin: 5px;"></a>
                    <a href="trash" class="fa-solid fa-trash" id="delete-icon" style="margin: 5px; color:red"></a>
             </td>
        </tr>`
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch(err=>{
    console.log(err);
});
document.getElementById("add_user").addEventListener("click", ()=> {
    window.location.href="adduser.html";
    

});
$(document).ready(function()
{
  $('#myTable').DataTable();
});










// const deleteData = (id) => {
//     fetch(`https://gorest.co.in/public/v2/users/${id}`, {
//       method: 'DELETE'
//     })
//     .then(response => {
//       if (response.ok) {
//         console.log('Data deleted successfully!');
//         // Remove the deleted data from your app's state or UI
//         // ...
//       } else {
//         throw new Error('Failed to delete data');
//       }
//     })
//     .catch(error => {
//       console.error('Error deleting data:', error);
//     });
//   };
  
//   const deleteIcon = document.querySelector('#delete-icon');
  
//   deleteIcon.addEventListener('click', () => {
//     const dataId = getDataId(); // Replace with your own function to get the ID or resource URL of the data item to be deleted
//     deleteData(dataId);
//   });
  