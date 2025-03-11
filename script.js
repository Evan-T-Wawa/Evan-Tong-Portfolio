

function myFunction(){
  var x = document.getElementById("items");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.onresize = function() {
  var x = document.getElementById("items");
  x.style.display = "none";
}
