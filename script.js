//your JS code here. If required.
// Get references to dropdown and button
const select = document.getElementById("colorSelect");
const button = document.querySelector("input[type='button']");

// Add event listener to button
button.addEventListener("click", function () {
  // Remove the selected option
  const selectedIndex = select.selectedIndex;
  if (selectedIndex >= 0) {
    select.remove(selectedIndex);
  }
});
