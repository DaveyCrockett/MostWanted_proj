'use strict';
function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['searchBox']['firstName'].value;
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
        enterTable(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}

function searchByGender(){
    // Grabbing the values from our nameForm form and inputs.
    let genderInput = document.forms['searchBox']['gender'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredGender = people.filter(function (person) {
        if(person.gender === genderInput){
            return true;
        } else{
            return false;
        }
});
    if(filteredGender.length > 0){
        console.log(filteredGender);
        enterTable(filteredGender);
      
    }else{
        console.log('Sorry, looks like there is no one with that gender.');
    }
}

function searchByDOB(){
    // Grabbing the values from our nameForm form and inputs.
    let DobInput = document.forms['searchBox']['dateOfBirth'].value;
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredDob = people.filter(function (person) {
        if(person.dob === DobInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredDob.length > 0){
        console.log(filteredDob);
        enterTable(filteredDob);
    }else{
        console.log('Sorry, looks like there is no one with that date of birth.');
    }
}
//Maybe need another loop
function enterTable(searchFilter){
    let body = '<tbody>'
    for (let i = 0; i < searchFilter.length; i++) {
        body += '<tr>';
        body += '<td>' + searchFilter[i].firstName + '</td>';
        body += '<td>' + searchFilter[i].lastName + '</td>';
        body += '<td>' + searchFilter[i].gender + '</td>';
        body += '<td>' + searchFilter[i].dob + '</td>';
        body += '<td>' + searchFilter[i].height + '</td>';
        body += '<td>' + searchFilter[i].weight + '</td>';
        body += '<td>' + searchFilter[i].eyeColor + '</td>';
        body += '<td>' + searchFilter[i].occupation + '</td>';
        body += '<td>' + searchFilter[i].parents + '</td>';
        body += '<td>' + searchFilter[i].currentSpouse + '</td>';
        body += '</tr>';
    }
    body +='</tbody>';
    document.getElementById('definitionData').innerHTML = body;
}