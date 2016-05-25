/*

1) // Add a script tag in the appropriate place.

2) Using JavaScript, change the body's tag style so it has a font-family of the sans-serif font stack of your choice.

3) Using JavaScript, replace each of the spans with your own information.

4) Iterate through each li and change the class to listitem. Add a style tag that sets a rule for listitem to make the color red.

5) Create a new img element and set its src attribute to a picture of you. Append that element to the page. */

document.body.style.fontFamily = "Helvetica";

document.getElementById("fullname").innerHTML = "David Grayboff";
document.getElementById("hometown").innerHTML = "Longmeadow, MA";
document.getElementById("movie").innerHTML = "TBD";
document.getElementById("food").innerHTML = "Ice Cream";

/*var newclass = document.getElementByNameTag("li");
newclass.classList.add("listitem");
document.getElementByTagName("li").className = "listitem";
for (var i = 0; i <listitem.length; i++) {
  document.getElementsByClassName(listitem).color = "red";
} */

var x = document.querySelectorAll('li');

for (i = 0; i < x.length; i++) {
  x[i].classList.add("listitem");
  x[i].style.color = "red";
}
