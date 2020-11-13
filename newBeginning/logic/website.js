// clock
document.addEventListener('DOMContentLoaded', startTime);

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('timer').innerHTML =
    h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}


// nav drop link
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

//the alerts
function homeAlert() {
  alert('you are already at home silly!');
}
function newsAlert() {
  alert('There is no news');
}

//preloader
document.addEventListener('DOMContentLoaded', prefunction);

function prefunction() {
  setTimeout(
    function () {
      document.getElementById("loading").style.display = 'none';
    }
    , 1000);
}




// close X
var x = document.getElementById("button");
var everythang = document.getElementById('myBut')
x.addEventListener("click", close);
function close() {
  if (everythang.style.display == "none") {
    everythang.style.display = "block";
  } else {
    everythang.style.display = 'none';
  }
}

var op = document.getElementById("open");
op.addEventListener("click", open);
function open() {
  if (everythang.style.display == 'block') {
    everythang.style.display = 'none';
  } else {
    everythang.style.display = 'block';
  }
}




//Make the DIV element drag
// document.addEventListener('DOMContentLoaded', dragElement);
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function openSnake() {
  // if (openSnake()) {
  document.getElementById("gd").style.display = "block";
  document.getElementById("snakeCanvas").style.display = "block";

  // }
}