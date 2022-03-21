
//this is what is going to add the two numbers

// parse int is suppose to help keeping the numbers a actual number rather than a string



//sticky menu
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//console log message

console.log("hello");
