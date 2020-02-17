var img0 = document.getElementById("large");
var img1 = document.getElementById("small1");
var img2 = document.getElementById("small2");
var img3 = document.getElementById("small3");
var img4 = document.getElementById("small4");
var img5 = document.getElementById("small5");
var caption = document.getElementById("fig");
caption.innerText = "Flowers Pink";
img1.style.border = "2px solid blue";

img1.onclick = function() {
  remove();
  img0.src = "images/flowers-pink-large.jpg";
  img1.style.border = "2px solid blue";
  caption.innerText = "flowers Pink";
};
img2.onclick = function() {
  remove();
  img0.src = "images/flowers-red-large.jpg";
  img2.style.border = "2px solid blue";
  caption.innerText = "flowers red";
};
img3.onclick = function() {
  img0.src = "images/flowers-white-large.jpg";
  img3.style.border = "2px solid blue";
  caption.innerText = "flowers White";
};
img4.onclick = function() {
  img0.src = "images/flowers-yellow-large.jpg";
  img4.style.border = "2px solid blue";
  caption.innerText = "flowers yellow";
};
img5.onclick = function() {
  img0.src = "images/flowers-purple-large.jpg";
  img5.style.border = "2px solid blue";
  caption.innerText = "flowers purple";
};
function remove() {
  img1.style.border = "";
  img2.style.border = "";
  img3.style.border = "";
  img4.style.border = "";
  img5.style.border = "";
}
