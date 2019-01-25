
//viewMain function populates the dirDisplay with info from Employee List
const viewView = function () {
  $(`#dirDisplay`).empty();
  for (i = 0; i < employeeList.length; i++) {
    $(`#dirDisplay`).append(`<div class="employeeInfo"><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`)
  }
}


//View button is clicked, it runs viewMain 
$(`#viewBtn`).on(`click`, viewView);


//viewVerify function empties current info from dirDisplay and appends the verification
//menu.
const viewVerify = function () {
  $(`#dirDisplay`).empty();
  $(`#dirDisplay`).append(`<form id="veriForm">Employee Name:<input type="text" id="veriName"></form>`)
  $(`#dirDisplay`).append(`<button id="checkBtn">Check Employee</button>`)
  document.getElementById('checkBtn').addEventListener("click", function (e) {
    e.preventDefault();
    verifyEmploy();
  });
}

//Verify button is clicked, it runs viewVerify
$(`#verifyBtn`).on(`click`, viewVerify);


// verifyEmploy function that checks if the name entered exists in employeeList.
const verifyEmploy = function () {
  let nameVeri = $(`#veriName`).val().toLowerCase();
  for (i = 0; i != employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase() === nameVeri) {
      $(`#dirDisplay`).append("<p>Yes this is an employee.</p>")
      return;
    }
  }
  $(`#dirDisplay`).append("<p>this person is not an employee<p>");
}


//viewAdd function empties current info from dirDisplay and appends the Add menu
const viewAdd = function () {
  $(`#dirDisplay`).empty();
  $(`#dirDisplay`).append(`<form id="addForm">Employee Name:<input type="text" id="addName">Office Number:<input type="text" id="addOffNum">phone Number:<input type="text" id="addPhoNum"></form>`);
  $(`#dirDisplay`).append(`<button id="addEmpBtn">Add Employee</button>`);
  for (i = 0; i < employeeList.length; i++) {
    $(`#dirDisplay`).append(`<div class="employeeInfo"><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`)
  }
  document.getElementById(`addEmpBtn`).addEventListener("click", function (e) {
    e.preventDefault();
    addEmployee();
  });
}

// Add button is clicked, it runs viewAdd
$(`#addBtn`).on(`click`, viewAdd);


//Add Employee function creates an object from input values then pushes in to 
//EmployeeList array and displays updated list.
let addEmployee = function () {
  let employee = {};
   employee.name = $(`#addName`).val();
   employee.officeNum = $(`#addOffNum`).val();
   employee.phoneNum = $(`#addPhoNum`).val();

    // if (employee.name !== undefined & employee.officeNum !== undefined & employee.phoneNum !== undefined) {
    //   alert("Please fill out all the boxes."); 
    // } 

    $(`#dirDisplay`).append(`<div class="employeeInfo"><p>${employee.name}</p><p>${employee.officeNum}</p><p>${employee.phoneNum}</p></div>`);
  }
  
  
  

  



