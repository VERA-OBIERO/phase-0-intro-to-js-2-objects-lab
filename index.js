// Write your solution in this file!

const employee ={emply1:{name:"Latifa", streetAddress:"kiserian"},emply2:{name:"Moha",streetAddress:"Juja"}}


function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]:value,
    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] =  value;
    return employee;
    };

function deleteFromEmployeeByKey(employee, key){
    const nwEmply = {...employee};
    delete nwEmply[key];
    return nwEmply;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];
    return employee;

}