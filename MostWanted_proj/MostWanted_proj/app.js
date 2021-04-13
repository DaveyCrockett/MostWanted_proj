'use strict';
//First name search
function searchByFirstName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['searchBox']['firstName'].value;
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        firstNameInput = firstNameInput.charAt(0).toUpperCase() + firstNameInput.slice(1);
        if(person.firstName === firstNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        clearTableContents(tableClearArray)
        tableClearArray = filteredPeople
        data = filteredPeople;
        generateTableContents(table, data);

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
        lastNameInput = lastNameInput.charAt(0).toUpperCase() + lastNameInput.slice(1);
        if(person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        clearTableContents(tableClearArray)
        tableClearArray = filteredPeople
        data = filteredPeople;
        generateTableContents(table, data);

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
    clearTableContents(tableClearArray)
    tableClearArray = filteredGender
    data = filteredGender;
    generateTableContents(table, data);

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
        clearTableContents(tableClearArray)
        tableClearArray = filteredDob
        data = filteredDob;
        generateTableContents(table, data);
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
        clearTableContents(tableClearArray)
        tableClearArray = filteredHeight
        data = filteredHeight;
        generateTableContents(table, data);
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
        data = filteredWeight;
        generateTableContents(table, data);
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
        clearTableContents(tableClearArray)
        tableClearArray = filteredEcolor
        data = filteredEcolor;
        generateTableContents(table, data);
    }else{
        console.log('Sorry, looks like there is no one with that eye color.');
    }
}

function showSearch() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

function fnameLetters()
      { 
    let inputtxt = document.form1.fname;
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }

function lnameLetters()
      { 
    let inputtxt = document.form1.lname;
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }

function heightLetters()
      { 
    let inputtxt = document.form1.height;
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }

    function weightLetters()
      { 
    let inputtxt = document.form1.weight;
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }

      function eyeColorLetters()
      { 
    let inputtxt = document.form1.eyeColor;
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }

      function occupationLetters()
      { 
    let inputtxt = document.form1.occupation;
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }

function heightLetters2()
      { 
    let inputtxt = document.form2.height2;
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }

    function weightLetters2()
      { 
    let inputtxt = document.form2.weight2;
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }

      function eyeColorLetters2()
      { 
    let inputtxt = document.form2.eyeColor2;
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }

      function occupationLetters2()
      { 
    let inputtxt = document.form2.occupation2;
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }
        function clearTableContents(){
        let tableclear = document.querySelector('table');
        let counter = 0
        while(counter < tableClearArray.length){
        tableclear.deleteRow(1)
        counter++;
        }
}
let tableClearArray = people
