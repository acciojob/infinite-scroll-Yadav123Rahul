//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");
  const totalItems = 10; // Total items initially

  // Add initial list items
  for (let i = 1; i <= totalItems; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${i}`;
    list.appendChild(listItem);
  }

  // Function to check if the user has reached the end of the list
  function isEndOfList() {
    const lastItem = list.lastElementChild;
    const lastItemRect = lastItem.getBoundingClientRect();
    return lastItemRect.bottom <= window.innerHeight;
  }

  // Function to add more list items
  function addMoreItems() {
    const itemsToAdd = 2; // Number of items to add
    for (let i = 1; i <= itemsToAdd; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${totalItems + i}`;
      list.appendChild(listItem);
    }
    totalItems += itemsToAdd;
  }

  // Event listener for scrolling
  window.addEventListener("scroll", function () {
    if (isEndOfList()) {
      addMoreItems();
    }
  });
});

