'use strict';
function searchByFirstName(){
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

function searchByLastName(){
    // Grabbing the values from our nameForm form and inputs.
    let lastNameInput = document.forms['searchBox']['lastName'].value;
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.lastName === lastNameInput){
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

function showSearch() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

function allSearch(){
    // Grabbing the values from our nameForm form and inputs.
    let masterInput = document.forms['searchBox']['allBox'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredGender = people.filter(function (person) {
        if(person.firstName === masterInput){
            return true;
        }else if(person.lastName === masterInput){
            return true;
        }else if(person.gender === masterInput){
            return true;
        }else if(person.dob === masterInput){
            return true
        }
            return false;
});
    if(filteredGender.length > 0){
        console.log(filteredGender);
        enterTable(filteredGender);
      
    }else{
        console.log('Sorry, looks like there is no one with that gender.');
    }
}

function multiSearch(){
    let dobInput = document.forms['searchBox2']['dateOfBirth'].value;
    let genderInput = document.forms['searchBox2']['gender'].value;
    let heightInput = document.forms['searchBox2']['height'].value;
    let weightInput = document.forms['searchBox2']['weight'].value;
    let eyeColorInput = document.forms['searchBox2']['eyecolor'].value;

    if(dobInput == ""){
       
    }else{
        let filteredDOB = people.filter(function(person){
            if(person.dob === dobInput){
                return true;
            }
            return false;
        });
        if(filteredDOB.length > 0){
            console.log(filteredDOB);
            enterTable(filteredDOB);
        }else{
            console.log('Sorry, looks like there is no one with that date of birth.');
        }
    }

    if(genderInput == ""){
       
    }else{
        let filteredGender = people.filter(function(person){
            if(person.gender === genderInput){
                return true;
            }
            return false;
        });
        if(filteredGender.length > 0){
            console.log(filteredGender);
            enterTable(filteredGender);
        }else{
            console.log('Sorry, looks like there is no one with that date of birth.');
        }
    }

    if(heightInput == ""){
       
    }else{
        let filteredHeight = people.filter(function(person){
            if(person.height === heightInput){
                return true;
            }
            return false;
        });
        if(filteredheight.length > 0){
            console.log(filteredHeight);
            enterTable(filteredHeight);
        }else{
            console.log('Sorry, looks like there is no one with that date of birth.');
        }
    }

    if(weightInput == ""){
       
    }else{
        let filteredWeight = people.filter(function(person){
            if(person.weight === weightInput){
                return true;
            }
            return false;
        });
        if(filteredWeight.length > 0){
            console.log(filteredWeight);
            enterTable(filteredWeight);
        }else{
            console.log('Sorry, looks like there is no one with that date of birth.');
        }
    }

    if(eyeColorInput == ""){
       
    }else{
        let filteredEyeColor = people.filter(function(person){
            if(person.eyecolor === eyeColorInput){
                return true;
            }
            return false;
        });
        if(filteredEyeColor.length > 0){
            console.log(filteredEyeColor);
            enterTable(filteredEyeColor);
        }else{
            console.log('Sorry, looks like there is no one with that date of birth.');
        }
    }
} 