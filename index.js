const parent = document.querySelector('.square-parent');
const btn = document.querySelector('.reset-button');
const body = document.querySelector('body');

const black = document.querySelector('#black');
const white = document.querySelector('#white');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const convertImage = document.querySelector('#convert-image');

var squaremousedown = false;
var selectedColor = "black";

black.addEventListener("click", function(e) {
    black.style.border = "2px solid black";
    green.style.border = "1px solid black";
    blue.style.border = "1px solid black";
    red.style.border = "1px solid black";
    white.style.border = "1px solid black";
    selectedColor = "black";
});

white.addEventListener("click", function(e) {
    black.style.border = "1px solid black";
    green.style.border = "1px solid black";
    blue.style.border = "1px solid black";
    red.style.border = "1px solid black";
    white.style.border = "2px solid black";
    selectedColor = "white";
});

red.addEventListener("click", function(e) {
    black.style.border = "1px solid black";
    green.style.border = "1px solid black";
    blue.style.border = "1px solid black";
    red.style.border = "2px solid black";
    white.style.border = "1px solid black";
    selectedColor = "red";
});

green.addEventListener("click", function(e) {
    black.style.border = "1px solid black";
    green.style.border = "2px solid black";
    blue.style.border = "1px solid black";
    red.style.border = "1px solid black";
    white.style.border = "1px solid black";
    selectedColor = "green";
});

blue.addEventListener("click", function(e) {
    black.style.border = "1px solid black";
    green.style.border = "1px solid black";
    blue.style.border = "2px solid black";
    red.style.border = "1px solid black";
    white.style.border = "1px solid black";
    selectedColor = "blue";
});

body.onmousedown = function(e) {
    e.preventDefault();
    squaremousedown = true;
}

body.onmouseup = function() {
    squaremousedown = false;
}

for(let i = 0;i < 256;i++) {
    var div = document.createElement('div');
    div.style.height = "10px";
    div.style.width = "10px";
    div.addEventListener("mouseover", function(e) {
        if(squaremousedown)
            e.target.style.backgroundColor = selectedColor;
    });
    parent.appendChild(div);
}

btn.addEventListener("click", function() {
    let numBox = prompt("Enter number of boxes");
    if(numBox) {
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        parent.style.width = "" + (numBox * 10) + "px";
        parent.style.height = "" + (numBox * 10) + "px";
        for(let i = 0;i < numBox * numBox;i++) {
            var div = document.createElement('div');
            div.style.height = "10px";
            div.style.width = "10px";
            div.addEventListener("mouseover", function(e) {
                if(squaremousedown)
                    e.target.style.backgroundColor = selectedColor;
            });
            parent.appendChild(div);
        }
    }
});

var element = $('.square-parent'); // global variable
var getCanvas; // global variable
$("#Preview-Image-Button").on('click', function() {
    html2canvas(element, {
        onrendered: function(canvas) {
            $("#previewImage").append(canvas);
            getCanvas = canvas;
        }
    });
});
$("#convert-image").on('click', function () {
  var imageData = getCanvas.toDataURL("image/png");
  // Now browser starts downloading it instead of just showing it
  var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
  $("#convert-image").attr("download", "image.png").attr("href", newData);
});