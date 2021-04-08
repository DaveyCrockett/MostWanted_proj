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
        body = '<tbody id="byGender">'
        for (let i = 0; i < filteredGender.length; i++) {
            body += '<tr>';
            body += '<td>' + filteredGender[i].firstName + '</td>';
            body += '<td>' + filteredGender[i].lastName + '</td>';
            body += '<td>' + filteredGender[i].gender + '</td>';
            body += '<td>' + filteredGender[i].dob + '</td>';
            body += '<td>' + filteredGender[i].height + '</td>';
            body += '<td>' + filteredGender[i].weight + '</td>';
            body += '<td>' + filteredGender[i].eyeColor + '</td>';
            body += '<td>' + filteredGender[i].occupation + '</td>';
            body += '<td>' + filteredGender[i].parents + '</td>';
            body += '<td>' + filteredGender[i].currentSpouse + '</td>';
            body += '</tr>';
            document.getElementById('genderData').innerHTML = body;
        }
    }else{
        console.log('Sorry, looks like there is no one with that gender.');
    }
}


function searchByDOB(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['searchBox']['dateOfBirth'].value;
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
    }else{
        console.log('Sorry, looks like there is no one with that date of birth.');
    }
}

let body = '<tbody id ="fullList">'
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
        body = '<tbody id="byGender">'
        for (let i = 0; i < filteredGender.length; i++) {
            body += '<tr>';
            body += '<td>' + filteredGender[i].firstName + '</td>';
            body += '<td>' + filteredGender[i].lastName + '</td>';
            body += '<td>' + filteredGender[i].gender + '</td>';
            body += '<td>' + filteredGender[i].dob + '</td>';
            body += '<td>' + filteredGender[i].height + '</td>';
            body += '<td>' + filteredGender[i].weight + '</td>';
            body += '<td>' + filteredGender[i].eyeColor + '</td>';
            body += '<td>' + filteredGender[i].occupation + '</td>';
            body += '<td>' + filteredGender[i].parents + '</td>';
            body += '<td>' + filteredGender[i].currentSpouse + '</td>';
            body += '</tr>';
            document.getElementById('genderData').innerHTML = body;
        }
    }else{
        console.log('Sorry, looks like there is no one with that gender.');
    }
}
