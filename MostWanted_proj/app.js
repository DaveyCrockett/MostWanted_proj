'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}

function validateNameForm(){
    let valid = document.forms["nameForm"]["fname"].value;
    let lastValid = document.forms["nameForm"]["lname"].value;
    if(valid == ""){
        alert("First Name needs to be filled");
        return false;
    }
    if(lastValid == ""){
        alert("Last Name needs to be filled");
        return false;
    }
}

function filter(){
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filter")
    filter = input.value.toUpperCase();
    table = document.getElementById("people");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else{
                tr[i].style.display = "none"
            }
        }
    }
}


let body = '<tbody>'
for (let i = 0; i < people.length; i++) {
    body += '<tr>';
    body += '<td>' + people[i].firstName + '</td>';
    body += '<td>' + people[i].lastName + '</td>';
    body += '<td>' + people[i].gender + '</td>';
    body += '<td>' + people[i].dob + '</td>';
    body += '<td>' + people[i].height + '</td>';
    body += '<td>' + people[i].weight + '</td>';
    body += '<td>' + people[i].eyeColor + '</td>';
    body += '<td>' + people[i].occupation + '</td>';
    body += '<td>' + people[i].parents + '</td>';
    body += '<td>' + people[i].currentSpouse + '</td>';
    body += '</tr>';
}
body +='</tbody>';
    document.getElementById('data').innerHTML = body;