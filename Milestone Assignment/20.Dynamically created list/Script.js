let listItems = [
  "HTML and Semantics",
  "Starting with CSS",
  "Understanding Hooks and Routers",
  "Working with DOM",
];
let counter = 0;

document.getElementById("addBtn").addEventListener("click", addListItem);

function addListItem() {
  if (counter >= listItems.length) {
    alert("All items have been added!");
    return;
  }

  // Add new list item
  const newItem = document.createElement("li");
  newItem.textContent = listItems[counter];
  document.getElementById("list").appendChild(newItem);

  // Increment counter for next item
  counter++;
}
