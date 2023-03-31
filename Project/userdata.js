function search()
{
var input, table_val, table_td, textValue;
input = document.getElementById("search");
table_val = document.getElementById("myTable");
var table_tr = document.getElementsByTagName("tr");
var  filter = input.ariaValueMax.toUpperCase() ;


for (let i=0; i < table_tr.length; i++)
{
    table_td = table_td[i].getElementsById("table_body")[1];
    if(table_td)
    {
        textValue = table_td.textContent || table_td.innerText;
        if(textValue.toUpperCase().indexOf(filter)> -1)
        {
            table_tr[i].style.display = ""
        }
        else{
            table_tr[i].style.display = "none";
        }
    }
}
}


