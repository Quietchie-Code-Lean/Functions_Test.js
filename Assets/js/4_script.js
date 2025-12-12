/* EXERCISE THREE - Number 1/2:*/

let divBox = document.querySelector(".divBox");
divBox.style.marginTop = "25px";
divBox.style.marginBottom = "25px";

let element1 = document.querySelector(".element1");
element1.style.width = "200px";
element1.style.height = "200px";
element1.style.backgroundColor = "blue"

let element2 = document.querySelector(".element2");
element2.style.width = "200px";
element2.style.height = "200px";
element2.style.backgroundColor = "red";

let element3 = document.querySelector(".element3");
element3.style.width = "200px";
element3.style.height = "200px";
element3.style.backgroundColor = "green";

let element4 = document.querySelector(".element4");
element4.style.width = "200px";
element4.style.height = "200px";
element4.style.backgroundColor = "yellow";

element1.addEventListener("click", function(){
    element1.innerHTML = element1.style.backgroundColor = "black";
});
element2.addEventListener("click", function(){
    element2.innerHTML = element2.style.backgroundColor = "black";
});
element3.addEventListener("click", function(){
    element3.innerHTML = element3.style.backgroundColor = "black";
});
element4.addEventListener("click", function(){
    element4.innerHTML = element4.style.backgroundColor = "black";
}); 



/* EXERCISE THREE - Number 3:*/
let colors = "";

let boxStyle = document.querySelector("#key");

let divBox2 = document.querySelector(".divBox2");
divBox2.style.paddingTop = "25px";
divBox2.style.paddingBottom = "25px";

boxStyle.style.width = "200px";
boxStyle.style.height = "200px";
boxStyle.style.border = "1px solid khaki";


document.addEventListener('keydown', function (event) {
if (event.key === 'a' || event.key === "A") {
    colors = "pink";
    boxStyle.style.backgroundColor = colors;
} else if (event.key === 's' || event.key === "S") {
    colors = "orange";
    boxStyle.style.backgroundColor = colors;
} else if (event.key === 'd' || event.key === "D") {
    colors = "lightblue";
    boxStyle.style.backgroundColor = colors;
}
})