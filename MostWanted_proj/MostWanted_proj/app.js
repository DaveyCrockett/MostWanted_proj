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

function generateTableHead(){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text)
        row.appendChild(th);
    }
}
function generateTableContents(){
for (let person of data){
let row = table.insertRow();
    for (let key in person){
        if(key === 'firstName'){
        let cell = row.insertCell();
        let text = document.createTextNode(person[key]);
        cell.appendChild(text)}
        if(key === 'lastName'){
        let cell = row.insertCell();
        let text = document.createTextNode(person[key]);
        cell.appendChild(text)}
        if(key === 'gender'){
        let cell = row.insertCell();
        let text = document.createTextNode(person[key]);
        cell.appendChild(text)}
        if(key === 'dob'){
        let cell = row.insertCell();
        let text = document.createTextNode(person[key]);
        cell.appendChild(text)}
        if(key === 'height'){
        let cell = row.insertCell();
        let text = document.createTextNode(person[key]);
        cell.appendChild(text)}
        if(key === 'weight'){
        let cell = row.insertCell();
        let text = document.createTextNode(person[key]);
        cell.appendChild(text)}
        if(key === 'eyeColor'){
        let cell = row.insertCell();
        let text = document.createTextNode(person[key]);
        cell.appendChild(text)}
        if(key === 'occupation'){
        let cell = row.insertCell();
        let text = document.createTextNode(person[key]);
        cell.appendChild(text)}
        if(key === 'parents'){
        let parentsFound = person[key]
        if(parentsFound.length === 0){
        parentsFound = 'None'
        }
        if(parentsFound.length === 1){
        let parentFiltered =people.filter(function(person){
        if(person.id === parentsFound[0])
        parentsFound[0] = person.firstName + ' ' + person.lastName
        })
        }
        if(parentsFound.length === 2){
        let parentFiltered =people.filter(function(person){
        if(person.id === parentsFound[0])
        parentsFound[0] = person.firstName + ' ' + person.lastName
        })
        let parentsFiltered =people.filter(function(person){
        if(person.id === parentsFound[1])
        parentsFound[1] = person.firstName + ' ' + person.lastName
        })
        }
        let cell = row.insertCell();
        let text = document.createTextNode(parentsFound);
        cell.appendChild(text)
        }                                            
        if(key === 'currentSpouse'){
        let spouseFound = person[key]
        if(spouseFound == null){
        spouseFound = 'N/A'
        }
        let spouseFiltered =people.filter(function(person){
        if(person.id === spouseFound)
        spouseFound = person.firstName + ' ' + person.lastName
        })
        let cell = row.insertCell();
        let text = document.createTextNode(spouseFound);
        cell.appendChild(text)
   }
  }
 }
}                

let table = document.querySelector("table");
let data = Object.keys(personTable[0]);
generateTableHead(table, data);
data = people
generateTableContents(table, data);

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

// function enterTable(searchFilter){
//     let body = '<tbody>'
//     for (let i = 0; i < searchFilter.length; i++) {
//         body += '<tr>';
//         body += '<td>' + searchFilter[i].firstName + '</td>';
//         body += '<td>' + searchFilter[i].lastName + '</td>';
//         body += '<td>' + searchFilter[i].gender + '</td>';
//         body += '<td>' + searchFilter[i].dob + '</td>';
//         body += '<td>' + searchFilter[i].height + '</td>';
//         body += '<td>' + searchFilter[i].weight + '</td>';
//         body += '<td>' + searchFilter[i].eyeColor + '</td>';
//         body += '<td>' + searchFilter[i].occupation + '</td>';
//         body += '<td>' + searchFilter[i].parents + '</td>';
//         body += '<td>' + searchFilter[i].currentSpouse + '</td>';
//         body += '</tr>';
//     }
//     body +='</tbody>';
//     document.getElementById('definitionData').innerHTML = body;
// }

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
                    return person.firstName, person.lastName;
                }else{
                    console.log("No Match");
                }  
             } 
             
    });
    
    if(filteredParents.length > 0){
        console.log(filteredParents);
        replaceId(filteredParents);
    }else{
        console.log('Sorry, looks like there is no one with that eye color.');
    }           
    

    
    }
MatchMaking();

function replaceId(parentNames){
    let j = 0;
   let filteredParents = people.filter(function(person){
       let parentId = person.parents;
    for(let i = 0; i < parentId.length; i++){
        let index = parentId.indexOf(parentId[i]);
    if (~index) {
        
            if(parentId[i] === person.parents[i]){
              person.parents[i] = parentNames[j].firstName + " " + parentNames[j].lastName;
               j++;
            }
            
    }
   
    }
    
   });
    console.log(filteredParents);
    
}

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