{/* <p id="demo">A Paragraph.</p> //id replaces original when event happens

//activates the event
<button type="button" onclick="myFunction()">Try it</button> */}

// activated through id="demo" inside the class
//same with id="demo2"
var screen =1;
var numberOfPages = 6;
var rh = 55;
var rw = 86;
var cr = 50;



function setup() {
    // put setup code here
    var canv = createCanvas(600,520);
    // make div#canvas-container the parent of the created canvas
    canv.parent("canvas-container");
    background(150);
    frameRate(20);
  }

function preload() {
    defaultimg = loadImage('images/t1default.PNG');
    t1c1 = loadImage('images/t1c1.PNG');
    t1c2 = loadImage('images/t1c2.PNG');
    t1c3 = loadImage('images/t1c3.PNG');
    t1c4 = loadImage('images/t1c4.PNG');
    t1c5 = loadImage('images/t1c5.PNG');
    c1 = loadImage('images/c1.PNG');
    c2 = loadImage('images/c2.PNG');
    c3 = loadImage('images/c3.PNG');
    c4 = loadImage('images/c4.PNG');
    c5 = loadImage('images/c5.PNG');
  }
  
function draw () {
  if (screen ==1) {
      background(230, 211, 211);
      image (defaultimg,0,0);
      text (mouseX,0,30);
      text (mouseY,0,60);

      if (mouseX>13 && mouseX<13+rw && mouseY>125 && mouseY<125+rh) { //hover over c1
        image (t1c1,0,0); 
        //include an image map //usemap:"#map1"
        //for html, image (src="something.png" att="something" usemap:"#map1")
        screen=2
      } else if (mouseX>127 && mouseX<127+rw && mouseY>125 && mouseY<125+rh) {
        image(t1c2,0,0);
        screen=3
      } else if (mouseX>241 && mouseX<241+rw && mouseY>125 && mouseY<125+rh) {
        image(t1c3,0,0);
        screen=4
      } else if (mouseX>360 && mouseX<360+rw && mouseY>125 && mouseY<125+rh) {
        image(t1c4,0,0);
        screen=5
      } else if (mouseX>474 && mouseX<474+rw && mouseY>125 && mouseY<125+rh) {
        image(t1c5,0,0);
        screen=6
      }

  } else if (screen==2) { //frozenfood
    image(c1,0,185);
    if (mouseX>127 && mouseX<474+rw && mouseY>125 && mouseY<125+rh) {screen=1}
    

  } else if (screen==3) {
    image(c2,0,185);
    if (mouseX>241 && mouseX<474+rw && mouseY>125 && mouseY<125+rh) {screen=1}
    if (mouseX>13 && mouseX<13+rw && mouseY>125 && mouseY<125+rh) {screen=1}

  } else if (screen==4) {
    image(c3,0,185);
    if (mouseX>360 && mouseX<474+rw && mouseY>125 && mouseY<125+rh) {screen=1}
    if (mouseX>13 && mouseX<127+rw && mouseY>125 && mouseY<125+rh) {screen=1}

  } else if (screen==5) {
    image(c4,0,185);
    if (mouseX>474 && mouseX<474+rw && mouseY>125 && mouseY<125+rh) {screen=1}
    if (mouseX>13 && mouseX<241+rw && mouseY>125 && mouseY<125+rh) {screen=1}

  } else if (screen==6) {
    image(c5,0,185);
    if (mouseX>13 && mouseX<360+rw && mouseY>125 && mouseY<125+rh) {screen=1}
  }
  print (screen);
}

// function showCoords(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     var coords = "X coords: " + x + ", Y coords: " + y;
//     document.getElementById("demo").innerHTML = coords;
//   }

//   document.getElementById("img").addEventListener("mouseover", changeimage);
//   document.getElementById("img").addEventListener("mouseleave", changeimage2);
// function changeimage() {
//    document.getElementById("img").src = "images/t1c1.PNG";
// }
//  function changeimage2() {
//    document.getElementById("img").src = "images/t1default.PNG";
// }


function showPic(area) { //area is the element
    var tier2 = area.getAttribute("id"); //get the attribute from 
    var placeholder = getElementById('placeholder') ; //the ID is 
    if (tier2 = 'frozenfood') {
        placeholder.src= "someimage.PNG".getElementById("getpic").usemap = "#map1";
    }

  }


  const freshfood = document.getElementById('freshfood') ;
  freshfood.onmouseover=function() {
      showPic(freshfood);
  }
  

function validate()
{
    //get the values of username textbox
    if (document.getElementById("uName").value == "") {
        alert("Please enter your Name.");
        return false; 
    }
    if (document.getElementById("uAddress").value == "") {
        alert("Please enter your Address.");
        return false; 
    }
    if (document.getElementById("uState").value == "") {
        alert("Please enter your State.");
        return false; 
    }
    if (document.getElementById("uAddress").value == "") {
        alert("Please enter your Country.");
        return false; 
    } if (document.getElementById("uSuburb").value == "") {
        alert("Please enter your Surburb.");
        return false; 
    }
    if (document.getElementById("uEmail").value==""){
        alert("Please enter your Email.");
        return false;
    }
    return true;
}

function emailIsValid (uEmail) {
    alert("Please enter a valid email address with @.");
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(uEmail)
}
