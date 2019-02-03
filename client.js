console.log('js');

$(document).ready(onReady);

function onReady (){
    $('#submitButton').on('click', addEmployee);
        console.log('in button click');
    
}

function addEmployee (){
    console.log('in add employee');
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idIn').val();
    let title = $('#titleIn').val();
    let annualSalary = $('#annualSalaryIn').val();
    $('#newRow').append(`<tr><td>`+ firstName + `</td> <td>`+ lastName + `</td><td>` + idNumber + `</td><td>`+ title + `</td><td>`+ annualSalary +`</td></tr>`);
    $('.inputClass').val('');
}
