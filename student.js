let selectedRow = null ;
let usrname = document.getElementById("usrname");
let email = document.getElementById("email");
let Phone = document.getElementById("Phone");
let city = document.getElementById("city");

// when user click on submit button 
function enterData() {
	let studentData = fetchData();
	if(selectedRow == null)
	{
		addData(studentData);
	}
	else 
	{
		updateData(studentData);
	}
	clearForm();
}

// function to fetch the data
function fetchData() {

	let studentData = {};
	studentData.usrname = usrname.value ;
	studentData.email = email.value ;
	studentData.Phone = Phone.value ;
	studentData.city = city.value ;

	return studentData ;
}
 // function to add data in the table 
 function addData(data) {
 	let table = document.getElementById("studentList").getElementsByTagName("tbody")[0];
 	let newRow = table.insertRow(0);
 	cell1 = newRow.insertCell(0);
 	cell1.innerHTML = data.usrname ;
 	cell2 = newRow.insertCell(1);
 	cell2.innerHTML = data.email ;
 	cell3 = newRow.insertCell(2);
 	cell3.innerHTML = data.Phone ;
 	cell4 = newRow.insertCell(3);
 	cell4.innerHTML = data.city ;
 	cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick="editData(this)">EDIT</button>
    <button onclick="deleteData(this)">DELETE</button>` ;

 }
 // function to update data
 function updateData(data) {
     selectedRow.cells[0].innerHTML = data.usrname ;
     selectedRow.cells[1].innerHTML = data.email ;
     selectedRow.cells[2].innerHTML = data.Phone ;
     selectedRow.cells[3].innerHTML = data.city ;
 }

 // function to clear form

 function clearForm() {
 	usrname.value = "";
 	email.value = "";
 	Phone.value  = "" ;
 	city.value = "" ;
 	selectedRow = null ;
 }
 // function to delete data 
 function deleteData(btn) {
 	if (confirm("Do you want to delete the data ? ")) {
 	  row = btn.parentElement.parentElement ;
 	  document.getElementById("studentList").deleteRow(row.rowIndex);
 	}
 }

 // function to edit data 
 function editData(btn) {
 	selectedRow = btn.parentElement.parentElement ;
 	usrname.value = selectedRow.cells[0].innerHTML ;
 	email.value = selectedRow.cells[1].innerHTML ;
 	Phone.value = selectedRow.cells[2].innerHTML ;
 	city.value = selectedRow.cells[3].innerHTML ;

 }




















