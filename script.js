// Container <div> that holds the emptyListText
let textContainer = document.querySelector("#textContainer");

// Container <ol> where all passengernames will sit
let listContainer = document.querySelector("#list");

//The value of the input that the passenger enters
let inputValue = document.querySelector("#name");

// For adding the value of the input to the list
let addButton = document.querySelector("#addButton");

// Variable to checks in the first passsenger in line
let checkInButton = document.querySelector("#checkInButton");

// For adding the input value to the top of the list
let vipButton = document.querySelector("#vipButton");

// Adds text that informs of empty list, to textContainer
let emptyListText = document.createElement("h5");
emptyListText.innerText = "There’s currently no people standing in line";
textContainer.appendChild(emptyListText);

// An array to keep all the items in <ol>
let passengerList = [];

// Adds the entered name value to the list
addButton.addEventListener("click",() => {
    if(inputValue.value === ""){
        alert("The name field is empty. Please enter your name to add yourself to the list.")      
    } else {
        passengerList.push(inputValue.value); // pushes the input value to the array passengerList
        let listItem = document.createElement("li");
        listItem.innerText = inputValue.value;
        listContainer.appendChild(listItem);
        inputValue.value = ""; // Makes sure that the input field is cleared after adding a name
        emptyListText.innerText = ""; // Empties string when there are list items in the list
    }
});

// Removes the first passenger in the list
  checkInButton.addEventListener("click", () => {
    if(passengerList.length === 0){
        alert ("There’s currently no people standing in line");
    } else {
        passengerList.shift(); // Removes the first item from the array passengerList
        listContainer.removeChild(listContainer.firstElementChild); // removes the firstElementChild of Listcontainer
        if(listContainer.childElementCount === 0){ // Checks if the listContainer is empty
            emptyListText.innerText = "There’s currently no people standing in line"; // If it is - Fills the emptyListText with previous text
        }
        }
         });
    

// Adds the entered input value / name to the top of the list 
vipButton.addEventListener("click", () => {
    if(inputValue.value === ""){
        alert("The name field is empty. Please enter your name to add yourself to the list."); 
    } else {
        passengerList.unshift(inputValue.value);// Adds the entered name to the top of list
        let listItem = document.createElement("li");
        listItem.innerText = inputValue.value;
        listContainer.prepend(listItem); // inserts listItem before the firstChildElement of listContainer
        inputValue.value = "";
        emptyListText.innerText = "";
    }
});



