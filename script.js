//your code here!

const infiList = document.getElementById('infi-list');
let itemCount = 10; // Initial number of items
const itemsToAdd = 2; // Number of items to add when reaching the end

// Function to add list items
function addItems(count) {
  for (let i = 1; i <= count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List Item ${infiList.children.length + 1}`;
    infiList.appendChild(listItem);
  }
}

// Initial load of items
addItems(itemCount);

// Infinite scrolling implementation
infiList.addEventListener('scroll', () => {
  // Check if the user has scrolled to the bottom
  const isAtBottom =
    infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight;

  if (isAtBottom) {
    addItems(itemsToAdd); // Add new items when scrolled to the bottom
  }
});
