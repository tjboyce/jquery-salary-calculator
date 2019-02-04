console.log('js');



$(document).ready(onReady);

function onReady (){
    $('#submitButton').on('click', addEmployee);
        console.log('in button click');
    $('#newRow').on('click', '.deleteButton', deleteEmployee);
    
}
let totalCost = 0;
let monthlyIncome= 0;


function addEmployee (){
    console.log('in add employee');
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idIn').val();
    let title = $('#titleIn').val();
    let annualSalary = $('#annualSalaryIn').val();
    $('#newRow').append(`<tr><td>` + firstName + `</td> <td>` + lastName + `</td><td>` + idNumber + `</td><td>` + title + `</td><td>` + annualSalary +`</td><td><button class="deleteButton">Delete</button></td></tr>`);
    $('.inputClass').val('');
    totalCost += Number(annualSalary);
    monthlyIncome = totalCost /12;
    console.log(totalCost);
    console.log(monthlyIncome);
    $('#totalMonthly').text(monthlyIncome.toFixed (2));
    if (monthlyIncome > 20000){
        $('#totalMonthly').css('background-color', 'red');
    }
}

function deleteEmployee (){
    $(this).closest('tr').remove();
}


