//your code here!

const list = document.getElementById("infi-list");
let itemCount = 10; // already have 10 items

// Function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `item ${itemCount}`;
    list.appendChild(li);
  }
}

// Scroll event
window.addEventListener("scroll", () => {
  // Check if we reached the bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2); // Add 2 more items
  }
});
