function myFunction() {

var x = document.forms["myForm"]["fname"].value;
var y = document.forms["myForm"]["femail"].value;
var z = document.forms["myForm"]["fopinions"].value;
if (x == "") {
alert("Form must be filled out");
return false;
}
if (y == "") {
alert("Form must be filled out");
return false;
}
if (z == "") {
alert("Form must be filled out");
return false;
}
if(x,y,z !="")
  alert("Your Feedback Form has been Submitted Successfully!");
$("#myform")[0].reset();
}
