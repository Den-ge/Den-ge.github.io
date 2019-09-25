/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("mainNav");
  if (x.className === "dropdown") {
    x.className += " responsive";
  } else {
    x.className = "dropdown";
  }
}
