'use strict';
//First name search
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
        console.log('Sorry, looks like there is no one with that first name.');
    }
}

//Last Name Search
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
        console.log('Sorry, looks like there is no one with that last name.');
    }
}

//Gender Search
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

//DOB Search
function searchByDOB(){
    // Grabbing the values from our nameForm form and inputs.
    let DobInput = document.forms['searchBox']['dateOfBirth'].value;
    //Date input being formatted.
    let DobFormat = new Date(DobInput);
    let DobFormatDay = addDays(DobInput, 1);
    let dd = DobFormatDay.getDate();
    let mm = DobFormatDay.getMonth() +1; 
    let yyyy = DobFormatDay.getFullYear();
    DobFormat = mm+'/'+dd+'/'+yyyy;
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredDob = people.filter(function (person) {
        if(person.dob === DobFormat){
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
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

//Height Search
function searchByHeight(){
    // Grabbing the values from our nameForm form and inputs.
    let heightInput = document.forms['searchBox']['height'].value;
    let heightInt = parseInt(heightInput);
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredHeight = people.filter(function (person) {
        if(person.height === heightInt){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredHeight.length > 0){
        console.log(filteredHeight);
        enterTable(filteredHeight);
    }else{
        console.log('Sorry, looks like there is no one with that height.');
    }
}

//Weight Search
function searchByWeight(){
    // Grabbing the values from our nameForm form and inputs.
    let weightInput = document.forms['searchBox']['weight'].value;
    let weightInt = parseInt(weightInput);
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredWeight = people.filter(function (person) {
        if(person.weight === weightInt){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredWeight.length > 0){
        console.log(filteredWeight);
        enterTable(filteredWeight);
    }else{
        console.log('Sorry, looks like there is no one with that weight.');
    }
}

//Eye Color Search
function searchByEyeColor(){
    // Grabbing the values from our nameForm form and inputs.
    let eColorInput = document.forms['searchBox']['eyeColor'].value;
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredEcolor = people.filter(function (person) {
        if(person.eyeColor === eColorInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredEcolor.length > 0){
        console.log(filteredEcolor);
        enterTable(filteredEcolor);
    }else{
        console.log('Sorry, looks like there is no one with that eye color.');
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
//parentsMatch need some work but its on its way.

function MatchMaking(){
    let parentId = people.map(item => item.parents);
    let mergeId = [].concat.apply([], parentId);
    let filteredParents = people.filter(function (person) {
             for(let i = 0; i < mergeId.length; i ++){
                if(person.id === mergeId[i]){
                    console.log(person.firstName + " " + person.lastName);
                }else{
                    console.log("No Match");
                }  
             }
             
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
     if(filteredParents.length > 0){
        console.log(filteredParents);
    }else{
        console.log('Sorry, looks like there is no one with that first name.');
    }
        
    }
MatchMaking();


function multiSearch(){
    let dobInput = document.forms['searchBox2']['dateOfBirth2'].value;
    let genderInput = document.forms['searchBox2']['gender2'].value;
    let heightInput = document.forms['searchBox2']['height2'].value;
    let weightInput = document.forms['searchBox2']['weight2'].value;
    let eyeColorInput = document.forms['searchBox2']['eyecolor2'].value;
    let heightInt = parseInt(heightInput);
    let weightInt = parseInt(weightInput);
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
            console.log('Sorry, looks like there is no one with gender.');
        }
    }

    if(heightInt == ""){
       
    }else{
       
        let filteredHeight = people.filter(function(person){
            if(person.height === heightInt){
                return true;
            }
            return false;
        });
        if(filteredHeight.length > 0){
            console.log(filteredHeight);
            enterTable(filteredHeight);
        }else{
            console.log('Sorry, looks like there is no one with that height.');
        }
    }

    if(weightInt == ""){
       
    }else{
        let filteredWeight = people.filter(function(person){
            if(person.weight === weightInt){
                return true;
            }
            return false;
        });
        if(filteredWeight.length > 0){
            console.log(filteredWeight);
            enterTable(filteredWeight);
        }else{
            console.log('Sorry, looks like there is no one with that weight.');
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
            console.log('Sorry, looks like there is no one with that eye color.'); 
        }
    }
    if(genderInput == "" && dobInput == ""){
       
    }else{
        let filteredPeople = people.filter(function(person){
            if(person.gender === genderInput && person.dob === dobInput){
                return true;
            }
            return false;
        });
        if(filteredPeople.length > 0){
            console.log(filteredPeople);
            enterTable(filteredPeople);
        }else{
            console.log('Sorry, looks like there is no one with that date of birth.');
        }
    }
    if(genderInput == "" && heightInput == ""){
       
    }else{
        let filteredPeople = people.filter(function(person){
            if(person.gender === genderInput && person.height === heightInt){
                return true;
            }
            return false;
        });
        if(filteredPeople.length > 0){
            console.log(filteredPeople);
            enterTable(filteredPeople);
        }else{
            console.log('Sorry, looks like there is no one with that date of birth.');
        }
    }
    if(genderInput == "" && weightInput == ""){
       
    }else{
        let filteredPeople = people.filter(function(person){
            if(person.gender === genderInput && person.weight === weightInt){
                return true;
            }
            return false;
        });
        if(filteredPeople.length > 0){
            console.log(filteredPeople);
            enterTable(filteredPeople);
        }else{
            console.log('Sorry, looks like there is no one with that date of birth.');
        }
    }
    
} 