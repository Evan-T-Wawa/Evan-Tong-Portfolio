function myFunction(){
  var x = document.getElementById("items");
  var y = document.getElementById("nav-button-open");
  var z = document.getElementById("nav-button-closed");

  if (x.style.display === "block") {
    x.style.display = "none";
    z.style.display = "block";
    y.style.display = "none";

  } else {
    x.style.display = "block";
    z.style.display = "none";
    y.style.display = "block";
  }
}

window.onresize = function() {
  var x = document.getElementById("items");
  x.style.display = "none";
}
