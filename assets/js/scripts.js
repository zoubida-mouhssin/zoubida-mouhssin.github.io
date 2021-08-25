

// Add active class to the current button (highlight it)

document.querySelector(function() {
  document.querySelector('li a[href^="/' + location.pathname.split("/")[1] + '"]').classList.add('active');
});



const currentLocation=location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href===currentLocation) {
    menuItem[i].classame = "active"
  }
  
}