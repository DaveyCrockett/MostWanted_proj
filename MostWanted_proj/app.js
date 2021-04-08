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

/* function pullFullName(){
    let fname = people.firstName;
    let lname = people.lastName;
    console.log(fname);
    console.log(lname);
    
}

pullFullName();*/
