const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}

beforeEach(function(){
    for(const key in employee){
        delete employee[key];
    }
})


function updateEmployeeWithKeyAndValue(employee,key,value){
  return Object.assign({}, employee, { [key]: value });
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
   employee.streetAddress = "12 Broadway";
   
   return employee;
}

function deleteFromEmployeeByKey(employee,key,){
   const newEmployee = Object.assign({}, employee);
   delete newEmployee.name;
   
   return newEmployee;
   
}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;

    return employee
}