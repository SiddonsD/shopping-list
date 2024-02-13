let shoppingListItems = ["milk", "eggs", "bread"];

// // grabs the ul from HTML
// let listElement = document.getElementById("shopping-list-items");

// for (const shoppingItem of shoppingListItems) {
//     console.log(shoppingItem);
//     // create a list element
//     let itemElement = document.createElement("li");

//     // add the inner text to the list element
//     itemElement.innerText = shoppingItem;
    
//     // add the list element to the ul
//     listElement.appendChild(itemElement);
// }
updateItems()

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    // call updateItems to refresh list
    updateItems();
    // reset/clear input field following entry
    document.getElementById("new-item-text").value="";
}

function updateItems() {
    // get the list element
    let listElement = document.getElementById("shopping-list-items");
    // clear any existing items
    listElement.innerHTML = "";

    // loops through the shopping list items and adds to the list
    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
}

function clearItems() {
    // clear shopping list by setting array to empty 
    shoppingListItems = [];
    // update list
    updateItems();
}


