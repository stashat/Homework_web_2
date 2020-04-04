var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);
filter.addEventListener("keyup", ac);
// Add item
window.addEventListener("load", load_data, false);

function addItem(e) {
  e.preventDefault();
  //Get input value
  var newItem = document.getElementById("item").value;
  // Create new li element
  if (newItem != '' ){
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // Create del button element
  var deleteBtn = document.createElement("button");
  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  // Append button to li
  li.appendChild(deleteBtn);
  // Append li to list
  itemList.appendChild(li);
  save_data();
}
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
      save_data();
    }
  }
}

// Filter items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list items
  var items = itemList.getElementsByTagName("li");
  // Convert HTMLCollection to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    localStorage.setItem('one', itemName)
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  })
}

 function ac(e) { 
    var items = itemList.getElementsByTagName("li");
    document.getElementById('datalist').innerHTML = ''; 
     Array.from(items).forEach(function(item) {
      var itemName = item.firstChild.textContent; 
     if(itemName.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) 
     { 
         var node = document.createElement("option");
         var val = document.createTextNode(itemName); 
          node.appendChild(val); 
           document.getElementById("datalist").appendChild(node); 
         } 
     } )
    }

function save_data(){
  localStorage.setItem("items", document.getElementById("items").innerHTML);
}

function load_data(){
  if(localStorage.getItem("items")){
  document.getElementById("items").innerHTML = localStorage.getItem("items").toString();
  }else{
      document.getElementById("items").innerHTML = '<li class="list-group-item">Item 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 2 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 3 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>';
  }
}
